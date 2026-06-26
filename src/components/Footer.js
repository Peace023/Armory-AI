export default function Footer() {
  const links = {
    'QUICK LINKS': ['Home', 'Pricing', 'Projects', 'Articles'],
    'COMPANY': ['About Us', 'Contact Us', 'Book A Call', 'More Templates'],
    'POLICIES': ['Terms & Conditions', 'Privacy Policy']
  }
  return (
    <footer className="bg-[#172B36] px-6 pt-16 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-16 border-b border-[#F1F6F4]/10">
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#FFC801"/>
              </svg>
              <span className="font-mono text-[#F1F6F4] text-base font-bold">armory</span>
            </a>
            <div className="flex gap-3">
              {['X', '▣', '◉', '⊙'].map((s, i) => (
                <a key={i} href="#" className="w-7 h-7 border border-[#F1F6F4]/20 flex items-center justify-center text-[#F1F6F4]/40 hover:text-[#FFC801] hover:border-[#FFC801] transition-all duration-150 text-xs">{s}</a>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-[#F1F6F4]/30 text-xs tracking-widest mb-4">{section}</p>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="group flex items-center gap-1 text-[#F1F6F4]/60 hover:text-[#FFC801] text-sm transition-colors duration-150">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">→</span>{item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center overflow-hidden -mb-4">
        <p className="font-['JetBrains_Mono'] font-black text-[#F1F6F4]/10 leading-none select-none" style={{ fontSize: 'clamp(4rem,18vw,16rem)' }}>armory</p>
      </div>
      <div className="max-w-7xl mx-auto py-4 border-t border-[#F1F6F4]/10">
        <p className="text-[#F1F6F4]/20 text-xs text-center">©2025 Armory AI. All rights reserved.</p>
      </div>
    </footer>
  )
}