"use client";

import { Compass, MonitorSmartphone } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { cheapestPerMonthId, eur, getPlans, planDays, planMeta, type PricedPlan } from "@/lib/pricing";
import type { Lang } from "@/lib/i18n";
import { CONNECTION_OPTIONS, PLAN_NAMES, PRICES, deviceLabel, whatsappLink, type Connections, type PlanId } from "@/lib/site";

const copy = {
  en: {
    helper: "Which plan should I choose?",
    show: "Show this plan",
    devices: "Number of devices",
    tablist: "Number of devices in the subscription",
    best: "Lowest price per month",
    rec: "Recommended for you",
    order: "Order now",
    ask: "Ask for a price",
    onRequest: "Price on request",
    prepare: "We will prepare an offer for you",
    oneDay: "1 day of access",
    monthly: "Billed monthly",
    perMonth: "/ month",
    aDay: "about",
    perDay: "a day",
    msg: (plan: string, dev: string, price: string) => `Hello! I would like to order Polonia IPTV: ${plan}, ${dev} (${price}).`,
    msgAsk: (plan: string, dev: string) => `Hello! I would like a price for Polonia IPTV: ${plan}, ${dev}.`,
    helperCards: [
      { title: "I just want to try it", c: 1, p: "1-day", text: (price: string) => `The lowest-cost start: 1 day on 1 device for ${price}.` },
      { title: "I watch alone", c: 1, p: "1-year", text: (price: string, pm: string) => `A full year for ${price}, about ${pm} a month.` },
      { title: "We watch as a family", c: 3, p: "1-year", text: (price: string, pm: string) => `3 screens at once. A year for ${price}, about ${pm} a month.` },
    ],
  },
  pl: {
    helper: "Który plan wybrać?",
    show: "Pokaż ten plan",
    devices: "Liczba urządzeń",
    tablist: "Liczba urządzeń w abonamencie",
    best: "Najniższa cena za miesiąc",
    rec: "Polecany dla Ciebie",
    order: "Zamów teraz",
    ask: "Zapytaj o cenę",
    onRequest: "Cena na zapytanie",
    prepare: "Przygotujemy dla Ciebie ofertę",
    oneDay: "Dostęp na 1 dzień",
    monthly: "Rozliczenie miesięczne",
    perMonth: "/ miesiąc",
    aDay: "ok.",
    perDay: "dziennie",
    msg: (plan: string, dev: string, price: string) => `Cześć! Chcę zamówić Polonia IPTV: ${plan}, ${dev} (${price}).`,
    msgAsk: (plan: string, dev: string) => `Cześć! Proszę o wycenę Polonia IPTV: ${plan}, ${dev}.`,
    helperCards: [
      { title: "Chcę tylko spróbować", c: 1, p: "1-day", text: (price: string) => `Najtańszy start: 1 dzień na jednym urządzeniu za ${price}.` },
      { title: "Oglądam sam lub sama", c: 1, p: "1-year", text: (price: string, pm: string) => `Rok oglądania za ${price}, czyli ${pm} miesięcznie.` },
      { title: "Oglądamy całą rodziną", c: 3, p: "1-year", text: (price: string, pm: string) => `3 ekrany naraz. Rok za ${price}, czyli ${pm} miesięcznie.` },
    ],
  },
} as const;

function PlanCard({ lang, plan, connections, recommended }: { lang: Lang; plan: PricedPlan; connections: Connections; recommended: boolean }) {
  const t = copy[lang];
  const { perMonth, saving } = planMeta(plan, connections);
  const featured = plan.id === cheapestPerMonthId(connections);
  const onRequest = plan.price == null;
  const name = PLAN_NAMES[lang][plan.id];
  const dev = deviceLabel(lang, connections);

  let sub: string;
  if (onRequest) sub = t.prepare;
  else if (!plan.months || perMonth == null) sub = t.oneDay;
  else {
    const perDay = `${t.aDay} ${eur(lang, (plan.price as number) / planDays(plan.months))} ${t.perDay}`;
    sub = plan.months === 1 ? `${t.monthly} · ${perDay}` : `${eur(lang, perMonth)} ${t.perMonth} · ${perDay}`;
  }

  const message = onRequest ? t.msgAsk(name, dev) : t.msg(name, dev, eur(lang, plan.price as number));

  return (
    <article
      className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "border border-rose-400/60 bg-gradient-to-b from-rose-500/[0.14] to-white/[0.03] shadow-[0_0_70px_-18px_rgba(225,29,72,0.6)]"
          : "border border-white/10 bg-white/[0.04] hover:border-rose-400/40 hover:bg-white/[0.07]"
      } ${recommended ? "ring-2 ring-emerald-400/70" : ""}`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-cream px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-[#1a1418]">
          {t.best}
        </span>
      )}
      {recommended && !featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-emerald-400 px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-950">
          {t.rec}
        </span>
      )}

      <div className="flex min-h-7 items-center justify-between gap-3">
        <h3 className={`text-sm font-extrabold uppercase tracking-[0.16em] ${featured ? "text-rose-200" : "text-accent"}`}>{name}</h3>
        {saving ? (
          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-400/30">−{saving}%</span>
        ) : null}
      </div>

      <p className="mt-7 flex min-h-[3.75rem] items-baseline gap-1.5">
        {onRequest ? (
          <span className="self-center text-2xl font-extrabold tracking-tight text-white">{t.onRequest}</span>
        ) : (
          <>
            <span className="text-6xl font-extrabold leading-none tracking-tight text-white">{eur(lang, plan.price as number)}</span>
          </>
        )}
      </p>
      <p className="mt-2 min-h-10 text-sm leading-snug text-zinc-400">{sub}</p>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`btn mt-6 w-full ${featured ? "btn-cream" : "btn-primary"}`}
      >
        {onRequest ? t.ask : t.order}
      </a>
    </article>
  );
}

export function PricingPlans({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [selected, setSelected] = useState<Connections>(1);
  const [recommended, setRecommended] = useState<PlanId | null>(null);
  const tablist = useRef<HTMLDivElement>(null);

  function choose(n: Connections) {
    setSelected(n);
    setRecommended(null);
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % CONNECTION_OPTIONS.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + CONNECTION_OPTIONS.length) % CONNECTION_OPTIONS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = CONNECTION_OPTIONS.length - 1;
    else return;
    e.preventDefault();
    choose(CONNECTION_OPTIONS[next]);
    tablist.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  return (
    <>
      <div className="mb-12">
        <p className="mb-4 flex items-center justify-center gap-2 text-sm font-bold text-zinc-300">
          <Compass size={16} className="text-accent" aria-hidden="true" /> {t.helper}
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {t.helperCards.map((h) => {
            const conn = h.c as Connections;
            const price = PRICES[conn][h.p as PlanId] as number;
            const months = getPlans(conn).find((p) => p.id === h.p)!.months ?? 1;
            return (
              <button
                key={h.title}
                type="button"
                onClick={() => {
                  setSelected(conn);
                  setRecommended(h.p as PlanId);
                  document.getElementById("plan-cards")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group flex h-full flex-col items-start justify-start rounded-xl border border-white/10 bg-white/[0.04] p-5 text-left transition-colors hover:border-emerald-400/50 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                <span className="block font-bold text-white">{h.title}</span>
                <span className="mt-1.5 block text-sm leading-relaxed text-zinc-400">{h.text(eur(lang, price), eur(lang, price / months))}</span>
                <span className="mt-3 block text-xs font-bold uppercase tracking-wider text-emerald-300 group-hover:underline">{t.show}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div id="plan-cards" className="mb-12 flex scroll-mt-28 flex-col items-center gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">{t.devices}</p>
        <div
          ref={tablist}
          role="tablist"
          aria-label={t.tablist}
          className="flex max-w-full flex-wrap justify-center gap-1.5 rounded-3xl border border-white/10 bg-white/[0.04] p-1.5 sm:rounded-full"
        >
          {CONNECTION_OPTIONS.map((n, i) => {
            const active = n === selected;
            return (
              <button
                key={n}
                type="button"
                role="tab"
                id={`devices-tab-${n}`}
                aria-selected={active}
                aria-controls={`devices-panel-${n}`}
                tabIndex={active ? 0 : -1}
                onClick={() => choose(n)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300 ${
                  active ? "bg-cream text-[#1a1418] shadow-lg shadow-black/30" : "text-zinc-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <MonitorSmartphone size={16} aria-hidden="true" />
                {deviceLabel(lang, n)}
              </button>
            );
          })}
        </div>
      </div>

      {CONNECTION_OPTIONS.map((n) => (
        <div
          key={n}
          role="tabpanel"
          id={`devices-panel-${n}`}
          aria-labelledby={`devices-tab-${n}`}
          hidden={n !== selected}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {getPlans(n).map((plan) => (
            <PlanCard key={plan.id} lang={lang} plan={plan} connections={n} recommended={n === selected && plan.id === recommended} />
          ))}
        </div>
      ))}
    </>
  );
}
