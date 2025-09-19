"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { NavMenu } from "./navMenu";
import { NavigationSheet } from "./navSheet";


  

const Navbar = () => {
  return (
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-(--breakpoint-lg) mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo ratio={100} className='w-auto h-auto object-contain'/>
            {/* Desktop Menu */}
            <NavMenu className="hidden md:block"  />
          </div>

          <div className="flex items-center gap-3">
            <Link href="/shop">
            <Button className="cursor-pointer">
              Shop Now <ArrowUpRight />
            </Button>
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
