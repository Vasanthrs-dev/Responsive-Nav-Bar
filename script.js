const header = document.querySelector(".header");
const navigationList = document.querySelector(".main-nav-list");
const btnHamburger = document.querySelector(".btn-menu");
const navLink = document.querySelectorAll(".main-nav-link");

btnHamburger.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    header.classList.toggle("nav-open");
  });
}
