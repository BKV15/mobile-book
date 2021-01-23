// Sticky Navigation 

var sectionFeatures = document.querySelector(".section-features");
var nav = document.querySelector("nav");

window.onscroll = function() {
    if (sectionFeatures.getBoundingClientRect().top < 100) {
        nav.classList.add("sticky-nav");
    } else if (sectionFeatures.getBoundingClientRect().top > 100) {
        nav.classList.remove("sticky-nav");
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
