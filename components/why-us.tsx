import Link from "next/link";
import { Gem, Languages, MonitorSmartphone, Users, Wrench, Zap, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, glass, glassHover } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { sectionHref } from "@/lib/routes";

const icons: LucideIcon[] = [Languages, Wrench, Zap, Users, Gem, MonitorSmartphone];
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-6"];

const copy = {
  en: {
    eyebrow: "Why choose us",
    title: "Made for people who want it simple",
    items: [
      ["Support in two languages", "Get help in English or Polish by WhatsApp or e-mail."],
      ["Simple setup", "Guides for Smart TV, Fire TV Stick, Android, iPhone, Windows and Mac."],
      ["Flexible plans", "From 1 day to 2 years, so you only pay for the time you need."],
      ["Watch together", "Plans for 1 to 5 devices at the same time."],
      ["Try first", "Ask for a free trial before you commit to a plan."],
      ["Clear pricing", "See the price of your exact plan length and device count before you order."],
    ],
    bannerTitle: "Ready to watch?",
    bannerText: "Start with a free trial, or pick a plan now.",
    trial: "Free trial",
    plans: "See plans",
  },
  pl: {
    eyebrow: "Dlaczego my",
    title: "Stworzone dla tych, którzy lubią prostotę",
    items: [
      ["Wsparcie w dwóch językach", "Pomoc po polsku lub angielsku przez WhatsApp i e-mail."],
      ["Prosta instalacja", "Instrukcje dla Smart TV, Fire TV Stick, Androida, iPhone'a, Windows i Maca."],
      ["Elastyczne plany", "Od 1 dnia do 2 lat, więc płacisz tylko za czas, którego potrzebujesz."],
      ["Oglądajcie razem", "Plany na 1 do 5 urządzeń jednocześnie."],
      ["Najpierw test", "Poproś o darmowy test, zanim wybierzesz plan."],
      ["Jasne ceny", "Zobacz cenę dla swojego okresu i liczby urządzeń przed zamówieniem."],
    ],
    bannerTitle: "Gotowy na oglądanie?",
    bannerText: "Zacznij od darmowego testu albo wybierz plan już teraz.",
    trial: "Darmowy test",
    plans: "Zobacz plany",
  },
} as const;

export function WhyUs({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section band>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {t.items.map(([title, text], i) => {
          const Icon = icons[i];
          const wide = i === t.items.length - 1;
          return (
            <div key={title} className={`${glass} ${glassHover} group relative overflow-hidden p-7 ${spans[i]} ${wide ? "sm:col-span-2 lg:flex lg:items-center lg:gap-8" : ""}`}>
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-rose-500/0 blur-[70px] transition-colors duration-500 group-hover:bg-rose-500/25" />
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-800 text-white shadow-lg shadow-rose-950/40 ring-1 ring-white/20">
                <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div className={wide ? "mt-5 lg:mt-0" : ""}>
                <h3 className={`relative font-bold leading-snug text-white ${wide ? "text-xl" : "mt-5 text-lg"}`}>{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-rose-700/40 via-rose-950/30 to-orange-300/10 p-8 md:p-12">
        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">{t.bannerTitle}</h3>
            <p className="mt-2 text-zinc-300">{t.bannerText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={sectionHref(lang, "trial")} className="btn btn-cream !px-8 !py-4">{t.trial}</Link>
            <Link href={sectionHref(lang, "plans")} className="btn btn-outline !px-8 !py-4">{t.plans}</Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
