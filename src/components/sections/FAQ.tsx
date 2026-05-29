import { useI18n } from "@/lib/i18n";
import { SectionHead } from "./Services";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { DictKey } from "@/lib/dict";

const faqs: { q: DictKey; a: DictKey }[] = [
  { q: "faq_q1", a: "faq_a1" },
  { q: "faq_q2", a: "faq_a2" },
  { q: "faq_q3", a: "faq_a3" },
  { q: "faq_q4", a: "faq_a4" },
  { q: "faq_q5", a: "faq_a5" },
  { q: "faq_q6", a: "faq_a6" },
];

export function FAQ() {
  const { t } = useI18n();
  return (
    <section id="faq" className="py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHead eyebrow={t("faq_eyebrow")} title={t("faq_title")} />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="glass rounded-2xl border-0 px-5 sm:px-6 data-[state=open]:border-foreground/15"
            >
              <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-foreground hover:no-underline py-5">
                {t(f.q)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {t(f.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}