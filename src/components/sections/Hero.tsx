import { useI18n } from "@/lib/i18n";
import { ArrowRight, MousePointer2 } from "lucide-react";

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative pt-36 sm:pt-44 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_50%_30%,#000_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.85 0.18 200 / .35) 1px,transparent 1px),linear-gradient(90deg,oklch(0.85 0.18 200 / .35) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "grid-pan 24s linear infinite",
        }}
      />
      <div
        className="absolute -top-10 -left-20 size-[420px] rounded-full -z-10 blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.25 290 / .6), transparent 70%)", animation: "float-orb 14s ease-in-out infinite" }}
      />
      <div
        className="absolute top-20 -right-32 size-[520px] rounded-full -z-10 blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, oklch(0.85 0.18 200 / .55), transparent 70%)", animation: "float-orb 18s ease-in-out infinite reverse" }}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-[0.18em] uppercase text-muted-foreground">
          <span className="size-1.5 rounded-full bg-[var(--neon-cyan)] pulse-dot" />
          {t("hero_eyebrow")}
        </div>

        <h1 className="mt-7 text-5xl sm:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight max-w-5xl">
          {t("hero_title_a")} <span className="shimmer-text">{t("hero_title_b")}</span> {t("hero_title_c")}.
        </h1>

        <p className="mt-7 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {t("hero_sub")}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:translate-y-[-2px]"
            style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-neon)" }}
          >
            {t("cta_primary")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#pacotes"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-foreground hover:bg-foreground/5 transition-colors"
          >
            {t("cta_secondary")}
          </a>
        </div>

        <div className="mt-20 flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
          <MousePointer2 className="size-3" />
          {t("hero_scroll")}
        </div>
      </div>
    </section>
  );
}