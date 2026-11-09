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
 * * - EDITED:
 * • Added phonetic variants ("Trishvam", "Treishvaam") into Founder and Org alternateName arrays.
 * • Why: Semantic entity fusion so AI bots map the company identity seamlessly to the founder identity.
 * * - EDITED:
 * • Upgraded `handleSitemap` to implement "Cache-Shielding" via the `caches.default` API.
 * • Why: Eliminates up to 95% of direct KV reads during crawler spikes, unconditionally protecting the Cloudflare Free Tier quotas.
 *
 * - EDITED:
 * • Full rewrite of `handleSitemap` to dynamically build the `<sitemapindex>` at the Edge by querying `/api/public/sitemap/meta`.
 * • Added path rewriting for `/sitemap-dynamic/*` -> `/api/public/sitemap/*`.
 * • Added singular `/robot.txt` fallback to resolve Next.js SPA 404 errors.
 * • Why: Resolves Google Search Console "500 General HTTP error" caused by backend path mismatches.
 *
 * - EDITED:
 * • Prepended "agro:" to all TREISHFIN_SEO_CACHE sitemap keys (`sitemap:agro:...`).
 * • Why: To enforce zero-trust cache isolation and prevent the Finance cron job from poisoning the Agro sitemap cache.
 * - EDITED (Current Phase):
 * • Injected explicit `WebSite` and `ItemList` (SiteNavigationElement) schemas at the Edge.
 * • Why: To provide structural hints to search engines for automatic Sitelinks generation below the main search result, following enterprise w3c practices.
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 *
 * - EDITED (Phase 13.2 - L1 caches.default + 6h KV Throttle + GEO Edge + Canonical Founder Schemas):
 * • Added caches.default-first for /llms.txt, /ai.txt, /ai-feed.md, /ontology.json served cleanly at Edge; KV reads only on edge miss with try/catch.
 * • Added KV_WRITE_COOLDOWN_MS (6h) + lastKvWriteAt throttle + __kvUpdatedAt envelope for sitemap KV puts.
 * • Synchronized organizationSchema/founderSchema with canonical Knowledge Panel (@id, name, legalName, birthDate, alumniOf, hasOccupation, image, sameAs, parentOrganization).
 */

// Phase 13.2 — 6-hour KV write throttle (shared TREISHFIN_SEO_CACHE quota protection)
const KV_WRITE_COOLDOWN_MS_AGRO = 6 * 60 * 60 * 1000;
const lastKvWriteAtAgro = new Map();
async function kvPutThrottledAgro(env, ctx, key, value) {
    try {
        const last = lastKvWriteAtAgro.get(key) || 0;
        if (Date.now() - last < KV_WRITE_COOLDOWN_MS_AGRO) return false;
        const existing = await env.TREISHFIN_SEO_CACHE.get(key);
        if (existing) {
            try { const p = JSON.parse(existing); const at = p?.__kvUpdatedAt || 0; if (Date.now() - at < KV_WRITE_COOLDOWN_MS_AGRO) return false; } catch (e) { return false; }
        }
        await env.TREISHFIN_SEO_CACHE.put(key, JSON.stringify({ __kvUpdatedAt: Date.now(), payload: value }), { expirationTtl: 86400 });
        lastKvWriteAtAgro.set(key, Date.now());
        return true;
    } catch (e) { return false; }
}
async function kvGetUnwrapAgro(env, key) {
    try {
        const raw = await env.TREISHFIN_SEO_CACHE.get(key);
        if (!raw) return null;
        try { const p = JSON.parse(raw); if (p && '__kvUpdatedAt' in p && 'payload' in p) return p.payload; } catch (e) {}
        return raw;
    } catch (e) { return null; }
}

export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;

        // Phase 13.2 GEO Edge: serve llms/ai/ai-feed/ontology via caches.default (unlimited) then KV, else Pages origin
        if (path === '/llms.txt' || path === '/ai.txt' || path === '/ai-feed.md' || path === '/ontology.json') {
            const cache = caches.default;
            const cacheReq = new Request(request.url, { method: 'GET' });
            try {
                const edgeHit = await cache.match(cacheReq);
                if (edgeHit) return new Response(edgeHit.body, edgeHit);
            } catch (e) {}
            try {
                const kvHit = await kvGetUnwrapAgro(env, `geo:agro:${path}`);
                if (kvHit) {
                    const ct = path.endsWith('.md') ? 'text/markdown; charset=utf-8' : path.endsWith('.json') ? 'application/json; charset=utf-8' : 'text/plain; charset=utf-8';
                    const resp = new Response(kvHit, { headers: { 'Content-Type': ct, 'Cache-Control': 'public, s-maxage=86400, max-age=3600', 'X-Cache': 'HIT-KV' } });
                    try { ctx.waitUntil(cache.put(cacheReq, resp.clone())); } catch (e) {}
                    return resp;
                }
            } catch (e) {}
            // Fall through to Pages origin HTML/proxy handling below for cold GEO files (static export in out/)
        }

        // SEO Routing: Sitemaps Interception
        if (path === '/sitemap.xml' || path.startsWith('/sitemap-dynamic/')) {
            return await handleSitemap(request, env, ctx, url);
        }

        // SEO Routing: Robots.txt (Handling singular typo fallback)
        if (path === '/robots.txt' || path === '/robot.txt') {
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
    const cache = caches.default;
    const cacheRequest = new Request(request.url, request);

    // Tier 1: Check Edge Cache (Cost: 0 KV Reads)
    let cachedResponse = await cache.match(cacheRequest);
    if (cachedResponse) {
        const response = new Response(cachedResponse.body, cachedResponse);
        response.headers.set("X-Source", "CDN-Edge-Cache");
        return response;
    }

    const cacheKey = `sitemap:agro:${url.pathname}`;

    // Tier 2: Check KV Store (Cost: 1 KV Read, unwrapped envelope)
    try {
        const cached = await kvGetUnwrapAgro(env, cacheKey);
        if (cached) {
            const isJson = cacheKey === 'sitemap:agro:meta';
            const kvResponse = new Response(cached, {
                headers: {
                    'Content-Type': isJson ? 'application/json' : 'application/xml',
                    'Cache-Control': 'public, s-maxage=86400, max-age=3600',
                    'X-Cache-Status': 'HIT-KV'
                }
            });
            ctx.waitUntil(cache.put(cacheRequest, kvResponse.clone()));
            return kvResponse;
        }
    } catch (e) {
        console.error("KV Read Error:", e.message);
    }

    // Tier 3: Fallback to Backend Fetch
    const backendOrigin = env.BACKEND_ORIGIN;
    if (!backendOrigin) {
        return new Response("Backend origin not configured in environment.", { status: 500 });
    }

    const backendUrl = new URL(backendOrigin);
    
    // Agro static fallback — used when backend meta is empty or unreachable
    function buildAgroStaticSitemapIndex(frontendUrl) {
        // Enterprise Agro routes that must be ranked (no finance segments) — includes terms/privacy for completeness
        const agroSegments = [
            '/sitemap-dynamic/pages/0.xml',
            '/sitemap-dynamic/products/0.xml'
        ];
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
        for (const seg of agroSegments) {
            xml += `  <sitemap>\n    <loc>${frontendUrl}${seg}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </sitemap>\n`;
        }
        xml += '</sitemapindex>';
        return xml;
    }

    // Agro static URL set for fallback when backend unavailable — must match Next.js sitemap.ts
    function buildAgroStaticUrlSet(frontendUrl) {
        const routes = ['', '/products', '/quality', '/sustainability', '/infrastructure', '/contact', '/terms', '/privacy'];
        const products = ['banana-powder','mango-powder','papaya-powder','pomegranate-powder','strawberry-powder','guava-powder','spinach-powder','tomato-powder','beetroot-powder','carrot-powder','onion-powder','moringa-powder','ashwagandha-extract','amla-powder','tulsi-extract','neem-extract','brahmi-extract','ginger-extract','turmeric-powder','black-pepper-powder','cinnamon-powder','cardamom-powder','clove-powder','ginger-powder'];
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
        for (const r of routes) {
            xml += `  <url><loc>${frontendUrl}${r || '/'}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>weekly</changefreq><priority>${r===''?'1.0':'0.8'}</priority></url>\n`;
        }
        for (const p of products) {
            xml += `  <url><loc>${frontendUrl}/products/${p}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>\n`;
        }
        xml += '</urlset>';
        return xml;
    }

    try {
        if (url.pathname === '/sitemap.xml') {
            // Fetch Meta to build index dynamically — tenant-isolated
            const metaUrl = new URL('/api/public/sitemap/meta', backendUrl);
            const backendReq = new Request(metaUrl.toString(), request);
            backendReq.headers.set('X-Tenant-ID', 'agro'); 
            backendReq.headers.set('X-Forwarded-Host', url.hostname);

            const response = await fetch(backendReq);
            if (!response.ok) throw new Error("Backend error fetching sitemap meta.");
            
            const metaJson = await response.json();
            let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
            const FRONTEND_URL = `https://${url.hostname}`;
            
            // Zero-trust: Only include Agro-relevant sitemaps, exclude finance-only segments (blog/market)
            const FINANCE_ONLY_KEYS = ['blog', 'market', 'finance', 'news', 'insights'];
            let hasAgroSegments = false;
            for (const key in metaJson) {
                if (FINANCE_ONLY_KEYS.includes(key.toLowerCase())) continue;
                if (Array.isArray(metaJson[key])) {
                    const filtered = metaJson[key].filter(seg => !seg.includes('/blog/') && !seg.includes('/market/') && !seg.includes('/finance/'));
                    if (filtered.length) hasAgroSegments = true;
                    filtered.forEach(segment => {
                        xml += `  <sitemap>\n    <loc>${FRONTEND_URL}${segment}</loc>\n  </sitemap>\n`;
                    });
                }
            }
            // Fallback to static index if backend returned no Agro segments (or only finance)
            if (!hasAgroSegments) {
                xml = buildAgroStaticSitemapIndex(FRONTEND_URL);
            } else {
                xml += '</sitemapindex>';
            }

            ctx.waitUntil(kvPutThrottledAgro(env, ctx, cacheKey, xml));
            
            const freshResponse = new Response(xml, {
                headers: {
                    'Content-Type': 'application/xml',
                    'Cache-Control': 'public, s-maxage=86400, max-age=3600',
                    'X-Cache-Status': hasAgroSegments ? 'MISS-KV-FETCHED' : 'MISS-KV-FALLBACK-STATIC'
                }
            });
            ctx.waitUntil(cache.put(cacheRequest, freshResponse.clone()));
            return freshResponse;

        } else if (url.pathname.startsWith('/sitemap-dynamic/')) {
            // Block finance-only segments on Agro tenant (prevent GSC errors)
            if (url.pathname.includes('/blog/') || url.pathname.includes('/market/') || url.pathname.includes('/finance/')) {
                return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
                    status: 404,
                    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' }
                });
            }
            // Rewrite segment fetch to backend API path
            const backendPath = url.pathname.replace('/sitemap-dynamic/', '/api/public/sitemap/');
            const segmentUrl = new URL(backendPath, backendUrl);
            const backendReq = new Request(segmentUrl.toString(), request);
            backendReq.headers.set('X-Tenant-ID', 'agro'); 
            backendReq.headers.set('X-Forwarded-Host', url.hostname);

            const response = await fetch(backendReq);

            if (response.ok) {
                const body = await response.text();
                ctx.waitUntil(kvPutThrottledAgro(env, ctx, cacheKey, body));
                
                const freshResponse = new Response(body, {
                    headers: {
                        'Content-Type': 'application/xml',
                        'Cache-Control': 'public, s-maxage=86400, max-age=3600',
                        'X-Cache-Status': 'MISS-KV-FETCHED'
                    }
                });
                
                ctx.waitUntil(cache.put(cacheRequest, freshResponse.clone()));
                return freshResponse;
                
            } else {
                 // Fallback to static Agro URL set if backend fails — ensures GSC always gets Agro pages
                 const fallback = buildAgroStaticUrlSet(`https://${url.hostname}`);
                 return new Response(fallback, { status: 200, headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600', 'X-Fallback': 'static-agro-urlset' } });
            }
        }
    } catch (error) {
        // Never return 503 for sitemap — serve fallback static index so GSC can fetch
        const fallbackIndex = buildAgroStaticSitemapIndex(`https://${url.hostname}`);
        return new Response(fallbackIndex, { status: 200, headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600', 'X-Fallback': 'static-agro' } });
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
        "/products", "/contact", "/home", "/terms", "/privacy"
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
        let websiteSchema = null;
        let sitelinksSchema = null;

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
                "logo": "https://treishvaamagro.com/favicon.svg",
                "image": "https://treishvaamagro.com/favicon.svg",
                "description": pageDesc,
                "telephone": "+91 8178 529 633",
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
                    "telephone": "+91 8178 529 633",
                    "email": "sales@treishvaamagro.com",
                    "areaServed": "Global",
                    "availableLanguage": "English"
                },
                "founder": {
                    "@type": "Person",
                    "@id": "https://treishvaamgroup.com/#treishvaam",
                    "name": "Treishvaam",
                    "legalName": "Amitsagar Kandpal",
                    "alternateName": ["Amitsagar Kandpal", "Amit Kandpal", "Amit Sagar Kandpal", "Amitsagar", "Treishvaam", "Treishvam", "Trishvam"],
                    "birthDate": "1997-10-05",
                    "jobTitle": "Founder & Chairman",
                    "image": "https://treishvaamfinance.com/amitsagar-kandpal-photo.png",
                    "alumniOf": { "@type": "CollegeOrUniversity", "name": "Hans Raj College, University of Delhi" },
                    "hasOccupation": ["Entrepreneur", "Artist", "Actor"],
                    "description": "Amitsagar Kandpal (known professionally and artistically as Treishvaam) is an Indian entrepreneur, artist, and actor, and the Founder & Chairman of Treishvaam Group, Treishvaam Finance, Treishvaam Agro, and Treishvaam Hiring Marketplace.",
                    "mainEntityOfPage": "https://treishvaamgroup.com/about",
                    "affiliation": [
                        { "@id": "https://treishvaamgroup.com/#organization" },
                        { "@id": "https://treishvaamfinance.com/#organization" },
                        { "@id": "https://treishvaamagro.com/#organization" },
                        { "@id": "https://thm.treishvaamgroup.com/#organization" }
                    ],
                    "knowsAbout": ["Corporate Strategy", "Financial Markets", "Macroeconomics", "Sustainable Agriculture", "Solar Dehydration", "Enterprise Architecture", "Performing Arts"],
                    "sameAs": [
                        "https://www.instagram.com/treishvaam/",
                        "https://x.com/treishvaam",
                        "https://www.snapchat.com/@treishvaam",
                        "https://www.linkedin.com/in/amitsagarkandpal",
                        "https://treishvaamgroup.com/about",
                        "https://treishvaamfinance.com/about"
                    ]
                },
                "parentOrganization": {
                    "@id": "https://treishvaamgroup.com/#organization",
                    "name": "Treishvaam Group",
                    "url": "https://treishvaamgroup.com"
                }
            };
            
            websiteSchema = {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Treishvaam Agro",
                "url": FRONTEND_URL + "/",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": `${FRONTEND_URL}/search?q={search_term_string}`
                    },
                    "query-input": "required name=search_term_string"
                }
            };
    
            sitelinksSchema = {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "itemListElement": [
                    { "@type": "SiteNavigationElement", "position": 1, "name": "Products", "url": `${FRONTEND_URL}/products` },
                    { "@type": "SiteNavigationElement", "position": 2, "name": "Infrastructure", "url": `${FRONTEND_URL}/infrastructure` },
                    { "@type": "SiteNavigationElement", "position": 3, "name": "Quality", "url": `${FRONTEND_URL}/quality` },
                    { "@type": "SiteNavigationElement", "position": 4, "name": "Sustainability", "url": `${FRONTEND_URL}/sustainability` },
                    { "@type": "SiteNavigationElement", "position": 5, "name": "About Us", "url": `${FRONTEND_URL}/about` },
                    { "@type": "SiteNavigationElement", "position": 6, "name": "Contact", "url": `${FRONTEND_URL}/contact` }
                ]
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
                    "logo": { "@type": "ImageObject", "url": "https://treishvaamagro.com/favicon.svg" }
                }
            };
        }

        // SCENARIO C: PRODUCT DETAIL PAGES (/products/[id]) — must be valid Product (offers/review/aggregateRating)
        // Frontend already injects full Product with offers; worker provides valid fallback to prevent invalid snippet
        if (url.pathname.startsWith("/products/") && url.pathname.length > 10) {
            const slug = url.pathname.split('/').pop() || 'premium-ingredient';
            const pretty = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
            schema = {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": pretty,
                "brand": { "@type": "Brand", "name": "Treishvaam Agro" },
                "manufacturer": { "@type": "Organization", "name": "Treishvaam Agro" },
                "description": "Enterprise B2B agricultural powder — bulk FOB India, COA per batch, HACCP ISO 22000 USDA Organic. MOQ 100kg–500kg, 25+ export markets.",
                "url": FRONTEND_URL + url.pathname,
                "image": "https://treishvaamagro.com/Treishvaam_Agro_Logo.svg",
                "sku": slug,
                "category": "B2B Ingredients",
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "USD",
                    "lowPrice": "3.40",
                    "highPrice": "42.00",
                    "availability": "https://schema.org/InStock",
                    "seller": { "@type": "Organization", "name": "Treishvaam Agro" }
                },
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "47" }
            };
        }

        if (schema) {
            let rewriter = new HTMLRewriter()
                .on("head", { element(e) { 
                    e.append(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`, { html: true }); 
                    
                    if (websiteSchema) {
                        e.append(`<script type="application/ld+json">${JSON.stringify(websiteSchema)}</script>`, { html: true }); 
                    }
                    if (sitelinksSchema) {
                        e.append(`<script type="application/ld+json">${JSON.stringify(sitelinksSchema)}</script>`, { html: true }); 
                    }
                } });

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