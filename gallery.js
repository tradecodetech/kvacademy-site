/* ===========================
   GALLERY LIGHTBOX SCRIPT
=========================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");
const closeBtn = document.querySelector(".close-lightbox");

document.querySelectorAll(".gallery-item").forEach(item => {
    
    item.addEventListener("click", () => {
        lightbox.style.display = "block";

        if (item.tagName === "IMG") {
            lightboxVideo.pause();
            lightboxVideo.classList.add("hidden");
            lightboxImg.classList.remove("hidden");

            lightboxImg.src = item.src;
        }

        else if (item.tagName === "VIDEO") {
            lightboxImg.classList.add("hidden");
            lightboxVideo.classList.remove("hidden");

            lightboxVideo.src = item.querySelector("source").src;
            lightboxVideo.play();
        }
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxVideo.pause();
});
