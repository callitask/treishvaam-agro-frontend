/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Tailwind CSS configuration file to orchestrate the global design system.
 *
 * Scope:
 * - Defines typography, color palette, spacing scale, and border radius tokens.
 *
 * Change Intent:
 * - Restored as a `.ts` file to fix the ES Module resolution failure in Next.js 14.
 * - Removed third-party plugins to ensure baseline compilation doesn't crash.
 */

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
          green: '#284E1A',
          gold: '#DAB72F',
          greenHover: '#3A6B27',
          goldHover: '#C8A525',
          offWhite: '#F9FAF9',
          textDark: '#1C2619',
          textMuted: '#4A5548',
          border: '#E5E7EB',
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "16px",
        md: "8px",
        sm: "4px",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

export default config;