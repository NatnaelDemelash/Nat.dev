import type { IconType } from "react-icons";
import {
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGmail,
  SiGoogledrive,
  SiJavascript,
  SiJira,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSlack,
  SiSupabase,
  SiTailwindcss,
  SiTelegram,
  SiThemoviedatabase,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiZapier,
} from "react-icons/si";
import { Bot, Calendar, Code2, Cpu, Plug, Rss, Sparkles, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, IconType | LucideIcon> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,
  Vue: SiVuedotjs,
  "Framer Motion": SiFramer,
  "Node.js": SiNodedotjs,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  Git: SiGit,
  "Git & GitHub": SiGithub,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Postman: SiPostman,
  Jira: SiJira,
  "Jira Automation": SiJira,
  Slack: SiSlack,
  "Slack API": SiSlack,
  Trello: SiTrello,
  Zapier: SiZapier,
  Gmail: SiGmail,
  Drive: SiGoogledrive,
  Telegram: SiTelegram,
  "Telegram API": SiTelegram,
  "TMDB API": SiThemoviedatabase,
  "Groq AI": Sparkles,
  "Groq AI filter": Sparkles,
  "Llama 3.3": Cpu,
  "AI agents": Bot,
  "API integrations": Plug,
  "REST APIs": Plug,
  Schedule: Calendar,
  "Upwork feed": Rss,
  HTML: Code2,
  CSS: Code2,
};

export default function TechIcon({ name, className = "size-4" }: { name: string; className?: string }) {
  if (name === "n8n") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path fillRule="evenodd" clipRule="evenodd" d="M24 8.4c0 1.325-1.102 2.4-2.462 2.4-1.146 0-2.11-.765-2.384-1.8h-3.436c-.602 0-1.115.424-1.214 1.003l-.101.592a2.38 2.38 0 01-.8 1.405c.412.354.704.844.8 1.405l.1.592A1.222 1.222 0 0015.719 15h.975c.273-1.035 1.237-1.8 2.384-1.8 1.36 0 2.461 1.075 2.461 2.4S20.436 18 19.078 18c-1.147 0-2.11-.765-2.384-1.8h-.975c-1.204 0-2.23-.848-2.428-2.005l-.101-.592a1.222 1.222 0 00-1.214-1.003H10.97c-.308.984-1.246 1.7-2.356 1.7-1.11 0-2.048-.716-2.355-1.7H4.817c-.308.984-1.246 1.7-2.355 1.7C1.102 14.3 0 13.225 0 11.9s1.102-2.4 2.462-2.4c1.183 0 2.172.815 2.408 1.9h1.337c.236-1.085 1.225-1.9 2.408-1.9 1.184 0 2.172.815 2.408 1.9h.952c.601 0 1.115-.424 1.213-1.003l.102-.592c.198-1.157 1.225-2.005 2.428-2.005h3.436c.274-1.035 1.238-1.8 2.384-1.8C22.898 6 24 7.075 24 8.4zm-1.23 0c0 .663-.552 1.2-1.232 1.2-.68 0-1.23-.537-1.23-1.2 0-.663.55-1.2 1.23-1.2.68 0 1.231.537 1.231 1.2zM2.461 13.1c.68 0 1.23-.537 1.23-1.2 0-.663-.55-1.2-1.23-1.2-.68 0-1.231.537-1.231 1.2 0 .663.55 1.2 1.23 1.2zm6.153 0c.68 0 1.231-.537 1.231-1.2 0-.663-.55-1.2-1.23-1.2-.68 0-1.231.537-1.231 1.2 0 .663.55 1.2 1.23 1.2zm10.462 3.7c.68 0 1.23-.537 1.23-1.2 0-.663-.55-1.2-1.23-1.2-.68 0-1.23.537-1.23 1.2 0 .663.55 1.2 1.23 1.2z" />
      </svg>
    );
  }
  const Icon = ICONS[name] ?? Workflow;
  return <Icon className={className} aria-hidden />;
}
