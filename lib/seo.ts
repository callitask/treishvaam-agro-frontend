/**
 * AI-CONTEXT:
 * Enterprise SEO Utilities
 * Generates JSON-LD, breadcrumbs, and metadata for B2B product pages
 * Complements Cloudflare Worker edge injection
 */
import type { Product } from "@/lib/data/products";

export const SITE_URL = "https://treishvaamagro.com";
export const SITE_NAME = "Treishvaam Agro";
export const ORG_LOGO = "https://treishvaamgroup.com/logo512.webp";

export function generateProductJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { "@type": "Brand", name: "Treishvaam Agro" },
    manufacturer: { "@type": "Organization", name: "Treishvaam Agro", url: SITE_URL },
    category: product.category,
    sku: product.id,
    mpn: product.hsCode || product.id,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Treishvaam Agro" },
      lowPrice: product.bulkPricing?.[0]?.pricePerKg,
      highPrice: product.bulkPricing?.[product.bulkPricing.length - 1]?.pricePerKg,
    },
    additionalProperty: Object.entries(product.specifications || {}).map(([k, v]) => ({
      "@type": "PropertyValue",
      name: k,
      value: v,
    })),
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: SITE_NAME,
    alternateName: ["Treishvam Agro", "Treshvam Agro", "Trishvam Agro", "Treishvaam"],
    url: SITE_URL,
    logo: ORG_LOGO,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+91 1800-AGRO-123",
      email: "sales@treishvaamagro.com",
      areaServed: "Global",
      availableLanguage: ["English"],
    },
  };
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
