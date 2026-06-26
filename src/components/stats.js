'use client'
import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 60
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, 1500 / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  const stats = [
    { value: 12, suffix: 'ms', label: 'Average latency for real-time inference.' },
    { value: 10, suffix: 'x', label: 'Increase in manual task processing speed.' },
    { value: 99, suffix: '%', label: 'Uptime for critical agent infrastructure.' },
  ]
  return (
    <section className="bg-[#172B36] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((s, i) => (
            <div key={i} className="border-t border-[#F1F6F4]/10 pt-8">
              <div className="font-['JetBrains_Mono'] text-6xl md:text-7xl font-bold text-[#F1F6F4] mb-3">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <p className="text-[#F1F6F4]/40 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-24 relative bg-[#0d1f28] aspect-video flex items-center justify-center cursor-pointer group">
          <div className="text-center z-10">
            <svg className="w-14 h-14 mx-auto mb-4 text-[#F1F6F4]/80" viewBox="0 0 60 60" fill="currentColor">
              <path d="M32 8L8 38H28L26 52L52 22H32L32 8Z"/>
            </svg>
            <span className="text-[#F1F6F4]/60 text-xs tracking-widest uppercase border border-[#F1F6F4]/20 px-4 py-2">PLAY VIDEO</span>
          </div>
          <div className="absolute top-4 right-4 text-[#F1F6F4]/40 text-xs">⏱ 2 Minutes Watch</div>
        </div>
      </div>
    </section>
  )
}