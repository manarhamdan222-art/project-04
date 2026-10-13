
document.addEventListener('DOMContentLoaded', () => {

    // ===================================
    // Dark / Light Mode
    // ===================================

    const themeBtn = document.getElementById('theme-btn');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {

            const dark =
                document.documentElement.getAttribute('data-theme') === 'dark';

            document.documentElement.setAttribute(
                'data-theme',
                dark ? 'light' : 'dark'
            );

            themeBtn.textContent = dark ? '🌙' : '☀️';

            themeBtn.setAttribute(
                'aria-label',
                dark ? 'Switch to dark mode' : 'Switch to light mode'
            );
        });
    }

    // ===================================
    // Bounce 01 - Profile Photo Switcher
    // ===================================

    const photo = document.getElementById('profile-photo');
    const photoBtn = document.getElementById('photo-switcher');

    const photos = [
        {
            src: 'assets/profile1.jpg',
            alt: 'Manar Hamdan - first profile photo'
        },
        {
            src: 'assets/profile2.jpg',
            alt: 'Manar Hamdan - second profile photo'
        }
    ];

    let photoIndex = 0;

    if (photo && photoBtn) {

        photoBtn.addEventListener('click', () => {

            if (photoBtn.disabled) return;

            photoBtn.disabled = true;

            const nextIndex = (photoIndex + 1) % photos.length;
            const next = photos[nextIndex];

            // Preload the next photo
            const preload = new Image();

            preload.onload = () => {

                // Fade out the current photo
                photo.classList.add('fade-out');

                const reducedMotion = window.matchMedia(
                    '(prefers-reduced-motion: reduce)'
                ).matches;

                setTimeout(() => {

                    // Update image source and alt text
                    photo.src = next.src;
                    photo.alt = next.alt;

                    photoIndex = nextIndex;

                    // Fade in the new photo
                    requestAnimationFrame(() => {
                        photo.classList.remove('fade-out');
                        photoBtn.disabled = false;
                    });

                }, reducedMotion ? 0 : 300);
            };

            preload.onerror = () => {
                photoBtn.disabled = false;
                console.error('Image not found:', next.src);
            };

            preload.src = next.src;
        });
    }

    // ===================================
    // Contact Form Demo
    // ===================================

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (form && status) {
        form.addEventListener('submit', (event) => {

            event.preventDefault();

            status.textContent =
                'Demo form only: no message was sent. ' +
                'Please use the email link to get in touch.';
        });
    }

});
