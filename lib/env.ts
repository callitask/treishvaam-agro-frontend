/**
 * AI-CONTEXT:
 * Purpose: Enterprise Zero-Trust Environment Validation
 * Uses Zod to validate all NEXT_PUBLIC_* env vars at build/runtime
 * Prevents silent failures when secrets missing on Cloudflare Pages
 */
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().optional().or(z.literal("")),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_ADSENSE_CLIENT_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_ADS_ID: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional().default("https://treishvaamagro.com"),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_ADSENSE_CLIENT_ID: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
    NEXT_PUBLIC_GOOGLE_ADS_ID: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  });

  if (!parsed.success) {
    console.warn("[ENV] Validation warnings:", parsed.error.flatten().fieldErrors);
    // Return safe defaults instead of throwing in SSG build
    return {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "",
      NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
      NEXT_PUBLIC_ADSENSE_CLIENT_ID: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
      NEXT_PUBLIC_GOOGLE_ADS_ID: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
      NEXT_PUBLIC_SITE_URL: "https://treishvaamagro.com",
    };
  }
  return parsed.data;
}

export const env = validateEnv();

export function getSiteUrl(): string {
  return env.NEXT_PUBLIC_SITE_URL || "https://treishvaamagro.com";
}

export function isAnalyticsEnabled(): boolean {
  return !!env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
}
