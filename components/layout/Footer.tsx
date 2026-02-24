/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Global Footer component for Treishvaam Agro.
 *
 * Scope:
 * - Renders the static bottom layer across all pages.
 * - Contains SEO-critical internal linking structures.
 *
 * Critical Dependencies:
 * - Frontend: Standard Next.js Link component.
 *
 * Security Constraints:
 * - Contains only static routing.
 *
 * Non-Negotiables:
 * - Must strictly use the `brand.dark` (#1F4524) background color.
 * - Links highlight on hover must use the `brand.accent` (#E5B824).
 *
 * Change Intent:
 * - Re-styled to match the Naturals & Pure Figma video reference (4-column grid, dark green background).
 *
 * Future AI Guidance:
 * - Append new legal/internal links to the appropriate columns. Maintain the structural 4-column grid.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Applied dark green background and strict 4-column grid scaling.
 * • Refined hover states for better contrast and UX.
 * • 2026-02-24
 */

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8 border-t-[8px] border-brand-primary">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Treishvaam <span className="text-brand-accent">Agro</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Delivering nature’s finest agricultural ingredients globally. 
              We bridge the gap between pure organic farming and enterprise manufacturing.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg text-white mb-2">Company</h4>
            <Link href="/about" className="text-sm text-gray-300 hover:text-brand-accent transition-colors duration-150">About Us</Link>
            <Link href="/infrastructure" className="text-sm text-gray-300 hover:text-brand-accent transition-colors duration-150">Infrastructure</Link>
            <Link href="/quality" className="text-sm text-gray-300 hover:text-brand-accent transition-colors duration-150">Quality Assurance</Link>
            <Link href="/sustainability" className="text-sm text-gray-300 hover:text-brand-accent transition-colors duration-150">Sustainability</Link>
          </div>

          {/* Col 3: Products */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg text-white mb-2">Our Products</h4>
            <Link href="/products?category=fruit" className="text-sm text-gray-300 hover:text-brand-accent transition-colors duration-150">Fruit Powders</Link>
            <Link href="/products?category=vegetable" className="text-sm text-gray-300 hover:text-brand-accent transition-colors duration-150">Vegetable Powders</Link>
            <Link href="/products?category=herbal" className="text-sm text-gray-300 hover:text-brand-accent transition-colors duration-150">Herbal Extracts</Link>
            <Link href="/products?category=spices" className="text-sm text-gray-300 hover:text-brand-accent transition-colors duration-150">Organic Spices</Link>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg text-white mb-2">Contact Us</h4>
            <p className="text-sm text-gray-300">
              <strong className="text-white block mb-1">Headquarters</strong>
              123 Agricultural Park, Block A<br/>
              Bengaluru, Karnataka 560001
            </p>
            <p className="text-sm text-gray-300 mt-2">
              <strong className="text-white">Email:</strong> sales@treishvaamagro.com<br/>
              <strong className="text-white">Phone:</strong> +91 1800-AGRO-123
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Treishvaam Agro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors duration-150">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors duration-150">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}