const btnMenu = document.querySelector('.toggleMenu');
const btncloseMenu = document.querySelector('.closeMenu');

const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', function() {
  menu.classList.toggle('active');
});

btncloseMenu.addEventListener('click', function() {
    menu.classList.toggle('active');
});





