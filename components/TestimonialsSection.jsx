import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section className="site-section bg-[#080808]">
      <div className="site-container">

        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="label mb-4">Customer Reviews</p>
          <h2 className="title-lg text-white">What Our <span className="text-gradient">Clients Say</span></h2>
          <p className="text-body-lg mt-5">Real reviews from real contractors and builders across Jaipur and Rajasthan.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {testimonials.map((r) => (
            <article key={r.name} className="surface-card p-7 flex flex-col relative overflow-hidden group hover:border-orange-500/25 transition-colors">
              <Quote size={40} className="absolute top-5 right-5 text-orange-500/7 group-hover:text-orange-500/14 transition-colors" aria-hidden />

              <div className="flex gap-1 mb-5">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-body-sm clamp-3 flex-1 mb-5 relative z-10">
                &ldquo;{r.text}&rdquo;
              </p>

              <p className="text-orange-500/60 text-xs font-medium mb-5">📍 {r.project}</p>

              <div className="flex items-center gap-3.5 pt-5 border-t border-white/6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {r.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-neutral-500 text-xs mt-0.5">{r.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-14 surface-card p-8 md:p-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="text-center shrink-0">
            <p className="text-6xl font-black text-orange-500 leading-none">4.9</p>
            <div className="flex justify-center gap-1 my-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-neutral-500 text-sm">Overall Rating</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-white/8" />

          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            {[
              { label: 'Product Quality',  value: '98%' },
              { label: 'Delivery Speed',   value: '96%' },
              { label: 'Customer Service', value: '97%' },
              { label: 'Value for Money',  value: '95%' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <p className="text-white font-bold text-xl">{item.value}</p>
                <p className="text-neutral-500 text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
