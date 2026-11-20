'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { asset } from '@/lib/asset'

gsap.registerPlugin(ScrollTrigger)

const primaryTags = [
  { name: 'my studio', href: '#home' },
  { name: 'projects', href: '#projects' },
  { name: 'contact', href: '#contact' },
]

export default function Navbar() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState('my studio')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.from(ref.current, {
      yPercent: -100,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: 'power3.out',
    })

    const spies = [
      { id: '#home', tag: 'my studio' },
      { id: '#projects', tag: 'projects' },
      { id: '#contact', tag: 'contact' },
    ].map((item) =>
      ScrollTrigger.create({
        trigger: item.id,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: (s) => s.isActive && setActive(item.tag),
      })
    )

    return () => {
      spies.forEach((t) => t.kill())
    }
  }, [])

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setMenuOpen(false)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('unlock-hero-scroll'))
      const targetId = href.replace('#', '')
      const targetEl = document.getElementById(targetId)
      if (targetEl) {
        e.preventDefault()
        targetEl.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', href)
      }
    }
  }

  return (
    <header
      ref={ref}
      className="fixed inset-x-0 top-1 z-50 px-2 sm:px-6 pointer-events-none"
      style={{ height: '42px' }}
    >
      <nav className="pointer-events-auto mx-auto flex h-10 max-w-5xl items-center justify-between px-3 sm:px-4 rounded-lg border border-white/10 bg-[#07080b]/90 backdrop-blur-xl shadow-xl">
        {/* Brand wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick('#home', e)}
          className="font-['Inter_Tight'] text-sm sm:text-base font-black tracking-tight text-white flex items-center gap-1 group"
        >
          <span>VISHNU</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff2d3d] group-hover:scale-150 transition-transform" />
        </a>

        {/* Compact Paper Tags (Center) */}
        <ul className="flex items-center gap-1 sm:gap-2">
          {primaryTags.map((tag) => {
            const isActive = active === tag.name
            return (
              <li key={tag.name}>
                <a
                  href={tag.href}
                  onClick={(e) => handleNavClick(tag.href, e)}
                  className={`font-['JetBrains_Mono'] text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded border transition-all duration-200 inline-block ${
                    isActive
                      ? 'border-[#ff2d3d] bg-[#ff2d3d]/15 text-white shadow-[0_0_10px_rgba(255,45,61,0.3)]'
                      : 'border-white/10 bg-white/[0.03] text-[var(--text-dim,#9c96b0)] hover:text-white hover:border-white/25'
                  }`}
                >
                  {tag.name}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Actions (Right) */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Hire Me CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick('#contact', e)}
            className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded bg-[#ff2d3d] text-white hover:brightness-110 shadow-[0_0_12px_rgba(255,45,61,0.4)] transition-all"
          >
            Hire Me
          </a>

          {/* Compact Menu Dropdown Toggle */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded border border-white/10 bg-white/[0.03] text-white/80 hover:text-white hover:border-white/25 flex items-center gap-1 cursor-pointer transition-all"
              aria-label="Open navigation menu"
            >
              <span>Menu</span>
              <span className="text-[9px] text-[#ff2d3d]">{menuOpen ? '▲' : '▼'}</span>
            </button>

            {/* Menu Popover */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl border border-white/15 bg-[#090a0f]/98 backdrop-blur-2xl p-2 shadow-2xl space-y-1">
                <a
                  href="#about"
                  onClick={(e) => handleNavClick('#about', e)}
                  className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  About Profile
                </a>
                <a
                  href={asset('/resume.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider block px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  Resume PDF ↗
                </a>
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new Event('open-cli'))
                    }
                    setMenuOpen(false)
                  }}
                  className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider w-full text-left px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                >
                  &gt;_ CLI Terminal
                </button>
                <a
                  href={asset('/haldoren.html')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider block px-3 py-2 rounded-lg text-emerald-300 hover:text-emerald-200 hover:bg-emerald-500/10 transition-colors"
                >
                  Augmented Mode ↗
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
