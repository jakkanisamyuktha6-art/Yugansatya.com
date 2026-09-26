/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ================= SCROLL ANIMATION ================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;


    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
    ) {

        formMessage.textContent =
            "Please fill in all required fields.";

        return;

    }


    formMessage.textContent =
        "Thank you, " + name +
        ". Your enquiry for " +
        service +
        " has been received.";


    contactForm.reset();

});


/* ================= NAVBAR SHADOW ================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});