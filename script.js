/* Reveal on scroll */
document.addEventListener("DOMContentLoaded", () => {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".hidden").forEach(el => obs.observe(el));
});
