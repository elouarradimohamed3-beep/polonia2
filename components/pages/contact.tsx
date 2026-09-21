import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeading, glass, glassHover } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { path, sectionHref } from "@/lib/routes";
import { pageMetadata, routePaths, webPageLd } from "@/lib/seo";
import { SITE, whatsappLink } from "@/lib/site";

const copy = {
  en: {
    title: "Contact Polonia IPTV",
    description: "Contact Polonia IPTV by WhatsApp or e-mail in English or Polish. Ask about plans, request a free trial or get help with setup.",
    eyebrow: "Contact",
    h1: "Talk to us in English or Polish",
    sub: "Ask about plans, request a free trial or get help with setup. We reply to WhatsApp and e-mail messages in both languages.",
    wa: "WhatsApp",
    waText: "The quickest way to reach us.",
    waBtn: "Open WhatsApp",
    waMsg: "Hello! I have a question about Polonia IPTV.",
    mail: "E-mail",
    mailText: "For longer questions and copyright notices.",
    trialTitle: "Want to try it first?",
    trialText: "Request a free trial and check the service on your own device.",
    trialBtn: "Get a free trial",
    crumb: "Contact",
    copyright: "Rights holders: see our copyright policy.",
  },
  pl: {
    title: "Kontakt z Polonia IPTV",
    description: "Skontaktuj się z Polonia IPTV przez WhatsApp lub e-mail po polsku albo angielsku. Zapytaj o plany, poproś o darmowy test lub pomoc w instalacji.",
    eyebrow: "Kontakt",
    h1: "Porozmawiaj z nami po polsku lub angielsku",
    sub: "Zapytaj o plany, poproś o darmowy test lub pomoc w instalacji. Odpowiadamy na wiadomości WhatsApp i e-mail w obu językach.",
    wa: "WhatsApp",
    waText: "Najszybszy sposób, aby się z nami skontaktować.",
    waBtn: "Otwórz WhatsApp",
    waMsg: "Cześć! Mam pytanie o Polonia IPTV.",
    mail: "E-mail",
    mailText: "Dla dłuższych pytań i zgłoszeń praw autorskich.",
    trialTitle: "Chcesz najpierw wypróbować?",
    trialText: "Poproś o darmowy test i sprawdź usługę na własnym urządzeniu.",
    trialBtn: "Odbierz darmowy test",
    crumb: "Kontakt",
    copyright: "Właściciele praw: zobacz naszą politykę praw autorskich.",
  },
} as const;

export const contactMetadata = (lang: Lang): Metadata =>
  pageMetadata({ lang, title: copy[lang].title, description: copy[lang].description, paths: routePaths("contact") });

export function ContactPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const p = path(lang, "contact");
  return (
    <>
      <Breadcrumbs lang={lang} trail={[{ name: t.crumb, path: p }]} />
      <JsonLd data={webPageLd({ lang, path: p, name: t.title, description: t.description, type: "ContactPage" })} />
      <Section>
        <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.h1} sub={t.sub} />
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          <div className={`${glass} ${glassHover} p-7`}>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30"><MessageCircle size={24} aria-hidden="true" /></span>
            <h2 className="mt-4 text-xl font-extrabold text-white">{t.wa}</h2>
            <p className="mt-1 text-sm text-zinc-400">{t.waText}</p>
            <p className="mt-3 font-bold text-white">{SITE.phoneDisplay}</p>
            <a href={whatsappLink(t.waMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-cream mt-5">{t.waBtn}</a>
          </div>
          <div className={`${glass} ${glassHover} p-7`}>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/30"><Mail size={24} aria-hidden="true" /></span>
            <h2 className="mt-4 text-xl font-extrabold text-white">{t.mail}</h2>
            <p className="mt-1 text-sm text-zinc-400">{t.mailText}</p>
            <p className="mt-3 break-all font-bold text-white">{SITE.email}</p>
            <a href={`mailto:${SITE.email}`} className="btn btn-outline mt-5">{t.mail}</a>
          </div>
        </div>
        <div className={`${glass} mx-auto mt-6 max-w-3xl p-7 text-center`}>
          <h2 className="text-xl font-extrabold text-white">{t.trialTitle}</h2>
          <p className="mt-2 text-zinc-400">{t.trialText}</p>
          <Link href={sectionHref(lang, "trial")} className="btn btn-primary mt-5">{t.trialBtn}</Link>
        </div>
        <p className="mt-8 text-center text-sm text-zinc-400">
          <Link href={path(lang, "copyright")} className="text-accent underline underline-offset-2">{t.copyright}</Link>
        </p>
      </Section>
    </>
  );
}
