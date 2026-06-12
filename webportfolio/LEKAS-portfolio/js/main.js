/* ── SCROLL REVEAL ── */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.07 },
);
document.querySelectorAll(".rv").forEach((el) => io.observe(el));

/* ── NAV SCROLL SHADOW ── */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 10);
});

/* ── PROTO TABS ── */
document.querySelectorAll(".ptab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".ptab").forEach((t) => t.classList.remove("on"));
    tab.classList.add("on");
  });
});

/* ── LAZY-LOAD FIGMA IFRAMES ── */
const lazyIframes = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const iframe = e.target;
        const src = iframe.getAttribute("data-src");
        if (src) {
          iframe.setAttribute("src", src);
          iframe.removeAttribute("data-src");
        }
        lazyIframes.unobserve(iframe);
      }
    });
  },
  { rootMargin: "200px" },
);
document
  .querySelectorAll("iframe[data-src]")
  .forEach((el) => lazyIframes.observe(el));
