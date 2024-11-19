let lastScrollY = window.scrollY; // Track the last scroll position
const navbar = document.querySelector('.navbar'); // Select the navbar

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down - hide the navbar
        navbar.classList.add('slideup');
    } else {
        // Scrolling up - show the navbar
        navbar.classList.remove('slideup');
    }

    lastScrollY = currentScrollY; // Update the last scroll position
});