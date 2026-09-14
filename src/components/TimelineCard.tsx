import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { ExperienceItem } from "../data/experience";
import { getIcon } from "../lib/icons";

export default function TimelineCard({ item }: { item: ExperienceItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const Briefcase = getIcon("BriefcaseBusiness");
  const Chevron = getIcon("ChevronDown");

  return (
    <article className="relative border-l border-slate-900/10 pl-7 dark:border-white/10">
      <div className="absolute -left-[19px] top-0 grid h-10 w-10 place-items-center rounded-[6px] border border-slate-900/10 bg-white text-slate-700 dark:border-white/10 dark:bg-[#0d1117] dark:text-slate-200">
        <Briefcase size={18} />
      </div>
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="w-full rounded-[8px] border border-slate-900/10 bg-white/80 p-6 text-left transition hover:border-slate-400 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-white/25"
        aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.dates}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">{item.role}</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-300">
              {item.company} · {item.location}
            </p>
          </div>
          <Chevron className={`mt-1 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} size={20} />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.techStack.map((tech) => (
            <span key={tech} className="rounded-[6px] bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/[0.06] dark:text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <ul className="mt-4 rounded-[8px] border border-slate-900/10 bg-white/55 p-5 dark:border-white/10 dark:bg-white/[0.03]">
              {item.impact.map((impact) => (
                <li key={impact} className="flex gap-3 py-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {impact}
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
