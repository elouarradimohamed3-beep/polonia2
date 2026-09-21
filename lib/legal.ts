import type { Lang } from "@/lib/i18n";

export type LegalDoc = {
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: { h: string; p?: string[]; ul?: string[] }[];
};

export type LegalKey = "terms" | "refunds" | "privacy" | "copyright";

/**
 * DRAFTS. These texts are a reasonable starting point, not legal advice.
 * Have a lawyer review them and fill in the company details (see COMPANY in lib/site.ts).
 */
export const LEGAL: Record<LegalKey, Record<Lang, LegalDoc>> = {
  terms: {
    en: {
      title: "Terms of service",
      description: "The terms that apply to using the Polonia IPTV website and subscriptions: orders, free trial, acceptable use, availability and liability.",
      updated: "2026-09-22",
      intro: "These terms apply to your use of this website and to subscriptions to Polonia IPTV. By placing an order you agree to them.",
      sections: [
        { h: "1. The service", p: ["Polonia IPTV provides access to internet television (IPTV) through compatible apps and devices. Available content depends on your plan and region and may change over time."] },
        { h: "2. Orders and delivery", p: ["You order by WhatsApp or e-mail. After your order is confirmed we send your login details by e-mail. Prices are in euros and apply to the plan length and number of devices you choose."] },
        { h: "3. Free trial", p: ["A free trial is available on request so you can check the service on your own device. We may limit trials to prevent misuse."] },
        { h: "4. Your login details", p: ["Keep your login details private. Each plan allows a set number of devices at the same time. Using a subscription beyond its limit may lead to suspension."] },
        { h: "5. Acceptable use", ul: ["Use the service only for lawful, personal viewing.", "Do not redistribute, publicly perform or record content for distribution.", "Do not interfere with the service or try to access it in ways we have not provided."] },
        { h: "6. Availability", p: ["We work to keep the service running, but we cannot guarantee uninterrupted access. It also depends on your internet connection, your devices and third parties."] },
        { h: "7. Liability", p: ["To the extent permitted by law we are not liable for indirect or consequential losses. Nothing in these terms limits any rights you have under mandatory consumer law."] },
        { h: "8. Changes", p: ["We may update these terms. The date at the top shows the latest version. Continuing to use the service after a change means you accept the new terms."] },
        { h: "9. Governing law", p: ["These terms are governed by the law of the country where the provider is established, without limiting the mandatory consumer rights you have in your country of residence."] },
        { h: "10. Contact", p: ["Questions about these terms: use the contact details below."] },
      ],
    },
    pl: {
      title: "Regulamin",
      description: "Zasady korzystania ze strony Polonia IPTV i abonamentów: zamówienia, darmowy test, dozwolone użycie, dostępność i odpowiedzialność.",
      updated: "2026-09-22",
      intro: "Niniejszy regulamin dotyczy korzystania ze strony i abonamentów Polonia IPTV. Składając zamówienie, akceptujesz jego postanowienia.",
      sections: [
        { h: "1. Usługa", p: ["Polonia IPTV zapewnia dostęp do telewizji internetowej (IPTV) przez zgodne aplikacje i urządzenia. Dostępne treści zależą od planu i regionu i mogą się zmieniać."] },
        { h: "2. Zamówienia i dostawa", p: ["Zamówienia składasz przez WhatsApp lub e-mail. Po potwierdzeniu zamówienia wysyłamy dane logowania e-mailem. Ceny podane są w euro i dotyczą wybranego okresu oraz liczby urządzeń."] },
        { h: "3. Darmowy test", p: ["Darmowy test jest dostępny na prośbę, aby sprawdzić usługę na własnym urządzeniu. Możemy ograniczać testy, aby zapobiegać nadużyciom."] },
        { h: "4. Dane logowania", p: ["Zachowaj dane logowania w tajemnicy. Każdy plan pozwala na określoną liczbę urządzeń jednocześnie. Korzystanie ponad limit może skutkować zawieszeniem."] },
        { h: "5. Dozwolone korzystanie", ul: ["Korzystaj z usługi wyłącznie zgodnie z prawem i do użytku osobistego.", "Nie rozpowszechniaj, nie odtwarzaj publicznie ani nie nagrywaj treści w celu dystrybucji.", "Nie zakłócaj działania usługi ani nie próbuj uzyskiwać dostępu w sposób, którego nie udostępniliśmy."] },
        { h: "6. Dostępność", p: ["Dokładamy starań, aby usługa działała, ale nie gwarantujemy nieprzerwanego dostępu. Zależy on także od Twojego internetu, urządzeń i podmiotów trzecich."] },
        { h: "7. Odpowiedzialność", p: ["W zakresie dozwolonym prawem nie odpowiadamy za szkody pośrednie ani następcze. Regulamin nie ogranicza praw przysługujących Ci na mocy bezwzględnie obowiązujących przepisów o ochronie konsumentów."] },
        { h: "8. Zmiany", p: ["Możemy zmieniać regulamin. Data na górze wskazuje aktualną wersję. Dalsze korzystanie z usługi po zmianie oznacza akceptację nowego regulaminu."] },
        { h: "9. Prawo właściwe", p: ["Regulamin podlega prawu państwa, w którym siedzibę ma usługodawca, bez ograniczania bezwzględnie obowiązujących praw konsumenta w kraju jego zamieszkania."] },
        { h: "10. Kontakt", p: ["Pytania dotyczące regulaminu: skorzystaj z danych kontaktowych poniżej."] },
      ],
    },
  },
  refunds: {
    en: {
      title: "Refund policy",
      description: "How refunds work at Polonia IPTV: before activation, technical problems, the right of withdrawal and how to request a refund.",
      updated: "2026-09-22",
      intro: "We want you to be sure the service works on your device before you pay. That is why we offer a free trial. This policy explains what happens if something goes wrong.",
      sections: [
        { h: "1. Before activation", p: ["If we have not yet sent your login details, or you have not used them, you can cancel and receive a full refund."] },
        { h: "2. Technical problems", p: ["If the service does not work on your device, contact support first. We will try to solve the problem in a reasonable time. If we cannot make it work, we refund the unused part of your plan."] },
        { h: "3. Right of withdrawal", p: ["Consumers in the EU normally have 14 days to withdraw from a distance contract. For digital services this right ends once the service has started with your express request and your acknowledgement that you lose the right of withdrawal. We ask for this when you order."] },
        { h: "4. How to request a refund", ul: ["Write to us by e-mail or WhatsApp with your order details.", "We reply promptly and tell you what we can do.", "Approved refunds go back to the original payment method, normally within 14 days."] },
        { h: "5. Your rights", p: ["This policy does not limit any rights you have under mandatory consumer law."] },
      ],
    },
    pl: {
      title: "Zwroty i anulowanie",
      description: "Jak działają zwroty w Polonia IPTV: przed aktywacją, problemy techniczne, prawo odstąpienia i sposób złożenia wniosku.",
      updated: "2026-09-22",
      intro: "Chcemy, abyś miał pewność, że usługa działa na Twoim urządzeniu, zanim zapłacisz. Dlatego oferujemy darmowy test. Ta polityka wyjaśnia, co się dzieje, gdy coś pójdzie nie tak.",
      sections: [
        { h: "1. Przed aktywacją", p: ["Jeśli nie wysłaliśmy jeszcze danych logowania lub z nich nie korzystałeś, możesz zrezygnować i otrzymać pełny zwrot."] },
        { h: "2. Problemy techniczne", p: ["Jeśli usługa nie działa na Twoim urządzeniu, najpierw skontaktuj się ze wsparciem. Postaramy się rozwiązać problem w rozsądnym czasie. Jeśli nie uda się go usunąć, zwrócimy niewykorzystaną część planu."] },
        { h: "3. Prawo odstąpienia", p: ["Konsumenci w UE zwykle mają 14 dni na odstąpienie od umowy zawartej na odległość. W przypadku usług cyfrowych prawo to wygasa, gdy usługa została rozpoczęta na Twoje wyraźne żądanie i po potwierdzeniu, że tracisz prawo odstąpienia. Prosimy o to przy składaniu zamówienia."] },
        { h: "4. Jak poprosić o zwrot", ul: ["Napisz do nas e-mailem lub przez WhatsApp, podając dane zamówienia.", "Odpowiadamy niezwłocznie i informujemy, co możemy zrobić.", "Zaakceptowane zwroty wracają na pierwotną metodę płatności, zwykle w ciągu 14 dni."] },
        { h: "5. Twoje prawa", p: ["Ta polityka nie ogranicza praw przysługujących Ci na mocy bezwzględnie obowiązujących przepisów konsumenckich."] },
      ],
    },
  },
  privacy: {
    en: {
      title: "Privacy policy",
      description: "How Polonia IPTV collects and uses personal data: what we collect, why, who receives it, how long we keep it and your rights.",
      updated: "2026-09-22",
      intro: "We collect as little personal data as we can. This policy explains what we collect, why, and what your rights are.",
      sections: [
        { h: "1. Who is responsible", p: ["The data controller is Polonia IPTV. Contact details are at the end of this page."] },
        { h: "2. What we collect", ul: ["E-mail address and device type, when you request a free trial.", "Order details and messages, when you order or contact us by WhatsApp or e-mail.", "Technical data your browser sends to our hosting provider, such as your IP address, when you visit the website."] },
        { h: "3. Why we use it", ul: ["To arrange your free trial and answer your request (your consent).", "To process orders and provide the service (performing a contract).", "To keep the website secure and prevent abuse (our legitimate interest).", "To meet legal obligations, such as accounting."] },
        { h: "4. Who receives it", p: ["We use service providers that process data on our behalf: website hosting, e-mail delivery and messaging (for example WhatsApp) and payment providers. Some are located outside the EU and rely on approved safeguards for transfers."] },
        { h: "5. How long we keep it", p: ["We keep data only as long as needed for the purpose it was collected for, and as required by law. You can ask us to delete trial requests at any time."] },
        { h: "6. Your rights", ul: ["Access, correct or delete your data.", "Restrict or object to processing.", "Receive your data in a portable format.", "Withdraw consent at any time.", "Complain to your data protection authority."] },
        { h: "7. Cookies", p: ["We do not use advertising cookies. The website stores one small preference in your browser, for example to remember that you dismissed the language suggestion. If we add analytics we will ask for your consent first."] },
        { h: "8. Changes", p: ["We may update this policy. The date at the top shows the latest version."] },
      ],
    },
    pl: {
      title: "Polityka prywatności",
      description: "Jak Polonia IPTV zbiera i wykorzystuje dane osobowe: co zbieramy, po co, kto je otrzymuje, jak długo je przechowujemy i jakie masz prawa.",
      updated: "2026-09-22",
      intro: "Zbieramy jak najmniej danych osobowych. Ta polityka wyjaśnia, co zbieramy, po co i jakie masz prawa.",
      sections: [
        { h: "1. Administrator danych", p: ["Administratorem danych jest Polonia IPTV. Dane kontaktowe znajdziesz na końcu strony."] },
        { h: "2. Co zbieramy", ul: ["Adres e-mail i typ urządzenia, gdy prosisz o darmowy test.", "Dane zamówienia i wiadomości, gdy zamawiasz lub piszesz do nas przez WhatsApp lub e-mail.", "Dane techniczne wysyłane przez przeglądarkę do naszego dostawcy hostingu, takie jak adres IP, gdy odwiedzasz stronę."] },
        { h: "3. Po co ich używamy", ul: ["Aby przygotować darmowy test i odpowiedzieć na zgłoszenie (Twoja zgoda).", "Aby realizować zamówienia i świadczyć usługę (wykonanie umowy).", "Aby chronić stronę i zapobiegać nadużyciom (nasz prawnie uzasadniony interes).", "Aby wypełniać obowiązki prawne, na przykład księgowe."] },
        { h: "4. Kto je otrzymuje", p: ["Korzystamy z dostawców, którzy przetwarzają dane w naszym imieniu: hosting strony, wysyłka e-maili i komunikatory (na przykład WhatsApp) oraz operatorzy płatności. Część z nich działa poza UE i stosuje zatwierdzone zabezpieczenia przy przekazywaniu danych."] },
        { h: "5. Jak długo przechowujemy", p: ["Dane przechowujemy tak długo, jak potrzeba do celu, w którym je zebraliśmy, oraz zgodnie z przepisami. W każdej chwili możesz poprosić o usunięcie zgłoszenia testowego."] },
        { h: "6. Twoje prawa", ul: ["Dostęp do danych, ich poprawianie lub usunięcie.", "Ograniczenie przetwarzania lub sprzeciw.", "Przenoszenie danych.", "Wycofanie zgody w każdej chwili.", "Skarga do organu ochrony danych, w Polsce do Prezesa UODO."] },
        { h: "7. Pliki cookie", p: ["Nie używamy reklamowych plików cookie. Strona zapisuje w przeglądarce jedno małe ustawienie, na przykład informację, że zamknąłeś podpowiedź o wersji językowej. Jeśli dodamy analitykę, najpierw poprosimy o zgodę."] },
        { h: "8. Zmiany", p: ["Możemy zmieniać tę politykę. Data na górze wskazuje aktualną wersję."] },
      ],
    },
  },
  copyright: {
    en: {
      title: "Copyright and takedown policy",
      description: "How rights holders can report content to Polonia IPTV, what information a notice should contain and how we handle notices and counter-notices.",
      updated: "2026-09-22",
      intro: "We respect intellectual property rights and expect our users to do the same. If you believe content available through our service infringes your rights, please tell us.",
      sections: [
        { h: "1. How to send a notice", p: ["Write to the e-mail address below with the following information:"], ul: ["Your name, company and contact details.", "A description of the work you say is infringed.", "Enough information for us to find the material you are reporting.", "A statement that you believe in good faith that the use is not authorised by the rights holder, its agent or the law.", "A statement that the information in your notice is accurate and that you are the rights holder or authorised to act for them.", "Your electronic or physical signature."] },
        { h: "2. What we do", p: ["We review notices promptly. Where a notice is valid we remove or disable access to the material and let the affected customer know."] },
        { h: "3. Counter-notice", p: ["If you believe material was removed by mistake, write to us with the details and a statement explaining why. We will consider it and, where appropriate, restore access."] },
        { h: "4. Repeat infringement", p: ["We may suspend or terminate accounts that repeatedly infringe the rights of others."] },
        { h: "5. Misuse of this process", p: ["Please send only accurate notices. Knowingly false claims can have legal consequences."] },
      ],
    },
    pl: {
      title: "Prawa autorskie i zgłaszanie naruszeń",
      description: "Jak właściciele praw mogą zgłaszać treści do Polonia IPTV, co powinno zawierać zgłoszenie i jak rozpatrujemy zgłoszenia oraz sprzeciwy.",
      updated: "2026-09-22",
      intro: "Szanujemy prawa własności intelektualnej i oczekujemy tego samego od użytkowników. Jeśli uważasz, że treści dostępne w naszej usłudze naruszają Twoje prawa, poinformuj nas.",
      sections: [
        { h: "1. Jak wysłać zgłoszenie", p: ["Napisz na poniższy adres e-mail, podając następujące informacje:"], ul: ["Imię i nazwisko, firmę i dane kontaktowe.", "Opis utworu, którego prawa Twoim zdaniem naruszono.", "Informacje wystarczające, abyśmy mogli znaleźć zgłaszany materiał.", "Oświadczenie, że w dobrej wierze uważasz, iż użycie nie jest dozwolone przez właściciela praw, jego przedstawiciela ani przepisy.", "Oświadczenie, że informacje w zgłoszeniu są prawdziwe oraz że jesteś właścicielem praw lub masz upoważnienie do działania w jego imieniu.", "Podpis elektroniczny lub odręczny."] },
        { h: "2. Co robimy", p: ["Rozpatrujemy zgłoszenia niezwłocznie. Gdy zgłoszenie jest zasadne, usuwamy materiał lub blokujemy do niego dostęp i informujemy dotkniętego klienta."] },
        { h: "3. Sprzeciw", p: ["Jeśli uważasz, że materiał usunięto przez pomyłkę, napisz do nas, podając szczegóły i uzasadnienie. Rozpatrzymy sprawę i w razie potrzeby przywrócimy dostęp."] },
        { h: "4. Powtarzające się naruszenia", p: ["Możemy zawiesić lub zamknąć konta, które wielokrotnie naruszają prawa innych osób."] },
        { h: "5. Nadużywanie procedury", p: ["Prosimy o wysyłanie wyłącznie prawdziwych zgłoszeń. Świadome fałszywe roszczenia mogą mieć skutki prawne."] },
      ],
    },
  },
};
