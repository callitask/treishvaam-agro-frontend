/**
 * AI-CONTEXT:
 * Purpose: Home Page for Treishvaam Agro.
 * Scope: Landing page showcasing products, infrastructure, and global reach.
 * Critical Dependencies:
 * - components/ui/button
 * - lucide-react (Icons)
 * - app/globals.css
 * Change Intent: Migrated from React SPA (Home.tsx) to Next.js Server Component.
 * SEO Strategy: Static text, semantic HTML tags, fast LCP (Largest Contentful Paint).
 */

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Globe, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-black/60">
        <div className="absolute inset-0 z-0">
           {/* Placeholder for Hero Image - Replace with actual asset path when available */}
           {/* <Image src="/hero-agro.jpg" alt="Agro Field" fill className="object-cover opacity-50" priority /> */}
           <div className="w-full h-full bg-gradient-to-r from-green-900/90 to-black/80" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter sm:text-5xl mb-6">
            Cultivating the Future of <br className="hidden md:inline" />
            <span className="text-primary-foreground">Global Agriculture</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-200 mb-8">
            Premium quality agricultural exports, sustainable farming practices, and robust global supply chain solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white border-0">
              <Link href="/products">Explore Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* METRICS / TRUST SECTION */}
      <section className="w-full py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Leaf className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm text-muted-foreground">Organic Certified Options</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Globe className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">25+</h3>
              <p className="text-sm text-muted-foreground">Countries Exported To</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">50k+</h3>
              <p className="text-sm text-muted-foreground">Metric Tons Shipped</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CheckCircle2 className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold">ISO</h3>
              <p className="text-sm text-muted-foreground">Certified Processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES PREVIEW */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary font-medium">
              Our Offerings
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Premium Agricultural Products
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sourced directly from certified farms, processed in state-of-the-art facilities, and delivered globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Spices */}
            <Card className="group overflow-hidden border-0 shadow-lg">
              <div className="aspect-video relative bg-gray-200">
                {/* <Image src="/spices.jpg" alt="Spices" fill className="object-cover transition-transform group-hover:scale-105" /> */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-amber-100">
                  [Image: Premium Spices]
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium Spices</h3>
                <p className="text-muted-foreground mb-4">
                  Authentic Indian spices including Turmeric, Cumin, Cardamom, and Chili. High curcumin content and rich aroma.
                </p>
                <Link href="/products?category=spices" className="text-primary font-medium inline-flex items-center hover:underline">
                  View Catalogue <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Card 2: Grains */}
            <Card className="group overflow-hidden border-0 shadow-lg">
              <div className="aspect-video relative bg-gray-200">
                 <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-yellow-100">
                  [Image: Grains & Rice]
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Grains & Rice</h3>
                <p className="text-muted-foreground mb-4">
                  Basmati and Non-Basmati Rice, Wheat, and Millets. Processed for maximum purity and nutritional value.
                </p>
                <Link href="/products?category=grains" className="text-primary font-medium inline-flex items-center hover:underline">
                  View Catalogue <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Card 3: Oil Seeds */}
            <Card className="group overflow-hidden border-0 shadow-lg">
              <div className="aspect-video relative bg-gray-200">
                 <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-green-100">
                  [Image: Oil Seeds]
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Oil Seeds & Pulses</h3>
                <p className="text-muted-foreground mb-4">
                  Sesame, Groundnut, Mustard seeds, and a variety of pulses. Sourced for oil extraction and direct consumption.
                </p>
                <Link href="/products?category=seeds" className="text-primary font-medium inline-flex items-center hover:underline">
                  View Catalogue <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
             <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY CTA */}
      <section className="w-full py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Commitment to Sustainability
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                We believe in giving back to the earth. Our sustainable farming initiatives ensure soil health, water conservation, and fair wages for our partner farmers.
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> <span>Zero-residue farming practices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> <span>Eco-friendly packaging solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> <span>Direct-from-farm procurement</span>
                </li>
              </ul>
              <div className="pt-6">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/sustainability">Read Our Policy</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden bg-black/20">
               {/* Placeholder */}
               <div className="w-full h-full flex items-center justify-center border-2 border-white/20 rounded-xl">
                 [Image: Farmer in Field]
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}