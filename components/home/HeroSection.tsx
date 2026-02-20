/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Landing Hero Section for the Home Page.
 *
 * Scope:
 * - Visual entry point. Displays H1, Subtitle, and CTAs over a darkened background image.
 *
 * Critical Dependencies:
 * - Frontend: Renders immediately on page load. High impact on LCP (Largest Contentful Paint).
 *
 * Security Constraints:
 * - None.
 *
 * Non-Negotiables:
 * - Minimum height 600px / 80vh.
 * - Gap 16px between buttons. Primary is Gold Pill, Secondary is Transparent White Border Pill.
 *
 * Change Intent:
 * - Rebuilt to align with Figma video frame: Centered alignment, dark gradient overlay.
 *
 * Future AI Guidance:
 * - Maintain the overlay opacity (bg-black/50) to ensure text contrast passes accessibility checks.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Implemented centered flex layout with 80vh minimum height.
 * • Added strict typographic scaling (H1 at ~64px equivalent `text-5xl md:text-6xl`).
 * • Created exact dual pill button layout.
 */

import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px] h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image Placeholder & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-agro-placeholder.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
          Premium Naturals & Pure Ingredients
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-medium">
          Global leaders in sustainably sourced, meticulously processed agricultural powders for the B2B enterprise market.
        </p>
        
        {/* Button Row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <Link 
            href="/contact" 
            className="bg-brand-gold hover:bg-brand-goldHover text-white font-medium px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto text-lg"
          >
            Request a Quote
          </Link>
          <Link 
            href="/products" 
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto text-lg"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}