const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === currentSection) {
            link.classList.add('active');
        }
    });
});

// Get the go-to-top button
const goToTopBtn = document.getElementById("goToTopBtn");

// Show or hide the button when scrolling
window.onscroll = function() {
    toggleGoToTopBtn();
};

function toggleGoToTopBtn() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        goToTopBtn.classList.add("show");
    } else {
        goToTopBtn.classList.remove("show");
    }
}

// Smooth scroll to top when the button is clicked
goToTopBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


