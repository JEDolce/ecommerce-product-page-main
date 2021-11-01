const slideMenu = document.getElementById('slide-menu');
const closeBtn = document.getElementById('close');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

menu.addEventListener('click', () => {
    slideMenu.classList.add('slide-in');
    slideMenu.classList.remove('slide-out');
    overlay.classList.add('overlay');
});

closeBtn.addEventListener('click', () => {
    slideMenu.classList.add('slide-out');
    slideMenu.classList.remove('slide-in');
    overlay.classList.remove('overlay');
})