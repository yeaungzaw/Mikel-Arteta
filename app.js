const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        // Animate Links
        navLinks.forEach((link, index) => {
            if (!link.style.animation) {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
            } else {
                link.style.animation = "";
            }
        });
        // Animate burger
        burger.classList.toggle('toggle');
    });

}

const app = () => {
    navSlide();
}

app();