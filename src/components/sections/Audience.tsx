import { useI18n } from "@/lib/i18n";
import { Scissors, Utensils, Stethoscope, ShoppingBag, Dumbbell, Briefcase } from "lucide-react";
import type { DictKey } from "@/lib/dict";

const items: { icon: typeof Scissors; key: DictKey }[] = [
  { icon: Scissors, key: "audience_1" },
  { icon: Utensils, key: "audience_2" },
  { icon: Stethoscope, key: "audience_3" },
  { icon: ShoppingBag, key: "audience_4" },
  { icon: Dumbbell, key: "audience_5" },
  { icon: Briefcase, key: "audience_6" },
];

export function Audience() {
  const { t } = useI18n();
  return (
    <section className="py-16 border-y border-border/60 bg-surface/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          {t("audience_title")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="glass rounded-2xl px-4 py-5 flex flex-col items-center gap-3 text-center hover:border-foreground/20 transition-colors group"
            >
              <Icon className="size-6 text-[var(--neon-cyan)] group-hover:text-[var(--neon-magenta)] transition-colors" strokeWidth={1.6} />
              <span className="text-sm text-foreground/80">{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}