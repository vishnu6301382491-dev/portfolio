'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSplitReveal } from '@/lib/useReveal'

gsap.registerPlugin(ScrollTrigger)

const roots = [
  {
    n: '01',
    title: 'Java Full Stack Engineering',
    text: 'Core Java, Servlets, JSP, REST microservices, and responsive client architectures with multi-role RBAC.',
  },
  {
    n: '02',
    title: 'Relational Database Architecture',
    text: 'MySQL schema design, relational normalization, ACID transaction integrity, and performant SQL queries.',
  },
  {
    n: '03',
    title: 'Data Science & Applied ML',
    text: 'GA-KELM air quality prediction, computer vision classification, and interactive data telemetry dashboards.',
  },
  {
    n: '04',
    title: 'Modern Frontend & CI/CD',
    text: 'Next.js, React, Tailwind CSS, 19 public GitHub repositories, and 17+ live deployments shipped globally.',
  },
]

export default function Overview() {
  const ref = useRef<HTMLElement>(null)
  useSplitReveal(ref)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = { trigger: '.root-grid', start: 'top 80%' }
      gsap.from('.beam-wrap', {
        opacity: 0,
        duration: 1.4,
        ease: 'power2.out',
        stagger: 0.25,
        scrollTrigger: trigger,
      })
      gsap.from('.root-card', {
        y: 60,
        opacity: 0,
        scale: 0.96,
        filter: 'blur(12px)',
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: trigger,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const canHover = () => (typeof window !== 'undefined' ? matchMedia('(hover: hover)').matches : false)
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canHover()) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    gsap.to(el, {
      rotateY: x * 16,
      rotateX: -y * 16,
      y: -8,
      transformPerspective: 900,
      duration: 0.4,
      ease: 'power2.out',
    })
  }
  const onLeave = (e: React.PointerEvent<HTMLDivElement>) =>
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
    })

  return (
    <section id="expertise" ref={ref} className="relative px-6 py-32">
      <div id="overview" className="absolute top-0 left-0 h-px w-px" />
      <div className="mx-auto max-w-6xl text-center">
        <p data-eyebrow className="eyebrow glass pill inline-block px-4 py-1.5">
          {'// 01 OVERVIEW'}
        </p>
        <h2
          data-split
          className="h-display mt-6 text-[clamp(32px,5vw,56px)] text-white"
        >
          Architecting Digital Solutions
        </h2>
      </div>
      <div className="root-grid mx-auto mt-24 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {roots.map((r) => (
          <div
            key={r.n}
            className="root-card glass relative p-6 cursor-pointer"
            onPointerMove={onMove}
            onPointerLeave={onLeave}
          >
            <div className="beam-wrap">
              <div className="beam" />
            </div>
            <div className="flex items-center justify-between">
              <span className="mono text-[11px] tracking-widest text-[var(--text-dim)]">{`// ROOT ${r.n}`}</span>
              <i className="root-dot" />
            </div>
            <h3 className="h-display mt-10 text-2xl text-white">{r.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-dim)]">
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
