import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Ridgeline Roofing Co. Over your head. Under control. Indianapolis roofing contractor.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 90px",
          background: "linear-gradient(165deg, #0B0E12 0%, #12161C 60%, #1A2028 100%)",
          color: "#EFECE4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 44,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 14,
              background: "#FF4D00",
            }}
          >
            <svg width="56" height="56" viewBox="0 0 40 40" fill="none">
              <path
                d="M6 26 16 14l6 7 5-6 7 8"
                stroke="#0B0E12"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 31h28"
                stroke="#0B0E12"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 6,
              color: "#AAB2BC",
              textTransform: "uppercase",
            }}
          >
            Ridgeline Roofing Co.
          </div>
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: -3,
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          Over your head.
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            letterSpacing: -3,
            lineHeight: 1.1,
            textTransform: "uppercase",
            color: "#FF4D00",
          }}
        >
          Under control.
        </div>
        <div style={{ fontSize: 28, color: "#AAB2BC", marginTop: 36 }}>
          Roof replacement, repair, and storm restoration / Indianapolis, IN
        </div>
      </div>
    ),
    size,
  );
}
