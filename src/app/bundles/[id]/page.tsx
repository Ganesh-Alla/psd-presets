
import { notFound } from "next/navigation"
import ProductDetailPage from "@/components/productDetail"
import { bundles, type Product } from "@/lib/data"



const BundleProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Unwrap params (Next.js 15+)
  const { id } = await params
  // Route uses slug (see links in FeaturedBundles), so match by slug
  const product = bundles.find((bundle) => bundle.slug === id) as Product | undefined

  if (!product) {
    return notFound()
  }

  return (
  <div className="max-w-7xl mx-auto py-4">
  <ProductDetailPage product={product} />
  </div>
  )
}

export default BundleProductPage