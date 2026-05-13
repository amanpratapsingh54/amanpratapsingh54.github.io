import { motion } from "framer-motion";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Seo from "../components/Seo";
import TimelineCard from "../components/TimelineCard";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { profile } from "../data/profile";
import { projectCategories, projects, type Project, type ProjectCategory } from "../data/projects";
import { research } from "../data/research";
import { skills } from "../data/skills";
import { socials } from "../data/socials";
import { getIcon } from "../lib/icons";
import { fadeUp, staggerContainer } from "../lib/motion";

const scrollSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    document.documentElement.classList.add("single-scroll-page");
    document.body.classList.add("single-scroll-page");

    const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
          window.dispatchEvent(new CustomEvent("portfolio-section-change", { detail: visibleEntry.target.id }));
        }
      },
      { rootMargin: "-28% 0px -38% 0px", threshold: [0.15, 0.3, 0.55] },
    );

    panels.forEach((panel) => observer.observe(panel));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("single-scroll-page");
      document.body.classList.remove("single-scroll-page");
    };
  }, []);

  return (
    <Page className="single-scroll px-0 pb-0 pt-0 sm:px-0 lg:px-0">
      <Seo />
      <SectionRail activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection activeCategory={activeCategory} onCategoryChange={setActiveCategory} onOpenProject={setSelectedProject} visibleProjects={visibleProjects} />
      <ExperienceSection />
      <ResearchSection />
      <ResumeSection />
      <ContactSection />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Page>
  );
}

function HeroSection() {
  const Arrow = getIcon("ArrowRight");
  const Rocket = getIcon("Rocket");
  const Search = getIcon("Search");

  return (
    <section id="home" data-scroll-section className="mx-auto grid min-h-[100svh] max-w-7xl snap-start snap-always items-center gap-12 px-4 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible">
        <motion.p variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
          <Rocket size={16} />
          {profile.availability}
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-7 max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
          {profile.headline}
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          {profile.intro}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => scrollToSection("projects")} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200">
            View Projects
            <Arrow size={17} />
          </button>
          <button type="button" onClick={() => scrollToSection("resume")} className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:text-white">
            Resume
          </button>
          <button type="button" onClick={() => scrollToSection("contact")} className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:text-white">
            Contact
          </button>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}>
        <div className="rounded-[8px] border border-slate-900/10 bg-white/78 p-5 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <div className="grid gap-4">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="rounded-[8px] border border-slate-900/10 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/[0.05]">
                <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                <p className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-[8px] border border-cyan-300/30 bg-slate-950 p-5 text-white dark:bg-white/10">
            <p className="flex items-center gap-2 font-mono text-sm text-cyan-200">
              <Search size={16} />
              scroll.navigator
            </p>
            <div className="mt-4 space-y-3 font-mono text-sm text-slate-300">
              <p>{"> scroll(section)"}</p>
              <p>{"> highlight(active_nav)"}</p>
              <p>{"> inspect(content)"}</p>
              <p className="text-brand-mint">{"> stay(single_page)"}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const Graduation = getIcon("GraduationCap");

  return (
    <PortfolioSection id="about" eyebrow="About" title="A practical AI builder with a research-minded workflow" description={profile.bio}>
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
              <Graduation size={22} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">Education</h3>
          </div>
          <div className="mt-7 space-y-6">
            {education.map((item) => (
              <article key={`${item.school}-${item.degree}`} className="border-l border-cyan-300/50 pl-5">
                <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-200">{item.dates}</p>
                <h4 className="mt-1 font-display text-xl font-semibold text-slate-950 dark:text-white">{item.school}</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.degree}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{item.location}</p>
                <ul className="mt-4 space-y-2">
                  {item.details.map((detail) => (
                    <li key={detail} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => {
            const Icon = getIcon(group.icon);

            return (
              <motion.article whileHover={{ y: -5 }} key={group.category} className="rounded-[8px] border border-slate-900/10 bg-white/78 p-5 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-slate-950 dark:text-white">{group.category}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-950/5 px-3 py-1 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </PortfolioSection>
  );
}

function ProjectsSection({
  activeCategory,
  onCategoryChange,
  onOpenProject,
  visibleProjects,
}: {
  activeCategory: "All" | ProjectCategory;
  onCategoryChange: (category: "All" | ProjectCategory) => void;
  onOpenProject: (project: Project) => void;
  visibleProjects: Project[];
}) {
  return (
    <PortfolioSection id="projects" eyebrow="Projects" title="AI, ML, data, web, research, and tools" description="Filter applied work across models, data systems, research prototypes, and product engineering. Project details open in-place without leaving the page.">
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Project categories">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => onCategoryChange(category)}
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
          <ProjectCard key={project.slug} project={project} onOpen={onOpenProject} />
        ))}
      </div>
    </PortfolioSection>
  );
}

function ExperienceSection() {
  return (
    <PortfolioSection id="experience" eyebrow="Work" title="Experience shaped around measurable AI and data impact" description="Roles, technical scope, and outcomes across AI engineering, analytics, and research-oriented product work.">
      <div className="mx-auto max-w-4xl space-y-8">
        {experience.map((item) => (
          <TimelineCard key={`${item.company}-${item.role}-${item.dates}`} item={item} />
        ))}
      </div>
    </PortfolioSection>
  );
}

function ResearchSection() {
  const File = getIcon("FileText");
  const External = getIcon("ExternalLink");

  return (
    <PortfolioSection id="research" eyebrow="Research" title="Publications, writing, notebooks, reports, and future work" description="A living collection of technical writing, experiments, reports, reproducible notebooks, and research directions.">
      <div className="grid gap-5 lg:grid-cols-3">
        {research.map((item) => (
          <motion.article whileHover={{ y: -5 }} key={item.title} className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
                <File size={23} />
              </div>
              <span className="rounded-full bg-slate-950/5 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-200">{item.type}</span>
            </div>
            <h3 className="mt-5 font-display text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-cyan-700 dark:text-cyan-200">
              {item.venue} · {item.date}
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-900/10 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            {item.url ? (
              <a href={item.url} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
                Open
                <External size={16} />
              </a>
            ) : null}
          </motion.article>
        ))}
      </div>
    </PortfolioSection>
  );
}

function ResumeSection() {
  const File = getIcon("FileText");

  return (
    <PortfolioSection id="resume" eyebrow="Resume" title="Downloadable PDF plus structured HTML resume" description="A concise view of experience, education, skills, and a downloadable resume.">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
            <File size={28} />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold text-slate-950 dark:text-white">PDF Resume</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Download the latest resume PDF for a compact overview of experience, projects, and skills.
          </p>
          <a href={profile.resumeUrl} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200">
            <File size={17} />
            Open Resume
          </a>
        </aside>

        <section className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <h3 className="font-display text-3xl font-semibold text-slate-950 dark:text-white">{profile.name}</h3>
          <p className="mt-2 text-cyan-700 dark:text-cyan-200">{profile.role}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{profile.bio}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.flatMap((group) => group.skills).slice(0, 18).map((skill) => (
              <span key={skill} className="rounded-full border border-slate-900/10 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </PortfolioSection>
  );
}

function ContactSection() {
  const Send = getIcon("Send");

  return (
    <PortfolioSection id="contact" eyebrow="Contact" title="Let’s talk about AI systems, data products, and research ideas" description="Reach out for roles, collaborations, research discussions, or thoughtful data and AI product work.">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <form action={`mailto:${profile.email}`} method="post" encType="text/plain" className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Name
              <input name="name" className="rounded-[8px] border border-slate-900/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-white/5" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input name="email" type="email" className="rounded-[8px] border border-slate-900/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-white/5" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Subject
            <input name="subject" className="rounded-[8px] border border-slate-900/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-white/5" placeholder="Project, role, research, or collaboration" />
          </label>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Message
            <textarea name="message" className="min-h-40 rounded-[8px] border border-slate-900/10 bg-white px-4 py-3 font-normal outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-white/5" placeholder="Tell me what you are building or hiring for." />
          </label>
          <button type="submit" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200">
            <Send size={17} />
            Send Message
          </button>
        </form>

        <aside className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">Direct links</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Prefer email? Reach out at <a className="font-semibold text-cyan-700 dark:text-cyan-200" href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
          <div className="mt-6 grid gap-3">
            {socials.map((social) => {
              const Icon = getIcon(social.icon);
              return (
                <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noreferrer" : undefined} className="flex items-center gap-3 rounded-[8px] border border-slate-900/10 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:text-cyan-200">
                  <Icon size={18} />
                  {social.label}
                </a>
              );
            })}
          </div>
        </aside>
      </div>
    </PortfolioSection>
  );
}

function PortfolioSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} data-scroll-section className="mx-auto min-h-[100svh] max-w-7xl snap-start scroll-mt-24 px-4 py-28 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.18 }} transition={{ duration: 0.55, ease: "easeOut" }}>
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

function SectionRail({ activeSection }: { activeSection: string }) {
  return (
    <div className="fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 xl:flex" aria-label="Current section">
      {scrollSections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button key={section.id} type="button" onClick={() => scrollToSection(section.id)} className="flex items-center justify-end gap-3">
            <span className={`text-xs font-semibold transition ${isActive ? "opacity-100 text-cyan-700 dark:text-cyan-200" : "opacity-0 text-slate-400"}`}>
              {section.label}
            </span>
            <span className={`block h-2.5 rounded-full transition-all ${isActive ? "w-8 bg-cyan-400 shadow-[0_0_18px_rgba(103,232,249,.55)]" : "w-2.5 bg-slate-400/45"}`} />
          </button>
        );
      })}
    </div>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
