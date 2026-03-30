export type PersonalInfo = {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  cvLink: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export type ProjectItem = {
  name: string;
  role: string;
  stack: string[];
  description: string;
  bullets: string[];
  live: string;
  github: string;
};

export type StatItem = {
  value: string;
  label: string;
};
