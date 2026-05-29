import { useI18n } from "@/lib/i18n";
import { SectionHead } from "./Services";
import type { DictKey } from "@/lib/dict";

const steps: { t: DictKey; d: DictKey }[] = [
  { t: "step1_t", d: "step1_d" },
  { t: "step2_t", d: "step2_d" },
  { t: "step3_t", d: "step3_d" },
  { t: "step4_t", d: "step4_d" },
  { t: "step5_t", d: "step5_d" },
];

export function Process() {
  const { t } = useI18n();
  return (
    <section id="processo" className="py-28 sm:py-36 relative">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,oklch(0.85 0.18 200 / .6),transparent)" }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={t("process_eyebrow")} title={t("process_title")} sub={t("process_sub")} />

        <ol className="mt-16 relative grid gap-5 lg:grid-cols-5">
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          {steps.map((s, i) => (
            <li key={s.t} className="relative glass rounded-3xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span
                  className="inline-flex size-12 items-center justify-center rounded-2xl text-lg font-bold"
                  style={{
                    background: "var(--gradient-aurora)",
                    color: "oklch(0.13 0.025 270)",
                    boxShadow: "0 0 30px -8px oklch(0.65 0.25 290 / 0.6)",
                  }}
                >
                  0{i + 1}
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  STEP / {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{t(s.t)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(s.d)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}