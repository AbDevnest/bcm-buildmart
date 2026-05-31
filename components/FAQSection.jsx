'use client'
import { useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { faqs, COMPANY } from '@/lib/data'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section className="site-section bg-[#0d0d0d]">
      <div className="site-container">

        <div className="mb-14 text-center max-w-2xl mx-auto">
          <p className="label mb-4">FAQ</p>
          <h2 className="title-lg text-white">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-body-lg mt-5">{`Everything you need to know about BCM BuildMart's products and services.`}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i}
              className={`rounded-xl border overflow-hidden transition-colors duration-200 ${
                openIndex === i
                  ? 'border-orange-500/30 bg-orange-500/4'
                  : 'border-white/6 bg-white/2 hover:border-white/12'
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className={`font-semibold text-sm md:text-base leading-snug transition-colors ${openIndex === i ? 'text-orange-400' : 'text-white'}`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 transition-all duration-200 ${openIndex === i ? 'text-orange-500 rotate-180' : 'text-neutral-500'}`}>
                  <ChevronDown size={18} />
                </span>
              </button>

              {/* Smooth accordion using max-height trick */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? '300px' : '0px' }}
              >
                <p className="px-6 pb-6 pt-1 text-neutral-400 text-sm leading-relaxed border-t border-white/5">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-neutral-500 text-sm mb-6">Still have questions? We&apos;re here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${COMPANY.phoneRaw}?text=Hello%20BCM%20BuildMart!%20I%20have%20a%20question.`}
              target="_blank" rel="noopener noreferrer"
              className="ui-btn ui-btn-whatsapp">
              💬 Chat on WhatsApp
            </a>
            <a href={`tel:${COMPANY.phone}`} className="ui-btn ui-btn-primary">
              <Phone size={15} /> {COMPANY.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
