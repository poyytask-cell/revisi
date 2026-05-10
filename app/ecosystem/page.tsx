'use client'

import { motion } from 'framer-motion'
import { PageTransition } from '@/components/page-transition'
import { Footer } from '@/components/footer'
import { GradientTransition } from '@/components/gradient-transition'
import { ecosystemData } from '@/src/data'

export default function EcosystemPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#050a14] pt-24 pb-0">
        {/* Page header */}
        <div className="px-8 md:px-16 mb-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] tracking-[0.3em] font-mono text-[#555555] uppercase mb-4">
              EXPANDING UNIVERSE
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-foreground leading-tight text-balance">
              Future Initiatives
            </h1>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-white/10 mt-8 origin-left"
          />
        </div>

        {/* Initiatives Grid */}
        <section className="px-8 md:px-16 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {ecosystemData.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-[#1a1a1a] border border-white/10 hover:border-white/20 transition-all duration-500 p-8 md:p-10 aspect-[3/2] flex flex-col justify-between overflow-hidden"
              >
                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block text-[10px] tracking-[0.2em] font-mono text-white bg-black border border-white/20 px-3 py-1.5">
                    {item.status}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  {/* Title */}
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-1 group-hover:text-gray-200 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h2>
                    {item.subtitle && (
                      <p className="font-mono text-[#888888] text-xs">{item.subtitle}</p>
                    )}
                  </div>

                  {/* Role */}
                  <p className="text-[11px] tracking-[0.15em] font-mono text-[#666666] uppercase">
                    {item.role}
                  </p>

                  {/* Description */}
                  <p className="text-[12px] text-[#999999] leading-relaxed font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom - Vibe */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[10px] tracking-[0.1em] font-mono text-[#555555] uppercase">
                    {item.vibe}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="px-8 md:px-16 mb-20 max-w-7xl mx-auto">
          <div className="h-px bg-white/8" />
        </div>

        {/* Quote Section */}
        <section className="px-8 md:px-16 max-w-5xl mx-auto mb-24 text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-[#555555] leading-relaxed text-balance"
          >
            &ldquo;Our AI ecosystem represents interconnected ventures pushing the boundaries of digital creativity.&rdquo;
          </motion.blockquote>
        </section>

        <GradientTransition />
        <Footer />
      </main>
    </PageTransition>
  )
}
