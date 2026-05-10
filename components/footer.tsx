'use client'

import { motion } from 'framer-motion'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/youraistoryteller_' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61587146182003' },
  { label: 'Youtube', href: 'https://www.youtube.com/@poyyAIstorytelling' },
  { label: 'Tiktok', href: 'https://www.tiktok.com/@poyyaistorytelling' },
]

const leftLinks = [
  { label: 'Nadira Aqila Risqullah', href: 'https://linktr.ee/poyyAIstorytelling' },
  { label: 'Prompting From Zero', href: 'https://linktr.ee/poyyAIstorytelling' },
  { label: 'Nothing Impossible', href: 'https://linktr.ee/poyyAIstorytelling' },
]

export function Footer() {
  return (
    <footer className="bg-black pt-8 pb-8 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Left */}
          <div className="flex flex-col gap-3">
            {leftLinks.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="font-serif text-lg md:text-xl text-white font-light hover:text-gray-400 transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8 md:items-end">
            <div className="flex items-center gap-6 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.18em] font-mono text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {s.label.toUpperCase()}
                </a>
              ))}
            </div>
            <a
              href="mailto:poyycreative@gmail.com"
              className="font-serif text-2xl text-gray-400 hover:text-white transition-colors duration-300"
            >
              poyycreative@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 border-t border-white/5">
          <p className="text-[11px] tracking-[0.1em] font-mono text-gray-500">
            &copy; 2026 Poyy&apos;s Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
