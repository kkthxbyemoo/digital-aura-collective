import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { LangToggle } from "./LangToggle";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const links = [
    { href: "#servicos", label: t("nav_services") },
    { href: "#pacotes", label: t("nav_packages") },
    { href: "#processo", label: t("nav_process") },
    { href: "#faq", label: t("nav_faq") },
    { href: "#contacto", label: t("nav_contact") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/60 border-b border-border" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between gap-6">
        <a href="#top" className="shrink-0"><Logo className="h-9" /></a>

        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden glass rounded-full p-2"
            aria-label="menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-5 glass rounded-2xl p-3 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm text-foreground/90 hover:bg-foreground/5 rounded-xl"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}