
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');

    if (!themeBtn) {
        return;
    }

    themeBtn.addEventListener('click', () => {
        const currentTheme =
            document.documentElement.getAttribute('data-theme');

        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);

        themeBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        themeBtn.setAttribute(
            'aria-label',
            newTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
        );
    });
});
