export default function Articles() {
  const smalls = [
    { title: 'Why Your AI Outputs Feel Inconsistent', date: 'Apr 29, 2025', read: '2 MINS READ' },
    { title: 'From Prompting to Systems: The Real Shift in AI', date: 'Apr 29, 2025', read: '2 MINS READ' },
  ]
  return (
    <section className="bg-[#F1F6F4] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#114C5A] font-mono text-xs tracking-widest">⋙⋙⋙ ARTICLES</span>
        <h2 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#172B36] mt-4 mb-4">Insights on neural logic</h2>
        <p className="text-[#172B36]/50 text-sm mb-16 max-w-lg">Deep dives into AI architecture, agent automation, and the future of enterprise intelligence. Stay ahead of the neural curve.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="aspect-video bg-gradient-to-br from-[#114C5A] to-[#172B36] mb-4 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-32 h-32 rounded-full bg-[#FFC801]/30 blur-2xl" />
              </div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-['JetBrains_Mono'] text-[#F1F6F4] font-bold text-lg max-w-xs leading-tight">What It Takes to Turn AI Into a Business Asset</h3>
              </div>
            </div>
            <p className="text-[#172B36]/40 text-xs mb-2">Apr 29, 2025 · 2 MINS READ</p>
            <p className="text-[#172B36]/60 text-sm leading-relaxed">Using AI tools is easy. Turning them into something that drives real outcomes across your business requires structure.</p>
          </div>
          <div className="flex flex-col gap-6">
            {smalls.map((a, i) => (
              <div key={i} className="group cursor-pointer flex gap-4">
                <div className="w-32 h-24 flex-shrink-0 bg-gradient-to-br from-[#172B36] to-[#114C5A]/50" />
                <div>
                  <h3 className="font-['JetBrains_Mono'] text-[#172B36] font-bold text-sm mb-2 group-hover:text-[#114C5A] transition-colors duration-200">{a.title}</h3>
                  <p className="text-[#172B36]/40 text-xs">{a.date} · {a.read}</p>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-[#172B36]/30 text-xs mb-4">Access all our articles in one place.</p>
              <a href="#" className="group inline-flex items-center gap-2 border border-[#172B36]/30 text-[#172B36] px-5 py-2.5 text-sm hover:border-[#114C5A] hover:text-[#114C5A] transition-all duration-200">
                <span className="group-hover:translate-x-1 transition-transform duration-200">&gt;&gt;</span> View Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}