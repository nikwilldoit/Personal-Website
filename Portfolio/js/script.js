const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

root.setAttribute("data-theme", preferredDark ? "dark" : "light");

function setThemeIcon() {
  if (!toggle) return;
  const dark = root.getAttribute("data-theme") === "dark";

  toggle.innerHTML = dark
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <circle cx="12" cy="12" r="4"></circle>
         <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
       </svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
       </svg>`;
}

setThemeIcon();

toggle?.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  setThemeIcon();
});

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));