import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, FlaskConical, FileText, Award, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quality Assurance & Certifications | Treishvaam Agro',
  description: 'ISO 22000, HACCP, GMP, FSSAI, USDA Organic certified. In-house labs, COA per batch, heavy metal & pesticide screening for B2B bulk ingredients.',
};

const CERTS = [
  { name: 'ISO 9001:2015', body: 'QMS', valid: '2026' },
  { name: 'ISO 22000', body: 'Food Safety', valid: '2026' },
  { name: 'HACCP', body: 'Codex', valid: '2026' },
  { name: 'GMP Certified', body: 'WHO-GMP', valid: '2026' },
  { name: 'FSSAI', body: 'India', valid: 'License' },
  { name: 'USDA Organic', body: 'NOP', valid: '2026' },
  { name: 'Halal', body: 'JAKIM', valid: '2026' },
  { name: 'Kosher', body: 'OU', valid: '2026' },
];

export default function QualityPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero - white, sharp */}
      <div className="border-b border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-10 lg:py-12">
          <div className="max-w-3xl">
            <span className="inline-block border border-brand-line bg-brand-pastelGreen text-brand-dark text-[11px] font-bold tracking-widest uppercase px-3 py-1.5">Lab Tested • Batch Traceable • Export Ready</span>
            <h1 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.02em] text-brand-dark mt-4 leading-none">Uncompromising quality, documented.</h1>
            <p className="text-sm text-gray-600 mt-3 leading-5 max-w-2xl">Every batch ships with a 12-parameter COA. In-house labs screen microbiology, heavy metals, pesticide residues (275+ analytes, GC-MS/MS) and active compound standardization.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 xl:px-0 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-brand-border pb-4">
          <h2 className="text-[18px] font-bold tracking-[-0.01em] text-brand-dark">Global Certification Vault</h2>
          <Link href="/contact" className="text-sm font-bold text-brand-dark border border-brand-border px-4 py-2 hover:border-brand-dark">
            Request All Certificates (PDF) →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-border border border-brand-border">
          {CERTS.map((c) => (
            <div key={c.name} className="bg-white p-5 flex flex-col items-center text-center">
              <div className="w-9 h-9 bg-white border border-brand-border flex items-center justify-center text-brand-primary">
                <Award size={16} />
              </div>
              <div className="font-bold text-brand-dark text-sm mt-3">{c.name}</div>
              <div className="text-[11px] text-gray-500">
                {c.body} • {c.valid}
              </div>
              <button className="mt-3 text-[11px] font-bold tracking-widest uppercase border border-brand-border px-3 py-1 hover:border-brand-dark">
                PDF
              </button>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-gray-500 mt-2">Validity verified annually by third-party auditors. PDFs supplied under NDA on request.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border mt-10">
          <div className="bg-white p-6">
            <div className="w-9 h-9 border border-brand-line bg-brand-pastelGreen flex items-center justify-center text-brand-primary">
              <FlaskConical size={16} />
            </div>
            <h3 className="text-[15px] font-bold text-brand-dark mt-4">1. Raw Material Quarantine</h3>
            <p className="text-xs text-gray-600 leading-4 mt-2">Incoming lots quarantined, moisture (≤8%) and pesticide (275+ residues) screening before acceptance.</p>
          </div>
          <div className="bg-white p-6">
            <div className="w-9 h-9 border border-brand-line bg-brand-pastelGreen flex items-center justify-center text-brand-primary">
              <ShieldCheck size={16} />
            </div>
            <h3 className="text-[15px] font-bold text-brand-dark mt-4">2. In-Process Controls</h3>
            <p className="text-xs text-gray-600 leading-4 mt-2">Continuous sampling during dehydration (&lt;45°C) and milling — particle uniformity 80–120 mesh.</p>
          </div>
          <div className="bg-white p-6">
            <div className="w-9 h-9 border border-brand-border bg-white flex items-center justify-center text-brand-dark">
              <FileText size={16} />
            </div>
            <h3 className="text-[15px] font-bold text-brand-dark mt-4">3. Final COA & Release</h3>
            <p className="text-xs text-gray-600 leading-4 mt-2">Micro (TPC, Yeast/Mold, Salmonella), heavy metals (Pb, As, Cd, Hg) and assay before sealed packing.</p>
          </div>
        </div>

        <div className="mt-6 border border-brand-border p-6 bg-white">
          <h3 className="text-sm font-bold text-brand-dark">What every enterprise shipment includes</h3>
          <div className="grid md:grid-cols-2 gap-4 text-xs leading-4 text-gray-700 mt-3">
            <ul className="space-y-1.5">
              <li>— Certificate of Analysis (COA) per batch & lot</li>
              <li>— Allergen & Non-GMO statement</li>
              <li>— Pesticide residue declaration (EU MRL)</li>
              <li>— MSDS & technical data sheet</li>
            </ul>
            <ul className="space-y-1.5">
              <li>— Halal/Kosher cert where applicable</li>
              <li>— Phytosanitary & fumigation cert for exports</li>
              <li>— Retain samples & traceability QR per drum</li>
              <li>— 24-month shelf-life with storage guidance</li>
            </ul>
          </div>
          <Link href="/contact" className="inline-block mt-5 bg-brand-dark text-white font-bold px-5 py-2.5 border border-brand-dark hover:bg-white hover:text-brand-dark text-xs tracking-wide">
            Request Sample COA
          </Link>
        </div>
      </div>
    </div>
  );
}
