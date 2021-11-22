// Menu
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
});

// Slider Mobile
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
const slides = document.querySelectorAll('.carousel--inner-img');
const carouselImages = document.querySelectorAll('.carousel-image img');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', () => {
    counter++;   
    carouselLimits();
});

prevBtn.addEventListener('click', () => {
    counter--;
    carouselLimits();
});

function carouselLimits() {
    if (counter > carouselImages.length -1) {
        counter = 0
        }
    if (counter < 0) {
        counter = carouselImages.length - 1
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
};

// Slider Desktop
const prodImage = Array.from(document.querySelectorAll('.product-img'));

carouselImages.forEach((image) => {
    image.addEventListener('click', (e) => {
        const current = e.currentTarget.getAttribute('src')
        prodImage[prodImage.length-1].setAttribute('src', current)
    });
});

// Counter & Cart
const btns = document.querySelectorAll('.btns');
const value = document.querySelector('.value');
const addBtn = document.querySelector('.add-btn');
const purchase = document.querySelector('.purchase');

let count = 0;
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const style = e.currentTarget.classList;
        if (style.contains('minus')) {
            count--
            if (count < 0) {
                count = 0
            }
        } else if (style.contains('plus')) {
            count++
        } else {
            count = 0
        }
        value.textContent = count

        if (count > 0) { 
            addBtn.addEventListener('click', () => {
               purchase.textContent = count
               purchase.style.background = 'orange'
               purchase.style.background = 'orange'
               purchase.style.background = 'orange'

               

            });
        };
    });
});






