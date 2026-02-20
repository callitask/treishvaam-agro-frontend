/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Hero banner.
 *
 * Scope:
 * - Main value proposition, background image, primary CTAs.
 *
 * IMMUTABLE CHANGE HISTORY:
 * - ADDED:
 * • Video-aligned layout.
 * • 2026-02-10.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] lg:h-[750px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black/80 to-transparent bg-cover bg-center" 
             style={{ backgroundImage: 'url("https://placehold.co/1920x1080/1A4D2E/FFF?text=Farm+Background")' }}>
             {/* Replace this URL with actual high-res farm/product image */}
        </div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="flex items-center space-x-2 mb-6">
             <span className="bg-naturals-gold-500 text-naturals-green-900 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider">
               Premium Natural Ingredients
             </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Premium Natural Ingredients <br />
            <span className="text-naturals-gold-500">for Global Industries</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 max-w-2xl">
            From Farm to Powder — Manufacturing Excellence in Fruit & Vegetable Powders for the world's leading food brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-naturals-gold-500 hover:bg-naturals-gold-600 text-naturals-green-900 font-bold px-8 h-14 text-lg">
              <Link href="/contact">Request a Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-naturals-green-900 font-bold px-8 h-14 text-lg">
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}