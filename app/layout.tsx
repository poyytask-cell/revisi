import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { CustomCursor } from '@/components/custom-cursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: "Poyy's Creative — The Visual Production House of the Future AI Ecosystem",
  description:
    "Where logic meets magic in every sequence. Poyy's Creative is the visual production house at the intersection of AI and cinematic storytelling.",
  generator: "v0.app",
  keywords: ["visual production", "AI creative", "cinematic", "Poyy's Creative"],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      {
        rel: 'icon',
        url: 'https://res.cloudinary.com/dyromez82/image/upload/v1778161834/favicon_x1ho0p.ico',
        type: 'image/x-icon',
      },
      {
        rel: 'icon',
        url: 'https://res.cloudinary.com/dyromez82/image/upload/v1778161834/favicon-16x16_i2ihx7.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: 'https://res.cloudinary.com/dyromez82/image/upload/v1778169786/favicon-64x64_w8v3vj.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: 'https://res.cloudinary.com/dyromez82/image/upload/v1778161833/android-chrome-192x192_vb0lmi.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: 'https://res.cloudinary.com/dyromez82/image/upload/v1778161834/android-chrome-512x512_dqment.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: 'https://res.cloudinary.com/dyromez82/image/upload/v1778161833/android-chrome-192x192_vb0lmi.png',
    apple: 'https://res.cloudinary.com/dyromez82/image/upload/v1778161834/apple-touch-icon_wtbzdq.png',
  },
  openGraph: {
    title: "Poyy's Creative",
    description: "Where logic meets magic in every sequence.",
    type: 'website',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: "Poyy's Creative",
  },
}

export const viewport = {
  themeColor: '#050a14',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased text-foreground overflow-x-hidden">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
