'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const links = [
  { label: 'WORK', href: '/work' },
  { label: 'ECOSYSTEM', href: '/ecosystem' },
  { label: 'ABOUT', href: '/about' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-0 py-6 md:px-0"
    >
      {/* Logo - Click to go home */}
      <Link
        href="/"
        className="flex-shrink-0 hover:opacity-70 transition-opacity duration-300 ml-0"
        aria-label="Poyy's Creative Home"
      >
        {/* 
          The source PNG is 2560×1876 with text only at the bottom ~25%.
          Using background-image with background-position bottom lets us 
          anchor and show the text portion correctly at any container size.
        */}
        <div
          className="w-28 h-8 sm:w-36 sm:h-10 md:w-56 md:h-14"
          style={{
            backgroundImage: 'url(/poyys-creative-text.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 280%',
            backgroundPosition: 'left bottom',
          }}
          role="img"
          aria-hidden="true"
        />
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-10 pr-3 sm:pr-5 md:pr-8">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] font-mono group"
              style={{ color: isActive ? '#f0f0ee' : '#666666' }}
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 h-px bg-foreground transition-all duration-300"
                style={{ width: isActive ? '100%' : '0%' }}
              />
              <span className="absolute -bottom-0.5 left-0 h-px bg-foreground w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}
