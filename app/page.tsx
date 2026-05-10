import { HeroSection } from '@/components/home/hero-section'
import { CTASection } from '@/components/home/cta-section'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { DeviceWarningPopup } from '@/components/device-warning-popup'

export default function HomePage() {
  return (
    <PageTransition>
      <DeviceWarningPopup />
      <main>
        <HeroSection />
        <CTASection />
        <Footer />
      </main>
    </PageTransition>
  )
}
