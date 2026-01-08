import type { Metadata } from "next";
import "./globals.css";

// Brand usage:
// "Classic OS" = formal / metadata
// "ClassicOS" = product / UI mark

export const metadata: Metadata = {
  title: "Classic OS — The Operating System for Ethereum Classic",
  description:
    "Classic OS is the operating system for Ethereum Classic, coordinating mining, capital deployment, market formation, settlement, and observability.",

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://classicos.org"),

  icons: {
    icon: "/icon.svg",
  },

  openGraph: {
    title: "Classic OS",
    description:
      "The operating system for Ethereum Classic. Mine ETC, deploy capital, form markets, and settle economic activity on one canonical operating system.",
    url: "https://classicos.org",
    siteName: "Classic OS",
    type: "website",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Classic OS — The operating system for Ethereum Classic",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Classic OS",
    description:
      "The operating system for Ethereum Classic. A unified system for mining, capital deployment, market formation, and settlement.",
    images: ["/opengraph-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
