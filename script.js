'use strict';



const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]")

navbarToggler.addEventListener("click", function () {
    console.log('clicked')
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});