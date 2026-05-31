import { Shield, Truck, Award, Package, Clock, Users } from 'lucide-react'
import { COMPANY } from '@/lib/data'

const REASONS = [
  {
    icon: <Shield size={22} />,
    title: '100% Genuine Products',
    description: 'All materials are ISI certified and sourced directly from authorized manufacturers. No adulteration, no compromise.',
    accent: 'blue',
  },
  {
    icon: <Truck size={22} />,
    title: 'Same Day Delivery',
    description: 'Order before 12 PM and get your materials delivered the same day anywhere in Jaipur with our 50+ truck fleet.',
    accent: 'orange',
  },
  {
    icon: <Award size={22} />,
    title: '15+ Years Experience',
    description: `Serving Jaipur's construction industry since ${COMPANY.established}. We understand what contractors and builders need.`,
    accent: 'yellow',
  },
  {
    icon: <Package size={22} />,
    title: 'Bulk Order Specialist',
    description: 'Special pricing for bulk orders. Whether you need 1 truck or 100 trucks of material, we handle it all.',
    accent: 'green',
  },
  {
    icon: <Clock size={22} />,
    title: 'Competitive Pricing',
    description: 'Best market rates for all construction materials. We work directly with manufacturers to offer the lowest prices.',
    accent: 'purple',
  },
  {
    icon: <Users size={22} />,
    title: 'Dedicated Support',
    description: 'Our expert team is available 6 days a week to help you choose the right materials and plan your project.',
    accent: 'red',
  },
]

const ACCENT_MAP = {
  blue:   { bg: 'bg-blue-500/8',   border: 'border-blue-500/20',   icon: 'text-blue-400',   iconBg: 'bg-blue-500/12' },
  orange: { bg: 'bg-orange-500/8', border: 'border-orange-500/20', icon: 'text-orange-400', iconBg: 'bg-orange-500/12' },
  yellow: { bg: 'bg-yellow-500/8', border: 'border-yellow-500/20', icon: 'text-yellow-400', iconBg: 'bg-yellow-500/12' },
  green:  { bg: 'bg-green-500/8',  border: 'border-green-500/20',  icon: 'text-green-400',  iconBg: 'bg-green-500/12' },
  purple: { bg: 'bg-purple-500/8', border: 'border-purple-500/20', icon: 'text-purple-400', iconBg: 'bg-purple-500/12' },
  red:    { bg: 'bg-red-500/8',    border: 'border-red-500/20',    icon: 'text-red-400',    iconBg: 'bg-red-500/12' },
}

export default function WhyBCM() {
  return (
    <section className="site-section bg-[#0d0d0d]">
      <div className="site-container">

        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="label mb-4">Why Choose Us</p>
          <h2 className="title-lg text-white">Why BCM <span className="text-gradient">BuildMart?</span></h2>
          <p className="text-body-lg mt-5">
            {`Jaipur's most trusted construction material supplier. Here's why 5000+ contractors choose us for every project.`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {REASONS.map((r) => {
            const a = ACCENT_MAP[r.accent]
            return (
              <div key={r.title}
                className={`rounded-2xl p-8 border ${a.bg} ${a.border} hover:scale-[1.02] transition-transform duration-300`}>
                <div className={`w-12 h-12 ${a.iconBg} rounded-xl flex items-center justify-center mb-5 ${a.icon}`}>
                  {r.icon}
                </div>
                <h3 className="title-sm text-white mb-3">{r.title}</h3>
                <p className="text-body-sm">{r.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-orange-500/8 border border-orange-500/20 rounded-2xl p-10 md:p-14 text-center">
          <h3 className="title-md text-white mb-4">
            Trusted by 5000+ Contractors Across Rajasthan
          </h3>
          <p className="text-body-md mb-8 max-w-xl mx-auto">
            Join thousands of builders who rely on BCM BuildMart for quality materials and reliable delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${COMPANY.phoneRaw}`} target="_blank" rel="noopener noreferrer"
              className="ui-btn ui-btn-whatsapp ui-btn-lg">
              💬 Get Free Quote
            </a>
            <a href={`tel:${COMPANY.phone}`} className="ui-btn ui-btn-primary ui-btn-lg">
              📞 {COMPANY.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
