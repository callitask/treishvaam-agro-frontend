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
    <div className="bg-white min-h-screen pb-24">
      
      {/* Infrastructure Hero */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-brand-dark">
        <img 
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
          alt="Industrial agricultural processing facility" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-brand-dark/90 z-10" />
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 xl:px-0 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Engineering Nature.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-200 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed"
          >
            World-class manufacturing and processing facilities designed to bridge the gap between organic farming and enterprise scale.
          </motion.p>
        </div>
      </section>

      {/* 3-Column Facilities Grid */}
      <section className="w-full py-24 bg-brand-surface-off">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          <div className="text-center mb-16">
            <h2 className="text-brand-dark text-3xl md:text-4xl font-bold mb-4">Our Facilities</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full" />
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
          >
            {facilities.map((facility) => (
              <motion.div 
                key={facility.id} 
                variants={itemVariants}
                className="bg-white rounded-card overflow-hidden shadow-resting border border-gray-100 flex flex-col group"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  {facility.icon}
                  <h3 className="text-brand-dark text-2xl font-bold mb-3">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities Stats Block */}
      <section className="w-full py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <Settings size={40} className="text-brand-accent mb-4" />
              <h4 className="text-4xl font-bold mb-2">50,000+</h4>
              <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Sq. Ft. Processing Area</p>
            </div>
            
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <ShieldCheck size={40} className="text-brand-accent mb-4" />
              <h4 className="text-4xl font-bold mb-2">ISO 22000</h4>
              <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Certified Facilities</p>
            </div>
            
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <Leaf size={40} className="text-brand-accent mb-4" />
              <h4 className="text-4xl font-bold mb-2">Zero-Waste</h4>
              <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Sustainability Standard</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}