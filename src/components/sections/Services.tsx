import { useI18n } from "@/lib/i18n";
import { Globe, ShoppingBag, MessageCircle, Calendar, Search, LineChart } from "lucide-react";
import type { DictKey } from "@/lib/dict";

const services: { icon: typeof Globe; t: DictKey; d: DictKey }[] = [
  { icon: Globe, t: "s1_title", d: "s1_desc" },
  { icon: ShoppingBag, t: "s2_title", d: "s2_desc" },
  { icon: MessageCircle, t: "s3_title", d: "s3_desc" },
  { icon: Calendar, t: "s4_title", d: "s4_desc" },
  { icon: Search, t: "s5_title", d: "s5_desc" },
  { icon: LineChart, t: "s6_title", d: "s6_desc" },
];

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs tracking-[0.3em] uppercase text-[var(--neon-cyan)] mb-4">{eyebrow}</p>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {sub && <p className="mt-5 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function Services() {
  const { t } = useI18n();
  return (
    <section id="servicos" className="py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={t("services_eyebrow")} title={t("services_title")} sub={t("services_sub")} />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, t: tk, d }, i) => (
            <div
              key={tk}
              className="group relative glass rounded-3xl p-7 overflow-hidden hover:border-foreground/20 transition-all"
            >
              <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: "var(--gradient-aurora-soft)" }}
              />
              <div className="relative">
                <div
                  className="inline-flex size-12 items-center justify-center rounded-2xl mb-5"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.85 0.18 200 / 0.18), oklch(0.65 0.25 290 / 0.18))",
                    border: "1px solid oklch(1 0 0 / 0.08)",
                  }}
                >
                  <Icon className="size-5" stroke={i % 2 === 0 ? "oklch(0.85 0.18 200)" : "oklch(0.68 0.27 330)"} strokeWidth={1.7} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t(tk)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(d)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}