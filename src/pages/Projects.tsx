import { useMemo, useState } from "react";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { projectCategories, projects, type Project, type ProjectCategory } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <Page>
      <Seo title="Projects" description="AI, ML, data, web, research, and tools project portfolio." />
      <SectionHeader
        eyebrow="Projects"
        title="A scalable project gallery for AI, ML, data, web, research, and tools"
        description="Explore applied work across models, data systems, research prototypes, and product engineering."
      />

      <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Project categories">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                : "border border-slate-900/10 bg-white/70 text-slate-600 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={setSelectedProject} />
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Page>
  );
}
