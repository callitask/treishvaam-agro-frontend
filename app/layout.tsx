/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Root layout for the Next.js App Router (Treishvaam Agro).
 * - Serves as the global HTML wrapper and entry point for all stylesheets.
 *
 * Scope:
 * - Defines the global metadata and canonical `metadataBase`.
 * - Enforces the canonical production domain (treishvaamagro.com).
 *
 * Critical Dependencies:
 * - SEO Worker: Relies on the edge worker to handle dynamic sitemap and robots.txt.
 *
 * Security Constraints:
 * - NO hardcoded backend origins or internal API routes.
 *
 * Non-Negotiables:
 * - `metadataBase` MUST be set to https://treishvaamagro.com to prevent .pages.dev leakage.
 *
 * Change Intent:
 * - Phase 2: Implement enterprise SEO metadata, E-E-A-T signals, and clean legacy URLs.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Added metadataBase for canonical URL enforcement.
 * • Replaced legacy tagro.treishvaamgroup.com URLs with treishvaamagro.com.
 * • Date / Phase: Phase 2 (Frontend Metadata & Schema).
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://treishvaamagro.com'),
  title: {
    default: 'Treishvaam Agro | Enterprise Naturals & Pure Ingredients',
    template: '%s | Treishvaam Agro',
  },
  description: 'Global leaders in sustainably sourced, meticulously processed agricultural powders for the B2B enterprise market. A Treishvaam Group company.',
  keywords: ['agricultural powders', 'organic extracts', 'B2B ingredients', 'Treishvaam Agro', 'natural powders', 'Amitsagar Kandpal'],
  authors: [{ name: 'Amitsagar Kandpal' }],
  creator: 'Amitsagar Kandpal',
  publisher: 'Treishvaam Group',
  openGraph: {
    title: 'Treishvaam Agro | Enterprise Naturals',
    description: 'Pure organic agricultural ingredients for global manufacturing.',
    url: '/',
    siteName: 'Treishvaam Agro',
    images: [
      {
        url: 'https://treishvaamgroup.com/logo512.webp',
        width: 512,
        height: 512,
        alt: 'Treishvaam Agro Logo',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treishvaam Agro | Enterprise Naturals',
    description: 'Global leaders in sustainably sourced agricultural powders.',
    images: ['https://treishvaamgroup.com/logo512.webp'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}