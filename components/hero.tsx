import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { glass } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { sectionHref } from "@/lib/routes";

const copy = {
  en: {
    badge: "Free trial · Support in English and Polish",
    line1: "IPTV Poland:",
    line2: <>Polish TV and <span className="whitespace-nowrap">on-demand</span> on every screen</>,
    sub: "Polonia IPTV brings live television and an on-demand library to your smart TV, phone, tablet or computer. Try it free on your own device, then pick a plan for 1 to 5 screens.",
    primary: "Get a free trial",
    secondary: "See plans",
    trust: ["Plans from €3 for 1 day", "1 to 5 devices per plan", "Step-by-step setup guides"],
    worksOn: "Works on",
    devices: ["Smart TV", "Android", "iPhone & iPad", "Fire TV Stick", "MAG", "Windows & Mac", "Enigma 2"],
    stats: [
      { v: "1–5", l: "devices per plan" },
      { v: "1 day–2 yrs", l: "flexible plan lengths" },
      { v: "EN + PL", l: "support languages" },
      { v: "Free", l: "trial before you pay" },
    ],
    art: "Illustration of a TV, a phone and a tablet showing on-demand programmes",
  },
  pl: {
    badge: "Darmowy test · Wsparcie po polsku i angielsku",
    line1: "Polonia IPTV:",
    line2: <>polska telewizja przez internet na każdym ekranie</>,
    sub: "Polonia IPTV dostarcza telewizję na żywo i bibliotekę na żądanie na Twój Smart TV, telefon, tablet lub komputer. Przetestuj za darmo na własnym urządzeniu, a potem wybierz plan na 1 do 5 ekranów.",
    primary: "Odbierz darmowy test",
    secondary: "Zobacz plany",
    trust: ["Plany od 3 € na 1 dzień", "1 do 5 urządzeń w planie", "Instrukcje krok po kroku"],
    worksOn: "Działa na",
    devices: ["Smart TV", "Android", "iPhone i iPad", "Fire TV Stick", "MAG", "Windows i Mac", "Enigma 2"],
    stats: [
      { v: "1–5", l: "urządzeń w planie" },
      { v: "1 dzień–2 lata", l: "elastyczne okresy" },
      { v: "PL + EN", l: "języki wsparcia" },
      { v: "Za darmo", l: "test przed zakupem" },
    ],
    art: "Ilustracja telewizora, telefonu i tabletu z programami na żądanie",
  },
} as const;

function HeroArt({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 600 400" role="img" aria-label={label} className="relative h-auto w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)]">
      <defs>
        <linearGradient id="scr" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1d1219" />
          <stop offset="1" stopColor="#3a0f1d" />
        </linearGradient>
        <linearGradient id="ban" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e11d48" />
          <stop offset="1" stopColor="#7a1230" />
        </linearGradient>
      </defs>
      {/* TV */}
      <rect x="95" y="30" width="410" height="250" rx="18" fill="#17141b" stroke="#2b2630" strokeWidth="3" />
      <rect x="109" y="44" width="382" height="222" rx="10" fill="url(#scr)" />
      <rect x="127" y="62" width="110" height="9" rx="4.5" fill="#fff" opacity="0.25" />
      <rect x="127" y="84" width="346" height="86" rx="8" fill="url(#ban)" />
      <rect x="145" y="104" width="120" height="10" rx="5" fill="#fff" opacity="0.85" />
      <rect x="145" y="124" width="170" height="7" rx="3.5" fill="#fff" opacity="0.4" />
      <rect x="145" y="139" width="90" height="7" rx="3.5" fill="#fff" opacity="0.3" />
      <circle cx="420" cy="127" r="24" fill="#f6efe4" />
      <path d="M412 115 L434 127 L412 139 Z" fill="#160f14" stroke="#160f14" strokeWidth="2" strokeLinejoin="round" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={127 + i * 71} y={184} width="62" height="66" rx="6" fill={["#f6efe4", "#e11d48", "#ffffff", "#ff8fa3", "#f6efe4"][i]} opacity={[0.9, 0.85, 0.22, 0.55, 0.35][i]} />
      ))}
      <rect x="255" y="280" width="90" height="12" fill="#221e27" />
      <rect x="215" y="290" width="170" height="9" rx="4.5" fill="#2b2630" />
      {/* Phone */}
      <rect x="22" y="170" width="96" height="196" rx="18" fill="#17141b" stroke="#2b2630" strokeWidth="3" />
      <rect x="32" y="186" width="76" height="164" rx="10" fill="url(#scr)" />
      <rect x="40" y="196" width="60" height="44" rx="6" fill="url(#ban)" />
      <circle cx="70" cy="218" r="9" fill="#f6efe4" />
      <path d="M67 213 L76 218 L67 223 Z" fill="#160f14" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="40" y={252 + i * 30} width="60" height="22" rx="5" fill="#fff" opacity={0.14 - i * 0.03} />
      ))}
      {/* Tablet */}
      <rect x="470" y="196" width="112" height="160" rx="16" fill="#17141b" stroke="#2b2630" strokeWidth="3" />
      <rect x="480" y="208" width="92" height="136" rx="9" fill="url(#scr)" />
      <rect x="488" y="216" width="76" height="50" rx="6" fill="#f6efe4" opacity="0.85" />
      <circle cx="526" cy="241" r="10" fill="#e11d48" />
      <path d="M523 236 L531 241 L523 246 Z" fill="#fff" />
      {[0, 1].map((i) => (
        <rect key={i} x={488 + i * 40} y="276" width="36" height="50" rx="5" fill={i ? "#ff8fa3" : "#e11d48"} opacity="0.5" />
      ))}
    </svg>
  );
}

export function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-rose-600/20 blur-[130px]" />
        <div className="absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-orange-300/10 blur-[130px]" />
        <div className="grid-lines absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-10 pt-14 md:pt-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-wide text-zinc-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.badge}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[3.4rem]">
            {t.line1}
            <span className="text-rose-gradient mt-2 block">{t.line2}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">{t.sub}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={sectionHref(lang, "trial")} className="btn btn-cream !px-8 !py-4">
              {t.primary}
            </Link>
            <Link href={sectionHref(lang, "plans")} className="btn btn-outline !px-8 !py-4">
              {t.secondary}
            </Link>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-300">
            {t.trust.map((x) => (
              <li key={x} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" aria-hidden="true" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div aria-hidden="true" className="absolute inset-8 rounded-full bg-rose-500/20 blur-[90px]" />
          <HeroArt label={t.art} />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-6">
        <div className={`${glass} flex flex-col items-center gap-3 px-6 py-5 md:flex-row md:justify-between`}>
          <p className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">{t.worksOn}</p>
          <ul className="flex flex-wrap justify-center gap-2 md:justify-end">
            {t.devices.map((d) => (
              <li key={d} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-sm font-semibold text-zinc-200">
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {t.stats.map((s) => (
            <div key={s.l} className="bg-[#0d0b10] px-6 py-6 text-center">
              <p className="text-rose-gradient text-2xl font-extrabold tracking-tight md:text-3xl">{s.v}</p>
              <p className="mt-1 text-sm text-zinc-400">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
