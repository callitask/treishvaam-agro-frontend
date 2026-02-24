/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Global Navigation Component for Treishvaam Agro.
 * - Implements the enterprise dual-tier architecture (Top Bar + Main Navigation) and Mega-Menu.
 *
 * Scope:
 * - Handles client-side scroll state for sticky header transitions.
 * - Handles hover intent and routing.
 * - MUST remain visually isolated and self-contained.
 *
 * Critical Dependencies:
 * - Frontend: Relies on `framer-motion` for enterprise-grade easing curves and `lucide-react` for SVG icons.
 * - Worker / SEO / Sitemap: Navigation links must remain semantic `<a>` tags via Next.js `<Link>` for crawler continuity.
 *
 * Security Constraints:
 * - Links must be purely relative. No hardcoded environment origins.
 *
 * Non-Negotiables:
 * - Must precisely follow the 32px (Top Bar) and 80px (Main Nav) height specs.
 * - Sticky drop-shadow must trigger exactly after scrolling past the Top Bar.
 * - Content MUST be constrained within max-w-7xl to prevent edge-to-edge stretching.
 *
 * Change Intent:
 * - Fixed layout stretching by wrapping inner contents in max-w-7xl containers.
 *
 * Future AI Guidance:
 * - If adding new routes, simply append to the `navLinks` constant. Do not refactor the scroll listener logic.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Completely rebuilt to support two-tier architecture.
 * • Added scroll listener for sticky state z-index layering (z-30).
 * • Added Framer Motion for mega-menu transitions.
 * • Fixed edge-to-edge stretching by adding max-w-7xl constraints.
 * • 2026-02-24
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Globe, ChevronDown, Menu, X } from 'lucide-react';

const productsMenu = [
  { name: 'Fruit Powders', href: '/products?category=fruit' },
  { name: 'Vegetable Powders', href: '/products?category=vegetable' },
  { name: 'Herbal Extracts', href: '/products?category=herbal' },
  { name: 'Organic Spices', href: '/products?category=spices' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let timeoutId: NodeJS.Timeout;
  const handleMouseEnter = (menu: string) => {
    clearTimeout(timeoutId);
    setActiveDropdown(menu);
  };
  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header className="w-full flex flex-col z-50">
      {/* Top Bar - 32px Height, Dark Green */}
      <div className="bg-brand-dark h-[32px] w-full hidden md:block border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto h-full px-6 xl:px-0 flex items-center justify-between text-xs font-medium text-white/90">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-brand-accent transition-colors duration-150 cursor-pointer">
              <Mail size={14} />
              <span>sales@treishvaamagro.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-brand-accent transition-colors duration-150 cursor-pointer">
              <Phone size={14} />
              <span>+91 1800-AGRO-123</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer hover:text-brand-accent transition-colors duration-150">
              <Globe size={14} />
              <span>EN</span>
            </div>
            <Link href="/client-portal" className="hover:text-brand-accent transition-colors duration-150">
              Client Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation - 80px Height */}
      <div className={`w-full bg-white transition-all duration-300 z-30 ${isScrolled ? 'fixed top-0 left-0 shadow-sticky' : 'relative'}`}>
        <nav className="max-w-7xl mx-auto h-[80px] flex items-center justify-between px-6 xl:px-0">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded flex items-center justify-center text-white font-bold text-xl">
              T
            </div>
            <span className="text-brand-dark font-bold text-2xl tracking-tight hidden sm:block">
              Treishvaam <span className="text-brand-primary">Agro</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center h-full gap-8">
            <Link 
              href="/" 
              className={`text-sm font-semibold transition-colors duration-150 h-full flex items-center border-b-2 ${pathname === '/' ? 'text-brand-primary border-brand-primary' : 'text-gray-700 border-transparent hover:text-brand-primary'}`}
            >
              Home
            </Link>
            
            {/* Products Mega Menu Trigger */}
            <div 
              className="h-full flex items-center relative"
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-150 h-full border-b-2 ${pathname.startsWith('/products') ? 'text-brand-primary border-brand-primary' : 'text-gray-700 border-transparent hover:text-brand-primary'}`}>
                Products <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute top-[80px] -left-4 w-[400px] bg-white shadow-mega-menu rounded-b-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-6 grid grid-cols-2 gap-4">
                      {productsMenu.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href}
                          className="p-3 rounded-lg hover:bg-brand-secondary text-sm font-medium text-gray-800 hover:text-brand-dark transition-colors duration-150"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="bg-gray-50 p-4 border-t border-gray-100">
                      <Link href="/products" className="text-brand-primary text-sm font-semibold flex items-center hover:underline">
                        View all products &rarr;
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/infrastructure" 
              className={`text-sm font-semibold transition-colors duration-150 h-full flex items-center border-b-2 ${pathname === '/infrastructure' ? 'text-brand-primary border-brand-primary' : 'text-gray-700 border-transparent hover:text-brand-primary'}`}
            >
              Infrastructure
            </Link>
            <Link 
              href="/quality" 
              className={`text-sm font-semibold transition-colors duration-150 h-full flex items-center border-b-2 ${pathname === '/quality' ? 'text-brand-primary border-brand-primary' : 'text-gray-700 border-transparent hover:text-brand-primary'}`}
            >
              Quality & Certs
            </Link>
            <Link 
              href="/sustainability" 
              className={`text-sm font-semibold transition-colors duration-150 h-full flex items-center border-b-2 ${pathname === '/sustainability' ? 'text-brand-primary border-brand-primary' : 'text-gray-700 border-transparent hover:text-brand-primary'}`}
            >
              Sustainability
            </Link>
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/contact" 
              className="bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-bold text-sm px-6 py-2.5 rounded-enterprise transition-all duration-150 shadow-resting hover:shadow-lifted"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-dark p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden z-50 shadow-mega-menu"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link href="/" className="text-gray-800 font-semibold py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/products" className="text-gray-800 font-semibold py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Products</Link>
              <Link href="/infrastructure" className="text-gray-800 font-semibold py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Infrastructure</Link>
              <Link href="/quality" className="text-gray-800 font-semibold py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Quality & Certs</Link>
              <Link href="/sustainability" className="text-gray-800 font-semibold py-2 border-b border-gray-50" onClick={() => setMobileMenuOpen(false)}>Sustainability</Link>
              <Link href="/contact" className="text-center bg-brand-accent text-brand-dark font-bold py-3 mt-4 rounded-enterprise" onClick={() => setMobileMenuOpen(false)}>
                Request Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}