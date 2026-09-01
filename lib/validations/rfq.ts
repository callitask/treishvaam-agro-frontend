/**
 * AI-CONTEXT:
 * Enterprise B2B Validation Schemas
 * Zod schemas for RFQ, Inquiry, and B2B contact flows
 * Used by react-hook-form via zodResolver
 */
import { z } from "zod";

export const inquirySchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50),
  workEmail: z.string().email("Invalid work email address").min(5),
  companyName: z.string().min(2, "Company name required").max(100),
  phone: z.string().regex(/^\+?[0-9\s\-()]{8,20}$/, "Invalid phone number").optional().or(z.literal("")),
  country: z.string().min(2).max(50).optional(),
  productInterest: z.string().optional(),
  estimatedVolume: z.string().min(1, "Please select estimated volume"),
  requirementDetails: z.string().min(20, "Please provide at least 20 characters").max(2000),
  honeypot: z.string().max(0, "Bot detected").optional(), // anti-spam
  consent: z.boolean().refine((v) => v === true, "You must accept the privacy policy"),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;

export const rfqItemSchema = z.object({
  productId: z.string().min(1),
  productName: z.string().min(1),
  category: z.string().min(1),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  unit: z.enum(["kg", "MT", "bags"]),
  packaging: z.string().optional(),
  notes: z.string().max(500).optional(),
});

export type RfqItem = z.infer<typeof rfqItemSchema>;

export const rfqCartSchema = z.object({
  items: z.array(rfqItemSchema).min(1, "Add at least one product"),
  buyer: inquirySchema,
});

export const productFilterSchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
  certification: z.string().optional(),
  sortBy: z.enum(["name", "category", "popularity"]).optional(),
});

export const volumeOptions = [
  "50 - 500 kg (Sample / Pilot)",
  "500 kg - 2 MT (Small Batch)",
  "2 - 10 MT (Mid Scale)",
  "10 - 50 MT (Enterprise)",
  "50+ MT (Bulk / Annual Contract)",
] as const;
