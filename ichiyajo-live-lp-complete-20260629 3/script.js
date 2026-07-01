// Scroll reveal animation. Lightweight and safe for static hosting.
const revealTargets = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    root: null,
    threshold: 0.14,
    rootMargin: "0px 0px -6% 0px"
  }
);

revealTargets.forEach((target) => revealObserver.observe(target));
