/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Root layout for the Next.js App Router (Treishvaam Agro).
 * - Serves as the global HTML wrapper and entry point for all stylesheets.
 *
 * Change Intent:
 * - Injected `<Navbar />` and `<Footer />` directly into the body.
 * - This guarantees they appear on every single page and prevents hydration flickering.
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Treishvaam Agro | Enterprise Naturals & Pure Ingredients',
  description: 'Global leaders in sustainably sourced, meticulously processed agricultural powders for the B2B enterprise market.',
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