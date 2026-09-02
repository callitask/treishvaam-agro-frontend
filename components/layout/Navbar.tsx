'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import RfqCart from '@/components/rfq/RfqCart';
import { LogoFull } from '@/components/ui/Logo';

const productsMenu = [
  { name: 'Fruit Powders', href: '/products?category=Fruit%20Powders' },
  { name: 'Vegetable Powders', href: '/products?category=Vegetable%20Powders' },
  { name: 'Herbal Extracts', href: '/products?category=Herbal%20Extracts' },
  { name: 'Organic Spices', href: '/products?category=Organic%20Spices' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const pathname = usePathname();

  const linkBase = 'text-[13px] font-semibold tracking-[0.02em] h-full flex items-center border-b-2 transition-colors';
  const active = 'text-brand-dark border-brand-dark';
  const idle = 'text-gray-600 border-transparent hover:text-brand-dark hover:border-brand-border';

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-brand-border">
      {/* Top bar - sharp, white, pastel, precise - no dark */}
      <div className="hidden md:block border-b border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-6 xl:px-0 h-[32px] flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-600">
              <Mail size={12} className="text-brand-primary" /> sales@treishvaamagro.com
            </span>
            <span className="w-px h-3 bg-brand-border" />
            <a href="tel:+918178529633" className="flex items-center gap-1.5 text-gray-600 hover:text-brand-dark">
              <Phone size={12} className="text-brand-primary" /> +91 8178 529 633
            </a>
            <span className="hidden lg:inline w-px h-3 bg-brand-border" />
            <span className="hidden lg:inline text-gray-500">Exports: <span className="font-semibold text-brand-dark">USA • EU • GCC • ASEAN</span></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="border border-brand-line bg-brand-pastelGreen text-brand-dark px-2 py-1 text-[10px] font-bold tracking-widest uppercase">HACCP • ISO 22000</span>
            <span className="border border-[#F3E8B5] bg-brand-pastelGold text-brand-dark px-2 py-1 text-[10px] font-bold tracking-widest uppercase">USDA Organic</span>
            <Link href="/client-portal" className="text-gray-600 hover:text-brand-dark font-semibold ml-2">Client Login →</Link>
          </div>
        </div>
      </div>

      {/* Main nav — height = logo (56) + 4px pad = 60, no overflow */}
      <div className="bg-white">
        <nav className="max-w-7xl mx-auto h-[60px] flex items-center justify-between px-6 xl:px-0">
          <Link href="/" className="flex items-center bg-white h-[60px] py-1">
            <LogoFull size={52} />
          </Link>

          <div className="hidden lg:flex items-center h-full gap-6">
            <Link href="/" className={`${linkBase} ${pathname === '/' ? active : idle}`}>
              Home
            </Link>
            <div
              className="h-full flex items-center relative"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <button className={`${linkBase} gap-1 ${pathname.startsWith('/products') ? active : idle}`}>
                Products <ChevronDown size={14} className={`${activeDropdown ? 'rotate-180' : ''} transition-transform`} />
              </button>
              {activeDropdown && (
                <div className="absolute top-[72px] left-0 w-[420px] bg-white border border-brand-border shadow-mega-menu">
                  <div className="grid grid-cols-2 gap-px bg-brand-border">
                    {productsMenu.map((item) => (
                      <Link key={item.name} href={item.href} className="bg-white p-4 text-[13px] font-semibold text-brand-dark hover:bg-brand-pastelGreen hover:text-brand-dark">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="bg-white border-t border-brand-border px-4 py-3 flex items-center justify-between">
                    <Link href="/products" className="text-sm font-bold text-brand-dark">
                      View all 12 products →
                    </Link>
                    <span className="text-[11px] text-gray-500">COA • Spec • MSDS</span>
                  </div>
                </div>
              )}
            </div>
            <Link href="/infrastructure" className={`${linkBase} ${pathname === '/infrastructure' ? active : idle}`}>
              Infrastructure
            </Link>
            <Link href="/quality" className={`${linkBase} ${pathname === '/quality' ? active : idle}`}>
              Quality & Certs
            </Link>
            <Link href="/sustainability" className={`${linkBase} ${pathname === '/sustainability' ? active : idle}`}>
              Sustainability
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <RfqCart />
            <Link href="/contact" className="bg-brand-dark text-white text-[13px] font-bold tracking-wide px-5 py-2.5 border border-brand-dark hover:bg-white hover:text-brand-dark transition-colors">
              Request Quote
            </Link>
          </div>

          <button className="lg:hidden p-2 border border-brand-border" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-border bg-white">
          <div className="flex flex-col">
            <Link href="/" className="px-6 py-4 border-b border-brand-border text-sm font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="px-6 py-4 border-b border-brand-border text-sm font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/infrastructure" className="px-6 py-4 border-b border-brand-border text-sm font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Infrastructure
            </Link>
            <Link href="/quality" className="px-6 py-4 border-b border-brand-border text-sm font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Quality & Certs
            </Link>
            <Link href="/sustainability" className="px-6 py-4 border-b border-brand-border text-sm font-semibold" onClick={() => setMobileMenuOpen(false)}>
              Sustainability
            </Link>
            <div className="p-4 flex flex-col gap-2 bg-brand-pastelGreen border-t border-brand-line">
              <Link href="/contact" className="text-center bg-brand-dark text-white font-bold py-3 border border-brand-dark" onClick={() => setMobileMenuOpen(false)}>
                Request Quote
              </Link>
              <div className="flex justify-center">
                <RfqCart />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
