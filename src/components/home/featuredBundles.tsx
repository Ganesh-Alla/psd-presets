"use client"
import { ArrowRight, ShoppingCart  } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { bundles } from "@/lib/data";
import { motion } from "framer-motion";

const FeaturedBundles = () => {
  // Filter bundles that have meaningful tags (not empty strings)
  const featuredBundles = bundles.filter(bundle => 
    bundle.tags.length > 0 && bundle.tags.some(tag => tag.trim() !== "")
  );

  const calculateDiscount = (orgPrice: number, currentPrice: number) => {
    return Math.round(((orgPrice - currentPrice) / orgPrice) * 100);
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-gray-900 dark:text-white">
            Featured Preset Bundles
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Professional-grade preset bundles to elevate your content
          </p>
        </div>
        <Button variant="outline" asChild className="group hover:bg-primary hover:text-primary-foreground transition-all duration-200">
          <Link href="/bundles" className="flex items-center gap-2">
            View All Bundles
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {featuredBundles.map((bundle, idx) => (
          <Link href={`/bundles/${bundle.slug}`} key={bundle.id} className="group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (idx % 4) * 0.05 }}
            >
            <Card className="h-full py-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10 transition-all duration-300 group-hover:scale-[1.02] overflow-hidden">
              <CardHeader className="p-0 relative">
                {/* Discount Badge */}
                {bundle.org_price > bundle.price && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant="destructive" className="bg-red-500 hover:bg-red-600 text-white font-semibold">
                      -{calculateDiscount(bundle.org_price, bundle.price)}%
                    </Badge>
                  </div>
                )}
                
                {/* Image Container */}
                <div className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image 
                    src={bundle.image} 
                    alt={bundle.title} 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Quick action button */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/90 text-black hover:bg-white shadow-lg backdrop-blur-sm">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {bundle.tags
                    .filter(tag => tag.trim() !== "")
                    .slice(0, 2)
                    .map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {bundle.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {bundle.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${bundle.price}
                    </span>
                    {bundle.org_price > bundle.price && (
                      <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                        ${bundle.org_price}
                      </span>
                    )}
                  </div>
                  
                  <Badge variant="outline" className="text-xs font-medium">
                    {bundle.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {featuredBundles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-600 mb-4">
            <ShoppingCart className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No featured bundles available</h3>
            <p>Check back later for new preset bundles.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedBundles;