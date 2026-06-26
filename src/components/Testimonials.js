export default function Testimonials() {
  const testimonials = [
    { icon: '⚡', title: 'Infrastructure that finally scales', rating: 5, company: 'Vertex Labs', comment: "The reliability of Armory is unmatched. We've migrated our entire neural pipeline to their edge nodes with zero downtime." },
    { icon: 'Q', title: 'Saved us months of R&D', rating: 5, company: 'Frontline AI', comment: 'Instead of building our own agent logic from scratch, we used Armory. We went from a prototype to global production in weeks.' },
    { icon: 'C', title: 'Precision in every inference', rating: 5, company: 'Neural Sync', comment: 'The observability tools allow us to monitor agent accuracy in real time. It has become vital to our model evaluation workflow.' },
    { icon: '◎', title: 'Enterprise-grade by default', rating: 5, company: 'Sentinel One', comment: 'The node-based builder is a game changer. Even our non-technical stakeholders can now help map out complex agent behaviors.' },
  ]
  const logos = ['UnitedHealth', '♥aetna', 'cigna', 'Anthem', '♥CVS', 'UnitedHealth', '♥aetna']

  return (
    <section className="bg-[#F1F6F4] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#114C5A] font-mono text-xs tracking-widest">⋙⋙⋙ TESTIMONIALS</span>
        <h2 className="font-['JetBrains_Mono'] text-4xl md:text-5xl font-bold text-[#172B36] mt-4 mb-4">Trusted by the pioneers</h2>
        <p className="text-[#172B36]/50 text-sm mb-16 max-w-lg">From high-growth startups to enterprise research labs, Armory is the chosen infrastructure for teams building the next era of AI.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-[#172B36]/10 p-6 bg-white/50">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-[#172B36]">{t.icon}</span>
                <span className="font-['JetBrains_Mono'] text-[#172B36] text-xs font-bold">{t.title}</span>
              </div>
              <p className="text-[#172B36]/30 text-xs uppercase tracking-widest mb-1">RATING</p>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => <span key={j} className="text-[#FFC801] text-sm">★</span>)}
              </div>
              <p className="text-[#172B36]/30 text-xs uppercase tracking-widest mb-1">COMMENT</p>
              <p className="text-[#172B36]/60 text-xs leading-relaxed mb-4">{t.comment}</p>
              <div className="flex items-center gap-2 border-t border-[#172B36]/10 pt-4">
                <div className="w-5 h-5 rounded-full bg-[#172B36]/20" />
                <span className="text-[#172B36]/40 text-xs">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden border-y border-[#172B36]/10 py-4">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-[#172B36]/30 text-sm font-bold uppercase tracking-widest">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}