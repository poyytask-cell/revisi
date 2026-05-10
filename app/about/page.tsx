'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PageTransition } from '@/components/page-transition'
import { Footer } from '@/components/footer'
import { GradientTransition } from '@/components/gradient-transition'

const pillars = [
  {
    title: 'Logic',
    body:
      'We engineer precision into every frame. Each decision — color, rhythm, form — is deliberate. AI becomes the compass that guides creative intention.',
  },
  {
    title: 'Magic',
    body:
      'Emotion cannot be computed. We bridge the gap between calculated intelligence and the irrational pull of great cinema. That tension is where we live.',
  },
  {
    title: 'Sequence',
    body:
      'Every project is a sequence of micro-choices. We obsess over the invisible architecture that turns moving images into memory.',
  },
]

const services = [
  {
    title: 'Boundless Imagination',
    description: 'Breaking through the constraints of physics, weather, and location. Here, your vision is the only boundary — untethered by the laws of nature or the logistical burdens of traditional filming.',
  },
  {
    title: 'Elite Production Value',
    description: 'World-class visuals stripped of traditional studio logistical costs. Your investment is directed entirely toward the quality of the masterpiece, not crew overhead.',
  },
  {
    title: 'Zero-Risk Stunts',
    description: 'Executing extreme and hazardous sequences safely without physical risk, delivering high-octane action with surgical digital precision.',
  },
  {
    title: 'Direct Vision Link',
    description: 'Eliminating the creative distortion of crew bureaucracy. Your vision translates directly to the screen with absolute creative fidelity.',
  },
  {
    title: 'Hyper-Agile Iteration & Global Scalability',
    description: 'Mass-scale production and complex revisions executed in hours, not weeks. By bypassing sluggish old-world procedures and offering limitless scalability for global campaigns, your creativity remains uninterrupted.',
  },
]

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#050a14]">
        {/* Vision & Philosophy + Our Foundation - Two Column Layout */}
        <section className="px-8 md:px-16 pt-32 pb-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Vision & Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-7">
                Vision <span className="font-serif font-light text-5xl md:text-6xl lg:text-7xl italic tracking-wide">&amp;</span><br />Philosophy
              </h1>
              <div className="flex flex-col gap-3">
                <p className="text-[15px] text-[#999999] leading-relaxed">
                  To become the bridge where classic storytelling meets the infinite digital realm. Technology is our brush, but the soul is the artist.
                </p>
                <p className="text-[15px] text-[#999999] leading-relaxed">
                  We don&apos;t just generate visuals, we curate emotions that resonate beyond the screen.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Our Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-8">
                Our Foundation
              </h2>
              <div className="flex flex-col gap-8">
                {pillars.map((pillar, i) => (
                  <div key={pillar.title} className="flex flex-col gap-2">
                    <h3 className="font-serif text-lg text-foreground font-medium">
                      {pillar.title}
                    </h3>
                    <p className="text-[13px] text-[#666666] leading-relaxed">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-white/10 mt-20 origin-left"
          />
        </section>

        {/* Services Section + CTA Container - SOLID BACKGROUND */}
        <section className="w-full bg-[#050a14]">
          <div className="px-8 md:px-16 py-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <p className="text-[11px] tracking-[0.3em] font-mono text-[#555555] uppercase mb-4">
                What we do?
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground">
                SERVICES
              </h2>
            </motion.div>

            <div className="flex flex-col gap-0">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-white/8 py-8 first:border-t"
                >
                  <h3 className="font-serif text-xl md:text-2xl text-foreground font-light mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-[#666666] leading-relaxed max-w-3xl">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA positioned at CENTER between body and footer - INSIDE SOLID BACKGROUND */}
          <div className="px-8 md:px-16 pt-8 pb-20 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-10 text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-wide">
                READY BE PART OF THE FUTURE ?
              </h2>
              <Link
                href="mailto:poyycreative@gmail.com"
                className="inline-block bg-white text-black px-16 py-4 text-sm tracking-[0.2em] font-mono hover:bg-gray-200 transition-colors duration-300"
              >
                LETS GO
              </Link>
            </motion.div>
          </div>
        </section>

        <GradientTransition />
        <Footer />
      </main>
    </PageTransition>
  )
}
