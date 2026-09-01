/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Centralized API client for the Agro frontend to communicate with the shared backend.
 *
 * Scope:
 * - Handles dynamic data fetching from the backend for Next.js Server & Client components.
 * - Uses relative URLs exclusively (`/api/...`) to ensure the Edge Worker intercepts and proxies the request.
 *
 * Critical Dependencies:
 * - Edge Worker: Must intercept `/api/*` and attach the `X-Tenant-ID: agro` header before forwarding to the backend.
 *
 * Security Constraints:
 * - NO HARDCODED DOMAINS. Must remain environment-agnostic and rely on relative pathing.
 * - Never expose backend architecture or URLs to the client browser.
 *
 * Non-Negotiables:
 * - All fetches must route through the `API_BASE` to guarantee Worker interception.
 *
 * Change Intent:
 * - Phase 3: Implement Zero-Trust dynamic data fetching.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • Initial API client implementation with relative pathing.
 * • Date / Phase: Phase 3 (Backend Dynamic Integration).
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

// Worker-first relative base; fallback to NEXT_PUBLIC_API_URL for local dev without Worker
const RELATIVE_BASE = '/api/v1';

function resolveBase(): string {
  // Client-side local dev fallback: if NEXT_PUBLIC_API_URL is set and we are not on treishvaamagro.com, use it
  if (typeof window !== 'undefined') {
    const envUrl = process.env.NEXT_PUBLIC_API_URL;
    const isProdHost = window.location.hostname.includes('treishvaamagro.com');
    if (envUrl && !isProdHost && !envUrl.includes('treishvaamagro.com')) {
      return envUrl.replace(/\/$/, '') + '/api/v1';
    }
  }
  return RELATIVE_BASE;
}

export async function fetchAgroData(endpoint: string, options: RequestInit = {}) {
    const base = resolveBase();
    const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${base}${normalizedEndpoint}`;
    const isAbsolute = url.startsWith('http');

    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...(options.headers as Record<string, string>),
        };
        // For direct backend calls (local dev), inject tenant header client-side
        if (isAbsolute) headers['X-Tenant-ID'] = 'agro';

        const response = await fetch(url, {
            ...options,
            headers,
        });

        if (!response.ok) {
            // Provide gracefully degraded errors to the UI
            console.error(`API fetch failed for ${url}: ${response.status} ${response.statusText}`);
            return { error: true, status: response.status, message: 'Failed to fetch data' };
        }

        return await response.json();
    } catch (error) {
        console.error(`Network error fetching ${url}:`, error);
        return { error: true, message: 'Network error or backend unreachable' };
    }
}