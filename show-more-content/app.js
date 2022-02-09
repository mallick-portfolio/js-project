const button = document.querySelector('.learn-more');
const hiddenContent = document.querySelector('.hidden-content');

button.addEventListener('click', () => {
  hiddenContent.classList.toggle('show-content');
})