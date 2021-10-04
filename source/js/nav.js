var navMain = document.querySelector('.main-nav');
var navList = document.querySelector('.list');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.addEventListener('click', function () {
    if (navList.classList.contains('nav-closed')) {
        navList.classList.remove('nav-closed');
        navList.classList.add('nav-opened');
    } else {
        navList.classList.add('nav-closed');
        navList.classList.remove('nav-opened');
    }
});