// script.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Menu toggle (for mobile)
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.getElementById("navbar");
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  
    // 2. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // 3. Scroll-to-top button (if you add one)
    const backTop = document.getElementById("backTop");
    if (backTop) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) backTop.style.display = "block";
        else backTop.style.display = "none";
      });
      backTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // 4. Change navbar style on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  });
  