/*
  Interactive y = ax² + bx + c plotter.
  Maths mode   — roots, vertex, discriminant.
  Add Maths    — draggable point with its tangent line and dy/dx.
*/

const INK = '#111110';
const SIGNAL = '#ff4d1a';
const COBALT = '#1f3bd1';
const MINUS = '−';

const fmt = (n, d = 2) => {
  const v = Math.abs(n) < 0.005 ? 0 : n;
  const s = Number(v.toFixed(d)).toString();
  return s.replace('-', MINUS);
};

function equation(a, b, c) {
  const term = (coef, sym, first) => {
    if (Math.abs(coef) < 0.05) return '';
    const sign = coef < 0 ? (first ? MINUS : ` ${MINUS} `) : first ? '' : ' + ';
    const mag = Math.abs(coef);
    const num = sym && Math.abs(mag - 1) < 0.05 ? '' : fmt(mag, 1);
    return sign + num + sym;
  };
  let s = term(a, 'x²', true);
  s += term(b, 'x', s === '');
  s += term(c, '', s === '');
  return 'y = ' + (s || '0');
}

export function createPlotter() {
  const canvas = document.getElementById('plot');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const inputs = { a: document.getElementById('in-a'), b: document.getElementById('in-b'), c: document.getElementById('in-c') };
  const outs = { a: document.getElementById('out-a'), b: document.getElementById('out-b'), c: document.getElementById('out-c') };
  const el = {
    eq: document.getElementById('plot-eq'),
    disc: document.getElementById('r-disc'),
    roots: document.getElementById('r-roots'),
    vertex: document.getElementById('r-vertex'),
    extraLabel: document.getElementById('r-extra-label'),
    extra: document.getElementById('r-extra'),
    hint: document.getElementById('plot-hint'),
  };

  const target = { a: 1, b: -2, c: -3 };
  const cur = { ...target };
  let mode = 'maths';
  let px = 2.5;          // x of tangent point
  let pxDraw = px;
  let dragging = false;
  let hovering = false;
  let W = 0, H = 0, dpr = 1;
  let scale = 40;        // pixels per unit
  let ox = 0, oy = 0;    // origin in px
  let modeT = 0;         // 0 maths → 1 add maths (animated)
  let visible = true;

  const toPx = (x, y) => [ox + x * scale, oy - y * scale];
  const toX = (sx) => (sx - ox) / scale;
  const f = (x) => cur.a * x * x + cur.b * x + cur.c;

  function resize() {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio, 2);
    W = r.width; H = r.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    scale = Math.max(22, Math.min(W / 16, H / 12));
    ox = W / 2; oy = H * 0.55;
  }
  new ResizeObserver(resize).observe(canvas);

  function setFill(input) {
    const p = ((input.value - input.min) / (input.max - input.min)) * 100;
    input.style.setProperty('--fill', p + '%');
  }

  for (const k of ['a', 'b', 'c']) {
    setFill(inputs[k]);
    inputs[k].addEventListener('input', () => {
      target[k] = parseFloat(inputs[k].value);
      outs[k].textContent = fmt(target[k], 1);
      setFill(inputs[k]);
      updateReadouts();
    });
  }

  document.querySelectorAll('[data-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      mode = btn.dataset.mode;
      document.querySelectorAll('[data-mode]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      updateReadouts();
    });
  });

  // Drag the tangent point
  const pointerX = (e) => {
    const r = canvas.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  };
  canvas.addEventListener('pointerdown', (e) => {
    if (mode !== 'add') return;
    const [sx] = pointerX(e);
    dragging = true;
    px = toX(sx);
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    const [sx, sy] = pointerX(e);
    if (dragging) { px = Math.max(-7.5, Math.min(7.5, toX(sx))); updateReadouts(); return; }
    const [qx, qy] = toPx(pxDraw, f(pxDraw));
    hovering = mode === 'add' && Math.hypot(sx - qx, sy - qy) < 24;
    canvas.style.cursor = mode === 'add' ? (hovering ? 'grab' : 'crosshair') : '';
  });
  const endDrag = () => { dragging = false; };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);

  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { rootMargin: '100px' }).observe(canvas);

  function updateReadouts() {
    const { a, b, c } = target;
    el.eq.textContent = equation(a, b, c);
    const D = b * b - 4 * a * c;
    // relabel the readout cells per mode
    const labels = mode === 'maths' ? ['Discriminant', 'Roots', 'Vertex'] : ['Discriminant', 'Point', 'dy/dx'];
    document.querySelectorAll('#playground dl dt').forEach((dt, i) => { if (i < 3) dt.textContent = labels[i]; });

    if (mode === 'maths') {
      el.disc.textContent = fmt(D);
      if (Math.abs(a) < 0.05) {
        el.roots.textContent = Math.abs(b) < 0.05 ? '—' : fmt(-c / b);
        el.vertex.textContent = 'none';
        el.extraLabel.textContent = 'Nature';
        el.extra.textContent = 'linear';
        el.hint.textContent = 'With a = 0 there is no x² term, so it is a straight line, not a parabola.';
        return;
      }
      const vx = -b / (2 * a);
      el.vertex.textContent = `(${fmt(vx)}, ${fmt(a * vx * vx + b * vx + c)})`;
      el.extraLabel.textContent = 'Nature';
      if (D > 0.0001) {
        const r1 = (-b - Math.sqrt(D)) / (2 * a), r2 = (-b + Math.sqrt(D)) / (2 * a);
        el.roots.textContent = `${fmt(Math.min(r1, r2))}, ${fmt(Math.max(r1, r2))}`;
        el.extra.textContent = '2 real roots';
        el.hint.textContent = 'b² − 4ac > 0, so the curve crosses the x-axis twice.';
      } else if (D > -0.0001) {
        el.roots.textContent = fmt(-b / (2 * a));
        el.extra.textContent = 'repeated root';
        el.hint.textContent = 'b² − 4ac = 0, so the vertex just touches the x-axis.';
      } else {
        el.roots.textContent = 'none (real)';
        el.extra.textContent = 'no real roots';
        el.hint.textContent = 'b² − 4ac < 0, so the curve never reaches the x-axis.';
      }
    } else {
      const y0 = a * px * px + b * px + c;
      const m = 2 * a * px + b;
      el.disc.textContent = fmt(D);
      el.roots.textContent = `(${fmt(px)}, ${fmt(y0)})`;
      el.vertex.textContent = `${fmt(m)}`;
      el.extraLabel.textContent = 'Tangent';
      el.extra.textContent = `y = ${fmt(m)}x ${y0 - m * px < 0 ? MINUS : '+'} ${fmt(Math.abs(y0 - m * px))}`;
      el.hint.textContent = Math.abs(m) < 0.05
        ? 'dy/dx = 0 — you are on the turning point. That is how differentiation finds a vertex.'
        : `dy/dx = 2ax + b = ${fmt(m)} here. Drag the orange point along the curve.`;
    }
  }

  function grid() {
    ctx.lineWidth = 1;
    const x0 = Math.floor(-ox / scale), x1 = Math.ceil((W - ox) / scale);
    const y0 = Math.floor(-(H - oy) / scale), y1 = Math.ceil(oy / scale);
    for (let i = x0; i <= x1; i++) {
      ctx.strokeStyle = i % 5 === 0 ? 'rgba(17,17,16,.12)' : 'rgba(17,17,16,.05)';
      const [sx] = toPx(i, 0);
      ctx.beginPath(); ctx.moveTo(sx + 0.5, 0); ctx.lineTo(sx + 0.5, H); ctx.stroke();
    }
    for (let j = y0; j <= y1; j++) {
      ctx.strokeStyle = j % 5 === 0 ? 'rgba(17,17,16,.12)' : 'rgba(17,17,16,.05)';
      const [, sy] = toPx(0, j);
      ctx.beginPath(); ctx.moveTo(0, sy + 0.5); ctx.lineTo(W, sy + 0.5); ctx.stroke();
    }
    // axes
    ctx.strokeStyle = INK; ctx.lineWidth = 1.25;
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke();
    ctx.fillStyle = 'rgba(17,17,16,.55)';
    ctx.font = '11px "JetBrains Mono", monospace';
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let i = x0; i <= x1; i++) if (i && i % 2 === 0) { const [sx] = toPx(i, 0); ctx.fillText(String(i).replace('-', MINUS), sx, oy + 6); }
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (let j = y0; j <= y1; j++) if (j && j % 2 === 0) { const [, sy] = toPx(0, j); ctx.fillText(String(j).replace('-', MINUS), ox - 6, sy); }
    ctx.textAlign = 'left'; ctx.fillText('x', W - 14, oy - 10);
    ctx.textBaseline = 'top'; ctx.fillText('y', ox + 8, 8);
  }

  function dot(x, y, color, r = 5, ring = false) {
    const [sx, sy] = toPx(x, y);
    if (ring) {
      ctx.beginPath(); ctx.arc(sx, sy, r + 6, 0, Math.PI * 2);
      ctx.fillStyle = color + '22'; ctx.fill();
    }
    ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
    ctx.lineWidth = 2; ctx.strokeStyle = '#efebe1'; ctx.stroke();
  }

  function label(x, y, text, color, dx = 10, dy = -12) {
    const [sx, sy] = toPx(x, y);
    ctx.font = '12px "JetBrains Mono", monospace';
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    const w = ctx.measureText(text).width + 12;
    ctx.fillStyle = '#efebe1'; ctx.fillRect(sx + dx - 6, sy + dy - 10, w, 20);
    ctx.fillStyle = color; ctx.fillText(text, sx + dx, sy + dy);
  }

  let t = 0;
  function draw() {
    requestAnimationFrame(draw);
    if (!visible || !W) return;
    t += 1 / 60;
    for (const k of ['a', 'b', 'c']) cur[k] += (target[k] - cur[k]) * 0.14;
    pxDraw += (px - pxDraw) * (dragging ? 0.5 : 0.14);
    modeT += ((mode === 'add' ? 1 : 0) - modeT) * 0.12;

    ctx.clearRect(0, 0, W, H);
    grid();

    // curve
    ctx.beginPath();
    for (let sx = 0; sx <= W; sx += 1.5) {
      const x = toX(sx); const [, sy] = toPx(x, f(x));
      sx === 0 ? ctx.moveTo(sx, sy) : ctx.lineTo(sx, sy);
    }
    ctx.strokeStyle = INK; ctx.lineWidth = 2.5; ctx.lineJoin = 'round'; ctx.stroke();

    const { a, b, c } = cur;
    const alphaM = 1 - modeT, alphaA = modeT;

    if (alphaM > 0.02) {
      ctx.globalAlpha = alphaM;
      if (Math.abs(a) > 0.05) {
        const vx = -b / (2 * a), vy = f(vx);
        // axis of symmetry
        ctx.setLineDash([4, 6]); ctx.strokeStyle = COBALT; ctx.lineWidth = 1;
        const [sx] = toPx(vx, 0);
        ctx.beginPath(); ctx.moveTo(sx, 0); ctx.lineTo(sx, H); ctx.stroke(); ctx.setLineDash([]);
        dot(vx, vy, COBALT, 5, true);
        label(vx, vy, `(${fmt(vx, 1)}, ${fmt(vy, 1)})`, COBALT, 12, a > 0 ? 18 : -18);
        const D = b * b - 4 * a * c;
        if (D >= 0) {
          const s = Math.sqrt(D);
          const roots = D < 1e-4 ? [vx] : [(-b - s) / (2 * a), (-b + s) / (2 * a)];
          const pulse = 1 + Math.sin(t * 4) * 0.25;
          roots.forEach((r) => dot(r, 0, SIGNAL, 5 * pulse, true));
        }
      } else if (Math.abs(b) > 0.05) {
        dot(-c / b, 0, SIGNAL, 5, true);
      }
      ctx.globalAlpha = 1;
    }

    if (alphaA > 0.02) {
      ctx.globalAlpha = alphaA;
      const y0 = f(pxDraw), m = 2 * a * pxDraw + b;
      const L = 40;
      const [x1, y1] = toPx(pxDraw - L, y0 - m * L);
      const [x2, y2] = toPx(pxDraw + L, y0 + m * L);
      ctx.strokeStyle = SIGNAL; ctx.lineWidth = 1.75; ctx.setLineDash([8, 6]);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); ctx.setLineDash([]);
      // rise/run triangle
      const [sxa, sya] = toPx(pxDraw, y0);
      const [sxb, syb] = toPx(pxDraw + 1, y0 + m);
      ctx.strokeStyle = 'rgba(255,77,26,.5)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(sxa, sya); ctx.lineTo(sxb, sya); ctx.lineTo(sxb, syb); ctx.stroke();
      dot(pxDraw, y0, SIGNAL, hovering || dragging ? 8 : 6, true);
      label(pxDraw, y0, `m = ${fmt(m, 2)}`, SIGNAL, 14, -18);
      ctx.globalAlpha = 1;
    }
  }

  resize();
  updateReadouts();
  draw();
}
