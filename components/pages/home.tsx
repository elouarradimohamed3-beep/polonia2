import type { Metadata } from "next";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Intro } from "@/components/intro";
import { JsonLd } from "@/components/json-ld";
import { LatestPosts } from "@/components/latest-posts";
import { PlanMatrix } from "@/components/plan-matrix";
import { Pricing } from "@/components/pricing";
import { Showcase } from "@/components/showcase";
import { StickyCta } from "@/components/sticky-cta";
import { Testimonials } from "@/components/testimonials";
import { TrialSection } from "@/components/trial-section";
import { VsCable } from "@/components/vs-cable";
import { WhyUs } from "@/components/why-us";
import type { Lang } from "@/lib/i18n";
import { path } from "@/lib/routes";
import { pageMetadata, productLd, routePaths, webPageLd } from "@/lib/seo";

const meta = {
  en: {
    title: "IPTV Poland – Live TV & On-Demand | Polonia IPTV",
    description: "IPTV Poland made simple: live TV and on-demand on your smart TV, phone or PC. Plans from €3 for 1 to 5 devices. Free trial, support in English and Polish.",
  },
  pl: {
    title: "Polonia IPTV – polska telewizja przez internet (IPTV)",
    description: "Polska telewizja IPTV na Smart TV, telefonie i komputerze. Plany od 3 € dla 1–5 urządzeń, darmowy test i wsparcie po polsku i angielsku.",
  },
} as const;

export const homeMetadata = (lang: Lang): Metadata =>
  pageMetadata({ lang, ...meta[lang], paths: routePaths("home"), absolute: true });

export function HomePage({ lang }: { lang: Lang }) {
  return (
    <>
      <JsonLd data={[webPageLd({ lang, path: path(lang, "home"), name: meta[lang].title, description: meta[lang].description }), productLd(lang)]} />
      <Hero lang={lang} />
      <Intro lang={lang} />
      <Showcase lang={lang} />
      <Pricing lang={lang} />
      <TrialSection lang={lang} />
      <PlanMatrix lang={lang} />
      <VsCable lang={lang} />
      <HowItWorks lang={lang} />
      <WhyUs lang={lang} />
      <Testimonials lang={lang} />
      <LatestPosts lang={lang} />
      <Faq lang={lang} />
      <StickyCta lang={lang} />
    </>
  );
}
