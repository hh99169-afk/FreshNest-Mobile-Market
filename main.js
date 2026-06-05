/* ===================================
   FRESHNEST MOBILE MARKET
   MAIN JAVASCRIPT (CLEAN VERSION)
=================================== */


/* ==============================
   CONTACT FORM
============================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you for contacting FreshNest! We'll get back to you soon.");

        contactForm.reset();
    });

}


/* ==============================
   SUBSCRIPTION FORM
============================== */

const subscriptionForm = document.getElementById("subscriptionForm");

if (subscriptionForm) {

    subscriptionForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Welcome to FreshNest! Your subscription request has been received.");

        subscriptionForm.reset();
    });

}


/* ==============================
   DELIVERY TRACKING
============================== */

function trackDelivery() {

    const input = document.getElementById("trackingNumber");
    const info = document.getElementById("deliveryInfo");

    if (!input) return;

    if (input.value.trim() === "") {
        alert("Please enter a tracking number.");
        return;
    }

    if (info) {
        info.style.display = "block";
    }

}


/* ==============================
   NAV LINK HIGHLIGHT
============================== */

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#C96B4A";
        link.style.fontWeight = "700";
    }

});


/* ==============================
   FOOTER YEAR AUTO UPDATE
============================== */

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(el => {
    el.textContent = new Date().getFullYear();
});


/* ==============================
   FLOATING LOGO EFFECT
============================== */

window.addEventListener("scroll", function () {

    const logo = document.querySelector(".floating-logo");

    if (logo) {
        logo.style.transform = "translateY(" + window.scrollY * 0.05 + "px)";
    }

});