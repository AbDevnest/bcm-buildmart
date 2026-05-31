import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import TruckSection from '@/components/TruckSection'
import FeaturedProducts from '@/components/FeaturedProducts'
import BulkOrderBanner from '@/components/BulkOrderBanner'
import WhyBCM from '@/components/WhyBCM'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'

/* ============================================
   HOME PAGE
   Section order: Hero → Stats → Services →
   Truck → Products → Bulk CTA → Why BCM →
   Testimonials → FAQ
   ============================================ */

export default function HomePage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TruckSection />
      <FeaturedProducts />
      <BulkOrderBanner />
      <WhyBCM />
      <TestimonialsSection />
      <FAQSection />
    </div>
  )
}
