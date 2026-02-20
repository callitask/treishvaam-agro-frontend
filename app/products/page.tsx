import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Products | Treishvaam Agro',
  description: 'Explore our premium range of natural fruit, vegetable, and herbal powders.',
};

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'fruit', label: 'Fruit Powders' },
  { id: 'vegetable', label: 'Vegetable Powders' },
  { id: 'leafy', label: 'Leafy Greens' },
  { id: 'herbal', label: 'Herbal Extracts' },
];

const PRODUCTS = [
  { id: 'mango-powder', title: 'Alphonso Mango Powder', cat: 'fruit', desc: 'Spray-dried, preserving the authentic sweetness and aroma of Alphonso mangoes.' },
  { id: 'beetroot-powder', title: 'Beetroot Powder', cat: 'vegetable', desc: 'Vibrant color and earthy flavor, perfect for natural food coloring and supplements.' },
  { id: 'spinach-powder', title: 'Spinach Powder', cat: 'leafy', desc: 'Nutrient-dense dehydrated spinach, high in iron and vitamins.' },
  { id: 'ashwagandha-extract', title: 'Ashwagandha Extract', cat: 'herbal', desc: 'Standardized root extract with 5% withanolides for stress relief applications.' },
  { id: 'lemon-powder', title: 'Lemon Powder', cat: 'fruit', desc: 'Tangy and highly soluble, ideal for beverages and culinary seasoning.' },
  { id: 'tomato-powder', title: 'Tomato Powder', cat: 'vegetable', desc: 'Rich in lycopene, offering a robust umami flavor profile.' },
  { id: 'moringa-powder', title: 'Moringa Powder', cat: 'leafy', desc: 'Superfood green powder sourced from organic farms.' },
  { id: 'turmeric-extract', title: 'Turmeric Extract', cat: 'herbal', desc: 'Curcumin-rich extract for anti-inflammatory nutraceuticals.' },
];

export default function ProductsPage() {
  return (
    <div className="w-full py-20 px-6 bg-brand-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-textDark mb-6 tracking-tight">Premium Ingredients Catalogue</h1>
          <p className="text-brand-textMuted text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of pure, sustainably processed powders designed for enterprise-scale manufacturing.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat, idx) => (
            <a 
              key={cat.id} 
              href={`#${cat.id}`}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                idx === 0 
                ? 'bg-brand-green text-white border-brand-green' 
                : 'bg-transparent text-brand-textMuted border-brand-border hover:border-brand-green hover:text-brand-green'
              }`}
            >
              {cat.label}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((prod) => (
            <Link href={`/products/${prod.id}`} key={prod.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0px_12px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-brand-border">
              <div className="w-full aspect-[4/3] bg-brand-green/5 overflow-hidden border-b border-brand-border/50">
                <div className="w-full h-full transition-transform duration-300 group-hover:scale-105 flex items-center justify-center p-4 text-center">
                   <span className="text-brand-green/50 font-medium text-sm">Product Image<br/>{prod.title}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-2">{prod.cat}</div>
                <h3 className="text-xl font-semibold text-brand-textDark mb-2">{prod.title}</h3>
                <p className="text-brand-textMuted text-sm leading-relaxed mb-6 flex-grow">{prod.desc}</p>
                <div className="flex items-center text-brand-green font-medium text-sm mt-auto group-hover:text-brand-greenHover transition-colors">
                  View Specifications 
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}