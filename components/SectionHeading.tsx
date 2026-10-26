import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  aside?: ReactNode;
}

export default function SectionHeading({ index, eyebrow, title, description, aside }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <Reveal className="max-w-2xl">
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          <span className="text-accent-ink">{index}</span>
          <span className="h-px w-8 bg-line-strong" />
          {eyebrow}
        </p>
        <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
        )}
      </Reveal>
      {aside && <Reveal delay={0.1}>{aside}</Reveal>}
    </div>
  );
}
