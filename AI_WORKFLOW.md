/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Tracks the high-level phases of AI-driven development for the Agro frontend.
 * - Defines the absolute deployment workflows and operational context for future AI agents.
 *
 * Scope:
 * - Chronicles completed milestones, sets context for the next tasks, and enforces strict CLI execution paths.
 *
 * Security & Operational Constraints:
 * - AI agents MUST strictly adhere to the directory paths, branches, and command sequences defined here.
 * - Worker deployments and Next.js deployments are structurally decoupled.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED: Initial workflow and deployment tracking.
 * - EDITED:
 * • Phase 3 Update: Marked Phase 1 (Edge Architecture), Phase 2 (Frontend SEO), and Phase 3 (Backend Integration) as COMPLETE.
 * • Updated Current Status to Phase 4 (UI Polish & Content Hydration).
 * • Preserved all Strict AI Guardrails and Deployment Workflow commands exactly as specified.
 * - EDITED:
 * • Added Phase 5: Zero-Trust Analytics Implementation to enforce the 0ms TBT architecture standard.
 * - EDITED (LATEST):
 * • Updated Phases 1-3 to reflect the successful Apex Domain migration, Semantic Entity JSON-LD injections, and Edge Cache-Shielding.
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

# 🤖 AI OPERATIONAL CONTEXT & DEPLOYMENT WORKFLOW

**CRITICAL INSTRUCTION FOR ALL AI AGENTS:**
You must strictly adhere to the directory paths, branches, and command sequences defined in this document. The Treishvaam Agro infrastructure relies on a decoupled deployment model where the Zero-Trust Edge Proxy (Worker) and the Static UI (Cloudflare Pages) are deployed separately.

---

## 🟢 CURRENT STATUS: PHASE 4/5 - UI Polish & Analytics Implementation
The foundational infrastructure, apex domain routing, security boundaries, and Landify Design System are operational. The focus is now on connecting backend data and implementing the enterprise tracking standard.

### ✅ PHASE 1: Zero-Trust Edge Architecture [COMPLETE]
* Deploy `treishvaamagro-seo-worker` to intercept all domain traffic on the Apex Domain (`treishvaamagro.com`).
* Configure Free-Tier `TREISHFIN_SEO_CACHE` KV namespace and Tier-1 CDN Cache-Shielding for read-through sitemap caching.
* Resolve Cloudflare Pages Custom Domain DNS Collision to guarantee Worker execution.

### ✅ PHASE 2: Frontend Enterprise SEO [COMPLETE]
* Remove conflicting static `robots.txt` and `sitemap.xml/route.ts` from Next.js codebase.
* Configure strict `metadataBase` canonicalization in `app/layout.tsx`.
* Inject decoupled Semantic Entity JSON-LD schemas (Organization, Founder) via Edge `HTMLRewriter` incorporating the "Iceberg" Typo-Tolerance protocol.
* Implement Aggressive SPA Fallback routing (404 -> 200 OK) at the Edge to prevent GSC indexing errors.

### ✅ PHASE 3: Backend Dynamic Integration [COMPLETE]
* Create `lib/api-client.ts` for relative, zero-trust data fetching.
* Upgrade Edge Worker to intercept `/api/*` and securely proxy to `cloudflared` tunnel.
* Enforce `X-Tenant-ID: agro` header injection at the Edge.
* Register `agro` tenant in Java Spring Boot `TenantInterceptor`.
* Override `SitemapService` in the backend to serve Agro-specific static enterprise payloads.

### ⏳ PHASE 4: UI Polish & Content Hydration [PENDING]
* Connect React Server Components to the backend via `fetchAgroData` to populate products and news.
* Polish Landify Design System components across dynamic routes.

### ⏳ PHASE 5: Zero-Trust Analytics Implementation (0ms TBT) [PENDING]
* **Task for next AI:** Create `components/ThirdPartyScripts.tsx` mimicking the interaction-based deferred loading strategy used on the Finance site.
* Plumb `NEXT_PUBLIC_GA_MEASUREMENT_ID` support to ensure scripts are only injected if the variable exists in Cloudflare.

---

## 1. EDGE WORKER (PROXY & SEO) DEPLOYMENT

**Trigger Condition:** Execute this workflow ONLY if modifications are made to `worker/worker.js` or `worker/wrangler.toml`.

**Execution Context:**
- **Local Path:** `F:\treishvaamgroup\treishvaam-agro-frontend\treishvaam-agro-frontend\worker`
- **Tool:** Wrangler CLI

**Command Sequence:**
```bash
cd "F:\treishvaamgroup\treishvaam-agro-frontend\treishvaam-agro-frontend\worker"
npx wrangler deploy
```

---

## 2. FRONTEND (UI & PAGES) DEPLOYMENT

**Trigger Condition:** Execute this workflow when modifying any Next.js components, Tailwind configs, global CSS, or package dependencies. Cloudflare Pages automatically triggers a static build (`npm run build` -> `out/`) upon pushing to the tracking branch.

**Execution Context:**
- **Local Path:** `F:\treishvaamgroup\treishvaam-agro-frontend\treishvaam-agro-frontend`
- **Target Branch:** `develop`

**Command Sequence:**
```bash
cd "F:\treishvaamgroup\treishvaam-agro-frontend\treishvaam-agro-frontend"
git checkout develop
git add <specific_files_modified>
git commit -m "type(scope): descriptive commit message"
git push origin develop
```

---

## ⚠️ STRICT AI GUARDRAILS
1. **Never** run `npx wrangler deploy` from the root frontend directory. It must only be run inside the `/worker` directory.
2. **Never** add `deploy` or `preview` scripts to the `package.json`. Cloudflare Pages must default to `npm run build` to ensure pure Static Site Generation (SSG).
3. **Always** ensure Next.js dynamic routes (e.g., `[id]`) implement `generateStaticParams()` to support the SSG architecture.