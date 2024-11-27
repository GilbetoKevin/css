const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
let index = 0;

function showSlide(newIndex) {
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    index = newIndex;
    const offset = -index * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(index - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(index + 1);
});

// Opcional: Auto-slide every 5 seconds
/* setInterval(() => {
    showSlide(index + 1);
}, 5000); */