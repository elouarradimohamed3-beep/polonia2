import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeading, glass } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { path, sectionHref } from "@/lib/routes";
import { pageMetadata, routePaths, webPageLd } from "@/lib/seo";

const copy = {
  en: {
    title: "About Polonia IPTV",
    description: "Polonia IPTV is an internet TV service for people who want Polish-language television and on-demand programmes on any screen, with support in English and Polish.",
    eyebrow: "About us",
    h1: "About Polonia IPTV",
    lead: "Polonia IPTV is an internet TV (IPTV) service for people who want Polish-language television and on-demand programmes on any screen, at home or abroad.",
    blocks: [
      { h: "Who it is for", p: "Poles living abroad, people with Polish roots, learners of Polish and visitors to Poland who want to follow Polish television without a satellite dish or a cable contract." },
      { h: "How we work", p: "We keep things simple: clear plans by length and number of devices, a free trial before you pay, step-by-step setup guides and support in English and Polish." },
      { h: "Rights and responsibility", p: "We respect intellectual property. If you are a rights holder and believe something infringes your rights, our copyright policy explains how to contact us and what we do next." },
    ],
    links: ["Read the setup guide", "See plans", "Copyright policy"],
    crumb: "About",
  },
  pl: {
    title: "O Polonia IPTV",
    description: "Polonia IPTV to usługa telewizji internetowej dla osób, które chcą oglądać polskojęzyczną telewizję i programy na żądanie na każdym ekranie, z obsługą po polsku i angielsku.",
    eyebrow: "O nas",
    h1: "O Polonia IPTV",
    lead: "Polonia IPTV to usługa telewizji internetowej (IPTV) dla osób, które chcą oglądać polskojęzyczną telewizję i programy na żądanie na każdym ekranie, w domu i za granicą.",
    blocks: [
      { h: "Dla kogo", p: "Dla Polaków mieszkających za granicą, osób z polskimi korzeniami, uczących się polskiego i odwiedzających Polskę, którzy chcą śledzić polską telewizję bez anteny satelitarnej i umowy z operatorem kablowym." },
      { h: "Jak działamy", p: "Stawiamy na prostotę: jasne plany według okresu i liczby urządzeń, darmowy test przed zakupem, instrukcje krok po kroku i wsparcie po polsku i angielsku." },
      { h: "Prawa i odpowiedzialność", p: "Szanujemy własność intelektualną. Jeśli jesteś właścicielem praw i uważasz, że coś je narusza, nasza polityka praw autorskich wyjaśnia, jak się z nami skontaktować i co zrobimy dalej." },
    ],
    links: ["Zobacz instrukcję instalacji", "Zobacz plany", "Prawa autorskie"],
    crumb: "O nas",
  },
} as const;

export const aboutMetadata = (lang: Lang): Metadata =>
  pageMetadata({ lang, title: copy[lang].title, description: copy[lang].description, paths: routePaths("about") });

export function AboutPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const p = path(lang, "about");
  return (
    <>
      <Breadcrumbs lang={lang} trail={[{ name: t.crumb, path: p }]} />
      <JsonLd data={webPageLd({ lang, path: p, name: t.title, description: t.description, type: "AboutPage" })} />
      <Section>
        <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.h1} sub={t.lead} />
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {t.blocks.map((b) => (
            <div key={b.h} className={`${glass} p-7`}>
              <h2 className="text-lg font-extrabold text-white">{b.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{b.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href={path(lang, "guide")} className="btn btn-outline">{t.links[0]}</Link>
          <Link href={sectionHref(lang, "plans")} className="btn btn-primary">{t.links[1]}</Link>
          <Link href={path(lang, "copyright")} className="btn btn-outline">{t.links[2]}</Link>
        </div>
      </Section>
    </>
  );
}
