'use client'
import { motion } from 'framer-motion'
import { Shield, Truck, Award, Users, Target, Eye, CheckCircle, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/data'

const TIMELINE = [
  { year: '2009', title: 'BCM BuildMart Founded',      desc: 'Started as a small building material shop in Jaipur by Vijendra Kumawat with a vision to serve local contractors.' },
  { year: '2012', title: 'Expanded to Bulk Supply',    desc: 'Added Bajri and Rodi supply with first 5 Tata trucks. Started serving large construction projects across Jaipur.' },
  { year: '2015', title: 'Authorized Dealer Status',   desc: 'Became authorized dealer for UltraTech, ACC, and Asian Paints. Expanded product range to 100+ items.' },
  { year: '2018', title: 'Fleet Expansion',            desc: 'Grew truck fleet to 30+ vehicles. Launched same-day delivery service across all Jaipur areas.' },
  { year: '2021', title: 'Digital Transformation',     desc: 'Launched WhatsApp-based ordering system. Served 3000+ customers across Rajasthan.' },
  { year: '2024', title: '50+ Trucks & 5000+ Clients', desc: 'Today we operate 50+ Tata trucks and serve 5000+ satisfied customers across Rajasthan.' },
]

const TEAM = [
  { name: COMPANY.founder,      role: 'Founder & CEO',   exp: '20+ years in construction industry', initials: 'VK', highlight: true },
  { name: 'Sunil Kumar Sharma', role: 'Operations Head', exp: '15+ years logistics experience',     initials: 'SK' },
  { name: 'Priya Agarwal',      role: 'Sales Manager',   exp: '10+ years in building materials',    initials: 'PA' },
  { name: 'Vikram Singh',       role: 'Fleet Manager',   exp: '12+ years truck operations',         initials: 'VS' },
]

const VALUES = [
  { icon: <Shield size={22} />, title: 'Quality First',     desc: 'Every product quality-checked before delivery' },
  { icon: <Truck size={22} />,  title: 'Reliable Delivery', desc: '50+ trucks for on-time delivery' },
  { icon: <Award size={22} />,  title: 'Authorized Dealer', desc: 'Official dealer for top brands' },
  { icon: <Users size={22} />,  title: 'Expert Team',       desc: 'Experienced professionals to guide you' },
]

const FLEET_STATS = [
  { value: '50+',          label: 'Total Trucks' },
  { value: '8–10 Ton',     label: 'Capacity/Truck' },
  { value: '100+',         label: 'Daily Deliveries' },
  { value: 'All Rajasthan', label: 'Coverage Area' },
]

const MISSION_POINTS = ['Quality materials at fair prices','Reliable same-day delivery','Expert guidance for every project','Long-term partnerships with clients']
const VISION_POINTS  = ['Expand to all Rajasthan districts','100+ truck fleet by 2027','Digital ordering platform',"Rajasthan's largest material network"]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.55, delay },
})

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* ── HERO ── */}
      <section className="relative bg-[#0d0d0d] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.09) 0%,transparent 70%)' }} aria-hidden />
        <div className="site-container py-24 md:py-32 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-5">Our Story</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-7">
              Building Rajasthan{' '}
              <span className="text-gradient">Since 2009</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-10">
              BCM BuildMart started with a simple mission: provide Jaipur&apos;s contractors
              and builders with the highest quality construction materials at fair prices,
              delivered reliably to their sites.
            </p>
            <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-black text-sm shrink-0">VK</div>
              <div>
                <p className="text-white font-semibold text-sm">{COMPANY.founder}</p>
                <p className="text-neutral-500 text-xs mt-0.5">Founder & CEO · {COMPANY.city}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0a0a0a] border-b border-white/5">
        <div className="site-container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '5000+', label: 'Happy Customers', icon: '👥' },
              { num: '15+',   label: 'Years in Business', icon: '🏆' },
              { num: '50+',   label: 'Tata Trucks',       icon: '🚛' },
              { num: '200+',  label: 'Products',          icon: '📦' },
            ].map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.08)}
                className="bg-[#141414] border border-white/7 rounded-2xl p-8 text-center hover:border-orange-500/30 transition-colors">
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2">{s.num}</div>
                <div className="text-neutral-400 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-24 md:py-32">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <motion.div {...fadeUp()}>
              <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-5">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-8">
                From a Small Shop to{' '}
                <span className="text-gradient">Rajasthan&apos;s Trusted Supplier</span>
              </h2>
              <div className="space-y-5 text-neutral-400 text-base leading-relaxed">
                <p>BCM BuildMart was founded in {COMPANY.established} by <span className="text-white font-semibold">{COMPANY.founder}</span> in Jaipur, Rajasthan. What started as a small building material shop near Sitapura Industrial Area has grown into one of Jaipur&apos;s most trusted construction material suppliers.</p>
                <p>Over 15 years, we&apos;ve built strong relationships with manufacturers, quarry owners, and logistics partners to offer the best quality materials at competitive prices. Our fleet of 50+ Tata trucks is the backbone of our same-day delivery promise.</p>
                <p>Today, BCM BuildMart serves 5000+ customers — individual homebuilders, civil contractors, real estate developers, and government project contractors across Jaipur and Rajasthan.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
              className="grid grid-cols-2 gap-5">
              {VALUES.map(v => (
                <div key={v.title} className="bg-[#141414] border border-white/7 rounded-2xl p-7 hover:border-orange-500/25 transition-colors">
                  <div className="text-orange-500 mb-4">{v.icon}</div>
                  <p className="text-white font-bold text-sm mb-2">{v.title}</p>
                  <p className="text-neutral-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-7">
            <motion.div {...fadeUp()} className="rounded-2xl p-10 bg-orange-500/6 border border-orange-500/20">
              <div className="w-14 h-14 bg-orange-500/15 rounded-2xl flex items-center justify-center mb-7">
                <Target size={26} className="text-orange-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-5">Our Mission</h3>
              <p className="text-neutral-400 leading-relaxed mb-7">To be Rajasthan&apos;s most reliable construction material supplier by providing premium quality products, competitive pricing, and dependable delivery services.</p>
              <ul className="space-y-3.5">
                {MISSION_POINTS.map(p => (
                  <li key={p} className="flex items-center gap-3 text-neutral-400 text-sm">
                    <CheckCircle size={15} className="text-orange-500 shrink-0" />{p}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="rounded-2xl p-10 bg-blue-500/6 border border-blue-500/20">
              <div className="w-14 h-14 bg-blue-500/15 rounded-2xl flex items-center justify-center mb-7">
                <Eye size={26} className="text-blue-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-5">Our Vision</h3>
              <p className="text-neutral-400 leading-relaxed mb-7">To become the #1 construction material supply chain in Rajasthan by 2030, serving every district with our network of warehouses and truck fleets.</p>
              <ul className="space-y-3.5">
                {VISION_POINTS.map(p => (
                  <li key={p} className="flex items-center gap-3 text-neutral-400 text-sm">
                    <CheckCircle size={15} className="text-blue-400 shrink-0" />{p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE — FIXED, no overlap ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-5">Our Journey</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">15 Years of Growth</h2>
          </div>

          {/* Simple vertical timeline — no alternating, no overlap */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-orange-500/20 to-transparent" aria-hidden />

            <div className="space-y-10">
              {TIMELINE.map((item, i) => (
                <motion.div key={item.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="relative pl-16">
                  {/* Dot */}
                  <div className="absolute left-3.5 top-5 w-5 h-5 bg-orange-500 rounded-full border-4 border-[#080808] shadow-lg shadow-orange-500/40" aria-hidden />
                  {/* Card */}
                  <div className="bg-[#141414] border border-white/7 rounded-2xl p-7 hover:border-orange-500/25 transition-colors">
                    <p className="text-orange-500 font-black text-xl mb-2">{item.year}</p>
                    <p className="text-white font-bold text-base mb-3">{item.title}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="site-container">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-5">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">The People Behind BCM</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <motion.div key={member.name} {...fadeUp(i * 0.08)}
                className={`rounded-2xl p-8 text-center group transition-all ${
                  member.highlight
                    ? 'bg-orange-500/8 border border-orange-500/25'
                    : 'bg-[#141414] border border-white/7 hover:border-white/15'
                }`}>
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-6 group-hover:scale-105 transition-transform ${
                  member.highlight
                    ? 'bg-gradient-to-br from-orange-500 to-orange-700 shadow-xl shadow-orange-500/30'
                    : 'bg-gradient-to-br from-neutral-700 to-neutral-800'
                }`}>
                  {member.initials}
                </div>
                <p className="text-white font-bold text-base mb-1.5">{member.name}</p>
                <p className={`text-sm font-medium mb-2 ${member.highlight ? 'text-orange-400' : 'text-neutral-400'}`}>{member.role}</p>
                <p className="text-neutral-500 text-xs">{member.exp}</p>
                {member.highlight && (
                  <div className="mt-5 pt-5 border-t border-orange-500/15">
                    <a href={`tel:${COMPANY.phone}`} className="text-orange-400 text-xs font-semibold hover:text-orange-300 transition-colors flex items-center justify-center gap-1.5">
                      <Phone size={11} /> {COMPANY.phone}
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET ── */}
      <section className="py-24 md:py-32">
        <div className="site-container">
          <div className="text-center mb-16">
            <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.15em] mb-5">Our Fleet</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              50+ Tata Trucks <span className="text-gradient">Ready to Serve</span>
            </h2>
          </div>
          <div className="bg-[#141414] border border-white/7 rounded-3xl p-10 md:p-14 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle,rgba(249,115,22,0.08) 0%,transparent 70%)' }} aria-hidden />
            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-5">Our Tata Truck Fleet</h3>
                <p className="text-neutral-400 text-base leading-relaxed mb-10">Our fleet of 50+ Tata trucks is the backbone of BCM BuildMart&apos;s delivery operations. Each truck is GPS-tracked, regularly maintained, and operated by experienced drivers who know every corner of Jaipur.</p>
                <div className="grid grid-cols-2 gap-4">
                  {FLEET_STATS.map(s => (
                    <div key={s.label} className="bg-white/4 border border-white/6 rounded-xl p-6">
                      <p className="text-orange-500 font-black text-2xl mb-1.5">{s.value}</p>
                      <p className="text-neutral-400 text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <motion.div animate={{ y: [0,-10,0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} className="text-center">
                  <div className="text-8xl mb-5" aria-hidden>🚛</div>
                  <p className="text-white font-bold text-base">Tata Truck Fleet</p>
                  <p className="text-neutral-500 text-sm mt-1.5">GPS Tracked · Insured</p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a href={`https://wa.me/${COMPANY.phoneRaw}?text=Hello%20BCM%20BuildMart!%20I%20want%20to%20book%20a%20truck.`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl shadow-green-600/20">
              💬 Book a Truck Now
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
