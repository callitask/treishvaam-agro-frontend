import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Infrastructure | Treishvaam Agro',
  description: 'State-of-the-art processing facilities engineered for purity and scale.',
};

const FACILITIES = [
  { id: 1, title: 'Pre-Processing Hub', desc: 'Our hygienic intake zone handles sorting, grading, and multi-stage aqueous ozone washing to eliminate surface contaminants naturally without harsh chemicals.' },
  { id: 2, title: 'Dehydration Chambers', desc: 'Equipped with low-temperature tunnel dryers and freeze-drying units to remove moisture while preserving volatile essential oils and phytonutrients.' },
  { id: 3, title: 'Milling & Pulverization', desc: 'Cryogenic and hammer milling systems ensure exact mesh sizing and uniformity, preventing heat degradation during the powdering phase.' },
];

export default function InfrastructurePage() {
  return (
    <>
      <section className="bg-brand-green text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">World-Class Infrastructure</h1>
          <p className="text-lg md:text-xl text-gray-200 font-medium">
            Over 50,000 sq.ft of GMP-certified manufacturing space designed for absolute zero cross-contamination and maximum operational efficiency.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-offWhite">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {FACILITIES.map((fac, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div key={fac.id} className={`flex flex-col md:flex-row items-center gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] bg-brand-green/10 rounded-2xl border border-brand-border flex items-center justify-center shadow-sm">
                     <span className="text-brand-green/40 font-medium text-lg">Facility Image: {fac.title}</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="w-12 h-1 bg-brand-gold rounded-full mb-6"></div>
                  <h2 className="text-3xl font-semibold text-brand-textDark mb-4">{fac.title}</h2>
                  <p className="text-brand-textMuted text-lg leading-relaxed">{fac.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}