import React from "react";
import {
  ArrowCurve,
  ArrowStraight,
  CircleScribble,
  Connector,
  Star,
  Underline,
} from "./Annotations";

function Tape({ className = "", width = 70 }: { className?: string; width?: number }) {
  return <span className={`tape ${className}`} style={{ width, height: 18 }} />;
}

function StickyNote({
  children,
  color = "yellow",
  rotate = -2,
  className = "",
  tape = true,
}: {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue" | "mint";
  rotate?: number;
  className?: string;
  tape?: boolean;
}) {
  const bg: Record<string, string> = {
    yellow: "var(--sticky-yellow)",
    pink:   "var(--sticky-pink)",
    blue:   "var(--sticky-blue)",
    mint:   "var(--sticky-mint)",
  };
  return (
    <div
      className={`relative paper-edge anim-float ${className}`}
      style={{
        background: bg[color],
        // @ts-expect-error css var
        "--tilt": `${rotate}deg`,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {tape && <Tape className="-top-2 left-1/2 -translate-x-1/2" width={60} />}
      <div className="px-4 py-3">{children}</div>
    </div>
  );
}

function PaperCard({
  children,
  rotate = 0,
  className = "",
  lines = false,
}: {
  children: React.ReactNode;
  rotate?: number;
  className?: string;
  lines?: boolean;
}) {
  return (
    <div
      className={`relative bg-card paper-edge anim-float-slow ${lines ? "bg-notebook-lines" : ""} ${className}`}
      style={{
        // @ts-expect-error css var
        "--tilt": `${rotate}deg`,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Ambient layered backgrounds */}
      <div className="absolute inset-0 bg-grain opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.35] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 60% at 70% 10%, oklch(0.92 0.04 70 / 0.45), transparent 60%), radial-gradient(60% 50% at 10% 90%, oklch(0.88 0.03 60 / 0.35), transparent 65%)",
        }}
      />

      {/* Top nav */}
      <header className="relative z-30 mx-auto flex max-w-[1400px] items-center justify-between px-10 pt-8">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl font-medium tracking-tight">Faiza</span>
          <span className="font-hand text-ink-faint text-lg">— field notes</span>
        </div>
        <nav className="hidden items-center gap-9 text-sm text-ink-soft md:flex">
          <a href="#work"    className="hover:text-ink transition-colors">Work</a>
          <a href="#about"   className="hover:text-ink transition-colors">About</a>
          <a href="#writing" className="hover:text-ink transition-colors">Writing</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </nav>
        <div className="font-hand text-ink-faint text-base hidden md:block">vol. 04 · 2026</div>
      </header>

      {/* Main grid */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-10 pb-24 pt-16">

        {/* LEFT — meta strip */}
        <aside className="col-span-12 lg:col-span-2 space-y-6 anim-fade-up">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-faint">
            <span className="h-px w-8 bg-ink-faint" />Index 01
          </div>
          <div className="font-hand-alt text-[13px] leading-relaxed text-ink-soft space-y-2">
            <p>· observation</p>
            <p>· interview</p>
            <p className="ink-underline inline-block">· synthesis</p>
            <p>· service map</p>
            <p>· prototype</p>
            <p>· care</p>
          </div>
          <div className="pt-6">
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-faint mb-2">Now</div>
            <p className="text-sm text-ink-soft leading-relaxed">
              Researching how communities navigate{" "}
              <em className="font-display">care infrastructures</em> after a diagnosis.
            </p>
          </div>
        </aside>

        {/* CENTER — headline */}
        <div
          className="col-span-12 lg:col-span-7 relative anim-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-ink" />
            <span className="font-hand text-xl text-ink-soft">a working notebook by Faiza —</span>
          </div>

          <h1 className="font-display text-[clamp(3.4rem,7.2vw,7.4rem)] leading-[0.95] tracking-[-0.02em] text-ink">
            Designing
            <span className="inline-block relative mx-3">
              <span className="relative z-10 italic font-light">beyond</span>
              <Underline className="absolute -bottom-2 left-0 w-full h-4 text-ink-soft" />
            </span>
            <br />
            interfaces<span className="text-ink-soft">.</span>
          </h1>

          <CircleScribble className="absolute left-[42%] top-[38%] hidden h-28 w-44 text-ink-soft/50 lg:block pointer-events-none" />

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft">
            UX Researcher &amp; Service Designer exploring
            <span className="font-display italic"> people, systems, and care </span>
            through research-driven design.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#work"
              className="group relative inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View Case Studies
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-ink underline-offset-[6px] decoration-ink-faint hover:decoration-ink underline"
            >
              About Me
            </a>
            <span className="font-hand text-ink-faint text-base ml-2 hidden sm:inline-flex items-center gap-2">
              <ArrowCurve flip className="h-9 w-12 text-ink-faint -rotate-12" />
              start here
            </span>
          </div>

          <div className="mt-16 max-w-md border-t border-rule pt-5">
            <p className="text-xs uppercase tracking-[0.22em] text-ink-faint mb-2">Field note · 23 Apr</p>
            <p className="font-hand-alt text-[15px] text-ink-soft leading-relaxed">
              "The interface is the smallest part of the experience. The system around it is the design."
            </p>
          </div>
        </div>

        {/* RIGHT — research wall collage */}
        <div className="col-span-12 lg:col-span-3 relative min-h-[640px]">

          <PaperCard rotate={-4} className="absolute -top-4 right-2 w-[230px] p-3">
            <Tape className="-top-3 left-6 -rotate-12" width={75} />
            <Tape className="-top-3 right-6 rotate-12" width={75} />
            <div
              className="aspect-[4/5] w-full rounded-sm"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.72 0.04 60), oklch(0.55 0.05 50)), repeating-linear-gradient(45deg, oklch(0 0 0 / 0.05) 0 2px, transparent 2px 6px)",
                backgroundBlendMode: "multiply",
              }}
            />
            <p className="mt-2 font-hand text-base text-ink-soft text-center">Karachi clinic — Mar 2025</p>
          </PaperCard>

          <StickyNote color="yellow" rotate={5} className="absolute top-[260px] right-[140px] w-[180px]">
            <p className="font-hand-alt text-[13px] text-ink leading-snug">
              <strong>Insight 07.</strong> Patients trust people, not portals. The UI must defer to the relationship.
            </p>
          </StickyNote>

          <PaperCard rotate={2} className="absolute top-[300px] right-0 w-[230px] p-4 bg-paper">
            <div className="text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-2">Affinity cluster</div>
            <div className="space-y-1.5">
              {(["waiting", "language", "follow-up", "trust", "signage"] as const).map((t, i) => (
                <div key={t} className="flex items-center gap-2 text-[13px] text-ink-soft">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-sm"
                    style={{
                      background: [
                        "var(--sticky-yellow)",
                        "var(--sticky-pink)",
                        "var(--sticky-blue)",
                        "var(--sticky-mint)",
                        "var(--accent)",
                      ][i],
                    }}
                  />
                  <span>{t}</span>
                  <span className="ml-auto font-hand text-ink-faint">×{[8, 5, 12, 3, 2][i]}</span>
                </div>
              ))}
            </div>
          </PaperCard>

          <StickyNote color="pink" rotate={-6} className="absolute top-[540px] right-[110px] w-[200px]">
            <p className="font-hand text-[17px] text-ink leading-tight">
              "I just want someone to explain what's next."
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-ink-faint">P-04 · interview</p>
          </StickyNote>

          <Connector className="absolute top-[200px] right-[80px] h-40 w-52 text-ink-faint/60 pointer-events-none" />
        </div>
      </div>

      {/* Floating fragments */}
      <ArrowCurve className="absolute left-[48%] top-[58%] hidden h-20 w-28 text-ink-soft/70 lg:block pointer-events-none anim-float" />
      <Star className="absolute left-[36%] top-[28%] hidden h-7 w-7 text-ink-soft/60 lg:block" />

      <StickyNote
        color="mint"
        rotate={-3}
        tape={false}
        className="absolute bottom-24 left-[12%] w-[170px] hidden lg:block"
      >
        <p className="font-hand-alt text-[12px] text-ink leading-snug">
          <strong>Method:</strong> shadowing + diary studies + co-design workshops.
        </p>
      </StickyNote>

      <div className="absolute bottom-12 right-10 hidden lg:flex items-center gap-3 anim-float">
        <ArrowStraight className="h-6 w-24 text-ink-faint" />
        <div
          className="relative paper-edge bg-card px-4 py-2"
          style={{
            transform: "rotate(2deg)",
            clipPath: "polygon(0 0, 100% 0, 98% 100%, 2% 100%, 0 90%)",
          }}
        >
          <Tape className="-top-2 left-1/2 -translate-x-1/2 rotate-3" width={50} />
          <p className="font-hand text-[15px] text-ink-soft">scroll to read the archive ↓</p>
        </div>
      </div>

      {/* Footer marginalia */}
      <div className="absolute bottom-5 left-0 right-0 mx-auto flex max-w-[1400px] items-center justify-between px-10 text-[11px] uppercase tracking-[0.22em] text-ink-faint">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-ink-faint" />chapter one — practice
        </div>
        <div className="flex items-center gap-6">
          <span>karachi · london</span>
          <span>est. 2019</span>
          <span className="font-hand normal-case tracking-normal text-sm">page 01 / 12</span>
        </div>
      </div>
    </section>
  );
}
