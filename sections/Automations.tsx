import { Clock3 } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import WorkflowGraph from "@/components/WorkflowGraph";
import { AUTOMATIONS } from "@/lib/data";

export default function Automations() {
  return (
    <section id="automations" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-surface/50" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)]" />
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Automations"
          title={
            <>
              Workflows that run <span className="text-muted">while your team doesn&apos;t have to.</span>
            </>
          }
          description="I connect the tools you already use — Jira, Slack, Gmail, Drive, Trello — with n8n, so updates, triage and hand-offs happen on their own."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {AUTOMATIONS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col rounded-[1.75rem] border border-line bg-surface p-2.5 transition-colors hover:border-line-strong">
                <div className="relative overflow-hidden rounded-[1.25rem] bg-surface-2 px-5 py-8">
                  <div className="absolute -top-16 left-1/2 size-40 -translate-x-1/2 rounded-full bg-[var(--glow)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <WorkflowGraph steps={a.steps} size="lg" className="relative" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{a.description}</p>
                  <p className="mt-auto flex items-center gap-2 pt-5 text-xs text-muted">
                    <Clock3 className="size-3.5 text-accent-ink" />
                    Removes: <span className="text-fg">{a.saves}</span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
