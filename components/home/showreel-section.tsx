'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const works = [
  { title: 'Hyundai Palisade', type: 'Commercial', year: '2025' },
  { title: 'Masswood', type: 'Commercial', year: '2025' },
  { title: 'Amar Bank', type: 'Commercial — Demo', year: '2025' },
  { title: 'Dirty Country', type: 'Cinematic Series', year: '2026' },
  { title: 'Shift Malam', type: 'Cinematic Series', year: '2026' },
  { title: 'Aku Kamu dan AI', type: 'Cinematic Series', year: '2026' },
]

function WorkRow({
  title,
  type,
  year,
  index,
}: {
  title: string
  type: string
  year: string
  index: number
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  const rowRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = rowRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.05)
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group border-b border-white/8 py-7 flex items-center justify-between cursor-none"
      data-cursor-hover
    >
      <motion.div style={{ x: springX, y: springY }} className="flex items-baseline gap-6">
        <span className="text-[11px] font-mono text-[#444444] w-6">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <div className="flex items-center gap-8">
        <span className="hidden md:block text-[11px] tracking-[0.15em] font-mono text-[#555555] uppercase">
          {type}
        </span>
        <span className="text-[11px] tracking-[0.1em] font-mono text-[#444444]">{year}</span>
        <span className="text-[#444444] group-hover:text-foreground transition-colors duration-300 text-lg">
          &rarr;
        </span>
      </div>
    </motion.div>
  )
}

export function ShowreelSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section ref={sectionRef} className="relative bg-background py-32 px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] tracking-[0.3em] font-mono text-[#555555] mb-3">SELECTED WORKS</p>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-foreground">Work</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              href="/work"
              className="text-[11px] tracking-[0.2em] font-mono text-[#666666] hover:text-foreground transition-colors duration-300 border-b border-[#333333] pb-0.5"
            >
              VIEW ALL
            </Link>
          </motion.div>
        </div>

        {/* Work rows */}
        <motion.div style={{ y }}>
          {works.map((w, i) => (
            <WorkRow key={w.title} {...w} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
