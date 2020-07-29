const hamburger = document.querySelector(".hamburger");
console.log(hamburger);
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const navToggle = () => {
   navLinks.classList.toggle("open");
   links.forEach((link) => {
      link.classList.toggle("fade");
   });
   hamburger.classList.toggle("nav-toggle");
};
hamburger.addEventListener("click", () => {
   navToggle();
});
navLinks.addEventListener("click", () => {
   navToggle();
});
