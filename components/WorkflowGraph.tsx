"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import TechIcon from "./TechIcon";

interface WorkflowGraphProps {
  steps: string[];
  size?: "sm" | "lg";
  className?: string;
}

/** n8n-style node chain with animated "data" flowing between nodes. */
export default function WorkflowGraph({ steps, size = "sm", className }: WorkflowGraphProps) {
  const lg = size === "lg";

  return (
    <div className={cn("flex items-center", className)}>
      {steps.map((step, i) => {
        const isHub = step === "n8n" || step.includes("AI");
        return (
          <div key={step} className={cn("flex min-w-0 items-center", i < steps.length - 1 && "flex-1")}>
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 260, damping: 20 }}
              className="flex shrink-0 flex-col items-center gap-2"
            >
              <div
                className={cn(
                  "relative grid place-items-center rounded-2xl border bg-surface shadow-sm",
                  lg ? "size-14 md:size-16" : "size-11",
                  isHub ? "border-accent/60 text-accent-ink" : "border-line-strong text-fg"
                )}
              >
                {isHub && <span className="absolute inset-0 -z-10 rounded-2xl bg-accent/30 blur-xl" />}
                <TechIcon name={step} className={lg ? "size-6" : "size-5"} />
              </div>
              {lg && (
                <span className="max-w-20 text-center font-mono text-[10px] uppercase leading-tight tracking-wider text-muted">
                  {step}
                </span>
              )}
            </motion.div>

            {i < steps.length - 1 && (
              <svg
                className={cn("mx-1 h-2 w-full min-w-4 flex-1 overflow-visible", lg && "-mt-6")}
                preserveAspectRatio="none"
                viewBox="0 0 100 8"
                aria-hidden
              >
                <line x1="0" y1="4" x2="100" y2="4" stroke="var(--line-strong)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <line
                  x1="0"
                  y1="4"
                  x2="100"
                  y2="4"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="flow-line"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
