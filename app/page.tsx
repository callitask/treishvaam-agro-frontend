import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProductShowcase from '@/components/home/ProductShowcase';
import ProcessTimeline from '@/components/ui/ProcessTimeline';
import StatsStrip from '@/components/home/StatsStrip';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ProductShowcase />
      {/* Enterprise B2B — liquid glass surface, now with agri content */}
      <section className="w-full relative overflow-hidden border-y border-brand-border">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop" alt="fields" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/76 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/65 to-[#E8F0E7]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 xl:px-0 py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] tracking-[0.12em] uppercase font-bold border border-white/70 bg-white/75 backdrop-blur px-2.5 py-1 shadow-sm">From Farm to FOB — Built for B2B</span>
              <h3 className="text-[22px] font-bold tracking-[-0.02em] text-brand-dark mt-2">Traceability you can audit, supply you can scale.</h3>
              <p className="text-sm text-gray-600 mt-1 max-w-[64ch]">Direct farm procurement, low-temp processing, and export-ready documentation — surfaced through liquid glass depth for procurement teams.</p>
            </div>
            <span className="text-xs border border-white/70 bg-white/65 backdrop-blur px-3 py-1.5 hidden lg:inline">24 SKUs • 500+ MT • 25+ Markets</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: 'Direct Farm Sourcing', desc: '500+ contract farmers, 12% premium to mandi, QR per drum, retain 24 mo. No middlemen — seed to drum tracked.', tag: '500+ Farmers • QR Traceable' },
              { title: 'Precision Processing', desc: 'Tunnel drying <45°C, 80–120 mesh, spray-dried <45C. 275+ pesticide residues (EU MRL) + heavy metals screened per batch.', tag: 'HACCP • ISO 22000 • USDA' },
              { title: 'Export Ready', desc: 'FOB Mundra/NHAVA, CIF available. Phytosanitary, fumigation, Halal/Kosher, MSDS/COA per lot. 10–21d lead, 24h SLA.', tag: 'FOB • 500+ MT • 25 Markets' },
            ].map((c) => (
              <div key={c.title} className="relative bg-white/70 backdrop-blur-[14px] backdrop-saturate-[160%] border border-white/65 p-5 shadow-[0_8px_32px_rgba(31,69,36,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:bg-white/78 hover:shadow-[0_12px_40px_rgba(31,69,36,0.10)] hover:-translate-y-0.5 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-[#E8F0E7]/25 pointer-events-none" />
                <div className="relative">
                  <div className="text-[11px] tracking-widest uppercase font-bold border border-white/60 bg-white/75 inline-block px-2 py-1">{c.tag}</div>
                  <div className="text-[15px] font-bold text-brand-dark mt-3">{c.title}</div>
                  <div className="text-xs text-gray-600 mt-1 leading-4">{c.desc}</div>
                  <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5B824]/35 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Trust - sharp, white, pastel - no dark */}
      <section className="w-full bg-white border-y border-brand-border py-4">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 flex flex-wrap gap-2 items-center justify-center text-[11px]">
          <span className="font-bold tracking-widest uppercase text-brand-dark">Trusted by enterprise buyers in</span>
          <span className="border border-brand-border bg-white px-2.5 py-1 font-semibold text-brand-dark">USA</span>
          <span className="border border-brand-border bg-white px-2.5 py-1 font-semibold text-brand-dark">Germany</span>
          <span className="border border-brand-border bg-white px-2.5 py-1 font-semibold text-brand-dark">UAE</span>
          <span className="border border-brand-border bg-white px-2.5 py-1 font-semibold text-brand-dark">Singapore</span>
          <span className="border border-brand-border bg-white px-2.5 py-1 font-semibold text-brand-dark">Australia</span>
          <span className="hidden lg:inline w-px h-4 bg-brand-border mx-1" />
          <span className="border border-brand-line bg-brand-pastelGreen px-2.5 py-1 font-bold text-brand-dark">HACCP • ISO 22000</span>
          <span className="border border-[#F3E8B5] bg-brand-pastelGold px-2.5 py-1 font-bold text-brand-dark">USDA Organic</span>
          <span className="text-gray-500 hidden lg:inline">• 24h Quote SLA • COA with every batch</span>
        </div>
      </section>
      <ProcessTimeline />

      <section className="w-full bg-white py-12 lg:py-14 px-6 border-t border-brand-border">
        <div className="max-w-3xl mx-auto text-center border border-brand-border px-6 lg:px-10 py-8">
          <div className="text-[11px] tracking-[0.12em] uppercase font-bold text-brand-primary border border-brand-line bg-brand-pastelGreen inline-block px-3 py-1">B2B Bulk • COA • Spec Sheets • MSDS</div>
          <h2 className="text-[28px] lg:text-[32px] font-bold tracking-[-0.02em] text-brand-dark mt-4 leading-none">Ready to secure your supply chain?</h2>
          <p className="text-sm text-gray-600 mt-3 leading-5">MOQ from 100 kg to 50+ MT annual contracts. Export documentation, retain samples and batch traceability included.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <Link href="/contact" className="bg-brand-dark text-white font-bold px-8 py-3 border border-brand-dark hover:bg-white hover:text-brand-dark transition-colors text-sm">
              Request Bulk Quote
            </Link>
            <Link href="/products" className="bg-white text-brand-dark font-bold px-8 py-3 border border-brand-border hover:border-brand-dark transition-colors text-sm">
              Explore 24 Products
            </Link>
          </div>
          <div className="mt-4 text-xs text-gray-500">Avg response &lt; 24h • Dedicated enterprise manager • NDA available</div>
        </div>
      </section>
    </>
  );
}
