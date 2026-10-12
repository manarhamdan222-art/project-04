
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // Dark / Light Mode
    // =====================================

    const themeBtn = document.getElementById("theme-toggle");

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {

            const isDark =
                document.documentElement.getAttribute("data-theme") === "dark";

            const newTheme = isDark ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", newTheme);

            themeBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";

            themeBtn.setAttribute(
                "aria-label",
                newTheme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );
        });
    }

    // =====================================
    // Profile Photo Switcher - Bounce 01
    // =====================================

    const profilePhoto = document.getElementById("profile-photo");
    const photoSwitcher = document.getElementById("photo-switcher");

    if (profilePhoto && photoSwitcher) {

        const photos = [
            {
                src: "assets/profile.jpg",
                alt: "Manar Hamdan - First profile photo"
            },
            {
                src: "assets/profile1.jpg",
                alt: "Manar Hamdan - Second profile photo"
            }
        ];

        let currentPhoto = 0;
        let isSwitching = false;

        photoSwitcher.addEventListener("click", () => {

            if (isSwitching) return;

            isSwitching = true;

            const nextIndex = (currentPhoto + 1) % photos.length;
            const nextPhoto = photos[nextIndex];

            const preloadedImage = new Image();

            preloadedImage.onload = () => {

                const reducedMotion = window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches;

                if (!reducedMotion) {
                    profilePhoto.classList.add("fade-out");
                }

                setTimeout(() => {

                    profilePhoto.src = nextPhoto.src;
                    profilePhoto.alt = nextPhoto.alt;

                    currentPhoto = nextIndex;

                    profilePhoto.classList.remove("fade-out");
                    isSwitching = false;

                }, reducedMotion ? 0 : 300);
            };

            preloadedImage.onerror = () => {
                console.error("Could not load image:", nextPhoto.src);
                isSwitching = false;
            };

            preloadedImage.src = nextPhoto.src;
        });
    }

    // =====================================
    // Contact Form Demo
    // =====================================

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
        });
    }

});
