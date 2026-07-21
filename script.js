/* ═══ INTRO ANIMATION ═══ */
(function() {
  const overlay = document.getElementById('intro-overlay');
  const introText = document.getElementById('intro-text');
  const introSub = document.getElementById('intro-sub');

  const stages = [
    { text: 'A', delay: 300 },
    { text: 'Aa', delay: 250 },
    { text: 'Aas', delay: 250 },
    { text: 'Aast', delay: 250 },
    { text: 'Aasth', delay: 250 },
    { text: 'Aastha', delay: 400 },
    { text: 'Software Developer', delay: 800 },
  ];

  let i = 0;
  function buildStep() {
    if (i >= stages.length) {
      introSub.style.opacity = '1';
      setTimeout(() => {
        overlay.classList.add('exit');
        setTimeout(() => {
          overlay.style.display = 'none';
          document.body.style.overflow = '';
          initHero();
          initReveal();
        }, 1200);
      }, 600);
      return;
    }
    const s = stages[i];
    introText.textContent = s.text;
    introText.style.opacity = '1';
    introText.style.transform = 'translateY(0)';
    i++;
    setTimeout(buildStep, s.delay);
  }

  // Initial delay then start
  setTimeout(buildStep, 400);
})();

/* ═══ HERO ENTRANCE ═══ */
function initHero() {
  document.getElementById('navbar').classList.add('visible');
  document.getElementById('hero-title').classList.add('visible');
  document.querySelector('.hero-tagline').classList.add('visible');
  document.querySelector('.hero-accent').classList.add('visible');
  document.getElementById('orbit-container').classList.add('visible');
  document.getElementById('scroll-indicator').classList.add('visible');
}

/* ═══ SCROLL REVEAL ═══ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ═══ FORM ═══ */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const orig = btn.textContent;
  btn.textContent = '✓ Sent';
  btn.style.borderColor = '#27c93f';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.borderColor = '';
    e.target.reset();
  }, 3000);
}