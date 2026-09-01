'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { CATEGORIES } from '@/lib/data/products';

export default function HeroSection() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [showFilter, setShowFilter] = useState(false);
  const router = useRouter();
  const onSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set('q', q.trim());
    if (cat !== 'All') params.set('category', cat);
    router.push(`/products${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <section className="w-full border-b border-brand-border bg-gradient-to-br from-[#E8F0E7]/70 via-[#F1F8F1]/50 to-[#FFF7D6]/45">
      <div className="max-w-7xl mx-auto px-6 xl:px-0 py-6 lg:py-8">
        {/* Liquid glass headline block — compact, not vertically long */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="relative bg-white/75 backdrop-blur-[14px] backdrop-saturate-[160%] border border-white/60 shadow-[0_8px_32px_rgba(31,69,36,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] p-5 lg:p-6"
          style={{ WebkitBackdropFilter: 'blur(14px) saturate(160%)', backdropFilter: 'blur(14px) saturate(160%)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#E8F0E7]/20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E5B824]/25 to-transparent pointer-events-none" />
          <div className="relative">
            <h1 className="text-[28px] lg:text-[40px] font-bold leading-[0.95] tracking-[-0.025em] text-brand-dark">
              Fruit & vegetable <span className="text-brand-primary">powders</span> for global manufacturing.
            </h1>
            <p className="text-sm leading-5 text-brand-textMuted mt-2 max-w-[62ch]">
              Standardized, low-temp dried powders and herbal extracts for food, beverage and nutraceutical enterprises. COA per batch, pesticide & heavy-metal screened.
            </p>
            <div className="flex flex-wrap gap-2.5 mt-4">
              <Link href="/contact" className="bg-brand-dark text-white text-sm font-semibold px-6 py-2.5 border border-brand-dark hover:bg-white hover:text-brand-dark transition-colors whitespace-nowrap">
                Request Bulk Quote
              </Link>
              <Link href="/products" className="bg-white/80 backdrop-blur text-brand-dark text-sm font-semibold px-6 py-2.5 border border-white/60 hover:bg-white transition-colors whitespace-nowrap">
                View Spec Library (24 SKUs)
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Liquid glass search — Filter button between search bar and Search — Amazon-like drawer */}
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.06, ease: [0.4, 0, 0.2, 1] }} className="mt-4">
          <form
            onSubmit={onSearch}
            className="w-full bg-white/78 backdrop-blur-[14px] backdrop-saturate-[160%] border border-white/60 p-1.5 flex flex-col lg:flex-row gap-1.5 shadow-[0_4px_24px_rgba(31,69,36,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]"
            style={{ WebkitBackdropFilter: 'blur(14px) saturate(160%)', backdropFilter: 'blur(14px) saturate(160%)' }}
          >
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search 24 SKUs • HS code • applications — e.g. Mango, 0712.90, Bakery, Ashwagandha"
                className="w-full pl-10 pr-4 py-3 bg-white/80 border border-white/60 focus:outline-none focus:border-brand-dark focus:bg-white text-sm text-brand-dark placeholder:text-gray-400"
                aria-label="Search catalog"
              />
            </div>
            {/* Filter button — between search bar and Search — Amazon-like */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowFilter((v) => !v)}
                className="w-full lg:w-[148px] bg-white/80 backdrop-blur border border-white/60 hover:bg-white hover:border-brand-dark text-brand-dark text-sm font-bold px-4 py-3 flex items-center justify-between gap-2 whitespace-nowrap"
                aria-haspopup="true"
                aria-expanded={showFilter}
              >
                <span className="flex items-center gap-1.5"><Filter size={14} className="text-brand-primary" /> {cat === 'All' ? 'Filter' : cat}</span>
                <span className={`text-[10px] border border-brand-border bg-white px-1.5 py-0.5 transition-transform ${showFilter ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {showFilter && (
                <div className="absolute right-0 top-[calc(100%+6px)] w-[320px] bg-white border border-brand-border shadow-[0_12px_32px_rgba(0,0,0,0.12)] z-30 p-3">
                  <div className="flex items-center justify-between border-b border-brand-border pb-2 mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-dark">Filter by Category</span>
                    <button type="button" onClick={() => setShowFilter(false)} className="text-xs border border-brand-border px-2 py-1 hover:bg-gray-50">✕</button>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {(['All', ...CATEGORIES] as const).map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => {
                          setCat(c);
                          setShowFilter(false);
                        }}
                        className={`text-left px-3 py-2.5 text-sm font-semibold border flex items-center justify-between ${cat === c ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white text-gray-700 border-brand-border hover:border-brand-dark hover:text-brand-dark'}`}
                      >
                        <span>{c}</span>
                        {cat === c && <span className="text-[10px] bg-white text-brand-dark px-1.5 py-0.5 font-bold">✓</span>}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button type="button" onClick={() => { setCat('All'); setShowFilter(false); }} className="flex-1 border border-brand-border bg-white py-2 text-xs font-bold hover:border-brand-dark">Clear</button>
                    <button type="button" onClick={() => { setShowFilter(false); onSearch(); }} className="flex-1 bg-brand-dark text-white border border-brand-dark py-2 text-xs font-bold hover:bg-white hover:text-brand-dark">Apply — View {cat === 'All' ? 'All 24' : cat}</button>
                  </div>
                  <div className="mt-2 text-[11px] text-gray-500">Amazon-like: pick category, then Search applies text + filter.</div>
                </div>
              )}
            </div>
            <button type="submit" className="bg-brand-dark text-white text-sm font-bold px-7 py-3 border border-brand-dark hover:bg-white hover:text-brand-dark transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap">
              Search <ArrowRight size={14} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
