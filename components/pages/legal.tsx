import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section, glass } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { LEGAL, type LegalKey } from "@/lib/legal";
import { formatDate } from "@/lib/blog";
import { path, type RouteKey } from "@/lib/routes";
import { pageMetadata, routePaths, webPageLd } from "@/lib/seo";
import { COMPANY, SITE } from "@/lib/site";

const labels = {
  en: { updated: "Last updated", contact: "Contact", email: "E-mail", whatsapp: "WhatsApp", company: "Company", address: "Address", tax: "Tax ID" },
  pl: { updated: "Ostatnia aktualizacja", contact: "Kontakt", email: "E-mail", whatsapp: "WhatsApp", company: "Firma", address: "Adres", tax: "NIP / numer podatkowy" },
} as const;

export const legalMetadata = (lang: Lang, key: LegalKey): Metadata =>
  pageMetadata({ lang, title: LEGAL[key][lang].title, description: LEGAL[key][lang].description, paths: routePaths(key as RouteKey) });

export function LegalPage({ lang, docKey }: { lang: Lang; docKey: LegalKey }) {
  const doc = LEGAL[docKey][lang];
  const l = labels[lang];
  const p = path(lang, docKey as RouteKey);
  return (
    <>
      <Breadcrumbs lang={lang} trail={[{ name: doc.title, path: p }]} />
      <JsonLd data={webPageLd({ lang, path: p, name: doc.title, description: doc.description })} />
      <Section>
        <article className="mx-auto max-w-3xl">
          <h1 className="text-gradient text-3xl font-extrabold tracking-tight md:text-4xl">{doc.title}</h1>
          <p className="mt-2 text-sm text-zinc-400">{l.updated}: <time dateTime={doc.updated}>{formatDate(lang, doc.updated)}</time></p>
          <p className="mt-6 leading-relaxed text-zinc-300">{doc.intro}</p>
          <div className="mt-8 space-y-8">
            {doc.sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-xl font-extrabold text-white">{s.h}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-zinc-300">
                  {s.p?.map((x) => <p key={x}>{x}</p>)}
                  {s.ul && (
                    <ul className="list-disc space-y-1.5 pl-6 marker:text-accent">
                      {s.ul.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
          <div className={`${glass} mt-10 p-6`}>
            <h2 className="text-lg font-extrabold text-white">{l.contact}</h2>
            <ul className="mt-3 space-y-1.5 text-zinc-300">
              {COMPANY.legalName && <li>{l.company}: {COMPANY.legalName}</li>}
              {COMPANY.address && <li>{l.address}: {COMPANY.address}</li>}
              {COMPANY.taxId && <li>{l.tax}: {COMPANY.taxId}</li>}
              <li>{l.email}: <a className="text-accent underline underline-offset-2" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>{l.whatsapp}: {SITE.phoneDisplay}</li>
            </ul>
          </div>
        </article>
      </Section>
    </>
  );
}
