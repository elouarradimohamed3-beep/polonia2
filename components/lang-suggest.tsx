"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";

const KEY = "lang-suggest-dismissed";
const subscribe = () => () => {};

function wantsPolish() {
  try {
    return navigator.language?.toLowerCase().startsWith("pl") && !localStorage.getItem(KEY);
  } catch {
    return false; // storage blocked: stay hidden
  }
}

/**
 * Suggests the Polish version to visitors whose browser is set to Polish.
 * A suggestion, not a redirect, so search engines and people keep the page they asked for.
 */
export function LangSuggest({ href }: { href: string }) {
  const suggested = useSyncExternalStore(subscribe, wantsPolish, () => false);
  const [dismissed, setDismissed] = useState(false);
  if (!suggested || dismissed) return null;

  return (
    <div role="region" aria-label="Język strony" lang="pl" className="border-b border-rose-400/20 bg-rose-500/10 px-4 py-2 text-sm text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3">
        <span>Ta strona jest dostępna po polsku.</span>
        <Link href={href} hrefLang="pl" className="font-bold text-accent underline underline-offset-2">
          Przejdź na polską wersję
        </Link>
        <button
          type="button"
          aria-label="Zamknij"
          className="rounded p-1 hover:bg-white/10"
          onClick={() => {
            try {
              localStorage.setItem(KEY, "1");
            } catch {
              /* ignore */
            }
            setDismissed(true);
          }}
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
