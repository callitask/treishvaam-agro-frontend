import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '24 B2B Powders Catalog — Fruit, Vegetable, Herbal & Spices | Bulk FOB India',
  description: 'Browse 24 enterprise-grade fruit powders, vegetable powders, herbal extracts & organic spices. Bulk tiers 100kg–20MT, HS codes, COA 12 params, HACCP ISO USDA. FOB Mundra/NHAVA, 25+ export markets.',
  keywords: ['B2B catalog', 'fruit powder bulk', 'vegetable powder', 'herbal extract', 'organic spices', 'bulk FOB India', 'HS code', 'COA'],
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Treishvaam Agro Catalog — 24 B2B Powders',
    description: '24 powders for food, beverage & nutraceutical manufacturing. Bulk FOB, COA per batch.',
    url: '/products',
    type: 'website',
  },
};
export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
