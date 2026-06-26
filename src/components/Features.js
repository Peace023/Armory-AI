export default function Features() {
  const features = [
    { title: 'Secure Guard', desc: 'We fortify your AI deployments with robust security protocols. Our team ensures every model adheres to strict data privacy standards.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { title: 'Agent Build', desc: 'Tailored AI agents designed for your specific needs. We develop custom logic and workflows that integrate deeply with your existing tools.', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { title: 'Cloud Scale', desc: 'Infrastructure optimization for high-traffic AI apps. We ensure your systems remain fast, responsive, and ready for any level of demand.', icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
    { title: 'Data Mining', desc: "Transform raw information into actionable intelligence. We build the pipelines and vector stores that power your organization's future.", icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  ]
  return (
    <section className="bg-[#114C5A]/20 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#FFC801] font-mono text-xs tracking-widest">⋙⋙⋙ STATISTICS</span>
        <p className="font-['JetBrains_Mono'] text-[#F1F6F4] text-2xl md:text-3xl font-bold my-4">
          Quantifiable impact across every deployment. We measure success by the speed and scale of your neural ops.
        </p>
        <a href="#" className="group inline-flex items-center gap-2 border border-[#F1F6F4]/30 text-[#F1F6F4] px-4 py-2 text-sm hover:border-[#FFC801] hover:text-[#FFC801] transition-all duration-200 mb-16">
          <span className="group-hover:translate-x-1 transition-transform duration-200">&gt;&gt;</span> View Report
        </a>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i}>
              <svg className="w-10 h-10 text-[#FFC801] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={f.icon} />
              </svg>
              <h3 className="font-['JetBrains_Mono'] text-[#F1F6F4] font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-[#F1F6F4]/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}