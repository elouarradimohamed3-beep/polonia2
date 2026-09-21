import { Check, Headset, RotateCcw, ShieldCheck, Wallet, Zap } from "lucide-react";
import { PricingPlans } from "@/components/pricing-plans";
import { Section, SectionHeading, glass } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { SITE, whatsappLink } from "@/lib/site";

const copy = {
  en: {
    eyebrow: "Plans",
    title: "Choose your plan",
    sub: "Pick how many screens you need and how long you want to subscribe.",
    trust: [
      { icon: Zap, text: "Free trial first" },
      { icon: RotateCcw, text: "Step-by-step setup guides" },
      { icon: Headset, text: "Support in English and Polish" },
      { icon: Wallet, text: "Order by WhatsApp or e-mail" },
    ],
    incEyebrow: "Included in every plan",
    incTitle: "Everything you need to start watching",
    incText: "Every plan has the same features. Plans differ only in length and number of devices.",
    features: [
      "Works on smart TVs, phones, tablets and computers",
      "Live television and an on-demand library",
      "TV guide (EPG) in supported apps",
      "Free updates",
      "Step-by-step setup guides",
      "Support in English and Polish",
      "Free trial before you buy",
      "Order by WhatsApp or e-mail",
    ],
    note: "Need more than five devices? Message us and we will prepare an offer for your household.",
    noteCta: "Contact us about more devices",
    noteMsg: "Hello! I need a plan for more than five devices.",
  },
  pl: {
    eyebrow: "Plany",
    title: "Wybierz swój plan",
    sub: "Wybierz, ile ekranów potrzebujesz i na jak długo chcesz się zapisać.",
    trust: [
      { icon: Zap, text: "Najpierw darmowy test" },
      { icon: RotateCcw, text: "Instrukcje krok po kroku" },
      { icon: Headset, text: "Wsparcie po polsku i angielsku" },
      { icon: Wallet, text: "Zamówienie przez WhatsApp lub e-mail" },
    ],
    incEyebrow: "W cenie każdego planu",
    incTitle: "Wszystko, czego potrzebujesz, żeby zacząć oglądać",
    incText: "Każdy plan ma te same funkcje. Różni się tylko okresem i liczbą urządzeń.",
    features: [
      "Działa na Smart TV, telefonach, tabletach i komputerach",
      "Telewizja na żywo i biblioteka na żądanie",
      "Program TV (EPG) w obsługiwanych aplikacjach",
      "Bezpłatne aktualizacje",
      "Instrukcje instalacji krok po kroku",
      "Wsparcie po polsku i angielsku",
      "Darmowy test przed zakupem",
      "Zamówienie przez WhatsApp lub e-mail",
    ],
    note: "Potrzebujesz więcej niż pięciu urządzeń? Napisz do nas, a przygotujemy ofertę dla Twojego domu.",
    noteCta: "Napisz o większej liczbie urządzeń",
    noteMsg: "Cześć! Potrzebuję planu na więcej niż pięć urządzeń.",
  },
} as const;

export function Pricing({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section id="plans" band>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <PricingPlans lang={lang} />

      <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {t.trust.map(({ icon: Icon, text }) => (
          <li key={text} className={`${glass} flex items-center gap-3 px-4 py-3 text-sm font-semibold text-zinc-200`}>
            <Icon size={18} className="shrink-0 text-accent" aria-hidden="true" />
            {text}
          </li>
        ))}
      </ul>

      <div className={`${glass} mt-6 p-8 md:p-10`}>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">{t.incEyebrow}</p>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white">{t.incTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{t.incText}</p>
          </div>
          <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2 lg:col-span-8">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[0.95rem] text-zinc-200">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 ring-1 ring-rose-400/30">
                  <Check size={13} strokeWidth={3.5} aria-hidden="true" />
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-5 rounded-2xl border border-rose-400/30 bg-rose-500/[0.06] p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/30">
            <ShieldCheck size={24} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <p className="text-sm leading-relaxed text-zinc-300">{t.note}</p>
        </div>
        <a href={whatsappLink(t.noteMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-cream shrink-0">
          {t.noteCta}
        </a>
      </div>
      <span className="sr-only">{SITE.name}</span>
    </Section>
  );
}
