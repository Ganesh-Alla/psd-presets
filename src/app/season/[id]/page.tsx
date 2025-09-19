import ProductsPage from "@/components/productsPage";
import { bundles, presets, seasons } from "@/lib/data";

const SeasonPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const season = seasons.find((season) => season.slug === id);
  const matchingBundles = bundles.filter((bundle) =>
    bundle.tags?.includes(season?.title || ""),
  );
  const matchingPresets = presets.filter((preset) =>
    preset.tags?.includes(season?.title || ""),
  );
  const products = [...matchingBundles, ...matchingPresets];
  return (
    <ProductsPage
      products={products}
      type="seasons"
      title={season?.title || ""}
      description={season?.description || ""}
    />
  );
};

export default SeasonPage;