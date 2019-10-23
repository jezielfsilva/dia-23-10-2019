var menuOpen = document.querySelector('.button-open');
var menuClose = document.querySelector('.button-close');
var menu = document.querySelector('.container-menu');

menuOpen.addEventListener('click', function Open() {
    menu.style.display = 'block';
})

menuClose.addEventListener('click', function close() {
    menu.style.display = 'none';
})