import type { Metadata } from "next";
import { Cormorant_Garamond, Sacramento, Lora, Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yu-chieh-chin.vercel.app"),
  title: "Yu–Chieh Chin",
  description:
    "Marketing strategist with a passion for brand storytelling, consumer insight, and fashion-forward communication.",
  openGraph: {
    title: "Yu–Chieh Chin",
    description:
      "Marketing strategist with a passion for brand storytelling, consumer insight, and fashion-forward communication.",
    siteName: "Yu–Chieh Chin",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${sacramento.variable} ${lora.variable} ${jost.variable}`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
