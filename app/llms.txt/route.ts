import { getAllPosts } from "@/lib/blog";
import { eur, LOWEST_MONTHLY, LOWEST_PRICE } from "@/lib/pricing";
import { blogPath, ROUTES } from "@/lib/routes";
import { CONNECTION_OPTIONS, PLAN_DEFS, PLAN_NAMES, PRICES, SITE } from "@/lib/site";

// Generated from the same data as the website, so the domain and prices never go stale.
export const dynamic = "force-static";

export function GET() {
  const u = SITE.url;
  const priceLines = CONNECTION_OPTIONS.flatMap((c) => {
    const parts = PLAN_DEFS.flatMap((p) => {
      const price = PRICES[c][p.id];
      return price == null ? [] : [`${PLAN_NAMES.en[p.id]} ${eur("en", price)}`];
    });
    return parts.length ? [`- Prices for ${c} ${c === 1 ? "device" : "devices"}: ${parts.join(", ")}.`] : [];
  });
  const posts = (["en", "pl"] as const).flatMap((lang) => getAllPosts(lang).map((p) => `- [${p.title}](${u}${blogPath(lang, p.slug)}) (${lang.toUpperCase()}): ${p.description}`));

  const body = `# ${SITE.name}

> ${SITE.name} (${new URL(u).hostname}) is an internet TV (IPTV) service. "IPTV Poland" means watching Polish-language television and on-demand programmes over the internet, in Poland or abroad. Plans run from a 1-day plan (${eur("en", LOWEST_PRICE)}) to 2 years, for 1 to 5 devices, from ${eur("en", LOWEST_MONTHLY)} a month. A free trial is available. Support is in English and Polish. The site is available in English and Polish.

## Key facts

${priceLines.join("\n")}
- Devices: Smart TV (Samsung, LG, Android TV), Fire TV Stick, Android, iPhone and iPad, MAG, Windows, Mac, Enigma 2.
- Ordering: by WhatsApp (${SITE.phoneDisplay}) or e-mail (${SITE.email}); payment options are confirmed per country.
- Free trial: request it with the form on the home page.
- Content availability depends on plan and region.
- Rights holders: see the copyright policy for how to report content.

## Pages (English)

- [Home: IPTV Poland overview, plans and FAQ](${u}/)
- [Setup guide](${u}${ROUTES.guide.en}): step-by-step setup for every device.
- [Blog](${u}${ROUTES.blog.en}): IPTV guides and answers.
- [About](${u}${ROUTES.about.en})
- [Contact](${u}${ROUTES.contact.en})
- [Terms of service](${u}${ROUTES.terms.en}), [Refund policy](${u}${ROUTES.refunds.en}), [Privacy policy](${u}${ROUTES.privacy.en}), [Copyright policy](${u}${ROUTES.copyright.en})

## Strony (Polski)

- [Strona główna](${u}${ROUTES.home.pl}), [Instalacja](${u}${ROUTES.guide.pl}), [Blog](${u}${ROUTES.blog.pl}), [O nas](${u}${ROUTES.about.pl}), [Kontakt](${u}${ROUTES.contact.pl})
- [Regulamin](${u}${ROUTES.terms.pl}), [Zwroty](${u}${ROUTES.refunds.pl}), [Polityka prywatności](${u}${ROUTES.privacy.pl}), [Prawa autorskie](${u}${ROUTES.copyright.pl})

## Articles

${posts.join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
