'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSplitReveal } from '@/lib/useReveal'

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    big: '17+',
    count: 17,
    title: 'Live Deployments',
    text: 'Active production web applications & live GitHub Pages demos.',
  },
  {
    big: '19',
    count: 19,
    title: 'Public Repositories',
    text: 'Engineered across Java Full Stack, Machine Learning, and Web stacks.',
  },
  {
    big: '7.78',
    title: 'B.Tech CGPA Honors',
    text: 'Computer Science & Engineering (Data Science) academic distinction.',
  },
  {
    big: '01',
    title: 'Industry Internship',
    text: 'Java Full Stack training & enterprise app delivery at TAP Academy.',
  },
]

export default function Achievements() {
  const ref = useRef<HTMLElement>(null)
  useSplitReveal(ref)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ach-card', {
        y: 50,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: { trigger: '.ach-grid', start: 'top 82%' },
      })
      const o1 = { v: 0 }
      gsap.to(o1, {
        v: 17,
        duration: 1.6,
        ease: 'power3.out',
        onUpdate: () => {
          const el = document.querySelector('.ach-count-0')
          if (el) el.textContent = Math.round(o1.v) + '+'
        },
        scrollTrigger: { trigger: '.ach-grid', start: 'top 80%' },
      })
      const o2 = { v: 0 }
      gsap.to(o2, {
        v: 19,
        duration: 1.6,
        ease: 'power3.out',
        onUpdate: () => {
          const el = document.querySelector('.ach-count-1')
          if (el) el.textContent = String(Math.round(o2.v))
        },
        scrollTrigger: { trigger: '.ach-grid', start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="achievements" ref={ref} className="relative px-6 py-32">
      <div id="certifications" className="absolute top-0 left-0 h-px w-px" />
      <div className="mx-auto max-w-6xl">
        <p data-eyebrow className="eyebrow glass pill inline-block px-4 py-1.5">
          {'// 06 MILESTONES & IMPACT'}
        </p>
        <h2
          data-split
          className="h-display mt-6 text-[clamp(30px,5vw,52px)] text-white"
        >
          Key Milestones
        </h2>
        <div className="ach-grid mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((a, i) => (
            <div
              key={a.title}
              className="ach-card glass p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <b
                className={`${
                  i === 0 ? 'ach-count-0 ' : i === 1 ? 'ach-count-1 ' : ''
                }h-display text-4xl text-[var(--accent)]`}
              >
                {i === 0 ? '0+' : i === 1 ? '0' : a.big}
              </b>
              <h3 className="h-display mt-6 text-lg text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-dim)]">
                {a.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
