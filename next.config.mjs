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
 * - Bypassing OpenNext SSR incompatibility by returning to pure Static HTML Export.
 *
 * Future AI Guidance:
 * - Do not remove the export output directive. The enterprise architecture mandates Cloudflare serves cached static pages.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • output: "export"
 * • images.unoptimized: true
 * • AI-Context block
 * • 2026-04-09
 *
 * - REMOVED:
 * • Deprecated eslint config keys that caused warnings.
 * • Why removal was safe: Build pipelines handle linting separately.
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;