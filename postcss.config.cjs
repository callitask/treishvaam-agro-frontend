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
 * - EDITED & RENAMED:
 * • Migrated from ESM (.mjs) to CommonJS (.cjs).
 * • 2026-04-11
 *
 * - EDITED:
 * • Replaced `export default` with `module.exports` to strictly comply with Node.js CommonJS syntax requirements and prevent the `Unexpected token 'export'` build crash.
 * • 2026-04-11
 */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};