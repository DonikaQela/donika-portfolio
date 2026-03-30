"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { ProjectItem } from "../types";
import type { ScrollRevealMotionProps } from "../usePortfolioMotion";

type Props = {
  projects: ProjectItem[];
  shouldReduceMotion: boolean;
  scrollReveal: (delay?: number, amount?: number) => ScrollRevealMotionProps;
};

export function ProjectsSection({
  projects,
  shouldReduceMotion,
  scrollReveal,
}: Props) {
  return (
    <section id="projects" className="py-14">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
          Selected Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold">
          Work that reflects technical depth and strong execution
        </h2>
        <p className="mt-4 leading-8 text-slate-300">
          These projects highlight experience across scalable frontend systems,
          real-time interactions, dashboards, and cross-functional delivery.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            {...scrollReveal(index * 0.07, 0.15)}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -6,
                    borderColor: "rgba(255,255,255,0.24)",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }
            }
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl transition duration-300"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                  {project.role}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{project.name}</h3>
              </div>
            </div>

            <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {project.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.live}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
              <a
                href={project.github}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <ExternalLink className="h-4 w-4" /> Source
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
