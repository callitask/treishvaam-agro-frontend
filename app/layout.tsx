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
 * - Global injection of JSON-LD Knowledge Graph.
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
 * - EDITED (Current Phase):
 * • Injected centralized `application/ld+json` Knowledge Graph directly into layout `<head>`.
 * • Added `alternateName` strings mapping "Trishvam" and "Treishvaam" to both Amitsagar Kandpal and Treishvaam Agro.
 * • Why: Semantic fusion so user searches for the name alone direct to the founder and companies.
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
import { RfqProvider } from '@/lib/store/rfq-store';
import ThirdPartyScripts from '@/components/ThirdPartyScripts';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], display: 'swap', preload: true, fallback: ['system-ui', 'sans-serif'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://treishvaamagro.com'),
  title: {
    default: 'Treishvaam Agro | Enterprise B2B Fruit & Vegetable Powders — 24 SKUs, FOB India',
    template: '%s | Treishvaam Agro',
  },
  description: 'Enterprise B2B supplier of 24 standardized fruit, vegetable & herbal powders for food, beverage & nutraceutical manufacturing. Bulk 100kg–20MT, COA per batch, HACCP ISO 22000 USDA Organic. Export to 25+ markets. FOB Mundra/NHAVA.',
  keywords: [
    'fruit powder bulk', 'vegetable powder B2B', 'mango powder Alphonso', 'banana powder', 'beetroot powder', 'spinach powder', 'tomato powder', 'moringa leaf powder',
    'herbal extract ashwagandha', 'amla powder', 'turmeric curcumin', 'black pepper powder', 'ginger powder', 'B2B ingredients India', 'bulk ingredients export',
    'Treishvaam Agro', 'Amitsagar Kandpal', 'HACCP certified', 'ISO 22000', 'USDA Organic', 'FSSAI', 'GMP', 'COA', 'HS code'
  ],
  authors: [{ name: 'Amitsagar Kandpal', url: 'https://treishvaamgroup.com' }],
  creator: 'Amitsagar Kandpal',
  publisher: 'Treishvaam Group',
  category: 'B2B Manufacturing',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  icons: {
    icon: [
      { url: '/Treishvaam_Agro_Logo.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/Treishvaam_Agro_Logo.svg', type: 'image/svg+xml' }],
    shortcut: ['/Treishvaam_Agro_Logo.svg'],
  },
  openGraph: {
    title: 'Treishvaam Agro | Enterprise B2B Powders — 24 SKUs',
    description: '24 standardized fruit, veg & herbal powders for enterprise manufacturing. Bulk tiers, COA 12 params, HACCP/ISO/USDA. 25+ export markets.',
    url: '/',
    siteName: 'Treishvaam Agro',
    images: [{ url: 'https://treishvaamagro.com/Treishvaam_Agro_Logo.svg', width: 2048, height: 768, alt: 'Treishvaam Agro — Enterprise B2B Ingredients' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treishvaam Agro | Enterprise B2B Powders',
    description: '24 B2B powders — bulk FOB India, COA per batch, 25+ export markets.',
    images: ['https://treishvaamagro.com/Treishvaam_Agro_Logo.svg'],
    creator: '@treishvaamagro',
  },
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bengaluru',
    'industry': 'B2B Food Ingredients Manufacturing',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Treishvaam Agro",
    "alternateName": ["Treishvam Agro", "Treshvam Agro", "Trishvam Agro", "Treishvaam Agriculture"],
    "url": "https://treishvaamagro.com",
    "logo": "https://treishvaamagro.com/Treishvaam_Agro_Logo.svg",
    "image": "https://treishvaamagro.com/Treishvaam_Agro_Logo.svg",
    "description": "Enterprise B2B supplier of 24 standardized fruit, vegetable and herbal powders for global food, beverage and nutraceutical manufacturing. FOB India, HACCP ISO 22000 USDA Organic.",
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "name": "Amitsagar Kandpal",
      "alternateName": ["Amit Kandpal", "Amit Sagar Kandpal"],
      "jobTitle": "Founder & Chairman",
      "url": "https://treishvaamgroup.com/"
    },
    "parentOrganization": { "@type": "Organization", "name": "Treishvaam Group", "url": "https://treishvaamgroup.com" },
    "address": { "@type": "PostalAddress", "addressLocality": "Bengaluru", "addressRegion": "Karnataka", "addressCountry": "IN" },
    "contactPoint": { "@type": "ContactPoint", "email": "sales@treishvaamagro.com", "telephone": "+91-8178-529-633", "contactType": "sales", "areaServed": ["US","DE","AE","SG","AU","GB","IN"], "availableLanguage": ["en"] },
    "sameAs": ["https://treishvaamgroup.com"],
    "knowsAbout": ["Fruit Powder Manufacturing", "Vegetable Powder", "Herbal Extracts", "Organic Spices", "B2B Bulk Ingredients", "Food Ingredients Export"],
    "hasOfferCatalog": { "@type": "OfferCatalog", "name": "24 B2B Powders Catalog", "itemListElement": [
      { "@type": "Offer", "name": "Fruit Powders — Bulk B2B", "category": "Fruit Powders", "url": "https://treishvaamagro.com/products?category=Fruit%20Powders", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Treishvaam Agro" } },
      { "@type": "Offer", "name": "Vegetable Powders — Bulk B2B", "category": "Vegetable Powders", "url": "https://treishvaamagro.com/products?category=Vegetable%20Powders", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Treishvaam Agro" } },
      { "@type": "Offer", "name": "Herbal Extracts — Bulk B2B", "category": "Herbal Extracts", "url": "https://treishvaamagro.com/products?category=Herbal%20Extracts", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Treishvaam Agro" } },
      { "@type": "Offer", "name": "Organic Spices — Bulk B2B", "category": "Organic Spices", "url": "https://treishvaamagro.com/products?category=Organic%20Spices", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Treishvaam Agro" } }
    ]}
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Treishvaam Agro",
    "url": "https://treishvaamagro.com",
    "potentialAction": { "@type": "SearchAction", "target": "https://treishvaamagro.com/products?q={search_term_string}", "query-input": "required name=search_term_string" }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        <RfqProvider>
          <Navbar />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
          <Toaster richColors position="top-right" />
          <ThirdPartyScripts />
        </RfqProvider>
      </body>
    </html>
  );
}