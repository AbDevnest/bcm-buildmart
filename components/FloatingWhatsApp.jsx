'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { COMPANY } from '@/lib/data'

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)

  const waLink = `https://wa.me/${COMPANY.phoneRaw}?text=Hello%20BCM%20BuildMart!%20I%20need%20building%20materials%20quote.`

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      
      {/* Popup */}
      <div
        className={`w-[320px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-200 origin-bottom-right ${
          open
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}
        style={{ background: '#161616' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-green-700">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-black text-white">
              B
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                BCM BuildMart
              </p>
              <p className="mt-0.5 text-[10px] text-green-200">
                Typically replies instantly
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="p-1 text-white/70 transition hover:text-white"
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="mb-4 rounded-xl bg-white/5 p-3">
            <p className="text-sm leading-relaxed text-neutral-300">
              👋 Hi! Need building materials?
              <br />
              Chat with us for{' '}
              <strong className="text-white">
                instant quotes
              </strong>{' '}
              on Bajri, Rodi, Cement, TMT Steel & more.
            </p>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500"
          >
            Start Chat →
          </a>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95"
        style={{
          background:
            'linear-gradient(135deg,#25d366,#128c7e)',
          boxShadow:
            '0 4px 20px rgba(37,211,102,0.4)',
        }}
      >
        {WA_ICON}

        {!open && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-green-400 opacity-20"
          />
        )}
      </button>
    </div>
  )
}