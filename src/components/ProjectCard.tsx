import { motion } from "framer-motion";
import type { KeyboardEvent } from "react";
import type { Project } from "../data/projects";
import { getIcon } from "../lib/icons";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

const imageStyles: Record<string, string> = {
  "gradient-ai": "from-cyan-300 via-blue-500 to-slate-950",
  "gradient-data": "from-emerald-300 via-cyan-500 to-slate-950",
  "gradient-tools": "from-amber-300 via-rose-400 to-slate-950",
  "gradient-research": "from-cyan-200 via-indigo-400 to-slate-950",
  "gradient-web": "from-slate-200 via-cyan-400 to-slate-950",
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const Icon = getIcon(project.icon);
  const External = getIcon("ExternalLink");

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen(project);
    }
  };

  return (
    <motion.article
      layout
      tabIndex={0}
      role="button"
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="group relative min-h-[430px] cursor-pointer overflow-hidden rounded-[8px] border border-slate-900/10 bg-white/78 shadow-card outline-none backdrop-blur-xl transition focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-white/10 dark:bg-white/[0.06]"
    >
      <div className={`relative h-44 bg-gradient-to-br ${imageStyles[project.image] ?? imageStyles["gradient-ai"]}`}>
        <div className="absolute inset-0 bg-tech-grid bg-[size:28px_28px] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,.62),transparent_18%),radial-gradient(circle_at_82%_70%,rgba(255,255,255,.20),transparent_28%)]" />
        <div className="absolute bottom-5 left-5 grid h-14 w-14 place-items-center rounded-2xl border border-white/30 bg-white/15 text-white backdrop-blur-xl">
          <Icon size={28} />
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-white/25 bg-slate-950/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {project.status}
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-200">{project.category}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{project.date}</span>
        </div>
        <h2 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full border border-slate-900/10 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
          Explore details
          <External size={16} className="transition group-hover:translate-x-1" />
        </div>
      </div>
    </motion.article>
  );
}
