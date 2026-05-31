'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Shield, Truck, Star, CheckCircle } from 'lucide-react'
import { COMPANY, stats } from '@/lib/data'

const TRUST = [
  { icon: <Shield size={11} />,      text: 'ISI Certified' },
  { icon: <Truck size={11} />,       text: '50+ Tata Trucks' },
  { icon: <Star size={11} />,        text: '5000+ Clients' },
  { icon: <CheckCircle size={11} />, text: '15+ Years' },
]

const WAIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-[100vh] flex items-center bg-[#080808]">

      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="absolute -left-16 sm:-left-32 top-1/3 w-[280px] sm:w-[480px] md:w-[560px] h-[280px] sm:h-[480px] md:h-[560px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.13) 0%,transparent 68%)' }}
        aria-hidden
      />
      <div
        className="absolute -right-16 sm:-right-32 bottom-1/4 w-[220px] sm:w-[380px] md:w-[460px] h-[220px] sm:h-[380px] md:h-[460px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.07) 0%,transparent 68%)' }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: 'linear-gradient(to top,#080808,transparent)' }}
        aria-hidden
      />

      {/* ── Main content ── */}
      <div className="site-container relative z-10 w-full py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ────── LEFT ────── */}
          <div
            className="max-w-xl mx-auto lg:mx-0 transition-all duration-700"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)' }}
          >

            {/* Badge */}
            <div className="mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] font-semibold px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shrink-0" />
                Jaipur&apos;s #1 Building Material Supplier
              </span>
            </div>

            {/* Heading — tighter on mobile */}
            <h1 className="text-[2.3rem] sm:text-5xl md:text-[3.4rem] lg:text-6xl font-black text-white leading-[1.06] tracking-tight mb-5 sm:mb-7">
              Building{' '}
              <span className="text-gradient">Rajasthan</span>
              <br />with Premium
              <br />
              <span className="text-orange-500 glow-text">
                Construction Materials
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed mb-7 sm:mb-8 max-w-md">
              Trusted supplier of Bajri, Rodi, Cement, TMT Steel &amp; Tata Truck
              delivery across Jaipur. Founded by{' '}
              <span className="text-white font-semibold">{COMPANY.founder}</span>.
            </p>

            {/* CTA Buttons — same height, proportionate */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-7 sm:mb-8">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Explore Products <ArrowRight size={15} />
              </Link>
              <a
                href={`https://wa.me/${COMPANY.phoneRaw}?text=Hello%20BCM%20BuildMart!%20I%20need%20a%20bulk%20material%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-green-600/15 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <WAIcon /> Get Bulk Quote
              </a>
            </div>

            {/* Trust badges — 2-col grid on mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-x-5 sm:gap-x-6 gap-y-2.5 my-10 ">
              {TRUST.map(({ icon, text }) => (
                <div key={text} className="flex  items-center gap-1.5 text-neutral-400 text-xs">
                  <span className="text-orange-500 shrink-0">{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            {/* Founder chip + Phone */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 sm:mt-5 mt-10">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-black text-xs shrink-0">
                  VK
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-none">{COMPANY.founder}</p>
                  <p className="text-neutral-500 text-[10px] mt-0.5 leading-none">Founder, BCM BuildMart</p>
                </div>
              </div>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center justify-center sm:justify-start gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-2.5 hover:bg-orange-500/15 transition-colors"
              >
                <Phone size={13} className="text-orange-400 shrink-0" />
                <span className="text-orange-300 text-xs font-semibold">{COMPANY.phone}</span>
              </a>
            </div>
          </div>

          {/* ────── RIGHT — Stats card (lg+) ────── */}
          <div
            className="hidden lg:block transition-all duration-700 delay-200"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(36px)' }}
          >
            <div className="relative">
              <div className="bg-white/4 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3.5 mb-5">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="bg-[#141414] border border-white/7 rounded-xl p-4 text-center hover:border-orange-500/25 transition-colors"
                    >
                      <div className="text-xl mb-1.5">{s.icon}</div>
                      <div className="text-xl font-black text-orange-500 leading-none">{s.value}{s.suffix}</div>
                      <div className="text-neutral-400 text-[11px] mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Delivery strip */}
                <div className="bg-orange-500/8 border border-orange-500/18 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-orange-500/15 rounded-xl flex items-center justify-center shrink-0">
                      <Truck size={16} className="text-orange-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-xs">Same Day Delivery</p>
                      <p className="text-neutral-500 text-[10px] mt-0.5">Order before 12 PM</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Bajri', 'Rodi', 'Cement', 'Steel', 'Sand'].map(tag => (
                      <span
                        key={tag}
                        className="bg-orange-500/10 border border-orange-500/22 text-orange-400 text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-[11px] font-bold px-3.5 py-2 rounded-xl shadow-xl shadow-orange-500/30 animate-float-slow">
                🏗️ Jaipur&apos;s Best
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-xl animate-float-slow-reverse">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-green-500/15 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle size={14} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-semibold">Bulk Order Confirmed</p>
                    <p className="text-neutral-500 text-[10px] mt-0.5">50 Trucks · Bajri</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ────── STATS — Mobile & Tablet only ────── */}
        <div
          className="lg:hidden mt-25 transition-all duration-700 delay-300"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/4 border border-white/8 rounded-xl p-3.5 text-center"
              >
                <div className="text-lg sm:text-xl mb-1">{s.icon}</div>
                <div className="text-lg sm:text-xl font-black text-orange-500 leading-none">{s.value}{s.suffix}</div>
                <div className="text-neutral-400 text-[10px] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-orange-500/8 border border-orange-500/18 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center gap-3 sm:justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-orange-500/15 rounded-xl flex items-center justify-center shrink-0">
                <Truck size={14} className="text-orange-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-xs">Same Day Delivery</p>
                <p className="text-neutral-500 text-[10px]">Order before 12 PM</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Bajri', 'Rodi', 'Cement', 'Steel', 'Sand'].map(tag => (
                <span
                  key={tag}
                  className="bg-orange-500/10 border border-orange-500/22 text-orange-400 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}