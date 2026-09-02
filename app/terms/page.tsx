import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Treishvaam Agro',
  description: 'Terms of Service for Treishvaam Agro — enterprise B2B supply of agricultural powders. Governs use of website, quotations, orders, and documentation.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white border-t border-brand-border">
      <div className="max-w-3xl mx-auto px-6 xl:px-0 py-10 lg:py-12">
        <div className="border border-brand-border bg-white p-6">
          <div className="text-[11px] tracking-[0.12em] uppercase font-bold border border-brand-line bg-brand-pastelGreen inline-block px-2.5 py-1">Legal • Enterprise</div>
          <h1 className="text-[28px] font-bold tracking-[-0.02em] text-brand-dark mt-3">Terms of Service</h1>
          <p className="text-xs text-gray-500 mt-2">Effective date: 2 September 2026 • Treishvaam Agro Pvt. Ltd., Bengaluru, Karnataka, India</p>
          <p className="text-sm text-gray-600 mt-4 leading-5">
            These Terms govern your access to and use of <span className="font-semibold text-brand-dark">treishvaamagro.com</span> and related services for B2B procurement. By accessing the site, you agree to these Terms. If you do not agree, do not use the site.
          </p>
        </div>

        <div className="mt-6 space-y-6 text-sm leading-5 text-gray-700">
          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">1. Enterprise Use & Quotations</h2>
            <p className="mt-2 text-gray-600">All product information, specifications, MOQs, lead times, and bulk pricing are for B2B evaluation. Quotations issued via email or RFQ are non-binding until confirmed by a formal proforma invoice. Prices are FOB India unless stated as CIF/EXW and are subject to change with raw material, freight, and regulatory conditions.</p>
          </section>

          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">2. Orders, Payment & Export</h2>
            <p className="mt-2 text-gray-600">Orders are confirmed only upon written acceptance and advance payment as per proforma. Export documentation (COA, phytosanitary, fumigation, MSDS where applicable) is provided per shipment. Buyer is responsible for import licences, duties, and compliance in the destination country. Payment terms are as stated on the invoice (typically T/T or L/C).</p>
          </section>

          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">3. Intellectual Property</h2>
            <p className="mt-2 text-gray-600">All content on this site — including the Treishvaam Agro logo, product photography, specifications, and copy — is owned by Treishvaam Agro or its licensors. You may not reproduce, distribute, or create derivative works without prior written permission, except for internal procurement evaluation.</p>
          </section>

          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">4. Disclaimer & Limitation of Liability</h2>
            <p className="mt-2 text-gray-600">Information is provided for general B2B informational purposes. While we strive for accuracy in specifications and certifications, you should verify critical parameters via the official COA and spec sheet for your lot. To the fullest extent permitted by law, Treishvaam Agro is not liable for indirect, incidental, or consequential damages arising from use of the site or products.</p>
          </section>

          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">5. Governing Law & Contact</h2>
            <p className="mt-2 text-gray-600">These Terms are governed by the laws of India. Courts at Bengaluru, Karnataka shall have jurisdiction for any disputes. For legal notices, contact: <a href="mailto:sales@treishvaamagro.com" className="underline font-semibold text-brand-dark">sales@treishvaamagro.com</a> with subject “Legal — Terms”. This page does not constitute legal advice; consult counsel for specific matters.</p>
            <p className="mt-3 text-xs text-gray-500">This is a template. Replace effective date and entity details with your registered legal information before final publication. Do not rely on hypothetical data.</p>
          </section>

          <div className="border border-brand-line bg-brand-pastelGreen p-4 text-xs text-gray-700">
            Questions? <Link href="/contact" className="font-bold text-brand-dark underline">Contact Enterprise Sales</Link> • See also <Link href="/privacy" className="font-bold text-brand-dark underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
