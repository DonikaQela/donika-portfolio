"use client";

import { personal, skills, experience, projects, stats } from "./portfolioData";
import { usePortfolioMotion } from "./usePortfolioMotion";
import { AboutSkillsSection } from "./sections/AboutSkillsSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ExtraInfoSection } from "./sections/ExtraInfoSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioBackground } from "./sections/PortfolioBackground";
import { PortfolioHeader } from "./sections/PortfolioHeader";
import { ProjectsSection } from "./sections/ProjectsSection";

export default function DonikaPortfolio() {
  const { shouldReduceMotion, mountReveal, scrollReveal } = usePortfolioMotion();

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-300 selection:text-slate-950">
      <PortfolioBackground shouldReduceMotion={shouldReduceMotion} />

      <main className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <PortfolioHeader personal={personal} mountReveal={mountReveal} />

        <HeroSection
          personal={personal}
          stats={stats}
          shouldReduceMotion={shouldReduceMotion}
          mountReveal={mountReveal}
          scrollReveal={scrollReveal}
        />

        <AboutSkillsSection
          skills={skills}
          shouldReduceMotion={shouldReduceMotion}
          scrollReveal={scrollReveal}
        />

        <ProjectsSection
          projects={projects}
          shouldReduceMotion={shouldReduceMotion}
          scrollReveal={scrollReveal}
        />

        <ExperienceSection experience={experience} scrollReveal={scrollReveal} />

        <ExtraInfoSection scrollReveal={scrollReveal} />

        <ContactSection personal={personal} scrollReveal={scrollReveal} />
      </main>
    </div>
  );
}
