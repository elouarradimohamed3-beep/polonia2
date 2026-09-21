import type { Lang } from "@/lib/i18n";

/** Every page exists in both languages. English lives at the root, Polish under /pl. */
export const ROUTES = {
  home: { en: "/", pl: "/pl" },
  guide: { en: "/setup-guide", pl: "/pl/instalacja" },
  contact: { en: "/contact", pl: "/pl/kontakt" },
  about: { en: "/about", pl: "/pl/o-nas" },
  terms: { en: "/terms", pl: "/pl/regulamin" },
  refunds: { en: "/refund-policy", pl: "/pl/zwroty" },
  privacy: { en: "/privacy-policy", pl: "/pl/polityka-prywatnosci" },
  copyright: { en: "/copyright-policy", pl: "/pl/prawa-autorskie" },
  blog: { en: "/blog", pl: "/pl/blog" },
} as const;

export type RouteKey = keyof typeof ROUTES;

export const path = (lang: Lang, key: RouteKey) => ROUTES[key][lang];
export const pathsFor = (key: RouteKey): Record<Lang, string> => ({ ...ROUTES[key] });

/** Home-page section link that works in both languages, e.g. sectionHref("pl", "plans") -> "/pl#plans". */
export const sectionHref = (lang: Lang, id: string) => `${ROUTES.home[lang]}#${id}`;

export const blogPath = (lang: Lang, slug: string) => `${ROUTES.blog[lang]}/${slug}`;
