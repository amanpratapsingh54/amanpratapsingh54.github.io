import { motion } from "framer-motion";
import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { research } from "../data/research";
import { getIcon } from "../lib/icons";
import { fadeUp, staggerContainer } from "../lib/motion";

export default function Research() {
  const File = getIcon("FileText");
  const External = getIcon("ExternalLink");

  return (
    <Page>
      <Seo title="Research" description="Papers, writing, notebooks, reports, and future research work." />
      <SectionHeader
        eyebrow="Research"
        title="Publications, writing, notebooks, reports, and future work"
        description="A living collection of technical writing, experiments, reports, reproducible notebooks, and research directions."
      />

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid gap-5 lg:grid-cols-3">
        {research.map((item) => (
          <motion.article
            variants={fadeUp}
            key={item.title}
            className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-200">
                <File size={23} />
              </div>
              <span className="rounded-full bg-slate-950/5 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-200">
                {item.type}
              </span>
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h2>
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
      </motion.div>
    </Page>
  );
}
