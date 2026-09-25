import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "IVT MEDIA GROUP - Education Before Speculation"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background:
            "radial-gradient(circle at 20% 15%, #4b5563 0%, #18181b 32%, #09090b 68%, #030712 100%)",
          color: "#f4f4f5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #52525b",
            borderRadius: "999px",
            padding: "12px 22px",
            fontSize: 24,
            letterSpacing: 1,
            color: "#d4d4d8",
          }}
        >
          DIGITAL FINANCE EDUCATION
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>IVT MEDIA GROUP</div>
          <div style={{ fontSize: 40, color: "#e4e4e7", lineHeight: 1.2 }}>Education Before Speculation</div>
          <div style={{ fontSize: 29, color: "#a1a1aa", lineHeight: 1.25 }}>
            Learn Digital Finance. Understand the IV-SOL Utility.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
