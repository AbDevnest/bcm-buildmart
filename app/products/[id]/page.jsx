'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  Star, Truck, Shield, Package, Phone,
  MessageCircle, ChevronRight, CheckCircle, Minus, Plus,
} from 'lucide-react'
import { products, COMPANY } from '@/lib/data'
import ProductCard from '@/components/ProductCard'

/* ============================================
   PRODUCT DETAIL PAGE
   Gallery · Specs · Delivery · Reviews
   ============================================ */

const TABS = [
  { key: 'specs',    label: 'Specifications' },
  { key: 'delivery', label: 'Delivery Info' },
  { key: 'reviews',  label: 'Reviews' },
]

const DELIVERY_INFO = [
  { icon: <Truck size={18} />,   title: 'Jaipur Delivery',    desc: 'Same-day delivery for orders placed before 12 PM. Our Tata trucks cover all Jaipur areas.' },
  { icon: <Package size={18} />, title: 'Bulk Orders',        desc: 'Special pricing and priority delivery for bulk orders. Minimum 1 truck load for bajri/rodi.' },
  { icon: <Shield size={18} />,  title: 'Quality Guarantee',  desc: 'All materials quality-checked before dispatch. 100% genuine and ISI certified products.' },
  { icon: <Phone size={18} />,   title: 'Order Tracking',     desc: 'Real-time updates on your delivery via WhatsApp. Our team keeps you informed at every step.' },
]

const SAMPLE_REVIEWS = [
  { name: 'Rajesh Sharma', rating: 5, text: 'Excellent quality material. Delivered on time as promised. Will order again.',        date: '2 weeks ago' },
  { name: 'Suresh Kumar',  rating: 5, text: 'Best price in Jaipur. The material quality is top notch. Highly recommended.',        date: '1 month ago' },
  { name: 'Priya Singh',   rating: 4, text: 'Good product, delivery was slightly delayed but overall satisfied with the quality.', date: '1 month ago' },
]

const TRUST_BADGES = [
  { icon: <Shield size={13} />,  text: 'Genuine Product' },
  { icon: <Truck size={13} />,   text: 'Fast Delivery' },
  { icon: <Package size={13} />, text: 'Bulk Available' },
]

export default function ProductDetailPage() {
  const { id }      = useParams()
  const product     = products.find(p => p.id === parseInt(id))
  const [qty,       setQty]       = useState(1)
  const [activeTab, setActiveTab] = useState('specs')
  const [failedImageId, setFailedImageId] = useState(null)

  // 404 state
  if (!product) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-white font-bold text-2xl mb-3">Product Not Found</h2>
          <Link href="/products" className="ui-btn ui-btn-primary ui-btn-sm">
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const related     = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
  const waMsg       = encodeURIComponent(`Hello BCM BuildMart! I'm interested in ${product.name} (Qty: ${qty} ${product.unit}). Please share availability and best price.`)
  const totalPrice  = (product.price * qty).toLocaleString()
  const imageSrc = failedImageId === product.id ? '/products/product-1.jpg' : product.image

  return (
    <div className="min-h-screen bg-[#080808]">

      {/* ---- Breadcrumb ---- */}
      <div className="bg-[#0d0d0d] border-b border-white/5 py-3">
        <div className="site-container flex items-center gap-2 text-sm text-neutral-500">
          <Link href="/"        className="hover:text-orange-400 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link href="/products" className="hover:text-orange-400 transition-colors">Products</Link>
          <ChevronRight size={12} />
          <span className="text-neutral-300 truncate">{product.name}</span>
        </div>
      </div>

      <div className="site-container py-10 md:py-14">

        {/* ===== PRODUCT MAIN SECTION ===== */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 mb-16">

          {/* ---- Left: Image ---- */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 aspect-square">
              <Image
                src={imageSrc}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                onError={() => {
                  if (failedImageId !== product.id) setFailedImageId(product.id)
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />

              {product.badge && (
                <span className="absolute top-4 left-4 ui-badge ui-badge-orange text-xs">
                  {product.badge}
                </span>
              )}
              {product.isBulk && (
                <span className="absolute top-4 right-4 ui-badge ui-badge-blue text-xs">
                  <Truck size={11} /> Truck Delivery
                </span>
              )}
            </div>
          </motion.div>

          {/* ---- Right: Details ---- */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {/* Category */}
            <p className="label mb-2">{product.category}</p>

            {/* Name */}
            <h1 className="title-lg text-white mb-4">{product.name}</h1>

            {/* Rating row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-700'}
                  />
                ))}
              </div>
              <span className="text-white font-semibold text-sm">{product.rating}</span>
              <span className="text-neutral-500 text-sm">({product.reviews} reviews)</span>
              <span className={`ui-badge text-xs ${product.stock === 'In Stock' ? 'ui-badge-green' : 'bg-red-500/15 text-red-400 border border-red-500/20'}`}>
                {product.stock}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-5">
              <span className="text-4xl font-black text-orange-500">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-neutral-400 text-sm">{product.unit}</span>
            </div>

            {/* Description */}
            <p className="text-body-md mb-5">{product.description}</p>

            {/* Bulk note */}
            {product.isBulk && (
              <div className="bg-blue-500/8 border border-blue-500/20 rounded-xl p-4 mb-5">
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm mb-1">
                  <Truck size={15} /> Bulk Order Available
                </div>
                <p className="text-neutral-400 text-sm">
                  Delivered by Tata Truck. 1 Truck = 8–10 Ton. Special pricing for multiple trucks.
                </p>
              </div>
            )}

            {/* Quantity selector */}
            <div className="flex items-center gap-4 mb-5">
              <span className="text-neutral-400 text-sm">Quantity:</span>
              <div className="flex items-center gap-3 bg-white/4 border border-white/10 rounded-xl px-4 py-2.5">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>
                <span className="text-white font-bold w-7 text-center">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="text-neutral-400 hover:text-white transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>
              <span className="text-neutral-500 text-sm">{product.unit}</span>
            </div>

            {/* Total */}
            <div className="bg-orange-500/8 border border-orange-500/20 rounded-xl px-5 py-4 mb-6 flex items-center justify-between">
              <span className="text-neutral-400 text-sm">Total Amount:</span>
              <span className="text-orange-500 font-black text-2xl">₹{totalPrice}</span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={`https://wa.me/${COMPANY.phoneRaw}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-btn ui-btn-whatsapp ui-btn-lg flex-1 justify-center"
              >
                <MessageCircle size={17} /> WhatsApp Inquiry
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="ui-btn ui-btn-primary ui-btn-lg flex-1 justify-center"
              >
                <Phone size={17} /> Call to Order
              </a>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2">
              {TRUST_BADGES.map(b => (
                <div
                  key={b.text}
                  className="flex items-center gap-1.5 text-neutral-400 text-xs bg-white/3 border border-white/6 rounded-lg p-2.5"
                >
                  <span className="text-orange-500 shrink-0">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ===== TABS ===== */}
        <div className="mb-14">
          {/* Tab bar */}
          <div className="flex gap-1 bg-white/4 border border-white/8 rounded-xl p-1 mb-7 w-fit">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab.key
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Specs */}
          {activeTab === 'specs' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 gap-3"
            >
              {Object.entries(product.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between surface-card px-5 py-3.5"
                >
                  <span className="text-neutral-400 text-sm">{key}</span>
                  <span className="text-white font-semibold text-sm">{value}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Delivery */}
          {activeTab === 'delivery' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {DELIVERY_INFO.map(item => (
                <div key={item.title} className="surface-card p-5 flex gap-4">
                  <div className="text-orange-500 shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Reviews */}
          {activeTab === 'reviews' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {SAMPLE_REVIEWS.map((r, i) => (
                <div key={i} className="surface-card p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-orange-500/15 rounded-full flex items-center justify-center text-orange-400 font-bold text-sm shrink-0">
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{r.name}</p>
                        <p className="text-neutral-500 text-xs">{r.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(r.rating)].map((_, j) => (
                        <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* ===== RELATED PRODUCTS ===== */}
        {related.length > 0 && (
          <div>
            <h2 className="title-md text-white mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
