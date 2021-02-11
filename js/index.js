const bars = document.querySelector(".bars");
const times = document.querySelector(".times");
const burger = document.querySelector(".burger");
// const dim = document.querySelector(".dim");
const mobileNav = document.querySelector(".navLinks");
const navvy = document.querySelector(".navvy");
const overflow = document.querySelector(".overflow");
const navbar = document.querySelector(".navbar");



function toggleBurger() {
    bars.classList.toggle("hide");
    times.classList.toggle("hide");
    // dim.classList.toggle("hide");
    navvy.classList.toggle("showNav");
    overflow.classList.toggle("overflowHidden")

}

const menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener("click", ()=> (
        bars.classList.remove("hide"),
        times.classList.add("hide"),
        navvy.classList.remove("showNav"),
        overflow.classList.remove("overflowHidden")
    ) );
})

burger.addEventListener("click", toggleBurger);
// navvy.addEventListener("click", checkToggle);

