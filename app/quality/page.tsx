import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality Assurance | Treishvaam Agro',
  description: 'Uncompromising quality control and global certifications.',
};

const CERTS = ['ISO 9001:2015', 'HACCP', 'GMP Certified', 'FSSAI', 'USDA Organic', 'Halal', 'Kosher'];

export default function QualityPage() {
  return (
    <div className="w-full py-20 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-textDark mb-6 tracking-tight">Uncompromising Quality</h1>
          <p className="text-brand-textMuted text-lg max-w-2xl mx-auto">
            Our in-house analytical laboratories ensure every batch meets stringent international standards for microbiology, heavy metals, and active compounds.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-2xl font-semibold text-center text-brand-textDark mb-10">Global Certifications</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {CERTS.map(cert => (
              <div key={cert} className="px-8 py-4 bg-brand-offWhite border border-brand-border rounded-xl font-medium text-brand-textDark flex items-center justify-center shadow-sm">
                {cert}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green font-bold text-xl">1</div>
            <h3 className="text-xl font-semibold text-brand-textDark mb-3">Raw Material Testing</h3>
            <p className="text-brand-textMuted text-sm leading-relaxed">Incoming batches are quarantined and screened for pesticide residue, moisture levels, and visual anomalies.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green font-bold text-xl">2</div>
            <h3 className="text-xl font-semibold text-brand-textDark mb-3">In-Process Monitoring</h3>
            <p className="text-brand-textMuted text-sm leading-relaxed">Continuous sampling during dehydration and milling to ensure particle size uniformity and temperature stability.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-brand-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green font-bold text-xl">3</div>
            <h3 className="text-xl font-semibold text-brand-textDark mb-3">Final COA Issuance</h3>
            <p className="text-brand-textMuted text-sm leading-relaxed">Comprehensive microbiological profiling (TPC, Yeast, Mold, E.Coli) before final packaging and release.</p>
          </div>
        </div>
      </div>
    </div>
  );
}