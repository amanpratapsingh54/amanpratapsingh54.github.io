export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#f7f8fb] dark:bg-[#080b10]">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-900/10 dark:bg-white/10" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.045)_1px,transparent_1px)] bg-[size:96px_96px] opacity-70 dark:bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(148,163,184,.18),transparent_34%),linear-gradient(to_bottom,transparent,rgba(247,248,251,.92)_78%)] dark:bg-[radial-gradient(circle_at_50%_-10%,rgba(51,65,85,.22),transparent_36%),linear-gradient(to_bottom,transparent,rgba(8,11,16,.95)_78%)]" />
    </div>
  );
}
