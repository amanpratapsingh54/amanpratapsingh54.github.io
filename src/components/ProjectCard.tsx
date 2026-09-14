import type { KeyboardEvent } from "react";
import type { Project } from "../data/projects";
import { getIcon } from "../lib/icons";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
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
    <article
      tabIndex={0}
      role="button"
      onClick={() => onOpen(project)}
      onKeyDown={handleKeyDown}
      className="group flex min-h-[360px] cursor-pointer flex-col rounded-[8px] border border-slate-900/10 bg-white/80 p-6 outline-none transition hover:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-white/25"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[6px] border border-slate-900/10 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200">
          <Icon size={21} />
        </div>
        <div className="rounded-[6px] border border-slate-900/10 px-2.5 py-1 text-xs font-medium text-slate-500 dark:border-white/10 dark:text-slate-400">
          {project.status}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <span className="font-semibold uppercase tracking-[0.16em]">{project.category}</span>
        <span>{project.date}</span>
      </div>
      <h2 className="mt-4 font-display text-xl font-semibold leading-7 text-slate-950 dark:text-white">{project.title}</h2>
      <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="rounded-[6px] bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-white/[0.06] dark:text-slate-300">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-slate-800 dark:text-slate-200">
        Details
        <External size={16} className="transition group-hover:translate-x-1" />
      </div>
    </article>
  );
}
