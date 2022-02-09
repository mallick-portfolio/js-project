const input = document.querySelector('.theme-switcher input');
const body = document.body;
input.addEventListener('change', (e) => {
  if (e.target.checked) {
    body.setAttribute('data-theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
  }
})