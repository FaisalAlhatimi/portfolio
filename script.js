document.addEventListener("DOMContentLoaded", () => {
    gsap.from("h1", { duration: 1, y: -50, opacity: 0 });
    gsap.from("p", { duration: 1, delay: 0.5, y: 20, opacity: 0, stagger: 0.2 });
    gsap.from("section", { duration: 1, opacity: 0, y: 50, stagger: 0.4, delay: 0.8 });
  });