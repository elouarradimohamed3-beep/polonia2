import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f0d12" }}>
        <svg width="132" height="132" viewBox="0 0 48 48">
          <defs>
            <clipPath id="c"><rect x="2" y="2" width="44" height="44" rx="13" /></clipPath>
          </defs>
          <g clipPath="url(#c)">
            <rect x="2" y="2" width="44" height="22" fill="#f6efe4" />
            <rect x="2" y="24" width="44" height="22" fill="#e11d48" />
          </g>
          <path d="M19 15 L34 24 L19 33 Z" fill="#160f14" stroke="#160f14" strokeWidth="2.4" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size,
  );
}
