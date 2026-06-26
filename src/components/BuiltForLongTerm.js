'use client'
import { useEffect, useRef, useState } from 'react'

export default function BuiltForLongTerm() {
  const [eyeOpen, setEyeOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setTimeout(() => setEyeOpen(true), 400)
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const items = [
    { title: 'Prime Logic', desc: 'We prioritize high-fidelity model alignment to ensure your agents deliver consistent results.' },
    { title: 'Total Clarity', desc: 'Gain full observability into how your data is processed, indexed, and retrieved by your AI.' },
    { title: 'Fast Cycles', desc: 'Transition from prototype to production in weeks, not months, with our pre-built frameworks.' },
  ]

  return (
    <section className="bg-[#F1F6F4] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div ref={ref} className="relative h-80 bg-[#172B36] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 20px,rgba(241,246,244,0.3) 20px,rgba(241,246,244,0.3) 21px),repeating-linear-gradient(90deg,transparent,transparent 20px,rgba(241,246,244,0.3) 20px,rgba(241,246,244,0.3) 21px)' }} />
          <svg viewBox="0 0 200 200" className="w-48 h-48 text-[#F1F6F4]">
            <ellipse cx="100" cy="100" rx="80" ry={eyeOpen ? 50 : 4} fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'ry 1.2s cubic-bezier(0.34,1.56,0.64,1)' }}/>
            <circle cx="100" cy="100" r={eyeOpen ? 28 : 0} fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'r 1s ease-out 0.4s' }}/>
            <circle cx="100" cy="100" r={eyeOpen ? 12 : 0} fill="currentColor" style={{ transition: 'r 0.8s ease-out 0.6s' }}/>
          </svg>
        </div>
        <div>
          <span className="text-[#114C5A] font-mono text-xs tracking-widest">⋙⋙⋙ OUR APPROACH</span>
          <h2 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#172B36] mt-4 mb-4">Built for the long term</h2>
          <p className="text-[#172B36]/50 text-sm mb-10">We don&apos;t just ship code; we architect neural ecosystems. Our approach combines rigorous testing with rapid deployment cycles.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <div key={i}>
                <h3 className="font-['JetBrains_Mono'] text-[#172B36] font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-[#172B36]/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}