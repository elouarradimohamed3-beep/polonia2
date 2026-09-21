import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Lightbulb } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeading, glass } from "@/components/ui";
import { GUIDE } from "@/lib/guide";
import type { Lang } from "@/lib/i18n";
import { path, sectionHref } from "@/lib/routes";
import { abs, pageMetadata, routePaths, webPageLd } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export const guideMetadata = (lang: Lang): Metadata =>
  pageMetadata({ lang, title: GUIDE[lang].title, description: GUIDE[lang].description, paths: routePaths("guide") });

const labels = {
  en: { stepWord: "Step", note: "Note", trial: "Get a free trial", msg: "Hello! I need help setting up Polonia IPTV.", help: "Message us on WhatsApp", eyebrow: "Setup guide", crumb: "Setup guide" },
  pl: { stepWord: "Krok", note: "Uwaga", trial: "Odbierz darmowy test", msg: "Cześć! Potrzebuję pomocy z instalacją Polonia IPTV.", help: "Napisz na WhatsApp", eyebrow: "Instalacja", crumb: "Instalacja" },
} as const;

export function GuidePage({ lang }: { lang: Lang }) {
  const g = GUIDE[lang];
  const l = labels[lang];
  const p = path(lang, "guide");
  const howTo = g.devices.map((d) => ({
    "@type": "HowTo",
    "@id": `${abs(p)}#${d.id}`,
    name: d.title,
    inLanguage: lang,
    step: d.steps.map((text, i) => ({ "@type": "HowToStep", position: i + 1, name: `${l.stepWord} ${i + 1}`, text })),
  }));

  return (
    <>
      <Breadcrumbs lang={lang} trail={[{ name: l.crumb, path: p }]} />
      <JsonLd data={[webPageLd({ lang, path: p, name: g.title, description: g.description }), ...howTo]} />
      <Section>
        <SectionHeading as="h1" eyebrow={l.eyebrow} title={g.h1} sub={g.intro} />

        <div className={`${glass} mx-auto mb-10 max-w-3xl p-6 md:p-8`}>
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-white">
            <Lightbulb size={20} className="text-accent" aria-hidden="true" /> {g.beforeTitle}
          </h2>
          <ul className="mt-4 space-y-2.5">
            {g.before.map((b) => (
              <li key={b} className="flex items-start gap-3 text-zinc-300">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={g.h1} className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {g.devices.map((d) => (
            <a key={d.id} href={`#${d.id}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-zinc-200 hover:border-rose-300 hover:text-white">
              {d.title}
            </a>
          ))}
        </nav>

        <div className="mx-auto max-w-3xl space-y-5">
          {g.devices.map((d) => (
            <article key={d.id} id={d.id} className={`${glass} scroll-mt-28 p-6 md:p-8`}>
              <h2 className="text-xl font-extrabold text-white md:text-2xl">{d.title}</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300 marker:font-bold marker:text-accent">
                {d.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              {d.note && (
                <p className="mt-4 rounded-lg bg-white/5 p-3 text-sm text-zinc-300">
                  <strong className="text-white">{l.note}:</strong> {d.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className={`${glass} mx-auto mt-10 max-w-3xl p-6 md:p-8`}>
          <h2 className="text-xl font-extrabold text-white">{g.tipsTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-zinc-300 marker:text-accent">
            {g.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-white">{g.ctaTitle}</h2>
          <p className="mt-2 text-zinc-400">{g.ctaText}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={whatsappLink(l.msg)} target="_blank" rel="noopener noreferrer" className="btn btn-cream">{l.help}</a>
            <Link href={sectionHref(lang, "trial")} className="btn btn-outline">{l.trial}</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
