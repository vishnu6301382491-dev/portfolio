'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSplitReveal } from '@/lib/useReveal'

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    years: '2022 - 2026',
    title: 'B.Tech in Computer Science and Data Science',
    place: 'Rise Krishna Sai Prakasam Group of Institutions, Ongole',
    note: 'Data Structures and Algorithms, Full Stack Web Development, DBMS, Machine Learning, Data Analytics',
  },
  {
    years: '2020 - 2022',
    title: 'Intermediate (MPC)',
    place: 'Sri Gowthami Junior College, Andhra Pradesh',
    note: 'Mathematics, Physics, Chemistry (90.4% aggregate)',
  },
  {
    years: '2019 - 2020',
    title: 'Secondary School Certificate (SSC)',
    place: 'ZP High School, Andhra Pradesh',
    note: '',
  },
]

export default function Education() {
  const ref = useRef<HTMLElement>(null)
  useSplitReveal(ref)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // the line draws itself as you scroll through the timeline
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
        <p data-eyebrow className="eyebrow">
          {'// 04 EDUCATION'}
        </p>
        <h2
          data-split
          className="h-display mt-4 text-[clamp(30px,5vw,52px)] text-white"
        >
          Academic Foundation
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
              <div className="glass p-6">
                <span className="mono text-[11px] tracking-widest text-[var(--text-dim)]">
                  {it.years}
                </span>
                <h3 className="h-display mt-3 text-xl text-white">{it.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-dim)]">{it.place}</p>
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
