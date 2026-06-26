'use client'
import { useState } from 'react'

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const cases = [
    { logo: 'cigna', name: 'Cigna Smart Health Systems', desc: 'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.' },
    { logo: 'aetna', name: 'Aetna Health Data Ecosystem', desc: "We automated Aetna's member data management using secure AI to provide personalized care and clinical insights." },
    { logo: 'Anthem', name: 'Anthem Neural Care Network', desc: "We deployed a custom LLM to automate Anthem's provider relations, reducing ticket latency by eighty-five percent." },
  ]
  return (
    <section className="bg-[#F1F6F4] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#114C5A] font-mono text-xs tracking-widest">⋙⋙⋙ CASE STUDIES</span>
        <h2 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#172B36] mt-4 mb-4">Proven neural solutions</h2>
        <p className="text-[#172B36]/50 text-sm mb-16 max-w-md">We partner with industry leaders to deploy bespoke AI agents that solve complex operational hurdles and drive measurable growth.</p>
        <div className="space-y-0">
          {cases.map((c, i) => (
            <div key={i} onMouseEnter={() => setActive(i)}
              className={`flex items-center gap-8 py-8 border-t border-[#172B36]/10 cursor-pointer transition-all duration-300 ${active === i ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}>
              <div className="w-32 flex-shrink-0">
                {active === i
                  ? <div className="w-28 h-20 bg-gradient-to-br from-[#114C5A] to-[#172B36] flex items-center justify-center"><span className="text-[#FFC801] font-['JetBrains_Mono'] font-bold text-sm">{c.logo}</span></div>
                  : <span className="font-bold text-[#172B36]/40 text-lg">{c.logo}</span>}
              </div>
              <div className="text-[#172B36]/40 text-sm">// 2025</div>
              <div className="flex-1">
                <h3 className="font-['JetBrains_Mono'] text-[#172B36] font-bold text-lg mb-2">{c.name}</h3>
                {active === i && <p className="text-[#172B36]/60 text-sm">{c.desc}</p>}
              </div>
              <span className={`text-[#172B36] transition-transform duration-200 ${active === i ? 'translate-x-1' : ''}`}>&gt;&gt;</span>
            </div>
          ))}
        </div>
        <a href="#" className="group inline-flex items-center gap-2 border border-[#172B36]/30 text-[#172B36] px-5 py-2.5 text-sm hover:border-[#114C5A] hover:text-[#114C5A] transition-all duration-200 mt-12">
          <span className="group-hover:translate-x-1 transition-transform duration-200">&gt;&gt;</span> More Projects
        </a>
      </div>
    </section>
  )
}