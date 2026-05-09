export function CircleScribble({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden>
      <path
        d="M30,60 C30,20 90,12 130,18 C175,25 188,55 180,80 C170,108 110,114 70,104 C32,95 22,80 32,55 C40,38 80,30 120,32"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowCurve({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 220 140" className={className} fill="none" aria-hidden
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d="M10,20 C70,10 130,40 150,90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M138,72 L152,92 L130,96" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowStraight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 40" className={className} fill="none" aria-hidden>
      <path d="M4,20 C60,12 120,28 170,20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M158,12 L172,20 L158,28" stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 18" className={className} fill="none" aria-hidden preserveAspectRatio="none">
      <path d="M2,10 C60,2 140,16 238,6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function Connector({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 200" className={className} fill="none" aria-hidden>
      <path
        d="M10,180 C80,160 110,80 200,60 L260,40"
        stroke="currentColor" strokeWidth="1.3" strokeDasharray="4 5" strokeLinecap="round"
      />
      <circle cx="10"  cy="180" r="3.5" fill="currentColor" />
      <circle cx="260" cy="40"  r="3.5" fill="currentColor" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path
        d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
      />
    </svg>
  );
}
