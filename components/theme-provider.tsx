/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Provides global theme management (dark/light mode) via Next-Themes.
 *
 * Scope:
 * - Wraps the application root to inject theme context.
 *
 * Critical Dependencies:
 * - next-themes library.
 *
 * Security Constraints:
 * - N/A (Client-side UI context).
 *
 * Non-Negotiables:
 * - MUST import ThemeProviderProps directly from 'next-themes' to prevent TypeScript build failures.
 *
 * Change Intent:
 * - Fixed TypeScript module resolution error for next-themes/dist/types.
 *
 * Future AI Guidance:
 * - Do not revert to importing from 'next-themes/dist/types' as it breaks newer npm module resolution.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Consolidated ThemeProviderProps import to 'next-themes'.
 * • Why the edit was required: Build failed with "Cannot find module 'next-themes/dist/types'".
 * • 2026-04-10
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}