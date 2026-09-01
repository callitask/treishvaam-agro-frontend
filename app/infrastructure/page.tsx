/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Infrastructure page for Treishvaam Agro.
 * - Showcases the company's enterprise-grade facilities, processing capabilities, and scale.
 *
 * Scope:
 * - Renders a Hero section, Facilities 3-column Grid, and a Data/Stats capabilities block.
 *
 * Critical Dependencies:
 * - Frontend: `framer-motion` for stagger animations. `lucide-react` for iconography.
 *
 * Security Constraints:
 * - Static UI rendering only. No external API fetching. Use relative paths or trusted Unsplash URLs.
 *
 * Non-Negotiables:
 * - Must strictly adhere to the `max-w-7xl` container to prevent edge-to-edge stretching.
 * - Design language must match the clean, enterprise theme (Brand Dark Green, Brand Primary Green).
 *
 * Change Intent:
 * - Created the page to fulfill missing infrastructure routes identified in the sitemap/nav.
 *
 * Future AI Guidance:
 * - Use the `StatBlock` component pattern if adding more statistical metrics. Keep imagery professional and industrial.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • Initial creation of the Infrastructure page.
 * • Implemented 3-column facilities grid using framer-motion stagger.
 * • Added Capabilities statistics block.
 * • 2026-02-25
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, FlaskConical, Warehouse, Settings, ShieldCheck, Leaf } from 'lucide-react';

const facilities = [
  {
    id: 1,
    title: 'Advanced Processing Units',
    icon: <Factory size={32} className="text-brand-primary mb-4" />,
    image: 'https://images.unsplash.com/photo-1580983554162-892f354f5a34?q=80&w=1000&auto=format&fit=crop',
    description: 'Equipped with cold-press extraction, spray drying, and sterilization technology to preserve the nutritional profile and organoleptic properties of every ingredient.'
  },
  {
    id: 2,
    title: 'Research & Development',
    icon: <FlaskConical size={32} className="text-brand-primary mb-4" />,
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop',
    description: 'In-house ISO-certified laboratories dedicated to active compound standardization, shelf-life testing, and custom formulation for global food and beverage brands.'
  },
  {
    id: 3,
    title: 'Global Warehousing',
    icon: <Warehouse size={32} className="text-brand-primary mb-4" />,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a71?q=80&w=1000&auto=format&fit=crop',
    description: 'Climate-controlled storage facilities strategically located to ensure a robust, uninterrupted supply chain and rapid fulfillment to enterprise clients worldwide.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
};

export default function InfrastructurePage() {
  return (
    <div className="bg-white min-h-screen">
      
      <section className="w-full bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-10 lg:py-12">
          <div className="max-w-3xl">
            <span className="inline-block border border-brand-line bg-brand-pastelGreen text-brand-dark text-[11px] font-bold tracking-widest uppercase px-3 py-1.5">Bridging Farm to Factory • 50,000 sq ft</span>
            <h1 className="text-[32px] lg:text-[40px] font-bold tracking-[-0.02em] text-brand-dark mt-4 leading-none">Engineering nature, at enterprise scale.</h1>
            <p className="text-sm text-gray-600 mt-3 leading-5">World-class processing bridging organic farming and global manufacturing. Cold-press, spray-drying and sterilization with in-house ISO labs.</p>
          </div>
        </div>
      </section>

      <section className="w-full py-10 lg:py-12 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          <div className="flex items-end justify-between gap-4 mb-6 border-b border-brand-border pb-4">
            <h2 className="text-[18px] font-bold tracking-[-0.01em] text-brand-dark">Our Facilities</h2>
            <span className="text-xs text-gray-500">500+ MT/yr • 80–120 mesh • &lt;45°C drying</span>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
          >
            {facilities.map((facility) => (
              <motion.div 
                key={facility.id} 
                variants={itemVariants}
                className="bg-white flex flex-col group"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-brand-border">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  {facility.icon}
                  <h3 className="text-brand-dark text-[16px] font-bold mt-3 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 leading-4 text-xs">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full py-8 bg-white border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-border border border-brand-border">
            
            <div className="flex flex-col items-center text-center p-6 bg-white">
              <Settings size={28} className="text-brand-primary mb-3" />
              <div className="text-[22px] font-bold tracking-tight text-brand-dark">50,000+</div>
              <div className="text-[11px] tracking-widest uppercase font-bold text-gray-500 mt-1">Sq. Ft. Processing Area</div>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white">
              <ShieldCheck size={28} className="text-brand-primary mb-3" />
              <div className="text-[22px] font-bold tracking-tight text-brand-dark">ISO 22000</div>
              <div className="text-[11px] tracking-widest uppercase font-bold text-gray-500 mt-1">Certified Facilities</div>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white">
              <Leaf size={28} className="text-brand-primary mb-3" />
              <div className="text-[22px] font-bold tracking-tight text-brand-dark">Zero-Waste</div>
              <div className="text-[11px] tracking-widest uppercase font-bold text-gray-500 mt-1">Sustainability Standard</div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}