'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Milestones', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    gsap.from(ref.current, {
      yPercent: -100,
      opacity: 0,
      duration: 0.9,
      delay: 2.2,
      ease: 'power3.out',
    })

    let last = 0
    const hide = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const y = self.scroll()
        gsap.to(ref.current, {
          yPercent: y > last && y > 120 ? -110 : 0,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: true,
        })
        last = y
      },
    })

    const spy = links.map((l) =>
      ScrollTrigger.create({
        trigger: l.href,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: (s) => s.isActive && setActive(l.name),
      })
    )

    return () => {
      hide.kill()
      spy.forEach((t) => t.kill())
    }
  }, [])

  return (
    <header ref={ref} className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <nav className="glass pill mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="h-display text-xl text-white font-bold tracking-tight">
          Vishnu<span className="text-[var(--accent)]">.</span>
        </a>
        <ul className="hidden gap-7 text-[13px] font-medium lg:flex">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className={`nav-link ${
                  active === l.name ? 'text-white font-semibold' : 'text-[var(--text-dim)]'
                }`}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('open-cli'))
              }
            }}
            className="btn-ghost mono hidden px-4 py-2 text-[12px] sm:inline-block cursor-pointer"
          >
            &gt;_ CLI Terminal
          </button>
          <a href="#contact" className="btn-primary px-4 py-2 text-[13px]">
            Hire Me
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="ml-1 text-xl lg:hidden text-white"
          >
            {open ? '×' : '☰'}
          </button>
        </div>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl space-y-3 p-5 lg:hidden">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-[var(--text)] hover:text-[var(--accent)]"
            >
              {l.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
