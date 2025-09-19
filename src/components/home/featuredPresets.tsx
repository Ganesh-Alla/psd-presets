"use client"
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart  } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { featuredPresetsIds, presets } from "@/lib/data";
import ProductCard from "../productCard";

const FeaturedPresets = () => {
  
  const featuredPresets = presets.filter(preset => 
    featuredPresetsIds.includes(preset.id)
  );

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cormorant tracking-tight text-gray-900 dark:text-white">
            Featured Presets
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Professional-grade presets to elevate your content
          </p>
        </div>
        <Button variant="outline" asChild className="group hover:bg-primary hover:text-primary-foreground transition-all duration-200">
          <Link href="/presets" className="flex items-center gap-2">
            View All Presets
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {featuredPresets.map((preset, idx) => (
          <Link href={`/presets/${preset.slug}`} key={preset.id} className="group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (idx % 4) * 0.05 }}
            >
           <ProductCard {...preset} />
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {featuredPresets.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-600 mb-4">
            <ShoppingCart className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No featured presets available</h3>
            <p>Check back later for new presets.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedPresets;