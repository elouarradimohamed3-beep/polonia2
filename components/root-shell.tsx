import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { LangSuggest } from "@/components/lang-suggest";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { buildAltMap } from "@/lib/blog";
import { locales, type Lang } from "@/lib/i18n";
import { path } from "@/lib/routes";
import { organizationLd, websiteLd } from "@/lib/seo";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "latin-ext"], display: "swap" });

const skip = { en: "Skip to content", pl: "Przejdź do treści" } as const;

/** Shared body of both root layouts: `<html lang>` differs per language. */
export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const altMap = buildAltMap();
  return (
    <html lang={locales[lang].html} className={`${manrope.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-md focus:bg-cream focus:px-4 focus:py-2 focus:font-bold focus:text-black"
        >
          {skip[lang]}
        </a>
        {lang === "en" && <LangSuggest href={path("pl", "home")} />}
        <Header lang={lang} altMap={altMap} />
        <div className="flag-bar" aria-hidden="true" />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer lang={lang} />
        <WhatsAppFloat lang={lang} />
        <JsonLd data={[organizationLd, websiteLd]} />
        <Analytics />
      </body>
    </html>
  );
}
