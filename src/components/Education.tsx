'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSplitReveal } from '@/lib/useReveal'

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    years: 'Graduated Apr 2026',
    title: 'B.Tech in Computer Science & Engineering (Data Science)',
    place: 'Rise Krishna Sai Prakasam Group of Institutions, Ongole, Andhra Pradesh',
    badge: 'CGPA: 7.78',
    note: 'Core coursework in Java Full Stack Development, Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems (MySQL), Applied Machine Learning, and Big Data Analytics.',
  },
  {
    years: 'Graduated Apr 2022',
    title: 'Intermediate (MPC)',
    place: 'Sri Gowthami Junior College, Andhra Pradesh',
    badge: 'MPC Foundation',
    note: 'Mathematics, Physics, and Chemistry foundation focusing on analytical problem-solving, advanced algebra, calculus, and computational reasoning.',
  },
  {
    years: 'Graduated Apr 2020',
    title: 'Secondary School Certificate (SSC)',
    place: 'ZP High School, Andhra Pradesh',
    badge: 'Secondary Education',
    note: 'General secondary education covering mathematics, science, English, and fundamental computer applications with strong academic performance.',
  },
]

export default function Education() {
  const ref = useRef<HTMLElement>(null)
  useSplitReveal(ref)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tl-fill',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top',
          scrollTrigger: {
            trigger: '.tl',
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: 0.4,
          },
        }
      )
      gsap.utils.toArray<HTMLElement>('.tl-item').forEach((el, i) => {
        gsap.from(el, {
          x: i % 2 === 0 ? -60 : 60,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%' },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="education" ref={ref} className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p data-eyebrow className="eyebrow glass pill inline-block px-4 py-1.5">
          {'// 05 ACADEMIC FOUNDATION'}
        </p>
        <h2
          data-split
          className="h-display mt-6 text-[clamp(30px,5vw,52px)] text-white"
        >
          Education &amp; Qualifications
        </h2>
        <div className="tl relative mt-16 space-y-10">
          <div className="tl-line">
            <div className="tl-fill" />
          </div>
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`tl-item relative pl-10 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'
              }`}
            >
              <i className="tl-dot" />
              <div className="glass p-6 transition-transform duration-500 hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="mono text-[11px] tracking-widest text-[var(--text-dim)]">
                    {it.years}
                  </span>
                  {it.badge && (
                    <span className="mono glass pill border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-[var(--accent)]">
                      {it.badge}
                    </span>
                  )}
                </div>
                <h3 className="h-display mt-3 text-xl text-white">{it.title}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--text-dim)]">{it.place}</p>
                {it.note && (
                  <p className="mt-3 text-xs leading-relaxed text-[var(--text-dim)]">
                    {it.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
