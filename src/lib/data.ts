import { Baby, Film, Flame, Flower, IceCream, Leaf, Moon, Mountain, Palmtree, Rose, Snowflake, Sun } from "lucide-react";

export interface Product {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    org_price: number;
    price: number;
    type: string;
    tags?: string[];
    includes?: string[];
    before_after_imgs?: string[];
}

export const featuredBundlesIds = [
    "cinetone-pro-all-in-one",
    "master-collection",
    "film-pro-collection",
];


export const bundles: Product[] = [
  {
    id: "cinetone-pro-all-in-one",
    slug: "cinetone-pro-all-in-one",
    title: "Ai Pro Presets Collection – 600+ Presets!! (All 71 Packs)",
    description:
      "Get the entire store with our with all access pass. The All Access pass unlocks all the presets that are available on the store so far and we are committed to add more as we release new presets collection in the future. Save time, energy and money with this collection. The collection includes more than 600+ presets organized in the 71 preset collections.",
    image: "/bundles/cinetone-pro-all-in-one.png",
    org_price: 9999.9,
    price: 1599.99,
    type: "bundle",
    includes: [
      "600+ Lightroom Desktop .XMP Presets (For New Lightroom Classic)",
      "600+ Lightroom .LRTEMPLATE Presets (For Old Lightroom Versions)",
      "600+ Mobile .DNG Presets (For Lightroom Mobile App)",
      "Photoshop Camera Raw Compatible (.XMP)",
      "All 71 Preset Collections",
      "Lifetime Updates & One Time Payment",
      "Installation Guide for Mobile & Desktop (PDF)",
    ],
    before_after_imgs: [
      "/before-after/cinetone-pro/waterfall.jpg",
      "/before-after/cinetone-pro/blue-girl.jpg",
      "/before-after/shared/grass.jpg",
      "/before-after/cinetone-pro/pond.jpg",
      "/before-after/cinetone-pro/metro.jpg",
      "/before-after/cinetone-pro/cap.jpg",
      "/before-after/cinetone-pro/horse.jpg",
      "/before-after/cinetone-pro/camera.jpg",
      "/before-after/cinetone-pro/thar.jpg",
      "/before-after/cinetone-pro/black-girl.jpg",
      "/before-after/cinetone-pro/deer.jpg",
      "/before-after/cinetone-pro/ship.jpg",
      "/before-after/cinetone-pro/yellow-girl.jpg",
      "/before-after/cinetone-pro/gold-girl.jpg",
      "/before-after/cinetone-pro/white-girl.jpg",
      "/before-after/cinetone-pro/baby.jpg",
    ],
  },
  {
    id: "master-collection",
    slug: "master-collection",
    title: "Master Collection Lightroom Presets",
    description: "Our top selling Master Presets Bundle with 40 presets Collections including Retro & Film, Iconic Fujifilm, Moody, Cinematic and more.",
    image: "/bundles/master-collection.jpg",
    org_price: 2999.99,
    price: 599.99,
    type: "bundle",
    includes: [
      "611+ Lightroom Desktop XMP Presets (For New Lightroom Classic)",
      "611+ Lightroom LRTEMPLATE Presets (For Old Lightroom Versions)", 
      "611+ Mobile DNG Presets (For Lightroom Mobile App)",
      "611+ LUTs Cube file",
      "Bonus: Film Preset Pack 16 Base Presets for Lightroom Classic (Mac/Windows), Mobile (Android/iOS), CC, Photoshop w/ modifiers to add grain",
      "1-Click Video Presets Installation Guide for Lightroom Mobile & Desktop"
    ],
    before_after_imgs: [
      '/before-after/master-collection/traffic.jpg',
      '/before-after/master-collection/japan.jpg',
      '/before-after/shared/grass.jpg',
      '/before-after/master-collection/coconut.jpg',
      '/before-after/master-collection/basket.jpg',
      '/before-after/master-collection/travel.jpg',
      '/before-after/master-collection/city.jpg',
      '/before-after/master-collection/window.jpg',
      '/before-after/master-collection/sea.jpg',
      '/before-after/master-collection/waterfall-man.jpg',
    ],
  },
  {
    id:"film-pro-collection",
    slug:"film-pro-collection",
    title:"Film Pro Collection",
    description:"For many photographers, replicating the look and vibe of film in the digital real is a signature style. Rediscover film aesthetics. Bring the magic touch of analogue film into your digital workflow with our Film Pro Collection.",
    image:"/bundles/film-pro-collection-featured.jpg",
    org_price:29999.70,
    price:1499.99,
    type:"bundle",
    includes:[
      "48 Film Pro Lightroom Desktop XMP Presets (For New Lightroom Classic)",
      "48 Film Pro Lightroom LRTEMPLATE Presets (For Old Lightroom Versions)",
      "48 Film Pro Mobile DNG Presets (For Lightroom Mobile App)",
      "Installation Guide for Mobile & Desktop (PDF)",
      "Supports All Cameras (Sony, Fuji, Ricoh, Canon, Nikon & more)",
    ],
  }
];

export const featuredPresetsIds = [
  "bright-and-airy-gray",
  "bright-and-airy",
];

export const presets: Product[] = [
  {
    id:"bright-and-airy-gray",
    slug:"bright-and-airy-gray",
    title:"Bright and Airy",
    description:"Create timeless photos of unforgettable moments with our Bright & Airy collection. This pack will give your photographs a bright, fresh, and unforgettable look. Perfect for outdoor and indoor photographs that need a boost of light and colors. After using these presets, you can set the exposure, and shadows slider (either increase or decrease the value) depends on how strong airy looks you’d like to have in your photos. Get the pack today and add clean white tones, soften harsh details, and apply subtle coloring that will give photos a pristine look and feel. ",
    image:"/presets/bright-airy-gray.jpg",
    org_price:600.00,
    price:299.99,
    type:"preset",
    tags:["Bright and Airy"],
    includes:["11 Presets for Lightroom Classic (.XMP)",
      "11 Presets for OLD Lightroom (.lrtemplate)",
      "11 Presets for Lightroom Mobile (.DNG)",
      "Installation Guide (.PDF)",
    ],
  },
  {
    id:"bright-and-airy",
    slug:"bright-and-airy",
    title:"Bright and Airy",
    description:"Create timeless photos of unforgettable moments with our Bright & Airy collection. This pack will give your photographs a bright, fresh, and unforgettable look. Perfect for outdoor and indoor photographs that need a boost of light and colors. After using these presets, you can set the exposure, and shadows slider (either increase or decrease the value) depends on how strong airy looks you’d like to have in your photos. Get the pack today and add clean white tones, soften harsh details, and apply subtle coloring that will give photos a pristine look and feel. ",
    image:"/presets/bright-airy.jpg",
    org_price:600.00,
    price:299.99,
    type:"preset",
    tags:["Bright and Airy"],
    includes:["10 Lightroom Presets (.XMP For New Lightroom Classic)",
      "10 Lightroom Presets (.LRT For Old Lightroom Versions)",
      "10 Mobile Presets (.DNG)",
      "Installation Guide (.PDF)",
    ],
    before_after_imgs:["/before-after/bright-airy/bright-airy-1.jpg",
      "/before-after/bright-airy/bright-airy-2.jpg",
      "/before-after/bright-airy/bright-airy-3.jpg",
      "/before-after/bright-airy/bright-airy-4.jpg",
      "/before-after/bright-airy/bright-airy-5.jpg",
      "/before-after/bright-airy/bright-airy-6.jpg",
      "/before-after/bright-airy/bright-airy-7.jpg",
    ],
  },
];

export const tones = [
    {
      id: "bright-and-airy",
      slug: "bright-and-airy",
      title: "Bright and Airy",
      description: "Perfect for sunny, outdoor scenes and vibrant cityscapes.",
      image: "/presets/bright-airy-gray.jpg",
      icon: Sun,
    },
    {
      id: "creamy-tones",
      slug: "creamy-tones",
      title: "Creamy",
      description: "Ideal for warm, natural light and soft skin tones.",
      image: "/presets/creamy-tones.jpg",
      icon: IceCream,
    },
    {
      id: "warm-tones",
      slug: "warm-tones",
      title: "Warm",
      description: "Ideal for warm, natural light and soft skin tones.",
      image: "/presets/earth-tones.jpg",
      icon: Flame,
    },
    {
      id: "dark-moody-tones",
      slug: "dark-moody-tones",
      title: "Dark & Moody",
      description: "Ideal for dark, moody scenes and dramatic portraits.",
      image: "/presets/dark-moody-tone.jpg",
      icon: Moon,
    },
    {
      id: "cinematic-tones",
      slug: "cinematic-tones",
      title: "Cinematic",
      description: "Ideal for cinematic scenes and dramatic portraits.",
      image: "/presets/cine-tones.jpg",
      icon: Film,
    },
  ];

export const seasons = [
    {
      id: "spring",
      slug: "spring",
      title: "Spring",
      description: "Ideal for spring photography.",
      image: "/presets/spring.jpg",
      icon: Flower,
    },
    {
      id: "summer",
      slug: "summer",
      title: "Summer",
      description: "Ideal for summer photography.",
      image: "/presets/summer.jpg",
      icon: Sun,
    },
    {
      id: "autumn",
      slug: "autumn",
      title: "Autumn",
      description: "Ideal for fall photography.",
      image: "/presets/autumn.jpg",
      icon: Leaf,
    },
    {
      id: "winter",
      slug: "winter",
      title: "Winter",
      description: "Ideal for winter photography.",
      image: "/presets/bright-winter.jpg",
      icon: Snowflake,
    },
  ];

export const scenes = [
    {
      id: "landscape",
      slug: "landscape",
      title: "Landscape",
      description: "Perfect for landscape photography.",
      image: "/presets/landscapes.jpg",
      icon: Mountain,
    },
    {
      id: "tropical",
      slug: "tropical",
      title: "Tropical",
      description: "Ideal for tropical photography.",
      image: "/presets/tropical.jpg",
      icon: Palmtree,
    },
    {
      id: "wedding",
      slug: "wedding",
      title: "Wedding",
      description: "Ideal for wedding photography.",
      image: "/presets/garden-wedding.jpg",
      icon: Rose,
    },
    {
      id: "family",
      slug: "family",
      title: "Family",
      description: "Ideal for family photography.",
      image: "/presets/cozy-home.jpg",
      icon: Baby,
    },
  ];

  export const navitems = {
    tones,
    seasons,
    scenes,
  };