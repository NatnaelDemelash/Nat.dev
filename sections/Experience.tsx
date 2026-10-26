"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { EXPERIENCES } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="py-24 md:py-32">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-32">
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <span className="text-accent-ink">05</span>
              <span className="h-px w-8 bg-line-strong" />
              Experience
            </p>
            <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Where I&apos;ve <span className="text-muted">been building.</span>
            </h2>
            <p className="mt-4 text-muted">
              From running operations to owning the frontend — I know the processes I automate because
              I&apos;ve lived them.
            </p>
          </Reveal>
        </div>

        <ol ref={listRef} className="relative lg:col-span-8">
          <span className="absolute top-2 bottom-2 left-[7px] w-px bg-line-strong" aria-hidden />
          <motion.span
            style={{ scaleY: progress }}
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-accent"
            aria-hidden
          />

          {EXPERIENCES.map((exp, i) => (
            <li key={exp.role} className="relative pb-12 pl-10 last:pb-0">
              <span
                className={cn(
                  "absolute top-1.5 left-0 grid size-[15px] place-items-center rounded-full border-2 bg-bg",
                  exp.current ? "border-accent" : "border-line-strong"
                )}
              >
                {exp.current && <span className="size-1.5 rounded-full bg-accent" />}
              </span>

              <Reveal delay={i * 0.05}>
                <div className="rounded-[1.5rem] border border-line bg-surface p-6 transition-colors hover:border-line-strong md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-xs uppercase tracking-widest text-muted">{exp.period}</p>
                    {exp.current && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-ink">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {exp.role} <span className="text-muted">@ {exp.company}</span>
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-accent-ink" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <li key={t} className="rounded-lg bg-surface-2 px-2.5 py-1 text-xs text-muted">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
