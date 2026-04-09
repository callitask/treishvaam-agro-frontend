/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Centralized local data store for Treishvaam Agro products.
 *
 * Scope:
 * - Provides static JSON data for SSG generation (app/products/[id]/page.tsx).
 * - Defines the strict TypeScript `Product` interface.
 *
 * Critical Dependencies:
 * - Consumed by Next.js static generation pipeline.
 *
 * Security Constraints:
 * - N/A
 *
 * Non-Negotiables:
 * - The `Product` interface MUST accurately reflect all properties used in the UI to prevent build-time Type Errors.
 *
 * Change Intent:
 * - Expanded the Product interface to include optional `features` and `specifications` arrays/objects to fix a TypeScript build crash.
 *
 * Future AI Guidance:
 * - When adding new fields to the product data, you must ALWAYS update the `Product` interface first.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - EDITED:
 * • Added `features?: string[]` and `specifications?: Record<string, string>` to the Product interface.
 * • Why the edit was required: Next.js build failed with "Property 'features' does not exist on type 'Product'".
 * • 2026-04-10
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

export interface Product {
  id: string | number;
  name: string;
  category: string;
  description: string;
  image?: string;
  features?: string[];
  specifications?: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wheat Seeds",
    category: "Seeds",
    description: "High-yield, disease-resistant wheat seeds developed for diverse climates.",
    features: ["Drought resistant", "High protein content", "98% germination rate"],
    specifications: {
      "Purity": "99%",
      "Moisture": "12% Max",
      "Packaging": "50kg Bags"
    }
  },
  {
    id: "2",
    name: "Organic Rice",
    category: "Grains",
    description: "100% organic certified basmati rice cultivated without synthetic pesticides.",
    features: ["Certified Organic", "Aromatic", "Long grain"],
    specifications: {
      "Broken Ratio": "2% Max",
      "Sortex": "100% Clean",
      "Packaging": "25kg Bags"
    }
  },
  {
    id: "3",
    name: "Agricultural Fertilizers",
    category: "Nutrients",
    description: "Balanced NPK fertilizers optimized for soil health and crop vitality.",
    features: ["Fast acting", "Water soluble", "Improves soil structure"],
    specifications: {
      "Type": "NPK 20-20-20",
      "Form": "Granular",
      "Packaging": "50kg Bags"
    }
  }
];