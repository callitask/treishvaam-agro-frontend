/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Edge-side SEO rendering, high-availability fallback, and dynamic sitemap interception for Treishvaam Agro.
 * - Secure API Reverse Proxy for dynamic Next.js frontend fetching.
 * - Comprehensive Enterprise E-E-A-T Schema Injection.
 *
 * Scope:
 * - Intercepts requests to inject JSON-LD schema via HTMLRewriter.
 * - Serves cached dynamic sitemaps from TREISHFIN_SEO_CACHE (Free-tier optimized KV).
 * - Proxies valid standard requests to Cloudflare Pages securely.
 * - Intercepts /api/* requests and proxies them to the shared backend with tenant isolation.
 *
 * Critical Dependencies:
 * - Backend: finance-api (Tenant: agro) via BACKEND_ORIGIN secret.
 * - Frontend: treishvaam-agro-frontend.pages.dev via CF_PAGES_ORIGIN secret.
 * - Worker / SEO / Sitemap: TREISHFIN_SEO_CACHE namespace.
 *
 * Security Constraints:
 * - NO hardcoded URLs or backend origins. All routing relies on CF_PAGES_ORIGIN and BACKEND_ORIGIN environments.
 * - Tenant isolation must be strictly enforced via X-Tenant-ID header on all backend fetches.
 *
 * Non-Negotiables:
 * - Preserve Free Tier KV quota: Handle cache misses gracefully and update via ctx.waitUntil.
 * - Must inject comprehensive Founder (Amitsagar Kandpal) and Parent (Treishvaam Group) data.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • worker.js baseline implementation.
 * • Edge-side HTMLRewriter for JSON-LD schema injection.
 * • Read-through KV caching for sitemaps with asynchronous fallback to backend proxy.
 * • Tenant isolation headers (X-Tenant-ID: agro).
 * • Date / Phase: Phase 1 (Agro Edge Architecture).
 *
 * - EDITED:
 * • Added handleApiProxy to securely route /api/* requests to the backend.
 * • Enforced X-Tenant-ID: agro on all API requests.
 * • Date / Phase: Phase 3 (Backend Dynamic Integration).
 *
 * - EDITED:
 * • Upgraded handleHtmlProxy with comprehensive SEO Intelligence (matching Finance Worker).
 * • Added SPA 404 -> 200 OK Fallback logic for KNOWN_SPA_ROUTES to prevent GSC errors.
 * • Added detailed Organization, Founder, Static Page, and Product schemas.
 * • Date / Phase: Comprehensive SEO Upgrade.
 * - EDITED (Current Phase):
 * • Added phonetic variants ("Trishvam", "Treishvaam") into Founder and Org alternateName arrays.
 * • Why: Semantic entity fusion so AI bots map the company identity seamlessly to the founder identity.
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

        // API Reverse Proxy: Zero-Trust Backend Communication
        if (path.startsWith('/api/')) {
            return await handleApiProxy(request, env, url);
        }

        // Standard Page Request with Schema Injection & Fallback
        return await handleHtmlProxy(request, env, ctx, url);
    }
}

async function handleApiProxy(request, env, url) {
    const backendOrigin = env.BACKEND_ORIGIN;
    if (!backendOrigin) {
        return new Response(JSON.stringify({ error: "Backend origin not configured." }), { 
            status: 500, 
            headers: { 'Content-Type': 'application/json' } 
        });
    }

    const backendUrl = new URL(request.url);
    const backendOriginUrl = new URL(backendOrigin);
    backendUrl.hostname = backendOriginUrl.hostname;
    backendUrl.protocol = backendOriginUrl.protocol;
    backendUrl.port = backendOriginUrl.port || '';

    const proxyReq = new Request(backendUrl.toString(), request);
    
    // Zero-Trust Tenant Isolation
    proxyReq.headers.set('X-Tenant-ID', 'agro'); 
    proxyReq.headers.set('X-Forwarded-Host', url.hostname);

    try {
        const response = await fetch(proxyReq);
        return new Response(response.body, response);
    } catch (error) {
        return new Response(JSON.stringify({ error: "Backend API temporarily unreachable." }), { 
            status: 503,
            headers: { 'Content-Type': 'application/json' }
        });
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
        backendReq.headers.set('X-Tenant-ID', 'agro'); 
        backendReq.headers.set('X-Forwarded-Host', url.hostname);

        const response = await fetch(backendReq);

        if (response.ok) {
            const body = await response.text();
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
        return new Response("Backend unreachable. Sitemap generation pending.", { status: 503 });
    }
}

async function handleRobots(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;
    const robots = `User-agent: *\nAllow: /\nSitemap: https://${host}/sitemap.xml\n`;
    return new Response(robots, {
        headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'public, max-age=86400' }
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
    proxyReq.headers.set('Host', pagesOriginUrl.hostname);

    // SECURITY & SEO HEADERS
    const addSecurityHeaders = (response) => {
        if (!response) return response;
        const newHeaders = new Headers(response.headers);
        newHeaders.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
        newHeaders.set("X-Content-Type-Options", "nosniff");
        newHeaders.set("X-XSS-Protection", "1; mode=block");
        if (newHeaders.has("X-SPA-Fallback") && response.status === 404) {
            return new Response(response.body, { status: 200, headers: newHeaders });
        }
        return new Response(response.body, { status: response.status, headers: newHeaders });
    };

    // KNOWN SPA ROUTES FOR AGGRESSIVE 200 OK FALLBACK (Fixes GSC Indexing Errors)
    const KNOWN_SPA_ROUTES = [
        "/about", "/infrastructure", "/quality", "/sustainability", 
        "/products", "/contact", "/home"
    ];

    try {
        let response = await fetch(proxyReq);

        // SPA FALLBACK LOGIC
        const isKnownSpaRoute = KNOWN_SPA_ROUTES.some(route => url.pathname === route || url.pathname.startsWith(route + "/"));
        const hasNoExtension = !url.pathname.includes(".");
        
        if ((response.status === 404 || response.status === 403) && (isKnownSpaRoute || hasNoExtension)) {
            const indexReq = new Request(new URL("/index.html", pagesUrl), { method: "GET", headers: proxyReq.headers });
            const indexResp = await fetch(indexReq);
            if (indexResp.ok) {
                response = new Response(indexResp.body, indexResp);
                response.headers.set("X-SPA-Fallback", "Active");
                response = new Response(response.body, { status: 200, headers: response.headers });
            }
        }

        const contentType = response.headers.get('Content-Type') || '';
        const isHtml = contentType.includes('text/html');

        if (!isHtml || response.status !== 200) {
            return addSecurityHeaders(response);
        }

        // =================================================================================
        // COMPREHENSIVE SEO INTELLIGENCE & EDGE HYDRATION
        // =================================================================================
        const FRONTEND_URL = `https://${url.hostname}`;
        const PARENT_ORG_URL = "https://treishvaamgroup.com";
        let schema = null;
        let pageTitle = null;
        let pageDesc = null;

        // SCENARIO A: HOMEPAGE
        if (url.pathname === '/' || url.pathname === '/home') {
            pageTitle = "Treishvaam Agro | Enterprise Naturals & Pure Ingredients";
            pageDesc = "Global leaders in sustainably sourced, meticulously processed agricultural powders for the B2B enterprise market. A Treishvaam Group company.";
            schema = {
                "@context": "https://schema.org",
                "@type": "Corporation",
                "name": "Treishvaam Agro",
                "alternateName": ["Treishvam Agro", "Treshvam Agro", "Trishvam Agro", "Treishvaam", "Treishvam", "Trishvam"],
                "url": FRONTEND_URL,
                "logo": "https://treishvaamgroup.com/logo512.webp",
                "image": "https://treishvaamgroup.com/logo512.webp",
                "description": pageDesc,
                "telephone": "+91 1800-AGRO-123",
                "email": "sales@treishvaamagro.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "123 Agricultural Park, Block A",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560001",
                    "addressCountry": "IN"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "sales",
                    "telephone": "+91 1800-AGRO-123",
                    "email": "sales@treishvaamagro.com",
                    "areaServed": "Global",
                    "availableLanguage": "English"
                },
                "founder": {
                    "@type": "Person",
                    "name": "Amitsagar Kandpal",
                    "alternateName": ["Amit Kandpal", "Amit Sagar Kandpal", "Amitsagar", "Treishvaam", "Treishvam", "Trishvam"],
                    "jobTitle": "Founder & Chairman",
                    "url": "https://treishvaamgroup.com/",
                    "sameAs": [
                        "https://www.linkedin.com/in/amitsagarkandpal",
                        "https://twitter.com/treishvaam",
                        "https://www.instagram.com/treishvaam"
                    ]
                },
                "parentOrganization": {
                    "@type": "Corporation",
                    "name": "Treishvaam Group",
                    "alternateName": ["Treishvam Group", "Treshvam Group", "Trishvam Group"],
                    "url": PARENT_ORG_URL,
                    "logo": "https://treishvaamgroup.com/logo512.webp",
                    "sameAs": [
                        "https://www.linkedin.com/company/treishvaamgroup",
                        "https://twitter.com/treishvaamgroup",
                        "https://www.instagram.com/treishvaamgroup"
                    ]
                }
            };
        }

        // SCENARIO B: STATIC PAGES
        const staticPages = {
            "/about": { title: "About Us | Treishvaam Agro", desc: "Learn about Treishvaam Agro's mission to bridge the gap between pure organic farming and global enterprise manufacturing." },
            "/infrastructure": { title: "Global Infrastructure | Treishvaam Agro", desc: "Explore our state-of-the-art agricultural processing facilities and sustainable manufacturing hubs." },
            "/quality": { title: "Quality & Certifications | Treishvaam Agro", desc: "Uncompromising quality control and global certifications for our organic agricultural ingredients." },
            "/sustainability": { title: "Sustainability | Treishvaam Agro", desc: "Our commitment to zero-waste farming and sustainable enterprise agriculture." },
            "/contact": { title: "Contact Us | Treishvaam Agro", desc: "Get in touch with Treishvaam Agro for bulk ingredient inquiries and enterprise partnerships." },
            "/products": { title: "Enterprise Products | Treishvaam Agro", desc: "Browse our extensive catalog of fruit powders, vegetable powders, herbal extracts, and organic spices." }
        };

        if (staticPages[url.pathname]) {
            pageTitle = staticPages[url.pathname].title;
            pageDesc = staticPages[url.pathname].desc;
            schema = {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": pageTitle,
                "description": pageDesc,
                "url": FRONTEND_URL + url.pathname,
                "publisher": {
                    "@type": "Organization",
                    "name": "Treishvaam Agro",
                    "parentOrganization": { "@type": "Corporation", "name": "Treishvaam Group" },
                    "logo": { "@type": "ImageObject", "url": "https://treishvaamgroup.com/logo512.webp" }
                }
            };
        }

        // SCENARIO C: PRODUCT DETAIL PAGES (/products/[id])
        if (url.pathname.startsWith("/products/") && url.pathname.length > 10) {
            schema = {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Treishvaam Agro Premium Ingredient",
                "brand": { "@type": "Brand", "name": "Treishvaam Agro" },
                "manufacturer": { "@type": "Organization", "name": "Treishvaam Agro" },
                "description": "Premium organically sourced agricultural powder for enterprise manufacturing.",
                "url": FRONTEND_URL + url.pathname
            };
        }

        if (schema) {
            let rewriter = new HTMLRewriter()
                .on("head", { element(e) { e.append(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`, { html: true }); } });

            if (pageTitle) {
                rewriter = rewriter.on("title", { element(e) { e.setInnerContent(pageTitle); } })
                    .on('meta[property="og:title"]', { element(e) { e.setAttribute("content", pageTitle); } });
            }
            if (pageDesc) {
                rewriter = rewriter.on('meta[name="description"]', { element(e) { e.setAttribute("content", pageDesc); } })
                    .on('meta[property="og:description"]', { element(e) { e.setAttribute("content", pageDesc); } });
            }

            const rewrittenResp = rewriter.transform(response);
            return addSecurityHeaders(rewrittenResp);
        }

        return addSecurityHeaders(response);

    } catch (e) {
        return new Response("Service temporarily unavailable at the edge.", { status: 503 });
    }
}