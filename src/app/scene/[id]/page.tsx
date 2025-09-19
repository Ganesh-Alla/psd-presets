import ProductsPage from "@/components/productsPage";
import { bundles, presets, scenes } from "@/lib/data";

const ScenePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const scene = scenes.find((scene) => scene.slug === id);
  const matchingBundles = bundles.filter((bundle) =>
    bundle.tags?.includes(scene?.title || ""),
  );
  const matchingPresets = presets.filter((preset) =>
    preset.tags?.includes(scene?.title || ""),
  );
  const products = [...matchingBundles, ...matchingPresets];
  return (
    <ProductsPage
      products={products}
      type="scenes"
      title={scene?.title || ""}
      description={scene?.description || ""}
    />
  );
};

export default ScenePage;