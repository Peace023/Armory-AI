'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['AI Strategy', 'Custom Agents', 'Process Automation', 'Data Intelligence']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#172B36]/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#FFC801" stroke="#FFC801" strokeWidth="1"/>
          </svg>
          <span className="font-mono text-[#F1F6F4] text-lg font-bold tracking-tight">armory</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link} href="#" className="text-[#F1F6F4]/70 hover:text-[#FFC801] text-sm transition-colors duration-200">{link}</a>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className={`block w-6 h-0.5 bg-[#F1F6F4] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#F1F6F4] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#F1F6F4] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#172B36]/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {links.map(link => (
            <a key={link} href="#" className="text-[#F1F6F4]/70 hover:text-[#FFC801] text-sm transition-colors duration-200 py-2 border-b border-white/10">{link}</a>
          ))}
        </div>
      )}
    </nav>
  )
}