"use client";

import { ExternalLink, Mail } from "lucide-react";
import { motion } from "framer-motion";
import type { PersonalInfo } from "../types";
import type { MountRevealMotionProps } from "../usePortfolioMotion";

type Props = {
  personal: PersonalInfo;
  mountReveal: (delay?: number) => MountRevealMotionProps;
};

export function PortfolioHeader({ personal, mountReveal }: Props) {
  return (
    <motion.header
      {...mountReveal(0)}
      className="sticky top-4 z-20 flex flex-col gap-4 rounded-[24px] border border-white/15 bg-slate-950/70 px-6 py-4 shadow-[0_10px_40px_rgba(2,6,23,0.45)] backdrop-blur-xl md:flex-row md:items-center md:justify-between"
    >
      <div>
        <p className="text-lg font-semibold tracking-wide text-white/95">
          {personal.name}
        </p>
        <p className="text-sm text-slate-300">{personal.title}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cyan-300/80">
          {personal.subtitle}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
        >
          <ExternalLink className="h-4 w-4" />
          GitHub
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
        >
          <ExternalLink className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
        >
          <Mail className="h-4 w-4" />
          Contact
        </a>
      </div>
    </motion.header>
  );
}
