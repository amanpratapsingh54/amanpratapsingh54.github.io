import { AnimatePresence, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import type { Project } from "../data/projects";
import { getIcon } from "../lib/icons";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const Close = getIcon("X");
  const Github = getIcon("Github");
  const External = getIcon("ExternalLink");
  const File = getIcon("FileText");
  const Icon = getIcon(project?.icon ?? "Sparkles");

  useEffect(() => {
    if (!project) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 px-4 py-8 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[8px] border border-white/10 bg-white p-6 shadow-card dark:bg-panel sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
                  <Icon size={28} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">{project.category}</p>
                  <h2 id="project-modal-title" className="mt-2 font-display text-3xl font-bold text-slate-950 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {project.date} · {project.status}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-900/10 text-slate-500 transition hover:border-rose-300 hover:text-rose-500 dark:border-white/10 dark:text-slate-300"
                aria-label="Close project details"
              >
                <Close size={18} />
              </button>
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-700 dark:text-slate-200">{project.longDescription}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.9fr]">
              <section>
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">Highlights</h3>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
              <aside className="rounded-[8px] border border-slate-900/10 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/[0.04]">
                <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid gap-3">
                  {project.githubUrl ? <ModalLink href={project.githubUrl} icon={<Github size={17} />} label="GitHub" /> : null}
                  {project.liveUrl ? <ModalLink href={project.liveUrl} icon={<External size={17} />} label="Live Demo" /> : null}
                  {project.paperUrl ? <ModalLink href={project.paperUrl} icon={<File size={17} />} label="Paper / Report" /> : null}
                </div>
              </aside>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ModalLink({ href, icon, label }: { href: string; icon: ReactNode; label: string }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
    >
      {icon}
      {label}
    </a>
  );
}
