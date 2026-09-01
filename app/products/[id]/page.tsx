import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, Package, ArrowLeft, Download, ShieldCheck, FileText, Truck, Clock, Beaker, Award, Leaf, FlaskConical } from "lucide-react";
import { products } from "@/lib/data/products";
import { notFound } from "next/navigation";
import RfqAddButton from "@/components/rfq/RfqAddButton";

export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id);
  if (!product) return {};
  const title = `${product.name} — ${product.category} | Bulk ${product.moq} FOB India | Treishvaam Agro`;
  const description = `${product.shortDesc} ${product.description.slice(0, 140)} Bulk tiers from ${product.bulkPricing.map(b=>`${b.moq} ${b.pricePerKg}/kg`).join(', ')}. HS ${product.hsCode}, ${product.certifications.join(', ')}. COA per batch.`;
  return {
    title,
    description,
    keywords: [product.name, product.category, product.hsCode, ...product.applications, ...product.certifications, 'bulk', 'FOB India', 'Treishvaam Agro'],
    alternates: { canonical: `/products/${product.id}` },
    openGraph: {
      title,
      description,
      url: `/products/${product.id}`,
      images: [{ url: product.image, width: 1000, height: 750, alt: product.name }],
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description, images: [product.image] },
  };
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "sku": product.id,
    "brand": { "@type": "Brand", "name": "Treishvaam Agro" },
    "manufacturer": { "@type": "Organization", "name": "Treishvaam Agro" },
    "category": product.category,
    "isAccessoryOrSparePartFor": product.applications.join(', '),
    "additionalProperty": Object.entries(product.specifications).map(([k,v])=>({ "@type": "PropertyValue", "name": k, "value": v })),
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": product.bulkPricing[product.bulkPricing.length-1].pricePerKg.replace('$',''),
      "highPrice": product.bulkPricing[0].pricePerKg.replace('$',''),
      "offerCount": product.bulkPricing.length,
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Treishvaam Agro" }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "47" }
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://treishvaamagro.com/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://treishvaamagro.com/products" },
      { "@type": "ListItem", "position": 3, "name": product.category, "item": `https://treishvaamagro.com/products?category=${encodeURIComponent(product.category)}` },
      { "@type": "ListItem", "position": 4, "name": product.name }
    ]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": `What is the MOQ for ${product.name}?`, "acceptedAnswer": { "@type": "Answer", "text": `MOQ is ${product.moq} with lead time ${product.leadTime}. Bulk tiers: ${product.bulkPricing.map(b=>`${b.moq} at ${b.pricePerKg}/kg`).join(', ')}.` } },
      { "@type": "Question", "name": `What certifications does ${product.name} have?`, "acceptedAnswer": { "@type": "Answer", "text": `${product.certifications.join(', ')} certified. COA per batch, HS code ${product.hsCode}, origin ${product.origin}.` } },
      { "@type": "Question", "name": `What are the applications of ${product.name}?`, "acceptedAnswer": { "@type": "Answer", "text": `Used for ${product.applications.join(', ')}. ${product.description}` } }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Breadcrumb + Category - sharp white */}
      <div className="border-b border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-3 flex items-center justify-between text-xs">
          <Link href="/products" className="inline-flex items-center gap-1.5 font-semibold text-gray-600 hover:text-brand-dark">
            <ArrowLeft size={13} /> Back to Catalog
          </Link>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline border border-brand-line bg-brand-pastelGreen text-brand-dark px-2.5 py-1 text-[11px] font-bold tracking-widest uppercase">{product.category}</span>
            <span className="border border-brand-border bg-white px-2.5 py-1 text-[11px] font-medium text-gray-600">HS {product.hsCode}</span>
            {product.coaAvailable && <span className="border border-brand-line bg-brand-pastelGreen text-brand-dark px-2.5 py-1 text-[11px] font-bold flex items-center gap-1"><ShieldCheck size={11}/> COA Available</span>}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 xl:px-0 py-6 lg:py-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-8">
          {/* Image - sharp */}
          <div className="bg-white border border-brand-border">
            <div className="aspect-[4/3] overflow-hidden border-b border-brand-border bg-gray-50">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 divide-x divide-brand-border border-t border-brand-border">
              <div className="px-3 py-3 text-center">
                <div className="text-[11px] tracking-widest uppercase font-bold text-gray-500">MOQ</div>
                <div className="text-sm font-bold text-brand-dark mt-1">{product.moq}</div>
              </div>
              <div className="px-3 py-3 text-center">
                <div className="text-[11px] tracking-widest uppercase font-bold text-gray-500">Lead</div>
                <div className="text-sm font-bold text-brand-dark mt-1">{product.leadTime}</div>
              </div>
              <div className="px-3 py-3 text-center">
                <div className="text-[11px] tracking-widest uppercase font-bold text-gray-500">Shelf</div>
                <div className="text-sm font-bold text-brand-dark mt-1">{product.shelfLife}</div>
              </div>
            </div>
            <div className="p-3 flex flex-wrap gap-1.5 border-t border-brand-border bg-brand-pastelGreen">
              {product.certifications.map((c)=>(<span key={c} className="bg-white border border-brand-line px-2 py-1 text-[11px] font-bold text-brand-dark">{c}</span>))}
            </div>
            <div className="px-3 py-2 border-t border-brand-border text-[11px] text-gray-500">Origin: <span className="font-semibold text-brand-dark">{product.origin}</span> • Storage: {product.storage}</div>
          </div>

          {/* Info - sharp, precise */}
          <div className="flex flex-col">
            <div className="border border-brand-border bg-white p-5 lg:p-6">
              <div className="text-[11px] tracking-[0.12em] uppercase font-bold text-brand-primary border border-brand-line bg-brand-pastelGreen inline-block px-2.5 py-1">{product.category} • {product.origin}</div>
              <h1 className="text-[28px] font-bold tracking-[-0.02em] text-brand-dark mt-3 leading-none">{product.name}</h1>
              <p className="text-sm text-gray-600 mt-3 leading-5">{product.description}</p>
              <p className="text-xs text-gray-500 mt-2 italic">{product.shortDesc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {product.features.map((f)=>(<span key={f} className="border border-brand-border bg-white px-2.5 py-1 text-xs font-medium text-gray-700 flex items-center gap-1"><Check size={12} className="text-brand-primary"/>{f}</span>))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <RfqAddButton product={product} />
                <Link href="/contact" className="bg-brand-dark text-white text-sm font-bold px-6 py-3 border border-brand-dark hover:bg-white hover:text-brand-dark">Request Bulk Quote</Link>
                <button className="bg-white text-brand-dark text-sm font-semibold px-5 py-3 border border-brand-border hover:border-brand-dark flex items-center gap-1.5"><Download size={14}/> Spec Sheet PDF</button>
              </div>
              <div className="mt-3 text-[11px] text-gray-500">Avg response &lt;24h • Export docs included • Retain sample 24 mo</div>
            </div>

            {/* Bulk Pricing - sharp table, enterprise */}
            <div className="mt-4 border border-brand-border bg-white">
              <div className="px-4 py-3 border-b border-brand-border flex items-center justify-between">
                <span className="text-sm font-bold text-brand-dark flex items-center gap-2"><Package size={16} className="text-brand-primary"/> Bulk Pricing (FOB India)</span>
                <span className="text-[11px] border border-[#F3E8B5] bg-brand-pastelGold px-2 py-1 font-bold text-brand-dark">Negotiable • T/T • L/C</span>
              </div>
              <div className="grid grid-cols-3 divide-x divide-brand-border bg-brand-border gap-px">
                {product.bulkPricing.map((tier)=>(
                  <div key={tier.moq} className="bg-white p-4 text-center">
                    <div className="text-[11px] tracking-widest uppercase font-bold text-gray-500">{tier.moq}</div>
                    <div className="text-[18px] font-bold tracking-tight text-brand-dark mt-1">{tier.pricePerKg}<span className="text-xs font-medium text-gray-500">/kg</span></div>
                    {tier.note && <div className="text-[11px] font-bold text-brand-primary mt-1">{tier.note}</div>}
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 bg-brand-pastelGreen border-t border-brand-line text-[11px] text-gray-700 flex flex-wrap gap-3 justify-between">
                <span>Packaging: {product.packagingOptions.join(' • ')}</span>
                <span className="font-semibold text-brand-dark">FOB Mundra / Nhava Sheva • Sea & Air</span>
              </div>
            </div>

            {/* Applications */}
            <div className="mt-4 border border-brand-border bg-white p-4">
              <div className="text-[11px] tracking-widest uppercase font-bold text-gray-500">Key Applications — Top B2B Customers</div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {product.applications.map((a)=>(<span key={a} className="border border-brand-line bg-brand-pastelGreen text-brand-dark px-3 py-1.5 text-xs font-semibold">{a}</span>))}
              </div>
              <div className="mt-3 pt-3 border-t border-brand-border text-xs text-gray-600 leading-4">
                <span className="font-bold text-brand-dark">B2B Note:</span> {product.description} Ideal for formulation teams needing {product.features[0]?.toLowerCase()} and consistent {Object.keys(product.specifications)[0]} {Object.values(product.specifications)[0]} batch-to-batch.
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Uses — GEO/AIO rich content */}
        <div className="mt-6 border border-brand-border bg-white p-5">
          <h2 className="text-sm font-bold text-brand-dark flex items-center gap-2"><Leaf size={14} className="text-brand-primary"/> How top B2B customers use {product.name}</h2>
          <div className="mt-3 grid md:grid-cols-3 gap-4 text-xs leading-4">
            <div className="border border-brand-border p-3 bg-white">
              <div className="font-bold text-brand-dark">Food & Beverage Manufacturing</div>
              <p className="text-gray-600 mt-1">For {product.applications.slice(0,2).join(' and ').toLowerCase()}, premixes and fortification. 80–120 mesh ensures instant dispersibility in dry blends and liquids. Used by confectionery, bakery and beverage majors requiring natural color, flavor and nutrition without carriers.</p>
            </div>
            <div className="border border-brand-border p-3 bg-white">
              <div className="font-bold text-brand-dark">Nutraceutical & Supplement</div>
              <p className="text-gray-600 mt-1">High {Object.keys(product.specifications)[0]} {Object.values(product.specifications)[0]} supports label claims. COA 12 params + {product.certifications.slice(0,2).join(' & ')} for dossier. For capsules, gummies, premixes — low micro, heavy metals &lt; EU limits.</p>
            </div>
            <div className="border border-brand-border p-3 bg-white">
              <div className="font-bold text-brand-dark">Private Label & Export</div>
              <p className="text-gray-600 mt-1">HS {product.hsCode}, origin {product.origin}, packaging {product.packagingOptions[0]}. FOB Mundra/NHAVA, phytosanitary, fumigation, Halal/Kosher where applicable. 25+ market compliance for USA, EU, GCC, ASEAN.</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
            <span className="border border-brand-line bg-brand-pastelGreen px-2 py-1 font-bold text-brand-dark">Origin {product.origin}</span>
            <span className="border border-brand-border bg-white px-2 py-1">Storage {product.storage}</span>
            <span className="border border-brand-border bg-white px-2 py-1">Shelf {product.shelfLife}</span>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          {/* Specs */}
          <div className="lg:col-span-2 border border-brand-border bg-white">
            <div className="px-4 py-3 border-b border-brand-border flex items-center gap-2 text-sm font-bold text-brand-dark"><Beaker size={16} className="text-brand-primary"/> Specifications — COA 12 Parameters</div>
            <div className="divide-y divide-brand-border">
              {Object.entries(product.specifications).map(([k,v])=>(
                <div key={k} className="grid grid-cols-2 px-4 py-3 text-sm">
                  <span className="font-semibold text-brand-dark">{k}</span><span className="text-gray-600">{v}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Docs + Trust */}
          <div className="space-y-4">
            <div className="border border-brand-border bg-white p-4">
              <div className="text-sm font-bold text-brand-dark flex items-center gap-2"><FileText size={14}/> What every shipment includes</div>
              <ul className="mt-3 space-y-1.5 text-xs text-gray-700">
                <li className="flex gap-2"><Check size={12} className="text-brand-primary mt-0.5"/> COA per batch & lot • 12 params</li>
                <li className="flex gap-2"><Check size={12} className="text-brand-primary mt-0.5"/> Phytosanitary & fumigation cert</li>
                <li className="flex gap-2"><Check size={12} className="text-brand-primary mt-0.5"/> Allergen & Non-GMO statement</li>
                <li className="flex gap-2"><Check size={12} className="text-brand-primary mt-0.5"/> MSDS & TDS • Traceability QR</li>
                <li className="flex gap-2"><Check size={12} className="text-brand-primary mt-0.5"/> Halal/Kosher where applicable</li>
              </ul>
              <Link href="/contact" className="mt-4 inline-block w-full text-center bg-white border border-brand-border hover:border-brand-dark text-sm font-bold py-2.5">Request Sample COA</Link>
            </div>
            <div className="border border-brand-line bg-brand-pastelGreen p-4">
              <div className="text-xs font-bold tracking-widest uppercase text-brand-dark flex items-center gap-1.5"><Truck size={13}/> Export Ready</div>
              <div className="text-xs text-gray-700 mt-2 leading-4">HS {product.hsCode} • {product.origin} • 25+ markets • Sea FCL/LCL & Air • 500+ MT/yr capacity • Tunnel dried &lt;45°C</div>
              <div className="mt-3 flex gap-1.5 text-[11px]"><span className="bg-white border border-brand-border px-2 py-1 font-semibold">FOB</span><span className="bg-white border border-brand-border px-2 py-1 font-semibold">CIF</span><span className="bg-white border border-brand-border px-2 py-1 font-semibold">EXW</span></div>
            </div>
          </div>
        </div>

        {/* Related - minimal shadow, not stitched */}
        <div className="mt-8 border-t border-brand-border pt-6">
          <div className="flex items-end justify-between mb-4">
            <h3 className="text-sm font-bold tracking-[-0.01em] text-brand-dark">Related in {product.category}</h3>
            <Link href={`/products?category=${encodeURIComponent(product.category)}`} className="text-xs font-bold border border-brand-border px-3 py-1.5 hover:border-brand-dark bg-white">View all {product.category} →</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {products.filter(p=>p.category===product.category && p.id!==product.id).slice(0,4).map((r)=>(
              <Link key={r.id} href={`/products/${r.id}`} className="bg-white group border border-[#E8EAE8] shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-gray-50"><img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"/></div>
                <div className="p-3"><div className="text-xs font-bold text-brand-dark leading-tight line-clamp-2 min-h-[32px]">{r.name}</div><div className="text-[11px] text-gray-500 mt-1">MOQ {r.moq} • {r.leadTime}</div><div className="text-xs font-bold text-brand-dark mt-1">{r.bulkPricing[r.bulkPricing.length-1].pricePerKg}/kg</div></div>
              </Link>
            ))}
          </div>
          {/* FAQ for GEO/AIO */}
          <div className="mt-6 border border-brand-border bg-white p-4">
            <h4 className="text-sm font-bold text-brand-dark">FAQs — {product.name} for B2B buyers</h4>
            <div className="mt-3 space-y-3 text-xs leading-4">
              <div><span className="font-bold text-brand-dark">What is the MOQ and lead time?</span><p className="text-gray-600 mt-1">MOQ {product.moq}, lead {product.leadTime}. Bulk tiers {product.bulkPricing.map(b=>`${b.moq} ${b.pricePerKg}/kg`).join(', ')}. FOB India via sea/air.</p></div>
              <div><span className="font-bold text-brand-dark">Is COA and spec sheet included?</span><p className="text-gray-600 mt-1">Yes — COA 12 params per batch/lot, plus spec sheet, MSDS, allergen, non-GMO, and export docs (phytosanitary, fumigation, Halal/Kosher where applicable).</p></div>
              <div><span className="font-bold text-brand-dark">What are the top B2B uses?</span><p className="text-gray-600 mt-1">{product.applications.join(', ')} — {product.shortDesc} {product.features.slice(0,2).join(', ')}.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
