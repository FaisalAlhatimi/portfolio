gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  gsap.from("h1", { duration: 1, y: -50, opacity: 0 });
  gsap.from("p", { duration: 1, delay: 0.5, y: 20, opacity: 0, stagger: 0.2 });
  //gsap.from("section", { duration: 1, opacity: 0, y: 50, stagger: 0.4, delay: 0.8 });

  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Adjustable 
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });
  });

  gsap.utils.toArray("#tech-stack .icons i").forEach((icon, i) => {
    gsap.from(icon, {
      scrollTrigger: {
        trigger: icon,
        start: "top 85%", // Adjustable
        toggleActions: "play none none none",
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,          // Adjustable 
      ease: "back.out(1.7)",
    });
  });

  gsap.from("#resume .anchor", {
    scrollTrigger: {
      trigger: "#resume",
      start: "top 85%",
      toggleActions: "play none none none",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: "elastic.out(1, 0.5)",
  });

  gsap.utils.toArray(".icons i, #contact i").forEach(icon => {
    icon.style.willChange = "transform";

    icon.addEventListener("mouseenter", () => {
      gsap.to(icon, { scale: 1.2, duration: 0.05, ease: "power1.out" });
    });

    icon.addEventListener("mouseleave", () => {
      gsap.to(icon, { scale: 1,   duration: 0.05, ease: "power1.out" });
    });
  });
});