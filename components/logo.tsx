import { useId } from "react";

/** Polonia IPTV mark: a rounded tile split cream over crimson (a nod to the Polish flag) with a play button. */
export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  const clip = useId();
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={clip}>
          <rect x="2" y="2" width="44" height="44" rx="13" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect x="2" y="2" width="44" height="22" fill="#f6efe4" />
        <rect x="2" y="24" width="44" height="22" fill="#e11d48" />
      </g>
      <path d="M19 15 L34 24 L19 33 Z" fill="#160f14" stroke="#160f14" strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  );
}

/** Mark plus wordmark. The text is real text so it always matches the site font. */
export function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      <span className="text-[1.35rem] font-extrabold leading-none tracking-tight text-white">
        Polonia <span className="text-accent">IPTV</span>
      </span>
    </span>
  );
}
