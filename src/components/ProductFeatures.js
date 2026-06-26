'use client'
import { useState, useEffect } from 'react'

const features = [
  { title: 'Infinite Visual Canvas', desc: 'Map out multi-step agent behaviors on a high-precision grid. Drag and drop triggers, logic gates, and actions to craft custom paths.', icon: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z' },
  { title: 'Autonomous Execution', desc: 'Run complex decision trees without manual intervention. Our engine handles conditional branching and error recovery automatically.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'End-to-End Encryption', desc: 'Every node and data transfer is shielded by industrial-grade security. Maintain total control over your organizational data flow.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { title: 'Production-Ready Stack', desc: 'Connect core business platforms and internal services through secure, ready integrations that scale with your volume.', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' },
]

export default function ProductFeatures() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768
      if (mobile !== isMobile) {
        setIsMobile(mobile)
        // Transfer active context on resize (Feature 2 requirement)
        if (activeIndex !== null) setActiveIndex(activeIndex)
      }
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [isMobile, activeIndex])

  if (!isMobile) {
    return (
      <section className="bg-[#172B36] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FFC801] font-mono text-xs tracking-widest">⋙⋙⋙ PRODUCT FEATURES</span>
          <h2 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#F1F6F4] mt-4 mb-4">Build logic at scale</h2>
          <p className="text-[#F1F6F4]/50 text-sm mb-16 max-w-md">Design, deploy, and manage sophisticated AI workflows through an intuitive visual interface. No complex coding—just pure logic.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`border p-6 cursor-pointer transition-all duration-300 ${activeIndex === i ? 'bg-[#114C5A]/40 border-[#FFC801]/40' : 'bg-[#114C5A]/10 border-[#F1F6F4]/10 hover:bg-[#114C5A]/20'}`}>
                <svg className={`w-8 h-8 mb-4 transition-colors duration-200 ${activeIndex === i ? 'text-[#FFC801]' : 'text-[#F1F6F4]/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                </svg>
                <h3 className="font-['JetBrains_Mono'] text-[#F1F6F4] font-bold text-sm mb-2">{f.title}</h3>
                <p className={`text-[#F1F6F4]/50 text-xs leading-relaxed transition-all duration-300 ${activeIndex === i ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-[#172B36] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#FFC801] font-mono text-xs tracking-widest">⋙⋙⋙ PRODUCT FEATURES</span>
        <h2 className="font-['JetBrains_Mono'] text-3xl font-bold text-[#F1F6F4] mt-4 mb-4">Build logic at scale</h2>
        <p className="text-[#F1F6F4]/50 text-sm mb-10">Design, deploy, and manage sophisticated AI workflows. No complex coding—just pure logic.</p>
        <div className="space-y-2">
          {features.map((f, i) => (
            <div key={i} className="border border-[#F1F6F4]/10 overflow-hidden">
              <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setActiveIndex(activeIndex === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <svg className={`w-5 h-5 transition-colors duration-200 ${activeIndex === i ? 'text-[#FFC801]' : 'text-[#F1F6F4]/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                  <span className="font-['JetBrains_Mono'] text-[#F1F6F4] text-sm font-bold">{f.title}</span>
                </div>
                <svg className={`w-4 h-4 text-[#F1F6F4]/40 transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-4 pb-4 text-[#F1F6F4]/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}