import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Request Bulk Quote | Treishvaam Agro',
  description: 'Request enterprise bulk pricing, COA, and spec sheets. Avg response 6 hours. Trusted by 25+ export markets. FSSAI, ISO, HACCP, USDA Organic certified.',
};

export default function ContactPage() {
  return (
    <div className="w-full py-10 lg:py-12 px-6 bg-white min-h-screen border-t border-brand-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        <div className="lg:col-span-2 flex flex-col">
          <span className="inline-block border border-brand-line bg-brand-pastelGreen text-brand-dark text-[11px] font-bold tracking-widest uppercase px-3 py-1.5">Enterprise Sales • 24h Quote SLA</span>
          <h1 className="text-[32px] font-bold tracking-[-0.02em] text-brand-dark mt-4 leading-none">Partner with us</h1>
          <p className="text-sm text-gray-600 leading-5 mt-3">
            Technical specifications, custom formulations or bulk pricing — COA, spec sheets and FOB quotes within 24 hours.
          </p>

          <div className="bg-white p-6 border border-brand-border flex flex-col gap-6 mt-6">
            <div>
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-brand-dark">Corporate Office</h4>
              <p className="text-sm text-gray-700 mt-2 leading-4">Treishvaam Agro Pvt. Ltd.<br/>123 Agricultural Park, Block A<br/>Bengaluru, Karnataka 560001<br/><span className="text-gray-500 text-xs">GSTIN Available on Quote</span></p>
            </div>
            <div className="pt-4 border-t border-brand-border">
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-brand-dark">Direct Contact</h4>
              <p className="text-sm text-gray-700 mt-2 leading-4"><a href="mailto:sales@treishvaamagro.com" className="hover:text-brand-dark">sales@treishvaamagro.com</a><br/><a href="tel:+918178529633" className="hover:text-brand-dark">+91 8178 529 633</a><br/><span className="text-gray-500 text-xs">Mon–Fri 9am–6pm IST • Sat 10am–2pm</span></p>
            </div>
            <div className="pt-4 border-t border-brand-border">
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-brand-dark">Export Compliance</h4>
              <p className="text-xs text-gray-600 mt-2">FSSAI • HACCP • ISO 22000 • GMP • USDA Organic • Halal • Kosher</p>
              <p className="text-[11px] text-gray-500 mt-1">COA, MSDS, Allergen on request • Phytosanitary cert for exports</p>
            </div>
          </div>

          <div className="bg-brand-pastelGreen border border-brand-line p-5 mt-4">
            <h4 className="font-bold text-brand-dark text-sm">Prefer email?</h4>
            <p className="text-xs text-gray-700 mt-1 leading-4">Send RFQ spreadsheet to sales@treishvaamagro.com with HS codes and destination for fastest freight estimate.</p>
            <a href="mailto:sales@treishvaamagro.com" className="inline-block mt-3 bg-brand-dark text-white text-xs font-bold px-5 py-2.5 border border-brand-dark hover:bg-white hover:text-brand-dark">Email RFQ Directly</a>
          </div>
        </div>

        <div className="lg:col-span-3 border border-brand-border p-6 bg-white">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}