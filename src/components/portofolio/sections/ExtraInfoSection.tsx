"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import type { ScrollRevealMotionProps } from "../usePortfolioMotion";

type Props = {
  scrollReveal: (delay?: number, amount?: number) => ScrollRevealMotionProps;
};

export function ExtraInfoSection({ scrollReveal }: Props) {
  return (
    <section className="py-14">
      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          {...scrollReveal(0)}
          className="rounded-[28px] border border-white/10 bg-slate-900/40 p-7 backdrop-blur-xl"
        >
          <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-slate-900/70 p-3">
            <GraduationCap className="h-5 w-5 text-cyan-300" />
          </div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Education
          </p>
          <h3 className="mt-3 text-xl font-semibold">
            Bachelor of Informatics Engineering
          </h3>
          <p className="mt-3 text-slate-300">University “Isa Boletini”</p>
          <p className="mt-1 text-sm text-slate-400">2017 – 2020</p>
        </motion.div>

        <motion.div
          {...scrollReveal(0.05)}
          className="rounded-[28px] border border-white/10 bg-slate-900/40 p-7 backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Achievements
          </p>
          <ul className="mt-4 space-y-3 leading-7 text-slate-300">
            <li>Student of the Year 2020</li>
            <li>University Scholarship Recipient 2018 – 2019</li>
            <li>Experience in cross-functional product collaboration</li>
          </ul>
        </motion.div>

        <motion.div
          {...scrollReveal(0.1)}
          className="rounded-[28px] border border-white/10 bg-slate-900/40 p-7 backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
            Languages
          </p>
          <ul className="mt-4 space-y-3 leading-7 text-slate-300">
            <li>Albanian</li>
            <li>English</li>
            <li>Turkish</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
