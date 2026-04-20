/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Strategic project plan, architectural roadmap, and task tracking for the Treishvaam Agro Frontend.
 *
 * Scope:
 * - Details the current App Router structure, the Zero-Trust Edge Architecture integration, and prioritized action items.
 *
 * Critical Dependencies:
 * - Cloudflare Pages (Hosting).
 * - Cloudflare Worker (`treishvaamagro-seo-worker`) for SEO, Sitemaps, and API Proxying.
 * - Shared Java Spring Boot Backend (`finance-api`).
 *
 * Security Constraints:
 * - Enforces the absolute prohibition of direct backend connections from the Next.js client.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED: Initial Treishvaam Agro Project Plan.
 * - EDITED:
 * • Phase 3 Update: Overhauled project structure to reflect the removal of conflicting static assets (robots/sitemap) and legacy pages.
 * • Updated High Priority action items to focus on Backend Dynamic Integration (Zero-Trust API Client) and UI Hydration.
 * • Struck through completed SEO/Edge tasks following Phase 1-3 deployment.
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

# Treishvaam Agro Frontend - Project Plan

## Project Overview
A Next.js enterprise portal for Treishvaam Agro, an agricultural export company. The platform is designed with a **Zero-Trust Edge Architecture**, meaning the Next.js application acts strictly as a UI rendering shell deployed on Cloudflare Pages, completely decoupled from the backend database.

### Key Features:
- Landing page with enterprise messaging, product showcases, and sustainability metrics.
- Product catalog with dynamic data hydration.
- Informational enterprise pages (Contact, Infrastructure, Quality, Sustainability).
- **Edge-Driven SEO**: Sitemaps, Robots.txt, and E-E-A-T Schema are injected by a Cloudflare Worker, not the React application.

## Current Project Structure (App Router + Edge)
```text
treishvaam-agro-frontend/
├── app/
│   ├── page.tsx (Landing page with WebPage Schema)
│   ├── layout.tsx (Root layout with canonical metadataBase)
│   ├── globals.css (Global styles)
│   ├── products/
│   │   ├── page.tsx (Product catalog)
│   │   └── [id]/page.tsx (Product detail)
│   ├── infrastructure/
│   ├── quality/
│   ├── sustainability/
│   └── contact/
├── components/
│   ├── layout/ (Navbar, Footer)
│   ├── home/ (HeroSection, StatsStrip, ProductShowcase)
│   └── ui/ (Shadcn UI components)
├── lib/
│   ├── api-client.ts (Zero-Trust Relative API Fetcher)
│   └── data/ (Fallback static data)
├── worker/
│   ├── worker.js (The Zero-Trust Ingress, SEO Cache, & API Proxy)
│   └── wrangler.toml
└── docs/
    └── ENTERPRISE_SEO_AND_ARCHITECTURE_MASTER_LEDGER.md
```
*(Note: Legacy `/pages`, static `public/robots.txt`, and internal `app/sitemap.xml` have been deliberately deleted to prevent Edge Worker conflicts).*

## Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI, Lucide React
- **Edge / Infrastructure**: Cloudflare Pages + Cloudflare Workers (HTMLRewriter, KV Storage)

---

## Action Items & Priorities

### ✅ COMPLETED (Phases 1-3)
- ~~Deploy `treishvaamagro-seo-worker` to handle all routing and Edge-side JSON-LD injection.~~
- ~~Implement Cloudflare KV read-through caching for XML Sitemaps.~~
- ~~Configure Next.js `layout.tsx` with canonical `metadataBase` to prevent `.pages.dev` indexing leaks.~~
- ~~Create `lib/api-client.ts` to force all data fetching through relative paths (`/api/v1`), allowing Worker interception.~~
- ~~Integrate Java Spring Boot backend to recognize the `agro` tenant header.~~

### 🔴 High Priority (Phase 4: UI Polish & Hydration)
1. **Dynamic Data Hydration**: Update `app/products/page.tsx` and `app/products/[id]/page.tsx` to consume data using `fetchAgroData` from the shared backend, replacing static mocks in `lib/data/products.ts`.
2. **Homepage Metrics**: Hydrate the `StatsStrip` component with live enterprise metrics.
3. **Component Standardization**: Ensure all static pages (`/about`, `/infrastructure`, etc.) consistently implement the `Navbar` and `Footer` layouts.

### 🟡 Medium Priority (UX & Performance)
4. **Image Optimization**: Audit all components to ensure `next/image` is used with appropriate `sizes` attributes for WebP delivery.
5. **Brand Consistency**: Review the Tailwind configuration to ensure the exact corporate color palette (Treishvaam Green/Earth tones) is applied uniformly across all Shadcn components.
6. **Error Boundaries**: Implement robust Next.js `error.tsx` boundaries to gracefully handle scenarios where the backend API proxy returns a `503 Service Unavailable`.

### 🟢 Low Priority
7. **Accessibility (a11y)**: Audit contrast ratios, ARIA labels, and keyboard navigation flows.
8. **Analytics**: Safely integrate GA4 or tracking pixels without violating the strict Content Security Policy (CSP) headers injected by the backend.

---

## Next Immediate Steps
1. Review the `lib/api-client.ts` utility and begin wiring it into the Product Catalog components.
2. Polish the Tailwind UI for the newly structured enterprise pages.