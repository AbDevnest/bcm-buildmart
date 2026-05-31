import { Clock, MapPin, Package, Phone, Truck } from 'lucide-react'
import { COMPANY } from '@/lib/data'

const FEATURES = [
  { icon: <Clock size={16} />,   title: 'Same Day Delivery', desc: 'Order before 12 PM' },
  { icon: <MapPin size={16} />,  title: 'All Jaipur Areas',  desc: 'Full city coverage' },
  { icon: <Package size={16} />, title: '8–10 Ton Capacity', desc: 'Per truck load' },
  { icon: <Truck size={16} />,   title: 'Truck on Rent',     desc: 'Daily / weekly hire' },
]

const MATERIALS = ['🏖️ Banas Bajri', '🪨 Crushed Rodi', '🏗️ Construction Sand', '🏭 Cement Bags', '⚙️ TMT Steel', '🪨 Stone Aggregate']

export default function TruckSection() {
  return (
    <section className="site-section bg-[#0d0d0d] relative overflow-hidden">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="site-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* LEFT */}
          <div>
            <p className="label mb-4">Logistics & Delivery</p>
            <h2 className="title-lg text-white mb-6">
              50+ Tata Trucks{' '}
              <span className="text-gradient">Ready to Deliver</span>
            </h2>
            <p className="text-body-lg mb-10">
              Our massive fleet of Tata trucks ensures your bulk construction materials —
              Bajri, Rodi, Sand, Cement — reach your site on time, every time.
              GPS-tracked, experienced drivers, reliable logistics.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {FEATURES.map(f => (
                <div key={f.title} className="surface-card p-5 flex items-start gap-3.5">
                  <div className="text-orange-500 mt-0.5 shrink-0">{f.icon}</div>
                  <div>
                    <p className="text-white font-semibold text-sm">{f.title}</p>
                    <p className="text-neutral-500 text-xs mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-3.5">We deliver:</p>
              <div className="flex flex-wrap gap-2.5">
                {MATERIALS.map(m => (
                  <span key={m} className="ui-badge ui-badge-orange text-xs">{m}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${COMPANY.phoneRaw}?text=Hello!%20I%20need%20to%20book%20a%20truck%20for%20material%20delivery.`}
                target="_blank" rel="noopener noreferrer"
                className="ui-btn ui-btn-whatsapp"
              >
                💬 Book Truck Now
              </a>
              <a href={`tel:${COMPANY.phone}`} className="ui-btn ui-btn-primary">
                <Phone size={15} /> Call Us
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="surface-card p-9 overflow-hidden relative">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)' }}
                aria-hidden
              />

              {/* Truck moving left to right (correct direction) */}
              <div className="text-7xl mb-5 block relative z-10 overflow-hidden">
                <span className="inline-block animate-truck-drive">🚛</span>
              </div>

              <h3 className="title-md text-white mb-1 relative z-10">Tata Truck Fleet</h3>
              <p className="text-body-sm mb-6 relative z-10">
                Jaipur&apos;s largest construction material delivery fleet
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                {[
                  { num: '50+',  label: 'Trucks' },
                  { num: '8–10T', label: 'Capacity' },
                  { num: '24/7', label: 'Available' },
                ].map(s => (
                  <div key={s.label} className="bg-white/4 rounded-xl p-3 text-center border border-white/6">
                    <p className="text-orange-500 font-black text-lg leading-none">{s.num}</p>
                    <p className="text-neutral-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-orange-500/8 border border-orange-500/20 rounded-xl p-4 relative z-10">
                <p className="text-orange-400 font-semibold text-xs uppercase tracking-wider mb-2">
                  📍 Delivery Areas
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Vaishali Nagar', 'Malviya Nagar', 'Mansarovar', 'Sanganer', 'Sitapura', 'Ajmer Road', 'Tonk Road', 'All Jaipur'].map(a => (
                    <span key={a} className="text-neutral-400 text-xs bg-white/4 px-2 py-1 rounded-md border border-white/6">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated truck road at bottom — going left to right (correct) */}
              <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden" aria-hidden>
                <span className="absolute bottom-1 text-xl animate-truck-road ">⛟</span>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xl shadow-orange-500/30 animate-float-slow">
              ⚡ Same Day
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
