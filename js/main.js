// ── Countdown Timer ───────────────────────────────────────────────────────────
(function () {
  // Conference date: July 2, 2026, 00:00:00 West Africa Time (UTC+1)
  const target = new Date('2026-07-02T00:00:00+01:00').getTime();

  const els = {
    days:    document.getElementById('cd-days'),
    hours:   document.getElementById('cd-hours'),
    minutes: document.getElementById('cd-minutes'),
    seconds: document.getElementById('cd-seconds'),
    wrap:    document.getElementById('countdown-wrap'),
    live:    document.getElementById('countdown-live'),
  };

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now  = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      if (els.wrap) els.wrap.style.display = 'none';
      if (els.live) els.live.style.display = 'block';
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);

    if (els.days)    els.days.textContent    = pad(d);
    if (els.hours)   els.hours.textContent   = pad(h);
    if (els.minutes) els.minutes.textContent = pad(m);
    if (els.seconds) els.seconds.textContent = pad(s);
  }

  if (els.days) {
    tick();
    setInterval(tick, 1000);
  }
})();


// ── Sticky Navbar ─────────────────────────────────────────────────────────────
(function () {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
})();


// ── Active Nav Highlighting via IntersectionObserver ─────────────────────────
(function () {
  const navLinks = document.querySelectorAll('#main-nav .nav-link[href^="#"]');
  if (!navLinks.length) return;

  const sectionIds = Array.from(navLinks).map(a => a.getAttribute('href').slice(1));
  const sections   = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(function (link) {
        const active = link.getAttribute('href') === '#' + id;
        link.classList.toggle('active', active);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
})();


// ── Mobile nav auto-close on link click ──────────────────────────────────────
(function () {
  const navCollapse = document.getElementById('navbarNav');
  if (!navCollapse) return;

  document.querySelectorAll('#main-nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapse.classList.contains('show')) {
        var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
})();
