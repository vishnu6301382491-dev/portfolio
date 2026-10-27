'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSplitReveal } from '@/lib/useReveal'
import { asset } from '@/lib/asset'

gsap.registerPlugin(ScrollTrigger)

const FORM_URL = process.env.NEXT_PUBLIC_FORM_URL ?? ''
type Status = 'idle' | 'sending' | 'sent' | 'error'

const channels = [
  { label: 'Email', value: 'vishnuvardhanreddych45@gmail.com', href: 'mailto:vishnuvardhanreddych45@gmail.com' },
  { label: 'Phone', value: '+91 6301382491', href: 'tel:+916301382491' },
  { label: 'GitHub', value: 'vishnu6301382491-dev', href: 'https://github.com/vishnu6301382491-dev' },
  { label: 'LinkedIn', value: 'vishnu-vardhan-reddy-chinnapareddy', href: 'https://linkedin.com/in/vishnu-vardhan-reddy-chinnapareddy' },
  { label: 'Portfolio', value: 'vishnu6301382491-dev.github.io/portfolio', href: 'https://vishnu6301382491-dev.github.io/portfolio' },
  { label: 'Resume PDF ↗', value: 'resume.pdf', href: asset('/resume.pdf') },
  { label: 'Instagram', value: '@vishnu_reddy_4503', href: 'https://instagram.com/vishnu_reddy_4503' },
]

function Line({ k, value, ph }: { k: string; value: string; ph: string }) {
  return (
    <p className="mono text-[12px] leading-7">
      <span className="text-[var(--text-dim)]">{k}: </span>
      {value ? (
        <span className="text-[var(--accent)]">&quot;{value}&quot;</span>
      ) : (
        <span className="text-white/35">[{ph}]</span>
      )}
    </p>
  )
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  useSplitReveal(ref)

  const [f, setF] = useState({ first: '', last: '', email: '', message: '', consent: false })
  const [status, setStatus] = useState<Status>('idle')

  const name = [f.first, f.last].filter(Boolean).join(' ')
  const valid = !!name && /\S+@\S+\.\S+/.test(f.email) && f.message.length > 9 && f.consent

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.watermark', { xPercent: -50 })
      gsap.fromTo(
        '.watermark',
        { scale: 1.5, filter: 'blur(24px)', opacity: 0 },
        {
          scale: 1,
          filter: 'blur(0px)',
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'top 20%',
            scrub: 0.6,
          },
        }
      )
      gsap.to('.watermark', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      })
      gsap.from('.contact-card', {
        y: 60,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const pull = (e: React.PointerEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    gsap.to(e.currentTarget, {
      x: (e.clientX - (r.left + r.width / 2)) * 0.3,
      y: (e.clientY - (r.top + r.height / 2)) * 0.3,
      duration: 0.3,
    })
  }

  const release = (e: React.PointerEvent<HTMLButtonElement>) =>
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.4)',
    })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid || status === 'sending') return
    setStatus('sending')
    try {
      if (FORM_URL) {
        const res = await fetch(FORM_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email: f.email, message: f.message }),
        })
        setStatus(res.ok ? 'sent' : 'error')
      } else {
        const mailto = `mailto:vishnuvardhanreddych45@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
          name
        )}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${f.email}\n\nMessage:\n${f.message}`
        )}`
        window.location.href = mailto
        setStatus('sent')
      }
    } catch {
      setStatus('error')
    }
  }

  const set = (k: keyof typeof f) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setF({ ...f, [k]: e.target.value })

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden px-6 pb-24 pt-40"
    >
      <div
        aria-hidden
        className="watermark h-display pointer-events-none absolute left-1/2 top-10 select-none whitespace-nowrap"
      >
        CONTACT
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p data-eyebrow className="eyebrow">
          {'// 07 CONNECT'}
        </p>
        <h2
          data-split
          className="h-display mt-4 max-w-2xl text-[clamp(32px,5vw,60px)] text-white"
        >
          Get In Touch
        </h2>
        <p
          data-fade
          className="mt-4 max-w-lg text-sm text-[var(--text-dim)]"
        >
          Let&apos;s build something exceptional. Tell me about the role or the project.
        </p>

        <div data-fade className="mt-6 flex flex-wrap gap-2">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') || c.href.endsWith('.pdf') ? '_blank' : undefined}
              rel="noreferrer"
              className="chip glass pill mono"
              title={c.value}
            >
              {c.label}
            </a>
          ))}
        </div>

        <div className="contact-grid mt-12 grid gap-6 lg:grid-cols-2">
          <div className="contact-card terminal glass p-6 rounded-2xl">
            <div className="mb-4 flex gap-1.5">
              <i className="tl-btn" />
              <i className="tl-btn" />
              <i className="tl-btn" />
            </div>
            <p className="mono mb-3 text-[11px] tracking-widest text-[var(--text-dim)]">
              {'// payload_preview.json'}
            </p>
            <Line k="sender" value={name} ph="Awaiting Name" />
            <Line k="email" value={f.email} ph="Awaiting Email" />
            <Line
              k="message"
              value={f.message.slice(0, 90)}
              ph="Awaiting Message"
            />
            <p className="mono mt-3 text-[12px]">
              <span className="text-[var(--text-dim)]">status: </span>
              <span
                className={
                  status === 'sent'
                    ? 'text-[var(--green)]'
                    : valid
                    ? 'text-[var(--accent)]'
                    : 'text-white/35'
                }
              >
                {status === 'sent'
                  ? 'delivered'
                  : valid
                  ? 'ready to send'
                  : 'waiting for input'}
              </span>
              <span className="caret" />
            </p>
          </div>

          <form
            onSubmit={submit}
            className="contact-card glass space-y-4 p-6 rounded-2xl"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                className="field"
                placeholder="First name"
                value={f.first}
                onChange={set('first')}
                required
              />
              <input
                className="field"
                placeholder="Last name"
                value={f.last}
                onChange={set('last')}
              />
            </div>
            <input
              className="field"
              type="email"
              placeholder="Email address"
              value={f.email}
              onChange={set('email')}
              required
            />
            <textarea
              className="field min-h-[130px] resize-none"
              placeholder="Your message"
              value={f.message}
              onChange={set('message')}
              required
            />
            <label className="flex items-start gap-3 text-xs text-[var(--text-dim)] cursor-pointer">
              <input
                type="checkbox"
                checked={f.consent}
                onChange={(e) => setF({ ...f, consent: e.target.checked })}
                className="mt-0.5 accent-[var(--accent)] cursor-pointer"
              />
              I give permission to contact me at this email address.
            </label>
            <button
              type="submit"
              disabled={!valid || status === 'sending' || status === 'sent'}
              onPointerMove={pull}
              onPointerLeave={release}
              className="btn-primary shine w-full disabled:opacity-60 cursor-pointer text-center"
            >
              {status === 'sending'
                ? 'Sending…'
                : status === 'sent'
                ? 'Sent ✓'
                : status === 'error'
                ? 'Failed, try again'
                : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <footer className="relative mx-auto mt-24 grid max-w-6xl gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
        <div className="mono text-[11px] leading-6">
          <p className="text-[var(--text-dim)]">{'// Specialization'}</p>
          <p className="text-white">Java Full Stack Development</p>
          <p className="text-white">Relational DB &amp; Applied ML Systems</p>
        </div>
        <div className="mono text-center text-[11px] leading-6">
          <p className="text-[var(--text-dim)]">{'// Current Status'}</p>
          <p className="text-[var(--green)]">Open to Entry-Level Java Developer Roles</p>
          <a
            href="#projects"
            className="underline text-[var(--text-dim)] hover:text-white"
          >
            View Projects (19 Repos)
          </a>
        </div>
        <div className="mono text-[11px] leading-6 md:text-right">
          <p className="text-[var(--text-dim)]">{'// Location'}</p>
          <p className="text-white">Ongole, Andhra Pradesh, India</p>
          <p className="text-[var(--text-dim)]">
            2026 · Dark Glassmorphism Portfolio
          </p>
        </div>
      </footer>
    </section>
  )
}
