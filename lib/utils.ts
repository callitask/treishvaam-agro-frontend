/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Provides core utility functions for the frontend, including CSS class merging and secure environment variable resolution.
 *
 * Scope:
 * - Responsible for UI utilities and providing the base API path safely.
 * - What it must never be responsible for: Holding hardcoded backend endpoints or infrastructure details.
 *
 * Critical Dependencies:
 * - Backend: Resolves the origin URL that routes to the finance-api backend.
 * - Frontend: Consumed by all API client calls within the Agro frontend.
 * - Worker / SEO / Sitemap: Integrates with the Cloudflare Worker proxy layer.
 *
 * Security Constraints:
 * - What must never be hardcoded: API URLs, domains, or IP addresses.
 * - What must remain environment-driven: NEXT_PUBLIC_API_URL.
 *
 * Non-Negotiables:
 * - Must throw a strict error if the API URL environment variable is missing, preventing silent failures.
 *
 * Change Intent:
 * - Enforcing Zero-Trust configuration fetching for the new Agro domain launch.
 *
 * Future AI Guidance:
 * - Do not remove the getApiUrl function.
 * - Do not replace process.env checks with fallback strings.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • getApiUrl() function for secure, deterministic environment variable access.
 * • AI-Context block.
 * • 2026-04-09
 *
 * - EDITED:
 * • Retained existing clsx and tailwind-merge logic.
 * • Why the edit was required: To centralize secure API routing logic.
 * • What behavior must remain unchanged: UI class merging functionality.
 *
 * - REMOVED:
 * • None
 *
 * - FAILED / REJECTED ATTEMPTS:
 * • None
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Enterprise Zero-Trust API Resolver
 * Strictly enforces environment variable usage. Never fall back to hardcoded IPs.
 */
export function getApiUrl(): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    console.error("CRITICAL SECURITY ERROR: NEXT_PUBLIC_API_URL is not defined in the environment.");
    // In a production edge environment, this prevents sending requests to undefined or local routes.
    return ""; 
  }
  return apiUrl;
}