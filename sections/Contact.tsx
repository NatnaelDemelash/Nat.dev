"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, MapPin, Timer } from "lucide-react";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { PROFILE } from "@/lib/data";

function LocalTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: PROFILE.timezone,
      hour: "2-digit",
      minute: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time ?? "--:--"}</span>;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.25rem] border border-line bg-surface p-8 md:p-14">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top_right,#000,transparent_70%)]" />
            <div className="pointer-events-none absolute -top-32 -right-32 -z-10 size-[480px] rounded-full bg-[var(--glow)] blur-[100px]" />

            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-3">
                <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  <span className="text-accent-ink">06</span>
                  <span className="h-px w-8 bg-line-strong" />
                  Contact
                </p>
                <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-semibold tracking-[-0.03em]">
                  Have a project in mind?{" "}
                  <span className="text-accent-ink">Let&apos;s build it.</span>
                </h2>
                <p className="mt-6 max-w-lg text-lg text-muted">
                  A sleek frontend, an automation that kills busywork, or a custom internal tool — tell me what
                  you need and I&apos;ll get back to you.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-fg shadow-[0_10px_40px_-12px_var(--btn-glow)] transition-transform hover:scale-[1.03]"
                  >
                    Email me
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-surface-2/60 px-5 py-3.5 font-mono text-sm transition-colors hover:bg-surface-2"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4 text-muted" />}
                    {copied ? "Copied!" : PROFILE.email}
                  </button>
                </div>
              </div>

              <dl className="grid content-start gap-3 lg:col-span-2">
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface-2/50 p-4">
                  <MapPin className="size-5 text-accent-ink" />
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-subtle">Based in</dt>
                    <dd className="font-medium">{PROFILE.location}</dd>
                  </div>
                  <dd className="ml-auto text-right font-mono text-sm text-muted">
                    <LocalTime />
                    <span className="block text-[10px] text-subtle">UTC+3</span>
                  </dd>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface-2/50 p-4">
                  <Timer className="size-5 text-accent-ink" />
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-subtle">Reply time</dt>
                    <dd className="font-medium">Within 24–48 hours</dd>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface-2/50 p-4">
                  <span className="relative flex size-5 items-center justify-center">
                    <span className="absolute size-3 animate-ping-slow rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative size-2 rounded-full bg-emerald-400" />
                  </span>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-subtle">Status</dt>
                    <dd className="font-medium">Open to freelance &amp; remote</dd>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {[
                    { label: "LinkedIn", href: PROFILE.linkedin, icon: Linkedin },
                    { label: "GitHub", href: PROFILE.github, icon: Github },
                  ].map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-line p-4 transition-colors hover:border-accent hover:bg-accent hover:text-accent-fg"
                    >
                      <span className="flex items-center gap-2 font-medium">
                        <Icon className="size-4" /> {label}
                      </span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                    </a>
                  ))}
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
