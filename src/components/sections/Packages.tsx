import { useI18n } from "@/lib/i18n";
import { Check, ArrowRight } from "lucide-react";
import { SectionHead } from "./Services";
import type { DictKey } from "@/lib/dict";

type Pkg = { name: DictKey; tag: DictKey; price: DictKey; features: DictKey[]; popular?: boolean };

const packages: Pkg[] = [
  { name: "p1_name", tag: "p1_tag", price: "p1_price", features: ["p1_f1","p1_f2","p1_f3","p1_f4"] },
  { name: "p2_name", tag: "p2_tag", price: "p2_price", popular: true, features: ["p2_f1","p2_f2","p2_f3","p2_f4","p2_f5","p2_f6"] },
  { name: "p3_name", tag: "p3_tag", price: "p3_price", features: ["p3_f1","p3_f2","p3_f3","p3_f4","p3_f5","p3_f6"] },
  { name: "p4_name", tag: "p4_tag", price: "p4_price", features: ["p4_f1","p4_f2","p4_f3","p4_f4","p4_f5","p4_f6"] },
];

const extras: { key: DictKey; price: DictKey; note?: DictKey }[] = [
  { key: "e1", price: "e1_price", note: "e1_note" },
  { key: "e2", price: "e2_price", note: "e2_note" },
  { key: "e3", price: "e3_price", note: "e3_note" },
  { key: "e4", price: "e4_price", note: "e4_note" },
  { key: "e5", price: "e5_price", note: "e5_note" },
  { key: "e6", price: "e6_price", note: "e6_note" },
  { key: "e7", price: "e7_price", note: "e7_note" },
  { key: "e8", price: "e8_price", note: "e8_note" },
  { key: "e9", price: "e9_price", note: "e9_note" },
];

export function Packages() {
  const { t } = useI18n();
  return (
    <section id="pacotes" className="py-28 sm:py-36 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={t("packages_eyebrow")} title={t("packages_title")} sub={t("packages_sub")} />

        <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-7 flex flex-col ${p.popular ? "text-primary-foreground glow" : "glass"}`}
              style={p.popular ? { background: "var(--gradient-aurora)" } : undefined}
            >
              {p.popular && (
                <span className="absolute -top-3 left-7 inline-flex items-center rounded-full bg-background text-foreground border border-border px-3 py-1 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  ✦ {t("pop_badge")}
                </span>
              )}
              <h3 className={`text-xl font-semibold ${p.popular ? "" : "text-foreground"}`}>{t(p.name)}</h3>
              <p className={`text-sm mt-1 ${p.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {t(p.tag)}
              </p>
              <div className={`mt-6 text-4xl font-bold tracking-tight ${p.popular ? "" : "text-gradient"}`}>
                {t(p.price)}
              </div>
              <ul className="mt-7 space-y-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm">
                    <Check className={`size-4 mt-0.5 shrink-0 ${p.popular ? "text-primary-foreground" : "text-[var(--neon-cyan)]"}`} strokeWidth={2.4} />
                    <span className={p.popular ? "text-primary-foreground/95" : "text-foreground/85"}>
                      {t(f)}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-8 group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  p.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "border border-border text-foreground hover:bg-foreground/5"
                }`}
              >
                {t("cta_primary")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-3xl p-7 sm:p-10">
          <div>
            <h3 className="text-2xl font-semibold">{t("extras_title")}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t("extras_sub")}</p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {extras.map((e) => (
              <li key={e.key} className="rounded-2xl border border-border bg-background/40 p-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{t(e.key)}</p>
                  {e.note && <p className="text-xs text-muted-foreground mt-1">{t(e.note)}</p>}
                </div>
                <span className="text-sm font-semibold text-gradient whitespace-nowrap">{t(e.price)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}