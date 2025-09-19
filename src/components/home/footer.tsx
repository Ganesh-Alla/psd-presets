import {
    DribbbleIcon,
    GithubIcon,
    TwitchIcon,
    TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Logo from "../header/logo";

const footerSections = [
  {
    title: "Tones",
    links: [
      {
        title: "Bright and Airy",
        href: "/tone/bright-and-airy",
      },
      {
        title: "Creamy Tones", 
        href: "/tone/creamy-tones",
      },
      {
        title: "Warm Tones",
        href: "/tone/warm-tones", 
      },
      {
        title: "Dark & Moody Tones",
        href: "/tone/dark-moody-tones",
      },
      {
        title: "Cinematic Tones",
        href: "/tone/cinematic-tones",
      },
    ],
  },
  {
    title: "Seasons",
    links: [
      {
        title: "Spring",
        href: "/season/spring",
      },
      {
        title: "Summer",
        href: "/season/summer",
      },
      {
        title: "Autumn",
        href: "/season/autumn",
      },
      {
        title: "Winter",
        href: "/season/winter",
      },
    ],
  },
  {
    title: "Scenes",
    links: [
      {
        title: "Landscape",
        href: "/scene/landscape",
      },
      {
        title: "Tropical",
        href: "/scene/tropical",
      },
      {
        title: "Wedding",
        href: "/scene/wedding",
      },
      {
        title: "Family",
        href: "/scene/family",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        title: "Twitter",
        href: "#",
      },
      {
        title: "LinkedIn",
        href: "#",
      },
      {
        title: "Facebook",
        href: "#",
      },
      {
        title: "GitHub",
        href: "#",
      },
      {
        title: "AngelList",
        href: "#",
      },
      {
        title: "Dribbble",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms",
        href: "#",
      },
      {
        title: "Privacy",
        href: "#",
      },
      {
        title: "Cookies",
        href: "#",
      },
      {
        title: "Licenses",
        href: "#",
      },
      {
        title: "Settings",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="grow bg-muted" />
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full xl:col-span-2">
              {/* Logo */}
              <Logo ratio={200} />

              <p className="mt-4 text-muted-foreground">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-medium">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                CINETONE
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <DribbbleIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <TwitchIcon className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
