"use client"
import Image from "next/image"
import { useMemo, useState } from "react"
import Lightbox from "./lightbox"

type BeforeAfterGridProps = {
  images: string[]
}

export default function BeforeAfterGrid({ images }: BeforeAfterGridProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  const absoluteImages = useMemo(() => images.map((img) => `${img}`), [images])

  if (!Array.isArray(images) || images.length === 0) return null

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <button
            key={img}
            className="relative w-full aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 group"
            onClick={() => {
              setStartIndex(idx)
              setIsOpen(true)
            }}
            type="button"
          >
            <Image
              src={`${img}`}
              alt={`Preview ${img}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-[1.02] transition-transform duration-200"
              // Only load first 4 images immediately, lazy load the rest
              loading={idx < 4 ? "eager" : "lazy"}
              // Add priority for first 2 images
              priority={idx < 2}
              // Add placeholder for better UX
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
          </button>
        ))}
      </div>

      <Lightbox
        images={absoluteImages}
        startIndex={startIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}


