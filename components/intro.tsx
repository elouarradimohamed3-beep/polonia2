import Link from "next/link";
import { BadgeEuro, Clapperboard, CreditCard, Headset, MonitorSmartphone, MonitorPlay, Zap, type LucideIcon } from "lucide-react";
import { Section, glass, glassHover } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { sectionHref } from "@/lib/routes";

type Card = { icon: LucideIcon; term: string; value?: string; desc: string; span?: string };

const copy = {
  en: {
    eyebrow: "What it is",
    title: "What is IPTV Poland?",
    cta: "See plans",
    cards: [
      { icon: BadgeEuro, term: "Price", value: "from €3", desc: "for a 1-day plan, from €15 a month" },
      { icon: MonitorPlay, term: "Screens", value: "1–5", desc: "devices per plan, at the same time" },
      { icon: Clapperboard, term: "You get", desc: "live television, an on-demand library and a TV guide in supported apps" },
      { icon: Zap, term: "Setup", desc: "login details by e-mail and step-by-step guides for every device" },
      { icon: MonitorSmartphone, term: "Watch on", desc: "Smart TV, Android, iPhone and iPad, Fire TV Stick, MAG, Windows, Mac and Enigma 2", span: "lg:col-span-2" },
      { icon: CreditCard, term: "Ordering", desc: "by WhatsApp or e-mail. We confirm the payment options for your country" },
      { icon: Headset, term: "Support", desc: "in English and Polish, by WhatsApp and e-mail" },
    ] as Card[],
  },
  pl: {
    eyebrow: "Poznaj usługę",
    title: "Czym jest IPTV Polonia?",
    cta: "Zobacz plany",
    cards: [
      { icon: BadgeEuro, term: "Cena", value: "od 3 €", desc: "za plan 1-dniowy, od 15 € miesięcznie" },
      { icon: MonitorPlay, term: "Ekrany", value: "1–5", desc: "urządzeń w planie, oglądanych jednocześnie" },
      { icon: Clapperboard, term: "Dostajesz", desc: "telewizję na żywo, bibliotekę na żądanie i program TV w obsługiwanych aplikacjach" },
      { icon: Zap, term: "Instalacja", desc: "dane logowania e-mailem i instrukcje krok po kroku dla każdego urządzenia" },
      { icon: MonitorSmartphone, term: "Oglądaj na", desc: "Smart TV, Androidzie, iPhone i iPad, Fire TV Stick, MAG, Windows, Mac i Enigma 2", span: "lg:col-span-2" },
      { icon: CreditCard, term: "Zamówienie", desc: "przez WhatsApp lub e-mail. Potwierdzimy formy płatności dostępne w Twoim kraju" },
      { icon: Headset, term: "Wsparcie", desc: "po polsku i angielsku, przez WhatsApp i e-mail" },
    ] as Card[],
  },
} as const;

export function Intro({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section>
      <div className="grid gap-4 lg:grid-cols-4">
        <div className={`${glass} relative overflow-hidden p-8 md:p-10 lg:col-span-2 lg:row-span-2`}>
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-600/20 blur-[90px]" />
          <p className="eyebrow relative">{t.eyebrow}</p>
          <h2 className="text-gradient relative mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">{t.title}</h2>
          {lang === "en" ? (
            <p className="relative mt-6 text-lg leading-relaxed text-zinc-300">
              IPTV, short for Internet Protocol Television, delivers TV through your internet connection instead of a
              satellite dish or cable. <strong className="text-white">IPTV Poland</strong> usually means watching
              Polish-language television and on-demand programmes this way, whether you live in Poland or abroad.{" "}
              <strong className="text-white">Polonia IPTV</strong> offers subscriptions for 1 to 5 devices, from a 1-day
              plan to 2 years, and a free trial so you can check everything on your own screen first.
            </p>
          ) : (
            <p className="relative mt-6 text-lg leading-relaxed text-zinc-300">
              IPTV, czyli telewizja internetowa, dostarcza program przez łącze internetowe zamiast anteny satelitarnej
              lub kabla. <strong className="text-white">IPTV Polonia</strong> to oglądanie polskojęzycznej telewizji i
              programów na żądanie w ten sposób, w Polsce i za granicą.{" "}
              <strong className="text-white">Polonia IPTV</strong> oferuje abonamenty na 1 do 5 urządzeń, od planu
              1-dniowego do 2 lat, oraz darmowy test, żebyś mógł wszystko sprawdzić na własnym ekranie.
            </p>
          )}
          <Link href={sectionHref(lang, "plans")} className="btn btn-primary relative mt-8">
            {t.cta}
          </Link>
        </div>

        {t.cards.map(({ icon: Icon, term, value, desc, span }) => (
          <div key={term} className={`${glass} ${glassHover} flex flex-col justify-between gap-6 p-6 ${span ?? ""}`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/30 to-rose-500/5 text-rose-300 ring-1 ring-white/10">
              <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{term}</p>
              {value && <p className="text-rose-gradient mt-1 text-4xl font-extrabold tracking-tight">{value}</p>}
              <p className={`leading-snug text-zinc-300 ${value ? "mt-1 text-sm" : "mt-2"}`}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
