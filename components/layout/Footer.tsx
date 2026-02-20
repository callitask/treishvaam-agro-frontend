/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Global footer component.
 *
 * Scope:
 * - Provides navigation, contact details, and compliance links.
 *
 * Critical Dependencies:
 * - Frontend: Next.js links.
 *
 * Security Constraints:
 * - Hardcoded external links must use target="_blank" and rel="noopener noreferrer".
 *
 * Non-Negotiables:
 * - Dark green background #284E1A. Text is white and muted gray (#9CA3AF / tailwind gray-400).
 *
 * Change Intent:
 * - Matched the grid structure seen in the visual system mapping. Set within the correct inner compilation directory.
 *
 * Future AI Guidance:
 * - Maintain the 4-column layout on `lg` screens, dropping to 2 on `sm`, and 1 on mobile.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Forced `bg-brand-green` and `text-white`.
 * • Implemented 4 column CSS grid.
 * • Added bottom divider with copyright and standard legal links.
 */

import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-green text-white pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-brand-green font-bold">TA</div>
              <span className="text-xl font-bold tracking-tight">Treishvaam Agro</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Delivering the world's finest, pure, and sustainably sourced natural ingredients to enterprise clients globally.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link href="/infrastructure" className="hover:text-brand-gold transition-colors">Infrastructure</Link></li>
              <li><Link href="/quality" className="hover:text-brand-gold transition-colors">Quality Assurance</Link></li>
              <li><Link href="/sustainability" className="hover:text-brand-gold transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link href="/products#fruit" className="hover:text-brand-gold transition-colors">Fruit Powders</Link></li>
              <li><Link href="/products#vegetable" className="hover:text-brand-gold transition-colors">Vegetable Powders</Link></li>
              <li><Link href="/products#leafy" className="hover:text-brand-gold transition-colors">Leafy Greens</Link></li>
              <li><Link href="/products#herbal" className="hover:text-brand-gold transition-colors">Herbal Extracts</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li>Bengaluru, Karnataka, India</li>
              <li>info@treishvaamagro.com</li>
              <li>+91 800 123 4567</li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider & Legal */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Treishvaam Agro. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}