'use client'
import { useState } from 'react'

const faqData = {
  Overview: [
    { q: 'What is the Armory platform?', a: 'Armory is specialized infrastructure for building and deploying custom AI agents. We provide the neural logic and edge nodes required to run autonomous workflows at enterprise scale.' },
    { q: 'Who is this designed for?', a: 'Armory is built for engineering teams, AI researchers, and enterprise organizations that need reliable, scalable agent infrastructure without building from scratch.' },
    { q: 'Does Armory provide pre-built agents?', a: 'Yes. We offer a growing library of pre-built agent templates for common use cases including customer support, data processing, and workflow automation.' },
    { q: 'How does it differ from a standard chatbot?', a: 'Unlike chatbots, Armory agents can execute multi-step tasks, make decisions across complex workflows, integrate with external tools, and operate autonomously.' },
    { q: 'Can I use my own custom domain?', a: 'Absolutely. All paid plans support custom domain configuration for your deployed agents and dashboards.' },
    { q: 'Is there a limit to how many agents I can build?', a: 'Starter: 5 agents. Pro: 25 agents. Enterprise: unlimited.' },
  ],
  Security: [
    { q: 'How is my data protected?', a: 'All data is encrypted at rest and in transit using AES-256 and TLS 1.3. We maintain SOC 2 Type II compliance.' },
    { q: 'Do you store my API keys?', a: 'API keys are encrypted using envelope encryption and never stored in plaintext. You can rotate or revoke them at any time.' },
  ],
  Protocols: [
    { q: 'What LLMs does Armory support?', a: 'Armory supports GPT-4, Claude 3, Gemini Pro, Mistral, and any OpenAI-compatible API endpoint.' },
    { q: 'What is the rate limit?', a: 'Starter: 10K calls/mo. Pro: 100K calls/mo. Enterprise: unlimited with dedicated throughput.' },
  ],
  Licensing: [
    { q: 'Can I use Armory for commercial projects?', a: 'Yes. All plans include a commercial use license. Enterprise plans include white-labeling rights.' },
    { q: 'What happens if I cancel?', a: 'Your agents remain accessible for 30 days after cancellation. You can export all configurations and data at any time.' },
  ]
}

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-[#F1F6F4] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
          <span className="text-[#114C5A] font-mono text-xs tracking-widest">⋙⋙⋙ FAQ</span>
          <h2 className="font-['JetBrains_Mono'] text-4xl font-bold text-[#172B36] mt-4 mb-6">Common inquiries</h2>
          <p className="text-[#172B36]/50 text-sm mb-8">Everything you need to know about deploying, scaling, and securing your neural agents with Armory. Can&apos;t find an answer?</p>
          <a href="#" className="group inline-flex items-center gap-2 border border-[#172B36]/30 text-[#172B36] px-5 py-2.5 text-sm hover:border-[#114C5A] hover:text-[#114C5A] transition-all duration-200">
            <span className="group-hover:translate-x-1 transition-transform duration-200">&gt;&gt;</span> Contact Us
          </a>
        </div>
        <div className="lg:col-span-2">
          <div className="flex border-b border-[#172B36]/10 mb-6 overflow-x-auto">
            {Object.keys(faqData).map(tab => (
              <button key={tab} onClick={() => { setActiveTab(tab); setOpenIndex(0) }}
                className={`px-5 py-2.5 text-sm whitespace-nowrap transition-all duration-150 ${activeTab === tab ? 'bg-[#172B36] text-[#F1F6F4]' : 'text-[#172B36]/50 hover:text-[#172B36]'}`}>
                {tab}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            {faqData[activeTab].map((item, i) => (
              <div key={i} className="border border-[#172B36]/10 overflow-hidden">
                <button className="w-full flex items-center justify-between p-4 text-left" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  <span className="text-[#172B36] text-sm pr-4">{item.q}</span>
                  <div className={`w-5 h-5 flex-shrink-0 border border-[#172B36]/20 flex items-center justify-center transition-all duration-150 ${openIndex === i ? 'bg-[#172B36]' : ''}`}>
                    <span className={`text-xs ${openIndex === i ? 'text-[#F1F6F4]' : 'text-[#172B36]/40'}`}>{openIndex === i ? '−' : '+'}</span>
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-4 pb-4 text-[#172B36]/60 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}