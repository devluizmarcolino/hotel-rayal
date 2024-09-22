const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-circle-fill" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-img img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about-content .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about-content .section-description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about-btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".room-card", {
  ...scrollRevealOption,
  interval: 500,
});
