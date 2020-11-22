const navbar = document.querySelector(".site-header__nav");
const hamburgerButton = document.querySelector(".site-header__menu-btn");

hamburgerButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
    hamburgerButton.classList.toggle("open");
})