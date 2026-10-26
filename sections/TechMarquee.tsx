import Container from "@/components/Container";
import TechIcon from "@/components/TechIcon";

const TOOLS = [
  "Next.js",
  "React",
  "TypeScript",
  "n8n",
  "Tailwind CSS",
  "Slack",
  "Node.js",
  "Jira",
  "Supabase",
  "Zapier",
  "Vue",
  "Framer Motion",
  "Firebase",
  "Vercel",
];

function Ticker() {
  return (
    <div className="group flex overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] md:py-8">
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 animate-marquee items-center [animation-duration:70s] group-hover:[animation-play-state:paused]"
        >
          {TOOLS.map((tool, i) => {
            const outlined = i % 2 === 1;
            return (
              <li key={tool} className="flex items-center">
                <span
                  className={
                    outlined
                      ? "font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-none font-semibold tracking-[-0.04em] whitespace-nowrap text-transparent transition-colors duration-300 [-webkit-text-stroke:1px_var(--muted)] hover:text-fg hover:[-webkit-text-stroke:1px_var(--fg)]"
                      : "font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-none font-semibold tracking-[-0.04em] whitespace-nowrap text-fg"
                  }
                >
                  {tool}
                </span>
                <span className="mx-6 grid size-11 shrink-0 rotate-[-6deg] place-items-center rounded-xl border border-line-strong bg-surface text-muted transition-transform duration-300 hover:rotate-0 md:mx-9 md:size-14">
                  <TechIcon name={TOOLS[(i + 1) % TOOLS.length]} className="size-5 md:size-6" />
                </span>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section aria-label="Tools I work with" className="pb-8">
      <Container>
        <div className="border-y border-line">
          <div className="flex items-center justify-between border-b border-dashed border-line py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">
            <span>
              <span className="text-fg">Toolkit</span> — what I ship with
            </span>
            <span className="hidden sm:inline">Frontend · Automation · Tooling</span>
            <span>{String(TOOLS.length).padStart(2, "0")} tools</span>
          </div>
          <Ticker />
        </div>
      </Container>
    </section>
  );
}
