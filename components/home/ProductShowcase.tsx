'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '@/lib/data/products';

const featuredProducts = getFeaturedProducts();

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.04 } } };
const item = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } } };

export default function ProductShowcase() {
  return (
    <section className="bg-white py-12 lg:py-14 w-full border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        {/* Header - sharp, precise, B2B */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6 border-b border-brand-border pb-6">
          <div>
            <div className="text-[11px] tracking-[0.12em] uppercase font-bold text-brand-primary border border-brand-line bg-brand-pastelGreen px-2.5 py-1 w-fit">Ingredient Portfolio • 24 SKUs</div>
            <h2 className="text-[26px] lg:text-[28px] font-bold tracking-[-0.02em] text-brand-dark mt-3 leading-none">Standardized powders for enterprise formulations</h2>
            <p className="text-sm text-gray-600 mt-2 max-w-[60ch]">Every SKU ships with COA (12 parameters), spec sheet and MSDS. Low-temp dried to preserve actives, color and volatile profile. <span className="font-semibold text-brand-dark">FOB India, 100 kg–20 MT tiers.</span></p>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark border border-brand-border px-5 py-2.5 hover:border-brand-dark transition-colors w-fit">
            View Entire Catalog (24) <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid - minimal Amazon-like, gap + soft shadow, not stitched */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10%' }} className="grid grid-cols-1 sm:grid-cols-12 gap-5 lg:gap-6">
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={item} className="col-span-1 sm:col-span-6 lg:col-span-3">
              <Link
                href={`/products/${product.id}`}
                className="group block relative overflow-hidden h-full flex flex-col bg-white/75 backdrop-blur-[12px] backdrop-saturate-[160%] border border-white/60 hover:border-white/80 shadow-[0_4px_20px_rgba(31,69,36,0.07),0_1px_3px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_10px_36px_rgba(31,69,36,0.10),0_2px_8px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-200"
                style={{ WebkitBackdropFilter: 'blur(12px) saturate(160%)', backdropFilter: 'blur(12px) saturate(160%)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[#E8F0E7]/20 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E5B824]/25 to-transparent pointer-events-none" />
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50/70">
                  <img src={product.image} alt={product.name} loading="lazy" className="object-cover w-full h-full group-hover:scale-[1.04] transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 pointer-events-none" />
                  <div className="absolute top-2.5 left-2.5 bg-white/85 backdrop-blur-[8px] border border-white/70 px-2 py-1 text-[10px] font-bold tracking-[0.08em] uppercase text-brand-dark shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
                    {product.category}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-white/80 backdrop-blur-[8px] border border-white/60 px-2 py-1 text-[11px] font-bold text-brand-dark shadow-sm">
                    COA • {product.certifications[0]}
                  </div>
                </div>
                <div className="relative p-4 flex flex-col flex-grow">
                  <h3 className="text-[15px] font-bold leading-tight text-brand-dark line-clamp-2 min-h-[36px]">{product.name}</h3>
                  <p className="text-xs text-gray-600 mt-1.5 line-clamp-2 leading-4 min-h-[32px]">{product.shortDesc}</p>
                  <div className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mt-3 border-t border-white/60 pt-3">
                    MOQ {product.moq} <span className="text-gray-300">•</span> {product.leadTime} <span className="text-brand-primary ml-1">{product.bulkPricing[product.bulkPricing.length-1].pricePerKg}/kg</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {product.applications.slice(0, 3).map((app) => (
                      <span key={app} className="border border-white/60 bg-white/70 backdrop-blur text-brand-dark text-[11px] px-2 py-1 font-medium shadow-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-2 line-clamp-1">{Object.entries(product.specifications).slice(0,2).map(([k,v])=>`${k} ${v}`).join(' • ')}</div>
                  <div className="text-xs font-bold text-brand-dark flex items-center gap-1.5 mt-4 group-hover:gap-2 transition-all">
                    View Specifications <ArrowRight size={12} className="text-brand-primary" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-6 border border-brand-border bg-white px-4 py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="text-sm text-gray-700">
            <span className="font-bold text-brand-dark">Need a custom blend or private label?</span> <span className="text-gray-500">We do toll processing and contract manufacturing — MOQ from 100 kg.</span>
          </div>
          <Link href="/contact" className="text-sm font-bold tracking-widest uppercase bg-brand-dark text-white px-5 py-2.5 border border-brand-dark hover:bg-white hover:text-brand-dark transition-colors text-center">
            Talk to Enterprise Team
          </Link>
        </div>
      </div>
    </section>
  );
}
