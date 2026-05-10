'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useRef, useEffect } from 'react'

interface Video {
  label: string
  ytId: string
}

interface VideoLightboxProps {
  video: Video | null
  onClose: () => void
  sectionType?: 'commercial' | 'cinematic' | 'other'
}

export function VideoLightbox({ video, onClose, sectionType = 'commercial' }: VideoLightboxProps) {
  
  // Handle CTA button click - redirect to Linktree for commercial section
  const handleCtaClick = () => {
    if (sectionType === 'commercial') {
      window.open('https://linktr.ee/poyyAIstorytelling', '_blank')
    }
  }
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // YouTube parameters to hide all UI elements
  const youtubeEmbedUrl = video
    ? `https://www.youtube-nocookie.com/embed/${video.ytId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=0&showinfo=0&iv_load_policy=3&loop=1&playlist=${video.ytId}`
    : ''

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full max-h-[100dvh] flex flex-col items-center justify-center gap-3 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Fixed top-right */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors z-10"
              aria-label="Close video"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            {/* Video Container - Scaled down to fit viewport */}
            <div className="relative w-full max-w-[200px] md:max-w-[240px] flex-shrink-0">
              {/* Blurred Background Video */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <iframe
                  src={youtubeEmbedUrl}
                  title={video.label}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full scale-150 blur-3xl opacity-20"
                  style={{
                    border: 'none',
                    aspectRatio: '9/16',
                  }}
                />
              </div>

              {/* Main Video Player */}
              <div className="relative aspect-[9/16] bg-black overflow-hidden">
                <iframe
                  ref={iframeRef}
                  src={youtubeEmbedUrl}
                  title={video.label}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  style={{
                    border: 'none',
                  }}
                />
              </div>
            </div>

            {/* Info & CTA Section - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="flex flex-col items-center gap-2 text-center flex-shrink-0"
            >
              {/* Description - Subtle text */}
              <p className="font-mono text-[8px] md:text-[10px] text-gray-500 opacity-70 whitespace-nowrap">
                Watch in 2160P (4K) Quality For A Better Experience.
              </p>

              {/* CTA Button - Purple Neon Glow with Pulse Animation */}
              <motion.button
                onClick={handleCtaClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(168, 85, 247, 0.3)',
                    '0 0 30px rgba(168, 85, 247, 0.5)',
                    '0 0 15px rgba(168, 85, 247, 0.3)',
                  ],
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                  },
                  scale: {
                    duration: 0.2,
                  },
                }}
                className="px-5 py-2 text-[10px] md:text-xs font-mono tracking-[0.12em] text-white bg-white/5 hover:bg-white/15 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 uppercase rounded"
              >
                Interested?
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
