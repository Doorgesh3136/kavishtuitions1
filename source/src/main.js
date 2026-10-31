import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { createScene } from './scene.js';
import { createPlotter } from './plotter.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

/* EDIT: your WhatsApp number, digits only with country code (230 = Mauritius) */
const WHATSAPP_NUMBER = '2300000000';

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const isDesktop = () => matchMedia('(min-width: 768px)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ------------------------------------------------------------------ */
/*  Routes                                                             */
/* ------------------------------------------------------------------ */
const ROUTES = {
  home:     { n: '01', title: 'Home',      eq: 'y = f(x)',              morph: 0 },
  about:    { n: '02', title: 'About',     eq: '∀ student, ∃ a way in', morph: 3 },
  subjects: { n: '03', title: 'Subjects',  eq: '{ Maths, Add Maths }',  morph: 1 },
  lab:      { n: '04', title: 'Graph Lab', eq: 'y = ax² + bx + c',      morph: 2 },
  classes:  { n: '05', title: 'Classes',   eq: 'n ≤ 6',                 morph: 1.5 },
  contact:  { n: '06', title: 'Contact',   eq: '∴ book a trial',        morph: 0.5 },
};
const parseRoute = () => {
  const h = location.hash.replace(/^#\/?/, '');
  return ROUTES[h] ? h : 'home';
};

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
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const scrollTop = (immediate = false) => {
  if (lenis) lenis.scrollTo(0, { immediate, force: true, duration: 1.4 });
  else window.scrollTo(0, 0);
};

/* ------------------------------------------------------------------ */
/*  3D scene                                                           */
/* ------------------------------------------------------------------ */
const { state: scene } = createScene($('#gl'));

function frameScene(name) {
  const d = isDesktop();
  if (name === 'home') {
    gsap.set(scene, d ? { x: 3.4, y: -1.6, scale: 1.12, rotY: -0.5, morph: 0 } : { x: 0, y: 3.9, scale: 0.66, rotY: -0.5, morph: 0 });
  } else {
    const m = ROUTES[name].morph;
    gsap.set(scene, d ? { x: 3.6, y: 1.5, scale: 0.92, rotY: -0.3, morph: m } : { x: 0, y: 3.6, scale: 0.62, rotY: -0.3, morph: m });
  }
  scene.active = true;
  scene.opacity = 1;
}

/* ------------------------------------------------------------------ */
/*  Loader                                                             */
/* ------------------------------------------------------------------ */
function runLoader() {
  const W = 560, MID = 110, AMP = 92, X_MAX = Math.PI * 5;
  let d = '';
  for (let i = 0; i <= 280; i++) {
    const x = (i / 280) * X_MAX;
    d += `${i ? 'L' : 'M'}${((i / 280) * W).toFixed(2)} ${(MID - Math.sin(x) * Math.exp(-x / 6) * AMP).toFixed(2)} `;
  }
  const path = $('#loader-curve');
  path.setAttribute('d', d);
  for (let x = 0; x <= W; x += 35) $('#loader .ticks').insertAdjacentHTML('beforeend', `<line class="tick" x1="${x}" y1="${MID - 4}" x2="${x}" y2="${MID + 4}"/>`);

  const pen = $('#loader-pen'), count = $('#loader-count'), msg = $('#loader-msg');
  const total = path.getTotalLength();
  const messages = ['Sharpening pencils', 'Finding x', 'Completing the square', 'Rationalising denominators', 'Checking the units', 'Showing working'];
  const p = { v: 0 };
  const tw = gsap.to(p, {
    v: 100, duration: reduceMotion ? 0.3 : 2.4, ease: 'power2.inOut',
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
  return Promise.all([document.fonts?.ready ?? Promise.resolve(), tw.then()]).then(() => { msg.textContent = 'Q.E.D.'; });
}

/* ------------------------------------------------------------------ */
/*  Per-page setup — everything lives in a gsap.context and is fully   */
/*  reverted when you leave the page.                                  */
/* ------------------------------------------------------------------ */
function common(page, name) {
  // Pause WebGL once the solid page body covers the canvas
  const body = $('.page-body', page);
  if (body) {
    ScrollTrigger.create({
      trigger: body, start: 'top top',
      onEnter: () => { scene.active = false; },
      onLeaveBack: () => { scene.active = true; },
    });
  }

  // Inner-page header: surface drifts as you scroll away
  if (name !== 'home') {
    gsap.timeline({ scrollTrigger: { trigger: $('.page-head', page), start: 'top top', end: 'bottom top', scrub: 1 } })
      .to(scene, { rotY: '+=0.9', y: '+=1.2', ease: 'none' }, 0)
      .to($('.page-head', page), { yPercent: -18, opacity: 0.2, ease: 'none' }, 0);
  }

  $$('.reveal-heading', page).forEach((el) => {
    const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
    gsap.from(split.lines, { yPercent: 110, duration: 1.3, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });

  $$('[data-reveal]', page).forEach((el) => {
    gsap.from(el, { y: 50, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 92%' } });
  });

  $$('.count', page).forEach((el) => {
    const o = { v: 0 };
    el.textContent = '0';
    gsap.to(o, {
      v: Number(el.dataset.to), duration: 1.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 92%' },
      onUpdate: () => { el.textContent = Math.round(o.v); },
    });
  });
}

const PAGES = {
  home(page) {
    const d = isDesktop();
    gsap.timeline({ scrollTrigger: { trigger: $('.home-hero', page), start: 'top top', end: 'bottom top', scrub: 1 } })
      .to(scene, d ? { x: 3.1, y: -0.1, scale: 1.05, rotY: 0.1, ease: 'none' } : { y: -3.2, scale: 0.8, rotY: 0.1, ease: 'none' }, 0)
      .to($('.home-hero-inner', page), { y: -120, opacity: 0, ease: 'none' }, 0);

    // Pinned surfaces: scroll morphs the 3D function and swaps the copy
    const eqs = $$('.surface-eq', page), copies = $$('.surface-copy', page), pips = $$('.surface-pip', page);
    let currentStep = 0;
    const show = (i) => {
      if (i === currentStep) return;
      const dir = i > currentStep ? 1 : -1;
      eqs.forEach((el, k) => k !== i && gsap.to(el, { yPercent: -60 * dir, opacity: 0, duration: 0.4, ease: 'power3.in', overwrite: true }));
      copies.forEach((el, k) => k !== i && gsap.to(el, { y: -20 * dir, opacity: 0, duration: 0.35, ease: 'power2.in', overwrite: true }));
      gsap.fromTo(eqs[i], { yPercent: 60 * dir, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'expo.out', overwrite: true });
      gsap.fromTo(copies[i], { y: 24 * dir, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'expo.out', overwrite: true });
      pips.forEach((p, k) => { p.classList.toggle('bg-ink', k <= i); p.classList.toggle('bg-ink/15', k > i); });
      $('.fig-num', page).textContent = i + 1;
      currentStep = i;
    };
    gsap.timeline({
      scrollTrigger: { trigger: $('.surfaces', page), start: 'top top', end: '+=320%', pin: true, scrub: 1.2 },
      onUpdate: () => show(Math.min(3, Math.round(scene.morph))),
    })
      .to(scene, { morph: 3, ease: 'none', duration: 3 }, 0)
      .to(scene, { rotY: '+=1.4', ease: 'none', duration: 3.4 }, 0);

    gsap.fromTo($('.surfaces-col', page), { opacity: 0, y: 80 }, {
      opacity: 1, y: 0, ease: 'none',
      scrollTrigger: { trigger: $('.surfaces', page), start: 'top 85%', end: 'top 15%', scrub: true },
    });

    gsap.from($$('.explore-card', page), {
      y: 60, opacity: 0, duration: 1.2, stagger: 0.08, ease: 'expo.out',
      scrollTrigger: { trigger: $('.explore-card', page), start: 'top 90%' },
    });
  },

  subjects(page) {
    gsap.from($$('.subject-card', page), {
      y: 120, rotateX: -12, opacity: 0, transformOrigin: '50% 100%', duration: 1.4, stagger: 0.15, ease: 'expo.out',
      scrollTrigger: { trigger: $('.subject-grid', page), start: 'top 90%' }, clearProps: 'transform',
    });
    gsap.from($$('.subject-card li', page), {
      opacity: 0, x: -12, duration: 0.6, stagger: 0.03, ease: 'power2.out',
      scrollTrigger: { trigger: $('.subject-grid', page), start: 'top 70%' },
    });

    const track = $('.method-track', page), idx = $('.method-idx', page);
    const distance = () => track.scrollWidth - window.innerWidth;
    const horiz = gsap.to(track, {
      x: () => -distance(), ease: 'none',
      scrollTrigger: {
        trigger: $('.method', page), start: 'top top', end: () => '+=' + distance(), pin: true, scrub: 1, invalidateOnRefresh: true,
        onUpdate: (self) => { idx.textContent = String(Math.min(4, Math.floor(self.progress * 3.999) + 1)).padStart(2, '0'); },
      },
    });
    $$('.method-card', page).forEach((card) => {
      gsap.from(card.querySelector('svg'), { rotate: -25, scale: 0.7, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: card, containerAnimation: horiz, start: 'left 95%', end: 'left 45%', scrub: true } });
      gsap.from(card.querySelector('span'), { yPercent: 40, opacity: 0, ease: 'none', scrollTrigger: { trigger: card, containerAnimation: horiz, start: 'left 100%', end: 'left 55%', scrub: true } });
    });
  },

  lab(page) {
    gsap.from($('.lab-panel', page), { y: 80, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: $('.lab-panel', page), start: 'top 95%' } });
  },

  classes(page) {
    gsap.from($$('.class-card', page), { y: 100, opacity: 0, duration: 1.3, stagger: 0.12, ease: 'expo.out', scrollTrigger: { trigger: $('.class-grid', page), start: 'top 90%' } });
    gsap.from($$('details', page), { y: 40, opacity: 0, duration: 1, stagger: 0.07, ease: 'expo.out', scrollTrigger: { trigger: $('.faq', page), start: 'top 75%' } });
  },

  contact(page) {
    gsap.from($$('#contact-form label, #contact-form button', page), { y: 30, opacity: 0, duration: 1, stagger: 0.05, ease: 'expo.out', scrollTrigger: { trigger: $('#contact-form', page), start: 'top 90%' } });
  },
};

/* Entrance animation, played once the page is revealed */
function buildEnter(name, page) {
  const tl = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' } });
  if (name === 'home') {
    const split = SplitText.create($('.hero-title', page), { type: 'lines', mask: 'lines', linesClass: 'split-line' });
    tl.from(split.lines, { yPercent: 110, duration: 1.4, stagger: 0.1 }, 0)
      .fromTo($('.hero-photo', page), { clipPath: 'inset(100% 0% 0% 0% round 2rem)' }, { clipPath: 'inset(0% 0% 0% 0% round 2rem)', duration: 1.6, ease: 'expo.inOut' }, 0)
      .from($('.hero-photo .photo-img', page), { scale: 1.4, duration: 2.2 }, 0.1)
      .from($('.hero-badge', page), { scale: 0, rotate: -180, duration: 1.4 }, 0.7)
      .from($('.dim-v', page), { scaleY: 0, transformOrigin: '50% 100%', duration: 1.4, ease: 'expo.inOut' }, 0.4)
      .from($$('.hero-meta > *', page), { y: 20, opacity: 0, duration: 1, stagger: 0.06 }, 0.3)
      .from($('.hero-sub', page), { y: 30, opacity: 0, duration: 1.2 }, 0.45)
      .from($$('.hero-creds > div', page), { y: 30, opacity: 0, duration: 1.2, stagger: 0.08 }, 0.55)
      .from($$('.hero-cta > *', page), { y: 30, opacity: 0, duration: 1.2, stagger: 0.08 }, 0.65);
  } else {
    const split = SplitText.create($('.page-title', page), { type: 'lines,chars', mask: 'lines', linesClass: 'split-line' });
    tl.from(split.chars, { yPercent: 115, rotate: 6, duration: 1.3, stagger: 0.025 }, 0)
      .from($('.page-meta', page), { y: 16, opacity: 0, duration: 1 }, 0.15)
      .from($('.page-intro', page), { y: 30, opacity: 0, duration: 1.2 }, 0.35);
  }
  return tl;
}

function initPage(name) {
  const page = $(`[data-page="${name}"]`);
  let enter;
  const ctx = gsap.context(() => {
    common(page, name);
    PAGES[name]?.(page);
    enter = buildEnter(name, page);
  });
  return { enter: () => enter.play(), revert: () => ctx.revert() };
}

/* ------------------------------------------------------------------ */
/*  Page transition overlay                                            */
/* ------------------------------------------------------------------ */
const T = {
  root: $('#transition'),
  panel: $('#transition .t-panel'),
  accent: $('#transition .t-accent'),
  title: $('#transition .t-title'),
  num: $('#transition .t-num'),
  eq: $('#transition .t-eq'),
  plot: $('#transition .t-plot path'),
};
const tDur = reduceMotion ? 0.01 : 1;

function overlayIn(name) {
  const r = ROUTES[name];
  T.title.textContent = r.title;
  T.num.textContent = r.n;
  T.eq.textContent = r.eq;
  const split = SplitText.create(T.title, { type: 'chars' });
  T.root.style.pointerEvents = 'auto';
  return gsap.timeline()
    .set([T.accent, T.panel], { clipPath: 'inset(100% 0% 0% 0%)' })
    .set(T.plot, { strokeDashoffset: 1 })
    .to(T.accent, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.75 * tDur, ease: 'expo.inOut' })
    .to(T.panel, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.75 * tDur, ease: 'expo.inOut' }, 0.12 * tDur)
    .from(split.chars, { yPercent: 110, duration: 0.8 * tDur, stagger: 0.03, ease: 'expo.out' }, 0.45 * tDur)
    .to(T.plot, { strokeDashoffset: 0, duration: 0.9 * tDur, ease: 'power2.inOut' }, 0.4 * tDur)
    .add(() => split.revert())
    .then();
}

function overlayOut() {
  return gsap.timeline({ onComplete: () => { T.root.style.pointerEvents = 'none'; } })
    .to(T.title, { yPercent: -30, opacity: 0, duration: 0.5 * tDur, ease: 'power3.in' })
    .to(T.panel, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.8 * tDur, ease: 'expo.inOut' }, 0.15 * tDur)
    .to(T.accent, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.8 * tDur, ease: 'expo.inOut' }, 0.27 * tDur)
    .set(T.title, { yPercent: 0, opacity: 1 })
    .then();
}

/* ------------------------------------------------------------------ */
/*  Router                                                             */
/* ------------------------------------------------------------------ */
let current = null;
let active = null;
let busy = false;
let queued = null;

function moveTabPill(name = current, animate = false) {
  const pill = $('#tab-pill');
  const tab = $(`.tabs [data-tab="${name}"]`);
  if (!tab) { gsap.to(pill, { opacity: 0, duration: 0.3 }); return; }
  gsap.to(pill, { x: tab.offsetLeft, width: tab.offsetWidth, opacity: 1, duration: animate ? 0.8 : 0, ease: 'expo.out' });
}
function setTabs(name) {
  $$('[data-tab]').forEach((a) => a.classList.toggle('is-active', a.dataset.tab === name));
  moveTabPill(name, true);
}

async function navigate(name, { initial = false } = {}) {
  if (busy) { queued = name; return; }
  if (name === current) { scrollTop(); return; }
  busy = true;

  if (!initial) {
    lenis?.stop();
    await closeMenu();
    await overlayIn(name);
  }

  active?.revert();
  $$('[data-page]').forEach((p) => { p.hidden = p.dataset.page !== name; });
  scrollTop(true);
  window.scrollTo(0, 0);
  current = name;
  setTabs(name);
  document.title = name === 'home' ? 'Tangent — Maths & Add Maths Tuition, Mauritius' : `${ROUTES[name].title} — Tangent`;

  frameScene(name);
  scene.intro = 0;
  active = initPage(name);
  ScrollTrigger.refresh();

  if (!initial) {
    await overlayOut();
    lenis?.start();
    enterPage();
  }

  busy = false;
  if (queued && queued !== current) { const q = queued; queued = null; navigate(q); }
  queued = null;
}

function enterPage() {
  active.enter();
  gsap.to('#gl', { opacity: 1, duration: 1, ease: 'power2.out' });
  gsap.fromTo(scene, { intro: 0 }, { intro: 1, duration: 2.6, ease: 'power3.out' });
}

window.addEventListener('hashchange', () => navigate(parseRoute()));

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (a && a.getAttribute('href').slice(2) === current) { e.preventDefault(); scrollTop(); closeMenu(); }
  if (e.target.closest('[data-top]')) scrollTop();
});

/* ------------------------------------------------------------------ */
/*  Mobile menu                                                        */
/* ------------------------------------------------------------------ */
let menuOpen = false;
const menuBtn = $('#menu-btn');
function openMenu() {
  menuOpen = true;
  document.body.classList.add('menu-open');
  menuBtn.setAttribute('aria-expanded', 'true');
  $('#menu').setAttribute('aria-hidden', 'false');
  lenis?.stop();
  gsap.timeline()
    .to('#menu', { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.inOut' })
    .fromTo('.menu-link', { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: 0.05, ease: 'expo.out' }, 0.35)
    .fromTo('.menu-foot', { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.6);
}
function closeMenu() {
  if (!menuOpen) return Promise.resolve();
  menuOpen = false;
  document.body.classList.remove('menu-open');
  menuBtn.setAttribute('aria-expanded', 'false');
  $('#menu').setAttribute('aria-hidden', 'true');
  lenis?.start();
  return gsap.to('#menu', { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.7, ease: 'expo.inOut' }).then();
}
menuBtn.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));

/* ------------------------------------------------------------------ */
/*  Shared interactions                                                */
/* ------------------------------------------------------------------ */
function marquee() {
  $$('.marquee-track').forEach((track) => {
    const html = track.innerHTML;
    track.classList.remove('gap-10');
    track.innerHTML = `<div class="flex shrink-0 gap-10 pr-10">${html}</div><div class="flex shrink-0 gap-10 pr-10" aria-hidden="true">${html}</div>`;
  });
}

function cursor() {
  if (!finePointer || reduceMotion) return;
  document.body.classList.add('has-cursor');
  const c = $('#cursor'), read = c.querySelector('.readout');
  const xTo = gsap.quickTo(c, 'x', { duration: 0.35, ease: 'power3.out' });
  const yTo = gsap.quickTo(c, 'y', { duration: 0.35, ease: 'power3.out' });
  let shown = false;
  window.addEventListener('pointermove', (e) => {
    if (!shown) { gsap.set(c, { x: e.clientX, y: e.clientY }); gsap.to(c, { opacity: 1, duration: 0.3 }); shown = true; }
    xTo(e.clientX); yTo(e.clientY);
    const x = (e.clientX - innerWidth / 2) / 24, y = -(e.clientY - innerHeight / 2) / 24;
    read.textContent = `(${x.toFixed(2)}, ${y.toFixed(2)})`.replaceAll('-', '−');
  }, { passive: true });
  document.addEventListener('pointerover', (e) => c.classList.toggle('is-hover', !!e.target.closest('[data-cursor], a, button, summary')));
  document.addEventListener('pointerleave', () => gsap.to(c, { opacity: 0, duration: 0.2 }));
  document.addEventListener('pointerenter', () => shown && gsap.to(c, { opacity: 1, duration: 0.2 }));
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
    el.addEventListener('pointerleave', () => gsap.to(el, { x: 0, y: 0, duration: 1, ease: 'elastic.out(1, 0.4)' }));
  });
}

function tiltCards() {
  if (!finePointer || reduceMotion) return;
  $$('.tilt').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', `${(px - 0.5) * 8}deg`);
      card.style.setProperty('--rx', `${(0.5 - py) * 8}deg`);
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
    });
    card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
  });
}

function nav() {
  const navEl = $('#nav');
  let last = 0;
  const onScroll = (y) => {
    navEl.classList.toggle('is-scrolled', y > 40);
    navEl.classList.toggle('is-hidden', y > last && y > 400 && !menuOpen);
    last = y;
  };
  if (lenis) lenis.on('scroll', ({ scroll }) => onScroll(scroll));
  else window.addEventListener('scroll', () => onScroll(scrollY), { passive: true });
  window.addEventListener('resize', () => moveTabPill(current));
}

function form() {
  const f = $('#contact-form'), status = $('#form-status');
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(f);
    const missing = ['name', 'contact'].filter((k) => !String(data.get(k) || '').trim());
    if (missing.length) {
      status.textContent = 'I need at least a name and a way to reach you.';
      status.style.color = '#ff4d1a';
      missing.forEach((k) => gsap.fromTo(f.elements[k], { x: -8 }, { x: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' }));
      return;
    }
    // Opens WhatsApp with the enquiry pre-filled
    const text = [
      'Hi! Tuition enquiry from the website:',
      `Name: ${data.get('name')}`,
      `Contact: ${data.get('contact')}`,
      `Subject: ${data.get('subject')}`,
      `Grade: ${data.get('grade')}`,
      data.get('notes') ? `Notes: ${data.get('notes')}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    status.style.color = '';
    status.textContent = `Thanks, ${String(data.get('name')).split(' ')[0]} — WhatsApp should have opened with your message ready to send.`;
    gsap.fromTo(status, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' });
  });
}

function footer() {
  gsap.from('.wordmark', { yPercent: 40, ease: 'none', scrollTrigger: { trigger: 'footer', start: 'top bottom', end: 'bottom bottom', scrub: true } });
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
footer();
createPlotter();

runLoader().then(async () => {
  await navigate(parseRoute(), { initial: true });
  gsap.timeline()
    .to('#loader', { clipPath: 'inset(0 0 100% 0)', duration: 1.3, ease: 'expo.inOut' })
    .set('#loader', { display: 'none' })
    .to('#nav', { opacity: 1, duration: 1 }, '-=0.4')
    .add(() => {
      enterPage();
      document.body.classList.remove('is-loading');
      lenis?.start();
      moveTabPill(current);
    }, '-=0.6');
});
