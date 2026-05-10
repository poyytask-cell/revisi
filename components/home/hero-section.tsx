'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isSlowNetwork, setIsSlowNetwork] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })

  const logoX = useTransform(springX, [-0.5, 0.5], [-10, 10])
  const logoY = useTransform(springY, [-0.5, 0.5], [-10, 10])

  const containerRef = useRef<HTMLDivElement>(null)

  // Detect slow network and use poster fallback
  useEffect(() => {
    if (typeof window !== 'undefined' && 'connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection?.effectiveType === '2g' || connection?.effectiveType === '3g') {
        setIsSlowNetwork(true)
      }
    }
  }, [])

  // Force autoplay on mobile — especially iOS Safari which blocks autoplay
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Ensure muted before play attempt (required for autoplay policy)
    video.muted = true
    video.volume = 0

    const attemptPlay = () => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented — try again on first user interaction
          const resumePlay = () => {
            video.play().catch(() => {})
            document.removeEventListener('touchstart', resumePlay)
            document.removeEventListener('click', resumePlay)
          }
          document.addEventListener('touchstart', resumePlay, { passive: true })
          document.addEventListener('click', resumePlay)
        })
      }
    }

    if (video.readyState >= 2) {
      attemptPlay()
    } else {
      video.addEventListener('loadeddata', attemptPlay, { once: true })
    }

    return () => {
      video.removeEventListener('loadeddata', attemptPlay)
    }
  }, [isSlowNetwork])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 safe-area-inset"
    >
      {/* Dark fallback — behind everything to prevent white flash */}
      <div 
        className="fixed inset-0 z-[-100]"
        style={{ backgroundColor: '#050a14' }}
        aria-hidden="true"
      />

      {/* Video background — with GPU acceleration and instant visibility */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://res.cloudinary.com/dyromez82/image/upload/v1778155109/0503_qv1lek.webp"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-50]"
        style={{ willChange: 'transform', pointerEvents: 'none' }}
        // @ts-ignore – webkit-specific attribute for older iOS Safari
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
      >
        {!isSlowNetwork && (
          <source 
            src="https://res.cloudinary.com/dyromez82/video/upload/f_auto,q_auto/v1778160168/bg-video_dxvirr.mp4" 
            type="video/mp4" 
          />
        )}
      </video>


      {/* Objek 1: Upper tagline - positioned right below navbar */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-16 md:top-24 left-0 right-0 text-center text-[10px] sm:text-[11px] tracking-[0.3em] font-mono text-[#aaaaaa] uppercase z-10 px-4 sm:px-6"
      >
        The visual production house of the future AI ecosystem
      </motion.p>

      {/* Content - Objek 3 (Logo) centered */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20 w-full max-w-2xl">
        {/* Objek 3: Logo Utama (WM) - centered and enlarged */}
        <motion.div
          style={{ x: logoX, y: logoY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]"
          data-cursor-hover
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WM-ilzl2OSaL9zW1s2ducIWObfEuMg09k.png"
            alt="Poyy's Creative"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Objek 5: Serif tagline - directly below logo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-base sm:text-lg md:text-2xl font-light text-foreground tracking-wider max-w-lg text-balance mt-2 px-4 sm:px-0"
        >
          Where logic meets magic in every sequence.
        </motion.p>

        {/* Scroll hint - below Objek 5 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center gap-2 mt-6 sm:mt-8 touch-none"
        >
          <div className="w-px h-10 bg-white/20 relative overflow-hidden">
            <motion.div
              className="w-full bg-white/60"
              animate={{ height: ['0%', '100%', '0%'], top: ['0%', '0%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute' }}
            />
          </div>
          <p className="text-[9px] sm:text-[10px] tracking-[0.25em] font-mono text-[#555555]">SCROLL</p>
        </motion.div>
      </div>
    </section>
  )
}
