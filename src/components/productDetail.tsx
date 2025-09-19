"use client"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import BeforeAfterGrid from "@/components/lightbox/before-after-grid"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type{  Product } from "@/lib/data"

const ProductDetailPage = ({ product }: { product: Product }) => {
    const hasDiscount = product.org_price > product.price
    const discountPct = hasDiscount
      ? Math.round(((product.org_price - product.price) / product.org_price) * 100)
      : 0
    const router = useRouter()
      
      return (
        <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <Button className="cursor-pointer mb-8" variant="outline" onClick={() => router.back()}>
            <ArrowLeft/> Back
          </Button>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Product Image */}
            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              {hasDiscount && (
                <div className="absolute top-4 left-4">
                  <Badge variant="destructive" className="bg-red-500 text-white font-semibold">
                    -{discountPct}%
                  </Badge>
                </div>
              )}
            </div>
    
            {/* Product Details */}
            <div className="w-full">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="outline" className="uppercase tracking-wide text-xs">
                  {product.type}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-4">
                {product.title}
              </h1>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {product.description}
              </p>
    
              {/* Pricing */}
              <div className="flex items-end gap-3 mb-6">
                <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                {hasDiscount && (
                  <span className="text-lg text-gray-500 dark:text-gray-400 line-through">
                    ${product.org_price}
                  </span>
                )}
              </div>
    
              {/* Buy Now (placeholder) */}
              <div className="flex items-center gap-3 mb-8">
                <Button className="px-6" disabled title="Buy flow coming soon">
                  Buy Now
                </Button>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Instant download. Lifetime updates.
                </span>
              </div>
    
              {/* What’s included */}
              {Array.isArray(product.includes) && product.includes.length > 0 && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-3">What’s included</h2>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ">
                    {product.includes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
    
          {/* Before / After Section */}
          {Array.isArray(product.before_after_imgs) && product.before_after_imgs.length > 0 && (
            <div className="mt-16">
              <div className="flex items-baseline justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Before / After Previews
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Click an image to preview
                </span>
              </div>
              <BeforeAfterGrid images={product.before_after_imgs} />
            </div>
          )}
        </section>
      )
}

export default ProductDetailPage