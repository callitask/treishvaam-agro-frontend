import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-6 text-center">
      <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-3">404 — Not Found</span>
      <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 tracking-tight">We couldn&apos;t find that resource</h1>
      <p className="text-brand-textMuted max-w-xl mb-10">
        The page or product you&apos;re looking for may have moved, or you may need higher access. Browse our catalog or contact enterprise sales.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/products" className="bg-brand-primary hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-enterprise transition-colors">
          Browse Products
        </Link>
        <Link href="/contact" className="bg-white border border-brand-border hover:bg-brand-surface-off text-brand-dark font-semibold px-8 py-3 rounded-enterprise transition-colors">
          Contact Sales
        </Link>
      </div>
    </div>
  );
}
