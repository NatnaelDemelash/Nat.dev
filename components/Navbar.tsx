"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
      aria-label="Toggle theme"
    >
      {mounted && (isDark ? <Sun className="size-4" /> : <Moon className="size-4" />)}
    </button>
  );
}

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ["hero", ...NAV_LINKS.map((l) => l.id), "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border p-1.5 pl-2 backdrop-blur-xl transition-all duration-500",
          scrolled
            ? "border-line-strong bg-surface/75 shadow-[0_8px_32px_-12px_rgb(0_0_0/0.35)]"
            : "border-line bg-surface/40"
        )}
      >
        <a href="#hero" className="flex items-center gap-2.5 rounded-full pr-3" onClick={() => setOpen(false)}>
          <span className="relative">
            <Image
              src="/profilev2.jpg"
              alt="Natnael Demelash"
              width={32}
              height={32}
              className="size-8 rounded-full object-cover"
            />
            <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-surface bg-emerald-400" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">Natnael</span>
        </a>

        <ul className="hidden items-center md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "relative block rounded-full px-4 py-2 text-sm transition-colors",
                  active === link.id ? "text-fg" : "text-muted hover:text-fg"
                )}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-2"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-transform hover:scale-[1.03] sm:flex"
          >
            Let&apos;s talk
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full text-fg hover:bg-surface-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-20 rounded-3xl border border-line-strong bg-surface/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          >
            {[...NAV_LINKS, { label: "Contact", id: "contact" }].map((link, i) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-2xl font-medium tracking-tight hover:bg-surface-2"
              >
                {link.label}
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
