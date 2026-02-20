import React from 'react';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const formattedTitle = params.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="w-full py-16 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-sm text-brand-textMuted mb-10">
          <Link href="/products" className="hover:text-brand-green">Products</Link> / 
          <span className="text-brand-textDark font-medium ml-2">{formattedTitle}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="w-full aspect-square md:aspect-[4/3] bg-brand-green/5 rounded-2xl border border-brand-border flex items-center justify-center shadow-sm">
            <span className="text-brand-green/40 text-lg font-medium">High-Res Image: {formattedTitle}</span>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-semibold rounded-full uppercase tracking-wider">In Stock</span>
              <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-xs font-semibold rounded-full uppercase tracking-wider">Export Grade</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-brand-textDark mb-6 leading-tight">{formattedTitle}</h1>
            <p className="text-brand-textMuted text-lg leading-relaxed mb-8">
              Our premium {formattedTitle.toLowerCase()} is meticulously processed to ensure the highest retention of natural flavor, color, and nutritional value. Suitable for immediate enterprise application.
            </p>

            <h3 className="text-xl font-semibold text-brand-textDark mb-4">Technical Specifications</h3>
            <ul className="flex flex-col gap-3 mb-10 text-brand-textMuted">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Moisture Content: &lt; 5%</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Mesh Size: 80 - 100 mesh</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Shelf Life: 24 Months</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span> Origin: Sourced strictly from verified partner farms</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-brand-gold hover:bg-brand-goldHover text-white font-medium px-8 py-3.5 rounded-full transition-colors text-center shadow-md">
                Request Sample & Quote
              </Link>
              <button className="bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green/5 font-medium px-8 py-3.5 rounded-full transition-colors text-center">
                Download COA (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}