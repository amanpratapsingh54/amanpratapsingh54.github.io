import { motion } from "framer-motion";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { education } from "../data/education";
import { profile } from "../data/profile";
import { skills } from "../data/skills";
import { getIcon } from "../lib/icons";
import { fadeUp, staggerContainer } from "../lib/motion";

export default function About() {
  const Graduation = getIcon("GraduationCap");

  return (
    <Page>
      <Seo title="About" description="Professional bio, education, skills, and AI/ML focus areas." />
      <SectionHeader
        eyebrow="About"
        title="A practical AI builder with a research-minded workflow"
        description={profile.bio}
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
              <Graduation size={22} />
            </div>
            <h2 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">Education</h2>
          </div>
          <div className="mt-7 space-y-6">
            {education.map((item) => (
              <article key={`${item.school}-${item.degree}`} className="border-l border-cyan-300/50 pl-5">
                <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-200">{item.dates}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-slate-950 dark:text-white">{item.school}</h3>
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

        <motion.section variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => {
            const Icon = getIcon(group.icon);
            return (
              <motion.article
                variants={fadeUp}
                key={group.category}
                className="rounded-[8px] border border-slate-900/10 bg-white/78 p-5 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
                  <Icon size={22} />
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold text-slate-950 dark:text-white">{group.category}</h2>
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
        </motion.section>
      </div>
    </Page>
  );
}
