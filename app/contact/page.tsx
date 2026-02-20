import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Treishvaam Agro',
  description: 'Get in touch for enterprise bulk orders and sample requests.',
};

export default function ContactPage() {
  return (
    <div className="w-full py-20 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-textDark mb-6 tracking-tight">Partner With Us</h1>
          <p className="text-brand-textMuted text-lg mb-10">
            Whether you need technical specifications, custom formulations, or bulk volume pricing, our enterprise team is ready to assist.
          </p>

          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-2">Corporate Office</h4>
              <p className="text-brand-textDark font-medium">Treishvaam Agro Pvt. Ltd.<br/>Bengaluru, Karnataka, India</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-2">Direct Contact</h4>
              <p className="text-brand-textDark font-medium">info@treishvaamagro.com<br/>+91 800 123 4567</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-2">Business Hours</h4>
              <p className="text-brand-textDark font-medium">Monday - Friday<br/>9:00 AM - 6:00 PM (IST)</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-offWhite p-8 md:p-10 rounded-2xl border border-brand-border shadow-sm">
          {/* Removed onSubmit to keep this a Server Component for SEO */}
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-textDark">First Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/50" placeholder="John" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-brand-textDark">Last Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-md border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/50" placeholder="Doe" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-brand-textDark">Work Email *</label>
              <input type="email" className="w-full px-4 py-3 rounded-md border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/50" placeholder="john@company.com" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-brand-textDark">Company Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-md border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/50" placeholder="Acme Corp" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-brand-textDark">Requirement Details *</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-brand-border bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/50 resize-none" placeholder="Please mention products and estimated volume..." required></textarea>
            </div>

            {/* Changed type to "button" to prevent full page reload on click during static mockup phase */}
            <button type="button" className="mt-2 bg-brand-gold hover:bg-brand-goldHover text-white font-medium px-8 py-3.5 rounded-full transition-colors shadow-md w-full sm:w-auto self-start">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}