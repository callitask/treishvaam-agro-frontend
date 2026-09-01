import React from 'react';

const STAGES = [
  {
    id: 1,
    title: 'Quality Selection',
    desc: 'Rigorous sorting at farm level. Moisture, organoleptic and rapid aflatoxin screening before acceptance.',
    image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0a3023?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Washing & Sanitization',
    desc: 'Multi-stage aqueous ozone wash to remove microbial load, soil and residues — no chlorine.',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Peeling & Slicing',
    desc: 'Precision mechanical prep for uniform dehydration and consistent 80–120 mesh milling.',
    image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Tunnel Drying',
    desc: 'Controlled low-temp (<45°C) dehydration preserves volatiles, color and active compounds.',
    image: 'https://images.unsplash.com/photo-1615486171448-4357778b4bdc?q=80&w=900&auto=format&fit=crop',
  },
];

export default function ProcessTimeline() {
  return (
    <section className="w-full bg-white py-12 lg:py-14 px-6 border-t border-brand-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto border border-brand-border bg-white px-6 py-6">
          <div className="text-[11px] tracking-[0.12em] uppercase font-bold text-brand-primary border border-brand-line bg-brand-pastelGreen inline-block px-2.5 py-1">How we make it • 7-stage proprietary</div>
          <h2 className="text-[26px] font-bold tracking-[-0.02em] text-brand-dark mt-3">Farm to powder — precise, traceable.</h2>
          <p className="text-sm text-gray-600 mt-2 leading-5">Quarantine → IPC → COA release. Every drum carries a QR-linked retain sample for 24 months.</p>
        </div>

        <div className="flex flex-col gap-8 mt-8">
          {STAGES.map((stage, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={stage.id} className={`flex flex-col md:flex-row items-stretch gap-0 border border-brand-border bg-white ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 relative bg-gray-50 border-b md:border-b-0 md:border-r border-brand-border last:border-0">
                  <div className="absolute top-0 left-0 bg-brand-dark text-white text-xs font-bold px-3 py-1.5 tracking-widest">STEP {stage.id}</div>
                  <img src={stage.image} alt={stage.title} className="w-full h-[260px] object-cover" />
                </div>
                <div className="w-full md:w-1/2 p-6 lg:p-8 flex flex-col justify-center bg-white">
                  <h3 className="text-[16px] font-bold text-brand-dark">{stage.title}</h3>
                  <p className="text-sm text-gray-600 leading-5 mt-2">{stage.desc}</p>
                  <div className="mt-4 border border-brand-line bg-brand-pastelGreen px-3 py-2 text-xs font-semibold text-brand-dark inline-block w-fit">
                    DOC: SOP-{String(stage.id).padStart(2, '0')} • IPC logged every 15 min
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
