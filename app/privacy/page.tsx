import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Treishvaam Agro',
  description: 'Privacy Policy for Treishvaam Agro — how we handle B2B inquiry data, cookies, and communications for enterprise procurement.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-white border-t border-brand-border">
      <div className="max-w-3xl mx-auto px-6 xl:px-0 py-10 lg:py-12">
        <div className="border border-brand-border bg-white p-6">
          <div className="text-[11px] tracking-[0.12em] uppercase font-bold border border-brand-line bg-brand-pastelGreen inline-block px-2.5 py-1">Legal • Enterprise</div>
          <h1 className="text-[28px] font-bold tracking-[-0.02em] text-brand-dark mt-3">Privacy Policy</h1>
          <p className="text-xs text-gray-500 mt-2">Effective date: 2 September 2026 • Contact: sales@treishvaamagro.com • +91 8178 529 633</p>
          <p className="text-sm text-gray-600 mt-4 leading-5">
            This Policy describes how Treishvaam Agro Pvt. Ltd. (“we”, “us”) processes information when you use <span className="font-semibold text-brand-dark">treishvaamagro.com</span> for B2B inquiries. We process only what is necessary for enterprise communication and do not sell personal information.
          </p>
        </div>

        <div className="mt-6 space-y-6 text-sm leading-5 text-gray-700">
          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">1. Information We Receive</h2>
            <ul className="mt-2 list-disc ml-5 space-y-1 text-gray-600">
              <li><span className="font-semibold text-brand-dark">Inquiry data you provide:</span> name, work email, company, phone, country, product interest, quantity, and message via RFQ or contact forms.</li>
              <li><span className="font-semibold text-brand-dark">Technical data:</span> IP address, device, and pages viewed — used for security, analytics, and to serve the site.</li>
              <li><span className="font-semibold text-brand-dark">Cookies:</span> essential cookies for site function and, if enabled, analytics cookies to understand B2B usage in aggregate.</li>
            </ul>
          </section>

          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">2. How We Use It</h2>
            <ul className="mt-2 list-disc ml-5 space-y-1 text-gray-600">
              <li>To respond to RFQs, share COAs/spec sheets, and issue quotations.</li>
              <li>To improve the catalog, sitemap, and site performance for enterprise buyers.</li>
              <li>To comply with legal obligations and prevent fraud.</li>
            </ul>
            <p className="mt-2 text-gray-600">We do not use your inquiry data for consumer profiling or automated decision-making.</p>
          </section>

          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">3. Sharing & Retention</h2>
            <p className="mt-2 text-gray-600">We share data only with service providers necessary to operate the site (e.g., hosting on Cloudflare Pages, email delivery) under confidentiality. We do not sell your data. We retain inquiry data only as long as needed for the business purpose or as required by law, after which it is deleted or anonymized.</p>
          </section>

          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">4. Your Choices & Rights</h2>
            <ul className="mt-2 list-disc ml-5 space-y-1 text-gray-600">
              <li>You may request access, correction, or deletion of your inquiry data by emailing <a href="mailto:sales@treishvaamagro.com" className="underline font-semibold text-brand-dark">sales@treishvaamagro.com</a>.</li>
              <li>You may disable non-essential cookies in your browser; essential cookies are required for the site to function.</li>
              <li>You may opt out of non-essential communications at any time.</li>
            </ul>
          </section>

          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">5. Security & International Transfers</h2>
            <p className="mt-2 text-gray-600">We use reasonable administrative and technical measures to protect data. If you access the site from outside India, your information may be processed in India or in the hosting provider’s regions, subject to applicable safeguards.</p>
          </section>

          <section className="border border-brand-border bg-white p-5">
            <h2 className="text-sm font-bold text-brand-dark">6. Updates & Contact</h2>
            <p className="mt-2 text-gray-600">We may update this Policy to reflect operational or legal changes. The effective date above will be revised. For questions, contact: <a href="mailto:sales@treishvaamagro.com" className="underline font-semibold text-brand-dark">sales@treishvaamagro.com</a>.</p>
            <p className="mt-3 text-xs text-gray-500">This template does not include hypothetical identifiers (e.g., GSTIN, registration numbers) and should be reviewed by counsel before final publication.</p>
          </section>

          <div className="border border-brand-line bg-brand-pastelGreen p-4 text-xs text-gray-700">
            See also <Link href="/terms" className="font-bold text-brand-dark underline">Terms of Service</Link> • For RFQs, use <Link href="/contact" className="font-bold text-brand-dark underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
