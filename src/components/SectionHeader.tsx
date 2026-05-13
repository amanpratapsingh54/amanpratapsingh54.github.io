type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600 dark:text-cyan-300">{eyebrow}</p> : null}
      <h1 className="mt-3 font-display text-4xl font-bold tracking-normal text-slate-950 dark:text-white sm:text-5xl">{title}</h1>
      {description ? <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
    </div>
  );
}
