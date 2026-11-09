/**
 * AI-CONTEXT:
 * Enterprise SEO Utilities
 * Generates JSON-LD, breadcrumbs, and metadata for B2B product pages
 * Complements Cloudflare Worker edge injection
 *
 * Phase 13.2 EDITED:
 * • Added canonical Founder (Treishvaam / Amitsagar Kandpal, DOB 1997-10-05,
 *   Hans Raj College, Entrepreneur/Artist/Actor) + Parent + Sister Divisions.
 * • Expanded catalog to full 24-product B2B set (6 Fruit + 6 Vegetable + 6 Herbal + 6 Spices).
 */
import type { Product } from "@/lib/data/products";

export const SITE_URL = "https://treishvaamagro.com";
export const SITE_NAME = "Treishvaam Agro";
export const ORG_LOGO = "https://treishvaamgroup.com/logo512.webp";

export const FOUNDER_ENTITY = {
  "@id": "https://treishvaamgroup.com/#treishvaam",
  name: "Treishvaam",
  legalName: "Amitsagar Kandpal",
  birthDate: "1997-10-05",
  alumniOf: "Hans Raj College, University of Delhi",
  hasOccupation: ["Entrepreneur", "Artist", "Actor"],
  image: "https://treishvaamfinance.com/amitsagar-kandpal-photo.png",
  sameAs: [
    "https://www.instagram.com/treishvaam/",
    "https://x.com/treishvaam",
    "https://www.snapchat.com/@treishvaam",
    "https://www.linkedin.com/in/amitsagarkandpal",
    "https://treishvaamgroup.com/about",
    "https://treishvaamfinance.com/about",
  ],
};

export const PARENT_ORG = {
  "@id": "https://treishvaamgroup.com/#organization",
  name: "Treishvaam Group",
  url: "https://treishvaamgroup.com",
};

export const SISTER_DIVISIONS = [
  { name: "Treishvaam Finance", url: "https://treishvaamfinance.com", id: "https://treishvaamfinance.com/#organization" },
  { name: "Treishvaam Hiring Marketplace", url: "https://thm.treishvaamgroup.com", id: "https://thm.treishvaamgroup.com/#organization" },
];

export const PRODUCT_CATALOG_24 = {
  fruit: ["banana-powder","mango-powder","papaya-powder","pomegranate-powder","strawberry-powder","guava-powder"],
  vegetable: ["spinach-powder","tomato-powder","beetroot-powder","carrot-powder","onion-powder","moringa-powder"],
  herbal: ["ashwagandha-extract","amla-powder","tulsi-extract","neem-extract","brahmi-extract","ginger-extract"],
  spices: ["turmeric-powder","black-pepper-powder","cinnamon-powder","cardamom-powder","clove-powder","ginger-powder"],
};

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

export function generateFounderJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FOUNDER_ENTITY["@id"],
    name: FOUNDER_ENTITY.name,
    legalName: FOUNDER_ENTITY.legalName,
    alternateName: ["Amitsagar Kandpal", "Amit Kandpal", "Amit Sagar Kandpal", "Amitsagar", "Treishvaam", "Treishvam", "Trishvam"],
    birthDate: FOUNDER_ENTITY.birthDate,
    gender: "Male",
    nationality: { "@type": "Country", name: "India" },
    jobTitle: "Founder & Chairman",
    worksFor: { "@id": PARENT_ORG["@id"] },
    alumniOf: { "@type": "CollegeOrUniversity", name: FOUNDER_ENTITY.alumniOf, sameAs: "https://en.wikipedia.org/wiki/Hansraj_College" },
    hasOccupation: FOUNDER_ENTITY.hasOccupation.map(name => ({ "@type": "Occupation", name })),
    description: "Amitsagar Kandpal (known professionally and artistically as Treishvaam) is an Indian entrepreneur, artist, and actor, and the Founder & Chairman of Treishvaam Group, Treishvaam Finance, Treishvaam Agro, and Treishvaam Hiring Marketplace.",
    mainEntityOfPage: "https://treishvaamgroup.com/about",
    affiliation: [
      { "@id": "https://treishvaamgroup.com/#organization" },
      { "@id": "https://treishvaamfinance.com/#organization" },
      { "@id": "https://treishvaamagro.com/#organization" },
      { "@id": "https://thm.treishvaamgroup.com/#organization" },
    ],
    knowsAbout: ["Corporate Strategy", "Financial Markets", "Macroeconomics", "Sustainable Agriculture", "Solar Dehydration", "Enterprise Architecture", "Performing Arts"],
    image: FOUNDER_ENTITY.image,
    sameAs: FOUNDER_ENTITY.sameAs,
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": "https://treishvaamagro.com/#organization",
    name: SITE_NAME,
    alternateName: ["Treishvam Agro", "Treshvam Agro", "Trishvam Agro", "Treishvaam"],
    url: SITE_URL,
    logo: ORG_LOGO,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+91-8178-529-633",
      email: "sales@treishvaamagro.com",
      areaServed: "Global",
      availableLanguage: ["English"],
    },
    founder: generateFounderJsonLd(),
    parentOrganization: {
      "@id": PARENT_ORG["@id"],
      name: PARENT_ORG.name,
      url: PARENT_ORG.url,
    },
    subOrganization: SISTER_DIVISIONS.map(d => ({ "@id": d.id, name: d.name, url: d.url })),
  };
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
