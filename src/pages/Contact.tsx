import Page from "../components/Page";
import SectionHeader from "../components/SectionHeader";
import Seo from "../components/Seo";
import { profile } from "../data/profile";
import { socials } from "../data/socials";
import { getIcon } from "../lib/icons";

export default function Contact() {
  const Send = getIcon("Send");

  return (
    <Page>
      <Seo title="Contact" description="Contact form and social links for AI/ML collaboration and opportunities." />
      <SectionHeader
        eyebrow="Contact"
        title="Let’s talk about AI systems, data products, and research ideas"
        description="Reach out for roles, collaborations, research discussions, or thoughtful data and AI product work."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <form
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
          className="rounded-[8px] border border-slate-900/10 bg-white/78 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
        >
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
          <h2 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">Direct links</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Prefer email? Reach out at <a className="font-semibold text-cyan-700 dark:text-cyan-200" href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
          <div className="mt-6 grid gap-3">
            {socials.map((social) => {
              const Icon = getIcon(social.icon);
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-[8px] border border-slate-900/10 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:text-cyan-200"
                >
                  <Icon size={18} />
                  {social.label}
                </a>
              );
            })}
          </div>
        </aside>
      </div>
    </Page>
  );
}
