// NAVBAR SHOW / HIDE ON SCROLL
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        navbar.classList.add('slideup');
    } else {
        navbar.classList.remove('slideup');
    }

    lastScrollY = currentScrollY;
});

// TYPING TEXT ANIMATION
const texts = ["Front-end Developer", "Web Developer", "Fullstack Developer", "Software Engineer"];

let textIndex = 0;
let charIndex = 0;

const typingSpeed = 80;
const eraseSpeed = 35;
const delayBetweenTexts = 300;

const typingText = document.getElementById("typing-text");

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingText) {
        type();
    }
});

//FADE-IN/OUT SLIDES
const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            } else {
                entry.target.classList.remove("visible");
                entry.target.classList.add("hidden");
            }
        });
    },
    {
        threshold: 0.3
    }
);

sections.forEach((section) => {
    observer.observe(section);
});