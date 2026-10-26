import { ArrowUp } from "lucide-react";
import Container from "./Container";
import ScrambleText from "./ScrambleText";
import { PROFILE } from "@/lib/data";

const footerLinks = [
  { name: "GitHub", href: PROFILE.github },
  { name: "LinkedIn", href: PROFILE.linkedin },
  { name: "Email", href: `mailto:${PROFILE.email}` },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line pt-14">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">{PROFILE.name}</p>
            <p className="text-sm text-muted">{PROFILE.role}</p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent-ink"
              >
                <ScrambleText text={name} />
              </a>
            ))}
            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-fg"
            >
              Back to top <ArrowUp className="size-3" />
            </a>
          </nav>
        </div>
        <p className="mt-10 text-xs text-subtle">
          &copy; {new Date().getFullYear()} {PROFILE.name}. Designed &amp; built in Addis Ababa.
        </p>
      </Container>

      <p
        aria-hidden
        className="pointer-events-none mt-6 -mb-[0.22em] text-center font-display text-[22vw] leading-none font-bold tracking-[-0.06em] text-outline select-none"
      >
        NATNAEL
      </p>
    </footer>
  );
}
