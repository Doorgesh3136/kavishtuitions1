import * as THREE from 'three';

/*
  A wireframe function surface z = f(x, y), displaced on the GPU.
  Four functions are blended with a single `morph` value (0 → 3) that the
  scroll timeline drives. An orange point rides the surface; on the final
  surface it settles on the turning point (the maximum of the Gaussian).
*/

const SIZE = 10;        // world units across
const LINES = 56;       // grid lines per direction
const SAMPLES = 160;    // samples along each line

// CPU copies of the shader functions so the rider can sit on the surface.
const smooth = (t) => t * t * (3 - 2 * t);
const clamp01 = (v) => Math.min(1, Math.max(0, v));
function heightAt(x, y, t, m) {
  const f0 = Math.sin(x * 1.1 + t * 0.6) * Math.cos(y * 1.1 + t * 0.4) * 1.1;
  const f1 = (x * x - y * y) * 0.065;
  const r = Math.hypot(x, y);
  const f2 = (Math.sin(r * 2.2 - t * 1.5) * 1.4) / (1 + r * 0.6);
  const f3 = Math.exp(-(x * x + y * y) * 0.12) * 2.4 - 0.4;
  let h = f0 + (f1 - f0) * smooth(clamp01(m));
  h = h + (f2 - h) * smooth(clamp01(m - 1));
  h = h + (f3 - h) * smooth(clamp01(m - 2));
  return h;
}

const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  uniform vec2  uMouse;
  uniform float uMouseAmt;
  uniform float uIntro;
  varying float vH;
  varying float vFade;

  float f0(vec2 p){ return sin(p.x*1.1 + uTime*.6) * cos(p.y*1.1 + uTime*.4) * 1.1; }
  float f1(vec2 p){ return (p.x*p.x - p.y*p.y) * .065; }
  float f2(vec2 p){ float r = length(p); return sin(r*2.2 - uTime*1.5) * 1.4 / (1. + r*.6); }
  float f3(vec2 p){ return exp(-dot(p,p) * .12) * 2.4 - .4; }

  void main(){
    vec3 pos = position;
    vec2 p = pos.xz;
    float h = mix(f0(p), f1(p), smoothstep(0., 1., clamp(uMorph, 0., 1.)));
    h = mix(h, f2(p), smoothstep(0., 1., clamp(uMorph - 1., 0., 1.)));
    h = mix(h, f3(p), smoothstep(0., 1., clamp(uMorph - 2., 0., 1.)));

    float md = distance(p, uMouse);
    h += exp(-md*md*.9) * .8 * uMouseAmt;

    // intro: surface rises out of a flat sheet, from the centre outward
    float r = length(p);
    float grow = smoothstep(r - 1.5, r, uIntro * 7.5);
    h *= grow;

    pos.y = h;
    vH = h;
    vFade = (1. - smoothstep(3.6, 5.0, r)) * grow;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  }
`;

const fragment = /* glsl */ `
  uniform vec3 uInk;
  uniform vec3 uAccent;
  uniform float uOpacity;
  varying float vH;
  varying float vFade;
  void main(){
    float t = smoothstep(.2, 1.9, vH);
    vec3 col = mix(uInk, uAccent, t);
    float a = vFade * uOpacity * (.32 + .68 * t);
    gl_FragColor = vec4(col, a);
  }
`;

function buildGridGeometry() {
  const half = SIZE / 2;
  const segs = (LINES + 1) * 2 * (SAMPLES - 1);
  const pos = new Float32Array(segs * 2 * 3);
  let k = 0;
  const push = (x, z) => { pos[k++] = x; pos[k++] = 0; pos[k++] = z; };
  for (let i = 0; i <= LINES; i++) {
    const c = -half + (i / LINES) * SIZE;
    for (let j = 0; j < SAMPLES - 1; j++) {
      const a = -half + (j / (SAMPLES - 1)) * SIZE;
      const b = -half + ((j + 1) / (SAMPLES - 1)) * SIZE;
      push(a, c); push(b, c);   // along x
      push(c, a); push(c, b);   // along z
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  return g;
}

export function createScene(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 8.5, 17);
  camera.lookAt(0, 0, 0);

  const root = new THREE.Group();
  scene.add(root);
  const tilt = new THREE.Group();   // mouse parallax lives here
  root.add(tilt);
  const spin = new THREE.Group();   // scroll + idle rotation lives here
  tilt.add(spin);

  const uniforms = {
    uTime: { value: 0 },
    uMorph: { value: 0 },
    uMouse: { value: new THREE.Vector2(99, 99) },
    uMouseAmt: { value: 0 },
    uIntro: { value: 0 },
    uOpacity: { value: 1 },
    uInk: { value: new THREE.Color('#111110') },
    uAccent: { value: new THREE.Color('#ff4d1a') },
  };

  const surface = new THREE.LineSegments(
    buildGridGeometry(),
    new THREE.ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, uniforms, transparent: true, depthWrite: false })
  );
  spin.add(surface);

  // Axes
  const axisMat = new THREE.LineBasicMaterial({ color: 0x111110, transparent: true, opacity: 0.55 });
  const axes = new THREE.LineSegments(
    new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-5.6, 0, 0), new THREE.Vector3(5.6, 0, 0),
      new THREE.Vector3(0, -1.5, 0), new THREE.Vector3(0, 3.4, 0),
      new THREE.Vector3(0, 0, -5.6), new THREE.Vector3(0, 0, 5.6),
    ]),
    axisMat
  );
  spin.add(axes);

  // Rider point + drop line + trail
  const rider = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 24, 24),
    new THREE.MeshBasicMaterial({ color: 0xff4d1a, transparent: true })
  );
  const halo = new THREE.Mesh(
    new THREE.RingGeometry(0.22, 0.26, 48),
    new THREE.MeshBasicMaterial({ color: 0xff4d1a, transparent: true, opacity: 0.6, side: THREE.DoubleSide })
  );
  spin.add(rider, halo);

  const dropGeom = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
  const drop = new THREE.Line(dropGeom, new THREE.LineDashedMaterial({ color: 0xff4d1a, dashSize: 0.1, gapSize: 0.08, transparent: true, opacity: 0.8 }));
  spin.add(drop);

  const TRAIL = 90;
  const trailPos = new Float32Array(TRAIL * 3);
  const trailGeom = new THREE.BufferGeometry();
  trailGeom.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
  const trail = new THREE.Line(trailGeom, new THREE.LineBasicMaterial({ color: 0xff4d1a, transparent: true, opacity: 0.45 }));
  spin.add(trail);
  let trailPrimed = false;

  // Shared state — GSAP tweens these values directly.
  const state = {
    morph: 0,
    intro: 0,
    opacity: 1,
    x: 0, y: 0,           // root offset (world units)
    rotY: -0.5,           // scroll-driven yaw
    scale: 1,
    active: true,         // pause rendering when off-screen
  };

  // Pointer → plane intersection for the bump
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2(9, 9);
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const hit = new THREE.Vector3();
  const mouseLocal = new THREE.Vector2(99, 99);
  let mouseAmtTarget = 0;
  const parallax = { x: 0, y: 0, tx: 0, ty: 0 };

  window.addEventListener('pointermove', (e) => {
    ndc.x = (e.clientX / window.innerWidth) * 2 - 1;
    ndc.y = -(e.clientY / window.innerHeight) * 2 + 1;
    parallax.tx = ndc.x;
    parallax.ty = ndc.y;
    mouseAmtTarget = 1;
  }, { passive: true });
  document.addEventListener('pointerleave', () => { mouseAmtTarget = 0; });

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // keep the surface comfortably in frame on tall phones
    camera.fov = w / h < 0.8 ? 48 : 32;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  let last = performance.now();
  let elapsed = 0;
  const tmpMat = new THREE.Matrix4();

  function frame() {
    requestAnimationFrame(frame);
    const now = performance.now();
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!state.active) return;
    elapsed += dt;
    const t = elapsed;

    uniforms.uTime.value = t;
    uniforms.uMorph.value = state.morph;
    uniforms.uIntro.value = state.intro;
    uniforms.uOpacity.value = state.opacity;

    root.position.set(state.x, state.y, 0);
    root.scale.setScalar(state.scale);
    spin.rotation.y = state.rotY + t * 0.04;

    parallax.x += (parallax.tx - parallax.x) * 0.04;
    parallax.y += (parallax.ty - parallax.y) * 0.04;
    tilt.rotation.x = -parallax.y * 0.08;
    tilt.rotation.z = parallax.x * 0.05;

    // Mouse bump in the surface's local coordinates
    scene.updateMatrixWorld();
    raycaster.setFromCamera(ndc, camera);
    if (raycaster.ray.intersectPlane(plane, hit)) {
      tmpMat.copy(spin.matrixWorld).invert();
      hit.applyMatrix4(tmpMat);
      mouseLocal.lerp(new THREE.Vector2(hit.x, hit.z), 0.12);
    }
    uniforms.uMouse.value.copy(mouseLocal);
    uniforms.uMouseAmt.value += (mouseAmtTarget * (1 - smooth(clamp01(state.morph - 2))) - uniforms.uMouseAmt.value) * Math.min(1, dt * 4);

    // Rider: a Lissajous path that collapses onto the origin (the maximum) for the last surface
    const settle = smooth(clamp01(state.morph - 2.2));
    const rx = Math.sin(t * 0.45) * 3.0 * (1 - settle);
    const rz = Math.sin(t * 0.31 + 1.3) * 3.0 * (1 - settle);
    const ry = heightAt(rx, rz, t, state.morph) * smooth(clamp01(state.intro * 1.3 - 0.3));
    rider.position.set(rx, ry + 0.13, rz);
    halo.position.copy(rider.position);
    halo.lookAt(camera.position);
    halo.scale.setScalar(1 + Math.sin(t * 3) * 0.15);
    const vis = clamp01(state.intro * 2 - 1) * state.opacity;
    rider.material.opacity = vis;
    halo.material.opacity = vis * 0.6;
    drop.material.opacity = vis * 0.8;
    trail.material.opacity = vis * 0.45;
    axisMat.opacity = 0.55 * state.opacity * clamp01(state.intro * 1.5);

    const dp = dropGeom.attributes.position.array;
    dp[0] = rx; dp[1] = 0; dp[2] = rz; dp[3] = rx; dp[4] = ry; dp[5] = rz;
    dropGeom.attributes.position.needsUpdate = true;
    drop.computeLineDistances();

    if (!trailPrimed) {
      for (let i = 0; i < TRAIL; i++) trailPos.set([rx, ry, rz], i * 3);
      trailPrimed = true;
    }
    trailPos.copyWithin(3, 0, (TRAIL - 1) * 3);
    trailPos[0] = rx; trailPos[1] = ry + 0.02; trailPos[2] = rz;
    trailGeom.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  frame();

  return { state };
}
