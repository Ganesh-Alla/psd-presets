"use client"
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart  } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import ProductCard from "@/components/productCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type {  Product } from "@/lib/data";

const ProductsPage = ({ isShopPage=false, products, type, title, description }: { isShopPage?: boolean, products: Product[], type: string, title: string, description: string }) => {

  const [selectedSort, setSelectedSort] = useState("default");
  const router = useRouter();

  const handleBackHome= () => {
    // Always use router.back() to go to previous page
    // This preserves state and avoids page reloads
      router.back();
  
  };

  // Preserve the original order once on mount
  const originalProducts = useMemo(() => products.slice(), [products]);

  const sortedProducts = useMemo(() => {
    if (selectedSort === "default") {
      return originalProducts;
    }
    const copy = originalProducts.slice();
    if (selectedSort === "low-to-high-price") {
      copy.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "high-to-low-price") {
      copy.sort((a, b) => b.price - a.price);
    }
    return copy;
  }, [selectedSort, originalProducts]);

  return (
    <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      {!isShopPage && <Button variant="outline" className="cursor-pointer" onClick={handleBackHome}>
        <ArrowLeft /> Back 
      </Button>}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-8">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cormorant tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          {description}
          </p>
        </div>
        <Select defaultValue="default" onValueChange={(value) => setSelectedSort(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="low-to-high-price">Low-to-High Price</SelectItem>
            <SelectItem value="high-to-low-price">High-to-Low Price</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {sortedProducts.map((product, idx) => (
          <Link href={`/${product.type}s/${product.slug}`} key={product.id} className="group">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: (idx % 4) * 0.05 }}
            >
           <ProductCard {...product} />
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-600 mb-4">
            <ShoppingCart className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No featured {type} available</h3>
            <p>Check back later for new {type}s.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;