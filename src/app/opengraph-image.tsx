import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Yu–Chieh Chin — Marketing Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const cormorantBold = readFileSync(
    join(process.cwd(), "src/assets/fonts/CormorantGaramond-Bold.ttf")
  );
  const jostLight = readFileSync(
    join(process.cwd(), "src/assets/fonts/Jost-Light.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#6e1515",
          fontFamily: "Jost",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 18,
              color: "rgba(250,246,240,0.45)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            Portfolio
          </span>
          <span
            style={{
              fontSize: 80,
              fontFamily: "Cormorant Garamond",
              fontWeight: 700,
              color: "#faf6f0",
              letterSpacing: -2,
              lineHeight: 0.9,
            }}
          >
            Yu–Chieh
          </span>
          <span
            style={{
              fontSize: 64,
              fontFamily: "Cormorant Garamond",
              fontWeight: 700,
              fontStyle: "italic",
              color: "rgba(250,246,240,0.7)",
              letterSpacing: -1,
              lineHeight: 1.1,
              marginTop: 8,
            }}
          >
            Chin.
          </span>
          <span
            style={{
              fontSize: 18,
              color: "rgba(250,246,240,0.6)",
              marginTop: 32,
              lineHeight: 1.6,
              maxWidth: 500,
            }}
          >
            Marketing strategist · Brand storytelling · Consumer insight
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <span style={{ fontSize: 16, color: "rgba(250,246,240,0.4)" }}>
            London, UK
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 14,
              color: "rgba(250,246,240,0.5)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            <span>MSc International Marketing · QMUL</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant Garamond",
          data: cormorantBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Jost",
          data: jostLight,
          style: "normal",
          weight: 300,
        },
      ],
    }
  );
}
