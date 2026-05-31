import { CheckCircle } from 'lucide-react'
import { services } from '@/lib/data'

export default function ServicesSection() {
  return (
    <section className="site-section bg-[#080808]">
      <div className="site-container">

        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="label mb-4">What We Offer</p>
          <h2 className="title-lg text-white">Complete Construction <span className="text-gradient">Solutions</span></h2>
          <p className="text-body-lg mt-5">
            From raw materials to finished products, we supply everything your construction project needs — delivered right to your site.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service) => (
            <article key={service.title} className="surface-card p-8 group flex flex-col hover:border-orange-500/25 transition-colors">
              <div className="w-[3.25rem] h-[3.25rem] bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-orange-500/18 transition-colors">
                {service.icon}
              </div>
              <h3 className="title-sm text-white mb-3 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-body-sm mb-5 flex-1">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-neutral-400 text-xs">
                    <CheckCircle size={11} className="text-orange-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/40 transition-all duration-500" />
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
