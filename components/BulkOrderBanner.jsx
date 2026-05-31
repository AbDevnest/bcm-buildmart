import { Truck, Package, Zap, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/data'

const FEATURES = [
  { icon: <Truck size={22} />,   title: 'Bulk Material Delivery',   desc: 'Bajri, Rodi, Sand by truck loads' },
  { icon: <Package size={22} />, title: 'Construction Site Supply', desc: 'Direct delivery to your site' },
  { icon: <Zap size={22} />,     title: 'Same Day Jaipur Delivery', desc: 'Order before 12 PM' },
  { icon: <Phone size={22} />,   title: 'Truck On Rent',            desc: 'Daily & weekly hire available' },
]

export default function BulkOrderBanner() {
  return (
    <section
      className="site-section pt-24 lg:pt-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a0800 0%, #0f0500 50%, #1a0800 100%)' }}
    >
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(249,115,22,0.09) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 mb-16">
          {FEATURES.map((f) => (
            <div key={f.title} className="surface-card p-6 flex items-start gap-4">
              <div className="text-orange-500 shrink-0 mt-0.5">{f.icon}</div>
              <div>
                <p className="text-white font-semibold text-sm leading-snug">{f.title}</p>
                <p className="text-neutral-500 text-xs mt-1.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="title-lg text-white mb-4">
            Need Bulk Materials?{' '}
            <span className="text-orange-500">Get Instant Quote!</span>
          </h2>
          <p className="text-body-lg mb-10 max-w-xl mx-auto">
            Special pricing for contractors and builders. Minimum 1 truck load.
            Delivery across Jaipur and Rajasthan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${COMPANY.phoneRaw}?text=Hello%20BCM%20BuildMart!%20I%20need%20bulk%20material%20quote%20for%20my%20construction%20project.`}
              target="_blank" rel="noopener noreferrer"
              className="ui-btn ui-btn-whatsapp ui-btn-lg"
            >
              💬 WhatsApp for Bulk Quote
            </a>
            <a href={`tel:${COMPANY.phone}`} className="ui-btn ui-btn-primary ui-btn-lg">
              <Phone size={17} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
