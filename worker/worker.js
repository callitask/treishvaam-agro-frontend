/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - The authoritative Edge Ingress for Treishvaam Agro (tagro.treishvaamgroup.com).
 * - Implements Zero-Trust security, SEO continuity, and AI-crawler fallback logic.
 *
 * Scope:
 * - Responsible for routing requests securely to the Cloudflare Pages application or the Shared Backend.
 * - Manages Edge-side SEO injection (Schema.org) and Sitemap proxying.
 *
 * Critical Dependencies:
 * - Backend: Shared finance-api backend (routed via environment variables).
 * - Frontend: treishvaam-agro-frontend.pages.dev.
 *
 * Security Constraints:
 * - What must never be hardcoded: The backend origin URL, API keys, and internal CF Pages domains.
 * - What must remain environment-driven: BACKEND_ORIGIN, CF_PAGES_ORIGIN.
 *
 * Change Intent:
 * - Routed sitemap requests to the shared backend to support dynamic, programmatic sitemap generation.
 *
 * Future AI Guidance:
 * - Always use the raw `env.CF_PAGES_ORIGIN` hostname when fetching static assets from within the worker to avoid routing loops.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED: Injected internal Host header to bypass Cloudflare WAF blocks. 2026-04-11
 * - EDITED: Added HTMLRewriter logic for Schema.org injection and sitemap proxying. 2026-04-11
 * - EDITED: Fixed 404 Sitemap error by construction direct internal fetch URL. 2026-04-11
 * - EDITED: Rerouted sitemap requests to BACKEND_ORIGIN for dynamic generation, with fallback to Pages. 2026-04-11
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted.
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const backendOrigin = env.BACKEND_ORIGIN;
    const pagesOrigin = env.CF_PAGES_ORIGIN; // Expected format: https://project.pages.dev
    const frontendUrl = "https://tagro.treishvaamgroup.com";
    const parentOrgUrl = "https://treishvaamgroup.com";

    if (!backendOrigin || !pagesOrigin) {
      return new Response("Enterprise Security Gate: Configuration Missing.", { status: 500 });
    }

    // 1. API Route Handling (Zero-Trust Proxy to Backend)
    if (url.pathname.startsWith("/api/")) {
      const proxyUrl = new URL(request.url);
      const targetUrl = new URL(backendOrigin);
      proxyUrl.hostname = targetUrl.hostname;
      proxyUrl.protocol = targetUrl.protocol;
      proxyUrl.port = targetUrl.port || '';

      const newHeaders = new Headers(request.headers);
      newHeaders.set("X-Tenant-ID", "treishvaam-agro");
      newHeaders.set("X-Forwarded-Host", url.hostname);

      try {
        return await fetch(proxyUrl.toString(), {
          method: request.method,
          headers: newHeaders,
          body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
          redirect: 'manual'
        });
      } catch (error) {
        return new Response(JSON.stringify({ error: "Backend service temporarily unavailable." }), {
          status: 503,
          headers: { "Content-Type": "application/json" }
        });
      }
    }

    // 2. SEO & Sitemap Continuity (Backend First, Fallback to Pages)
    if (url.pathname === "/sitemap.xml" || url.pathname.startsWith("/sitemap-")) {
      try {
        // Primary Route: Fetch from Shared Backend
        const proxyUrl = new URL(request.url);
        const targetUrl = new URL(backendOrigin);
        proxyUrl.hostname = targetUrl.hostname;
        proxyUrl.protocol = targetUrl.protocol;
        proxyUrl.port = targetUrl.port || '';

        const newHeaders = new Headers(request.headers);
        newHeaders.set("X-Tenant-ID", "treishvaam-agro");
        newHeaders.set("X-Forwarded-Host", url.hostname);

        const backendResp = await fetch(proxyUrl.toString(), {
          method: request.method,
          headers: newHeaders,
          cf: { cacheTtl: 3600, cacheEverything: true }
        });

        if (backendResp.ok) {
           const headers = new Headers(backendResp.headers);
           headers.set("Content-Type", "application/xml; charset=utf-8");
           headers.set("X-Source", "Backend-Dynamic-Sitemap");
           headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
           return new Response(backendResp.body, { status: 200, headers });
        }
      } catch (backendError) {
         console.warn("Backend Sitemap Error, falling back to static Pages sitemap:", backendError);
      }

      // Fallback Route: Fetch static from Pages if backend fails
       try {
         const internalPagesHost = new URL(pagesOrigin).hostname;
         const sitemapUrl = new URL(url.pathname, pagesOrigin);
         
         const sitemapResp = await fetch(sitemapUrl.toString(), {
           method: "GET",
           headers: { 'Host': internalPagesHost },
           cf: { cacheTtl: 3600, cacheEverything: true }
         });
         
         if (sitemapResp.ok) {
           const headers = new Headers(sitemapResp.headers);
           headers.set("Content-Type", "application/xml; charset=utf-8");
           headers.set("X-Source", "Edge-Origin-Fallback");
           headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
           return new Response(sitemapResp.body, { status: 200, headers });
         }
       } catch (e) {
         console.error("Sitemap Fallback Error:", e);
       }
       
       return new Response("Sitemap Error", { status: 404 });
    }

    // 3. Standard Pages Rendering with SEO Injection
    const pageUrl = new URL(request.url);
    const internalPagesHost = new URL(pagesOrigin).hostname;
    pageUrl.hostname = internalPagesHost;
    
    const cleanHeaders = new Headers(request.headers);
    for (const key of cleanHeaders.keys()) {
      if (key.toLowerCase().startsWith('cf-')) cleanHeaders.delete(key);
    }
    cleanHeaders.set('Host', internalPagesHost);

    const response = await fetch(pageUrl.toString(), {
        method: request.method,
        headers: cleanHeaders,
        body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : null,
        redirect: 'manual'
    });

    // SCENARIO A: HOMEPAGE SEO INJECTION
    if (url.pathname === "/" || url.pathname === "/home") {
        const homeSchema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Treishvaam Agro",
            "url": frontendUrl + "/",
            "logo": "https://treishvaamgroup.com/logo512.webp",
            "description": "Global leaders in sustainably sourced, meticulously processed agricultural powders.",
            "parentOrganization": {
                "@type": "Corporation",
                "name": "Treishvaam Group",
                "url": parentOrgUrl
            },
            "founder": {
                "@type": "Person",
                "name": "Amitsagar Kandpal",
                "jobTitle": "Founder & Chairman"
            }
        };

        return new HTMLRewriter()
            .on("head", {
                element(e) {
                    e.append(`<script type="application/ld+json">${JSON.stringify(homeSchema)}</script>`, { html: true });
                }
            })
            .transform(response);
    }

    return response;
  }
};