'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function DeviceWarningPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Always show popup on first page load (per session)
    // Using sessionStorage so it shows once per browser session, not per page visit
    const hasShownThisSession = sessionStorage?.getItem('device-warning-shown-session')
    if (!hasShownThisSession) {
      // Small delay to ensure smooth page load first
      setTimeout(() => setIsOpen(true), 500)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Store that popup was shown this session
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('device-warning-shown-session', 'true')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60"
            aria-hidden="true"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-[10000] bg-[#0a1628]/50 backdrop-blur-md border border-[#1a3a52]/40 rounded-lg p-8 max-w-sm mx-4 shadow-2xl"
          >
            {/* Text Content */}
            <p className="text-center text-foreground text-lg font-light tracking-wide mb-8">
              Use Laptop/PC Device For Give You Better Experience.
            </p>

            {/* OK Button - Slightly transparent to match website theme */}
            <button
              onClick={handleClose}
              className="w-full px-6 py-3 bg-[#1a3a5a]/70 hover:bg-[#2a4a6a]/80 border border-[#2a5a8a]/50 text-white/90 font-medium rounded-lg transition-all duration-300 uppercase tracking-wider text-sm backdrop-blur-sm"
            >
              OK
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
