const burger = document.querySelector(".burger");
const header = document.querySelector("header");
const logo = document.querySelector(".logo")
const closeBtn = document.querySelector(".close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const seeMore = document.querySelector(".hover-animation");
const hero = document.querySelector(".hero-section");

seeMore.addEventListener("click", () => {
    hero.style.display = "none";
    header.style.display = "flex";
    main.style.display = "block";
})

burger.addEventListener("click", () => {
    logo.style.display = "none";
    mobileMenu.style.display = "block";
    menu.style.display = "flex";
})

closeBtn.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    menu.style.display = "none";
    logo.style.display = "flex";
})