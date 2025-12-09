// ============================
// MINI CAROUSEL FOR HOMEPAGE
// ============================

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = document.querySelectorAll(".carousel-track .slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    // If this page does NOT have a carousel, stop
    if (!track || slides.length === 0) return;

    let index = 0;
    const total = slides.length;

    function showSlide(i) {
        index = (i + total) % total;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener("click", () => showSlide(index + 1));
    prevBtn.addEventListener("click", () => showSlide(index - 1));

    // OPTIONAL AUTOSCROLL
    setInterval(() => {
        showSlide(index + 1);
    }, 5000);
});
