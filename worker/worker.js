/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Edge-side SEO rendering, high-availability fallback, and dynamic sitemap interception for Treishvaam Agro.
 *
 * Scope:
 * - Intercepts requests to inject JSON-LD schema via HTMLRewriter.
 * - Serves cached dynamic sitemaps from TREISHFIN_SEO_CACHE (Free-tier optimized KV).
 * - Proxies valid standard requests to Cloudflare Pages securely.
 * - Must never handle canonicalization (www -> apex), which is managed via Cloudflare Bulk Redirects.
 *
 * Critical Dependencies:
 * - Backend: finance-api (Tenant: agro) via BACKEND_ORIGIN secret.
 * - Frontend: treishvaam-agro-frontend.pages.dev via CF_PAGES_ORIGIN secret.
 * - Worker / SEO / Sitemap: TREISHFIN_SEO_CACHE namespace.
 *
 * Security Constraints:
 * - NO hardcoded URLs or backend origins. All routing relies on CF_PAGES_ORIGIN and BACKEND_ORIGIN environments.
 * - Tenant isolation must be strictly enforced via X-Tenant-ID header.
 *
 * Non-Negotiables:
 * - Preserve Free Tier KV quota: Handle cache misses gracefully and update via ctx.waitUntil.
 * - Fail open: If KV or Backend fails, standard Pages requests must still execute.
 *
 * Change Intent:
 * - Phase 1: Deploy SEO edge architecture and KV caching strategy for Agro frontend.
 *
 * Future AI Guidance:
 * - Do not bypass the KV cache for sitemaps.
 * - Do not hardcode redirects in this execution layer.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • worker.js baseline implementation.
 * • Edge-side HTMLRewriter for JSON-LD schema injection.
 * • Read-through KV caching for sitemaps with asynchronous fallback to backend proxy.
 * • Tenant isolation headers (X-Tenant-ID: agro).
 * • Date / Phase: Phase 1 (Agro Edge Architecture).
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;

        // SEO Routing: Sitemaps Interception
        if (path === '/sitemap.xml' || path.startsWith('/sitemap-dynamic/')) {
            return await handleSitemap(request, env, ctx, url);
        }

        // SEO Routing: Robots.txt
        if (path === '/robots.txt') {
            return await handleRobots(request, env);
        }

        // Standard Page Request with Schema Injection & Fallback
        return await handleHtmlProxy(request, env, ctx, url);
    }
}

async function handleSitemap(request, env, ctx, url) {
    const cacheKey = `sitemap:${url.pathname}`;

    // 1. Prioritize High-Cache-Hit KV Read
    try {
        const cached = await env.TREISHFIN_SEO_CACHE.get(cacheKey);
        if (cached) {
            const isJson = cacheKey === 'sitemap:meta';
            return new Response(cached, {
                headers: {
                    'Content-Type': isJson ? 'application/json' : 'application/xml',
                    'Cache-Control': 'public, max-age=3600',
                    'X-Cache-Status': 'HIT-KV'
                }
            });
        }
    } catch (e) {
        console.error("KV Read Error:", e.message);
    }

    // 2. Fallback to Backend Fetch
    const backendOrigin = env.BACKEND_ORIGIN;
    if (!backendOrigin) {
        return new Response("Backend origin not configured in environment.", { status: 500 });
    }

    const backendUrl = new URL(request.url);
    const backendOriginUrl = new URL(backendOrigin);
    backendUrl.hostname = backendOriginUrl.hostname;
    backendUrl.protocol = backendOriginUrl.protocol;
    backendUrl.port = backendOriginUrl.port || '';

    try {
        const backendReq = new Request(backendUrl.toString(), request);
        
        // Zero-Trust Tenant Isolation
        backendReq.headers.set('X-Tenant-ID', 'agro'); 
        backendReq.headers.set('X-Forwarded-Host', url.hostname);

        const response = await fetch(backendReq);

        if (response.ok) {
            const body = await response.text();
            
            // 3. Asynchronous KV Update (Preserves request performance and free-tier quotas)
            ctx.waitUntil(env.TREISHFIN_SEO_CACHE.put(cacheKey, body, { expirationTtl: 86400 }));

            const isJson = cacheKey === 'sitemap:meta';
            return new Response(body, {
                headers: {
                    'Content-Type': isJson ? 'application/json' : 'application/xml',
                    'Cache-Control': 'public, max-age=3600',
                    'X-Cache-Status': 'MISS-KV-FETCHED'
                }
            });
        } else {
             return new Response("Backend error generating sitemap data.", { status: response.status });
        }
    } catch (error) {
        // Handle backend-down continuity gracefully
        return new Response("Backend unreachable. Sitemap generation pending.", { status: 503 });
    }
}

async function handleRobots(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;
    // Serve edge-level strict robots.txt to ensure canonical routing
    const robots = `User-agent: *\nAllow: /\nSitemap: https://${host}/sitemap.xml\n`;
    return new Response(robots, {
        headers: { 'Content-Type': 'text/plain' }
    });
}

async function handleHtmlProxy(request, env, ctx, url) {
    const pagesOrigin = env.CF_PAGES_ORIGIN;

    if (!pagesOrigin) {
        return new Response("Pages origin not configured in environment.", { status: 500 });
    }

    const pagesUrl = new URL(request.url);
    const pagesOriginUrl = new URL(pagesOrigin);
    pagesUrl.hostname = pagesOriginUrl.hostname;
    pagesUrl.protocol = pagesOriginUrl.protocol;

    const proxyReq = new Request(pagesUrl.toString(), request);
    // Security: Prevents raw CF Pages domain leakage and ensures internal routing matches the Pages project
    proxyReq.headers.set('Host', pagesOriginUrl.hostname);

    try {
        const response = await fetch(proxyReq);

        const contentType = response.headers.get('Content-Type') || '';
        
        // Edge JSON-LD Schema Injection logic
        if (response.status === 200 && contentType.includes('text/html')) {
            let schema = null;
            
            // Inject Homepage Schema
            if (url.pathname === '/') {
                schema = {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Treishvaam Agro",
                    "url": `https://${url.hostname}`,
                    "logo": `https://${url.hostname}/logo.webp`,
                    "description": "Enterprise agricultural solutions and sustainable infrastructure by Treishvaam Group.",
                    "parentOrganization": {
                        "@type": "Organization",
                        "name": "Treishvaam Group",
                        "url": "https://treishvaamgroup.com"
                    }
                };
            }

            if (schema) {
                return new HTMLRewriter()
                    .on('head', new SchemaInjector(schema))
                    .transform(response);
            }
        }

        return response;

    } catch (e) {
        // Extreme fallback for absolute uptime requirement
        return new Response("Service temporarily unavailable at the edge. Please try again shortly.", { status: 503 });
    }
}

class SchemaInjector {
    constructor(schema) {
        this.schema = schema;
    }
    element(element) {
        element.append(`<script type="application/ld+json">${JSON.stringify(this.schema)}</script>`, { html: true });
    }
}