'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1
    }))
    let animId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 200, 1, ${p.alpha})`
        ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#172B36]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#172B36]/20 to-[#172B36]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
        <h1 className="font-['JetBrains_Mono'] text-5xl md:text-7xl font-bold text-[#F1F6F4] leading-tight mb-6">
          Power your<br />future with AI
        </h1>
        <p className="text-[#F1F6F4]/60 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Deploy custom enterprise agents and automate complex workflows. Scale your intelligence with Armory today.
        </p>
        <a href="#" className="group inline-flex items-center gap-3 border border-[#F1F6F4]/30 text-[#F1F6F4] px-6 py-3 text-sm hover:border-[#FFC801] hover:text-[#FFC801] transition-all duration-200">
          <span className="group-hover:translate-x-1 transition-transform duration-200">&gt;&gt;</span>
          Build A Workflow
        </a>
        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 opacity-40">
          {['aetna', 'cigna', 'Anthem', 'UnitedHealth', 'CVS'].map(logo => (
            <span key={logo} className="text-[#F1F6F4] text-sm tracking-widest uppercase">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  )
}