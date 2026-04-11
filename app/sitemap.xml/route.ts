/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Explicit Static Route Handler for Treishvaam Agro Sitemap Generation.
 *
 * Scope:
 * - Generates absolute canonical URLs for all static pages and dynamic product pages in valid XML.
 * - Instructs search engine crawlers (Googlebot) on site structure.
 *
 * Critical Dependencies:
 * - Frontend: Next.js App Router (app/sitemap.xml/route.ts convention).
 * - Backend/Data: @/lib/data/products for dynamic route parameters.
 * - Worker / SEO / Sitemap: Must output pure XML compatible with Cloudflare caching and GSC.
 *
 * Security Constraints:
 * - Base URL MUST be the absolute production canonical domain (https://tagro.treishvaamgroup.com).
 * - No internal proxy paths or backend URLs exposed here.
 *
 * Non-Negotiables:
 * - MUST export `dynamic = 'force-static'` to ensure physical file generation at edge build.
 * - MUST explicitly set the Content-Type header to application/xml.
 *
 * Change Intent:
 * - Replaced buggy `app/sitemap.ts` metadata abstraction with an explicit static API route to resolve silent build-time 404 drops in Next.js `output: export` architectures.
 *
 * Future AI Guidance:
 * - If new static directories are added (e.g., /investors), they must be appended to the staticRoutes array.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • Initial creation of sitemap.xml route handler mapping static and dynamic product routes.
 * • Why it was added: Resolves critical Google Search Console indexing failure and bypasses the Next.js Metadata Route export bug.
 * • 2026-04-12
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

import { products } from '@/lib/data/products';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://tagro.treishvaamgroup.com';

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/products',
    '/infrastructure',
    '/sustainability',
    '/quality'
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Map Static Routes
  staticRoutes.forEach((route) => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${route}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += `    <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>\n`;
    xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Map Dynamic Product Routes
  products.forEach((product) => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/products/${product.id}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate',
    },
  });
}