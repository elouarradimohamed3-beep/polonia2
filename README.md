# Polonia IPTV (poloniaiptv.pl)

Bilingual (English + Polish) Next.js 16 website. Home-page keyword: **"iptv poland"**.
English lives at the root (`/`), Polish under `/pl`. Every page exists in both languages and links to its translation.

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## How the two languages work
- Two root layouts: `app/(en)/layout.tsx` (`<html lang="en">`) and `app/(pl)/layout.tsx` (`<html lang="pl">`), shared via `components/root-shell.tsx`.
- Each language has its own URLs (`lib/routes.ts`): `/setup-guide` and `/pl/instalacja`, `/contact` and `/pl/kontakt`, and so on.
- Each component holds its English and Polish copy together (`const copy = { en: ..., pl: ... }`). Shared data (plans, prices, contact) is in `lib/site.ts`.
- Search: canonical + `hreflang` (en, pl, x-default) on every page, language alternates in the sitemap, `inLanguage` in structured data, a language switcher that goes to the matching page (also for translated articles), and a non-redirecting suggestion bar for Polish browsers.

## Add an article
1. Create `content/blog/en/my-article.md` and/or `content/blog/pl/moj-artykul.md` (file name = URL).
2. Front matter: `title`, `description`, `date` (required); `updated`, `tags` (optional).
3. Give the English and Polish version the same `translationKey` so they link to each other.
4. `git add -A && git commit && git push` publishes it. Files starting with `_` are drafts.

## Environment variables
See `.env.example`. Most important: `NEXT_PUBLIC_SITE_URL` must equal the host the hosting actually serves (apex or www), otherwise canonical links point at a redirect.
Trial form delivery: set `TRIAL_WEBHOOK_URL` or `RESEND_API_KEY` + `TRIAL_TO_EMAIL`. With none set, visitors are sent to WhatsApp with their details prefilled.

## Before going live (placeholders and drafts)
- **Prices** in `lib/site.ts` are placeholders copied from a similar offer; tiers 4 and 5 devices are extrapolated. Confirm every price.
- **Contact details** default to the owner's existing e-mail and WhatsApp number. Set your own via env vars if different.
- **Legal pages** (`lib/legal.ts`) are drafts, not legal advice. Have a lawyer review them and set the company details (`NEXT_PUBLIC_COMPANY_*`).
- **Refund policy** is a draft policy. Decide the real rules.
- **Reviews:** `lib/reviews.ts` is empty on purpose. Add real reviews only.
- **Content rights:** only claim what you can prove; the copy avoids channel counts and catalogue sizes on purpose.
- Add Google Search Console (Domain property), submit `sitemap.xml`, and test the trial form with a real e-mail.
