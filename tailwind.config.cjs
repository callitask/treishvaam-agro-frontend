/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Centralized design token system configuration for Treishvaam Agro.
 * - Integrates the exact Naturals & Pure enterprise color palette, typography scale, and shadow systems.
 *
 * Scope:
 * - Defines all Tailwind utility classes, colors, spacing, and animations for the UI.
 * - Must NOT contain any hardcoded logic, API paths, or infrastructure details.
 *
 * Critical Dependencies:
 * - Frontend: Consumed globally by all Next.js React components via Tailwind classes.
 *
 * Security Constraints:
 * - Purely presentation logic. Zero security risk surface.
 *
 * Non-Negotiables:
 * - Must remain a .cjs file. The Next.js environment on Cloudflare Pages requires CommonJS to synchronously parse the plugin array and generate the CSS output without failing silently.
 *
 * Change Intent:
 * - Asserting strict CommonJS syntax to resolve Cloudflare compilation failures.
 *
 * Future AI Guidance:
 * - Do not convert back to .ts or .mjs unless a dedicated transpiler is added to the build pipeline.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED & RENAMED:
 * • Converted to CommonJS (.cjs) and replaced `import` with `require("tailwindcss-animate")`.
 * • 2026-04-11
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          dark: '#1F4524',
          primary: '#4A7C44',
          secondary: '#E8F0E7',
          accent: '#E5B824',
          'accent-hover': '#D4A71A',
          surface: '#FFFFFF',
          'surface-off': '#FFFFFF',
          line: '#E7EFE7',
          pastelGreen: '#E8F0E7',
          pastelGold: '#FFF7D6',
          hairline: '#E5E7EB',
          
          textDark: '#1F4524',
          textMuted: '#4B5563',
          border: '#E5E7EB',
          gold: '#E5B824',
          goldHover: '#D4A71A',
          offWhite: '#FFFFFF',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#4A7C44",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#E8F0E7",
          foreground: "#1F4524",
        },
        accent: {
          DEFAULT: "#E5B824",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
        lg: "0px",
        md: "0px",
        sm: "0px",
        enterprise: "0px",
        card: "0px",
      },
      boxShadow: {
        'resting': '0 0 0 1px #E5E7EB',
        'lifted': '0 0 0 1px #1F4524',
        'sticky': '0 1px 0 0 #E5E7EB',
        'mega-menu': '0 8px 24px rgba(0,0,0,0.06)',
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};