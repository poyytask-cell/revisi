'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { PageTransition } from '@/components/page-transition'
import { Footer } from '@/components/footer'
import { GradientTransition } from '@/components/gradient-transition'
import { CommercialGrid } from '@/components/work/commercial-grid'
import { commercialData, seriesData, otherData } from '@/src/data'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] tracking-[0.3em] font-mono text-[#555555] uppercase mb-4">{children}</p>
  )
}

const tabs = [
  { id: 'commercial', label: 'COMMERCIAL WORKS' },
  { id: 'cinematic', label: 'CINEMATIC SERIES' },
  { id: 'other', label: 'OTHER' },
]

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('commercial')

  const getWorksByTab = () => {
    switch (activeTab) {
      case 'commercial':
        return commercialData
      case 'cinematic':
        return seriesData
      case 'other':
        return otherData
      default:
        return commercialData
    }
  }

  const works = getWorksByTab()

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
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-light text-foreground leading-none">
              Work
            </h1>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-white/10 mt-8 origin-left"
          />
        </div>

        {/* Tab Navigation */}
        <div className="px-8 md:px-16 mb-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 md:gap-8"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs tracking-[0.2em] font-mono pb-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-400 border-b-2 border-transparent hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <section className="px-8 md:px-16 mb-20 max-w-7xl mx-auto">
          <CommercialGrid 
            projects={works} 
            sectionType={activeTab as 'commercial' | 'cinematic' | 'other'} 
          />
        </section>

        <GradientTransition />
        <Footer />
      </main>
    </PageTransition>
  )
}
