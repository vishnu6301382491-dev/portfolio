'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSplitReveal } from '@/lib/useReveal'

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    big: '11+',
    count: 11,
    title: 'Verified Deployments',
    text: 'GitHub Pages live links you can open and try.',
  },
  {
    big: '01',
    title: 'Industry Internships',
    text: 'Web Development, REST APIs and Data Analysis.',
  },
  {
    big: '02',
    title: 'Academic Excellence',
    text: 'Top percentile in Computer Science and Data Science coursework.',
  },
  {
    big: '03',
    title: 'Technical Leadership',
    text: 'Agile team collaboration on shipped projects.',
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
      const o = { v: 0 }
      gsap.to(o, {
        v: 11,
        duration: 1.6,
        ease: 'power3.out',
        onUpdate: () => {
          const el = document.querySelector('.ach-count')
          if (el) el.textContent = Math.round(o.v) + '+'
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
        <p data-eyebrow className="eyebrow">
          {'// 05 MILESTONES'}
        </p>
        <h2
          data-split
          className="h-display mt-4 text-[clamp(30px,5vw,52px)] text-white"
        >
          Key Achievements
        </h2>
        <div className="ach-grid mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((a, i) => (
            <div
              key={a.title}
              className="ach-card glass p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <b
                className={`${
                  i === 0 ? 'ach-count ' : ''
                }h-display text-4xl text-[var(--accent)]`}
              >
                {i === 0 ? '0+' : a.big}
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
