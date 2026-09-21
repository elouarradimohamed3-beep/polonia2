import { Check } from "lucide-react";
import { TrialForm } from "@/components/trial-form";
import { Section, glass } from "@/components/ui";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "No risk",
    title: "Try Polonia IPTV free",
    text: "See the picture quality, the line-up and how it works on your own device before you choose a plan.",
    points: ["Test on your own screen", "No payment upfront", "Login details sent by e-mail", "Help with setup if you need it"],
  },
  pl: {
    eyebrow: "Bez ryzyka",
    title: "Wypróbuj Polonia IPTV za darmo",
    text: "Sprawdź jakość obrazu, ofertę i działanie na własnym urządzeniu, zanim wybierzesz plan.",
    points: ["Test na Twoim ekranie", "Bez płatności z góry", "Dane logowania wyślemy e-mailem", "Pomoc w instalacji, gdy jej potrzebujesz"],
  },
} as const;

export function TrialSection({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section id="trial">
      <div className={`${glass} relative overflow-hidden`}>
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-rose-500/15 blur-[100px]" />
        <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2 className="text-gradient mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">{t.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300">{t.text}</p>
            <ul className="mt-8 space-y-3">
              {t.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-zinc-200">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream text-[#1a1418]">
                    <Check size={14} strokeWidth={3.5} aria-hidden="true" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0d0b10]/80 p-6 md:p-8">
            <TrialForm lang={lang} />
          </div>
        </div>
      </div>
    </Section>
  );
}
