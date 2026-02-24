/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Product showcase grid for the homepage.
 *
 * Scope:
 * - Renders a staggered animated grid of primary product categories.
 *
 * Critical Dependencies:
 * - Frontend: Relies on `framer-motion` for intersection observer staggered entries.
 *
 * Security Constraints:
 * - N/A.
 *
 * Non-Negotiables:
 * - MUST use a 12-column CSS Grid.
 * - Component Gap MUST be exactly 24px (`gap-6`).
 * - Card Hover State MUST translateY(-4px) and change box-shadow.
 * - Border radius MUST be 12px for cards (`rounded-card`).
 *
 * Change Intent:
 * - Reconstructed component to perfectly mirror the target visual analysis.
 *
 * Future AI Guidance:
 * - Maintain the `motion.div` structure for the stagger effect. Do not revert to raw CSS keyframes here to keep complexity manageable.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Applied 12-column CSS grid structure.
 * • Implemented Framer Motion container/item variants for stagger entries.
 * • Enforced exact padding, margin, and typography scales based on the reverse-engineered Figma spec.
 * • 2026-02-24
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    title: 'Banana Powder',
    category: 'Fruit Powders',
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1000&auto=format&fit=crop',
    applications: ['Beverages', 'Baby Food', 'Baking'],
    href: '/products/banana-powder'
  },
  {
    id: 2,
    title: 'Spinach Powder',
    category: 'Vegetable Powders',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000&auto=format&fit=crop',
    applications: ['Soups', 'Smoothies', 'Snacks'],
    href: '/products/spinach-powder'
  },
  {
    id: 3,
    title: 'Ashwagandha Extract',
    category: 'Herbal Extracts',
    image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1000&auto=format&fit=crop',
    applications: ['Supplements', 'Teas', 'Pharma'],
    href: '/products/ashwagandha'
  },
  {
    id: 4,
    title: 'Turmeric Powder',
    category: 'Organic Spices',
    image: 'https://images.unsplash.com/photo-1615486171448-4357778b4bdc?q=80&w=1000&auto=format&fit=crop',
    applications: ['Culinary', 'Cosmetics', 'Health'],
    href: '/products/turmeric'
  }
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

export default function ProductShowcase() {
  return (
    <section className="bg-brand-surface-off py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-brand-primary font-semibold text-sm tracking-wider uppercase mb-2 block">
              Our Ingredients
            </span>
            <h2 className="text-brand-dark text-4xl font-semibold leading-[1.2]">
              Premium Quality Products
            </h2>
          </div>
          <Link 
            href="/products"
            className="text-brand-primary font-semibold flex items-center gap-2 hover:text-brand-dark transition-colors duration-150 group"
          >
            View Entire Catalog 
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* 12-Column Grid Wrapper */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-12 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
        >
          {featuredProducts.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              className="col-span-1 sm:col-span-6 lg:col-span-3"
            >
              <Link 
                href={product.href}
                className="group block bg-white rounded-card overflow-hidden shadow-resting hover:shadow-lifted hover:-translate-y-1 transition-all duration-250 ease-out h-full border border-gray-100 flex flex-col"
              >
                {/* Image Container 4:3 */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Card Content - p-6 (24px) */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-brand-primary text-xs font-semibold mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-brand-dark text-xl font-semibold leading-[1.4] mb-4">
                    {product.title}
                  </h3>
                  
                  {/* Applications List */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {product.applications.map((app, index) => (
                      <span key={index} className="bg-brand-surface-off border border-gray-200 text-gray-600 text-xs px-2 py-1 rounded">
                        {app}
                      </span>
                    ))}
                  </div>

                  <div className="text-brand-primary font-semibold text-sm flex items-center gap-1 mt-auto">
                    Learn More 
                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}