/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Tailwind CSS configuration file to orchestrate the global design system.
 *
 * Scope:
 * - Defines typography, color palette, spacing scale, and border radius tokens.
 * - Scans local files to generate a minimal, optimized CSS payload.
 *
 * Critical Dependencies:
 * - Next.js build pipeline (PostCSS).
 *
 * Security Constraints:
 * - Must not execute arbitrary runtime JavaScript. Static configuration only.
 *
 * Non-Negotiables:
 * - The `content` array MUST explicitly target `./app` and `./components`. If missed, the site renders unstyled.
 *
 * Change Intent:
 * - Fixed production UI bug where Tailwind failed to compile classes into the CSS payload due to missing content paths.
 *
 * Future AI Guidance:
 * - Do not remove paths from the content array. Add to it if new directories (like /src or /pages) are introduced.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Explicitly defined content paths for `app/**/*.{ts,tsx}` and `components/**/*.{ts,tsx}`.
 * • Why the edit was required: The live Cloudflare Pages deployment served HTML without CSS because Tailwind could not locate the component files during the build phase.
 * • 2026-04-10
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;