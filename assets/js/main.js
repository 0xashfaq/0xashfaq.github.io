/* =========================================================
   Site scripts
   0. Theme toggle (light ↔ dark) with localStorage persistence
   1. Custom cursor (dot + ring) with click animation
   2. Live UTC clock in the meta-strip
   3. Reveal-on-scroll for cards + sections
   4. Tag filter on /blog/
========================================================= */

(function customCursor () {
  // Skip on touch / coarse-pointer devices
  if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return;

  var dot  = document.createElement('div');
  var ring = document.createElement('div');
  dot.className  = 'cursor-dot is-hidden';
  ring.className = 'cursor-ring is-hidden';
  document.body.appendChild(ring);
  document.body.appendChild(dot);

  // The cursor elements live INSIDE the zoomed <html>, so a CSS translate of
  // (x, y) renders at viewport position (x * zoom, y * zoom). To land the dot
  // exactly under the OS cursor — whose `event.client[XY]` is in unzoomed
  // viewport CSS pixels — we divide the event coords by the active zoom.
  function readZoom () {
    var z = parseFloat(getComputedStyle(document.documentElement).zoom);
    return (z && isFinite(z) && z > 0) ? z : 1;
  }
  var ZOOM = readZoom();
  window.addEventListener('resize', function () { ZOOM = readZoom(); });

  var mouseX = 0, mouseY = 0;
  var ringX  = 0, ringY  = 0;
  var visible = false;

  function moveDot () {
    dot.style.transform =
      'translate3d(' + mouseX + 'px,' + mouseY + 'px,0) translate(-50%,-50%)';
  }

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX / ZOOM;
    mouseY = e.clientY / ZOOM;
    moveDot();
    if (!visible) {
      visible = true;
      ringX = mouseX; ringY = mouseY;
      dot.classList.remove('is-hidden');
      ring.classList.remove('is-hidden');
    }
  });

  // Smooth ring follow with lerp easing
  (function animate () {
    ringX += (mouseX - ringX) * 0.20;
    ringY += (mouseY - ringY) * 0.20;
    ring.style.transform =
      'translate3d(' + ringX + 'px,' + ringY + 'px,0) translate(-50%,-50%)';
    requestAnimationFrame(animate);
  })();

  // Click animation — subtle ring pulse + radiating ripple lines
  function spawnRipple (x, y) {
    var rays = 8;
    for (var i = 0; i < rays; i++) {
      var line = document.createElement('div');
      line.className = 'cursor-ripple';
      line.style.setProperty('--x',   x + 'px');
      line.style.setProperty('--y',   y + 'px');
      line.style.setProperty('--rot', (i * (360 / rays)) + 'deg');
      document.body.appendChild(line);
      line.addEventListener('animationend', function () {
        if (this.parentNode) this.parentNode.removeChild(this);
      });
    }
  }

  document.addEventListener('mousedown', function (e) {
    ring.classList.add('is-click');
    spawnRipple(e.clientX / ZOOM, e.clientY / ZOOM);
  });
  document.addEventListener('mouseup', function () {
    ring.classList.remove('is-click');
  });

  // Hide when leaving the document
  document.addEventListener('mouseleave', function () {
    dot.classList.add('is-hidden');
    ring.classList.add('is-hidden');
    visible = false;
  });
  window.addEventListener('blur', function () {
    dot.classList.add('is-hidden');
    ring.classList.add('is-hidden');
    visible = false;
  });

  // Hover state on interactive elements (delegated)
  var hoverSel =
    'a, button, [role="button"], [data-theme-toggle], ' +
    '.work-tile, .post-card, .blog-row, .post-nav-link, ' +
    '.btn-primary, .btn-ghost, .channel-row a';

  document.addEventListener('mouseover', function (e) {
    var t = e.target;
    if (t && t.closest && t.closest(hoverSel)) ring.classList.add('is-hover');
  });
  document.addEventListener('mouseout', function (e) {
    var t = e.target;
    if (t && t.closest && t.closest(hoverSel)) ring.classList.remove('is-hover');
  });
})();

(function themeToggle () {
  var btns = document.querySelectorAll('[data-theme-toggle]');
  if (!btns.length) return;

  function apply (t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) {}
  }

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      apply(current === 'dark' ? 'light' : 'dark');
    });
  });
})();

(function liveClock () {
  var el = document.getElementById('clock');
  if (!el) return;
  function tick () {
    var d   = new Date();
    var pad = function (n) { return String(n).padStart(2, '0'); };
    el.textContent =
      d.getUTCFullYear() + ' · ' +
      pad(d.getUTCMonth() + 1) + ' · ' +
      pad(d.getUTCDate()) + ' · ' +
      pad(d.getUTCHours()) + ':' +
      pad(d.getUTCMinutes()) + ' UTC';
  }
  tick();
  setInterval(tick, 30000);
})();

(function revealOnScroll () {
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  var targets = document.querySelectorAll('.svc, .post-card, .proj-card, .blog-row, .timeline li');
  targets.forEach(function (el, i) {
    el.classList.add('rv');
    el.style.transitionDelay = (i * 0.04) + 's';
    io.observe(el);
  });
})();

(function tagFilter () {
  var strip = document.querySelector('[data-tag-strip]');
  var rows  = document.querySelectorAll('[data-tags]');
  if (!strip || !rows.length) return;

  var sections = document.querySelectorAll('.cat-section');

  strip.addEventListener('click', function (e) {
    var btn = e.target.closest('a[data-tag]');
    if (!btn) return;
    e.preventDefault();
    var want = btn.getAttribute('data-tag');

    strip.querySelectorAll('a[data-tag]').forEach(function (a) {
      a.classList.toggle('active', a === btn);
    });

    rows.forEach(function (r) {
      var tags = (r.getAttribute('data-tags') || '').split(/\s+/);
      var ok   = (want === 'all') || tags.indexOf(want) !== -1;
      r.style.display = ok ? '' : 'none';
    });

    // Hide section headers that have no visible rows after filtering
    sections.forEach(function (sec) {
      var visible = sec.querySelectorAll('[data-tags]');
      var any = false;
      visible.forEach(function (r) { if (r.style.display !== 'none') any = true; });
      sec.style.display = any ? '' : 'none';
    });
  });
})();
