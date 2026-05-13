import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { pageTransition } from "../lib/motion";

type PageProps = {
  children: ReactNode;
  className?: string;
};

export default function Page({ children, className = "" }: PageProps) {
  return (
    <motion.main {...pageTransition} className={`mx-auto w-full max-w-7xl px-4 pb-24 pt-28 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </motion.main>
  );
}
