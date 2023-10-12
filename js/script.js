document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector('.menu');
  const close = document.querySelector('.close');
  const navWrap = document.querySelector('.navWrap');

  menu.addEventListener('click', function() {
    navWrap.classList.add('show');
  });

  close.addEventListener('click', function() {
    navWrap.classList.remove('show');
  });
});