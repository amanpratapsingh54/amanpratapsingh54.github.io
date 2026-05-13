import type { ReactNode } from "react";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { profile } from "../data/profile";
import { skills } from "../data/skills";
import { getIcon } from "../lib/icons";

export default function Resume() {
  const File = getIcon("FileText");

  return (
    <Page>
      <Seo title="Resume" description="Downloadable PDF and structured HTML resume for AI/ML and data roles." />
      <SectionHeader
        eyebrow="Resume"
        title="Downloadable PDF plus structured HTML resume"
        description="A concise view of experience, education, skills, and a downloadable resume."
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
            <File size={28} />
          </div>
          <h2 className="mt-5 font-display text-2xl font-semibold text-slate-950 dark:text-white">PDF Resume</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Download the latest resume PDF for a compact overview of experience, projects, and skills.
          </p>
          <a href={profile.resumeUrl} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200">
            <File size={17} />
            Open Resume
          </a>
        </aside>

        <section className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]">
          <h2 className="font-display text-3xl font-semibold text-slate-950 dark:text-white">{profile.name}</h2>
          <p className="mt-2 text-cyan-700 dark:text-cyan-200">{profile.role}</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{profile.bio}</p>

          <ResumeBlock title="Experience">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="border-t border-slate-900/10 py-5 first:border-t-0 dark:border-white/10">
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{item.role}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {item.company} · {item.dates}
                </p>
                <ul className="mt-3 space-y-2">
                  {item.impact.slice(0, 2).map((impact) => (
                    <li key={impact} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {impact}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </ResumeBlock>

          <ResumeBlock title="Education">
            {education.map((item) => (
              <article key={item.school} className="border-t border-slate-900/10 py-5 first:border-t-0 dark:border-white/10">
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{item.school}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {item.degree} · {item.dates}
                </p>
              </article>
            ))}
          </ResumeBlock>

          <ResumeBlock title="Skills">
            <div className="flex flex-wrap gap-2 pt-4">
              {skills.flatMap((group) => group.skills).map((skill) => (
                <span key={skill} className="rounded-full border border-slate-900/10 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </ResumeBlock>
        </section>
      </div>
    </Page>
  );
}

function ResumeBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
