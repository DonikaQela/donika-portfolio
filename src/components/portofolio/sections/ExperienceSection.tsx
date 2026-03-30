"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "../types";
import type { ScrollRevealMotionProps } from "../usePortfolioMotion";

type Props = {
  experience: ExperienceItem[];
  scrollReveal: (delay?: number, amount?: number) => ScrollRevealMotionProps;
};

export function ExperienceSection({ experience, scrollReveal }: Props) {
  return (
    <section className="py-14">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-semibold">Professional journey</h2>
      </div>

      <div className="space-y-5">
        {experience.map((job, index) => (
          <motion.div
            key={`${job.company}-${job.role}`}
            {...scrollReveal(index * 0.06)}
            className="relative rounded-[28px] border border-white/10 bg-slate-900/40 p-7 pl-9 backdrop-blur-xl"
          >
            <div className="absolute bottom-8 left-4 top-8 w-px bg-gradient-to-b from-cyan-300/80 via-violet-300/40 to-transparent" />
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="mt-1 text-slate-300">{job.company}</p>
              </div>
              <div className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-300">
                {job.period}
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-300 md:grid-cols-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
