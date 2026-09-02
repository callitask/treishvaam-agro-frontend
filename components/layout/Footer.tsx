import React from 'react';
import Link from 'next/link';
import { LogoFull } from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border">
      {/* Compliance strip - sharp, pastel */}
      <div className="border-b border-brand-border bg-brand-pastelGreen">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 py-3 flex flex-wrap gap-2 items-center text-[11px]">
          <span className="font-bold tracking-widest uppercase text-brand-dark">Compliance:</span>
          <span className="border border-brand-line bg-white px-2 py-1 font-semibold text-brand-dark">HACCP</span>
          <span className="border border-brand-line bg-white px-2 py-1 font-semibold text-brand-dark">ISO 22000</span>
          <span className="border border-brand-line bg-white px-2 py-1 font-semibold text-brand-dark">GMP</span>
          <span className="border border-brand-border bg-white px-2 py-1 font-medium text-gray-700">FSSAI</span>
          <span className="border border-[#F3E8B5] bg-brand-pastelGold px-2 py-1 font-semibold text-brand-dark">USDA Organic</span>
          <span className="ml-auto hidden lg:inline text-gray-600">Export docs: COA • Phytosanitary • Fumigation • MSDS per batch</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 xl:px-0 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center bg-white">
              <LogoFull size={52} />
            </Link>
            <p className="text-sm leading-5 text-gray-600 max-w-sm">
              Enterprise supplier of standardized fruit, vegetable and herbal powders. Direct farm procurement, low-temp processing, export-ready documentation.
            </p>
            <div className="border border-brand-border bg-white px-3 py-2 text-xs leading-4 text-gray-600">
              <span className="font-bold text-brand-dark">HQ</span> Bengaluru, Karnataka 560001<br />
              <span className="font-semibold">sales@treishvaamagro.com</span> • <a href="tel:+918178529633" className="hover:text-brand-dark">+91 8178 529 633</a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[11px] tracking-[0.12em] uppercase font-bold text-brand-dark">Company</h4>
            <Link href="/about" className="text-sm text-gray-600 hover:text-brand-dark">
              About Us
            </Link>
            <Link href="/infrastructure" className="text-sm text-gray-600 hover:text-brand-dark">
              Infrastructure
            </Link>
            <Link href="/quality" className="text-sm text-gray-600 hover:text-brand-dark">
              Quality Assurance
            </Link>
            <Link href="/sustainability" className="text-sm text-gray-600 hover:text-brand-dark">
              Sustainability
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[11px] tracking-[0.12em] uppercase font-bold text-brand-dark">Products</h4>
            <Link href="/products?category=Fruit%20Powders" className="text-sm text-gray-600 hover:text-brand-dark">
              Fruit Powders
            </Link>
            <Link href="/products?category=Vegetable%20Powders" className="text-sm text-gray-600 hover:text-brand-dark">
              Vegetable Powders
            </Link>
            <Link href="/products?category=Herbal%20Extracts" className="text-sm text-gray-600 hover:text-brand-dark">
              Herbal Extracts
            </Link>
            <Link href="/products?category=Organic%20Spices" className="text-sm text-gray-600 hover:text-brand-dark">
              Organic Spices
            </Link>
            <Link href="/products" className="text-sm font-semibold text-brand-dark mt-1">
              View all 24 →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] tracking-[0.12em] uppercase font-bold text-brand-dark">Enterprise</h4>
            <div className="border border-brand-border px-3 py-3 text-xs leading-4 text-gray-600">
              <div className="font-bold text-brand-dark">For procurement teams</div>
              MOQ 100 kg–50 MT • 14–21 day lead • 24h quote SLA
              <br />
              <Link href="/contact" className="inline-block mt-2 bg-brand-dark text-white text-xs font-bold px-4 py-2 border border-brand-dark">
                Request Bulk Quote
              </Link>
            </div>
            <div className="text-xs text-gray-500 leading-4">Treishvaam Group company. Audited annually. Certificates available as PDF.</div>
          </div>
        </div>

        <div className="mt-8 border-t border-brand-border pt-4 flex flex-col md:flex-row justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Treishvaam Agro. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-brand-dark">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-dark">
              Terms of Service
            </Link>
            <span className="hidden lg:inline">Made for B2B export • White • Sharp • Precise</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
