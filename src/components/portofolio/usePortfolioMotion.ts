"use client";

import { useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export type MountRevealMotionProps = Pick<
  HTMLMotionProps<"div">,
  "initial" | "animate" | "transition"
>;

export type ScrollRevealMotionProps = Pick<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "viewport" | "transition"
>;

export function usePortfolioMotion() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const easeOutExpo = [0.16, 1, 0.3, 1] as const;

  const mountReveal = (delay = 0): MountRevealMotionProps => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: easeOutExpo },
  });

  const scrollReveal = (delay = 0, amount = 0.2): ScrollRevealMotionProps => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount },
    transition: { duration: 0.6, delay, ease: easeOutExpo },
  });

  return { shouldReduceMotion, mountReveal, scrollReveal };
}
