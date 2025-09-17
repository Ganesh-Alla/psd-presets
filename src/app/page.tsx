import FeaturedBundles from "@/components/home/featuredBundles";
import FeaturedPresets from "@/components/home/featuredPresets";
import Hero from "@/components/home/hero";
import SceneSection from "@/components/home/sceneSection";
import SeasonSection from "@/components/home/seasonSection";
import ToneSection from "@/components/home/toneSection";

export default function Home() {
  return (
    <>
    <Hero />
    <FeaturedBundles />
    <FeaturedPresets />
    <ToneSection />
    <SceneSection />
    <SeasonSection />
    </>
  );
}
