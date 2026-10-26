export const PROFILE = {
  name: "Natnael Demelash",
  role: "Frontend & Automation Engineer",
  email: "natnael.dev101@gmail.com",
  location: "Addis Ababa, Ethiopia",
  timezone: "Africa/Addis_Ababa",
  github: "https://github.com/NatnaelDemelash",
  linkedin: "https://www.linkedin.com/in/natnaeldemelash/",
};

export const NAV_LINKS = [
  { label: "Services", id: "services" },
  { label: "Work", id: "projects" },
  { label: "Automations", id: "automations" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
];

export type ProjectCategory = "Frontend" | "Automation";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  image?: string;
  live?: string;
  github?: string;
  badge?: string;
  workflow?: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "ExplainThisBug",
    tagline: "Paste an error. Understand it instantly.",
    description:
      "Explains error messages at the level you choose — beginner to senior — and suggests a concrete fix, powered by Groq AI.",
    category: "Frontend",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Groq AI"],
    image: "/projects/explainthisbug.png",
    live: "https://explain-this-bug.vercel.app/",
    badge: "Featured",
  },
  {
    title: "MoodWatch",
    tagline: "A film that matches your mood.",
    description:
      "Pick how you feel and get an AI movie recommendation that fits your vibe, using Groq AI and the TMDB API.",
    category: "Frontend",
    tech: ["Next.js", "TypeScript", "Groq AI", "TMDB API"],
    image: "/projects/moodwatch.png",
    live: "https://nd-moodwatch.vercel.app/",
  },
  {
    title: "CronEase",
    tagline: "Cron expressions, made simple.",
    description:
      "Describe a schedule in plain English and get the cron expression back — or the reverse — with explanations and next run times.",
    category: "Frontend",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/cronease.png",
    live: "https://cron-ease-beta.vercel.app/",
    github: "https://github.com/NatnaelDemelash/CronEase",
  },
  {
    title: "Upwork Job Alert",
    tagline: "Only the jobs worth applying to.",
    description:
      "Pulls new Upwork listings, filters them with Groq AI (Llama 3.3) against my criteria and pings the matches straight to Telegram.",
    category: "Automation",
    tech: ["n8n", "Groq AI", "Llama 3.3", "Telegram API"],
    badge: "Spotlight",
    workflow: ["Schedule", "Upwork feed", "Groq AI filter", "Telegram"],
  },
];

export const EARLIER_WORK = [
  {
    title: "Omni Food",
    description: "AI-based healthy-diet subscription landing page.",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://omni-food-eta.vercel.app/",
  },
  {
    title: "Puluk Travel",
    description: "Full travel website for a local tourism company.",
    tech: ["React", "TypeScript", "Tailwind"],
    live: "https://puluk-travel.vercel.app/",
  },
  {
    title: "Pizzeria",
    description: "Ordering site for a local pizza shop.",
    tech: ["React", "Redux", "Firebase"],
    live: "https://pizzeria-alpha.vercel.app/",
  },
];

export const AUTOMATIONS = [
  {
    title: "Project updates to Slack",
    description:
      "Listens for new Jira tickets and posts a clean summary to the right Slack channel — no more manual status pings.",
    steps: ["Jira", "n8n", "Slack"],
    saves: "Daily stand-up noise",
  },
  {
    title: "Support ticket triage",
    description:
      "Reads incoming customer emails, detects key phrases and creates + assigns the right Trello card automatically.",
    steps: ["Gmail", "n8n", "Trello"],
    saves: "Manual ticket creation",
  },
  {
    title: "Content publishing pipeline",
    description:
      "Watches a Google Drive folder, formats new articles, notifies the social team in Slack and queues them for publishing.",
    steps: ["Drive", "n8n", "Slack"],
    saves: "Hand-offs between teams",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    caption: "Interfaces that feel fast and premium.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue", "Framer Motion"],
  },
  {
    title: "Automation & Workflow",
    caption: "Glue the tools your team already uses.",
    items: ["n8n", "Zapier", "API integrations", "Slack API", "Jira Automation", "AI agents"],
  },
  {
    title: "Backend",
    caption: "Enough backend to ship end-to-end.",
    items: ["Node.js", "Supabase", "Firebase", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    caption: "How the work gets shipped.",
    items: ["Git & GitHub", "Vercel", "Postman", "Jira", "Slack", "Trello"],
  },
];

export const EXPERIENCES = [
  {
    period: "Jan 2024 — Present",
    role: "Frontend Engineer",
    company: "GoodayOn",
    current: true,
    points: [
      "Own the frontend architecture and design system behind an internal tools app used daily by the operations team.",
      "Build AI-driven n8n and Zapier workflows that automate operations and cut repetitive work.",
      "Ship custom Slack integrations for real-time alerts and collaboration across platforms.",
    ],
    tech: ["React", "Next.js", "Vue", "Tailwind", "Firebase", "n8n", "Slack API"],
  },
  {
    period: "Feb 2021 — Dec 2023",
    role: "IT Support",
    company: "GoodayOn",
    points: [
      "Led the operations team and drove process improvements across multiple projects.",
      "Introduced Jira automations that removed manual steps from everyday workflows.",
      "Ran projects in Jira and Trello alongside cross-functional teams.",
    ],
    tech: ["Jira", "Jira Automation", "Trello"],
  },
  {
    period: "May 2019 — Jul 2019",
    role: "Junior Developer (Intern)",
    company: "Addis Ababa University",
    points: [
      "Built front-end features and UI enhancements with designers and senior developers.",
      "Debugged and polished interfaces for larger client projects.",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];
