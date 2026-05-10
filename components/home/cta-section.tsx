'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="relative bg-transparent py-40 sm:py-60 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden min-h-[80vh] safe-area-inset">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 41px)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-12 sm:gap-20 text-center max-w-3xl mx-auto h-full justify-center px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight text-balance"
        >
          Ready to Create Something Extraordinary?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="mailto:poyycreative@gmail.com"
            className="group inline-block border border-foreground/80 px-8 sm:px-16 py-4 sm:py-5 text-[10px] sm:text-[11px] tracking-[0.35em] font-mono text-foreground hover:bg-foreground hover:text-background transition-all duration-500 touch-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            GET IN TOUCH
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
