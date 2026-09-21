import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "404 | Polonia IPTV", robots: { index: false, follow: true } };

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="text-rose-gradient text-6xl font-extrabold">404</p>
          <h1 className="mt-4 text-3xl font-extrabold text-white">Page not found / Nie znaleziono strony</h1>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {/* Plain anchors on purpose: this page renders outside the app layouts. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="btn btn-primary">English</a>
            <a href="/pl" className="btn btn-outline">Polski</a>
          </div>
        </div>
      </body>
    </html>
  );
}
