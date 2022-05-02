const menuBtn = document.querySelector(".menu-btn");
const hamburger = menuBtn.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = nav.querySelector(".menu-nav");
const navItems = menuNav.querySelectorAll(".menu-nav__item");

let showMenu = false;

const toggleMenu = () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  menuNav.classList.toggle("open");
  navItems.forEach((item) => item.classList.toggle("open"));
};

menuBtn.addEventListener("click", toggleMenu);
