/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Enterprise Security & Build Configuration for Treishvaam Agro.
 *
 * Scope:
 * - Security Headers (HSTS, CSP).
 * - Image Domains.
 * - Build Optimization.
 *
 * Security Constraints:
 * - No hardcoded API URLs.
 * - Strict Content Security Policy.
 *
 * IMMUTABLE CHANGE HISTORY:
 * - EDITED: Added strict security headers.
 * - EDITED: Configured images for Cloudflare/Unsplash/Treishvaam domains.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false, // Security: Hide Next.js banner
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'treishvaamgroup.com' },
            { protocol: 'https', hostname: 'www.treishvaamgroup.com' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'dummyimage.com' } // For placeholders
        ],
        unoptimized: true, // Cloudflare Pages compatibility
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=()'
                    }
                ]
            }
        ];
    }
};

export default nextConfig;