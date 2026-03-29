"use client";
import { motion } from "framer-motion";
import {
  //   Github,
  //   Linkedin,
  Mail,
  MapPin,
  Phone,
  //   ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

export default function DonikaPortfolio() {
  const personal = {
    name: "Donika Qela",
    title: "Senior Frontend Engineer",
    subtitle: "React • TypeScript • Next.js",
    email: "donikaqela1@gmail.com",
    phone: "+38349445179",
    location: "Mitrovicë, Kosovo",
    linkedin: "https://www.linkedin.com/in/donika-qela/",
    github: "https://github.com/DonikaQela",
    cvLink: "/cv.pdf",
  };

  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
    "Bootstrap",
    "REST APIs",
    "GraphQL",
    "SQL",
    "Component Architecture",
    "Performance Optimization",
    "Responsive Design",
  ];

  const experience = [
    {
      role: "Front-End Engineer / Team Coordinator",
      company: "I-APS",
      period: "February 2023 – Present",
      points: [
        "Owned frontend architecture across complex, production-grade platforms.",
        "Built scalable React and Next.js applications with real-time data flows and role-based workflows.",
        "Improved performance with code splitting, lazy loading, and optimized fetching strategies.",
        "Worked closely with backend, product, and design teams to ship end-to-end features.",
        "Coordinated tasks, reviewed code, and supported junior developers through technical guidance.",
      ],
    },
    {
      role: "Front-End Engineer",
      company: "Pabau",
      period: "February 2022 – February 2023",
      points: [
        "Developed and shipped production-ready React and TypeScript applications.",
        "Worked on component-driven systems and responsive, mobile-first user interfaces.",
        "Integrated frontend apps with REST and GraphQL APIs.",
        "Collaborated with designers and backend engineers to improve UX and implementation quality.",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Tretek",
      period: "July 2020 – January 2022",
      points: [
        "Developed and maintained full-stack web applications using ASP.NET and JavaScript.",
        "Built backend APIs, authentication flows, data models, and business logic.",
        "Built a strong system-level mindset that supported the transition into specialized frontend engineering.",
      ],
    },
  ];

  const projects = [
    {
      name: "KAPORG & KAPSURVEY",
      role: "Lead Frontend Developer",
      stack: [
        "React",
        "TypeScript",
        "Real-time Chat",
        "Localization",
        "Reporting",
      ],
      description:
        "Architected and built a survey creation platform from scratch with diverse question types, data visualization, reporting, and cross-role collaboration features.",
      bullets: [
        "Implemented advanced survey flows with text, single-select, multi-select, and image-based options.",
        "Built real-time chat with file attachments and cross-role communication.",
        "Created interactive dashboards with dynamic graphs and reporting tools.",
        "Led frontend development and helped establish team best practices.",
      ],
      live: "#",
      github: "#",
    },
    {
      name: "FIBELLO SWEETS",
      role: "Frontend Developer",
      stack: ["React", "TypeScript", "Redux", "WebSockets"],
      description:
        "Built a responsive order management system used daily across multiple locations, with dashboards for operations and real-time updates.",
      bullets: [
        "Developed reusable UI components and Redux-based state management.",
        "Created dashboards for orders, kitchen workflows, and sales analytics.",
        "Implemented live order status updates using WebSocket integration.",
      ],
      live: "#",
      github: "#",
    },
    {
      name: "E-School Management System",
      role: "Full-Stack Developer",
      stack: ["ASP.NET MVC", "JavaScript", "Razor Pages", "Role-based Access"],
      description:
        "Built a virtual learning platform during COVID-19 with dashboards, role-based access, and tools for students, teachers, and parents.",
      bullets: [
        "Implemented attendance, grades, and student progress tracking.",
        "Built a responsive platform serving 500+ daily users.",
        "Worked across frontend and backend to deliver the product end-to-end.",
      ],
      live: "#",
      github: "#",
    },
  ];

  const stats = [
    { value: "4+", label: "Years of experience" },
    { value: "3", label: "Core production roles" },
    { value: "React / Next", label: "Primary frontend stack" },
    { value: "Real-time", label: "Product experience" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-[30%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-lg font-semibold tracking-wide">
              {personal.name}
            </p>
            <p className="text-sm text-slate-400">{personal.title}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              <ExternalLink className="h-4 w-4" />
              GitHub
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              <ExternalLink className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </motion.header>

        <section className="grid items-center gap-8 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div className="mb-5 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Available for Senior Frontend & Tech Lead opportunities
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Building fast, scalable,
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                production-grade frontend experiences.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I’m {personal.name}, a frontend engineer with 4+ years of
              experience delivering modern web applications with React,
              TypeScript, and Next.js. I focus on performance, component
              architecture, real-time interfaces, and shipping product features
              that scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-white/10 transition hover:scale-[1.02]"
              >
                Explore Projects
              </a>
              <a
                href={personal.cvLink}
                download
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                Download CV
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <div className="text-3xl font-semibold text-white">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="grid gap-6 py-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
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
              I enjoy transforming complex requirements into clean,
              maintainable, and high-performing interfaces. My approach blends
              strong engineering fundamentals with close collaboration across
              design, backend, and product teams to deliver user experiences
              that are both reliable and intuitive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
          >
            <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-slate-900/70 p-3">
              <Code2 className="h-5 w-5 text-violet-300" />
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Skills
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Selected Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Work that reflects technical depth and strong execution
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              These projects highlight experience across scalable frontend
              systems, real-time interactions, dashboards, and cross-functional
              delivery.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
                      {project.role}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>

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
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
                  >
                    {/* <Github className="h-4 w-4" /> Source */}
                    <ExternalLink className="h-4 w-4" /> Source
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Professional journey
            </h2>
          </div>

          <div className="space-y-5">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
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

        <section className="py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
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
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
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
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur"
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

        <section className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-8 backdrop-blur md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Let’s build something meaningful
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              I’m interested in frontend roles where I can contribute to
              scalable products, strong UX, and high engineering standards.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]"
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
      </main>
    </div>
  );
}
