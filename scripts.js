// Scripts.js - @gabesdr
// Special thanks to https://www.w3schools.com/js/

// efni/xxx.html og styles/header.scss

//Kóði sem togglar bara á mobile view 768px
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navClose = document.querySelector('.nav-close');
    const mobileMenu = document.querySelector('#mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const body = document.body;

    if (!navToggle || !mobileMenu) return;

    function toggleMenu() {
        const isOpen = body.classList.toggle('is-menu-open');
        navToggle.setAttribute('aria-label', isOpen ? 'Loka valmynd' : 'Opna valmynd');
        mobileMenu.hidden = !isOpen; // Hidden Attribute
    }
    // Click-Event sem stjórnar toggle-menu button í html.
    navToggle.addEventListener('click', toggleMenu);

    if (navClose) {
        navClose.addEventListener('click', toggleMenu);
    }
    // Click Events fyrir .mobile-link.
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('is-menu-open');
            navToggle.setAttribute('aria-label', 'Opna valmynd');
            mobileMenu.hidden = true;
        });
    });
    // "Escape" key handler ef Notandinn er með lyklaborð á Spjaldtölvu.
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && body.classList.contains('is-menu-open')) {
            body.classList.remove('is-menu-open');
            navToggle.setAttribute('aria-label', 'Opna valmynd');
            mobileMenu.hidden = true;
        }
    });
});