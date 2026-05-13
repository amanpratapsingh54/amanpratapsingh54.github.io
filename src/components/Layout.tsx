import { AnimatePresence, motion } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";
import { profile } from "../data/profile";
import { socials } from "../data/socials";
import { getIcon } from "../lib/icons";
import AnimatedBackground from "./AnimatedBackground";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Research", id: "research" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const MenuIcon = getIcon("Menu");
  const CloseIcon = getIcon("X");

  useEffect(() => {
    const handleSectionChange = (event: Event) => {
      const sectionId = (event as CustomEvent<string>).detail;
      if (sectionId) {
        setActiveSection(sectionId);
      }
    };

    window.addEventListener("portfolio-section-change", handleSectionChange);
    return () => window.removeEventListener("portfolio-section-change", handleSectionChange);
  }, []);

  return (
    <div className="min-h-screen text-slate-900 antialiased dark:text-slate-100">
      <AnimatedBackground />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-900/10 bg-white/78 backdrop-blur-2xl dark:border-white/10 dark:bg-ink/70">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
          <button type="button" className="group flex items-center gap-3 text-left" onClick={() => handleNavClick("home", setIsMenuOpen)}>
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 font-display text-lg font-bold text-cyan-700 shadow-glow dark:text-cyan-200">
              AP
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-sm font-bold text-slate-950 dark:text-white">{profile.name}</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">{profile.role}</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id, setIsMenuOpen)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeSection === item.id
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-900/10 bg-white/70 text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-cyan-200 lg:hidden"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              {isMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-900/10 bg-white/95 px-4 py-4 shadow-card dark:border-white/10 dark:bg-ink/95 lg:hidden"
            >
              <div className="mx-auto grid max-w-7xl gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id, setIsMenuOpen)}
                    className={`rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                      activeSection === item.id
                        ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                        : "text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <div id="main-content">{children}</div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-900/10 bg-white/50 py-10 backdrop-blur-xl dark:border-white/10 dark:bg-ink/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-slate-950 dark:text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{profile.availability}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {socials.map((social) => {
            const Icon = getIcon(social.icon);
            return (
              <a
                key={social.label}
                href={social.href}
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-900/10 bg-white/80 text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-cyan-200"
                aria-label={social.label}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon size={19} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

function handleNavClick(sectionId: string, setIsMenuOpen: (value: boolean) => void) {
  setIsMenuOpen(false);
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
