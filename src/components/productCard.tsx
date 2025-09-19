import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import type{ Product } from '@/lib/data'

const ProductCard = (product: Product) => {
    const calculateDiscount = (orgPrice: number, currentPrice: number) => {
        return Math.round(((orgPrice - currentPrice) / orgPrice) * 100);
    };


  return (
    <Card className="h-full py-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10 transition-all duration-300 group-hover:scale-[1.02] overflow-hidden flex flex-col">
    <CardHeader className="p-0 relative">
      {/* Discount Badge */}
      {product.org_price > product.price && (
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="destructive" className="bg-red-500 text-white font-semibold">
            {calculateDiscount(product.org_price, product.price)}% OFF
          </Badge>
        </div>
      )}

      {/* Type Badge */}
      {product.type && (
        <div className="absolute top-3 right-3 z-10">
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-bold">
            {product.type.toUpperCase()}
          </Badge>
        </div>
      )}
      
      {/* Image Container */}
      <div className="aspect-square relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image 
          src={product.image} 
          alt={product.title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
    
    <CardContent className="p-6 pt-0 flex-1 flex flex-col">


      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:line-clamp-none group-hover:text-primary transition-all duration-200">
        {product.title}
      </h3>

      {/* Pricing */}
        <div className="flex items-center justify-start gap-2 mt-auto">
          {product.org_price > product.price && (
            <span className="text-md text-gray-500 dark:text-gray-400 line-through">
              ₹{product.org_price}
            </span>
          )}
          <span className="text-2xl font-semibold font-montserrat text-emerald-800 dark:text-white">
            ₹{product.price}/-
          </span>
        </div>

              {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-3 min-h-8">
        {product.tags ? product.tags
          .filter(tag => tag.trim() !== "")
          .slice(0,2)
          .map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 h-6 inline-flex items-center leading-none whitespace-nowrap px-2.5"
            >
              {tag}
            </Badge>
          ))
          : (
            <Badge variant="secondary" className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 h-6 inline-flex items-center leading-none whitespace-nowrap px-2.5">
             Featured {product.type}
            </Badge>
          )}
      </div>
    </CardContent>
  </Card>
  )
}

export default ProductCard