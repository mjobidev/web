document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});


let menuIcon = document.querySelector('#menu-icon' );
let navbar = document.querySelector('.navbar' );

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
                
            });

            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });
});


ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .experience-container, .projects-box, contact-box', { origin: 'bottom' }); 
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' }); 
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' }); 




const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Fashion Designer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


