"use client"
import Image from "next/image"
import AllInOne from '../../../public/hero/cinetone-pro-all-in-one-preview.png'
import FilmProCollectionFeatured from '../../../public/hero/film-pro-collection-featured-preview.png'
import MasterCollection from '../../../public/hero/master-collection-preview.png'
import Link from "next/link"
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <section id="hero" className="w-full flex items-center justify-center">
      <div className="container  mt-8 md:mt-16 px-2 md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left: Text + CTAs */}
          <div className="flex flex-col items-center py-24 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
            <p className="text-sm font-medium text-muted-foreground uppercase">Premium Presets & Bundles</p>
            <h1 className="my-6 text-pretty text-4xl font-bold tracking-tight lg:text-6xl">
              Transform Your Adobe Workflow
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Discover our curated collection of professional Adobe presets and bundles. Elevate your creative projects with our premium tools designed for photographers, designers, and content creators.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <Link href="/shop">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background shadow-sm transition-colors hover:bg-foreground/90"
              >
                <span className="i-lucide-arrow-right shrink-0"></span>
                Shop Now
              </button>
              </Link>
            </div>
          </div>

          {/* Right: Geometric art */}
          <div className="relative mx-auto hidden w-full max-w-2xl lg:block">
            {/* Floating cards */}
            <div className="relative h-[520px]">
              <motion.div
                className="absolute left-10 top-6 h-80 w-80 rounded-xl bg-card shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border-5 border-card-foreground"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Image src={AllInOne} alt="logo" fill />
              </motion.div>
              <motion.div
                className="absolute right-6 top-0 h-60 w-60 rounded-xl bg-card shadow-[0_10px_40px_-10px_rgba(0,0,0,0.12)] border-5 border-muted-foreground"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                <Image src={FilmProCollectionFeatured} alt="logo" fill />
              </motion.div>
              <motion.div
                className="absolute bottom-4 right-16 h-72 w-72 rounded-xl bg-card shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border-5 border-muted"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              >
                <Image src={MasterCollection} alt="logo" fill />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero