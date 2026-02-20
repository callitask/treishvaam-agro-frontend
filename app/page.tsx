import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProductShowcase from '@/components/home/ProductShowcase';
import ProcessTimeline from '@/components/ui/ProcessTimeline';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <ProcessTimeline />
      
      <section className="w-full bg-brand-offWhite py-24 px-6 text-center border-t border-brand-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-textDark mb-6">Ready to Elevate Your Supply Chain?</h2>
          <p className="text-brand-textMuted text-lg mb-10">
            Partner with us for reliable, high-volume delivery of certified natural ingredients.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-brand-gold hover:bg-brand-goldHover text-white font-medium px-10 py-4 rounded-full transition-colors text-lg shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            Contact Our Enterprise Team
          </a>
        </div>
      </section>
    </>
  );
}