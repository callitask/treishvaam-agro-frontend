import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability & ESG | Treishvaam Agro',
  description: 'Our commitment to the planet and local farming communities.',
};

export default function SustainabilityPage() {
  return (
    <div className="w-full py-20 px-6 bg-brand-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-brand-green font-semibold uppercase tracking-wider mb-4">ESG Commitment</span>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-textDark mb-6 tracking-tight">Rooted in Responsibility</h1>
          <p className="text-brand-textMuted text-lg max-w-3xl mx-auto">
            We operate on a zero-waste philosophy, ensuring that our growth enriches the ecosystem and empowers the agricultural communities we partner with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-brand-border shadow-sm">
            <div className="w-full h-48 bg-brand-green/10 flex items-center justify-center">
              <span className="text-brand-green/40 font-medium">Image: Solar Farm</span>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-brand-textDark mb-3">100% Renewable Energy</h3>
              <p className="text-brand-textMuted text-sm leading-relaxed">Our processing facilities are entirely powered by grid-tied solar installations, significantly reducing our carbon footprint.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-brand-border shadow-sm">
            <div className="w-full h-48 bg-brand-green/10 flex items-center justify-center">
              <span className="text-brand-green/40 font-medium">Image: Water Recycling</span>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-brand-textDark mb-3">Closed-Loop Water System</h3>
              <p className="text-brand-textMuted text-sm leading-relaxed">Advanced ETP units recover and treat 90% of water used during the washing phase for agricultural redistribution.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-brand-border shadow-sm">
            <div className="w-full h-48 bg-brand-green/10 flex items-center justify-center">
              <span className="text-brand-green/40 font-medium">Image: Farmers</span>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold text-brand-textDark mb-3">Direct Farmer Procurement</h3>
              <p className="text-brand-textMuted text-sm leading-relaxed">We bypass middlemen to guarantee fair wages, providing seeds and agronomy training to over 500 local farmers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}