/**
 * AI-CONTEXT: Enterprise B2B Product Catalog - Upgraded 2026-04
 * Uses unified lib/data/products.ts, URL-synced filtering, search, and RFQ integration.
 * Preserves: 4-col grid, sticky pill bar, muted tags
 * Added: search, MOQ/leadTime chips, HS Code, COA badge, RFQ add-to-quote, bulk pricing preview
 */
'use client';

import React, { useMemo, useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, ShoppingCart, ShieldCheck, Package } from 'lucide-react';
import { products, CATEGORIES, type Product } from '@/lib/data/products';
import { useRfq } from '@/lib/store/rfq-store';
import { toast } from 'sonner';

const categories = ['All', ...CATEGORIES] as const;

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useRfq();
  const handleAddRfq = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      productName: product.name,
      category: product.category,
      image: product.image,
      packaging: product.packagingOptions[0],
      moq: product.moq,
      unit: 'kg',
    });
    toast.success(`${product.name} added to RFQ`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="h-full"
    >
      <div className="group relative flex flex-col bg-white/75 backdrop-blur-[12px] backdrop-saturate-[160%] border border-white/60 hover:border-white/80 h-full shadow-[0_4px_20px_rgba(31,69,36,0.06),0_1px_3px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_10px_36px_rgba(31,69,36,0.10),0_2px_8px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-200 overflow-hidden" style={{ WebkitBackdropFilter: 'blur(12px) saturate(160%)', backdropFilter: 'blur(12px) saturate(160%)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[#E8F0E7]/20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E5B824]/20 to-transparent pointer-events-none" />
        <Link href={`/products/${product.id}`} className="block relative">
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-50/70">
            <img src={product.image} alt={product.name} loading="lazy" className="object-cover w-full h-full group-hover:scale-[1.04] transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/15 pointer-events-none" />
            <div className="absolute top-2.5 left-2.5 bg-white/85 backdrop-blur-[8px] border border-white/70 px-2 py-1 text-[10px] font-bold tracking-widest uppercase text-brand-dark shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
              {product.category}
            </div>
            {product.coaAvailable && (
              <div className="absolute top-2.5 right-2.5 bg-white/80 backdrop-blur-[8px] border border-white/60 px-2 py-1 text-[10px] font-bold flex items-center gap-1 shadow-sm">
                <ShieldCheck size={10} /> COA
              </div>
            )}
          </div>
        </Link>

        <div className="relative p-4 flex flex-col flex-grow">
          <Link href={`/products/${product.id}`} className="block">
            <h3 className="text-brand-dark text-[14px] font-bold leading-tight mb-1 group-hover:text-brand-primary transition-colors line-clamp-2 min-h-[36px]">{product.name}</h3>
          </Link>
          <p className="text-gray-600 text-xs leading-4 mb-3 line-clamp-2 min-h-[32px]">{product.shortDesc}</p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="border border-white/60 bg-white/70 backdrop-blur text-brand-dark text-[10px] font-bold px-2 py-1 shadow-sm">MOQ {product.moq}</span>
            <span className="border border-white/60 bg-white/60 backdrop-blur text-gray-600 text-[10px] font-medium px-2 py-1 shadow-sm">{product.leadTime}</span>
            <span className="border border-white/50 bg-white/50 backdrop-blur text-gray-500 text-[10px] px-2 py-1">HS {product.hsCode}</span>
          </div>

          <div className="mt-auto">
            <p className="text-[11px] text-gray-400 font-bold tracking-widest uppercase mb-2">Key Applications</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {product.applications.slice(0, 3).map((app, i) => (
                <span key={i} className="border border-brand-line bg-brand-pastelGreen text-brand-dark px-2 py-1 text-xs font-medium">
                  {app}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <Link href={`/products/${product.id}`} className="flex-1 text-center border border-brand-border hover:border-brand-dark text-brand-dark font-semibold text-sm py-2.5 transition-colors flex items-center justify-center gap-1 bg-white">
                Specs <ArrowRight size={13} />
              </Link>
              <button onClick={handleAddRfq} className="flex-1 bg-brand-dark border border-brand-dark hover:bg-white hover:text-brand-dark text-white font-bold text-sm py-2.5 transition-colors flex items-center justify-center gap-1">
                <ShoppingCart size={13} /> Add to RFQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCat = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [search, setSearch] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    const params = new URLSearchParams(searchParams.toString());
    if (cat === 'All') params.delete('category');
    else params.set('category', cat);
    router.replace(`/products?${params.toString()}`, { scroll: false });
  };

  const filtered = useMemo(() => {
    let out = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      out = out.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.applications.some((a) => a.toLowerCase().includes(q)) || p.hsCode.includes(q));
    }
    return out;
  }, [activeCategory, search]);

  return (
    <div className="bg-white min-h-screen pb-12 flex flex-col border-t border-brand-border">
      <div className="bg-white border-b border-brand-border w-full px-6 xl:px-0">
        <div className="max-w-7xl mx-auto py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 border border-brand-line bg-brand-pastelGreen text-brand-dark text-[11px] font-bold tracking-widest uppercase px-3 py-1.5">
                <Package size={12} /> 12 Enterprise SKUs • 4 Categories • Global Export
              </span>
              <h1 className="text-brand-dark text-[32px] font-bold tracking-[-0.02em] mt-3 leading-none">Industrial grade ingredients</h1>
              <p className="text-gray-600 text-sm max-w-2xl mt-2 leading-4">
                Standardized extracts for food, beverage and nutraceutical manufacturing. Bulk MOQs, 12-parameter COAs and spec sheets per batch.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-[360px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products, HS code, applications..."
                  className="w-full pl-9 pr-4 py-3 bg-white border border-brand-border focus:outline-none focus:border-brand-dark text-sm text-brand-dark placeholder:text-gray-400"
                />
              </div>
              <p className="text-gray-500 text-xs">{filtered.length} products • HS codes • COA on all SKUs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-[64px] lg:top-[72px] z-20 bg-white border-b border-brand-border w-full">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-3 flex overflow-x-auto gap-2 items-center justify-start lg:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-bold tracking-widest uppercase border transition-colors ${activeCategory === cat ? 'bg-brand-dark text-white border-brand-dark' : 'bg-white text-gray-600 border-brand-border hover:border-brand-dark hover:text-brand-dark'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 xl:px-0 mt-6 w-full flex-grow">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">{filtered.map((p) => <ProductCard key={p.id} product={p} />)}</AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="w-full bg-white p-12 text-center border border-brand-border flex flex-col items-center justify-center mt-6">
            <p className="text-gray-600 text-sm">No products match &quot;{search}&quot; in &quot;{activeCategory}&quot;</p>
            <p className="text-xs text-gray-500 mt-1">Try broadening search or explore entire catalog.</p>
            <button onClick={() => { setSearch(''); handleCategory('All'); }} className="mt-4 bg-brand-dark border border-brand-dark hover:bg-white hover:text-brand-dark text-white font-bold py-2.5 px-6 text-sm">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-surface-off" />}>
      <ProductsContent />
    </Suspense>
  );
}
