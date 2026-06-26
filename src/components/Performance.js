'use client'
import { useEffect, useRef, useState } from 'react'

function Gauge({ value, max }) {
  const [animated, setAnimated] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setTimeout(() => setAnimated(value), 200)
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])
  const c = 2 * Math.PI * 40
  const offset = c - ((animated / max) * 100 / 100) * c
  return (
    <div ref={ref} className="relative w-24 h-24 mx-auto">
      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#F1F6F4" strokeOpacity="0.1" strokeWidth="6"/>
        <circle cx="50" cy="50" r="40" fill="none" stroke="#F1F6F4" strokeWidth="6"
          strokeDasharray={c} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.5s ease-out' }} strokeLinecap="round"/>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-['JetBrains_Mono'] text-[#F1F6F4] text-lg font-bold">{animated}</span>
      </div>
    </div>
  )
}

export default function Performance() {
  return (
    <section className="bg-[#172B36] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#FFC801] font-mono text-xs tracking-widest">⋙⋙⋙ PRODUCT STATISTICS</span>
        <h2 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#F1F6F4] mt-4 mb-4">Optimized for performance</h2>
        <p className="text-[#F1F6F4]/50 text-sm mb-16 max-w-lg">Monitor every neural pulse in real-time. Armory provides deep telemetry into agent accuracy, server latency, and token efficiency.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {[
            { title: 'System Load', sub: 'Active neural processing', val: '98.7', gauge: { v: 15, m: 20 }, extras: [{ l: '59%', s: 'CACHE' }, { l: '6M', s: 'UPTIME' }] },
            { title: 'SLA Response', sub: 'Global uptime monitoring', val: '99.99', gauge: null, extras: [] },
            { title: 'Token Usage', sub: 'Monthly volume throughput', val: '8.4K', gauge: { v: 345, m: 400 }, extras: [{ l: '152', s: 'TOTAL QUERIES' }, { l: '115', s: 'ACTIVE NODES' }] },
          ].map((s, i) => (
            <div key={i} className="border border-[#F1F6F4]/10 p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#F1F6F4]/40 text-xs">✕</span>
                <span className="text-[#F1F6F4]/60 text-xs uppercase tracking-widest">{s.title}</span>
                <span className="ml-auto text-[#F1F6F4]/60 text-xs font-['JetBrains_Mono']">{s.val}</span>
              </div>
              <p className="text-[#F1F6F4]/30 text-xs mb-6">{s.sub}</p>
              {s.gauge && <Gauge value={s.gauge.v} max={s.gauge.m} />}
              {s.extras.length > 0 && (
                <div className="flex gap-6 mt-4">
                  {s.extras.map((e, j) => (
                    <div key={j}>
                      <p className="font-['JetBrains_Mono'] text-[#F1F6F4] text-xl font-bold">{e.l}</p>
                      <p className="text-[#F1F6F4]/30 text-xs">{e.s}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border border-[#F1F6F4]/10 p-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#F1F6F4]/40 text-xs">✕</span>
            <span className="text-[#F1F6F4]/60 text-xs uppercase tracking-widest">Growth Vector</span>
            <span className="ml-auto text-[#F1F6F4]/60 text-xs font-['JetBrains_Mono']">99.98%</span>
          </div>
          <p className="text-[#F1F6F4]/30 text-xs mb-4">Efficiency gains over 30 days</p>
          <p className="font-['JetBrains_Mono'] text-[#F1F6F4] text-5xl font-bold mb-2">82%</p>
          <p className="text-[#F1F6F4]/30 text-xs mb-6">NET GROWTH</p>
          <div className="h-16 flex items-end gap-1">
            {[20,35,25,45,30,55,40,65,50,75,60,82].map((h, i) => (
              <div key={i} className="flex-1 bg-[#F1F6F4]/20 rounded-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <a href="#" className="group inline-flex items-center gap-2 border border-[#F1F6F4]/20 text-[#F1F6F4]/60 px-4 py-2 text-xs hover:border-[#FFC801] hover:text-[#FFC801] transition-all duration-200">
              <span className="group-hover:translate-x-1 transition-transform duration-200">&gt;&gt;</span> Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}