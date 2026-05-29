import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-3">
          <Logo className="h-8" />
          <p className="text-sm text-muted-foreground max-w-sm">{t("footer_tagline")}</p>
        </div>
        <p className="text-xs text-muted-foreground tracking-wider">
          © {new Date().getFullYear()} COLOSSO DIGITAL · {t("footer_rights")}
        </p>
      </div>
    </footer>
  );
}