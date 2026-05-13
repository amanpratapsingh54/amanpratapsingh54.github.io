import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import Seo from "../components/Seo";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { research } from "../data/research";
import { skills } from "../data/skills";
import { getIcon } from "../lib/icons";
import { fadeUp, staggerContainer } from "../lib/motion";

const sectionPreviews = [
  {
    id: "about-preview",
    eyebrow: "About",
    title: "Professional story, education, and technical range",
    description:
      "A quick view of the background, education, and skill clusters behind the work.",
    href: "/about",
    icon: "BrainCircuit",
    accent: "from-cyan-300 to-blue-500",
    stats: [`${skills.length} skill groups`, `${education.length} education entries`, profile.location],
    items: skills.slice(0, 3).map((skill) => skill.category),
  },
  {
    id: "projects-preview",
    eyebrow: "Projects",
    title: "Applied AI, ML, data, research, and product builds",
    description:
      "Browse featured systems first, then open the full project gallery for filters and detailed project views.",
    href: "/projects",
    icon: "PanelsTopLeft",
    accent: "from-emerald-300 to-cyan-500",
    stats: [`${projects.length} projects`, `${projects.filter((project) => project.featured).length} featured`, "Filterable gallery"],
    items: projects.slice(0, 3).map((project) => project.title),
  },
  {
    id: "experience-preview",
    eyebrow: "Experience",
    title: "Timeline of roles, tools, and measurable impact",
    description:
      "Expandable work cards show where the technical stack connects to real outcomes.",
    href: "/experience",
    icon: "BriefcaseBusiness",
    accent: "from-amber-300 to-rose-400",
    stats: [`${experience.length} roles`, "Expandable cards", "Impact bullets"],
    items: experience.slice(0, 3).map((item) => `${item.role} · ${item.company}`),
  },
  {
    id: "research-preview",
    eyebrow: "Research",
    title: "Writing, papers, notebooks, reports, and future work",
    description:
      "A structured research shelf for drafts, publications, technical notes, and reproducible experiments.",
    href: "/research",
    icon: "FileText",
    accent: "from-cyan-200 to-indigo-400",
    stats: [`${research.length} entries`, "Papers + blogs", "Notebook-ready"],
    items: research.slice(0, 3).map((item) => item.title),
  },
  {
    id: "resume-preview",
    eyebrow: "Resume",
    title: "PDF resume plus structured HTML summary",
    description:
      "A focused resume view for recruiters and collaborators who want the compressed version.",
    href: "/resume",
    icon: "BadgeCheck",
    accent: "from-slate-200 to-cyan-400",
    stats: ["Downloadable PDF", "HTML sections", "Easy updates"],
    items: [profile.role, "Experience", "Education", "Skills"],
  },
  {
    id: "contact-preview",
    eyebrow: "Contact",
    title: "Reach out for AI, ML, data, or research collaborations",
    description:
      "Social links and a contact form flow are ready for opportunities, collaborations, and project conversations.",
    href: "/contact",
    icon: "Mail",
    accent: "from-mint-200 to-cyan-500",
    stats: ["Email", "GitHub", "LinkedIn"],
    items: [profile.email, profile.availability, "Static-friendly contact flow"],
  },
];

export default function Home() {
  const Arrow = getIcon("ArrowRight");
  const Rocket = getIcon("Rocket");
  const Search = getIcon("Search");

  return (
    <Page className="home-scroll px-0 pb-10 pt-0 sm:px-0 lg:px-0">
      <Seo />
      <section className="mx-auto grid min-h-screen max-w-7xl snap-start items-center gap-12 px-4 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
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
            <a href="#about-preview" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200">
              Scroll Sections
              <Arrow size={17} />
            </a>
            <Link to="/projects" className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:text-white">
              Open Projects Page
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="relative"
        >
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
                <p>{"> scroll(next_section)"}</p>
                <p>{"> observe(active_panel)"}</p>
                <p>{"> click(open_page)"}</p>
                <p className="text-brand-mint">{"> explore(details)"}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {sectionPreviews.map((section, index) => (
          <ScrollPreview key={section.id} section={section} index={index} />
        ))}
      </div>
    </Page>
  );
}

type ScrollPreviewProps = {
  section: (typeof sectionPreviews)[number];
  index: number;
};

function ScrollPreview({ section, index }: ScrollPreviewProps) {
  const Icon = getIcon(section.icon);
  const Arrow = getIcon("ArrowRight");
  const isReversed = index % 2 === 1;

  return (
    <section id={section.id} className="grid min-h-[calc(100vh-5rem)] snap-start items-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <Link
          to={section.href}
          className={`group grid gap-8 rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card outline-none backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/70 focus-visible:ring-2 focus-visible:ring-cyan-400 dark:border-white/10 dark:bg-white/[0.06] lg:grid-cols-2 lg:p-8 ${
            isReversed ? "lg:[&>div:first-child]:order-2" : ""
          }`}
          aria-label={`Open ${section.eyebrow} page`}
        >
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">{section.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-5xl">{section.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{section.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {section.stats.map((stat) => (
                <span key={stat} className="rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                  {stat}
                </span>
              ))}
            </div>
            <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:group-hover:bg-cyan-200">
              Open {section.eyebrow}
              <Arrow size={17} className="transition group-hover:translate-x-1" />
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[8px] border border-slate-900/10 bg-slate-950 p-5 text-white dark:border-white/10">
            <div className={`absolute inset-0 bg-gradient-to-br ${section.accent} opacity-70`} />
            <div className="absolute inset-0 bg-tech-grid bg-[size:34px_34px] opacity-20" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/25 bg-white/15 backdrop-blur-xl">
                <Icon size={32} />
              </div>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item} className="rounded-[8px] border border-white/15 bg-slate-950/35 px-4 py-3 text-sm font-medium text-white backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
