/**
 * Colosso Digital — custom mark.
 * A geometric monolith: four stacked slabs forming a "C" silhouette,
 * each slab a tilted parallelogram, washed in the aurora gradient.
 * Designed bespoke for this brand — not a stock logo.
 */
export function Logo({ className = "h-9 w-auto", showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 48 48" className="h-full w-auto" aria-hidden="true">
        <defs>
          <linearGradient id="colosso-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.85 0.18 200)" />
            <stop offset="55%" stopColor="oklch(0.65 0.25 290)" />
            <stop offset="100%" stopColor="oklch(0.68 0.27 330)" />
          </linearGradient>
          <linearGradient id="colosso-edge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* base monolith silhouette: stacked tilted slabs */}
        <g>
          <path d="M10 9 L36 6 L34 14 L12 17 Z" fill="url(#colosso-grad)" opacity="0.95" />
          <path d="M8 18 L34 15 L32 23 L10 26 Z" fill="url(#colosso-grad)" opacity="0.8" />
          <path d="M8 27 L32 24 L30 32 L10 35 Z" fill="url(#colosso-grad)" opacity="0.65" />
          <path d="M10 36 L30 33 L34 42 L12 44 Z" fill="url(#colosso-grad)" opacity="0.9" />
          {/* highlight edges */}
          <path d="M10 9 L36 6 L34 14 L12 17 Z" fill="none" stroke="url(#colosso-edge)" strokeWidth="0.6" />
          {/* core notch — the C opening */}
          <path d="M22 17 L34 15 L32 23 L22 25 Z" fill="oklch(0.13 0.025 270)" />
          <path d="M22 26 L32 24 L30 32 L22 33 Z" fill="oklch(0.13 0.025 270)" />
          {/* punctum */}
          <circle cx="38" cy="24" r="1.8" fill="oklch(0.85 0.18 200)" />
        </g>
      </svg>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-[0.22em] text-foreground">COLOSSO</span>
          <span className="text-[10px] font-medium tracking-[0.4em] text-gradient">DIGITAL</span>
        </div>
      )}
    </div>
  );
}