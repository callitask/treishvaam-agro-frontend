/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Grid display of primary product categories on the homepage.
 *
 * Scope:
 * - 4-column responsive grid (12-column system equivalent).
 * - Component purely presentational.
 *
 * Critical Dependencies:
 * - Frontend: Uses standard Next.js Image component (represented via div for skeleton).
 *
 * Security Constraints:
 * - N/A
 *
 * Non-Negotiables:
 * - Exactly 16px border radius on cards.
 * - Image covers top half, content bottom half.
 * - Synchronous group-hover: shadow increases, card lifts -8px, image scales 1.05.
 *
 * Change Intent:
 * - Structured the exact hover delta specified in the video analysis.
 *
 * Future AI Guidance:
 * - Do not change the easing curve (`ease-out duration-300`). It is tuned for enterprise feel.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Implemented `group relative` pattern for synchronized hover states.
 * • Applied exact padding, 16px border radius, and typography mapping.
 */

import Link from 'next/link';
import React from 'react';

const PRODUCTS = [
  { id: 1, title: 'Fruit Powders', desc: '100% natural spray-dried fruit powders preserving original flavor and nutrients.', link: '/products#fruit' },
  { id: 2, title: 'Vegetable Powders', desc: 'Premium dehydrated vegetable powders for culinary and industrial use.', link: '/products#vegetable' },
  { id: 3, title: 'Leafy Greens', desc: 'Nutrient-dense green powders including spinach, kale, and moringa.', link: '/products#leafy' },
  { id: 4, title: 'Herbal Extracts', desc: 'Standardized botanical extracts for nutraceutical applications.', link: '/products#herbal' },
];

export default function ProductShowcase() {
  return (
    <section className="w-full bg-brand-offWhite py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-semibold text-brand-textDark mb-4">Featured Products</h2>
          <div className="w-16 h-1 bg-brand-gold rounded-full"></div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => (
            <Link href={prod.link} key={prod.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0px_12px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-brand-border">
              
              {/* Image Container with aspect ratio and scale effect */}
              <div className="w-full aspect-[4/3] bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-brand-green/10 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                   <span className="text-brand-green/40 font-medium">Image: {prod.title}</span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-brand-textDark mb-2">{prod.title}</h3>
                <p className="text-brand-textMuted text-sm leading-relaxed mb-6 flex-grow">{prod.desc}</p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-brand-green font-medium text-sm mt-auto group-hover:text-brand-greenHover transition-colors">
                  Learn More 
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}