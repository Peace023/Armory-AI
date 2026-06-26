'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="bg-[#172B36] py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(241,246,244,0.5) 40px,rgba(241,246,244,0.5) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(241,246,244,0.5) 40px,rgba(241,246,244,0.5) 41px)' }} />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <span className="text-[#FFC801] font-mono text-xs tracking-widest">⋙⋙⋙ GET STARTED</span>
        <h2 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#F1F6F4] mt-4 mb-4">Get smarter about AI systems</h2>
        <p className="text-[#F1F6F4]/50 text-sm mb-10">Weekly insights on automation, AI workflows, and real builds. No fluff, just what works.</p>
        {submitted ? (
          <p className="text-[#FFC801] font-['JetBrains_Mono'] text-sm">You&apos;re in. Neural dispatches incoming. ⚡</p>
        ) : (
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="jane@framer.com"
              className="flex-1 bg-[#114C5A]/20 border border-[#F1F6F4]/20 text-[#F1F6F4] text-sm px-4 py-3 outline-none placeholder:text-[#F1F6F4]/30 focus:border-[#FFC801] transition-colors duration-150" />
            <button onClick={() => email && setSubmitted(true)}
              className="group flex items-center justify-center gap-2 bg-[#F1F6F4]/10 border border-[#F1F6F4]/20 text-[#F1F6F4] px-5 py-3 text-sm hover:bg-[#FFC801] hover:text-[#172B36] hover:border-[#FFC801] transition-all duration-150 whitespace-nowrap">
              <span className="group-hover:translate-x-1 transition-transform duration-150">&gt;&gt;</span> Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  )
}