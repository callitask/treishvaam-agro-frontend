/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Developer onboarding and architectural overview for the Treishvaam Agro Frontend.
 *
 * Scope:
 * - Details the Next.js App Router setup, Edge Worker proxy dependency, Landify Design System, and Zero-Trust data fetching rules.
 *
 * Critical Dependencies:
 * - Cloudflare Pages (Static Hosting).
 * - Cloudflare Worker (`treishvaamagro-seo-worker`) for all API routing, SPA Fallbacks, Cache-Shielding, and SEO logic.
 * - Shared Java Spring Boot Backend (`finance-api`) operating in Multi-Tenant mode.
 *
 * Security Constraints:
 * - This frontend MUST NEVER connect directly to the Java backend. 
 * - No backend origins or tracking IDs may be hardcoded in this repository.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED: Initial Next.js project creation.
 * - EDITED:
 * • Phase 3 Update: Rewritten to reflect the Zero-Trust Edge Architecture.
 * • Documented the requirement to use `lib/api-client.ts` strictly with relative `/api/v1` paths.
 * - EDITED:
 * • Phase 4/5 Update: Merged Landify Design System documentation.
 * • Enforced Zero-Trust Environment Variables (`NEXT_PUBLIC_*`) for API routing and future Analytics/Ads integration (0ms TBT architecture).
 * - EDITED (LATEST):
 * • Consolidated documentation to reflect the Apex Domain state (`treishvaamagro.com`).
 * • Documented Edge-Managed Semantic SEO (Typo-Tolerance) and Cache-Shielding protocols.
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

# Treishvaam Agro | Enterprise Frontend

This repository houses the frontend application for **Treishvaam Agro**, built with Next.js (App Router), Radix UI, and Tailwind CSS. It is deployed on Cloudflare Pages and utilizes the **Landify Design System**.

## 1. 🏗️ Enterprise Architecture (Zero-Trust Edge)

Unlike standard Next.js applications, this project implements a **Strict Zero-Trust Edge Topology**. The Next.js application acts *only* as a UI rendering shell. It is completely blind to the backend infrastructure.

1. **Cloudflare Pages:** Hosts the static Next.js React assets.
2. **Cloudflare Worker (`treishvaamagro-seo-worker`):** Sits *in front* of the Pages deployment. It acts as the absolute ingress point, handling Aggressive SPA Fallbacks and routing proxies.
3. **Shared Backend (`finance-api`):** The multi-tenant Spring Boot backend that serves data based strictly on the injected `X-Tenant-ID`.

### Data Fetching Rule (Strict)
You must **never** hardcode backend URLs (e.g., `https://api.treishvaamgroup.com`) in this codebase. All data fetching must use the centralized `lib/api-client.ts` utility using **relative paths**.

```typescript
// Correct Data Fetching Pattern
import { fetchAgroData } from '@/lib/api-client';

const data = await fetchAgroData('/products'); 
// The browser requests: [https://treishvaamagro.com/api/v1/products](https://treishvaamagro.com/api/v1/products)
// The Edge Worker intercepts this, injects `X-Tenant-ID: agro`, and proxies it to the secure backend tunnel.
```

### SEO, Semantic Entities & Sitemaps (Edge Managed)
Do not attempt to configure `robots.txt` or `sitemap.xml` inside the Next.js `app/` or `public/` directories. 
* Sitemaps are served from a Cloudflare KV Cache via the Edge Worker, protected by a Tier-1 CDN Cache-Shield.
* E-E-A-T JSON-LD schemas (Organization, Person) featuring semantic `alternateName` typo-tolerance arrays are injected via `HTMLRewriter` at the Edge to protect the public UI from raw misspellings.
* `metadataBase` is strictly set to `https://treishvaamagro.com` in `app/layout.tsx` to enforce apex canonicalization.

## 2. 🔐 Security & Configuration (Zero Trust)

**Fort Knox Security Suite: ENABLED**
This project strictly follows the **12-Factor App** configuration methodology. All production URLs and Tracking IDs are hidden from the codebase and injected strictly at runtime.

### Environment Variables
The application requires the following variables. Create a `.env.local` file for local development.

| Variable Name | Description | Required |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_API_URL` | The URL of the Spring Boot Backend (For local dev only). | **Yes** |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID (`G-XXX`). | No |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Google AdSense Publisher ID (`ca-pub-XXX`). | No |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads Tracking ID (`AW-XXX`). | No |

### Enterprise Analytics Rule (0ms TBT)
Standard `<Script>` tags for Google Analytics or Ads are **prohibited** in `app/layout.tsx` as they block the main thread. Tracking must be implemented using an Interaction-Based Deferred Loading strategy (e.g., `ThirdPartyScripts.tsx`) that waits for user scroll/interaction or a 7-second timeout before injecting the payload.

## 3. 🎨 Landify Design System

The UI is built using Shadcn UI (Radix primitives) customized with the Landify Enterprise palette.

### Color Tokens (Tailwind)
```javascript
colors: {
  primary: {
    DEFAULT: "#4CAF50",       // Brand Green (Buttons, Highlights)
    hover: "#388E3B",         // Darker green for interactions
    foreground: "#FFFFFF"
  },
  secondary: {
    DEFAULT: "#263238",       // Dark Slate (Headings/Primary text)
    foreground: "#FFFFFF"
  },
  silver: {
    DEFAULT: "#F5F7FA",       // Light background (Hero section)
    dark: "#D1D5DB"
  },
}
```

### Typography
- **Font Family:** Inter (via Tailwind default)
- **Headline Style:** Bold, large, Dark Slate (`text-secondary`)
- **Accent Highlight:** Brand Green (`text-primary`)

## 4. 🚀 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure `.env.local`:
   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:8080
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser.

*Note: When developing locally, API calls to `/api/*` will fail unless you have configured `NEXT_PUBLIC_API_URL` to point to your local Spring Boot instance.*