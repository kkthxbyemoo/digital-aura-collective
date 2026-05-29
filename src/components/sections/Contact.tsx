import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SectionHead } from "./Services";
import { Check, Send, Sparkles } from "lucide-react";
import type { DictKey } from "@/lib/dict";

const packageKeys: DictKey[] = ["p1_name", "p2_name", "p3_name", "p4_name"];
const extraKeys: DictKey[] = ["e1", "e2", "e3", "e4", "e5"];

const inputCls =
  "w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-[var(--neon-cyan)] focus:ring-2 focus:ring-[var(--neon-cyan)]/20 transition-colors";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{children}</span>;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </label>
  );
}

export function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: "", business: "", email: "", phone: "", pkg: "p2_name", extras: [] as string[], topics: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const toggleExtra = (k: string) =>
    setForm((f) => ({ ...f, extras: f.extras.includes(k) ? f.extras.filter((x) => x !== k) : [...f.extras, k] }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = t("f_required");
    if (!form.email.trim()) errs.email = t("f_required");
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = t("f_invalid_email");
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSent(true);
  };

  return (
    <section id="contacto" className="py-28 sm:py-36 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "radial-gradient(ellipse at 50% 50%, oklch(0.65 0.25 290 / .25), transparent 60%)" }}
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHead eyebrow={t("contact_eyebrow")} title={t("contact_title")} sub={t("contact_sub")} />

        <div className="mt-14 glass rounded-3xl p-6 sm:p-10 relative">
          {sent ? (
            <div className="py-16 text-center flex flex-col items-center gap-5">
              <div
                className="size-16 rounded-2xl inline-flex items-center justify-center"
                style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-neon)" }}
              >
                <Sparkles className="size-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">{t("f_sent_title")}</h3>
              <p className="text-muted-foreground max-w-md">{t("f_sent_desc")}</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
              <Field label={t("f_name")} error={errors.name}>
                <input className={inputCls} placeholder={t("f_name_ph")} value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </Field>
              <Field label={t("f_business")}>
                <input className={inputCls} placeholder={t("f_business_ph")} value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })} />
              </Field>
              <Field label={t("f_email")} error={errors.email}>
                <input type="email" className={inputCls} placeholder={t("f_email_ph")} value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </Field>
              <Field label={t("f_phone")}>
                <input className={inputCls} placeholder={t("f_phone_ph")} value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </Field>

              <div className="sm:col-span-2">
                <Label>{t("f_package")}</Label>
                <div className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {packageKeys.map((k) => {
                    const active = form.pkg === k;
                    return (
                      <button type="button" key={k} onClick={() => setForm({ ...form, pkg: k })}
                        className={`rounded-2xl p-4 text-left text-sm transition-all border ${active ? "border-transparent text-primary-foreground" : "border-border bg-background/40 text-foreground hover:border-foreground/30"}`}
                        style={active ? { background: "var(--gradient-aurora)", boxShadow: "var(--shadow-neon)" } : undefined}>
                        <span className="block font-medium">{t(k)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="sm:col-span-2">
                <Label>{t("f_extras")}</Label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {extraKeys.map((k) => {
                    const active = form.extras.includes(k);
                    return (
                      <button type="button" key={k} onClick={() => toggleExtra(k)}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition-all ${active ? "border-transparent text-primary-foreground" : "border-border bg-background/40 text-foreground hover:border-foreground/30"}`}
                        style={active ? { background: "var(--gradient-aurora)" } : undefined}>
                        {active && <Check className="size-3.5" strokeWidth={3} />}
                        {t(k)}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="sm:col-span-2">
                <Label>{t("f_topics")}</Label>
                <textarea className={`${inputCls} mt-2 min-h-32 resize-y`} placeholder={t("f_topics_ph")}
                  value={form.topics} onChange={(e) => setForm({ ...form, topics: e.target.value })} />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button type="submit"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:translate-y-[-2px]"
                  style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-neon)" }}>
                  {t("f_submit")}
                  <Send className="size-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}