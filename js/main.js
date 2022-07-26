const navBar = document.querySelector('nav');
const header = document.querySelector('header');
const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');

menuOpen.addEventListener('click', () => {
    navBar.style.display = 'flex';
    menuClose.style.display = 'block';
    menuOpen.style.display = 'none';
    header.style.height = '100vh';
});

menuClose.addEventListener('click', () => {
    navBar.style.display = 'none';
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
    header.style.height = '70px';
});