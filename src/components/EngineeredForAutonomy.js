'use client'
import { useState } from 'react'

const tabs = [
  { id: 'discovery', label: 'Discovery', desc: 'Identify the right use cases for AI automation in your organization. We map your workflows to find high-impact opportunities.', preview: 'Scanning organizational workflows...\n> 47 automation candidates found\n> Priority: High-frequency repetitive tasks\n> Estimated ROI: 340%' },
  { id: 'analysis', label: 'Analysis', desc: 'Evaluate agent performance with surgical precision. Get real-time scoring on accuracy, safety, and contextual relevance.', preview: 'Your score ●●●●●\n✓ Accuracy: 9/10\n✓ Safety: 8/10\n✓ Relevance: 100%\n✓ Latency: 0.5s\n\nSCORE: 96/100' },
  { id: 'training', label: 'Training', desc: 'Fine-tune your models with domain-specific data. Optimize weights for specific industry needs with guided training pipelines.', preview: 'Model Training Pipeline\n> Epoch 12/50\n> Loss: 0.0234\n> Validation: 94.2%\n\nMODEL TUNING ●●●●○' },
  { id: 'deploy', label: 'Deploy', desc: 'Push to production with one command. Our infrastructure handles scaling, monitoring, and failover automatically.', preview: '$ armory deploy --prod\n> Building agent bundle...\n> Running safety checks...\n> Deploying to edge nodes...\n✓ Live at armory.ai/agents/v2' },
]

export default function EngineeredForAutonomy() {
  const [active, setActive] = useState('analysis')
  const current = tabs.find(t => t.id === active)

  return (
    <section className="bg-[#172B36] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#FFC801] font-mono text-xs tracking-widest">⋙⋙⋙ PRODUCT FEATURES</span>
        <h2 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#F1F6F4] mt-4 mb-4">Engineered for autonomy</h2>
        <p className="text-[#F1F6F4]/50 text-sm mb-12 max-w-md">Go beyond simple chat interfaces. Armory provides the underlying architecture to build, test, and scale enterprise-grade agents.</p>
        <div className="flex border-b border-[#F1F6F4]/10 mb-8 overflow-x-auto">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActive(tab.id)}
              className={`px-6 py-3 text-sm whitespace-nowrap transition-all duration-200 border-b-2 ${active === tab.id ? 'border-[#F1F6F4] text-[#F1F6F4] bg-[#F1F6F4]/5' : 'border-transparent text-[#F1F6F4]/40 hover:text-[#F1F6F4]/70'}`}>
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[#0d1f28] border border-[#F1F6F4]/10 p-6 font-['JetBrains_Mono'] text-xs text-[#F1F6F4]/60 leading-relaxed whitespace-pre-line min-h-40">
            <div className="flex gap-1.5 mb-4">
              {[0,1,2].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#F1F6F4]/20" />)}
            </div>
            {current.preview}
          </div>
          <div>
            <p className="text-[#F1F6F4] text-lg leading-relaxed mb-6">{current.desc}</p>
            <p className="text-[#F1F6F4]/40 text-sm">Quantify every interaction for total quality.</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border border-[#FFC801] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FFC801]" />
              </div>
              <span className="text-[#FFC801] text-xs font-['JetBrains_Mono'] uppercase tracking-widest">{current.label} metrics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}