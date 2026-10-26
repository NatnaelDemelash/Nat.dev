import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Fades content up as it scrolls into view using a CSS scroll-driven animation,
 * so it never waits on JavaScript. Browsers without support just show the content.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <div className={cn("reveal", className)} style={{ "--reveal-delay": delay } as CSSProperties}>
      {children}
    </div>
  );
}
