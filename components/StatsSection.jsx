'use client'
import { useEffect, useRef, useState } from 'react'
import { stats } from '@/lib/data'

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps = 80
          const inc = target / steps
          let cur = 0
          const t = setInterval(() => {
            cur += inc
            if (cur >= target) {
              setCount(target)
              clearInterval(t)
            } else {
              setCount(Math.floor(cur))
            }
          }, 1200 / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-[#0d0d0d]">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {stats.map((s) => (
            <div key={s.label}
              className="bg-[#141414] border border-white/7 rounded-2xl p-8 text-center hover:border-orange-500/30 transition-colors">
              <div className="text-4xl mb-4">{s.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-orange-500 leading-none mb-2">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-neutral-400 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
