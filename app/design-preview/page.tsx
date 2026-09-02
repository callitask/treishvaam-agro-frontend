'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck, Award, Truck, Clock } from 'lucide-react';

const products = [
  { name: 'Organic Banana Powder', cat: 'Fruit Powders', moq: '500 kg', lead: '14–21 days', img: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=600&auto=format&fit=crop', specs: 'Moisture ≤5% • 80 mesh • FSSAI • USDA' },
  { name: 'Ashwagandha Extract 5%', cat: 'Herbal Extracts', moq: '100 kg', lead: '21 days', img: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=600&auto=format&fit=crop', specs: 'Withanolides ≥5% • HPLC • GMP' },
  { name: 'Premium Spinach Powder', cat: 'Vegetable Powders', moq: '500 kg', lead: '14–21 days', img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=600&auto=format&fit=crop', specs: 'Chlorophyll ≥4% • 100 mesh • ISO 9001' },
  { name: 'Turmeric Curcumin ≥5%', cat: 'Organic Spices', moq: '500 kg', lead: '10–14 days', img: 'https://images.unsplash.com/photo-1615486171448-4357778b4bdc?q=80&w=600&auto=format&fit=crop', specs: 'Curcumin ≥5% • ETO-Free • Halal' },
];

function SharpMock(){
  return (
    <div className="bg-white border border-brand-border">
      {/* Mock Nav - sharp white */}
      <div className="hidden md:flex h-[32px] items-center justify-between px-4 border-b border-brand-border text-[11px]">
        <span className="text-gray-600">sales@treishvaamagro.com • +91 8178 529 633 • Exports: <span className="font-bold text-brand-dark">USA • EU • GCC • ASEAN</span></span>
        <span className="flex gap-2"><span className="border border-brand-line bg-brand-pastelGreen px-2 py-0.5 text-[10px] font-bold">HACCP • ISO 22000</span><span className="border border-[#F3E8B5] bg-brand-pastelGold px-2 py-0.5 text-[10px] font-bold">USDA Organic</span></span>
      </div>
      <div className="h-[56px] flex items-center justify-between px-4 border-b border-brand-border">
        <div className="flex items-center gap-3"><div className="w-8 h-8 border border-brand-dark flex items-center justify-center font-bold text-xs">T</div><span className="font-bold text-brand-dark text-sm">Treishvaam <span className="font-normal text-brand-primary">Agro</span></span><span className="hidden lg:inline text-[10px] tracking-widest uppercase text-gray-400 border-l border-brand-border pl-3">Treishvaam Group • Since 2015</span></div>
        <div className="hidden lg:flex items-center gap-5 text-xs font-semibold text-gray-600"><span className="text-brand-dark border-b-2 border-brand-dark pb-5 -mb-5">Products</span><span>Infrastructure</span><span>Quality & Certs</span><span>Sustainability</span></div>
        <span className="hidden lg:inline bg-brand-dark text-white text-xs font-bold px-4 py-2 border border-brand-dark">Request Quote</span>
      </div>
      {/* Hero - white sharp 2-col */}
      <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-4 p-4">
        <div className="py-2">
          <div className="inline-block border border-brand-line bg-brand-pastelGreen px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-dark">B2B Bulk • Export to 25+ Countries • Since 2015</div>
          <h2 className="text-[28px] font-bold leading-[0.95] tracking-[-0.02em] text-brand-dark mt-3">Fruit & vegetable<br/>powders for<br/><span className="text-brand-primary">global manufacturing.</span></h2>
          <p className="text-xs leading-4 text-gray-600 mt-3 max-w-[42ch]">Standardized, low-temp dried powders and herbal extracts for food, beverage and nutraceutical enterprises. COA per batch, pesticide & heavy-metal screened, export docs included.</p>
          <div className="flex gap-2 mt-4"><span className="bg-brand-dark text-white text-xs font-bold px-5 py-2.5 border border-brand-dark">Request Bulk Quote</span><span className="bg-white text-brand-dark text-xs font-bold px-5 py-2.5 border border-brand-border">View Spec Library</span></div>
          <div className="mt-4 grid grid-cols-3 divide-x divide-brand-border border border-brand-border max-w-[420px]">
            <div className="px-3 py-2 text-center"><div className="text-xs font-bold text-brand-dark">500 kg</div><div className="text-[10px] tracking-widest uppercase font-bold text-gray-500">Min MOQ</div></div>
            <div className="px-3 py-2 text-center"><div className="text-xs font-bold text-brand-dark">14–21 d</div><div className="text-[10px] tracking-widest uppercase font-bold text-gray-500">Avg Lead</div></div>
            <div className="px-3 py-2 text-center"><div className="text-xs font-bold text-brand-dark">12 SKUs</div><div className="text-[10px] tracking-widest uppercase font-bold text-gray-500">Portfolio</div></div>
          </div>
        </div>
        <div className="border border-brand-border p-2">
          <div className="relative aspect-[4/3] bg-gray-50 border border-brand-border overflow-hidden">
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=700&auto=format&fit=crop" alt="fields" className="w-full h-full object-cover" />
            <div className="absolute left-2 bottom-2 right-2 bg-white border border-brand-border px-3 py-2 flex justify-between text-xs">
              <span className="font-bold text-brand-dark">USA • EU • GCC • ASEAN • ANZ</span><span className="text-gray-500 hidden sm:inline">COA • Phytosanitary • MSDS</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="border border-brand-line bg-brand-pastelGreen p-2 text-[11px] leading-3"><span className="font-bold tracking-widest uppercase text-brand-primary text-[10px]">Compliance</span><div className="font-semibold text-brand-dark mt-1">275+ residues • Heavy metals &lt; EU</div></div>
            <div className="border border-[#F3E8B5] bg-brand-pastelGold p-2 text-[11px] leading-3"><span className="font-bold tracking-widest uppercase text-[#926E00] text-[10px]">Service</span><div className="font-semibold text-brand-dark mt-1">24h SLA • Retain 24 mo • QR</div></div>
          </div>
        </div>
      </div>
      {/* Stats - sharp */}
      <div className="grid grid-cols-4 divide-x divide-brand-border border-y border-brand-border">
        {[{k:'12',l:'SKUs'},{k:'25+',l:'Markets'},{k:'500 MT',l:'Capacity'},{k:'98.2%',l:'On-Time'}].map(s=><div key={s.k} className="p-3 text-center"><div className="text-sm font-bold text-brand-dark">{s.k}</div><div className="text-[10px] tracking-widest uppercase font-bold text-gray-500">{s.l}</div></div>)}
      </div>
      {/* Products - sharp */}
      <div className="p-4">
        <div className="flex justify-between items-end border-b border-brand-border pb-3 mb-3">
          <div><div className="text-[10px] tracking-widest uppercase font-bold border border-brand-line bg-brand-pastelGreen px-2 py-1 inline-block">Portfolio • 12 SKUs</div><div className="text-sm font-bold text-brand-dark mt-2">Standardized powders for enterprise formulations</div></div>
          <span className="hidden sm:flex text-xs font-bold border border-brand-border px-3 py-1.5">View Catalog <ArrowRight size={12} className="inline ml-1"/></span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border border border-brand-border">
          {products.map(p=>(
            <div key={p.name} className="bg-white">
              <div className="aspect-[4/3] border-b border-brand-border bg-gray-50 overflow-hidden"><img src={p.img} alt={p.name} className="w-full h-full object-cover" /></div>
              <div className="p-3"><div className="text-[10px] tracking-widest uppercase font-bold text-brand-primary">{p.cat}</div><div className="text-xs font-bold text-brand-dark leading-tight mt-1">{p.name}</div><div className="text-[11px] text-gray-500 mt-1">{p.specs}</div><div className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mt-2 border-t border-brand-border pt-2">MOQ {p.moq} • {p.lead}</div></div>
            </div>
          ))}
        </div>
      </div>
      {/* Trust - pastel */}
      <div className="border-t border-brand-border bg-white px-3 py-2 flex flex-wrap gap-1.5 text-[10px] items-center justify-center">
        <span className="font-bold tracking-widest uppercase">Trusted in</span><span className="border border-brand-border px-2 py-1 font-semibold">USA</span><span className="border border-brand-border px-2 py-1 font-semibold">Germany</span><span className="border border-brand-border px-2 py-1 font-semibold">UAE</span><span className="border border-brand-border px-2 py-1 font-semibold">Singapore</span><span className="border border-brand-line bg-brand-pastelGreen px-2 py-1 font-bold">HACCP • ISO 22000</span>
      </div>
    </div>
  )
}

export default function PreviewPage(){
  return (
    <div className="min-h-screen bg-[#F8F9F8] w-full">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        {/* Header - sharp */}
        <div className="bg-white border border-brand-border p-5">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
            <div>
              <div className="text-[11px] tracking-[0.12em] uppercase font-bold border border-brand-line bg-brand-pastelGreen text-brand-dark inline-block px-3 py-1">Local Preview — Sharp White Enterprise • No Push</div>
              <h1 className="text-[24px] font-bold tracking-[-0.02em] text-brand-dark mt-3 leading-none">Sharp, white, precise — built for B2B procurement teams.</h1>
              <p className="text-sm text-gray-600 mt-2 max-w-3xl leading-5">This is a <span className="font-bold text-brand-dark">visual mock</span> of the new live site. White background, 0px corners (sharp squares), pastel green/gold only for outlines, no dark hero, no rounded rectangles, no shadows — borders do the work. The <span className="font-bold text-brand-dark">actual</span> pages are already live at <code className="border border-brand-border px-1 bg-white">/</code> <code className="border border-brand-border px-1 bg-white">/products</code> etc.</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <Link href="/" className="bg-brand-dark text-white text-sm font-bold px-5 py-2.5 border border-brand-dark">Open Live Homepage →</Link>
              <Link href="/products" className="bg-white text-brand-dark text-sm font-bold px-5 py-2.5 border border-brand-border">12 Products</Link>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="border border-brand-line bg-brand-pastelGreen px-2.5 py-1 font-bold text-brand-dark">0px SHARP</span>
            <span className="bg-white border border-brand-border px-2.5 py-1">White #FFFFFF</span>
            <span className="border border-brand-line bg-brand-pastelGreen px-2.5 py-1">Pastel Green #E8F0E7</span>
            <span className="border border-[#F3E8B5] bg-brand-pastelGold px-2.5 py-1">Pastel Gold #FFF7D6</span>
            <span className="border border-brand-border bg-white px-2.5 py-1">1px Border #E5E7EB</span>
          </div>
        </div>

        <div className="mt-4 border border-brand-border bg-white p-3">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-[11px] tracking-[0.12em] uppercase font-bold text-gray-500">Visual Mock — Sharp White Export System (exactly as live on /)</span>
            <span className="text-[11px] border border-brand-line bg-brand-pastelGreen px-2 py-1 font-bold text-brand-dark">PREVIEW • SQUARE • PRECISE</span>
          </div>
          <SharpMock />
          <div className="mt-3 grid lg:grid-cols-3 gap-px bg-brand-border border border-brand-border text-xs">
            <div className="bg-white p-4"><div className="font-bold text-brand-dark">Why procurement prefers this</div><p className="text-gray-600 mt-1 leading-4">Top B2B leaders (ADM, Cargill, Ingredion) use white + thin 1px grids. Sharp squares signal compliance & precision, not consumer playfulness.</p></div>
            <div className="bg-white p-4"><div className="font-bold text-brand-dark">Noise removed</div><p className="text-gray-600 mt-1 leading-4">No gradients, no rounded pills, no lifted shadows, no dark hero. Data (MOQ, lead, COA, HS, specs) is front-loaded.</p></div>
            <div className="bg-white p-4"><div className="font-bold text-brand-dark">Where to verify live</div><div className="mt-2 flex flex-wrap gap-1.5"><Link href="/" className="border border-brand-border px-2 py-1 font-bold hover:border-brand-dark">/ Homepage</Link><Link href="/products" className="border border-brand-border px-2 py-1 font-bold hover:border-brand-dark">/products</Link><Link href="/quality" className="border border-brand-border px-2 py-1 font-bold hover:border-brand-dark">/quality</Link><Link href="/infrastructure" className="border border-brand-border px-2 py-1 font-bold hover:border-brand-dark">/infrastructure</Link></div></div>
          </div>
        </div>

        <div className="mt-4 border border-brand-border bg-white p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <span className="text-sm text-gray-700"><span className="font-bold text-brand-dark">Like this?</span> Live site already uses it. Tell me tweaks or say <span className="border border-brand-dark bg-brand-dark text-white px-1.5 py-0.5 text-xs font-bold">push</span> to commit.</span>
          <span className="text-xs border border-brand-line bg-brand-pastelGreen px-3 py-1.5 font-bold text-brand-dark">No git push until you ask — still local-only</span>
        </div>
      </div>
    </div>
  )
}
