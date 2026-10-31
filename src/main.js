import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { createScene } from './scene.js';
import { createPlotter } from './plotter.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ------------------------------------------------------------------ */
/*  Smooth scroll                                                      */
/* ------------------------------------------------------------------ */
let lenis = null;
if (!reduceMotion) {
  lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}
window.scrollTo(0, 0);
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

$$('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = id === '#top' ? 0 : $(id);
    if (target === null) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { duration: 1.6 });
    else if (target === 0) window.scrollTo(0, 0);
    else target.scrollIntoView();
  });
});

/* ------------------------------------------------------------------ */
/*  3D scene                                                           */
/* ------------------------------------------------------------------ */
const { state: scene } = createScene($('#gl'));
scene.intro = 0;

/* ------------------------------------------------------------------ */
/*  Loader                                                             */
/* ------------------------------------------------------------------ */
function buildLoaderCurve() {
  const W = 560, MID = 110, AMP = 92, X_MAX = Math.PI * 5;
  let d = '';
  for (let i = 0; i <= 280; i++) {
    const x = (i / 280) * X_MAX;
    const y = Math.sin(x) * Math.exp(-x / 6);
    d += `${i ? 'L' : 'M'}${((i / 280) * W).toFixed(2)} ${(MID - y * AMP).toFixed(2)} `;
  }
  $('#loader-curve').setAttribute('d', d);
  const ticks = $('#loader .ticks');
  for (let x = 0; x <= W; x += 35) {
    ticks.insertAdjacentHTML('beforeend', `<line class="tick" x1="${x}" y1="${MID - 4}" x2="${x}" y2="${MID + 4}"/>`);
  }
}

function runLoader() {
  buildLoaderCurve();
  const path = $('#loader-curve');
  const pen = $('#loader-pen');
  const count = $('#loader-count');
  const msg = $('#loader-msg');
  const total = path.getTotalLength();
  const messages = ['Sharpening pencils', 'Finding x', 'Completing the square', 'Rationalising denominators', 'Checking the units', 'Showing working'];
  const p = { v: 0 };

  return new Promise((resolve) => {
    const fonts = document.fonts?.ready ?? Promise.resolve();
    const tl = gsap.timeline();
    tl.to(p, {
      v: 100,
      duration: reduceMotion ? 0.3 : 2.6,
      ease: 'power2.inOut',
      onUpdate() {
        const v = p.v / 100;
        path.style.strokeDashoffset = String(1 - v);
        const pt = path.getPointAtLength(total * v);
        pen.setAttribute('cx', pt.x);
        pen.setAttribute('cy', pt.y);
        count.textContent = String(Math.round(p.v)).padStart(2, '0');
        msg.textContent = messages[Math.min(messages.length - 1, Math.floor(v * messages.length))];
      },
    });
    Promise.all([fonts, new Promise((r) => tl.eventCallback('onComplete', r))]).then(() => {
      msg.textContent = 'Q.E.D.';
      resolve();
    });
  });
}

/* ------------------------------------------------------------------ */
/*  Intro (after loader)                                               */
/* ------------------------------------------------------------------ */
function intro() {
  const heroSplit = SplitText.create('.hero-title', { type: 'lines', mask: 'lines', linesClass: 'split-line' });
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

  tl.to('#loader', { clipPath: 'inset(0 0 100% 0)', duration: 1.3, ease: 'expo.inOut' })
    .set('#loader', { display: 'none' })
    .from(heroSplit.lines, { yPercent: 110, duration: 1.4, stagger: 0.09 }, '-=0.55')
    .to('#gl', { opacity: 1, duration: 1.2, ease: 'power2.out' }, '<')
    .to(scene, { intro: 1, duration: 2.6, ease: 'power3.out' }, '<')
    .from('.hero-meta > *', { y: 20, opacity: 0, duration: 1, stagger: 0.06 }, '<+0.25')
    .from('.hero-sub', { y: 30, opacity: 0, duration: 1.2 }, '<+0.1')
    .from('.hero-cta > *', { y: 30, opacity: 0, duration: 1.2, stagger: 0.08 }, '<+0.1')
    .to('#nav', { opacity: 1, duration: 1 }, '<')
    .from('.hero-scroll', { opacity: 0, duration: 1 }, '<+0.2')
    .add(() => {
      document.body.classList.remove('is-loading');
      lenis?.start();
      ScrollTrigger.refresh();
    }, 1.6);

  gsap.to('.scroll-dot', { y: 32, duration: 1.4, repeat: -1, ease: 'power2.inOut', yoyo: true });
}

/* ------------------------------------------------------------------ */
/*  Scroll choreography                                                */
/* ------------------------------------------------------------------ */
function scrollScenes() {
  const mm = gsap.matchMedia();

  mm.add({ desktop: '(min-width: 768px)', mobile: '(max-width: 767px)' }, (ctx) => {
    const { desktop } = ctx.conditions;
    // Hero framing
    gsap.set(scene, desktop ? { x: 2.9, y: 1.1, scale: 0.95, rotY: -0.5 } : { x: 0, y: 3.4, scale: 0.72, rotY: -0.5 });

    // Hero → surfaces: drift the surface into place beside the copy
    gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 } })
      .to(scene, desktop ? { x: 3.1, y: -0.1, scale: 1.08, rotY: 0.1, ease: 'none' } : { y: -3.2, scale: 0.8, rotY: 0.1, ease: 'none' }, 0)
      .to('.hero-title', { yPercent: -30, opacity: 0, ease: 'none' }, 0)
      .to('.hero-sub, .hero-cta, .hero-meta, .hero-scroll', { y: -60, opacity: 0, ease: 'none' }, 0);
  });

  // Surfaces: pinned; scroll morphs the 3D function and swaps the copy
  const eqs = $$('.surface-eq');
  const copies = $$('.surface-copy');
  const pips = $$('.surface-pip');
  let current = 0;
  const show = (i) => {
    if (i === current) return;
    const dir = i > current ? 1 : -1;
    eqs.forEach((el, k) => k !== i && gsap.to(el, { yPercent: -60 * dir, opacity: 0, duration: 0.4, ease: 'power3.in', overwrite: true }));
    copies.forEach((el, k) => k !== i && gsap.to(el, { y: -20 * dir, opacity: 0, duration: 0.35, ease: 'power2.in', overwrite: true }));
    gsap.fromTo(eqs[i], { yPercent: 60 * dir, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'expo.out', overwrite: true });
    gsap.fromTo(copies[i], { y: 24 * dir, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'expo.out', overwrite: true });
    pips.forEach((p, k) => p.classList.toggle('bg-ink', k <= i));
    pips.forEach((p, k) => p.classList.toggle('bg-ink/15', k > i));
    $('#fig-num').textContent = i + 1;
    current = i;
  };

  gsap.timeline({
    scrollTrigger: {
      trigger: '#surfaces',
      start: 'top top',
      end: '+=320%',
      pin: true,
      scrub: 1.2,
    },
    onUpdate: () => show(Math.min(3, Math.round(scene.morph))),
  })
    .to(scene, { morph: 3, ease: 'none', duration: 3 }, 0)
    .to(scene, { rotY: '+=1.4', ease: 'none', duration: 3.4 }, 0);

  // Fade the surfaces copy in as it scrolls up under the hero
  gsap.fromTo('.surfaces-col', { opacity: 0, y: 80 }, {
    opacity: 1, y: 0, ease: 'none',
    scrollTrigger: { trigger: '#surfaces', start: 'top 85%', end: 'top 15%', scrub: true },
  });

  // Stop rendering WebGL once content covers it
  ScrollTrigger.create({
    trigger: '#content',
    start: 'top top',
    onEnter: () => { scene.active = false; },
    onLeaveBack: () => { scene.active = true; },
  });

  // Section headings: line-mask reveal
  $$('.reveal-heading').forEach((el) => {
    const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
    gsap.from(split.lines, {
      yPercent: 110,
      duration: 1.3,
      stagger: 0.08,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });

  // Subject cards rise in with a slight 3D flip
  gsap.from('.subject-card', {
    y: 120, rotateX: -12, opacity: 0, transformOrigin: '50% 100%',
    duration: 1.4, stagger: 0.15, ease: 'expo.out',
    scrollTrigger: { trigger: '#subjects .grid.mt-20', start: 'top 85%' },
    clearProps: 'transform',
  });
  gsap.from('.subject-card li', {
    opacity: 0, x: -12, duration: 0.6, stagger: 0.03, ease: 'power2.out',
    scrollTrigger: { trigger: '#subjects .grid.mt-20', start: 'top 70%' },
  });

  // Counters
  $$('.count').forEach((el) => {
    const o = { v: 0 };
    gsap.to(o, {
      v: Number(el.dataset.to), duration: 1.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate: () => { el.textContent = Math.round(o.v); },
    });
  });

  // Method: horizontal scroll
  const track = $('.method-track');
  const distance = () => track.scrollWidth - window.innerWidth;
  const idx = $('.method-idx');
  const horiz = gsap.to(track, {
    x: () => -distance(),
    ease: 'none',
    scrollTrigger: {
      trigger: '#method',
      start: 'top top',
      end: () => '+=' + distance(),
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => { if (idx) idx.textContent = String(Math.min(4, Math.floor(self.progress * 3.999) + 1)).padStart(2, '0'); },
    },
  });
  $$('.method-card').forEach((card) => {
    gsap.from(card.querySelector('svg'), {
      rotate: -25, scale: 0.7, opacity: 0.2, ease: 'none',
      scrollTrigger: { trigger: card, containerAnimation: horiz, start: 'left 95%', end: 'left 45%', scrub: true },
    });
    gsap.from(card.querySelector('span'), {
      yPercent: 40, opacity: 0, ease: 'none',
      scrollTrigger: { trigger: card, containerAnimation: horiz, start: 'left 100%', end: 'left 55%', scrub: true },
    });
  });

  // Playground panel
  gsap.from('#playground .mt-16', {
    y: 80, opacity: 0, duration: 1.4, ease: 'expo.out',
    scrollTrigger: { trigger: '#playground .mt-16', start: 'top 85%' },
  });

  // Class cards
  gsap.from('.class-card', {
    y: 100, opacity: 0, duration: 1.3, stagger: 0.12, ease: 'expo.out',
    scrollTrigger: { trigger: '#classes .mt-16', start: 'top 85%' },
  });

  // FAQ rows
  gsap.from('#faq details', {
    y: 40, opacity: 0, duration: 1, stagger: 0.07, ease: 'expo.out',
    scrollTrigger: { trigger: '#faq', start: 'top 70%' },
  });

  // Contact form fields
  gsap.from('#contact-form label, #contact-form button', {
    y: 30, opacity: 0, duration: 1, stagger: 0.05, ease: 'expo.out',
    scrollTrigger: { trigger: '#contact', start: 'top 70%' },
  });

  // Footer wordmark rises as you reach the end
  gsap.from('.wordmark', {
    yPercent: 40, ease: 'none',
    scrollTrigger: { trigger: 'footer', start: 'top bottom', end: 'bottom bottom', scrub: true },
  });
}

/* ------------------------------------------------------------------ */
/*  Small interactions                                                 */
/* ------------------------------------------------------------------ */
function marquee() {
  const track = $('.marquee-track');
  const html = track.innerHTML;
  track.classList.remove('gap-10');
  track.innerHTML = `<div class="flex shrink-0 gap-10 pr-10">${html}</div><div class="flex shrink-0 gap-10 pr-10" aria-hidden="true">${html}</div>`;
}

function cursor() {
  if (!finePointer || reduceMotion) return;
  document.body.classList.add('has-cursor');
  const c = $('#cursor');
  const read = c.querySelector('.readout');
  const xTo = gsap.quickTo(c, 'x', { duration: 0.35, ease: 'power3.out' });
  const yTo = gsap.quickTo(c, 'y', { duration: 0.35, ease: 'power3.out' });
  const UNIT = 24; // one square of the graph paper
  let shown = false;
  window.addEventListener('pointermove', (e) => {
    if (!shown) { gsap.set(c, { x: e.clientX, y: e.clientY }); gsap.to(c, { opacity: 1, duration: 0.3 }); shown = true; }
    xTo(e.clientX);
    yTo(e.clientY);
    const x = (e.clientX - innerWidth / 2) / UNIT;
    const y = -(e.clientY - innerHeight / 2) / UNIT;
    read.textContent = `(${x.toFixed(2)}, ${y.toFixed(2)})`.replaceAll('-', '−');
  }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    c.classList.toggle('is-hover', !!e.target.closest('[data-cursor], a, button, summary'));
  });
  document.addEventListener('pointerleave', () => gsap.to(c, { opacity: 0, duration: 0.2 }));
  document.addEventListener('pointerenter', () => gsap.to(c, { opacity: 1, duration: 0.2 }));
}

function magnetic() {
  if (!finePointer || reduceMotion) return;
  $$('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.3);
      yTo((e.clientY - r.top - r.height / 2) * 0.4);
    });
    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

function tiltCards() {
  if (!finePointer || reduceMotion) return;
  $$('.tilt').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', `${(px - 0.5) * 8}deg`);
      card.style.setProperty('--rx', `${(0.5 - py) * 8}deg`);
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

function nav() {
  const navEl = $('#nav');
  let last = 0;
  const onScroll = (y) => {
    navEl.classList.toggle('is-scrolled', y > 40);
    navEl.classList.toggle('is-hidden', y > last && y > 400);
    last = y;
  };
  if (lenis) lenis.on('scroll', ({ scroll }) => onScroll(scroll));
  else window.addEventListener('scroll', () => onScroll(scrollY), { passive: true });
}

function form() {
  const f = $('#contact-form');
  const status = $('#form-status');
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(f);
    const missing = ['name', 'contact'].filter((k) => !String(data.get(k) || '').trim());
    if (missing.length) {
      status.textContent = 'We need at least a name and a way to reach you.';
      status.style.color = '#ff4d1a';
      missing.forEach((k) => gsap.fromTo(f.elements[k], { x: -8 }, { x: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' }));
      return;
    }
    // TODO: connect to a real form backend (Formspree, Netlify Forms, your own API…)
    status.style.color = '';
    status.textContent = `Thanks, ${String(data.get('name')).split(' ')[0]} — we'll get back to you within a day.`;
    gsap.fromTo(status, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' });
    f.reset();
  });
}

/* ------------------------------------------------------------------ */
/*  Boot                                                               */
/* ------------------------------------------------------------------ */
$('#year').textContent = new Date().getFullYear();
marquee();
cursor();
magnetic();
tiltCards();
nav();
form();
createPlotter();

runLoader().then(() => {
  scrollScenes();
  intro();
});
