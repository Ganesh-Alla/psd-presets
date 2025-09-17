import { ArrowUpRight, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "./logo";
import { navitems } from "@/lib/data";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTitle className="sr-only">Menu</SheetTitle>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3 overflow-y-auto">
        <Logo ratio={100} />

        <div className="mt-12 text-base space-y-4">
          <div className="flex flex-col gap-2 font-bold">
              <Link href="/presets" className="inline-flex items-center gap-2">
           All Presets<ArrowUpRight/>
          </Link>
          <Link href="/bundles" className="inline-flex items-center gap-2">
            All Bundles<ArrowUpRight/>
          </Link>
          </div>

          <div>
            <div className="font-bold">Tones</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {navitems.tones.map((toneItem) => (
                <li key={toneItem.title}>
                  <Link href="#" className="flex items-center gap-2">
                    <toneItem.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {toneItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold">Seasons</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {navitems.seasons.map((seasonItem) => (
                <li key={seasonItem.title}>
                  <Link href="#" className="flex items-center gap-2">
                    <seasonItem.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {seasonItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold">Scenes</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {navitems.scenes.map((sceneItem) => (
                <li key={sceneItem.title}>
                  <Link href="#" className="flex items-center gap-2">
                    <sceneItem.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {sceneItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
