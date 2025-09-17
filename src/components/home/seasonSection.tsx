import Image from "next/image";
import Link from "next/link";
import { seasons } from "@/lib/data";
  
  const SeasonSection = () => {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-6">
        <div className="grow w-full sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-gray-900 dark:text-white">
            Shop by Season
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Discover seasonal presets that capture the unique beauty and mood of each time of year.
            </p>
          </div>
        </div>
          <div className="w-full mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {seasons.map((season) => (
              <Link
                href={`/shop/season/${season.slug}`}
                key={season.title}
                className="flex flex-col text-start w-full"
              >
                <div className="mb-5 sm:mb-6 w-full aspect-4/5 bg-muted rounded-xl relative overflow-hidden">
                  <Image src={season.image} alt={season.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <span className="text-2xl font-semibold tracking-tight">
                  {season.title}
                </span>
                <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                  {season.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SeasonSection;
  