import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Audience } from "@/components/sections/Audience";
import { Services } from "@/components/sections/Services";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colosso Digital — Sites para pequenos negócios" },
      { name: "description", content: "Sites rápidos, bonitos e eficazes para pequenos negócios portugueses. Linguagem clara, preços transparentes." },
      { property: "og:title", content: "Colosso Digital — Sites para pequenos negócios" },
      { property: "og:description", content: "Construímos a sua presença digital sem complicar. Pacotes a partir de 299€." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <Nav />
        <main>
          <Hero />
          <Audience />
          <Services />
          <Packages />
          <Process />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
