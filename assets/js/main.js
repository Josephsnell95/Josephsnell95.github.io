const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Nav
const navEl = document.getElementById('nav');
if (navEl) {
  if (navEl.dataset.type === 'main') {
    navEl.outerHTML = `<nav>
  <a href="#hero" class="nav-logo">Joseph Snell</a>
  <ul class="nav-links">
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#journey">Journey</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`;
  } else {
    const logo = navEl.dataset.logo || 'Joseph Snell';
    const backUrl = navEl.dataset.backUrl || '/';
    const backLabel = navEl.dataset.backLabel || '← Home';
    navEl.outerHTML = `<nav>
  <a href="/" class="nav-logo">${logo}</a>
  <a href="${backUrl}" class="nav-back">${backLabel}</a>
</nav>`;
  }
}

// Footer
fetch('/assets/html/footer.html')
  .then(r => r.text())
  .then(html => {
    const el = document.getElementById('footer');
    if (el) el.outerHTML = html;
  });

// Widget
fetch('/assets/html/chatbot.html')
  .then(r => r.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);
    const script = document.createElement('script');
    script.src = '/assets/js/chatbot.js';
    document.body.appendChild(script);
  });