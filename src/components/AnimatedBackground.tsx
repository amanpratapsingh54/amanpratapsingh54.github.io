import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  delay: (index % 7) * 0.55,
  duration: 8 + (index % 6),
}));

export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-ink">
      <div className="absolute inset-0 bg-tech-grid bg-[size:42px_42px] opacity-[0.22] dark:opacity-[0.16]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(103,232,249,.18),transparent_28%,rgba(251,191,36,.10)_52%,transparent_72%,rgba(94,234,212,.12))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white dark:from-ink/10 dark:via-ink/40 dark:to-ink" />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-8 w-px bg-cyan-400/35 shadow-[0_0_16px_rgba(103,232,249,.35)]"
          style={{ left: particle.left, top: particle.top }}
          animate={{ opacity: [0.15, 0.9, 0.15], y: [0, -28, 0], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
