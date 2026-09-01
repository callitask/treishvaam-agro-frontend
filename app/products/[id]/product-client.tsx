'use client';

import { useRfq } from '@/lib/store/rfq-store';
import { toast } from 'sonner';
import { ShoppingCart, FileText, Download } from 'lucide-react';
import type { Product } from '@/lib/data/products';
import { generateProductJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import Link from 'next/link';

export function generatesB2BProductMetadata() { return null; }

export function Breadcrumb({ product }: { product: Product }) {
  const { addItem, items } = useRfq();
  const inCart = items.some((i) => i.productId === product.id);

  const handleAdd = () => {
    addItem({
      productId: product.id,
      productName: product.name,
      category: product.category,
      image: product.image,
      packaging: product.packagingOptions[0],
      moq: product.moq,
      unit: 'kg',
      quantity: 500,
    });
    toast.success(`${product.name} added to RFQ cart`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-4">
      <button onClick={handleAdd} className={`flex-1 font-bold py-3.5 rounded-enterprise flex items-center justify-center gap-2 transition-colors ${inCart ? 'bg-white border-2 border-brand-primary text-brand-primary' : 'bg-brand-primary hover:bg-brand-dark text-white'}`}>
        <ShoppingCart size={18} /> {inCart ? 'Added — View RFQ Cart' : 'Add to RFQ Cart'}
      </button>
      <Link href="/contact" className="flex-1 bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-bold py-3.5 rounded-enterprise flex items-center justify-center gap-2 text-center transition-colors">
        <FileText size={18} /> Request Quote
      </Link>
      <button
        onClick={() => toast.info('Spec sheet PDF will be emailed with your quote (enterprise compliance)')}
        className="sm:w-auto w-full border border-brand-border hover:bg-brand-surface-off text-brand-dark font-semibold px-6 py-3.5 rounded-enterprise flex items-center justify-center gap-2"
      >
        <Download size={18} /> Spec Sheet
      </button>
    </div>
  );
}

export function B2BProductJsonLd({ product }: { product: Product }) {
  const productLd = generateProductJsonLd(product);
  const breadcrumbLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: 'https://treishvaamagro.com/' },
    { name: 'Products', url: 'https://treishvaamagro.com/products' },
    { name: product.category, url: `https://treishvaamagro.com/products?category=${encodeURIComponent(product.category)}` },
    { name: product.name, url: `https://treishvaamagro.com/products/${product.id}` },
  ]);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
