export default function StatsStrip() {
  return (
    <section className="w-full bg-white border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 xl:px-0">
        <div className="border-x border-b border-brand-border bg-brand-pastelGreen px-4 py-2.5 flex flex-wrap gap-4 items-center justify-between text-[11px]">
          <span className="font-semibold tracking-widest uppercase text-brand-dark">Quality Assured • HACCP • ISO 22000 • GMP • FSSAI • USDA Organic • Halal • Kosher</span>
          <span className="text-gray-600 hidden lg:inline">Pesticide & heavy-metal reports per batch on request</span>
        </div>
      </div>
    </section>
  );
}
