'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSplitReveal } from '@/lib/useReveal'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'Java Full Stack Intern',
    company: 'TAP Academy',
    period: 'May 2026 – Present',
    location: 'Bengaluru / Remote, India',
    badge: 'Current Role',
    active: true,
    summary:
      'Immersive enterprise software engineering training and full-stack development practice specializing in modern Java web architectures and distributed data services.',
    points: [
      'Learning Java full-stack web development through guided training and rigorous coding practice.',
      'Building web application projects to practice Core Java, Servlets, JSP, HTML5, CSS3, and JavaScript.',
      'Architected and shipped FoodWala — an enterprise food ordering web platform featuring 100+ Bengaluru restaurants, 750+ menu items, Razorpay test payment integration, and multi-role authentication (Customer, Manager, Delivery, Admin).',
      'Engineered relational database schemas in MySQL with optimized SQL queries, transaction integrity, and secure CRUD operations.',
      'Collaborating using Git and GitHub workflows, version control discipline, and responsive frontend design principles.'
    ],
    skills: [
      'Java',
      'Java Servlets',
      'JSP',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript',
      'REST APIs',
      'Git & GitHub'
    ],
    highlightProject: {
      name: 'FoodWala — Food Ordering Platform',
      live: 'https://vishnu6301382491-dev.github.io/Foodwala',
      code: 'https://github.com/vishnu6301382491-dev/Foodwala'
    }
  }
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)
  useSplitReveal(ref)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-card', {
        y: 60,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.exp-list', start: 'top 82%' }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={ref} className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p data-eyebrow className="eyebrow glass pill inline-block px-4 py-1.5">
          {'// 04 WORK EXPERIENCE'}
        </p>
        <h2
          data-split
          className="h-display mt-6 text-[clamp(32px,5vw,56px)] text-white"
        >
          Professional Experience
        </h2>
        <p
          data-fade
          className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-dim)]"
        >
          Hands-on industry training and engineering roles building real-world enterprise applications with Java, modern web stacks, and database architectures.
        </p>

        <div className="exp-list mt-16 space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company + exp.role}
              className="exp-card glass relative overflow-hidden p-8 transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Ambient corner glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--accent)]/10 blur-3xl" />

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="h-display text-2xl text-white">{exp.role}</h3>
                    {exp.active && (
                      <span className="mono glass pill inline-flex items-center gap-2 border border-emerald-500/30 px-3 py-1 text-[11px] text-emerald-300">
                        <i className="dot" /> {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-base font-medium text-[var(--accent)]">
                    {exp.company} <span className="text-[var(--text-dim)] font-normal">· {exp.location}</span>
                  </p>
                </div>
                <div className="mono text-xs tracking-wider text-[var(--text-dim)] sm:text-right">
                  <span className="glass pill inline-block px-3.5 py-1.5">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[var(--text)]">
                {exp.summary}
              </p>

              <div className="mt-6 space-y-2.5">
                {exp.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[var(--text-dim)]">
                    <span className="mono mt-1 text-xs text-[var(--accent)]">▹</span>
                    <span className="leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>

              {exp.highlightProject && (
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="flex items-center gap-2">
                    <span className="mono text-xs uppercase tracking-wider text-[var(--text-dim)]">
                      Featured Project:
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {exp.highlightProject.name}
                    </span>
                  </div>
                  <div className="mono flex gap-4 text-xs tracking-wider">
                    <a
                      href={exp.highlightProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link text-[var(--accent)]"
                    >
                      LIVE DEMO ↗
                    </a>
                    <a
                      href={exp.highlightProject.code}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link text-white"
                    >
                      SOURCE CODE ↗
                    </a>
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="mono rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-[var(--text-dim)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
