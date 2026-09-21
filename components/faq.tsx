import Link from "next/link";
import { Plus } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { Section, SectionHeading, glass } from "@/components/ui";
import type { Lang } from "@/lib/i18n";
import { blogPath, path } from "@/lib/routes";
import { whatsappLink } from "@/lib/site";

type Item = { q: string; a: string; link?: { label: string; href: string } };

const copy: Record<Lang, { eyebrow: string; title: string; more: string; ask: string; msg: string; items: Item[] }> = {
  en: {
    eyebrow: "FAQ",
    title: "IPTV Poland: frequently asked questions",
    more: "Did not find your answer? Message us and we will reply in English or Polish.",
    ask: "Message us on WhatsApp",
    msg: "Hello! I have a question about Polonia IPTV.",
    items: [
      { q: "What is IPTV Poland?", a: "IPTV means Internet Protocol Television: TV delivered through your internet connection instead of a satellite dish or cable. IPTV Poland usually means watching Polish-language television and on-demand programmes this way, from Poland or from abroad." },
      { q: "Do I need special equipment?", a: "No. You need a compatible device and a stable internet connection. Most smart TVs, phones, tablets, computers and a Fire TV Stick work with an IPTV player app. Our setup guide lists the steps for each device." },
      { q: "Which devices can I use?", a: "Smart TVs (Samsung, LG and Android TV), Fire TV Stick, Android phones and tablets, iPhone and iPad, MAG boxes, Windows and Mac computers, and Enigma 2 receivers." },
      { q: "How do I get my login details?", a: "After your order is confirmed we send your login details by e-mail. If they do not arrive, check your spam folder or message us." },
      { q: "How many devices can watch at the same time?", a: "It depends on your plan. Plans cover 1 to 5 devices at the same time. If you need more, contact us and we will prepare an offer." },
      { q: "How do I pay?", a: "Order by WhatsApp or e-mail and we confirm the payment options available in your country." },
      { q: "Can I try before I buy?", a: "Yes. Request a free trial with the form on this page and check the service on your own device first." },
      { q: "What internet speed do I need?", a: "As a rule of thumb, allow about 8 to 10 Mb/s for HD on each device and about 25 Mb/s for 4K where it is available. Read our guide for the details and a simple way to test your connection.", link: { label: "IPTV setup checklist", href: blogPath("en", "iptv-setup-checklist") } },
      { q: "Is IPTV legal?", a: "IPTV is a legal technology. What matters is whether a service holds the rights to the channels and programmes it offers. Our copyright policy explains how rights holders can contact us.", link: { label: "Copyright policy", href: path("en", "copyright") } },
      { q: "How can I contact support?", a: "By WhatsApp or e-mail, in English or Polish. Details are on the contact page.", link: { label: "Contact page", href: path("en", "contact") } },
    ],
  },
  pl: {
    eyebrow: "FAQ",
    title: "IPTV Polonia: najczęstsze pytania",
    more: "Nie znalazłeś odpowiedzi? Napisz do nas, odpowiemy po polsku lub angielsku.",
    ask: "Napisz na WhatsApp",
    msg: "Cześć! Mam pytanie o Polonia IPTV.",
    items: [
      { q: "Czym jest IPTV Polonia?", a: "IPTV to telewizja internetowa: program dostarczany przez łącze internetowe zamiast anteny satelitarnej lub kabla. IPTV Polonia to oglądanie polskojęzycznej telewizji i programów na żądanie w ten sposób, w Polsce i za granicą." },
      { q: "Czy potrzebuję specjalnego sprzętu?", a: "Nie. Potrzebujesz zgodnego urządzenia i stabilnego internetu. Większość telewizorów Smart TV, telefonów, tabletów, komputerów i Fire TV Stick działa z aplikacją IPTV. Nasza instrukcja opisuje kroki dla każdego urządzenia." },
      { q: "Na jakich urządzeniach mogę oglądać?", a: "Na telewizorach Smart TV (Samsung, LG i Android TV), Fire TV Stick, telefonach i tabletach z Androidem, iPhone i iPad, dekoderach MAG, komputerach z Windows i Mac oraz odbiornikach Enigma 2." },
      { q: "Jak otrzymam dane logowania?", a: "Po potwierdzeniu zamówienia wyślemy dane logowania e-mailem. Jeśli nie dotrą, sprawdź folder ze spamem lub napisz do nas." },
      { q: "Ile urządzeń może oglądać jednocześnie?", a: "To zależy od planu. Plany obejmują 1 do 5 urządzeń jednocześnie. Jeśli potrzebujesz więcej, napisz do nas, a przygotujemy ofertę." },
      { q: "Jak zapłacić?", a: "Zamów przez WhatsApp lub e-mail, a potwierdzimy formy płatności dostępne w Twoim kraju." },
      { q: "Czy mogę wypróbować przed zakupem?", a: "Tak. Poproś o darmowy test przez formularz na tej stronie i sprawdź usługę na własnym urządzeniu." },
      { q: "Jakiego internetu potrzebuję?", a: "Orientacyjnie około 8 do 10 Mb/s na urządzenie dla HD i około 25 Mb/s dla 4K, tam gdzie jest dostępne. W poradniku znajdziesz szczegóły i prosty sposób na sprawdzenie łącza.", link: { label: "Lista kontrolna IPTV", href: blogPath("pl", "lista-kontrolna-iptv") } },
      { q: "Czy IPTV jest legalne?", a: "IPTV to legalna technologia. Liczy się to, czy usługa posiada prawa do oferowanych kanałów i programów. Nasza polityka praw autorskich wyjaśnia, jak właściciele praw mogą się z nami skontaktować.", link: { label: "Prawa autorskie", href: path("pl", "copyright") } },
      { q: "Jak skontaktować się ze wsparciem?", a: "Przez WhatsApp lub e-mail, po polsku lub angielsku. Szczegóły są na stronie kontaktowej.", link: { label: "Strona kontaktowa", href: path("pl", "contact") } },
    ],
  },
};

export function Faq({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const jsonLd = {
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: t.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
  };
  return (
    <Section id="faq" band>
      <SectionHeading eyebrow={t.eyebrow} title={t.title} />
      <div className="mx-auto max-w-3xl space-y-3">
        {t.items.map((item) => (
          <details key={item.q} className={`${glass} group open:border-rose-400/40 open:bg-white/[0.07]`}>
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-bold text-white">
              <span>{item.q}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                <Plus size={18} className="faq-icon transition-transform" aria-hidden="true" />
              </span>
            </summary>
            <div className="px-5 pb-5 leading-relaxed text-zinc-300">
              <p>{item.a}</p>
              {item.link && (
                <p className="mt-3">
                  <Link href={item.link.href} className="font-bold text-accent underline underline-offset-2">{item.link.label}</Link>
                </p>
              )}
            </div>
          </details>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-3xl text-center">
        <p className="text-zinc-400">{t.more}</p>
        <a href={whatsappLink(t.msg)} target="_blank" rel="noopener noreferrer" className="btn btn-cream mt-5">{t.ask}</a>
      </div>
      <JsonLd data={jsonLd} />
    </Section>
  );
}
