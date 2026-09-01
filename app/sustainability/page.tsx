import React from 'react';
import { Metadata } from 'next';
import { Sun, Droplets, Users, Leaf, Recycle, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sustainability & ESG | Treishvaam Agro',
  description: 'Zero-waste, solar-powered, closed-loop water system. Direct procurement from 500+ farmers. ESG reporting for enterprise buyers.',
};

export default function SustainabilityPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="border-b border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-10 lg:py-12">
          <div className="max-w-3xl">
            <span className="inline-block border border-brand-line bg-brand-pastelGreen text-brand-dark text-[11px] font-bold tracking-widest uppercase px-3 py-1.5">ESG & Impact — FY24-25 Report Available</span>
            <h1 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.02em] text-brand-dark mt-4 leading-none">Rooted in responsibility.</h1>
            <p className="text-sm text-gray-600 mt-3 leading-5">Zero-waste, low-carbon ingredients for enterprise buyers. Traceable from farm plot to drum.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 xl:px-0 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border">
          <div className="bg-white">
            <div className="aspect-[16/10] overflow-hidden border-b border-brand-border">
              <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop" alt="Solar farm" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <div className="w-9 h-9 border border-[#F3E8B5] bg-brand-pastelGold flex items-center justify-center text-brand-dark">
                <Sun size={16} />
              </div>
              <h3 className="text-[15px] font-bold text-brand-dark mt-3">100% Renewable Energy</h3>
              <p className="text-xs text-gray-600 leading-4 mt-1">Grid-tied 500 kWp solar powers processing. 42% lower Scope 2 vs FY22.</p>
              <div className="mt-3 border border-brand-border px-3 py-2 text-[11px] font-bold tracking-wide text-brand-dark">500 kWp • 720 MWh/yr</div>
            </div>
          </div>
          <div className="bg-white">
            <div className="aspect-[16/10] overflow-hidden border-b border-brand-border">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" alt="Water recycling" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <div className="w-9 h-9 border border-brand-border bg-white flex items-center justify-center text-blue-700">
                <Droplets size={16} />
              </div>
              <h3 className="text-[15px] font-bold text-brand-dark mt-3">Closed-Loop Water</h3>
              <p className="text-xs text-gray-600 leading-4 mt-1">ETP recovers 90% of wash water for agricultural redistribution. ZLD pilot 2025.</p>
              <div className="mt-3 border border-brand-border px-3 py-2 text-[11px] font-bold tracking-wide text-brand-dark">90% recovery • ZLD ready</div>
            </div>
          </div>
          <div className="bg-white">
            <div className="aspect-[16/10] overflow-hidden border-b border-brand-border">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" alt="Farmers" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <div className="w-9 h-9 border border-brand-line bg-brand-pastelGreen flex items-center justify-center text-brand-primary">
                <Users size={16} />
              </div>
              <h3 className="text-[15px] font-bold text-brand-dark mt-3">500+ Direct Farmers</h3>
              <p className="text-xs text-gray-600 leading-4 mt-1">No middlemen. Seeds, agronomy training, assured buyback at 12% premium to mandi.</p>
              <div className="mt-3 border border-brand-line bg-brand-pastelGreen px-3 py-2 text-[11px] font-bold tracking-wide text-brand-dark">500 farmers • 12% premium</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border mt-6">
          <div className="bg-white p-5 flex gap-3">
            <div className="w-9 h-9 border border-brand-line bg-brand-pastelGreen flex items-center justify-center flex-shrink-0 text-brand-primary">
              <Recycle size={16} />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark text-sm">Zero-Waste Peels</h4>
              <p className="text-xs text-gray-600 mt-1 leading-4">Peels composted to organic fertilizer, returned to farms.</p>
            </div>
          </div>
          <div className="bg-white p-5 flex gap-3">
            <div className="w-9 h-9 border border-[#F3E8B5] bg-brand-pastelGold flex items-center justify-center flex-shrink-0 text-[#926E00]">
              <Leaf size={16} />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark text-sm">Regenerative Ag</h4>
              <p className="text-xs text-gray-600 mt-1 leading-4">Cover cropping & reduced tillage on 60% of acreage.</p>
            </div>
          </div>
          <div className="bg-white p-5 flex gap-3">
            <div className="w-9 h-9 border border-brand-border bg-white flex items-center justify-center flex-shrink-0 text-gray-700">
              <BarChart3 size={16} />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark text-sm">ESG Report</h4>
              <p className="text-xs text-gray-600 mt-1 leading-4">
                Download FY24-25 ESG pack for audits. <a href="/contact" className="underline font-semibold text-brand-dark">Request PDF</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
