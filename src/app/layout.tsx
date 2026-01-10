import type { Metadata } from "next";
import "./globals.css";

// Brand usage:
// "Classic OS" = formal / metadata
// "ClassicOS" = product / UI mark

export const metadata: Metadata = {
  title: "Classic OS — The Operating System for Ethereum Classic",
  description:
    "Classic OS is the operating surface for Ethereum Classic: a workspace model that standardizes network selection, execution context, and core system modules.",

  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://classicos.org"),

  icons: {
    icon: "/icon.svg",
  },

  openGraph: {
    title: "Classic OS",
    description:
      "The operating surface for Ethereum Classic. Select a network, establish execution context, and operate through Produce, Deploy, Markets, and Portfolio.",
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
      "The operating surface for Ethereum Classic. Workspace selection, execution context, and system modules for economic activity.",
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
