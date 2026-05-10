'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

interface GridCardProps {
  id: string
  title: string
  category: string
  year: string
  description?: string
  previewUrl: string
  thumbnailUrl: string
  index: number
  onCardClick: () => void
}

export function GridCard({ 
  id, 
  title, 
  category, 
  year, 
  description,
  previewUrl, 
  thumbnailUrl, 
  index, 
  onCardClick 
}: GridCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (hoveredIndex === index && videoRef.current) {
      videoRef.current.play()
    } else if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [hoveredIndex, index])

  return (
    <motion.div
      key={`${id}-${index}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-4"
    >
      {/* Poster Container with Thumbnail & Video Preview */}
      <button
        onClick={onCardClick}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className="relative w-full aspect-[2/2.5] bg-[#1a1a1a] border border-white/10 hover:border-white/20 hover:bg-[#222] transition-all duration-500 overflow-hidden cursor-pointer group"
        aria-label={`Open ${title}`}
      >
        {/* Holographic Backglow - Purple neon effect */}
        <div className="absolute -inset-full bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none z-20" />

        {/* Thumbnail Image - Always visible, proportionally scaled */}
        <img
          src={thumbnailUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Video Preview on Hover - Replaces thumbnail */}
        {hoveredIndex === index && (
          <video
            ref={videoRef}
            src={previewUrl}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Overlay number - always visible, fade on hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <span className="text-7xl md:text-8xl font-light text-white/15 group-hover:text-white/30 transition-colors duration-500">
            {id}
          </span>
        </div>

        {/* Info overlay - appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center p-6 z-20 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
          {description && (
            <p className="text-[13px] text-white leading-relaxed text-center font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
          )}
        </div>
      </button>

      {/* Text Info Below Poster */}
      <div className="pt-2">
        <h3 className="font-serif text-base md:text-lg text-white font-light leading-tight">
          {title}
        </h3>
        <p className="text-[10px] tracking-[0.15em] font-mono text-gray-500 uppercase mt-2">
          {category}
        </p>
        <p className="text-[11px] tracking-[0.1em] font-mono text-gray-600 mt-1">
          {year}
        </p>
      </div>
    </motion.div>
  )
}
