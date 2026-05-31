'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Truck, ArrowRight } from 'lucide-react'
import { COMPANY } from '@/lib/data'

/* ============================================
   FOOTER
   CTA banner → 4-column grid → bottom bar
   Generous padding and column gaps throughout
   ============================================ */

const QUICK_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/products', label: 'All Products' },
  { href: '/about',    label: 'About Us' },
  { href: '/contact',  label: 'Contact Us' },
  { href: '/contact',  label: 'Truck Booking' },
  { href: '/products', label: 'Bulk Orders' },
]

const PRODUCT_LINKS = [
  'Banas Bajri',
  'Crushed Rodi',
  'Construction Sand',
  'Cement (All Brands)',
  'TMT Steel Bars',
  'JK Wall Putty',
  'Asian Paints',
  'PVC Pipes',
  'Waterproofing',
  'Tiles & Flooring',
]

const SERVICES = [
  '🚛 Tata Truck Delivery',
  '🏗️ Construction Site Supply',
  '📦 Bulk Orders',
  '⚡ Same Day Delivery',
  '🔧 Truck on Rent',
  '📋 Project Quotation',
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5">

      {/* ── CTA Banner ── */}
      <div
        style={{
          background:
            'linear-gradient(90deg, #b45309 0%, #c2410c 25%, #ea580c 55%, #f97316 80%, #b45309 100%)',
        }}
      >
        <div className="site-container py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-white font-black text-2xl md:text-3xl leading-tight">
                Ready to Start Your Construction?
              </h3>
              <p className="text-orange-100/80 mt-2 text-base">
                Get bulk material quotes with same-day Jaipur delivery
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`https://wa.me/${COMPANY.phoneRaw}?text=Hello%20BCM%20BuildMart!%20I%20need%20a%20bulk%20material%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-orange-600 px-7 py-3.5 rounded-xl font-bold hover:bg-orange-50 transition-all shadow-lg text-sm"
              >
                💬 WhatsApp Now
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 bg-orange-800/80 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-orange-900 transition-all border border-orange-300/20 text-sm"
              >
                <Phone size={15} /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      {/* py-20 = generous top/bottom, gap-12 lg:gap-16 = wide columns */}
      <div className="site-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Col 1 — Company */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg shadow-orange-600/20 shrink-0">
                B
              </div>
              <div>
                <p className="font-black text-white text-lg leading-none">
                  BCM <span className="text-orange-500">BuildMart</span>
                </p>
                <p className="text-neutral-500 text-xs mt-1.5">Building Rajasthan</p>
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed mb-7">
              Jaipur&apos;s most trusted building material supplier. Quality construction
              materials with reliable Tata truck delivery since {COMPANY.established}.
              Founded by{' '}
              <span className="text-neutral-300 font-medium">{COMPANY.founder}</span>.
            </p>

            {/* Contact list */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={14} className="text-orange-500 mt-0.5 shrink-0" />
                <span className="text-neutral-400 leading-relaxed">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={14} className="text-orange-500 shrink-0" />
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-neutral-400 hover:text-orange-400 transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={14} className="text-orange-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-neutral-400 hover:text-orange-400 transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock size={14} className="text-orange-500 shrink-0" />
                <span className="text-neutral-400">{COMPANY.hours}</span>
              </li>
            </ul>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {QUICK_LINKS.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2.5 group"
                  >
                    <ArrowRight
                      size={11}
                      className="text-orange-500/40 group-hover:text-orange-500 transition-colors shrink-0"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Products */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Our Products
            </h4>
            <ul className="space-y-3.5">
              {PRODUCT_LINKS.map(item => (
                <li key={item}>
                  <Link
                    href="/products"
                    className="text-neutral-400 hover:text-orange-400 text-sm transition-colors flex items-center gap-2.5 group"
                  >
                    <ArrowRight
                      size={11}
                      className="text-orange-500/40 group-hover:text-orange-500 transition-colors shrink-0"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Our Services
            </h4>
            <ul className="space-y-3.5 mb-8">
              {SERVICES.map(item => (
                <li key={item} className="text-neutral-400 text-sm">{item}</li>
              ))}
            </ul>

            {/* Delivery coverage ui-badge */}
            <div className="bg-orange-500/8 border border-orange-500/20 rounded-xl p-5">
              <div className="flex items-center gap-2.5 mb-2.5">
                <Truck size={14} className="text-orange-500" />
                <span className="text-orange-400 font-semibold text-xs">Delivery Coverage</span>
              </div>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Jaipur city &amp; all major Rajasthan districts.
                Same-day delivery available.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/5 py-6">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} BCM BuildMart. All rights reserved. | {COMPANY.city}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-700 text-xs">GST: {COMPANY.gst}</span>
            <span className="text-neutral-700 text-xs">MSME Registered</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
