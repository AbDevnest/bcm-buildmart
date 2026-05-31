'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Truck, Send, CheckCircle, MessageCircle } from 'lucide-react'
import { COMPANY } from '@/lib/data'

/* ============================================
   CONTACT PAGE — premium spaced layout
   ============================================ */

const INQUIRY_TYPES = [
  { value: 'general', label: '💬 General' },
  { value: 'bulk',    label: '📦 Bulk Order' },
  { value: 'truck',   label: '🚛 Truck Booking' },
  { value: 'quote',   label: '💰 Get Quote' },
]

const CONTACT_CARDS = [
  {
    icon: <Phone size={20} />,
    title: 'Call Us',
    lines: [COMPANY.phone],
    sub: 'Mon–Sat, 8 AM – 8 PM',
    href: `tel:${COMPANY.phone}`,
    cta: 'Call Now',
    accent: 'orange',
  },
  {
    icon: <MessageCircle size={20} />,
    title: 'WhatsApp',
    lines: [COMPANY.phone],
    sub: 'Quick response guaranteed',
    href: `https://wa.me/${COMPANY.phoneRaw}`,
    cta: 'Chat Now',
    accent: 'green',
  },
  {
    icon: <Mail size={20} />,
    title: 'Email Us',
    lines: [COMPANY.email],
    sub: 'We reply within 24 hours',
    href: `mailto:${COMPANY.email}`,
    cta: 'Send Email',
    accent: 'blue',
  },
  {
    icon: <MapPin size={20} />,
    title: 'Visit Us',
    lines: ['Near Industrial Area, Sitapura'],
    sub: 'Jaipur, Rajasthan — 302022',
    href: 'https://maps.google.com/?q=Sitapura+Industrial+Area+Jaipur',
    cta: 'Get Directions',
    accent: 'purple',
  },
]

const ACCENT = {
  orange: { bg: 'bg-orange-500/12', text: 'text-orange-400', cta: 'text-orange-400 hover:text-orange-300', border: 'border-orange-500/20' },
  green:  { bg: 'bg-green-500/12',  text: 'text-green-400',  cta: 'text-green-400 hover:text-green-300',   border: 'border-green-500/20' },
  blue:   { bg: 'bg-blue-500/12',   text: 'text-blue-400',   cta: 'text-blue-400 hover:text-blue-300',     border: 'border-blue-500/20' },
  purple: { bg: 'bg-purple-500/12', text: 'text-purple-400', cta: 'text-purple-400 hover:text-purple-300', border: 'border-purple-500/20' },
}

const HOURS = [
  { day: 'Monday – Friday', time: '8:00 AM – 8:00 PM', open: true },
  { day: 'Saturday',        time: '8:00 AM – 6:00 PM', open: true },
  { day: 'Sunday',          time: 'Closed',             open: false },
]

const TRUCK_FEATURES = [
  'Bajri & Rodi delivery trucks',
  'Cement & steel transportation',
  'Construction site supply',
  'Daily, weekly & monthly hire',
]

const DEFAULT_FORM = { name: '', phone: '', email: '', subject: '', message: '', orderType: 'general' }

export default function ContactPage() {
  const [form, setForm]           = useState(DEFAULT_FORM)
  const [submitted, setSubmitted] = useState(false)

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hello BCM BuildMart!\n\nName: ${form.name}\nPhone: ${form.phone}\nInquiry: ${form.orderType}\nSubject: ${form.subject}\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/${COMPANY.phoneRaw}?text=${text}`, '_blank')
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setForm(DEFAULT_FORM) }, 5000)
  }

  return (
    <div className="min-h-screen bg-[#080808]">

      {/* ── HERO ── */}
      <div className="relative bg-[#0d0d0d] border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div
          className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
          aria-hidden
        />
        <div className="site-container py-20 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="label mb-4">Get In Touch</p>
            <h1 className="title-xl text-white mb-5">
              Contact{' '}
              <span className="text-gradient">BCM BuildMart</span>
            </h1>
            <p className="text-body-lg mb-8">
              Need building materials, want to book a truck, or have a bulk order
              inquiry? We&apos;re here to help — 6 days a week.
            </p>
            <div className="inline-flex items-center gap-4 bg-white/4 border border-white/8 rounded-xl px-5 py-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-black text-sm shrink-0">
                VK
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{COMPANY.founder}</p>
                <p className="text-neutral-500 text-xs mt-0.5">Founder, BCM BuildMart · {COMPANY.city}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="site-container py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">

          {/* LEFT — Contact info */}
          <div className="lg:col-span-2 space-y-5">

            {CONTACT_CARDS.map((card, i) => {
              const a = ACCENT[card.accent]
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`surface-card p-5 flex items-start gap-4 border ${a.border}`}
                >
                  <div className={`w-11 h-11 ${a.bg} rounded-xl flex items-center justify-center shrink-0 ${a.text}`}>
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm mb-1">{card.title}</p>
                    {card.lines.map(line => (
                      <p key={line} className="text-neutral-300 text-sm font-medium">{line}</p>
                    ))}
                    <p className="text-neutral-500 text-xs mt-1">{card.sub}</p>
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`inline-block mt-2.5 text-xs font-semibold transition-colors ${a.cta}`}
                    >
                      {card.cta} →
                    </a>
                  </div>
                </motion.div>
              )
            })}

            {/* Office hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="surface-card p-6"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Clock size={16} className="text-orange-500" />
                <p className="text-white font-semibold text-sm">Office Hours</p>
              </div>
              <ul className="space-y-3.5">
                {HOURS.map(h => (
                  <li key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-neutral-400">{h.day}</span>
                    <span className={h.open ? 'text-green-400 font-medium' : 'text-red-400'}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="surface-card p-8 md:p-10">
              <h2 className="title-md text-white mb-2">Send Us a Message</h2>
              <p className="text-body-sm mb-8">
                Fill the form and we&apos;ll respond via WhatsApp within minutes.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-18 h-18 bg-green-500/15 rounded-full flex items-center justify-center mb-5" style={{width:'4.5rem',height:'4.5rem'}}>
                    <CheckCircle size={36} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-neutral-400 text-sm">We&apos;ll contact you on WhatsApp shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Inquiry type */}
                  <div>
                    <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-3 block">
                      Inquiry Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {INQUIRY_TYPES.map(t => (
                        <button
                          key={t.value}
                          type="button"
                          onClick={() => set('orderType', t.value)}
                          className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all ${
                            form.orderType === t.value
                              ? 'bg-orange-500/15 border-orange-500/40 text-orange-400'
                              : 'bg-white/3 border-white/8 text-neutral-400 hover:border-white/16 hover:text-white'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2.5 block">
                        Full Name *
                      </label>
                      <input type="text" required value={form.name}
                        onChange={e => set('name', e.target.value)}
                        placeholder="Rajesh Kumar" className="field-input" />
                    </div>
                    <div>
                      <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2.5 block">
                        Phone Number *
                      </label>
                      <input type="tel" required value={form.phone}
                        onChange={e => set('phone', e.target.value)}
                        placeholder="+91 98765 43210" className="field-input" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2.5 block">
                      Email Address
                    </label>
                    <input type="email" value={form.email}
                      onChange={e => set('email', e.target.value)}
                      placeholder="your@email.com" className="field-input" />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2.5 block">
                      Subject *
                    </label>
                    <input type="text" required value={form.subject}
                      onChange={e => set('subject', e.target.value)}
                      placeholder="e.g., Bulk Bajri Order — 10 Trucks" className="field-input" />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2.5 block">
                      Message *
                    </label>
                    <textarea required rows={5} value={form.message}
                      onChange={e => set('message', e.target.value)}
                      placeholder="Describe your requirement — material type, quantity, delivery location, timeline..."
                      className="field-input resize-none" />
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button type="submit" className="ui-btn ui-btn-primary ui-btn-lg flex-1">
                      <Send size={16} /> Send via WhatsApp
                    </button>
                    <a href={`tel:${COMPANY.phone}`} className="ui-btn ui-btn-secondary ui-btn-lg sm:w-auto">
                      <Phone size={16} /> Call Directly
                    </a>
                  </div>

                </form>
              )}
            </div>
          </motion.div>

        </div>

        {/* ── MAP ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="title-sm text-white mb-6">Find Us in Jaipur</h2>
          <div className="surface-card h-80 flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
              aria-hidden
            />
            <div className="relative z-10 text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-white font-bold text-xl mb-2">BCM BuildMart</h3>
              <p className="text-neutral-400 text-sm mb-5">{COMPANY.address}</p>
              <a
                href="https://maps.google.com/?q=Sitapura+Industrial+Area+Jaipur+Rajasthan"
                target="_blank"
                rel="noopener noreferrer"
                className="ui-btn ui-btn-primary ui-btn-sm"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── TRUCK BOOKING ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-orange-500/6 border border-orange-500/20 rounded-2xl p-9 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-orange-500/15 rounded-xl flex items-center justify-center shrink-0">
                  <Truck size={22} className="text-orange-500" />
                </div>
                <h2 className="title-sm text-white">Truck Booking Inquiry</h2>
              </div>
              <p className="text-body-sm mb-6">
                Need to book a Tata truck for material delivery or transportation?
                Contact us and we&apos;ll arrange the right truck for your needs.
              </p>
              <ul className="space-y-3">
                {TRUCK_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-3 text-neutral-400 text-sm">
                    <CheckCircle size={14} className="text-orange-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/${COMPANY.phoneRaw}?text=Hello%20BCM%20BuildMart!%20I%20want%20to%20book%20a%20truck%20for%20material%20delivery.`}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-btn ui-btn-whatsapp ui-btn-lg justify-center"
              >
                💬 WhatsApp for Truck Booking
              </a>
              <a href={`tel:${COMPANY.phone}`} className="ui-btn ui-btn-primary ui-btn-lg justify-center">
                <Phone size={16} /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
