import { useI18n } from "@/lib/i18n";

export function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="glass inline-flex items-center rounded-full p-0.5 text-[11px] font-medium tracking-[0.2em]">
      <button
        onClick={() => setLang("pt")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          lang === "pt" ? "bg-foreground/90 text-background" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={lang === "pt"}
      >
        PT
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          lang === "en" ? "bg-foreground/90 text-background" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}