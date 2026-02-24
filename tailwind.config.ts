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
 * - Worker / SEO / Sitemap: N/A
 *
 * Security Constraints:
 * - Purely presentation logic. Zero security risk surface.
 *
 * Non-Negotiables:
 * - Must maintain the `brand` color object specifically mapped to the enterprise design requirements.
 * - Must not break the existing shadcn/ui generic color variables.
 *
 * Change Intent:
 * - Upgraded to implement the enterprise visual reverse-engineering specification (Dark Green, Action Yellow, precise shadow scales).
 *
 * Future AI Guidance:
 * - Do not remove the `brand` color palette. If adding new themes, extend the object, do not replace it.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • Brand color palette (dark, primary, secondary, accent) mapping to enterprise spec.
 * • Custom shadow scales (hover-lift).
 * • 2026-02-24
 */

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem", // 24px
      screens: {
        "2xl": "1280px", // Strict max-w-7xl
      },
    },
    extend: {
      colors: {
        brand: {
          dark: '#1F4524', // Primary Dark Green (Top bar, Footer, Headings)
          primary: '#4A7C44', // Primary Brand Green (Logomark, standard buttons)
          secondary: '#E8F0E7', // Secondary Light Green (Hover states, backgrounds)
          accent: '#E5B824', // Action Yellow (Primary CTA)
          'accent-hover': '#D4A71A', // Action Yellow Hover
          surface: '#FFFFFF',
          'surface-off': '#F9FAFB',
        },
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
        enterprise: "4px", // Enterprise rigidity for buttons
        card: "12px", // Consumer-friendly card rounding
      },
      boxShadow: {
        'resting': '0px 4px 12px rgba(0, 0, 0, 0.05)',
        'lifted': '0px 10px 24px rgba(0, 0, 0, 0.1)',
        'sticky': '0px 2px 8px rgba(0, 0, 0, 0.08)',
        'mega-menu': '0px 8px 16px rgba(0, 0, 0, 0.12)',
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
        sans: ['Inter', 'sans-serif'], // Inferred highly legible geometric sans-serif
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;