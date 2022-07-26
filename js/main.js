const navBar = document.querySelector('nav');
const header = document.querySelector('header');
const menuOpen = document.querySelector('.open');
const menuClose = document.querySelector('.close');

menuOpen.addEventListener('click', () => {
    navBar.classList.toggle('show');
    menuClose.style.display = 'block';
    menuOpen.style.display = 'none';
    header.style.height = '100vh';
});

menuClose.addEventListener('click', () => {
    navBar.classList.toggle('show');
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
    header.style.height = '70px';
});