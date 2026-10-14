'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { asset } from '@/lib/asset'
import { projects } from '@/lib/projects'

type Line = { kind: 'in' | 'out'; text: string }

const answers: Record<string, string[]> = {
  help: [
    'about      who I am',
    'skills     technical skills',
    'projects   what I have built',
    'contact    how to reach me',
    'resume     open my resume',
    'clear      clear the screen',
    'exit       close the terminal',
  ],
  about: [
    'Chinnapareddy Vishnu Vardhan Reddy',
    'Full Stack and AI engineer, B.Tech CSE (Data Science), 2026.',
    'Based in Ongole, Andhra Pradesh, India.',
  ],
  skills: [
    'Java 90%   Python 88%   JS/TS 85%   HTML/CSS 95%',
    'MySQL 85%  MongoDB 82%  Next.js/React 88%  Git, RBAC and AI 88%',
  ],
  contact: [
    'email    vishnuvardhanreddych45@gmail.com',
    'phone    +91 6301382491',
    'github   github.com/vishnu6301382491-dev',
    'linkedin linkedin.com/in/vishnu-vardhan-reddy-chinnapareddy',
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
