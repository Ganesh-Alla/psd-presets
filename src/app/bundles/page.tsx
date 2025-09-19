"use client"

import ProductsPage from "@/components/productsPage";
import { bundles } from "@/lib/data";

const BundlesPage = () => {

  return (
    <ProductsPage  products={bundles} type="bundles" title="Bundles" description="Professional-grade bundles to elevate your content" />
  );

};

export default BundlesPage;