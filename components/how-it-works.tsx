import { CreditCard, Download, ListChecks, Mail, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, glass } from "@/components/ui";
import type { Lang } from "@/lib/i18n";

const icons: LucideIcon[] = [ListChecks, CreditCard, Mail, Download];

const copy = {
  en: {
    eyebrow: "How it works",
    title: "Start watching in 4 steps",
    step: "Step",
    steps: [
      ["Choose a plan", "Pick a plan length and how many devices you need."],
      ["Place your order", "Order by WhatsApp or e-mail. We confirm the payment options for your country."],
      ["Get your login", "After your order is confirmed we send your login details by e-mail."],
      ["Install and watch", "Follow our setup guide for your device and start watching."],
    ],
  },
  pl: {
    eyebrow: "Jak to działa",
    title: "Zacznij oglądać w 4 krokach",
    step: "Krok",
    steps: [
      ["Wybierz plan", "Wybierz okres i liczbę potrzebnych urządzeń."],
      ["Złóż zamówienie", "Zamów przez WhatsApp lub e-mail. Potwierdzimy formy płatności dostępne w Twoim kraju."],
      ["Odbierz dane logowania", "Po potwierdzeniu zamówienia wyślemy dane logowania e-mailem."],
      ["Zainstaluj i oglądaj", "Skorzystaj z instrukcji dla swojego urządzenia i zacznij oglądać."],
    ],
  },
} as const;

export function HowItWorks({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <ol className="grid gap-5 md:grid-cols-4">
        {t.steps.map(([title, text], i) => {
          const Icon = icons[i];
          return (
            <li key={title} className={`${glass} relative p-7`}>
              <span aria-hidden="true" className="absolute right-5 top-3 select-none text-7xl font-black leading-none text-white/[0.05]">{i + 1}</span>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-lg shadow-rose-900/30">
                <Icon size={26} strokeWidth={2} aria-hidden="true" />
              </span>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">{t.step} {i + 1}</p>
              <h3 className="mt-1.5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
