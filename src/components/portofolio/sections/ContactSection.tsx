"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import type { PersonalInfo } from "../types";
import type { ScrollRevealMotionProps } from "../usePortfolioMotion";

type Props = {
  personal: PersonalInfo;
  scrollReveal: (delay?: number, amount?: number) => ScrollRevealMotionProps;
};

export function ContactSection({ personal, scrollReveal }: Props) {
  return (
    <section className="py-16">
      <motion.div
        {...scrollReveal(0)}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-violet-500/15 p-8 shadow-[0_20px_90px_rgba(14,116,144,0.25)] backdrop-blur-xl md:p-10"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-8 -translate-y-10 rounded-full bg-cyan-300/20 blur-3xl" />
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          Let’s build something meaningful
        </h2>
        <p className="mt-4 max-w-2xl leading-8 text-slate-300">
          I’m interested in frontend roles where I can contribute to scalable
          products, strong UX, and high engineering standards.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" /> {personal.email}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200"
          >
            LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200"
          >
            <ExternalLink className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
