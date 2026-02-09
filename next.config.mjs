/**
 * AI-CONTEXT:
 * Purpose: Next.js configuration for Static Export (SSG).
 * Scope: Build settings, image optimization, and security headers.
 * Critical Dependencies: Cloudflare Pages (requires 'export').
 * Security Constraints:
 * - images.unoptimized: true (Required for static export unless using external loader).
 * - No rewrites/redirects here (Use Cloudflare _redirects).
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Mandatory for Cloudflare Pages Static Export
  },
  trailingSlash: true, // Better for SEO and canonical URLs on static hosts
  reactStrictMode: true,
  poweredByHeader: false, // Security: Hide Next.js branding
  eslint: {
    ignoreDuringBuilds: true, // CI/CD handles linting separately
  },
};

export default nextConfig;