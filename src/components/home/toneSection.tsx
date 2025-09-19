"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { tones } from "@/lib/data";
  
  const ToneSection = () => {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-6">
        <div className="grow w-full sm:max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg)">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cormorant tracking-tight text-gray-900 dark:text-white">
            Shop by Tone
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Discover presets tailored for specific photography styles, from vibrant to muted.
            </p>
          </div>
        </div>
          <div className="w-full mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {tones.map((tone, idx) => (
              <Link
                href={`/tone/${tone.slug}`}
                key={tone.title}
                className="flex flex-col text-start w-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: (idx % 3) * 0.06 }}
                  className="flex flex-col w-full"
                >
                  <div className="mb-5 sm:mb-6 w-full aspect-4/5 bg-muted rounded-xl relative overflow-hidden">
                    <Image 
                      src={tone.image} 
                      alt={tone.title} 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                  <span className="text-2xl font-semibold tracking-tight">
                    {tone.title}
                  </span>
                  <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                    {tone.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ToneSection;
  