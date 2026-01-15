// Aman Portfolio — script.js

(function () {
  const root = document.documentElement;

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // Theme toggle with localStorage
  const themeToggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function updateThemeIcon() {
    const icon = themeToggle?.querySelector(".icon");
    if (!icon) return;
    const isLight = root.getAttribute("data-theme") === "light";
    icon.textContent = isLight ? "☀" : "☾";
  }
  updateThemeIcon();

  themeToggle?.addEventListener("click", () => {
    const cur = root.getAttribute("data-theme");
    const next = cur === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon();
  });

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const drawer = document.getElementById("mobileDrawer");

  function setDrawer(open) {
    if (!drawer || !menuBtn) return;
    drawer.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
  }

  menuBtn?.addEventListener("click", () => {
    if (!drawer) return;
    setDrawer(drawer.hidden); // toggle
  });

  // Close mobile nav when clicking a link
  drawer?.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.tagName === "A") setDrawer(false);
  });

  // Contact form opens mail client (no backend)
  const form = document.getElementById("contactForm");
  const hint = document.getElementById("formHint");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (document.getElementById("name")?.value || "").trim();
    const email = (document.getElementById("email")?.value || "").trim();
    const message = (document.getElementById("message")?.value || "").trim();

    const to = "aman16@umd.edu";
    const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;

    if (hint) {
      hint.textContent = "Opening your email client… If nothing happens, allow popups or copy the email above.";
    }
  });

  // Smooth scroll (native-like)
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    });
  });

})();
