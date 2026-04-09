/**
 * AI-CONTEXT:
 *
 * Purpose:
 * - Dynamic product details page. Rendered statically at build time.
 *
 * Scope:
 * - Displays individual product specifications and features.
 * - What it must never be responsible for: Server-side rendering (SSR) data fetching at request time.
 *
 * Critical Dependencies:
 * - @/lib/data/products: Provides the source of truth for static parameter generation.
 * - Next.js App Router: Requires explicit definition of generateStaticParams() for static export.
 *
 * Security Constraints:
 * - Zero-Trust Edge Proxy dictates that NO runtime Node.js API calls are made here. All data MUST be baked into the HTML export.
 *
 * Non-Negotiables:
 * - MUST export generateStaticParams() returning an array of objects with the dynamic route segment (e.g., { id: string }).
 *
 * Change Intent:
 * - Resolved Cloudflare Next.js build crash: `Error: Page "/products/[id]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.`
 *
 * Future AI Guidance:
 * - When launching any new frontend (like Treishvaam Hiring Marketplace), if the architecture enforces `output: "export"`, ALL dynamic routes (like [id], [slug], etc.) MUST have a generateStaticParams() function.
 * - Do NOT attempt to remove this to use SSR. Cloudflare Pages (Static mode) strictly relies on these generated HTML files to remain highly available during backend downtime.
 *
 * IMMUTABLE CHANGE HISTORY (DO NOT DELETE):
 * - ADDED:
 * • export async function generateStaticParams()
 * • Implemented mapping over local products array to statically generate all IDs.
 * • Why it was added: Cloudflare Pages rejected the build when Next.js was forced into SSG mode (`output: export`) without explicit params for dynamic routes. This enforces the immutable, serverless Edge architecture requirement.
 * • 2026-04-10
 *
 * - DO-NOT-DELETE RULE:
 * This IMMUTABLE CHANGE HISTORY section must never be deleted,
 * truncated, rewritten, or regenerated.
 * Future AI must append only.
 */

import React from "react";
import Link from "next/link";
import { CheckCircle2, Package, ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { products } from "@/lib/data/products";
import { notFound } from "next/navigation";

// 1. Generate Static Params for SSG (Critical for Cloudflare Pages Static Export)
export async function generateStaticParams() {
  // Tells Next.js exactly which dynamic pages to generate HTML for during `npm run build`
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  // Fetch the product from the static data file imported above
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
        
        {/* Header Actions */}
        <div className="px-8 py-6 border-b border-neutral-100 flex items-center justify-between">
          <Link href="/products">
            <Button variant="ghost" className="pl-0 hover:bg-transparent hover:text-green-700 text-neutral-500">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
          <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
            {product.category || "Agriculture"}
          </Badge>
        </div>

        {/* Product Hero */}
        <div className="px-8 py-10">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">{product.name}</h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-3xl leading-relaxed">
            {product.description || "Premium agricultural product meeting strict international quality standards."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Key Features */}
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features?.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start text-neutral-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                )) || <li className="text-neutral-500 italic">No features listed.</li>}
              </ul>
            </div>

            {/* Specifications Table */}
            <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-green-600" />
                  Specifications
                </h3>
              </div>
              <Table>
                <TableBody>
                  {product.specifications ? Object.entries(product.specifications).map(([key, value], idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium text-neutral-700 py-3">{key}</TableCell>
                      <TableCell className="text-neutral-600 py-3">{value as string}</TableCell>
                    </TableRow>
                  )) : (
                    <TableRow>
                      <TableCell colSpan={2} className="text-neutral-500 italic text-center py-4">Specifications unavailable.</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white px-8 py-6 text-lg">
              Request a Quote
            </Button>
            <Button variant="outline" className="w-full sm:w-auto px-6 py-6 text-neutral-600">
              <Download className="w-4 h-4 mr-2" />
              Download Spec Sheet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}