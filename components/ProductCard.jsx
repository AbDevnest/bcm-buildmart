'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Truck, Eye, MessageCircle, Phone } from 'lucide-react'
import { COMPANY } from '@/lib/data'

export default function ProductCard({ product }) {
  const FALLBACK_IMAGE = '/products/product-1.jpg'
  const [imageFailed, setImageFailed] = useState(false)
  const imageSrc = imageFailed ? FALLBACK_IMAGE : product.image

  const waMsg = encodeURIComponent(
    `Hello BCM BuildMart! I'm interested in ${product.name}. Please share price and availability.`
  )

  return (
    <article className="surface-card flex flex-col overflow-hidden group hover:border-orange-500/25 transition-colors">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-neutral-900 shrink-0">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => { if (!imageFailed) setImageFailed(true) }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />

        {product.badge && (
          <span className="absolute top-3.5 left-3.5 ui-badge ui-badge-orange text-[10px]">{product.badge}</span>
        )}
        {product.isBulk && (
          <span className="absolute top-3.5 right-3.5 ui-badge ui-badge-blue text-[10px]">
            <Truck size={9} /> Truck
          </span>
        )}
        <span className={`absolute bottom-3.5 right-3.5 ui-badge text-[10px] ${
          product.stock === 'In Stock'
            ? 'ui-badge-green'
            : 'bg-red-500/15 text-red-400 border border-red-500/25'
        }`}>
          {product.stock}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-orange-500/70 text-[11px] font-semibold uppercase tracking-wider mb-2">
          {product.category}
        </p>
        <h3 className="text-white font-bold text-sm leading-snug mb-3 clamp-2 group-hover:text-orange-400 transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11}
                className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-700'} />
            ))}
          </div>
          <span className="text-neutral-500 text-[11px]">{product.rating} ({product.reviews})</span>
        </div>

        <div className="flex items-baseline gap-1.5 mb-4">
          <span className="text-orange-500 font-black text-xl leading-none">₹{product.price.toLocaleString()}</span>
          <span className="text-neutral-500 text-xs">{product.unit}</span>
        </div>

        {product.isBulk && (
          <div className="flex items-center gap-2 text-[11px] text-blue-400 bg-blue-500/8 border border-blue-500/15 rounded-lg px-3 py-2 mb-4">
            <Truck size={10} className="shrink-0" />
            Bulk Order Available · Tata Truck Delivery
          </div>
        )}

        <div className="flex-1" />

        <div className="grid grid-cols-3 gap-2.5 mt-5 pt-4 border-t border-white/8">
          <Link href={`/products/${product.id}`}
            className="ui-btn ui-btn-secondary ui-btn-sm justify-center text-[11px] px-2">
            <Eye size={11} /> View
          </Link>
          <a href={`https://wa.me/${COMPANY.phoneRaw}?text=${waMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="ui-btn ui-btn-sm justify-center text-[11px] px-2 bg-green-600/15 text-green-400 border border-green-500/20 hover:bg-green-600/25 transition-colors rounded-xl">
            <MessageCircle size={11} /> Inquire
          </a>
          <a href={`tel:${COMPANY.phone}`} className="ui-btn ui-btn-primary ui-btn-sm justify-center text-[11px] px-2">
            <Phone size={11} /> Call
          </a>
        </div>
      </div>
    </article>
  )
}
