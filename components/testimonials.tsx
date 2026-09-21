import { Quote, Star } from "lucide-react";
import { Section, SectionHeading, glass } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { REVIEW_BADGE, TESTIMONIALS } from "@/lib/reviews";

const copy = {
  en: { eyebrow: "Reviews", title: "What customers say", reviews: "reviews on" },
  pl: { eyebrow: "Opinie", title: "Co mówią klienci", reviews: "opinii w" },
} as const;

/** Renders only when lib/reviews.ts contains real data. */
export function Testimonials({ lang }: { lang: Lang }) {
  if (TESTIMONIALS.length === 0 && !REVIEW_BADGE) return null;
  const t = copy[lang];
  return (
    <Section>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      {REVIEW_BADGE && (
        <div className="-mt-6 mb-12 flex justify-center">
          <a href={REVIEW_BADGE.url} target="_blank" rel="noopener noreferrer" className={`${glass} inline-flex items-center gap-3 px-5 py-3 transition-colors hover:border-rose-400/40`}>
            <span className="flex gap-0.5 text-accent" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} size={18} fill="currentColor" />))}
            </span>
            <span className="text-white"><strong>{REVIEW_BADGE.rating.toFixed(1)}</strong> / 5 · {REVIEW_BADGE.count} {t.reviews} {REVIEW_BADGE.platform}</span>
          </a>
        </div>
      )}
      {TESTIMONIALS.length > 0 && (
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((r) => (
            <figure key={r.name + r.place} className={`${glass} p-6`}>
              <Quote size={22} className="text-accent" aria-hidden="true" />
              <blockquote className="mt-3 leading-relaxed text-zinc-200">{r.quote[lang]}</blockquote>
              <figcaption className="mt-4 text-sm"><strong className="text-white">{r.name}</strong><span className="block text-zinc-400">{r.place} · {r.plan}</span></figcaption>
            </figure>
          ))}
        </div>
      )}
    </Section>
  );
}
