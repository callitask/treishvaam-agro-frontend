import type { MetadataRoute } from 'next';
import { products } from '@/lib/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://treishvaamagro.com';
  const now = new Date();
  const routes = ['', '/products', '/quality', '/sustainability', '/infrastructure', '/contact', '/terms', '/privacy'].map((p) => ({
    url: `${base}${p || '/'}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : p === '/terms' || p === '/privacy' ? 0.3 : 0.8,
  }));
  const productRoutes = products.map((p) => ({
    url: `${base}/products/${p.id}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  return [...routes, ...productRoutes];
}
