const slides = document.querySelectorAll('.slider .slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function startSlideshow() {
    showSlide(currentIndex);
    setInterval(showNextSlide, 5000); // Change slide every 5 seconds
}

startSlideshow();
