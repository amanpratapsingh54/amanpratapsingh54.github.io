import { useEffect, useState } from "react";
import { getIcon } from "../lib/icons";

const storageKey = "portfolio-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const Sun = getIcon("Sun");
  const Moon = getIcon("Moon");

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as "dark" | "light" | null;
    const nextTheme = storedTheme ?? "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="grid h-11 w-11 place-items-center rounded-full border border-slate-900/10 bg-white/70 text-slate-700 transition hover:border-amber-300 hover:text-amber-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-amber-200"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
