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
 */

import React from 'react';

const STAGES = [
  { id: 1, title: 'Quality Selection', desc: 'Rigorous sorting of raw materials at the farm level to ensure only the highest grade enters the facility.' },
  { id: 2, title: 'Washing & Sanitization', desc: 'Multi-stage aqueous ozone washing to remove all impurities and microbial loads naturally.' },
  { id: 3, title: 'Peeling & Slicing', desc: 'Precision mechanical processing to prepare the raw material for uniform dehydration.' },
  { id: 4, title: 'Tunnel Drying', desc: 'Controlled low-temperature dehydration to preserve volatile oils, color, and complete nutritional profile.' },
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
          {/* Optional: Central connecting line for desktop could go here, omitting for exact visual match of blocks */}
          
          {STAGES.map((stage, index) => {
            const isEven = index % 2 === 1; // 0-indexed, so 1,3 are even visually
            return (
              <div key={stage.id} className={`flex flex-col md:flex-row items-center gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Image Wrapper */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative aspect-video bg-gray-100 rounded-2xl shadow-sm border border-brand-border">
                    {/* Floating Number Badge */}
                    <div className="absolute -top-5 -left-5 w-12 h-12 bg-brand-gold text-white flex items-center justify-center rounded-full text-xl font-bold shadow-lg z-10">
                      {stage.id}
                    </div>
                    {/* Image placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Image {stage.id}
                    </div>
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