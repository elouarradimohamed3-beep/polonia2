import Link from "next/link";
import { Logo } from "@/components/logo";
import type { Lang } from "@/lib/i18n";
import { path, sectionHref, type RouteKey } from "@/lib/routes";
import { SITE } from "@/lib/site";

const copy = {
  en: {
    blurb: "Live TV and an on-demand library over the internet, with support in English and Polish.",
    explore: "Explore",
    legal: "Legal",
    contact: "Contact",
    support: "Support in English and Polish",
    rights: "All rights reserved.",
    links: [
      ["home", "Home"],
      ["guide", "Setup guide"],
      ["blog", "Blog"],
      ["about", "About us"],
      ["contact", "Contact"],
    ],
    legalLinks: [
      ["terms", "Terms of service"],
      ["refunds", "Refund policy"],
      ["privacy", "Privacy policy"],
      ["copyright", "Copyright policy"],
    ],
    trial: "Free trial",
  },
  pl: {
    blurb: "Telewizja na żywo i biblioteka na żądanie przez internet, z obsługą po polsku i angielsku.",
    explore: "Nawigacja",
    legal: "Informacje prawne",
    contact: "Kontakt",
    support: "Wsparcie po polsku i angielsku",
    rights: "Wszelkie prawa zastrzeżone.",
    links: [
      ["home", "Start"],
      ["guide", "Instalacja"],
      ["blog", "Blog"],
      ["about", "O nas"],
      ["contact", "Kontakt"],
    ],
    legalLinks: [
      ["terms", "Regulamin"],
      ["refunds", "Zwroty i anulowanie"],
      ["privacy", "Polityka prywatności"],
      ["copyright", "Prawa autorskie"],
    ],
    trial: "Darmowy test",
  },
} as const;

export function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <footer className="border-t border-white/10 bg-header text-zinc-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href={path(lang, "home")} aria-label="Polonia IPTV">
            <Logo />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">{t.blurb}</p>
        </div>
        <nav aria-label={t.explore}>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">{t.explore}</h2>
          <ul className="space-y-2 text-sm">
            {t.links.map(([key, label]) => (
              <li key={key}>
                <Link href={path(lang, key as RouteKey)} className="hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={sectionHref(lang, "trial")} className="hover:text-accent">
                {t.trial}
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label={t.legal}>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">{t.legal}</h2>
          <ul className="space-y-2 text-sm">
            {t.legalLinks.map(([key, label]) => (
              <li key={key}>
                <Link href={path(lang, key as RouteKey)} className="hover:text-accent">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">{t.contact}</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li>WhatsApp: {SITE.phoneDisplay}</li>
            <li>{t.support}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} {SITE.name}. {t.rights}
      </div>
    </footer>
  );
}
