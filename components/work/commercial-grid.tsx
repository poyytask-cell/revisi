'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import { VideoLightbox } from './video-lightbox'

import type { WorkProject } from '@/src/data/types'

interface CommercialGridProps {
  projects: WorkProject[]
  sectionType?: 'commercial' | 'cinematic' | 'other'
}

export function CommercialGrid({ projects, sectionType = 'commercial' }: CommercialGridProps) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const videoRefs = useRef<Record<number, HTMLVideoElement>>({})

  // Handle card click based on section type
  const handleCardClick = (index: number) => {
    if (sectionType === 'cinematic' || sectionType === 'other') {
      // Redirect to TikTok for Cinematic Series and Other sections
      window.open('https://www.tiktok.com/@poyyaistorytelling', '_blank')
    } else {
      // Open selection popup for Commercial Works
      setSelectedProjectIndex(index)
    }
  }

  // Handle video hover play
  useEffect(() => {
    if (hoveredIndex !== null && videoRefs.current[hoveredIndex]) {
      videoRefs.current[hoveredIndex].play()
    }

    // Stop other videos
    Object.entries(videoRefs.current).forEach(([idx, video]) => {
      if (parseInt(idx) !== hoveredIndex) {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [hoveredIndex])

  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null

  return (
    <>
      {/* Grid Container - Portrait aspect ratio like ProjectTile */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Poster Container with Thumbnail & Video Preview */}
            <button
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-full aspect-[2/2.5] bg-[#1a1a1a] border border-white/10 hover:border-white/20 hover:bg-[#222] transition-all duration-500 overflow-hidden cursor-pointer group"
              aria-label={sectionType === 'commercial' ? `Open ${project.title}` : `View ${project.title} on TikTok`}
            >
              {/* Holographic Backglow - Purple neon effect */}
              <div className="absolute -inset-full bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl pointer-events-none z-20" />

              {/* Thumbnail Image - z-0 base layer */}
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
                loading="lazy"
              />

              {/* Cinematic tint overlay - sits on top of thumbnail only, below video */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0"
                style={{ backgroundColor: 'rgba(5, 10, 20, 0.50)' }}
              />

              {/* Video Preview on Hover - z-20, replaces thumbnail visually */}
              {hoveredIndex === index && (
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el
                  }}
                  src={project.previewUrl}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-20"
                />
              )}

              {/* Info overlay - appears on hover, above video */}
              <div className="absolute inset-0 flex items-center justify-center p-6 z-30 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
                {project.description && (
                  <p className="text-[13px] text-white leading-relaxed text-center font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                )}
              </div>
            </button>

            {/* Text Info Below Poster */}
            <div className="pt-2">
              <h3 className="font-serif text-base md:text-lg text-white font-light leading-tight">
                {project.title}
              </h3>
              <p className="text-[10px] tracking-[0.15em] font-mono text-gray-500 uppercase mt-2">
                {project.category}
              </p>
              <p className="text-[11px] tracking-[0.1em] font-mono text-gray-600 mt-1">
                {project.year}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Selection Popup */}
      <AnimatePresence>
        {selectedProject && selectedProject.videos.length > 0 && !selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-40 p-4"
            onClick={() => setSelectedProjectIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-black/80 border border-white/10 rounded-lg p-8 max-w-md w-full backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProjectIndex(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Title */}
              <h3 className="font-serif text-lg text-white mb-6 pr-8">
                Select Video
              </h3>

              {/* Video Options */}
              <div className="space-y-3">
                {selectedProject.videos.map((video, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedVideo(video)}
                    className="w-full py-3 px-4 text-sm font-mono text-left text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 rounded"
                  >
                    {video.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Lightbox */}
      <VideoLightbox 
        video={selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        sectionType={sectionType}
      />
    </>
  )
}
