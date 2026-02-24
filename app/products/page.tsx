/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Products listing page for Treishvaam Agro.
 * - Displays a comprehensive, filterable catalog of all enterprise ingredients.
 *
 * Scope:
 * - Renders a 4-column e-commerce grid of product cards.
 * - Client-side horizontal pill-bar filtering logic for categories.
 *
 * Critical Dependencies:
 * - Frontend: `framer-motion` for grid entry animations. `lucide-react` for iconography.
 *
 * Security Constraints:
 * - Data is hardcoded for the frontend prototype phase. Do not fetch from unauthenticated external APIs.
 *
 * Non-Negotiables:
 * - Layout MUST use an Amazon-style 4-column e-commerce grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`).
 * - Filter MUST be a sticky horizontal pill-bar just beneath the main navigation header.
 * - "Key Applications" tags MUST use a muted, clean style (`bg-gray-100 text-gray-700`).
 *
 * Change Intent:
 * - Overhauled to an e-commerce grid pattern with sleek horizontal navigation and clean vertical product cards.
 *
 * Future AI Guidance:
 * - When integrating a real CMS or backend API, replace the `productsData` array with a data fetching hook, but preserve the exact JSX structure of the product card.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Implemented info-rich product cards with prominent Key Applications tags.
 * • Enforced max-w-7xl constraints.
 * • Removed sidebar, added horizontal sticky category pill menu.
 * • Reconfigured to 4-column Amazon-style e-commerce grid.
 * • 2026-02-25
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Fruit Powders', 'Vegetable Powders', 'Herbal Extracts', 'Organic Spices'];

const productsData = [
  { 
    id: 'p1', 
    title: 'Organic Banana Powder', 
    category: 'Fruit Powders', 
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=1000', 
    desc: '100% natural spray-dried banana powder retaining original flavor and nutritional value.', 
    applications: ['Baby Food', 'Baking', 'Beverages'] 
  },
  { 
    id: 'p2', 
    title: 'Premium Spinach Powder', 
    category: 'Vegetable Powders', 
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=1000', 
    desc: 'Highly concentrated nutrient-dense spinach powder for health supplements.', 
    applications: ['Supplements', 'Pasta', 'Snacks'] 
  },
  { 
    id: 'p3', 
    title: 'Ashwagandha Extract', 
    category: 'Herbal Extracts', 
    image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=1000', 
    desc: 'Standardized adaptogenic extract to support stress relief. Min 5% Withanolides.', 
    applications: ['Nutraceuticals', 'Teas', 'Pharma'] 
  },
  { 
    id: 'p4', 
    title: 'Turmeric Curcumin', 
    category: 'Organic Spices', 
    image: 'https://images.unsplash.com/photo-1615486171448-4357778b4bdc?auto=format&fit=crop&q=80&w=1000', 
    desc: 'High-curcumin turmeric powder with potent anti-inflammatory properties.', 
    applications: ['Cosmetics', 'Health Drinks', 'Culinary'] 
  },
  { 
    id: 'p5', 
    title: 'Beetroot Powder', 
    category: 'Vegetable Powders', 
    image: 'https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?auto=format&fit=crop&q=80&w=1000', 
    desc: 'Rich in nitrates and natural red color, ideal for sports performance.', 
    applications: ['Sports Nutrition', 'Coloring'] 
  },
  { 
    id: 'p6', 
    title: 'Alphonso Mango Powder', 
    category: 'Fruit Powders', 
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=1000', 
    desc: 'Sweet and tangy authentic Alphonso mango powder, perfect for confectionery.', 
    applications: ['Ice Cream', 'Confectionery'] 
  },
  { 
    id: 'p7', 
    title: 'Ginger Root Extract', 
    category: 'Organic Spices', 
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000', 
    desc: 'Premium spray-dried ginger extract with standardized gingerol content.', 
    applications: ['Beverages', 'Supplements', 'Baking'] 
  },
  { 
    id: 'p8', 
    title: 'Moringa Extract', 
    category: 'Herbal Extracts', 
    image: 'https://images.unsplash.com/photo-1590491040375-7b568deee940?auto=format&fit=crop&q=80&w=1000', 
    desc: 'Nutrient-rich moringa oleifera leaf powder, finely milled for smooth blending.', 
    applications: ['Smoothies', 'Teas', 'Capsules'] 
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(product => product.category === activeCategory);

  return (
    <div className="bg-brand-surface-off min-h-screen pb-24 flex flex-col">
      
      {/* Page Header */}
      <div className="bg-brand-dark pt-20 pb-16 w-full px-6 xl:px-0">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Industrial Grade Ingredients
          </h1>
          <p className="text-brand-secondary text-lg max-w-2xl mx-auto font-medium">
            Explore our premium selection of organic and standardized agricultural extracts, engineered for high-scale global manufacturing.
          </p>
        </div>
      </div>

      {/* Sticky Horizontal Category Filter (Pill Bar) */}
      <div className="sticky top-[80px] z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-4 flex overflow-x-auto hide-scrollbar gap-3 items-center justify-start md:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === category 
                ? 'bg-brand-primary text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-brand-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid Area */}
      <div className="max-w-7xl mx-auto px-6 xl:px-0 mt-10 w-full flex-grow">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                key={product.id}
                className="h-full"
              >
                <Link 
                  href={`/products/${product.id}`}
                  className="group flex flex-col bg-white rounded-card overflow-hidden shadow-resting hover:shadow-lifted hover:-translate-y-1 transition-all duration-250 ease-out h-full border border-gray-100"
                >
                  {/* Image Header (1:1 Square aspect ratio for e-commerce clean look) */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-50 border-b border-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-brand-primary uppercase tracking-wider shadow-sm">
                      {product.category}
                    </div>
                  </div>
                  
                  {/* Card Content - Vertical Stack */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-brand-dark text-lg font-bold leading-tight mb-2">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                      {product.desc}
                    </p>
                    
                    {/* Key Applications (Muted Tags) */}
                    <div className="mt-auto">
                      <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
                        Key Applications
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {product.applications.map((app, index) => (
                          <span 
                            key={index} 
                            className="bg-gray-100 border border-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>

                      {/* Action Link */}
                      <div className="text-brand-primary font-bold text-sm flex items-center gap-1 group-hover:text-brand-dark transition-colors duration-150 border-t border-gray-100 pt-4">
                        View Specifications 
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-200 ml-auto" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty State Fallback */}
        {filteredProducts.length === 0 && (
          <div className="w-full bg-white rounded-card p-16 text-center border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <p className="text-gray-500 text-lg mb-4">No products found in the "{activeCategory}" category.</p>
            <button 
              onClick={() => setActiveCategory('All')}
              className="bg-brand-primary hover:bg-brand-dark text-white font-bold py-2.5 px-6 rounded-enterprise transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

    </div>
  );
}