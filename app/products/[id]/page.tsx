/**
 * AI-CONTEXT:
 * Purpose: Dynamic Product Detail Page.
 * Scope: Renders specific product details based on URL ID.
 * SEO: Generates static params for all products at build time (SSG).
 */

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Package, ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { products } from "@/lib/data/products";

// 1. Generate Static Params for SSG (Critical for Cloudflare Pages)
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// 2. Generate Metadata dynamically
export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} - Specification & Bulk Order`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  return (
    <div className="container py-12 px-4 md:px-6">
      {/* Breadcrumb / Back */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
            <Link href="/products" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Catalog
            </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Image */}
        <div className="space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-muted border">
            <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover" 
                priority
            />
          </div>
          
          <div className="p-6 bg-secondary/30 rounded-xl border">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" /> Packaging Options
              </h3>
              <div className="grid grid-cols-2 gap-4">
                  <div>
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Retail</span>
                      <ul className="mt-1 space-y-1">
                          {product.packaging.retail.map(opt => <li key={opt} className="text-sm">• {opt}</li>)}
                      </ul>
                  </div>
                  <div>
                      <span className="text-xs font-semibold uppercase text-muted-foreground">Bulk</span>
                      <ul className="mt-1 space-y-1">
                          {product.packaging.bulk.map(opt => <li key={opt} className="text-sm">• {opt}</li>)}
                      </ul>
                  </div>
              </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="uppercase">{product.category}</Badge>
                {product.organic && <Badge className="bg-green-600 hover:bg-green-700">Organic Certified</Badge>}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">{product.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
            </p>
          </div>

          <Separator className="my-8" />

          {/* Specifications Table */}
          <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Specifications</h3>
              <Table>
                  <TableBody>
                      {Object.entries(product.specifications).map(([key, value]) => (
                          <TableRow key={key}>
                              <TableCell className="font-medium capitalize w-1/3 text-muted-foreground">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                              </TableCell>
                              <TableCell className="font-semibold">{value}</TableCell>
                          </TableRow>
                      ))}
                      <TableRow>
                          <TableCell className="font-medium capitalize text-muted-foreground">Certifications</TableCell>
                          <TableCell>{product.certifications.join(", ")}</TableCell>
                      </TableRow>
                  </TableBody>
              </Table>
          </div>

          {/* Applications */}
          <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Common Applications</h3>
              <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                      <Badge key={app} variant="secondary" className="px-3 py-1">
                          {app}
                      </Badge>
                  ))}
              </div>
          </div>

          {/* CTA Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white" asChild>
                  <Link href="/contact">Request Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="flex-1 gap-2">
                  <Download className="h-4 w-4" /> Download Spec Sheet
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}