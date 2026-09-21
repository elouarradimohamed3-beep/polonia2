import Link from "next/link";
import { CalendarClock, Clapperboard, Newspaper, Trophy, Tv, Users, type LucideIcon } from "lucide-react";
import { Section, glass, glassHover } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { sectionHref } from "@/lib/routes";

const copy = {
  en: {
    eyebrow: "What you get",
    title: "Television, films and sport in one place",
    text: "Watch what you like on the screens you already own. What is available depends on your plan and region, so ask for a free trial to see the current line-up.",
    cta: "Get a free trial",
    tiles: [
      { icon: Tv, title: "Live television", text: "Live channels you can watch as they air." },
      { icon: Clapperboard, title: "On-demand library", text: "Films and series to start whenever you like." },
      { icon: Trophy, title: "Sport", text: "Live sport and events where they are part of your plan." },
      { icon: Newspaper, title: "News and local", text: "News and regional programmes in Polish." },
      { icon: Users, title: "Family and kids", text: "Family viewing, with parental controls in supported apps." },
      { icon: CalendarClock, title: "TV guide (EPG)", text: "See what is on now and next in supported apps." },
    ] as { icon: LucideIcon; title: string; text: string }[],
  },
  pl: {
    eyebrow: "Co dostajesz",
    title: "Telewizja, filmy i sport w jednym miejscu",
    text: "Oglądaj to, co lubisz, na ekranach, które już masz. Dostępność zależy od planu i regionu, dlatego poproś o darmowy test, aby zobaczyć aktualną ofertę.",
    cta: "Odbierz darmowy test",
    tiles: [
      { icon: Tv, title: "Telewizja na żywo", text: "Kanały na żywo, oglądane w trakcie emisji." },
      { icon: Clapperboard, title: "Biblioteka na żądanie", text: "Filmy i seriale do włączenia, kiedy chcesz." },
      { icon: Trophy, title: "Sport", text: "Sport i wydarzenia na żywo, jeśli są w Twoim planie." },
      { icon: Newspaper, title: "Wiadomości i lokalne", text: "Wiadomości i programy regionalne po polsku." },
      { icon: Users, title: "Rodzina i dzieci", text: "Oglądanie w rodzinie, z kontrolą rodzicielską w obsługiwanych aplikacjach." },
      { icon: CalendarClock, title: "Program TV (EPG)", text: "Zobacz, co jest teraz i co będzie dalej, w obsługiwanych aplikacjach." },
    ] as { icon: LucideIcon; title: string; text: string }[],
  },
} as const;

export function Showcase({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section band>
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="text-gradient mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">{t.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">{t.text}</p>
          <Link href={sectionHref(lang, "trial")} className="btn btn-cream mt-8">
            {t.cta}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {t.tiles.map(({ icon: Icon, title, text }) => (
            <div key={title} className={`${glass} ${glassHover} p-6`}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/30 to-rose-500/5 text-rose-300 ring-1 ring-white/10">
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
