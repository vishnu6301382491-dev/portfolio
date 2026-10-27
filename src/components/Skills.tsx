'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSplitReveal } from '@/lib/useReveal'

gsap.registerPlugin(ScrollTrigger)

const rowA = [
  'Java',
  'Java Servlets',
  'JSP',
  'MySQL',
  'Next.js',
  'React',
  'Python',
  'JavaScript',
  'HTML5 & CSS3',
]
const rowB = [
  'Git & GitHub',
  'REST APIs',
  'Razorpay API',
  'RBAC Security',
  'Machine Learning',
  'Tailwind CSS',
  'Data Structures & Algorithms',
  'MS Excel',
]

const softSkills = [
  'Communication',
  'Teamwork',
  'Problem-Solving',
  'Adaptability',
  'Analytical Thinking',
  'Agile Collaboration'
]

const resumeSkillGroups = [
  {
    category: 'Programming Languages',
    icon: '☕',
    skills: ['Java (Core, OOP)', 'Python', 'JavaScript (ES6+)'],
    badge: 'Core Foundation'
  },
  {
    category: 'Web Development',
    icon: '🌐',
    skills: ['Java Servlets', 'JSP', 'HTML5', 'CSS3', 'Next.js', 'React'],
    badge: 'Full Stack'
  },
  {
    category: 'Database Management',
    icon: '🗄️',
    skills: ['MySQL (ACID, Schema Design, Relational Queries)'],
    badge: 'Relational DB'
  },
  {
    category: 'Developer Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'MS Excel'],
    badge: 'Productivity'
  },
  {
    category: 'Soft Skills',
    icon: '🤝',
    skills: ['Communication', 'Teamwork', 'Problem-Solving', 'Adaptability'],
    badge: 'Professional'
  }
]

const matrix = [
  { name: 'Java Full Stack', level: 'Mastery', pct: 92, note: 'Core Java, Servlets, JSP, OOP & Enterprise Web Architecture' },
  { name: 'MySQL Database', level: 'Advanced', pct: 88, note: 'Relational Schema Design, Complex Queries, Joins & ACID Transactions' },
  { name: 'Python & Data Science', level: 'Proficient', pct: 86, note: 'Machine Learning, GA-KELM, Predictive Analytics & Scientific Computing' },
  { name: 'Next.js & React', level: 'Advanced', pct: 88, note: 'Modern React, Component Architecture, Hooks & State Management' },
  { name: 'JavaScript & Web Dev', level: 'Advanced', pct: 90, note: 'ES6+, DOM Manipulation, Asynchronous Programming & AJAX' },
  { name: 'HTML5 & Modern CSS3', level: 'Mastery', pct: 95, note: 'Tailwind CSS, Dark Glassmorphism, Responsive UI & CSS Grid' },
  { name: 'Git & GitHub Tools', level: 'Advanced', pct: 90, note: 'Version Control, Branching Workflows, GitHub Pages & CI/CD' },
  { name: 'REST APIs & RBAC', level: 'Proficient', pct: 88, note: 'API Architecture, Multi-Role Security, Razorpay Integration & Auth' },
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
          {'// 02 COMPETENCIES & TECH STACK'}
        </p>
        <h2
          data-split
          className="h-display mt-6 text-[clamp(32px,5vw,56px)] text-white"
        >
          Technical Skills Matrix
        </h2>
        <p
          data-fade
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-dim)]"
        >
          Java Full Stack development, relational database engineering, applied machine learning, and modern web architectures.
        </p>
      </div>

      <div className="mt-14 space-y-4">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>

      <div className="skill-grid mx-auto mt-16 grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {matrix.map((s) => (
          <div key={s.name} data-pct={s.pct} className="skill-card glass p-5 transition-transform duration-500 hover:-translate-y-1">
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

      {/* Resume Skills Taxonomy Grid */}
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="text-center mb-8">
          <p className="eyebrow">{'// RESUME SKILLS CLASSIFICATION'}</p>
          <h3 className="h-display mt-2 text-2xl text-white">Categorized Technical Profile</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resumeSkillGroups.map((g) => (
            <div
              key={g.category}
              className="glass p-5 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{g.icon}</span>
                  <h4 className="h-display text-base text-white">{g.category}</h4>
                </div>
                <span className="mono glass pill border border-white/10 px-2 py-0.5 text-[10px] text-[var(--accent)]">
                  {g.badge}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="mono rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft skills row */}
      <div className="mx-auto mt-12 max-w-4xl px-6">
        <div className="glass p-6 text-center">
          <p className="eyebrow">{'// PROFESSIONAL & SOFT SKILLS'}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
            {softSkills.map((sk) => (
              <span
                key={sk}
                className="mono rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-white"
              >
                ✦ {sk}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
