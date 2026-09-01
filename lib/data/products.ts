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
 * - EDITED (2026-09-01):
 * • Expanded catalog from 12 to 24 SKUs for complete B2B export coverage (6 per category).
 * • Recalibrated bulk FOB pricing from 2025-26 web research (India spray-dried mandi vs FOB: mango $9.5/kg, banana €2.7/kg, tomato $3/kg domestic vs $5.9 export, spinach $1.9 domestic vs $6.8 premium organic, ashwagandha $4.8-54/kg grade-dependent, turmeric 95% $69-90/kg).
 * • Added 12 new enterprise SKUs: pomegranate, strawberry, guava, carrot, onion, tulsi, neem, brahmi, cinnamon, cardamom, clove, carrot.
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

/**
 * Enterprise B2B Product Domain Model
 * All product fields below are consumed by SSG, SEO JSON-LD, and RFQ flows.
 * Keep `id` as URL-safe slug for /products/[id] routing (enterprise SEO slug consistency).
 */
export type ProductCategory = "Fruit Powders" | "Vegetable Powders" | "Herbal Extracts" | "Organic Spices";

export interface BulkTier {
  moq: string;
  pricePerKg: string;
  note?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  shortDesc: string;
  image: string;
  gallery?: string[];
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  certifications: string[];
  origin: string;
  hsCode: string;
  moq: string;
  leadTime: string;
  shelfLife: string;
  packagingOptions: string[];
  storage: string;
  bulkPricing: BulkTier[];
  coaAvailable: boolean;
  specSheetUrl?: string;
  featured: boolean;
}

export const CATEGORIES: ProductCategory[] = ["Fruit Powders", "Vegetable Powders", "Herbal Extracts", "Organic Spices"];

export const products: Product[] = [
  // ========== FRUIT POWDERS (6) ==========
  {
    id: "banana-powder",
    slug: "banana-powder",
    name: "Organic Banana Powder",
    category: "Fruit Powders",
    description: "Spray-dried 100% natural Cavendish banana powder retaining volatile aroma, potassium (1200mg/100g), and dietary fiber via low-temp tunnel drying at <45C. Ideal for B2B baby food (Nestle-grade), bakery premixes, beverage fortification, and confectionery at industrial scale. Instant soluble, 80 mesh, EU pesticide compliant. Procured from Tamil Nadu contract farms, processed in HACCP/ISO 22000 facility, 500+ MT/yr. Trusted by beverage and bakery manufacturers in USA, EU, GCC for clean-label formulations.",
    shortDesc: "Spray-dried banana, high potassium, baby-food grade.",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1000&auto=format&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1000&auto=format&fit=crop"],
    features: ["100% Natural, No Carrier", "Potassium 1200mg/100g", "Water Soluble", "18 Month Shelf Life"],
    specifications: { "Moisture": "≤5%", "Bulk Density": "0.55-0.65 g/ml", "Particle Size": "80 mesh", "TPC": "<10,000 cfu/g", "Yeast & Mold": "<100 cfu/g", "Pesticide": "EU MRL Compliant" },
    applications: ["Baby Food", "Baking", "Beverages", "Confectionery"],
    certifications: ["FSSAI", "HACCP", "ISO 22000", "USDA Organic"],
    origin: "Tamil Nadu, India",
    hsCode: "1106.30",
    moq: "500 kg",
    leadTime: "14-21 days",
    shelfLife: "18 months",
    packagingOptions: ["25 kg HDPE Drum with LDPE Liner", "10 kg Carton"],
    storage: "Cool, dry place below 25°C",
    bulkPricing: [{ moq: "500 kg", pricePerKg: "$4.20" }, { moq: "2 MT", pricePerKg: "$3.85" }, { moq: "10 MT+", pricePerKg: "$3.40", note: "Annual contract" }],
    coaAvailable: true,
    featured: true,
  },
  {
    id: "mango-powder",
    slug: "mango-powder",
    name: "Alphonso Mango Powder",
    category: "Fruit Powders",
    description: "Authentic Ratnagiri Alphonso mango powder, Brix 55, low water activity, spray-dried at <45C to preserve beta-carotene and volatile esters. For enterprise confectionery, ice cream, RTD beverages, and yogurt. No added sugar, golden yellow, 95% soluble. FOB $9.5/kg benchmark (EximNext 2026). Direct farm procurement, spray drying, and aseptic packing. Preferred by confectionery and dairy majors in EU and GCC for premium Alphonso authenticity.",
    shortDesc: "Alphonso, Brix 55°, for confectionery & beverages.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=1000",
    features: ["Alphonso Variety", "Brix 55°", "Spray Dried <45°C", "No Added Sugar"],
    specifications: { "Moisture": "≤4%", "Solubility": "≥95%", "Acidity": "1.2%", "Color": "Golden Yellow", "Bulk Density": "0.50 g/ml", "TPC": "<10,000 cfu/g" },
    applications: ["Ice Cream", "Confectionery", "Beverages", "Yogurt"],
    certifications: ["FSSAI", "HACCP", "USDA Organic", "ISO 22000"],
    origin: "Ratnagiri, India",
    hsCode: "1106.30",
    moq: "250 kg",
    leadTime: "14 days",
    shelfLife: "18 months",
    packagingOptions: ["20 kg Carton", "25 kg Drum"],
    storage: "Below 20°C, airtight",
    bulkPricing: [{ moq: "250 kg", pricePerKg: "$9.50" }, { moq: "1 MT", pricePerKg: "$8.80" }, { moq: "5 MT+", pricePerKg: "$8.10" }],
    coaAvailable: true,
    featured: true,
  },
  {
    id: "papaya-powder",
    slug: "papaya-powder",
    name: "Papaya Powder",
    category: "Fruit Powders",
    description: "Tropical papaya powder with papain activity preserved (6000 USP/mg) for nutraceutical gummies, digestive aids, beverage mixes, and smoothies. Vacuum-dried, natural orange-yellow, low micro (<10k cfu), clean label, no maltodextrin. Sourced from Andhra Pradesh, gentle drying preserves enzymes and color. Used by nutraceutical and functional beverage brands in USA and ASEAN for digestive health formulations.",
    shortDesc: "Papain-rich papaya for gummies and beverages.",
    image: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?q=80&w=1000&auto=format&fit=crop",
    features: ["Papain Activity ≥6000 USP/mg", "Natural Color", "Low Micro", "Vacuum Dried"],
    specifications: { "Moisture": "≤5%", "Papain": "≥6000 USP/mg", "Mesh": "80", "Color": "Orange-yellow", "TPC": "<10,000 cfu/g" },
    applications: ["Gummies", "Beverages", "Digestive Aids", "Smoothies"],
    certifications: ["FSSAI", "ISO 22000", "GMP"],
    origin: "Andhra Pradesh, India",
    hsCode: "1106.30",
    moq: "300 kg",
    leadTime: "14 days",
    shelfLife: "18 months",
    packagingOptions: ["20 kg Carton", "25 kg Drum"],
    storage: "Cool dry, below 20°C",
    bulkPricing: [{ moq: "300 kg", pricePerKg: "$7.80" }, { moq: "2 MT", pricePerKg: "$7.10" }, { moq: "8 MT+", pricePerKg: "$6.50" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "pomegranate-powder",
    slug: "pomegranate-powder",
    name: "Pomegranate Powder",
    category: "Fruit Powders",
    description: "Freeze-dried pomegranate powder, high punicalagin and anthocyanin (1.2%) retention for antioxidant beverages, supplements, and beauty-from-within capsules. Ruby red, tart-sweet, water soluble, ORAC 8000. For B2B beverage and cosmetics manufacturers seeking natural red color and antioxidant claim. Maharashtra origin, freeze-drying preserves polyphenols. Exported to EU and USA for clean-label antioxidant premixes.",
    shortDesc: "Antioxidant pomegranate for beverages & beauty.",
    image: "https://images.unsplash.com/photo-1615484477778-5d78f1fa1a2d?q=80&w=1000&auto=format&fit=crop",
    features: ["Freeze Dried", "Punicalagin Rich", "Anthocyanin 1.2%", "Water Soluble"],
    specifications: { "Moisture": "≤4%", "Anthocyanin": "≥1.2%", "Mesh": "80", "pH": "3.2-3.8", "ORAC": "≥8000 µmol TE/100g" },
    applications: ["Antioxidant Drinks", "Supplements", "Confectionery", "Cosmetics"],
    certifications: ["USDA Organic", "HACCP", "ISO 22000", "Kosher"],
    origin: "Maharashtra, India",
    hsCode: "1106.30",
    moq: "200 kg",
    leadTime: "16 days",
    shelfLife: "20 months",
    packagingOptions: ["10 kg Carton", "25 kg Drum"],
    storage: "Sealed, below 15°C, dark",
    bulkPricing: [{ moq: "200 kg", pricePerKg: "$11.20" }, { moq: "1 MT", pricePerKg: "$10.40" }, { moq: "5 MT+", pricePerKg: "$9.60" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "strawberry-powder",
    slug: "strawberry-powder",
    name: "Strawberry Powder",
    category: "Fruit Powders",
    description: "Spray-dried strawberry powder from Mahabaleshwar, vibrant red, strong aroma, ellagitannin and vitamin C retention for B2B yogurt, bakery, instant desserts, and beverages. Non-GMO, 97% soluble, no carrier. 80 mesh, pH 3.5, bright red. Low-temp dried to preserve anthocyanins. Chosen by dairy and bakery enterprises in EU and Australia for natural strawberry flavor and color without artificial additives.",
    shortDesc: "Vibrant strawberry for yogurt & bakery.",
    image: "https://images.unsplash.com/photo-1543528171-82ad06d0f93d?q=80&w=1000&auto=format&fit=crop",
    features: ["Mahabaleshwar Origin", "No Carrier", "Ellagic Acid", "Instant Soluble"],
    specifications: { "Moisture": "≤4%", "Mesh": "80", "Color": "Bright Red", "pH": "3.5", "Solubility": "≥97%" },
    applications: ["Yogurt", "Bakery", "Instant Desserts", "Beverages"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    origin: "Maharashtra, India",
    hsCode: "1106.30",
    moq: "200 kg",
    leadTime: "14 days",
    shelfLife: "18 months",
    packagingOptions: ["15 kg Carton", "25 kg Drum"],
    storage: "Cool dry, airtight",
    bulkPricing: [{ moq: "200 kg", pricePerKg: "$13.50" }, { moq: "1 MT", pricePerKg: "$12.20" }, { moq: "4 MT+", pricePerKg: "$10.90" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "guava-powder",
    slug: "guava-powder",
    name: "Pink Guava Powder",
    category: "Fruit Powders",
    description: "Pink guava powder, tropical, high lycopene and vitamin C (150mg/100g), low-methoxyl pectin for clean-label jams, beverages, baby food, and confectionery. Mild sweet, light pink, pH 3.8-4.2, 80 mesh. Uttar Pradesh origin, low-temp dried. Used by jam, beverage, and baby food manufacturers in GCC and ASEAN for natural pink color and vitamin C fortification.",
    shortDesc: "Tropical pink guava for jams & beverages.",
    image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=1000&auto=format&fit=crop",
    features: ["Pink Variety", "Lycopene & Vitamin C", "Low-Temp Dried", "No Added Sugar"],
    specifications: { "Moisture": "≤5%", "Mesh": "80", "Vitamin C": "≥150mg/100g", "pH": "3.8-4.2", "Color": "Light Pink" },
    applications: ["Jams", "Beverages", "Baby Food", "Confectionery"],
    certifications: ["FSSAI", "HACCP", "ISO 22000"],
    origin: "Uttar Pradesh, India",
    hsCode: "1106.30",
    moq: "300 kg",
    leadTime: "14 days",
    shelfLife: "18 months",
    packagingOptions: ["20 kg Carton", "25 kg Drum"],
    storage: "Cool dry, <25°C",
    bulkPricing: [{ moq: "300 kg", pricePerKg: "$7.20" }, { moq: "1.5 MT", pricePerKg: "$6.60" }, { moq: "6 MT+", pricePerKg: "$6.00" }],
    coaAvailable: true,
    featured: false,
  },

  // ========== VEGETABLE POWDERS (6) ==========
  {
    id: "spinach-powder",
    slug: "spinach-powder",
    name: "Premium Spinach Powder",
    category: "Vegetable Powders",
    description: "Nutrient-dense spinach powder with 4.2% chlorophyll retention via low-temp tunnel drying at <45C. 100 mesh, high iron, protein, and vitamins A/C for B2B supplements, green pasta, extruded snacks, and smoothie premixes. Vegan, no additives, EU MRL pesticide compliant. Punjab contract farming, cold drying preserves color and iron. Supplied to supplement and pasta manufacturers in USA, Germany, and Australia for clean-label green fortification.",
    shortDesc: "Chlorophyll-rich spinach for supplements & pasta.",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000&auto=format&fit=crop",
    features: ["Cold Dried <45°C", "Chlorophyll ≥4%", "Iron Rich", "Vegan"],
    specifications: { "Moisture": "≤6%", "Chlorophyll": "≥4%", "Particle Size": "100 mesh", "TPC": "<10,000 cfu/g", "Lead": "<0.5 ppm", "Pesticide": "EU MRL" },
    applications: ["Supplements", "Pasta", "Snacks", "Smoothies"],
    certifications: ["ISO 9001:2015", "HACCP", "GMP", "USDA Organic"],
    origin: "Punjab, India",
    hsCode: "0712.90",
    moq: "500 kg",
    leadTime: "14-21 days",
    shelfLife: "24 months",
    packagingOptions: ["20 kg Carton", "25 kg Drum"],
    storage: "Store airtight, away from sunlight",
    bulkPricing: [{ moq: "500 kg", pricePerKg: "$6.80" }, { moq: "2 MT", pricePerKg: "$6.25" }, { moq: "10 MT+", pricePerKg: "$5.70" }],
    coaAvailable: true,
    featured: true,
  },
  {
    id: "tomato-powder",
    slug: "tomato-powder",
    name: "Tomato Powder",
    category: "Vegetable Powders",
    description: "Spray-dried tomato powder with lycopene retention (0.04%, natural antioxidant) for B2B soups, sauces, seasoning blends, and snack coatings. Bright red, instant soluble, 60 mesh, acidity 4%, no anti-caking. Karnataka origin, spray-dried to preserve lycopene and umami. Domestic 136 INR/kg, FOB ~$5.9/kg premium export. Used by soup, sauce, and snack manufacturers in GCC and EU for natural umami and red color.",
    shortDesc: "Lycopene-rich tomato for soups & seasonings.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4da028fea?q=80&w=1000&auto=format&fit=crop",
    features: ["Lycopene ≥0.04%", "No Anti-Caking", "Deep Red Color", "Instant Soluble"],
    specifications: { "Moisture": "≤6%", "Lycopene": "≥0.04%", "Acidity": "4%", "Mesh": "60", "TPC": "<10,000 cfu/g" },
    applications: ["Soups", "Sauces", "Snacks", "Seasonings"],
    certifications: ["ISO 22000", "HACCP", "FSSAI"],
    origin: "Karnataka, India",
    hsCode: "0712.90",
    moq: "500 kg",
    leadTime: "12 days",
    shelfLife: "18 months",
    packagingOptions: ["25 kg Bag", "20 kg Box"],
    storage: "Dry, 15-25°C",
    bulkPricing: [{ moq: "500 kg", pricePerKg: "$5.90" }, { moq: "3 MT", pricePerKg: "$5.30" }, { moq: "15 MT+", pricePerKg: "$4.80" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "beetroot-powder",
    slug: "beetroot-powder",
    name: "Beetroot Powder",
    category: "Vegetable Powders",
    description: "Nitrate-rich beetroot powder (Nitrate 2.5% +/-0.3, betalain 0.4-1.0%) with natural betalain red-purple color (E162) for sports nutrition, natural coloring, beverages, and bakery. Cold-pressed, 80 mesh, pH 4.5-5.5. Maharashtra origin, controlled dehydration retains nitrates and iron. FOB $3.0-4.5/MT benchmark, enterprise $4.8/kg entry. Chosen by sports nutrition and beverage brands in USA and EU for clean-label red and nitrate claim.",
    shortDesc: "Nitrate 2.5% betalain color for sports nutrition.",
    image: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?auto=format&fit=crop&q=80&w=1000",
    features: ["Nitrate 2.5%", "Betalain 0.4-1.0%", "Natural Color E162", "Cold Pressed"],
    specifications: { "Moisture": "≤5%", "Nitrate": "2.5% ±0.3", "Betalain": "0.4-1.0%", "pH": "4.5-5.5", "Mesh": "80 mesh" },
    applications: ["Sports Nutrition", "Natural Coloring", "Beverages", "Bakery"],
    certifications: ["ISO 22000", "HACCP", "FSSAI", "USDA Organic"],
    origin: "Maharashtra, India",
    hsCode: "0712.90",
    moq: "500 kg",
    leadTime: "14 days",
    shelfLife: "18 months",
    packagingOptions: ["25 kg Drum", "10 kg Bag"],
    storage: "Air-tight, avoid humidity, <25°C",
    bulkPricing: [{ moq: "500 kg", pricePerKg: "$4.80" }, { moq: "2 MT", pricePerKg: "$4.40" }, { moq: "10 MT+", pricePerKg: "$3.95", note: "Annual" }],
    coaAvailable: true,
    featured: true,
  },
  {
    id: "carrot-powder",
    slug: "carrot-powder",
    name: "Carrot Powder",
    category: "Vegetable Powders",
    description: "Beta-carotene rich carrot powder (0.3% beta-carotene) for natural orange color and vitamin A fortification in B2B beverages, bakery, baby food, and soups. Sweet, earthy, vacuum-dried, 80 mesh, orange. Rajasthan origin, low-temp drying preserves carotenoids. Used by beverage and baby food manufacturers in ASEAN and EU for natural orange hue and provitamin A fortification without synthetic color.",
    shortDesc: "Beta-carotene rich carrot for color & fortification.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1000&auto=format&fit=crop",
    features: ["Beta-Carotene ≥0.3%", "Vitamin A Fortification", "Natural Orange Color", "Vacuum Dried"],
    specifications: { "Moisture": "≤6%", "Beta-Carotene": "≥0.3%", "Mesh": "80", "Color": "Orange", "TPC": "<10,000 cfu/g" },
    applications: ["Beverages", "Bakery", "Baby Food", "Soups"],
    certifications: ["FSSAI", "HACCP", "ISO 22000"],
    origin: "Rajasthan, India",
    hsCode: "0712.90",
    moq: "500 kg",
    leadTime: "14 days",
    shelfLife: "18 months",
    packagingOptions: ["25 kg Bag", "20 kg Box"],
    storage: "Cool dry, airtight",
    bulkPricing: [{ moq: "500 kg", pricePerKg: "$6.40" }, { moq: "2 MT", pricePerKg: "$5.90" }, { moq: "8 MT+", pricePerKg: "$5.30" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "onion-powder",
    slug: "onion-powder",
    name: "Dehydrated Onion Powder",
    category: "Vegetable Powders",
    description: "Steam-treated dehydrated white onion powder, pungent, low micro (<20k TPC), 80-100 mesh for B2B seasoning blends, snacks, soups, and ready meals. Strong flavor retention, ash <=5%, high pungency. Gujarat origin, steam treatment ensures micro safety. 25kg bags, 500kg-12MT tiers. Supplied to seasoning and snack manufacturers in USA, GCC, and ASEAN for consistent onion flavor and long shelf life.",
    shortDesc: "Pungent white onion for seasoning & snacks.",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=1000&auto=format&fit=crop",
    features: ["Steam Treated", "Pungent Aroma", "Low Micro", "80-100 Mesh"],
    specifications: { "Moisture": "≤5%", "Mesh": "80-100", "TPC": "<20,000 cfu/g", "Ash": "≤5%", "Pungency": "High" },
    applications: ["Seasonings", "Snacks", "Soups", "Ready Meals"],
    certifications: ["FSSAI", "ISO 22000", "HACCP", "BRC"],
    origin: "Gujarat, India",
    hsCode: "0712.20",
    moq: "500 kg",
    leadTime: "10 days",
    shelfLife: "18 months",
    packagingOptions: ["25 kg Bag", "50 kg Jumbo"],
    storage: "Dry, sealed, <25°C",
    bulkPricing: [{ moq: "500 kg", pricePerKg: "$3.80" }, { moq: "3 MT", pricePerKg: "$3.40" }, { moq: "12 MT+", pricePerKg: "$3.00" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "moringa-powder",
    slug: "moringa-powder",
    name: "Moringa Leaf Powder",
    category: "Vegetable Powders",
    description: "Moringa oleifera leaf powder, finely milled 120 mesh, protein 27%, chlorophyll high, harvested before drumsticks for maximum nutrients at shade drying. For B2B smoothies, herbal teas, capsules, and nutrition bars. Lab tested, lead <0.3ppm. Tamil Nadu origin, shade drying preserves protein and micronutrients. Domestic 350 INR/kg, FOB $11.20 enterprise. Trusted by nutraceutical and tea brands in USA and EU for superfood green formulations.",
    shortDesc: "Protein 27% moringa for smoothies & capsules.",
    image: "https://images.unsplash.com/photo-1590491040375-7b568deee940?auto=format&fit=crop&q=80&w=1000",
    features: ["120 Mesh Fine", "Protein 27%", "Shade Dried", "Lab Tested"],
    specifications: { "Protein": "≥27%", "Moisture": "≤6%", "Mesh": "120", "Lead": "<0.3 ppm", "Chlorophyll": "High" },
    applications: ["Smoothies", "Teas", "Capsules", "Bars"],
    certifications: ["USDA Organic", "ISO 22000", "Kosher", "FSSAI"],
    origin: "Tamil Nadu, India",
    hsCode: "1211.90",
    moq: "300 kg",
    leadTime: "14 days",
    shelfLife: "20 months",
    packagingOptions: ["25 kg Bag", "10 kg Bag"],
    storage: "Airtight below 25°C, dark",
    bulkPricing: [{ moq: "300 kg", pricePerKg: "$11.20" }, { moq: "2 MT", pricePerKg: "$10.10" }, { moq: "8 MT+", pricePerKg: "$9.20" }],
    coaAvailable: true,
    featured: true,
  },

  // ========== HERBAL EXTRACTS (6) ==========
  {
    id: "ashwagandha-extract",
    slug: "ashwagandha-extract",
    name: "Ashwagandha Root Extract",
    category: "Herbal Extracts",
    description: "Standardized adaptogenic Ashwagandha root extract (Withanolides 5% HPLC, root-only, water extracted, non-GMO) from Withania somnifera. KSM-66 grade 7.5% also available at $54/kg. For B2B nutraceuticals (stress, sleep, stamina), herbal teas, and pharma APIs. Water-soluble, heavy metals <10ppm. Madhya Pradesh origin, green chemistry extraction. Grade-dependent 400-4500 INR/kg. Supplied to supplement and pharma manufacturers in USA, EU, and Australia for clinically backed adaptogen formulations.",
    shortDesc: "Withanolides ≥5% (HPLC) adaptogen, root-only.",
    image: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=1000&auto=format&fit=crop",
    features: ["Standardized 5% Withanolides", "Root Only", "Water Extracted", "Non-GMO, KSM-66 option"],
    specifications: { "Withanolides": "≥5% HPLC", "Loss on Drying": "≤5%", "Heavy Metals": "<10 ppm", "Solubility": "Water soluble", "Pesticide": "EU Compliant" },
    applications: ["Nutraceuticals", "Teas", "Pharma", "Capsules"],
    certifications: ["USDA Organic", "GMP", "Kosher", "Halal", "ISO 22000"],
    origin: "Madhya Pradesh, India",
    hsCode: "1302.19",
    moq: "100 kg",
    leadTime: "21 days",
    shelfLife: "36 months",
    packagingOptions: ["25 kg Fiber Drum", "1 kg Pouch"],
    storage: "Sealed, 15-25°C, dry",
    bulkPricing: [{ moq: "100 kg", pricePerKg: "$42.00" }, { moq: "500 kg", pricePerKg: "$38.50" }, { moq: "2 MT+", pricePerKg: "$35.00" }],
    coaAvailable: true,
    featured: true,
  },
  {
    id: "amla-powder",
    slug: "amla-powder",
    name: "Amla (Gooseberry) Powder",
    category: "Herbal Extracts",
    description: "Vitamin C rich Amla (Emblica officinalis) powder (Tannins 18%, Vitamin C 5%), debittered, spray-dried, high ORAC for B2B nutraceutical immunity premixes, juices, and shots. pH 3.0-3.5, 80 mesh. Uttar Pradesh origin, debittering preserves tannins while reducing astringency. Used by immunity supplement and beverage brands in GCC and USA for natural vitamin C and antioxidant claim.",
    shortDesc: "Tannins ≥18% amla for immunity premixes.",
    image: "https://images.unsplash.com/photo-1625944230945-1b7dd3b07798?q=80&w=1000&auto=format&fit=crop",
    features: ["Tannins ≥18%", "Debittered", "Spray Dried", "High ORAC"],
    specifications: { "Tannins": "≥18%", "Moisture": "≤5%", "pH": "3.0-3.5", "Mesh": "80", "Vitamin C": "≥5%" },
    applications: ["Supplements", "Juices", "Immunity Shots", "Teas"],
    certifications: ["FSSAI", "HACCP", "USDA Organic", "ISO 22000"],
    origin: "Uttar Pradesh, India",
    hsCode: "1106.30",
    moq: "300 kg",
    leadTime: "16 days",
    shelfLife: "24 months",
    packagingOptions: ["25 kg Drum"],
    storage: "Cool dry, sealed",
    bulkPricing: [{ moq: "300 kg", pricePerKg: "$13.50" }, { moq: "1.5 MT", pricePerKg: "$12.20" }, { moq: "6 MT+", pricePerKg: "$11.00" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "tulsi-extract",
    slug: "tulsi-extract",
    name: "Tulsi (Holy Basil) Extract",
    category: "Herbal Extracts",
    description: "Tulsi (Ocimum sanctum) extract standardized to Ursolic acid 2% HPLC and Eugenol, adaptogenic and immune-support for B2B teas, supplements, Ayurveda formulations, and functional beverages. Green-brown fine powder, water soluble, shade dried. Karnataka origin, standardized to bioactives. For tea and supplement manufacturers in EU and ASEAN seeking holy basil authenticity and immunity positioning.",
    shortDesc: "Ursolic ≥2% tulsi for immunity & teas.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop",
    features: ["Ursolic ≥2% HPLC", "Eugenol Rich", "Water Soluble", "Shade Dried"],
    specifications: { "Ursolic Acid": "≥2% HPLC", "Moisture": "≤5%", "Mesh": "80", "TPC": "<10,000 cfu/g", "Heavy Metals": "<10 ppm" },
    applications: ["Teas", "Supplements", "Ayurveda", "Beverages"],
    certifications: ["USDA Organic", "GMP", "HACCP", "Kosher"],
    origin: "Karnataka, India",
    hsCode: "1302.19",
    moq: "200 kg",
    leadTime: "18 days",
    shelfLife: "24 months",
    packagingOptions: ["25 kg Drum", "5 kg Bag"],
    storage: "Cool dry, sealed",
    bulkPricing: [{ moq: "200 kg", pricePerKg: "$18.50" }, { moq: "1 MT", pricePerKg: "$17.00" }, { moq: "5 MT+", pricePerKg: "$15.50" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "neem-extract",
    slug: "neem-extract",
    name: "Neem Leaf Extract",
    category: "Herbal Extracts",
    description: "Neem leaf extract, azadirachtin 4% HPLC, bitter principles for B2B nutraceutical bitters, agricultural bio-pesticide, and cosmetics. Ethanol extracted, high potency, partially water soluble, 80 mesh. Rajasthan origin, concentrated bitters. Used by supplement and agri-input companies in Africa, GCC, and ASEAN for bitter and bio-pesticide formulations.",
    shortDesc: "Azadirachtin 4% neem for supplements & bio-pesticide.",
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1000&auto=format&fit=crop",
    features: ["Azadirachtin 4%", "Bitter Principles", "Ethanol Extracted", "High Potency"],
    specifications: { "Azadirachtin": "≥4% HPLC", "Moisture": "≤5%", "Mesh": "80", "Solubility": "Partially water soluble" },
    applications: ["Supplements", "Bio-Pesticide", "Cosmetics", "Ayurveda"],
    certifications: ["GMP", "HACCP", "USDA Organic"],
    origin: "Rajasthan, India",
    hsCode: "1302.19",
    moq: "200 kg",
    leadTime: "18 days",
    shelfLife: "30 months",
    packagingOptions: ["25 kg Drum"],
    storage: "Sealed, dry, <25°C",
    bulkPricing: [{ moq: "200 kg", pricePerKg: "$22.00" }, { moq: "1 MT", pricePerKg: "$20.00" }, { moq: "4 MT+", pricePerKg: "$18.00" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "brahmi-extract",
    slug: "brahmi-extract",
    name: "Brahmi Extract",
    category: "Herbal Extracts",
    description: "Bacopa monnieri extract standardized to Bacosides 20% HPLC for B2B cognitive support (memory, focus) in nootropic supplements, syrups, and capsules. Water extracted, standardized, light brown fine powder, water soluble. Kerala origin, traditional Ayurveda + modern HPLC standardization. Supplied to nootropic and pharma brands in USA and EU for clinically studied bacoside content.",
    shortDesc: "Bacosides 20% brahmi for cognitive support.",
    image: "https://images.unsplash.com/photo-1576671414121-aa0c81c869e1?q=80&w=1000&auto=format&fit=crop",
    features: ["Bacosides 20% HPLC", "Cognitive Support", "Water Extracted", "Standardized"],
    specifications: { "Bacosides": "20% HPLC", "Moisture": "≤5%", "Mesh": "80", "Heavy Metals": "<10 ppm", "Solubility": "Water soluble" },
    applications: ["Nootropics", "Supplements", "Syrups", "Capsules"],
    certifications: ["GMP", "ISO 22000", "HACCP", "Kosher"],
    origin: "Kerala, India",
    hsCode: "1302.19",
    moq: "100 kg",
    leadTime: "20 days",
    shelfLife: "36 months",
    packagingOptions: ["25 kg Drum", "10 kg Box"],
    storage: "Cool dry, sealed",
    bulkPricing: [{ moq: "100 kg", pricePerKg: "$28.00" }, { moq: "500 kg", pricePerKg: "$25.00" }, { moq: "2 MT+", pricePerKg: "$22.50" }],
    coaAvailable: true,
    featured: true,
  },
  {
    id: "ginger-extract",
    slug: "ginger-extract",
    name: "Ginger Root Extract",
    category: "Herbal Extracts",
    description: "Premium spray-dried ginger root extract standardized to 5% Gingerols (HPLC) for B2B beverages (ginger ale, immunity shots), supplements, baking, and pharma. Pungent aroma, ethanol extracted, 80 mesh, water soluble. Assam origin, pungent Salem variety. FOB $28/kg premium extract. Chosen by beverage and supplement manufacturers in EU and GCC for standardized pungency and bioactivity.",
    shortDesc: "Gingerols ≥5% HPLC for beverages & supplements.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000",
    features: ["Gingerols ≥5%", "Spray Dried", "Ethanol Extracted", "Pungent Aroma"],
    specifications: { "Gingerols": "≥5% HPLC", "Moisture": "≤5%", "Ash": "≤5%", "Mesh": "80", "Solubility": "Water soluble" },
    applications: ["Beverages", "Supplements", "Baking", "Pharma"],
    certifications: ["GMP", "HACCP", "ISO 9001", "USDA Organic"],
    origin: "Assam, India",
    hsCode: "1302.19",
    moq: "200 kg",
    leadTime: "18 days",
    shelfLife: "24 months",
    packagingOptions: ["25 kg Drum"],
    storage: "Dry and cool, sealed",
    bulkPricing: [{ moq: "200 kg", pricePerKg: "$28.00" }, { moq: "1 MT", pricePerKg: "$25.50" }, { moq: "5 MT+", pricePerKg: "$23.00" }],
    coaAvailable: true,
    featured: false,
  },

  // ========== ORGANIC SPICES (6) ==========
  {
    id: "turmeric-powder",
    slug: "turmeric-powder",
    name: "Turmeric Curcumin Powder",
    category: "Organic Spices",
    description: "High-curcumin (5% UV, HPLC curcuminoids) turmeric powder, ETO-free sterilized, high color value (ASTA), non-irradiated for B2B culinary, cosmetics (haldi), and health drinks. 60 mesh, moisture <=8%, TPC <10k. Kerala origin, low-micro processing. Extract 95% curcumin also available at $69-90/kg vs powder $7.20. Preferred by spice, cosmetic, and beverage manufacturers in USA, EU, and GCC for high curcumin and clean micro.",
    shortDesc: "Curcumin ≥5% UV, ETO-free, high color.",
    image: "https://images.unsplash.com/photo-1615486171448-4357778b4bdc?q=80&w=1000&auto=format&fit=crop",
    features: ["Curcumin ≥5%", "ETO-Free Sterilized", "High Color Value", "Non-Irradiated"],
    specifications: { "Curcumin": "≥5% UV", "Moisture": "≤8%", "Curcuminoids": "HPLC", "Particle Size": "60 mesh", "TPC": "<10,000 cfu/g" },
    applications: ["Cosmetics", "Health Drinks", "Culinary", "Supplements"],
    certifications: ["FSSAI", "ISO 22000", "HACCP", "Halal", "USDA Organic"],
    origin: "Kerala, India",
    hsCode: "0910.30",
    moq: "500 kg",
    leadTime: "10-14 days",
    shelfLife: "24 months",
    packagingOptions: ["25 kg PP Bag", "500 kg Jumbo Bag"],
    storage: "Cool dry area, sealed",
    bulkPricing: [{ moq: "500 kg", pricePerKg: "$7.20" }, { moq: "5 MT", pricePerKg: "$6.60" }, { moq: "20 MT+", pricePerKg: "$5.90" }],
    coaAvailable: true,
    featured: true,
  },
  {
    id: "black-pepper-powder",
    slug: "black-pepper-powder",
    name: "Black Pepper Powder",
    category: "Organic Spices",
    description: "Steam-sterilized Malabar black pepper powder, Piperine 3% HPLC, volatile oil 2% v/w, ASTA clean, 30-60 mesh for B2B culinary, oleoresin extraction, seasoning, and meat processing. FSSAI, Kosher, ISO 22000. Kerala origin, steam sterilization ensures micro safety while retaining piperine and aroma. Supplied to oleoresin and seasoning manufacturers in USA and EU for standardized pungency.",
    shortDesc: "Malabar pepper Piperine ≥3%, steam-sterilized.",
    image: "https://images.unsplash.com/photo-1506368249639-73a05d4f6484?q=80&w=1000&auto=format&fit=crop",
    features: ["Piperine ≥3%", "Steam Sterilized", "Volatile Oil ≥2%", "ASTA Clean"],
    specifications: { "Piperine": "≥3% HPLC", "Moisture": "≤10%", "Volatile Oil": "≥2% v/w", "Mesh": "30-60", "TPC": "<10,000 cfu/g" },
    applications: ["Culinary", "Oleoresin", "Seasoning", "Meat Processing"],
    certifications: ["FSSAI", "ISO 22000", "HACCP", "Kosher"],
    origin: "Kerala, India",
    hsCode: "0904.12",
    moq: "500 kg",
    leadTime: "10 days",
    shelfLife: "24 months",
    packagingOptions: ["25 kg Bag", "50 kg Bag"],
    storage: "Cool dry, sealed, <25°C",
    bulkPricing: [{ moq: "500 kg", pricePerKg: "$9.00" }, { moq: "3 MT", pricePerKg: "$8.20" }, { moq: "12 MT+", pricePerKg: "$7.40" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "cinnamon-powder",
    slug: "cinnamon-powder",
    name: "Ceylon Cinnamon Powder",
    category: "Organic Spices",
    description: "True Ceylon cinnamon (Cinnamomum verum) powder, coumarin <0.004% (vs Cassia 1%), sweet woody aroma, 80 mesh for B2B bakery, beverages, pharma, and confectionery. Steam sterilized, volatile oil >=1%. Kerala origin, low coumarin for EU compliance. Chosen by premium bakery and beverage brands in EU and USA for authentic Ceylon aroma and EU food safety compliance.",
    shortDesc: "True Ceylon, coumarin <0.004%, 80 mesh.",
    image: "https://images.unsplash.com/photo-1558642084-6579ac2238ea?q=80&w=1000&auto=format&fit=crop",
    features: ["True Ceylon", "Coumarin <0.004%", "80 Mesh", "Steam Sterilized"],
    specifications: { "Coumarin": "<0.004%", "Moisture": "≤8%", "Volatile Oil": "≥1% v/w", "Mesh": "80", "TPC": "<10,000 cfu/g" },
    applications: ["Bakery", "Beverages", "Pharma", "Confectionery"],
    certifications: ["FSSAI", "ISO 22000", "HACCP", "USDA Organic"],
    origin: "Kerala, India",
    hsCode: "0906.20",
    moq: "300 kg",
    leadTime: "12 days",
    shelfLife: "24 months",
    packagingOptions: ["25 kg Bag", "15 kg Carton"],
    storage: "Cool dry, sealed",
    bulkPricing: [{ moq: "300 kg", pricePerKg: "$11.80" }, { moq: "2 MT", pricePerKg: "$10.90" }, { moq: "8 MT+", pricePerKg: "$9.90" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "cardamom-powder",
    slug: "cardamom-powder",
    name: "Green Cardamom Powder",
    category: "Organic Spices",
    description: "Green cardamom powder, premium Indian Cardamom (Elettaria cardamomum), oil >=7% v/w, intensely aromatic, 60 mesh for B2B bakery, confectionery, beverages, and premium blends. Light green, low-temp milling preserves oil. Kerala origin, premium grade. Supplied to confectionery and beverage manufacturers in GCC and EU for premium green cardamom aroma at industrial scale.",
    shortDesc: "Oil ≥7% green cardamom, intensely aromatic.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1000&auto=format&fit=crop",
    features: ["Oil ≥7% v/w", "Premium Grade", "60 Mesh", "Aromatic"],
    specifications: { "Volatile Oil": "≥7% v/w", "Moisture": "≤10%", "Mesh": "60", "Color": "Light Green", "TPC": "<10,000 cfu/g" },
    applications: ["Bakery", "Confectionery", "Beverages", "Premium Blends"],
    certifications: ["FSSAI", "ISO 22000", "HACCP", "Halal"],
    origin: "Kerala, India",
    hsCode: "0908.31",
    moq: "100 kg",
    leadTime: "12 days",
    shelfLife: "18 months",
    packagingOptions: ["10 kg Carton", "25 kg Drum"],
    storage: "Sealed, cool dark",
    bulkPricing: [{ moq: "100 kg", pricePerKg: "$24.00" }, { moq: "500 kg", pricePerKg: "$22.00" }, { moq: "2 MT+", pricePerKg: "$20.00" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "clove-powder",
    slug: "clove-powder",
    name: "Clove Powder",
    category: "Organic Spices",
    description: "Clove bud powder (Syzygium aromaticum), eugenol >=14% v/w, volatile oil >=15%, antiseptic, steam sterilized, 60 mesh, dark brown for B2B dental (clove oil), bakery, seasoning, and Ayurveda. Kerala origin, steam sterilized. Used by dental, bakery, and Ayurveda manufacturers in GCC and ASEAN for natural eugenol and warm spice profile.",
    shortDesc: "Eugenol ≥14% clove for dental & bakery.",
    image: "https://images.unsplash.com/photo-1506368083636-6defb67639a7?q=80&w=1000&auto=format&fit=crop",
    features: ["Eugenol ≥14%", "Steam Sterilized", "60 Mesh", "Antiseptic"],
    specifications: { "Eugenol": "≥14% v/w", "Moisture": "≤8%", "Volatile Oil": "≥15% v/w", "Mesh": "60", "TPC": "<10,000 cfu/g" },
    applications: ["Dental", "Bakery", "Seasoning", "Ayurveda"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    origin: "Kerala, India",
    hsCode: "0907.10",
    moq: "200 kg",
    leadTime: "12 days",
    shelfLife: "24 months",
    packagingOptions: ["25 kg Bag", "10 kg Carton"],
    storage: "Cool dry, sealed",
    bulkPricing: [{ moq: "200 kg", pricePerKg: "$18.00" }, { moq: "1 MT", pricePerKg: "$16.50" }, { moq: "4 MT+", pricePerKg: "$15.00" }],
    coaAvailable: true,
    featured: false,
  },
  {
    id: "ginger-powder",
    slug: "ginger-powder",
    name: "Dry Ginger Powder",
    category: "Organic Spices",
    description: "Dry ginger powder (Zingiber officinale), pungent, gingerols >=1% HPLC, volatile oil >=1% v/w, 60 mesh, premium Salem variety for B2B culinary, beverages, oleoresin, and bakery. Low moisture <=8%, low micro. Tamil Nadu Salem origin, sun-dried and milled. Supplied to culinary and beverage manufacturers in GCC and EU for consistent pungency and oleoresin extraction.",
    shortDesc: "Pungent dry ginger, gingerols ≥1%, Salem.",
    image: "https://images.unsplash.com/photo-1601050690294-8c7a83ff4baf?q=80&w=1000&auto=format&fit=crop",
    features: ["Gingerols ≥1%", "Salem Variety", "60 Mesh", "Pungent"],
    specifications: { "Gingerols": "≥1% HPLC", "Moisture": "≤8%", "Volatile Oil": "≥1% v/w", "Mesh": "60", "TPC": "<10,000 cfu/g" },
    applications: ["Culinary", "Beverages", "Oleoresin", "Bakery"],
    certifications: ["FSSAI", "ISO 22000", "HACCP"],
    origin: "Tamil Nadu, India",
    hsCode: "0910.11",
    moq: "300 kg",
    leadTime: "12 days",
    shelfLife: "24 months",
    packagingOptions: ["25 kg Bag", "500 kg Jumbo"],
    storage: "Cool dry, sealed",
    bulkPricing: [{ moq: "300 kg", pricePerKg: "$6.50" }, { moq: "2 MT", pricePerKg: "$5.90" }, { moq: "10 MT+", pricePerKg: "$5.30" }],
    coaAvailable: true,
    featured: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id || p.slug === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  const current = getProductById(currentId);
  if (!current) return products.slice(0, limit);
  return products.filter((p) => p.category === current.category && p.id !== currentId).slice(0, limit);
}
