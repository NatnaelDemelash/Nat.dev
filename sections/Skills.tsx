import { Code2, Layers, Server, Workflow } from "lucide-react";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";
import { SKILL_GROUPS } from "@/lib/data";
import { cn } from "@/lib/utils";

const GROUP_ICONS = [Code2, Workflow, Server, Layers];
// Bento placement: two wide cards on the diagonal, two narrow ones.
const SPANS = ["md:col-span-4", "md:col-span-2", "md:col-span-2", "md:col-span-4"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Skills"
          title={
            <>
              A focused toolkit <span className="text-muted">for shipping fast.</span>
            </>
          }
        />

        <div className="grid gap-5 md:grid-cols-6">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = GROUP_ICONS[i];
            const highlight = i === 1;
            return (
              <Reveal key={group.title} delay={i * 0.06} className={SPANS[i]}>
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-6 md:p-7",
                    highlight ? "border-transparent bg-accent text-accent-fg" : "border-line bg-surface"
                  )}
                >
                  {highlight && (
                    <div className="pointer-events-none absolute -right-10 -bottom-12 size-48 rounded-full bg-accent-fg/15 blur-3xl" />
                  )}
                  <div className="relative flex items-start justify-between">
                    <span
                      className={cn(
                        "grid size-11 place-items-center rounded-2xl",
                        highlight ? "bg-accent-fg/10" : "bg-surface-2 text-accent-ink"
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className={cn("font-mono text-xs", highlight ? "text-accent-fg/50" : "text-subtle")}>
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="relative mt-8 font-display text-2xl font-semibold tracking-tight">{group.title}</h3>
                  <p className={cn("relative mt-1 text-sm", highlight ? "text-accent-fg/65" : "text-muted")}>
                    {group.caption}
                  </p>
                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "flex items-center gap-2 rounded-xl px-3 py-2 text-sm",
                          highlight
                            ? "bg-accent-fg/10 font-medium"
                            : "border border-line bg-surface-2/60 text-fg/90"
                        )}
                      >
                        <TechIcon name={item} className="size-4" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
