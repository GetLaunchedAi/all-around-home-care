//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");
const serviceMenu = document.querySelector("#navigation .dropdown");
const about = document.querySelector('#About\\ Us')
const contact = document.querySelector('#Contact')

const screenWidth = window.screen.width;

//
//    Handle Logo Display Based on Scroll Position
//
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const body = document.body;
    
    if (scrollY === 0) {
        // At top of page - show dark logo
        body.classList.add('at-top');
        body.classList.remove('scrolled');
    } else {
        // Scrolled down - show light logo
        body.classList.add('scrolled');
        body.classList.remove('at-top');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const scrollY = window.scrollY;
    const body = document.body;
    
    if (scrollY === 0) {
        body.classList.add('at-top');
    } else {
        body.classList.add('scrolled');
    }
});



hamburgerMenu.addEventListener('click', function () {
    const isNavOpen = navbarMenu.classList.contains("open");
    if (!isNavOpen) {
        hamburgerMenu.setAttribute("aria-expanded", true);
        hamburgerMenu.classList.add("clicked");
        navbarMenu.classList.add("open");
    } else {
        hamburgerMenu.setAttribute("aria-expanded", false);
        hamburgerMenu.classList.remove("clicked");
        navbarMenu.classList.remove("open");
        serviceMenu.setAttribute("aria-expanded", false);
        serviceMenu.classList.remove("open");
        if (screenWidth < 770) {
            about.style.display = 'block'
            contact.style.display = 'block'
        }
    }
});

serviceMenu.addEventListener('click', function () {
    const isServiceOpen = serviceMenu.classList.contains("open");
    if (!isServiceOpen) {
        serviceMenu.setAttribute("aria-expanded", true);
        serviceMenu.classList.add("open");
        if (screenWidth < 770) {
            about.style.display = 'none'
            contact.style.display = 'none'
        }


    } else {
        serviceMenu.setAttribute("aria-expanded", false);
        serviceMenu.classList.remove("open");
        if (screenWidth < 770) {
            about.style.display = 'block'
            contact.style.display = 'block'
        }



    }
});