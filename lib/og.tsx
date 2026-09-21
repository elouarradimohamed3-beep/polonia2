import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const Mark = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <defs>
      <clipPath id="c">
        <rect x="2" y="2" width="44" height="44" rx="13" />
      </clipPath>
    </defs>
    <g clipPath="url(#c)">
      <rect x="2" y="2" width="44" height="22" fill="#f6efe4" />
      <rect x="2" y="24" width="44" height="22" fill="#e11d48" />
    </g>
    <path d="M19 15 L34 24 L19 33 Z" fill="#160f14" stroke="#160f14" strokeWidth="2.4" strokeLinejoin="round" />
  </svg>
);

/** Branded 1200x630 share image. */
export function renderOg({ title, kicker, footer }: { title: string; kicker: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0b0a0d 0%, #1a0f15 55%, #3a0f1d 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", marginRight: 20 }}>
            <Mark size={76} />
          </div>
          <div style={{ display: "flex", fontSize: 42, fontWeight: 800 }}>
            Polonia <span style={{ color: "#ff8fa3", marginLeft: 12 }}>IPTV</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#ff8fa3", marginBottom: 18 }}>{kicker}</div>
          <div style={{ display: "flex", fontSize: title.length > 60 ? 58 : 72, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c9b9bd" }}>{footer}</div>
      </div>
    ),
    OG_SIZE,
  );
}
