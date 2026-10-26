"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";
import WorkflowGraph from "@/components/WorkflowGraph";
import { EARLIER_WORK, PROJECTS, PROFILE, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const slug = (title: string) => `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
const pad = (n: number) => String(n).padStart(2, "0");

function BrowserFrame({ project }: { project: Project }) {
  const host = project.live ? new URL(project.live).host : "";
  return (
    <div className="overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_30px_60px_-20px_rgb(0_0_0/0.45)]">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto truncate rounded-md bg-surface-2 px-3 py-0.5 font-mono text-[10px] text-muted">
          {host}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={project.image!}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 768px) 600px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

function WorkflowPreview({ project }: { project: Project }) {
  return (
    <div className="w-full rounded-xl border border-line-strong bg-surface/90 p-5 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.45)] backdrop-blur md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">n8n · every 15 min</span>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-500">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" /> Running
        </span>
      </div>
      <WorkflowGraph steps={project.workflow!} size="lg" />
      <div className="mt-6 space-y-1.5 rounded-lg bg-surface-2 p-3 font-mono text-[11px] leading-relaxed text-muted">
        <p>
          <span className="text-subtle">[fetch]</span> new listings pulled
        </p>
        <p>
          <span className="text-subtle">[groq]</span> scored against my criteria
        </p>
        <p>
          <span className="text-accent-ink">[telegram]</span> only the matches get sent ✓
        </p>
      </div>
    </div>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <article id={slug(project.title)} data-project-index={index} className="scroll-mt-28">
      <Reveal>
        {/* Preview */}
        <div
          onMouseMove={onMove}
          className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-2.5 transition-colors hover:border-line-strong"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(500px_circle_at_var(--mx)_var(--my),var(--glow),transparent_45%)]" />
          <div
            className={cn(
              "relative isolate flex min-h-[280px] justify-center overflow-hidden rounded-[1.25rem] bg-surface-2 px-6 pt-8 md:min-h-[420px] md:px-14 md:pt-12",
              project.workflow ? "items-center pb-8 md:pb-12" : "items-end"
            )}
          >
            <div className="absolute inset-0 -z-10 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
            <div className="absolute -right-20 -bottom-20 -z-10 size-72 rounded-full bg-[var(--glow)] blur-3xl" />
            <div
              className={cn(
                "relative w-full transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]",
                project.workflow ? "max-w-xl group-hover:scale-[1.02]" : "max-w-3xl translate-y-3 group-hover:translate-y-0"
              )}
            >
              {project.workflow ? <WorkflowPreview project={project} /> : <BrowserFrame project={project} />}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mt-7 grid gap-6 px-1 md:grid-cols-[1fr_1.15fr] md:gap-12">
          <div>
            <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-subtle">
              <span className="text-fg">{pad(index + 1)}</span>
              <span>/ {pad(PROJECTS.length)}</span>
              <span>·</span>
              {project.category}
              {project.badge && (
                <>
                  <span>·</span>
                  <span className="text-accent-ink">{project.badge}</span>
                </>
              )}
            </p>
            <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h3>
            <p className="mt-2 text-lg text-muted">{project.tagline}</p>
          </div>

          <div>
            <p className="leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
              {project.tech.map((t) => (
                <li key={t} className="flex items-center gap-1.5 font-mono text-xs text-muted">
                  <TechIcon name={t} className="size-3.5 text-fg" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
                >
                  Visit site
                  <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-2"
                >
                  <Github className="size-4" /> Code
                </a>
              )}
              {!project.live && !project.github && (
                <span className="text-sm text-subtle">Private workflow · demo on request</span>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

function ProjectIndex({ active }: { active: number }) {
  return (
    <nav aria-label="Projects" className="sticky top-32">
      <p className="mb-4 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">Index</p>
      <ol className="space-y-1">
        {PROJECTS.map((p, i) => (
          <li key={p.title}>
            <a
              href={`#${slug(p.title)}`}
              className={cn(
                "relative isolate flex items-baseline gap-3 rounded-xl px-3 py-2.5 transition-colors",
                active === i ? "text-fg" : "text-subtle hover:text-muted"
              )}
            >
              {active === i && (
                <motion.span
                  layoutId="project-index"
                  className="absolute inset-0 -z-10 rounded-xl border border-line bg-surface"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span className="font-mono text-[11px]">{pad(i + 1)}</span>
              <span className="flex-1">
                <span className="block font-display text-lg leading-tight font-medium tracking-tight">{p.title}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">{p.category}</span>
              </span>
            </a>
          </li>
        ))}
      </ol>
      <a
        href="#earlier-work"
        className="mt-6 inline-flex items-center gap-1.5 px-3 font-mono text-[11px] uppercase tracking-widest text-subtle transition-colors hover:text-fg"
      >
        + {EARLIER_WORK.length} earlier projects
      </a>
    </nav>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.projectIndex));
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    document.querySelectorAll("[data-project-index]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title={
            <>
              Things I&apos;ve built <span className="text-muted">&amp; shipped.</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-14">
          <aside className="hidden lg:block">
            <ProjectIndex active={active} />
          </aside>
          <div className="space-y-24 md:space-y-32">
            {PROJECTS.map((project, i) => (
              <ProjectEntry key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Earlier work */}
        <Reveal className="mt-28">
          <div id="earlier-work" className="mb-6 flex scroll-mt-28 items-end justify-between">
            <h3 className="font-display text-2xl font-semibold tracking-tight">Earlier work</h3>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
            >
              All on GitHub
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {EARLIER_WORK.map((w) => (
              <li key={w.title}>
                <a
                  href={w.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[1fr_auto] items-center gap-4 py-5 transition-colors md:grid-cols-[220px_1fr_auto_auto] md:gap-8"
                >
                  <span className="font-display text-xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                    {w.title}
                  </span>
                  <span className="hidden text-muted md:block">{w.description}</span>
                  <span className="hidden font-mono text-xs text-subtle md:block">{w.tech.join(" · ")}</span>
                  <span className="grid size-10 place-items-center rounded-full border border-line-strong transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
