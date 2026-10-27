'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSplitReveal } from '@/lib/useReveal'
import { projects, categories, GITHUB } from '@/lib/projects'
import { asset } from '@/lib/asset'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const wrap = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const [cat, setCat] = useState('All')
  useSplitReveal(wrap)

  const list = useMemo(
    () =>
      cat === 'All'
        ? projects
        : projects.filter((p) => p.categories.includes(cat)),
    [cat]
  )

  // rebuild the scroller whenever the filter changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.proj-card')
      const depth = () => {
        const mid = window.innerWidth / 2
        cards.forEach((c) => {
          const r = c.getBoundingClientRect()
          const off = r.left + r.width / 2 - mid
          const d = Math.min(Math.abs(off) / (window.innerWidth * 0.6), 1)
          gsap.set(c, {
            scale: 1 - d * 0.08,
            opacity: 1 - d * 0.5,
            filter: `blur(${(d * 3).toFixed(2)}px)`,
            rotateY: (off > 0 ? -1 : 1) * d * 8,
            transformPerspective: 1000,
          })
        })
      }

      gsap.to(track.current, {
        x: () => -Math.max(0, track.current!.scrollWidth - window.innerWidth),
        ease: 'none',
        onUpdate: depth,
        scrollTrigger: {
          trigger: wrap.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          invalidateOnRefresh: true,
          onRefresh: depth,
        },
      })
      depth()
      gsap.from('.proj-slot', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, wrap)

    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [list])

  useEffect(() => {
    gsap.from('.reflection', {
      opacity: 0,
      y: -20,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.reflection', start: 'top 95%' },
    })
  }, [])

  const glare = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section
      id="projects"
      ref={wrap}
      className="relative"
      style={{ height: `${Math.max(list.length, 2) * 70 + 100}vh` }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="px-6 text-center">
          <p
            data-eyebrow
            className="eyebrow glass pill inline-block px-4 py-1.5"
          >
            {'// 03 THINGS I\'VE BUILT'}
          </p>
          <h2
            data-split
            className="h-display mt-4 text-[clamp(28px,4.6vw,52px)] text-white"
          >
            GitHub Project Showcase
          </h2>
          <div
            aria-hidden
            className="reflection h-display text-[clamp(28px,4.6vw,52px)] text-white"
          >
            GitHub Project Showcase
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`filter mono ${cat === c ? 'on' : ''}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div ref={track} className="proj-track mt-6">
          {list.map((p) => (
            <div key={p.title} className="proj-slot">
              <article className="proj-card glass rounded-2xl" onPointerMove={glare}>
                {p.image ? (
                  <img
                    src={asset(p.image)}
                    alt={p.title}
                    className="w-full h-[150px] object-cover border-b border-white/10"
                  />
                ) : (
                  <div className="proj-thumb" />
                )}
                <div className="p-5">
                  <h3 className="h-display text-xl text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-dim)]">
                    {p.blurb}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="mono rounded-full border border-white/10 px-3 py-1 text-[11px] text-[var(--text-dim)] bg-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mono mt-4 flex gap-5 text-xs tracking-widest">
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link"
                    >
                      CODE →
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="nav-link"
                      >
                        LIVE →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3 px-6">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm"
          >
            Visit GitHub Profile
          </a>
          <a
            href={`${GITHUB}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost text-sm text-white"
          >
            View All 19 Repositories
          </a>
        </div>
      </div>
    </section>
  )
}
