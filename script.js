// ===============================
// PORTFOLIO SCRIPT (CLEAN VERSION)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // ---------------- NAVIGATION ----------------
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.startsWith("#")) {
        e.preventDefault();

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Active nav highlight
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (
        pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // ---------------- REVEAL ANIMATION ----------------
  const revealElements = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("show");
      }
    });
  });

  console.log("Portfolio Loaded Successfully 🚀");
});


// ---------------- LOADER (ONLY ONCE) ----------------
window.addEventListener("load", () => {
  const loader = document.querySelector("#loader");
  const main = document.querySelector("main");

  console.log("Window loaded");

  if (loader) {
    loader.classList.add("hide");
  }

  if (main) {
    main.style.display = "block";
  }
});