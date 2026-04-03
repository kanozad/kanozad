/* =========================================================
   Typewriter
   ========================================================= */
(function () {
  const phrases = [
    'Senior Software Architect',
    'Java · Spring · Angular',
    '25 years of enterprise systems',
    'Team leader & technical mentor',
  ];

  const el = document.querySelector('.typewriter-text');
  if (!el) return;

  let phraseIndex = 0;
  let charIndex   = 0;
  let deleting    = false;

  const TYPING_SPEED  = 60;   // ms per character
  const ERASE_SPEED   = 35;
  const PAUSE_AFTER   = 2200; // hold complete phrase
  const PAUSE_BEFORE  = 400;  // gap before typing next

  function tick() {
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      el.textContent = phrase.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === phrase.length) {
        deleting = true;
        setTimeout(tick, PAUSE_AFTER);
        return;
      }
      setTimeout(tick, TYPING_SPEED);
    } else {
      el.textContent = phrase.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, PAUSE_BEFORE);
        return;
      }
      setTimeout(tick, ERASE_SPEED);
    }
  }

  setTimeout(tick, 600);
})();

/* =========================================================
   Dark / Light mode toggle
   ========================================================= */
(function () {
  const btn  = document.getElementById('theme-toggle');
  const body = document.body;

  function setTheme(mode) {
    if (mode === 'light') {
      body.classList.add('light');
      btn.textContent = '🌙';
      btn.title = 'Switch to dark mode';
    } else {
      body.classList.remove('light');
      btn.textContent = '☀';
      btn.title = 'Switch to light mode';
    }
    localStorage.setItem('theme', mode);
  }

  // Apply saved preference immediately
  const saved = localStorage.getItem('theme') || 'dark';
  setTheme(saved);

  btn.addEventListener('click', () => {
    const current = body.classList.contains('light') ? 'light' : 'dark';
    setTheme(current === 'light' ? 'dark' : 'light');
  });
})();

/* =========================================================
   Timeline expand / collapse
   ========================================================= */
(function () {
  const section = document.getElementById('experience');
  if (!section) return;

  section.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-toggle]');
    if (!btn) return;

    const id      = btn.getAttribute('data-toggle');
    const bullets = document.getElementById(id);
    if (!bullets) return;

    const expanded = bullets.classList.toggle('expanded');
    btn.textContent = expanded ? '— show less' : '+ show more';
  });
})();
