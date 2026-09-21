import { Check, Minus } from "lucide-react";
import { Section, SectionHeading, glass } from "@/components/ui";
import type { Lang } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Why IPTV",
    title: "IPTV compared with cable and satellite TV",
    sub: "See how television over the internet differs from the traditional kind.",
    cols: ["Topic", "Polonia IPTV", "Cable and satellite"],
    caption: "Comparison of IPTV with cable and satellite television",
    note: "This is a general comparison. Terms differ between providers.",
    rows: [
      ["Commitment", "Choose a plan length from 1 day to 2 years.", "Often a contract of 12 to 24 months."],
      ["Price", "A clear price for your plan length and number of devices.", "Often a fixed package plus paid extras."],
      ["Setup", "No technician. Install an app with our guide.", "Often an installer visit and a set-top box."],
      ["Devices", "Smart TV, phone, tablet, computer and Fire TV Stick.", "Usually one TV and its box."],
      ["Away from home", "Watch anywhere with a good internet connection.", "Usually only where the service is installed."],
      ["Start", "Login details by e-mail after your order is confirmed.", "Usually a wait for an installation date."],
    ],
  },
  pl: {
    eyebrow: "Dlaczego IPTV",
    title: "IPTV a telewizja kablowa i satelitarna",
    sub: "Zobacz, czym telewizja przez internet różni się od tradycyjnej.",
    cols: ["Temat", "Polonia IPTV", "Kablówka i satelita"],
    caption: "Porównanie IPTV z telewizją kablową i satelitarną",
    note: "To porównanie ogólne. Warunki różnią się w zależności od dostawcy.",
    rows: [
      ["Zobowiązanie", "Wybierasz okres od 1 dnia do 2 lat.", "Często umowa na 12 do 24 miesięcy."],
      ["Cena", "Jasna cena dla okresu i liczby urządzeń.", "Często stały pakiet i płatne dodatki."],
      ["Instalacja", "Bez technika. Aplikacja i nasza instrukcja.", "Często wizyta montera i dekoder."],
      ["Urządzenia", "Smart TV, telefon, tablet, komputer i Fire TV Stick.", "Zwykle jeden telewizor z dekoderem."],
      ["Poza domem", "Oglądasz wszędzie, gdzie masz dobry internet.", "Zwykle tylko w miejscu instalacji."],
      ["Start", "Dane logowania e-mailem po potwierdzeniu zamówienia.", "Zwykle oczekiwanie na termin instalacji."],
    ],
  },
} as const;

export function VsCable({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <Section band>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} sub={t.sub} />
      <div className={`${glass} mx-auto max-w-5xl overflow-x-auto !bg-white/[0.03]`}>
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <caption className="sr-only">{t.caption}</caption>
          <thead>
            <tr className="bg-white/[0.06] text-xs uppercase tracking-wider">
              <th scope="col" className="px-5 py-4 font-bold text-zinc-300">{t.cols[0]}</th>
              <th scope="col" className="px-5 py-4 font-bold text-accent">{t.cols[1]}</th>
              <th scope="col" className="px-5 py-4 font-bold text-zinc-400">{t.cols[2]}</th>
            </tr>
          </thead>
          <tbody>
            {t.rows.map(([label, a, b]) => (
              <tr key={label} className="border-t border-white/10 align-top">
                <th scope="row" className="whitespace-nowrap px-5 py-4 font-bold text-white">{label}</th>
                <td className="bg-rose-500/[0.05] px-5 py-4 text-zinc-100">
                  <span className="flex items-start gap-2.5"><Check size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />{a}</span>
                </td>
                <td className="px-5 py-4 text-zinc-400">
                  <span className="flex items-start gap-2.5"><Minus size={18} className="mt-0.5 shrink-0 text-zinc-600" aria-hidden="true" />{b}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mx-auto mt-4 max-w-5xl text-center text-xs text-zinc-400">{t.note}</p>
    </Section>
  );
}
