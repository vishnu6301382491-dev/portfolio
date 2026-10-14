'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSplitReveal } from '@/lib/useReveal'

gsap.registerPlugin(ScrollTrigger)

const rowA = [
  'Next.js',
  'React',
  'TypeScript',
  'Java',
  'Python',
  'TensorFlow',
  'Node.js',
  'MongoDB',
  'MySQL',
]
const rowB = [
  'Flask',
  'REST APIs',
  'RBAC Security',
  'Tailwind CSS',
  'Glassmorphism',
  'Transfer Learning',
  'Data Analytics',
  'Git and GitHub',
]

const matrix = [
  { name: 'Java', level: 'Advanced', pct: 90, note: 'OOP, Collections, Backend Services' },
  { name: 'Python', level: 'Proficient', pct: 88, note: 'TensorFlow, Flask, Data Science' },
  { name: 'JS and TypeScript', level: 'Proficient', pct: 85, note: 'ES6+, Next.js, React' },
  { name: 'HTML5 and Modern CSS3', level: 'Mastery', pct: 95, note: 'Tailwind CSS, Glassmorphism, Flexbox/Grid' },
  { name: 'MySQL', level: 'Advanced', pct: 85, note: 'Relational Schemas, Complex Queries, Joins' },
  { name: 'MongoDB', level: 'Proficient', pct: 82, note: 'Mongoose, NoSQL, Aggregation' },
  { name: 'Next.js and React', level: 'Advanced', pct: 88, note: 'API Routes, Vite, State Management' },
  { name: 'Git, RBAC and AI', level: 'Proficient', pct: 88, note: 'GitHub, RBAC Security, Transfer Learning' },
]

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const list = [...items, ...items]
  return (
    <div className="marquee-mask">
      <div className={`marquee-track ${reverse ? 'rev' : ''}`}>
        {list.map((s, i) => (
          <span key={i} className="chip glass pill mono">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  useSplitReveal(ref)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-card', {
        y: 50,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: { trigger: '.skill-grid', start: 'top 82%' },
      })
      gsap.utils.toArray<HTMLElement>('.skill-card').forEach((card) => {
        const o = { v: 0 }
        const num = card.querySelector('.pct-num')
        gsap
          .timeline({ scrollTrigger: { trigger: card, start: 'top 88%' } })
          .to(
            card.querySelector('.bar-fill'),
            { scaleX: 1, duration: 1.4, ease: 'power3.out' },
            0.15
          )
          .to(
            o,
            {
              v: Number(card.dataset.pct),
              duration: 1.4,
              ease: 'power3.out',
              onUpdate: () => {
                if (num) num.textContent = Math.round(o.v) + '%'
              },
            },
            0.15
          )
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={ref} className="relative py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p data-eyebrow className="eyebrow glass pill inline-block px-4 py-1.5">
          {'// 02 COMPETENCIES'}
        </p>
        <h2
          data-split
          className="h-display mt-6 text-[clamp(32px,5vw,56px)] text-white"
        >
          Technical Skills Matrix
        </h2>
        <p
          data-fade
          className="mx-auto mt-4 max-w-xl text-sm text-[var(--text-dim)]"
        >
          Full-stack web, backend services and applied machine learning, shipped
          end to end.
        </p>
      </div>

      <div className="mt-14 space-y-4">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>

      <div className="skill-grid mx-auto mt-16 grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {matrix.map((s) => (
          <div key={s.name} data-pct={s.pct} className="skill-card glass p-5">
            <div className="flex items-baseline justify-between">
              <h3 className="h-display text-lg text-white">{s.name}</h3>
              <span className="pct-num mono text-xs text-[var(--accent)]">
                0%
              </span>
            </div>
            <p className="eyebrow mt-1">{s.level}</p>
            <div className="bar mt-4">
              <div
                className="bar-fill"
                style={{
                  width: `${s.pct}%`,
                }}
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[var(--text-dim)]">
              {s.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
