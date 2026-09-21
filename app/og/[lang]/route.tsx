import { renderOg } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pl" }];
}

const text = {
  en: { kicker: "IPTV Poland", title: "Live TV and on-demand on every screen", footer: "Free trial · Support in English and Polish · From €3" },
  pl: { kicker: "Polonia IPTV", title: "Polska telewizja przez internet na każdym ekranie", footer: "Darmowy test · Wsparcie po polsku i angielsku · Od 3 €" },
} as const;

export async function GET(_req: Request, ctx: { params: Promise<{ lang: string }> }) {
  const { lang } = await ctx.params;
  return renderOg(text[lang === "pl" ? "pl" : "en"]);
}
