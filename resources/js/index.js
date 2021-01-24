// Sticky Navigation  and Animation

var nav = document.querySelector("nav");
var sectionFeatures = document.querySelector(".section-features");
var sectionFeaturesColumn = document.querySelectorAll(".section-features .row .col");
var sectionSteps = document.querySelector(".section-steps");
var sectionLibraries = document.querySelector(".section-libraries");
var sectionLibrariesColumn = document.querySelectorAll(".section-libraries .row .col");
var sectionPricing = document.querySelector(".section-pricing");

window.onscroll = function() {

    // Sticky Nav and features Animation
    if (sectionFeatures.getBoundingClientRect().top < 100) {
        nav.classList.add("sticky-nav");
        
        for (var i = 0; i < sectionFeaturesColumn.length ; i++) {
            sectionFeaturesColumn[i].classList.add("js--opacity");
        }

    } else if (sectionFeatures.getBoundingClientRect().top > 100) {
        nav.classList.remove("sticky-nav");
    }

    // App screen animation
    if (sectionSteps.getBoundingClientRect().top < 50) {
        document.querySelector(".app-screen").classList.add("animate__animated" ,  "animate__fadeInUp");
    }

    // Libraries section animation
    if (sectionLibraries.getBoundingClientRect().top < 50) {
        for (var i = 0; i < sectionLibrariesColumn.length ; i++) {
            sectionLibrariesColumn[i].classList.add("js--opacity");
        }
    }

    // Pricing section animation
    if (sectionPricing.getBoundingClientRect().top < 50) {
        document.querySelectorAll(".pricing-box")[0].classList.add("js--pulse-animation");
    }
}

// Mobile navigation

var navToggle = document.querySelector(".js--nav-icon");

navToggle.addEventListener("click" , function() {
    mobileNav();
});

function mobileNav() {

    var nav = document.querySelector(".js--main-nav");
    var icon = document.querySelector(".js--nav-icon ion-icon")
    var navDisplay = getComputedStyle(nav).getPropertyValue("display");

    if (navDisplay === "none") {
        nav.classList.add("js--display");
        icon.setAttribute("name" , "close");
    } else {
        nav.classList.remove("js--display");
        icon.setAttribute("name" , "menu-outline");
    }

}
