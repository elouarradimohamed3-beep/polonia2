import type { Lang } from "@/lib/i18n";

export type GuideDevice = { id: string; title: string; steps: string[]; note?: string };

export const GUIDE: Record<
  Lang,
  { title: string; description: string; h1: string; intro: string; beforeTitle: string; before: string[]; devices: GuideDevice[]; tipsTitle: string; tips: string[]; ctaTitle: string; ctaText: string }
> = {
  en: {
    title: "IPTV setup guide for every device",
    description: "Step-by-step IPTV setup for Smart TV, Fire TV Stick, Android, iPhone and iPad, and Windows or Mac, plus a quick checklist and troubleshooting tips.",
    h1: "IPTV setup guide for every device",
    intro: "Most setups take about ten minutes. Pick your device below. The steps are the same idea everywhere: install an IPTV player app, enter your login details, and start watching.",
    beforeTitle: "Before you start",
    before: ["Your login details from us (username, password and server address).", "A stable internet connection. A cable is best for TVs; Wi-Fi 5 GHz is second best.", "Your device connected to the same network as usual.", "The name of the IPTV player app we recommend for your device. Ask us if you are unsure."],
    devices: [
      { id: "smart-tv", title: "Smart TV (Samsung, LG, Android TV)", steps: ["Open your TV's app store.", "Search for the IPTV player app we recommend and install it.", "Open the app and choose to log in with your provider details.", "Enter the username, password and server address from your e-mail.", "Wait for the list to load, then choose a channel."] },
      { id: "fire-tv", title: "Amazon Fire TV Stick", steps: ["Install the Downloader app from the Amazon Appstore.", "Go to Settings, My Fire TV, Developer options and allow installing unknown apps for Downloader.", "Open Downloader and enter the app address or code we send you.", "Install the app, open it and log in with your details.", "Turn off the unknown-apps setting again for safety."], note: "Only install apps from addresses you trust." },
      { id: "android", title: "Android phone or tablet", steps: ["Open Google Play and search for the recommended IPTV player app.", "Install and open it.", "Choose to log in with your provider details.", "Enter the username, password and server address.", "Open the channel list and start watching."] },
      { id: "ios", title: "iPhone and iPad", steps: ["Open the App Store and search for the recommended IPTV player app.", "Install and open it.", "Add a new user or playlist with your provider details.", "Wait for the list to load.", "Tap a channel to start."] },
      { id: "computer", title: "Windows and Mac", steps: ["Download the IPTV player app we recommend from its official website.", "Install it and open it.", "Add a new user with your provider details.", "Wait for the list to load and choose a channel."] },
    ],
    tipsTitle: "Quick troubleshooting",
    tips: ["Login fails: check for spaces before or after your details and for upper and lower case letters.", "The list does not load: check your internet connection and restart the app.", "Picture stutters: use a cable or Wi-Fi 5 GHz, close other downloads and lower the quality in the app.", "Still stuck: message us with your device model, the app name and what you see on screen."],
    ctaTitle: "Need help with setup?",
    ctaText: "Message us in English or Polish and we will walk you through it.",
  },
  pl: {
    title: "Instrukcja instalacji IPTV na każdym urządzeniu",
    description: "Instalacja IPTV krok po kroku na Smart TV, Fire TV Stick, Androidzie, iPhone i iPad oraz Windows i Mac, z listą kontrolną i wskazówkami.",
    h1: "Instrukcja instalacji IPTV na każdym urządzeniu",
    intro: "Większość instalacji zajmuje około dziesięciu minut. Wybierz swoje urządzenie poniżej. Zasada jest wszędzie taka sama: zainstaluj aplikację IPTV, wpisz dane logowania i zacznij oglądać.",
    beforeTitle: "Zanim zaczniesz",
    before: ["Dane logowania od nas (nazwa użytkownika, hasło i adres serwera).", "Stabilny internet. Kabel jest najlepszy dla telewizorów, a Wi-Fi 5 GHz drugie w kolejności.", "Urządzenie podłączone do zwykłej sieci.", "Nazwa aplikacji IPTV, którą polecamy dla Twojego urządzenia. Zapytaj nas, jeśli nie masz pewności."],
    devices: [
      { id: "smart-tv", title: "Smart TV (Samsung, LG, Android TV)", steps: ["Otwórz sklep z aplikacjami w telewizorze.", "Wyszukaj polecaną przez nas aplikację IPTV i zainstaluj ją.", "Otwórz aplikację i wybierz logowanie danymi dostawcy.", "Wpisz nazwę użytkownika, hasło i adres serwera z wiadomości e-mail.", "Poczekaj na wczytanie listy i wybierz kanał."] },
      { id: "fire-tv", title: "Amazon Fire TV Stick", steps: ["Zainstaluj aplikację Downloader z Amazon Appstore.", "Wejdź w Ustawienia, Moje Fire TV, Opcje programisty i zezwól Downloaderowi na instalację nieznanych aplikacji.", "Otwórz Downloader i wpisz adres lub kod aplikacji, który od nas otrzymasz.", "Zainstaluj aplikację, otwórz ją i zaloguj się.", "Dla bezpieczeństwa wyłącz ponownie zgodę na nieznane aplikacje."], note: "Instaluj aplikacje tylko z adresów, którym ufasz." },
      { id: "android", title: "Telefon lub tablet z Androidem", steps: ["Otwórz Sklep Google Play i wyszukaj polecaną aplikację IPTV.", "Zainstaluj ją i otwórz.", "Wybierz logowanie danymi dostawcy.", "Wpisz nazwę użytkownika, hasło i adres serwera.", "Otwórz listę kanałów i zacznij oglądać."] },
      { id: "ios", title: "iPhone i iPad", steps: ["Otwórz App Store i wyszukaj polecaną aplikację IPTV.", "Zainstaluj ją i otwórz.", "Dodaj nowego użytkownika lub playlistę z danymi dostawcy.", "Poczekaj na wczytanie listy.", "Dotknij kanału, aby zacząć."] },
      { id: "computer", title: "Windows i Mac", steps: ["Pobierz polecaną przez nas aplikację IPTV z jej oficjalnej strony.", "Zainstaluj ją i otwórz.", "Dodaj nowego użytkownika z danymi dostawcy.", "Poczekaj na wczytanie listy i wybierz kanał."] },
    ],
    tipsTitle: "Szybkie rozwiązywanie problemów",
    tips: ["Logowanie nie działa: sprawdź, czy przed lub po danych nie ma spacji oraz czy zgadzają się wielkie i małe litery.", "Lista się nie wczytuje: sprawdź internet i uruchom aplikację ponownie.", "Obraz się zacina: użyj kabla lub Wi-Fi 5 GHz, zamknij inne pobieranie i obniż jakość w aplikacji.", "Nadal nie działa: napisz do nas, podając model urządzenia, nazwę aplikacji i to, co widzisz na ekranie."],
    ctaTitle: "Potrzebujesz pomocy przy instalacji?",
    ctaText: "Napisz do nas po polsku lub angielsku, a przeprowadzimy Cię przez cały proces.",
  },
};
