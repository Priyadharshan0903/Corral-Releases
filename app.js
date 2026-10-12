'use strict';

(() => {
  document.documentElement.classList.add('js');

  const menu = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('siteNav');
  function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
  menu.hidden = false;
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(expanded));
    navigation.classList.toggle('is-open', expanded);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });

  const appearanceControl = document.querySelector('[data-appearance-switch]');
  const appearanceButtons = [...document.querySelectorAll('[data-appearance]')];
  const screenshots = [...document.querySelectorAll('[data-screenshot]')];
  const announcement = document.getElementById('appearanceAnnouncement');
  function setAppearance(value, announce = false) {
    const appearance = value === 'light' ? 'light' : 'dark';
    appearanceButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.appearance === appearance)));
    screenshots.forEach((screenshot) => {
      const source = appearance === 'light' ? screenshot.dataset.lightSrc : screenshot.dataset.darkSrc;
      if (source && screenshot.getAttribute('src') !== source) screenshot.setAttribute('src', source);
    });
    try { localStorage.setItem('corral-site-appearance', appearance); } catch (_) { /* optional preference */ }
    if (announce) announcement.textContent = `Showing Corral in ${appearance} appearance.`;
  }
  let appearance = 'dark';
  try { appearance = localStorage.getItem('corral-site-appearance') || appearance; } catch (_) {}
  setAppearance(appearance);
  appearanceControl.hidden = false;
  appearanceButtons.forEach((button) => button.addEventListener('click', () => setAppearance(button.dataset.appearance, true)));

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reveals = [...document.querySelectorAll('.reveal')];
  let observer;
  if (!motion.matches && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    reveals.forEach((element) => {
      element.dataset.revealReady = '';
      observer.observe(element);
    });
  }
  motion.addEventListener('change', (event) => {
    if (!event.matches) return;
    reveals.forEach((element) => element.classList.add('is-visible'));
    if (observer) observer.disconnect();
  });

  function formatSize(bytes) {
    const megabytes = bytes / (1024 * 1024);
    return megabytes >= 1 ? `${Math.round(megabytes)} MB` : `${Math.round(bytes / 1024)} KB`;
  }
  function applyRelease(release) {
    if (!release || typeof release.version !== 'string' || typeof release.url !== 'string') return;
    const version = release.version.replace(/^v/, '');
    if (!/^\d+\.\d+\.\d+(?:[-+][A-Za-z0-9.-]+)?$/.test(version)) return;
    let url;
    try { url = new URL(release.url); } catch (_) { return; }
    if (url.protocol !== 'https:' || url.hostname !== 'github.com' || !url.pathname.startsWith('/Priyadharshan0903/Corral-Releases/releases/')) return;

    const filename = typeof release.filename === 'string' ? release.filename : '';
    const suppliedFormat = typeof release.format === 'string' ? release.format.toLowerCase() : '';
    const format = ['zip', 'dmg'].includes(suppliedFormat) ? suppliedFormat : filename.toLowerCase().endsWith('.dmg') ? 'dmg' : filename.toLowerCase().endsWith('.zip') ? 'zip' : '';
    document.querySelectorAll('[data-download]').forEach((link) => {
      link.href = url.href;
      link.setAttribute('aria-label', `Download Corral ${version} for an Apple Silicon Mac${format ? `, ${format.toUpperCase()}` : ''}`);
    });
    document.querySelectorAll('[data-version]').forEach((element) => { element.textContent = `v${version}`; });
    if (typeof release.size === 'number' && Number.isFinite(release.size) && release.size > 0) {
      document.querySelectorAll('[data-download-size]').forEach((element) => {
        element.textContent = formatSize(release.size);
        element.hidden = false;
      });
    }
    if (format) document.querySelectorAll('[data-download-format]').forEach((element) => { element.textContent = `${format.toUpperCase()} download`; });
    const installAction = document.querySelector('[data-install-action]');
    const installDetail = document.querySelector('[data-install-detail]');
    if (format === 'zip') {
      installAction.textContent = 'Unzip, then add it to Applications.';
      installDetail.textContent = 'Open the ZIP file, then move Corral.app into your Applications folder.';
    } else if (format === 'dmg') {
      installAction.textContent = 'Open the disk image.';
      installDetail.textContent = 'Open the DMG and drag Corral.app into the Applications folder.';
    }
  }

  const controller = new AbortController();
  const releaseTimeout = setTimeout(() => controller.abort(), 5000);
  fetch('./release.json', { signal: controller.signal, cache: 'no-cache' })
    .then((response) => response.ok ? response.json() : null)
    .then(applyRelease)
    .catch(() => { /* The official release links remain useful without metadata. */ })
    .finally(() => clearTimeout(releaseTimeout));
})();
