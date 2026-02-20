/**
 * AI-CONTEXT:
 * Purpose: Product data and types for Treishvaam Agro.
 * Scope: Centralized product catalog definitions.
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  organic?: boolean;
  packaging?: {
    retail: string[];
    bulk: string[];
  };
  specifications?: Record<string, string>;
  certifications?: string[];
  applications?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Organic Rice",
    description: "Premium organic basmati rice from sustainable farms, grown without synthetic pesticides or fertilizers.",
    price: 8.99,
    category: "Grains",
    image: "/api/placeholder?w=500&h=500",
    organic: true,
    packaging: {
      retail: ["1kg bags", "2kg bags", "5kg bags"],
      bulk: ["25kg sacks", "50kg sacks"],
    },
    specifications: {
      moistureContent: "12-14%",
      brokenKernels: "Max 5%",
      variety: "Basmati (Aged)",
      mill: "White Polished",
    },
    certifications: ["EU Organic", "USDA Organic", "Fair Trade"],
    applications: ["Cookery", "Premium Restaurants", "Export"],
  },
  {
    id: "2",
    name: "Organic Wheat",
    description: "High-quality organic wheat flour for baking, milling, and industrial use.",
    price: 6.99,
    category: "Grains",
    image: "/api/placeholder?w=500&h=500",
    organic: true,
    packaging: {
      retail: ["1kg bags", "5kg bags"],
      bulk: ["25kg sacks", "50kg sacks"],
    },
    specifications: {
      moistureContent: "11-13%",
      protein: "13-14%",
      variety: "Hard Wheat",
      mill: "Milled to Grade A",
    },
    certifications: ["EU Organic", "USDA Organic"],
    applications: ["Bakery", "Pasta Making", "Noodles"],
  },
  {
    id: "3",
    name: "Sugarcane Juice",
    description: "Fresh pressed sugarcane juice with no additives, produced under strict hygiene standards.",
    price: 4.99,
    category: "Beverages",
    image: "/api/placeholder?w=500&h=500",
    packaging: {
      retail: ["500ml bottles", "1L bottles"],
      bulk: ["5L containers", "10L containers"],
    },
    specifications: {
      brixValue: "18-22",
      sugar: "16-18% by weight",
      sourcing: "Local Farms",
      preservation: "Fresh Pressed",
    },
    certifications: ["Food Safety", "FSSAI Certified"],
    applications: ["Direct Consumption", "Beverage Industry", "Food Processing"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
