'use client'
import { useState } from 'react'

const MATRIX = {
  tiers: {
    starter: { base: 29, label: 'Starter', desc: 'Perfect for small teams exploring AI automation.' },
    pro: { base: 79, label: 'Pro', desc: 'For growing teams that need advanced capabilities.' },
    enterprise: { base: 199, label: 'Enterprise', desc: 'Full-scale deployment for large organizations.' }
  },
  currencies: { USD: { symbol: '$', tariff: 1.0 }, INR: { symbol: '₹', tariff: 83.5 }, EUR: { symbol: '€', tariff: 0.92 } },
  annualDiscount: 0.20
}

const featureList = {
  starter: ['5 AI Agents', '10K API calls/mo', 'Basic analytics', 'Email support', '1 workspace'],
  pro: ['25 AI Agents', '100K API calls/mo', 'Advanced analytics', 'Priority support', '5 workspaces', 'Custom integrations'],
  enterprise: ['Unlimited agents', 'Unlimited API calls', 'Enterprise analytics', 'Dedicated support', 'Unlimited workspaces', 'Custom integrations', 'SLA guarantee', 'SSO & SAML']
}

function computePrice(tierKey, currency, isAnnual) {
  const base = MATRIX.tiers[tierKey].base * MATRIX.currencies[currency].tariff
  return Math.round(isAnnual ? base * (1 - MATRIX.annualDiscount) : base)
}

export default function Pricing() {
  const [currency, setCurrency] = useState('USD')
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="bg-[#172B36] py-24 px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#FFC801] font-mono text-xs tracking-widest">⋙⋙⋙ PRICING</span>
        <h2 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#F1F6F4] mt-4 mb-4">Simple, transparent pricing</h2>
        <p className="text-[#F1F6F4]/50 text-sm mb-12 max-w-md">Scale your AI infrastructure without surprises. Choose the plan that fits your team.</p>

        <div className="flex flex-wrap items-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            <span className={`text-sm transition-colors duration-150 ${!isAnnual ? 'text-[#F1F6F4]' : 'text-[#F1F6F4]/40'}`}>Monthly</span>
            <button onClick={() => setIsAnnual(p => !p)} className={`relative w-12 h-6 rounded-full transition-colors duration-150 ${isAnnual ? 'bg-[#FFC801]' : 'bg-[#F1F6F4]/20'}`}>
              <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-150 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm transition-colors duration-150 ${isAnnual ? 'text-[#F1F6F4]' : 'text-[#F1F6F4]/40'}`}>Annual <span className="text-[#FFC801] text-xs">-20%</span></span>
          </div>
          <select value={currency} onChange={e => setCurrency(e.target.value)}
            className="bg-[#114C5A]/30 border border-[#F1F6F4]/20 text-[#F1F6F4] text-sm px-3 py-1.5 outline-none cursor-pointer hover:border-[#FFC801] transition-colors duration-150">
            {Object.keys(MATRIX.currencies).map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(MATRIX.tiers).map(([key, tier]) => {
            const price = computePrice(key, currency, isAnnual)
            const symbol = MATRIX.currencies[currency].symbol
            const isPro = key === 'pro'
            return (
              <div key={key} className={`border p-8 transition-all duration-200 ${isPro ? 'border-[#FFC801] bg-[#FFC801]/5' : 'border-[#F1F6F4]/10 hover:border-[#F1F6F4]/30'}`}>
                {isPro && <div className="text-[#FFC801] text-xs font-['JetBrains_Mono'] mb-4 tracking-widest">MOST POPULAR</div>}
                <h3 className="font-['JetBrains_Mono'] text-[#F1F6F4] font-bold text-xl mb-2">{tier.label}</h3>
                <p className="text-[#F1F6F4]/40 text-xs mb-6">{tier.desc}</p>
                <div className="mb-8">
                  <span className="font-['JetBrains_Mono'] text-[#F1F6F4] text-4xl font-bold">{symbol}{price.toLocaleString()}</span>
                  <span className="text-[#F1F6F4]/40 text-sm ml-1">/ {isAnnual ? 'yr' : 'mo'}</span>
                </div>
                <a href="#" className={`group flex items-center justify-center gap-2 py-3 text-sm mb-8 transition-all duration-150 ${isPro ? 'bg-[#FFC801] text-[#172B36] hover:bg-[#FF9932]' : 'border border-[#F1F6F4]/20 text-[#F1F6F4] hover:border-[#FFC801] hover:text-[#FFC801]'}`}>
                  <span className="group-hover:translate-x-1 transition-transform duration-150">&gt;&gt;</span> Get Started
                </a>
                <ul className="space-y-3">
                  {featureList[key].map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-[#F1F6F4]/60">
                      <svg className="w-3.5 h-3.5 text-[#FFC801] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}