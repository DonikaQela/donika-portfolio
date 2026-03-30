"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import type { PersonalInfo, StatItem } from "../types";
import type {
  MountRevealMotionProps,
  ScrollRevealMotionProps,
} from "../usePortfolioMotion";

type Props = {
  personal: PersonalInfo;
  stats: StatItem[];
  shouldReduceMotion: boolean;
  mountReveal: (delay?: number) => MountRevealMotionProps;
  scrollReveal: (delay?: number, amount?: number) => ScrollRevealMotionProps;
};

export function HeroSection({
  personal,
  stats,
  shouldReduceMotion,
  mountReveal,
  scrollReveal,
}: Props) {
  return (
    <section className="grid items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
      <motion.div {...mountReveal(0.08)}>
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.9, 1, 0.9], scale: [1, 1.015, 1] }
          }
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-5 inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
        >
          <span className="mr-2 h-2 w-2 rounded-full bg-emerald-300" />
          Available for Senior Frontend & Tech Lead opportunities
        </motion.div>

        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
          Building fast, scalable,
          <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-blue-200 to-violet-200 bg-clip-text text-transparent">
            production-grade frontend experiences.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I’m {personal.name}, a frontend engineer with 4+ years of experience
          delivering modern web applications with React, TypeScript, and
          Next.js. I focus on performance, component architecture, real-time
          interfaces, and shipping product features that scale.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-white/10 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            Explore Projects
          </a>
          <a
            href={personal.cvLink}
            download
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            Download CV
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-cyan-300" /> {personal.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-cyan-300" /> {personal.phone}
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-cyan-300" /> {personal.email}
          </span>
        </div>
      </motion.div>

      <motion.div
        {...mountReveal(0.14)}
        className="rounded-[32px] border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 shadow-[0_14px_60px_rgba(8,47,73,0.3)] backdrop-blur-xl"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              {...scrollReveal(index * 0.05, 0.5)}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -4, scale: 1.01, borderColor: "rgba(255,255,255,0.24)" }
              }
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="text-3xl font-semibold text-white md:text-4xl">
                {item.value}
              </div>
              <div className="mt-2 text-sm text-slate-400">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
