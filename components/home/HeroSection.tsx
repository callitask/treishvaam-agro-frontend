/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Main Hero Section for the Treishvaam Agro homepage.
 *
 * Scope:
 * - Renders the top-of-the-fold visual impact layer.
 * - Handles the primary user call-to-action logic.
 *
 * Critical Dependencies:
 * - Frontend: Standard Next.js layout structures.
 *
 * Security Constraints:
 * - Purely presentational. Use relative image paths to avoid Next.js domain whitelist configuration issues.
 *
 * Non-Negotiables:
 * - Minimum height MUST be 85vh.
 * - Dark gradient overlay MUST be present to ensure text legibility (linear-gradient).
 * - Content MUST be perfectly centered within the max-w-7xl container.
 *
 * Change Intent:
 * - Restored center-aligned text and centered button configuration while maintaining strict container boundaries.
 *
 * Future AI Guidance:
 * - If image paths change, update the `src` attribute. Keep the generic `object-cover` styling.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Overhauled layout to min-h-[85vh].
 * • Adjusted typography sizing and line-heights to match Figma spec.
 * • Restored centered text alignment (`items-center text-center justify-center`).
 * • 2026-02-25
 */

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image using standard img tag for robust drop-in compatibility without next.config changes */}
      <img 
        src="https://images.unsplash.com/photo-1592982537447-6f2a6a0a3023?q=80&w=2070&auto=format&fit=crop" 
        alt="Lush green organic agriculture fields" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Gradient Overlay for Readability (rgba(0,0,0,0.4) to rgba(0,0,0,0.7)) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 z-10" />

      {/* Content Container - Strictly Aligned Center */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 xl:px-0 flex flex-col items-center text-center justify-center h-full mt-12">
        
        {/* H1 Display Text */}
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-4xl tracking-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
          Pure Ingredients. <br />
          Enterprise Quality.
        </h1>

        {/* Subheadline */}
        <p className="text-gray-200 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
          Sourcing the finest organic fruit, vegetable, and herbal extracts. 
          Standardized for the world&apos;s leading food and beverage manufacturers.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
          <Link 
            href="/contact"
            className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-bold text-base px-8 py-4 rounded-enterprise transition-all duration-150 shadow-resting hover:shadow-lifted text-center"
          >
            Request a Quote
          </Link>
          <Link 
            href="/products"
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold text-base px-8 py-3.5 rounded-enterprise transition-all duration-150 text-center"
          >
            Explore Products
          </Link>
        </div>
        
      </div>
    </section>
  );
}