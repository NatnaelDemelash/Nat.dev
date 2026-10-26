import { Bot, Check, MousePointer2, Webhook } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import TechIcon from "@/components/TechIcon";
import { cn } from "@/lib/utils";

const BUILD_ITEMS = [
  "Landing pages & marketing sites",
  "Web apps & dashboards",
  "Design systems & UI components",
  "Internal tools for your team",
];

const AUTOMATE_ITEMS = [
  "Slack, Jira, Gmail & Drive integrations",
  "AI agents that sort, summarize & draft",
  "Scheduled reports & smart alerts",
  "Webhooks & custom API connections",
];

const PROCESS = [
  { title: "Map", text: "We walk through the manual process and find the steps worth automating." },
  { title: "Build", text: "I build and test the workflow in n8n against your real tools and data." },
  { title: "Hand off", text: "You get a running workflow, error alerts and a short doc on how it works." },
];

/* ---------- Build: a tiny site that assembles itself ---------- */

function Block({ className, delay }: { className: string; delay: number }) {
  return <div className={cn("assemble rounded-md bg-line-strong", className)} style={{ animationDelay: `${delay}s` }} />;
}

function BuildPreview() {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[0_30px_60px_-20px_rgb(0_0_0/0.45)]">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </span>
        <span className="mx-auto rounded-md bg-surface-2 px-3 py-0.5 font-mono text-[10px] text-muted">yourbrand.com</span>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <Block className="h-3 w-16" delay={0} />
          <div className="flex gap-2">
            <Block className="h-2 w-8" delay={0.15} />
            <Block className="h-2 w-8" delay={0.2} />
            <Block className="h-2 w-8" delay={0.25} />
          </div>
        </div>
        <div className="space-y-2 pt-3">
          <Block className="h-5 w-4/5 bg-fg/80" delay={0.4} />
          <Block className="h-5 w-3/5 bg-fg/80" delay={0.5} />
          <Block className="mt-3 h-2 w-2/3" delay={0.65} />
        </div>
        <div className="relative w-fit">
          <Block className="h-7 w-24 rounded-full bg-accent" delay={0.8} />
          <MousePointer2 className="cursor-tap absolute top-3 left-16 size-5 fill-fg text-bg" />
        </div>
        <div className="grid grid-cols-3 gap-2 pt-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="assemble space-y-1.5 rounded-lg border border-line p-2" style={{ animationDelay: `${1 + i * 0.12}s` }}>
              <div className="aspect-[4/3] rounded bg-surface-2" />
              <div className="h-1.5 w-3/4 rounded bg-line-strong" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Automate: an n8n-style canvas ---------- */

const EDGES = [
  "M118 150 C 160 150, 170 150, 196 150",
  "M304 150 C 340 150, 345 78, 382 78",
  "M304 150 C 340 150, 345 222, 382 222",
];

function Node({
  x,
  y,
  label,
  sub,
  children,
  shape = "square",
}: {
  x: number;
  y: number;
  label: string;
  sub?: string;
  children: React.ReactNode;
  shape?: "trigger" | "square" | "agent";
}) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
      style={{ left: `${(x / 500) * 100}%`, top: `${(y / 300) * 100}%` }}
    >
      <div
        className={cn(
          "grid place-items-center border bg-surface text-fg shadow-sm",
          shape === "trigger" && "size-12 rounded-l-full rounded-r-xl border-line-strong md:size-14",
          shape === "square" && "size-12 rounded-xl border-line-strong md:size-14",
          shape === "agent" &&
            "h-12 w-24 grid-flow-col gap-2 rounded-xl border-accent/60 bg-accent/10 px-3 md:h-14 md:w-28"
        )}
      >
        {children}
      </div>
      <span className="text-center font-mono text-[9px] leading-tight tracking-wider text-muted uppercase md:text-[10px]">
        {label}
        {sub && <span className="block text-subtle normal-case">{sub}</span>}
      </span>
    </div>
  );
}

function AutomatePreview() {
  return (
    <div className="relative w-full max-w-md">
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">n8n · lead-triage.json</span>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-500">
          <span className="size-1.5 rounded-full bg-emerald-500" /> Active
        </span>
      </div>
      <div className="relative aspect-[5/3] w-full rounded-xl border border-line-strong bg-surface/60 [background-image:radial-gradient(var(--line-strong)_1px,transparent_1px)] [background-size:16px_16px]">
        <svg viewBox="0 0 500 300" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden>
          {EDGES.map((d, i) => (
            <g key={d}>
              <path d={d} fill="none" stroke="var(--line-strong)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              <circle r="3.5" fill="var(--accent)">
                <animateMotion dur="2.4s" begin={`${i === 0 ? 0 : 0.9}s`} repeatCount="indefinite" path={d} />
              </circle>
            </g>
          ))}
        </svg>
        <Node x={80} y={150} label="Webhook" sub="new lead" shape="trigger">
          <Webhook className="size-5" />
        </Node>
        <Node x={250} y={150} label="AI Agent" sub="classify & draft" shape="agent">
          <Bot className="size-5 text-accent-ink" />
          <TechIcon name="n8n" className="size-5" />
        </Node>
        <Node x={420} y={78} label="Slack" sub="notify team">
          <TechIcon name="Slack" className="size-5" />
        </Node>
        <Node x={420} y={222} label="Jira" sub="create ticket">
          <TechIcon name="Jira" className="size-5" />
        </Node>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */

function ServiceCard({
  index,
  kicker,
  title,
  text,
  items,
  preview,
}: {
  index: string;
  kicker: string;
  title: string;
  text: string;
  items: string[];
  preview: React.ReactNode;
}) {
  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-line bg-surface p-2.5 transition-colors hover:border-line-strong">
      <div className="relative isolate flex min-h-[300px] items-center justify-center overflow-hidden rounded-[1.25rem] bg-surface-2 p-6 md:min-h-[340px] md:p-8">
        <div className="absolute inset-0 -z-10 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
        <div className="absolute -bottom-24 left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full bg-[var(--glow)] blur-3xl" />
        {preview}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-7">
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          <span className="text-fg">{index}</span> — {kicker}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{text}</p>
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-accent text-accent-fg">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="What I do"
          title={
            <>
              Two sides <span className="text-muted">of the same work.</span>
            </>
          }
          description="Most teams need both: a front that looks right, and a back office that runs itself. I build the first and automate the second."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <ServiceCard
              index="A"
              kicker="Build"
              title="The parts you see"
              text="Websites and web apps built with Next.js, React and TypeScript: fast, responsive, and easy for your team to keep updating."
              items={BUILD_ITEMS}
              preview={<BuildPreview />}
            />
          </Reveal>
          <Reveal className="h-full" delay={0.08}>
            <ServiceCard
              index="B"
              kicker="Automate with n8n"
              title="The parts that keep things running"
              text="n8n workflows that move data between the tools you already use, so updates, reports and hand-offs happen without anyone pushing them."
              items={AUTOMATE_ITEMS}
              preview={<AutomatePreview />}
            />
          </Reveal>
        </div>

        {/* n8n process */}
        <Reveal className="mt-5">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-line bg-surface md:grid-cols-[240px_repeat(3,1fr)]">
            <div className="flex items-center gap-3 border-b border-line p-6 md:border-r md:border-b-0">
              <span className="grid size-10 place-items-center rounded-xl border border-line-strong bg-surface-2">
                <TechIcon name="n8n" className="size-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">How it goes</p>
                <p className="font-display text-lg font-semibold tracking-tight">An automation project</p>
              </div>
            </div>
            {PROCESS.map((step, i) => (
              <div key={step.title} className="relative border-b border-line p-6 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0">
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                <p className="mt-2 font-display text-xl font-semibold tracking-tight">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
