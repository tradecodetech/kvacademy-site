document.addEventListener("DOMContentLoaded", () => {

    // Select all gallery items (images + videos)
    const items = document.querySelectorAll(".gallery-grid img, .gallery-grid video");

    // Create lightbox container
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.style.display = "none";
    document.body.appendChild(lightbox);

    // Close lightbox when clicking anywhere
    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightbox.innerHTML = "";
    });

    // Add click-to-open behavior for each gallery item
    items.forEach(item => {
        item.addEventListener("click", () => {
            let clone;

            if (item.tagName === "VIDEO") {
                clone = item.cloneNode(true);
                clone.controls = true;
                clone.autoplay = true;
                clone.loop = true;
            } else {
                clone = document.createElement("img");
                clone.src = item.src;
            }

            // Clear old media
            lightbox.innerHTML = "";

            // Add clicked media to lightbox
            lightbox.appendChild(clone);

            // Show lightbox
            lightbox.style.display = "flex";
        });
    });

});
