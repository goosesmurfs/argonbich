import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Hearth Insulation. Comfort starts here. Indianapolis insulation contractor.";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #2C2319 0%, #3A2A18 60%, #5A3D1C 100%)",
          color: "#FBF7EC",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 110,
            height: 110,
            borderRadius: 30,
            background: "#B0762C",
            fontSize: 64,
            marginBottom: 36,
          }}
        >
          <svg width="64" height="64" viewBox="0 0 40 40" fill="none">
            <path
              d="M8 20.5 20 10l12 10.5"
              stroke="#FBF7EC"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 31c-3.4 0-5.6-2.2-5.6-5 0-2.1 1.1-3.6 2.4-4.9.5 1 1.2 1.7 2 2.2-.3-2.4.6-5 3.2-6.8.3 2.1 1.4 3.3 2.5 4.4 1.2 1.2 2.1 2.7 2.1 4.6 0 3-2.4 5.5-6.6 5.5z"
              fill="#FBF7EC"
            />
          </svg>
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -1 }}>
          HEARTH INSULATION
        </div>
        <div style={{ fontSize: 38, color: "#D8A857", marginTop: 16 }}>
          Comfort starts here.
        </div>
        <div style={{ fontSize: 26, color: "#cbbfa9", marginTop: 28 }}>
          Indianapolis attic insulation, batt replacement, and removal
        </div>
      </div>
    ),
    size,
  );
}
