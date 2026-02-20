/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Main navigation header for the Agro website.
 *
 * Scope:
 * - Desktop and mobile routing, logo display, main CTAs.
 * - Non-sticky standard block behavior per Figma specs.
 *
 * Critical Dependencies:
 * - Frontend: Relies on Next.js Link for optimized client-side routing.
 *
 * Security Constraints:
 * - No hardcoded API routing here.
 *
 * Non-Negotiables:
 * - Must be visually exact: White background, 1280px container, pill buttons.
 *
 * Change Intent:
 * - Refactored to remove sticky behavior and align strictly with Figma spacing and color tokens. Corrected path placement.
 *
 * Future AI Guidance:
 * - Dropdown for "Products" is structured as a group-hover. Maintain CSS-only hover states for optimal TTI.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Refactored structure to match Figma layout (Left logo, Center links, Right CTA).
 * • Applied group-hover logic for the Products dropdown.
 * • Ensured background remains pure white and completely scrolls out of view.
 */

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="w-full bg-white border-b border-brand-border">
      {/* Top Bar - Dark Green */}
      <div className="w-full bg-brand-green text-white text-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <span>info@treishvaamagro.com</span>
            <span>+91 800 123 4567</span>
          </div>
          <div className="flex gap-4">
            <Link href="/b2b-portal" className="hover:text-brand-gold transition-colors">Client Login</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded-md flex items-center justify-center text-white font-bold">TA</div>
            <span className="text-xl font-bold text-brand-textDark tracking-tight">Treishvaam Agro</span>
          </Link>

          {/* Center Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-brand-textMuted hover:text-brand-green font-medium transition-colors">Home</Link>
            
            {/* Dropdown Container */}
            <div className="group relative">
              <Link href="/products" className="text-brand-textMuted hover:text-brand-green font-medium transition-colors py-2">
                Products
              </Link>
              {/* Simple CSS-based Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-brand-border shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-4 flex flex-col gap-2">
                <Link href="/products#fruit" className="text-sm text-brand-textMuted hover:text-brand-green">Fruit Powders</Link>
                <Link href="/products#vegetable" className="text-sm text-brand-textMuted hover:text-brand-green">Vegetable Powders</Link>
                <Link href="/products#leafy" className="text-sm text-brand-textMuted hover:text-brand-green">Leafy Greens</Link>
              </div>
            </div>

            <Link href="/infrastructure" className="text-brand-textMuted hover:text-brand-green font-medium transition-colors">Infrastructure</Link>
            <Link href="/quality" className="text-brand-textMuted hover:text-brand-green font-medium transition-colors">Quality Assurance</Link>
            <Link href="/sustainability" className="text-brand-textMuted hover:text-brand-green font-medium transition-colors">Sustainability</Link>
          </div>

          {/* Right CTA */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="bg-brand-gold hover:bg-brand-goldHover text-white font-medium px-6 py-2.5 rounded-full transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}