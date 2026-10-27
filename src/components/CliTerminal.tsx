'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { asset } from '@/lib/asset'
import { projects } from '@/lib/projects'

type Line = { kind: 'in' | 'out'; text: string }

const answers: Record<string, string[]> = {
  help: [
    'about       who I am & summary',
    'experience  work experience & internships',
    'education   degrees & academic record',
    'skills      technical skills matrix',
    'projects    featured repositories & apps',
    'foodwala    flagship Java Servlets & JSP project details',
    'aqi         AQI prediction GA-KELM project details',
    'repos       19 public GitHub repositories overview',
    'contact     contact info & social links',
    'resume      open my resume.pdf',
    'clear       clear the terminal screen',
    'exit        close the CLI terminal',
  ],
  about: [
    'CHINNAPAREDDY VISHNU VARDHAN REDDY',
    'Java Full Stack Developer & recent B.Tech CSE (Data Science) graduate (CGPA: 7.78).',
    'Java Full Stack Intern at TAP Academy (May 2026 – Present).',
    'Built FoodWala (Java Servlets & JSP) and AQI Prediction Dashboard (GA-KELM).',
    'Location: Ongole, Andhra Pradesh, India.',
  ],
  experience: [
    'ROLE:    Java Full Stack Intern',
    'COMPANY: TAP Academy (May 2026 – Present)',
    'FOCUS:   Java Full Stack web development, Servlets, JSP, MySQL, HTML5/CSS3/JS.',
    'SHIPPED: FoodWala food ordering platform with Razorpay test payments & RBAC.',
  ],
  education: [
    '1. B.Tech in CSE (Data Science) — CGPA: 7.78 (Graduated Apr 2026)',
    '   Rise Krishna Sai Prakasam Group of Institutions, Ongole, Andhra Pradesh',
    '2. Intermediate (MPC) (Graduated Apr 2022) — Sri Gowthami Junior College',
    '3. SSC (Graduated Apr 2020) — ZP High School',
  ],
  skills: [
    'LANGUAGES: Java (OOP, Servlets, JSP), Python, JavaScript, TypeScript',
    'WEB DEV:   Java Servlets, JSP, Next.js, React, HTML5, CSS3, Tailwind CSS',
    'DATABASE:  MySQL (Relational Schemas, ACID, Queries), MongoDB',
    'TOOLS:     Git, GitHub, MS Excel, REST APIs, Razorpay API',
    'SOFT:      Communication, Teamwork, Problem-Solving, Adaptability',
  ],
  contact: [
    'email     vishnuvardhanreddych45@gmail.com',
    'phone     +91 6301382491',
    'github    https://github.com/vishnu6301382491-dev (19 repos)',
    'linkedin  https://linkedin.com/in/vishnu-vardhan-reddy-chinnapareddy',
    'portfolio https://vishnu6301382491-dev.github.io/portfolio',
  ],
  foodwala: [
    'PROJECT:  FoodWala — Food Ordering Website',
    'STACK:    Java, Java Servlets, JSP, MySQL, HTML5, CSS3, JavaScript, Razorpay API',
    'DETAILS:  Built for Bengaluru with 100+ restaurants & 750+ dishes.',
    'SECURITY: Multi-role RBAC (Customer, Manager, Delivery Partner, Admin).',
    'LIVE:     https://vishnu6301382491-dev.github.io/Foodwala',
    'CODE:     https://github.com/vishnu6301382491-dev/Foodwala',
  ],
  aqi: [
    'PROJECT:  AQI Prediction Dashboard (GA-KELM)',
    'STACK:    Python, Genetic Algorithm, Kernel Extreme Learning Machine, JS, Chart.js',
    'DETAILS:  Location-based air quality forecasting & interactive dark visualizations.',
    'LIVE:     https://vishnu6301382491-dev.github.io/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm',
    'CODE:     https://github.com/vishnu6301382491-dev/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm',
  ],
  tap: [
    'INTERNSHIP: Java Full Stack Intern at TAP Academy (May 2026 – Present)',
    'CURRICULUM: Enterprise Java, Servlets, JSP, MySQL, Web Dev, Git/GitHub.',
    'PROJECT:    Shipped FoodWala full-stack application.',
  ],
  repos: [
    'Total Verified Public Repositories: 19',
    'Live Deployments: 17+',
    'Primary Tech: Java, Python, Next.js, MySQL, Machine Learning',
    'Profile: https://github.com/vishnu6301382491-dev?tab=repositories',
  ],
}

export default function CliTerminal() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const [lines, setLines] = useState<Line[]>([
    { kind: 'out', text: 'Vishnu.dev CLI. Type "help" to begin.' },
  ])
  const box = useRef<HTMLDivElement>(null)
  const body = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const o = () => setOpen(true)
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('open-cli', o)
    window.addEventListener('keydown', k)
    return () => {
      window.removeEventListener('open-cli', o)
      window.removeEventListener('keydown', k)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    gsap.fromTo(
      box.current,
      { opacity: 0, scale: 0.94, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out' }
    )
    input.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    body.current?.scrollTo({ top: body.current.scrollHeight })
  }, [lines])

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    if (cmd === 'clear') return setLines([])
    if (cmd === 'exit') return setOpen(false)
    let text: string[]
    if (cmd === 'resume') {
      window.open(asset('/resume.pdf'), '_blank')
      text = ['Opening resume.pdf ...']
    } else if (cmd === 'projects') {
      text = projects.map((p) => `- ${p.title}`)
    } else {
      text = answers[cmd] ?? [`command not found: ${cmd}. Type "help".`]
    }
    setLines((l) => [
      ...l,
      { kind: 'in', text: raw },
      ...text.map((t) => ({ kind: 'out' as const, text: t })),
    ])
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        ref={box}
        onClick={(e) => e.stopPropagation()}
        className="crt glass relative w-full max-w-2xl overflow-hidden rounded-2xl"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <i className="tl-btn" />
          <i className="tl-btn" />
          <i className="tl-btn" />
          <span className="mono ml-3 text-[11px] text-[var(--text-dim)]">
            vishnu@portfolio: ~
          </span>
        </div>
        <div
          ref={body}
          data-lenis-prevent
          className="mono h-80 overflow-y-auto p-4 text-[13px] leading-6"
        >
          {lines.map((l, i) => (
            <p
              key={i}
              className={
                l.kind === 'in' ? 'text-[var(--accent)]' : 'text-white/80'
              }
            >
              {l.kind === 'in' ? `> ${l.text}` : l.text}
            </p>
          ))}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              run(value)
              setValue('')
            }}
            className="flex gap-2"
          >
            <span className="text-[var(--green)]">&gt;</span>
            <input
              ref={input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              spellCheck={false}
              autoComplete="off"
              className="flex-1 bg-transparent text-[var(--accent)] outline-none"
              aria-label="Terminal command"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
