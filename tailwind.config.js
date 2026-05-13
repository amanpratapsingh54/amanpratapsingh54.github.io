/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#070b12",
        panel: "#101826",
        line: "rgba(148, 163, 184, 0.18)",
        brand: {
          cyan: "#67e8f9",
          blue: "#60a5fa",
          mint: "#5eead4",
          amber: "#fbbf24",
          coral: "#fb7185",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(103, 232, 249, 0.18)",
        card: "0 24px 70px rgba(2, 8, 23, 0.32)",
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(148,163,184,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
