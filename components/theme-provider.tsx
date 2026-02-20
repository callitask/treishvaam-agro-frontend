/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Provides strict theme context (Dark/Light/System) to the entire application.
 * - Wraps next-themes to ensure hydration safety.
 *
 * Scope:
 * - Global Application Wrapper.
 *
 * Critical Dependencies:
 * - next-themes
 *
 * IMMUTABLE CHANGE HISTORY:
 * - ADDED: Initial ThemeProvider implementation to support Sonner and UI theming.
 */

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}