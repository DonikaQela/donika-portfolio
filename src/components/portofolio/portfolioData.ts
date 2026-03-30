import type {
  ExperienceItem,
  PersonalInfo,
  ProjectItem,
  StatItem,
} from "./types";

export const personal: PersonalInfo = {
  name: "Donika Qela",
  title: "Senior Frontend Engineer",
  subtitle: "React • TypeScript • Next.js",
  email: "donikaqela1@gmail.com",
  phone: "+38349445179",
  location: "Mitrovicë, Kosovo",
  linkedin: "https://www.linkedin.com/in/donika-qela-0bb0ab1a4/",
  github: "https://github.com/DonikaQela",
  cvLink: "/cv.pdf",
};

export const skills: string[] = [
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

export const experience: ExperienceItem[] = [
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

export const projects: ProjectItem[] = [
  {
    name: "KAPORG & KAPSURVEY",
    role: "Lead Frontend Developer",
    stack: ["React", "TypeScript", "Real-time Chat", "Localization", "Reporting"],
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

export const stats: StatItem[] = [
  { value: "4+", label: "Years of experience" },
  { value: "3", label: "Core production roles" },
  { value: "React / Next", label: "Primary frontend stack" },
  { value: "Real-time", label: "Product experience" },
];
