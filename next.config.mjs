/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Next.js build configuration enforcing strict Static Site Generation (SSG).
 *
 * Scope:
 * - Controls compiler output and image optimization rules.
 * - What it must never be responsible for: Server-side rendering (SSR) routing.
 *
 * Critical Dependencies:
 * - Cloudflare Pages (requires 'out' directory for static hosting).
 * - Edge Worker (tagro-seo-worker) handles dynamic routing, not Next.js.
 *
 * Security Constraints:
 * - MUST remain a purely static export to prevent Node.js runtime vulnerabilities.
 *
 * Non-Negotiables:
 * - output: "export" MUST remain.
 * - images: { unoptimized: true } MUST remain for static export compatibility.
 *
 * Change Intent:
 * - Explicitly enforcing SSG to bypass the OpenNext Cloudflare deployment loop.
 * - Configured remotePatterns for images.unsplash.com to resolve external asset loading blockages.
 *
 * Future AI Guidance:
 * - Do not remove the export output directive. The enterprise architecture mandates Cloudflare serves cached static pages.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • output: "export"
 * • images.unoptimized: true
 * • AI-Context block
 * • 2026-04-10
 *
 * - EDITED:
 * • Added remotePatterns array to images configuration.
 * • Why the edit was required: To whitelist Unsplash image domains and prevent fetch errors in browser/GSC.
 * • 2026-04-11
 *
 * - REMOVED:
 * • Deprecated eslint config keys that caused warnings.
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;