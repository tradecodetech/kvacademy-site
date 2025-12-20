document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(document.querySelectorAll(".slide"));
    const prevBtn = document.querySelector(".carousel-btn.prev");
    const nextBtn = document.querySelector(".carousel-btn.next");

    let currentIndex = 0;
    let slideWidth = 0;

    function calculateSlideWidth() {
        if (!slides.length) return;
        const slide = slides[0];
        const style = window.getComputedStyle(slide);
        const margin =
            parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        slideWidth = slide.offsetWidth + margin;
    }

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateCarousel();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    window.addEventListener("resize", () => {
        calculateSlideWidth();
        updateCarousel();
    });

    // Init
    calculateSlideWidth();
    updateCarousel();
});
