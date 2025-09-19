"use client";
import ProductsPage from "@/components/productsPage";
import { presets } from "@/lib/data";

const PresetsPage = ({ isShopPage = false }: { isShopPage?: boolean }) => {
  return (
    <ProductsPage
      isShopPage={isShopPage}
      products={presets}
      type="presets"
      title="Presets"
      description="Professional-grade presets to elevate your content"
    />
  );
};

export default PresetsPage;
