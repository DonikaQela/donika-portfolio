"use client";

import { motion } from "framer-motion";

type Props = {
  shouldReduceMotion: boolean;
};

export function PortfolioBackground({ shouldReduceMotion }: Props) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.15),_transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:52px_52px] opacity-[0.08]" />
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 28, 0], y: [0, -22, 0], opacity: [0.14, 0.22, 0.14] }
        }
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-3xl"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -30, 0], y: [0, 16, 0], opacity: [0.14, 0.2, 0.14] }
        }
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute right-[-8%] top-[10%] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-3xl"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 22, 0], y: [0, 18, 0], opacity: [0.1, 0.16, 0.1] }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-[30%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl"
      />
    </div>
  );
}
