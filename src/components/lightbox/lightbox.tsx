"use client"
import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"

type LightboxProps = {
  images: string[]
  startIndex?: number
  isOpen: boolean
  onClose: () => void
}

export default function Lightbox({ images, startIndex = 0, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex)

  useEffect(() => {
    if (isOpen) setCurrentIndex(startIndex)
  }, [isOpen, startIndex])

  const hasImages = images && images.length > 0
  const currentImage = useMemo(() => (hasImages ? images[currentIndex] : undefined), [hasImages, images, currentIndex])

  const goPrev = useCallback(() => {
    if (!hasImages) return
    setCurrentIndex((i) => (i - 1 + images.length) % images.length)
  }, [hasImages, images])

  const goNext = useCallback(() => {
    if (!hasImages) return
    setCurrentIndex((i) => (i + 1) % images.length)
  }, [hasImages, images])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen, onClose, goPrev, goNext])

  if (!isOpen || !currentImage) return null

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-sm flex items-center justify-center select-none"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClose()
      }}
      // tabIndex={0}
      aria-modal
      role="dialog"
    >
      {/* Image container */}
      <div
        className="relative max-w-7xl w-full h-full flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="document"
      >
        {/* Image */}
        <Image 
          src={currentImage} 
          alt="Preview" 
          className="max-h-full max-w-full object-contain" 
          fill 
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />

        {/* Controls */}
        <button
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl px-3 py-2"
          onClick={goPrev}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") goPrev()
          }}
          type="button"
        >
          ‹
        </button>
        <button
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white text-3xl px-3 py-2"
          onClick={goNext}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") goNext()
          }}
          type="button"
        >
          ›
        </button>
        <button
          aria-label="Close"
          className="absolute top-4 right-4 text-white/90 hover:text-white text-2xl"
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") onClose()
          }}
          type="button"
        >
          ✕
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}


