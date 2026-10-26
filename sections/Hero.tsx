import Image from "next/image";
import { ArrowDown, ArrowUpRight, Gauge, Sparkles, Workflow } from "lucide-react";
import Container from "@/components/Container";
import WorkflowGraph from "@/components/WorkflowGraph";
import TechIcon from "@/components/TechIcon";
import { PROFILE } from "@/lib/data";

const HIGHLIGHTS = [
  { icon: Sparkles, label: "What I deliver", value: "UI that feels premium" },
  { icon: Workflow, label: "Automation", value: "n8n + Slack + Jira" },
  { icon: Gauge, label: "Speed", value: "Weeks, not months" },
];

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-1">
      <span className="anim-rise block" style={{ animationDelay: `${delay}s` }}>
        {children}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative isolate pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.035] mix-blend-overlay" />

      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Copy */}
        <div className="lg:col-span-7">
          <h1 className="font-display font-semibold">
            {/* Tier 1: the name, one confident line */}
            <span className="block text-[clamp(2.75rem,6.2vw,4.75rem)] leading-[0.95] tracking-[-0.04em]">
              <Line delay={0.1}>Hi, I&apos;m Natnael.</Line>
            </span>
            {/* Tier 2: seen & unseen */}
            <span className="mt-6 block text-[clamp(1.5rem,2.7vw,2.2rem)] leading-[1.2] tracking-[-0.025em] lg:whitespace-nowrap">
              <Line delay={0.22}>
                <span className="text-muted">I build the parts of the web </span>
                <span className="relative inline-block">
                  you see,
                  <svg
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-2.5 w-full text-accent"
                    aria-hidden
                  >
                    <path
                      d="M2 9 C 80 2, 220 2, 298 7"
                      pathLength={1}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      className="anim-draw"
                      style={{ animationDelay: "0.9s" }}
                    />
                  </svg>
                </span>
              </Line>
              <Line delay={0.32}>
                <span className="text-muted">and the parts that quietly</span>
              </Line>
              <Line delay={0.42}>keep things running.</Line>
            </span>
          </h1>

          <div style={{ animationDelay: "0.55s" }} className="anim-fade-up mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-fg shadow-[0_10px_40px_-12px_var(--btn-glow)] transition-transform hover:scale-[1.03]"
            >
              See my work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-6 py-3.5 font-medium backdrop-blur transition-colors hover:bg-surface-2"
            >
              Let&apos;s talk
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
          >
            {HIGHLIGHTS.map(({ icon: Icon, label, value }, i) => (
              <div
                key={label}
                style={{ animationDelay: `${0.6 + i * 0.08}s` }}
                className="anim-fade-up flex items-center gap-3 bg-surface/80 p-4 backdrop-blur"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-surface-2 text-accent-ink">
                  <Icon className="size-4" />
                </span>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-subtle">{label}</dt>
                  <dd className="text-sm font-medium">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div
          style={{ animationDelay: "0.15s" }}
          className="anim-pop relative mx-auto w-full max-w-[380px] lg:col-span-5 lg:mr-0 lg:max-w-[400px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--portrait)] shadow-[0_40px_100px_-30px_rgb(0_0_0/0.5)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ffffff70,transparent_55%)]" />
            <Image
              src="/profilev2.jpg"
              alt={PROFILE.name}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover object-[50%_20%] mix-blend-multiply"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-black/10 bg-white/55 px-4 py-3 text-[#0c0c0d] backdrop-blur-md">
              <div>
                <p className="font-display text-lg leading-tight font-semibold">{PROFILE.name}</p>
                <p className="text-xs text-black/60">{PROFILE.role}</p>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-black/60">ADD · UTC+3</span>
            </div>
          </div>

          {/* Floating chips */}
          <div className="absolute top-8 -left-4 animate-float rounded-2xl border border-line-strong bg-surface/90 px-3 py-2 shadow-xl backdrop-blur md:-left-10">
            <div className="flex items-center gap-2 text-sm font-medium">
              <TechIcon name="Next.js" className="size-4" />
              <TechIcon name="TypeScript" className="size-4 text-[#3178c6]" />
              <TechIcon name="Tailwind" className="size-4 text-[#38bdf8]" />
              <span className="pl-1">Frontend</span>
            </div>
          </div>

          <div
            className="absolute -right-3 bottom-28 w-[240px] animate-float rounded-2xl border border-line-strong bg-surface/90 p-3 shadow-xl backdrop-blur md:-right-8"
            style={{ animationDelay: "-3s" }}
          >
            <div className="mb-2.5 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted">workflow.run</span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-500">
                <span className="size-1.5 rounded-full bg-emerald-500" /> Active
              </span>
            </div>
            <WorkflowGraph steps={["Jira", "n8n", "Slack"]} />
          </div>
        </div>
      </Container>
    </section>
  );
}
