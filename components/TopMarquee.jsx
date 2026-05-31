'use client'
import { COMPANY } from '@/lib/data'

const ITEMS = [
  { icon: '🚚', text: 'Same Day Delivery in Jaipur' },
  { icon: '📞', text: `Call: ${COMPANY.phone}` },
  { icon: '👷', text: `Founder: ${COMPANY.founder}` },
  { icon: '🏗️', text: 'Bajri  ·  Rodi  ·  Cement  ·  TMT Steel' },
  { icon: '🚛', text: 'Tata Truck Supply — Jaipur, Rajasthan' },
  { icon: '⭐', text: '5000+ Satisfied Contractors' },
  { icon: '📍', text: 'Sitapura Industrial Area, Jaipur' },
  { icon: '🏆', text: '15+ Years of Trusted Service' },
]

const DOUBLED = [...ITEMS, ...ITEMS]

export default function TopMarquee() {
  return (
    <div className="relative overflow-hidden select-none"
      style={{ background: 'linear-gradient(90deg,#b45309,#c2410c,#ea580c,#f97316,#b45309)', boxShadow: '0 2px 20px rgba(249,115,22,0.4)' }}>
      <div className="flex overflow-hidden py-3">
        <div className="marquee-track flex shrink-0">
          {DOUBLED.map((item, i) => (
            <span key={i} className="flex items-center shrink-0 gap-2.5 px-8 text-white text-xs font-semibold tracking-wide">
              <span className="text-sm">{item.icon}</span>
              <span>{item.text}</span>
              <span className="text-orange-200/50 ml-3">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
