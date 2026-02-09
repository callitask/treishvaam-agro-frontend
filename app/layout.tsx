/**
 * AI-CONTEXT:
 * Purpose: Root Layout for Treishvaam Agro.
 * Scope: Wraps all pages with Inter font, Header, Footer, and SEO metadata.
 * Critical Dependencies:
 * - components/layout/Header
 * - components/layout/Footer
 * - app/globals.css
 * Security Constraints:
 * - CSP headers managed via next.config.mjs / _headers
 */

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Treishvaam Agro | Sustainable Agricultural Solutions",
    template: "%s | Treishvaam Agro",
  },
  description:
    "Leading manufacturer and exporter of premium agricultural products. Committed to sustainability, quality, and global food security.",
  keywords: ["Agriculture", "Exports", "Sustainability", "Farming", "Treishvaam"],
  authors: [{ name: "Treishvaam Group" }],
  creator: "Treishvaam Group",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#166534", // Green-700
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} min-h-screen flex flex-col font-sans antialiased`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}