export default function IntegrationLogos() {
  const logos = ['A\\', 'aws', '⊞', 'bolt', '✳', '⬡', '✦', '⟁', '∞', '⊕', 'M', 'v0']
  return (
    <section className="bg-[#172B36] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-[#FFC801] font-mono text-xs tracking-widest">⋙⋙⋙ INTEGRATIONS</span>
        <h2 className="font-['JetBrains_Mono'] text-3xl md:text-5xl font-bold text-[#F1F6F4] mt-4 mb-16 max-w-lg">
          Armory bridges the gap between your data and your tools. Deploy agents that live where you work, from Slack to GitHub and beyond.
        </h2>
        <div className="grid grid-cols-4 gap-8">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center h-12 opacity-40 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
              <span className="font-['JetBrains_Mono'] text-[#F1F6F4] text-xl font-bold">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}