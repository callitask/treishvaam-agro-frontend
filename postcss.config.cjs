/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - PostCSS configuration for processing Tailwind CSS and Autoprefixer.
 *
 * Scope:
 * - Build-time CSS processing.
 *
 * Security Constraints:
 * - N/A
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • Migrated from CommonJS (.js) to ESM (.mjs)
 * • Why it was added: To comply with Turbopack and OpenNext build requirements on Cloudflare Pages.
 * • 2026-04-09
 */

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};