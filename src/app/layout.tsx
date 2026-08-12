import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteConfig } from "@/constants/site";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap",
});

/** UI/UX Pro Max: Classic Elegant body (Inter) with Cormorant display */
const body = Inter({
  variable: "--font-body", subsets: ["latin"], display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`, template: `%s | ${siteConfig.name}`, }, description: siteConfig.description, metadataBase: new URL(siteConfig.url), icons: {
    icon: [{ url: "/icon.png", type: "image/png" }], apple: [{ url: "/apple-icon.png", sizes: "180x180" }], }, openGraph: {
    title: siteConfig.name, description: siteConfig.description, siteName: siteConfig.name, type: "website", },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full bg-paper font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-pill)] focus:bg-gold focus:px-4 focus:py-2 focus:text-void focus:shadow-[var(--shadow-lift)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
