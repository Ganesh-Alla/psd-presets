import ProductsPage from "@/components/productsPage";
import { bundles, presets, tones } from "@/lib/data";

const TonePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const tone = tones.find((tone) => tone.slug === id);
  const matchingBundles = bundles.filter((bundle) =>
    bundle.tags?.includes(tone?.title || ""),
  );
  const matchingPresets = presets.filter((preset) =>
    preset.tags?.includes(tone?.title || ""),
  );
  const products = [...matchingBundles, ...matchingPresets];
  return (
    <ProductsPage
      products={products}
      type="tones"
      title={tone?.title || ""}
      description={tone?.description || ""}
    />
  );
};

export default TonePage;