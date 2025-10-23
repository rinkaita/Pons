const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const closeBtn = document.querySelector('.menu-close');

function openNav() {
  nav.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  nav.classList.remove('open');
  document.body.style.overflow = '';
}

if (toggle) {
  toggle.addEventListener('click', openNav);
}

if (closeBtn) {
  closeBtn.addEventListener('click', closeNav);
}

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeNav);
});
