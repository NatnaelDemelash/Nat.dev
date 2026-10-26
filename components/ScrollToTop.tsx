"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, useScroll } from "motion/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 600);
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={false}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20, pointerEvents: isVisible ? "auto" : "none" }}
      transition={{ duration: 0.3 }}
      className="fixed right-5 bottom-5 z-40 grid size-12 place-items-center rounded-full border border-line-strong bg-surface/80 text-fg shadow-lg backdrop-blur-md hover:bg-surface-2"
      aria-label="Scroll to top"
    >
      {/* scroll progress ring */}
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 48 48" aria-hidden>
        <motion.circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      <ArrowUp className="size-4" />
    </motion.button>
  );
}
