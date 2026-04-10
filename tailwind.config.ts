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
 * - Must maintain the `brand` color object specifically mapped to the enterprise design requirements.
 * - Standard primary/secondary/accent colors MUST be hardcoded to hex values to prevent CSS variable conflicts.
 *
 * Change Intent:
 * - Fixed local/live color loss by mapping default Shadcn properties directly to the brand hex codes.
 *
 * Future AI Guidance:
 * - Do not revert primary/secondary to HSL variables. Keep them locked to the brand hex values.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • Brand color palette mapping to enterprise spec.
 * • Custom shadow scales.
 * • 2026-02-24
 *
 * - EDITED:
 * • Mapped default primary, secondary, and accent directly to brand hex codes.
 * • Why the edit was required: Colors dropped out of the build due to CSS variable conflicts between global.css and tailwind config.
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
          dark: '#1F4524', // Primary Dark Green
          primary: '#4A7C44', // Primary Brand Green
          secondary: '#E8F0E7', // Secondary Light Green
          accent: '#E5B824', // Action Yellow
          'accent-hover': '#D4A71A',
          surface: '#FFFFFF',
          'surface-off': '#F9FAFB',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Hardcoded overrides mapping directly to brand colors
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        enterprise: "4px",
        card: "12px",
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
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;