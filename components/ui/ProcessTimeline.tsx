/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Displays the alternating layout steps for the production process.
 *
 * Scope:
 * - Uses a flex-row / flex-row-reverse technique to alternate content.
 *
 * Critical Dependencies:
 * - Frontend: Shared UI component.
 *
 * Security Constraints:
 * - None.
 *
 * Non-Negotiables:
 * - Rhythmical 80px padding top/bottom.
 * - Floating circular numbered markers over image boundaries.
 *
 * Change Intent:
 * - Overwriting previous structure to perfectly match the zigzag video frame. Corrected inner pathing.
 *
 * Future AI Guidance:
 * - Maintain the `even:flex-row-reverse` logical class logic to keep the zig-zag robust.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Implemented alternating layout.
 * • Added floating absolute numbered badges logic (`absolute -top-4 -left-4`).
 * * - EDITED:
 * • Replaced text placeholders ("Image 1") with production-ready `img` tags mapped to high-quality Unsplash URLs.
 * • 2026-04-10
 */

import React from 'react';

const STAGES = [
  { 
    id: 1, 
    title: 'Quality Selection', 
    desc: 'Rigorous sorting of raw materials at the farm level to ensure only the highest grade enters the facility.',
    image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0a3023?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    id: 2, 
    title: 'Washing & Sanitization', 
    desc: 'Multi-stage aqueous ozone washing to remove all impurities and microbial loads naturally.',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: 3, 
    title: 'Peeling & Slicing', 
    desc: 'Precision mechanical processing to prepare the raw material for uniform dehydration.',
    image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: 4, 
    title: 'Tunnel Drying', 
    desc: 'Controlled low-temperature dehydration to preserve volatile oils, color, and complete nutritional profile.',
    image: 'https://images.unsplash.com/photo-1615486171448-4357778b4bdc?q=80&w=1000&auto=format&fit=crop'
  },
];

export default function ProcessTimeline() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold text-brand-textDark mb-4">Farm to Powder Process</h2>
          <p className="text-brand-textMuted max-w-2xl mx-auto">Our 7-stage proprietary processing ensures unmatched purity and retention of active botanical compounds.</p>
        </div>

        {/* Timeline ZigZag */}
        <div className="flex flex-col gap-24 relative">
          
          {STAGES.map((stage, index) => {
            const isEven = index % 2 === 1; // 0-indexed, so 1,3 are even visually
            return (
              <div key={stage.id} className={`flex flex-col md:flex-row items-center gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Wrapper */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative aspect-video bg-gray-100 rounded-2xl shadow-sm border border-brand-border overflow-hidden group">
                    {/* Floating Number Badge */}
                    <div className="absolute -top-5 -left-5 w-12 h-12 bg-brand-gold text-white flex items-center justify-center rounded-full text-xl font-bold shadow-lg z-10">
                      {stage.id}
                    </div>
                    {/* Image */}
                    <img 
                      src={stage.image} 
                      alt={stage.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Wrapper */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-brand-textDark mb-4">{stage.title}</h3>
                  <p className="text-brand-textMuted text-lg leading-relaxed">{stage.desc}</p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}