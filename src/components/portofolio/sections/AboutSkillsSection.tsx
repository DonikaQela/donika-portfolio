"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";
import type { ScrollRevealMotionProps } from "../usePortfolioMotion";

type Props = {
  skills: string[];
  shouldReduceMotion: boolean;
  scrollReveal: (delay?: number, amount?: number) => ScrollRevealMotionProps;
};

export function AboutSkillsSection({
  skills,
  shouldReduceMotion,
  scrollReveal,
}: Props) {
  return (
    <section className="grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div
        {...scrollReveal(0)}
        className="rounded-[28px] border border-white/10 bg-slate-900/40 p-7 backdrop-blur-xl"
      >
        <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-slate-900/70 p-3">
          <Briefcase className="h-5 w-5 text-cyan-300" />
        </div>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          About Me
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          A product-minded frontend engineer
        </h2>
        <p className="mt-4 leading-8 text-slate-300">
          I enjoy transforming complex requirements into clean, maintainable,
          and high-performing interfaces. My approach blends strong engineering
          fundamentals with close collaboration across design, backend, and
          product teams to deliver user experiences that are both reliable and
          intuitive.
        </p>
      </motion.div>

      <motion.div
        {...scrollReveal(0.07)}
        className="rounded-[28px] border border-white/10 bg-slate-900/40 p-7 backdrop-blur-xl"
      >
        <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-slate-900/70 p-3">
          <Code2 className="h-5 w-5 text-violet-300" />
        </div>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          Skills
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              {...scrollReveal(index * 0.02, 0.6)}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -3, scale: 1.02, borderColor: "rgba(255,255,255,0.22)" }
              }
              className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
