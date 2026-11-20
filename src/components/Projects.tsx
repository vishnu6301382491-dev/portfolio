'use client'

import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, categories, GITHUB, type Project } from '@/lib/projects'
import { asset } from '@/lib/asset'

interface ProjectCardProps {
  project: Project
  index: number
  isFeatured?: boolean
  columnCount: number
}

function ProjectCard({ project, index, isFeatured, columnCount }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // 3D Tilt & Cursor Spotlight tracking
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    el.style.setProperty('--mx', `${mx}px`)
    el.style.setProperty('--my', `${my}px`)

    // Only apply 3D tilt if pointer is fine (desktop mouse)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const rotX = ((my / rect.height) - 0.5) * -10 // up to +-5 deg
      const rotY = ((mx / rect.width) - 0.5) * 10   // up to +-5 deg
      el.style.setProperty('--rot-x', `${rotX.toFixed(2)}deg`)
      el.style.setProperty('--rot-y', `${rotY.toFixed(2)}deg`)
    }
  }

  const handlePointerLeave = () => {
    setIsHovered(false)
    const el = cardRef.current
    if (!el) return
    el.style.setProperty('--rot-x', '0deg')
    el.style.setProperty('--rot-y', '0deg')
    el.style.setProperty('--mx', '-999px')
    el.style.setProperty('--my', '-999px')
  }

  const handlePointerEnter = () => {
    setIsHovered(true)
  }

  // Row-based stagger delay: 60ms * index within the visible row
  const staggerDelay = (index % Math.max(1, columnCount)) * 0.06

  const visibleTags = project.tags.slice(0, 5)
  const remainingTags = project.tags.length - 5

  return (
    <div
      ref={cardRef}
      className={`proj-card relative rounded-[20px] transition-all duration-300 isolate group min-w-0 ${
        isHovered ? 'z-20' : 'z-10'
      }`}
      style={{
        transform: isHovered
          ? 'perspective(1000px) rotateX(var(--rot-x, 0deg)) rotateY(var(--rot-y, 0deg)) translateY(-8px)'
          : 'perspective(1000px) rotateX(var(--rot-x, 0deg)) rotateY(var(--rot-y, 0deg)) translateY(0px)',
        viewTransitionName: `proj-card-${project.id}`,
        animationDelay: `${staggerDelay}s`,
      }}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* Featured Conic Rotating Border */}
      {isFeatured && <div className="conic-featured-border" aria-hidden="true" />}

      {/* Card Inner Container */}
      <div
        className={`relative flex flex-col h-full rounded-[20px] overflow-hidden transition-all duration-300 border ${
          isFeatured
            ? 'bg-[#0b0c13] border-amber-500/20 shadow-[0_4px_24px_rgba(245,158,11,0.07)]'
            : 'bg-[#0d0e17]/90 backdrop-blur-xl border-white/10 hover:border-[#ff2d3d]/50 hover:shadow-[0_12px_32px_-8px_rgba(255,45,61,0.25)]'
        }`}
      >
        {/* Radial Spotlight Overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
          style={{
            background:
              'radial-gradient(420px circle at var(--mx, -500px) var(--my, -500px), rgba(255, 45, 61, 0.14), transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Thumbnail Header (aspect-ratio: 16/10) */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#12131d] border-b border-white/10">
          {project.image ? (
            <>
              {/* Skeleton Shimmer while loading */}
              {!imgLoaded && (
                <div
                  className="absolute inset-0 skeleton-shimmer z-0"
                  aria-hidden="true"
                />
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(project.image)}
                alt={project.title}
                loading="lazy"
                width={640}
                height={400}
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover object-center transition-all duration-500 ${
                  imgLoaded
                    ? 'opacity-100 filter-none'
                    : 'opacity-0 blur-md'
                } group-hover:scale-[1.06] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]`}
              />
            </>
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none"
              style={{
                background:
                  'linear-gradient(135deg, #141624 0%, #1e1328 50%, #0d0f1a 100%)',
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-2.5 shadow-inner">
                <span className="font-['JetBrains_Mono'] text-base font-bold text-[#ff2d3d]">
                  {project.title.charAt(0)}
                </span>
              </div>
              <span className="font-['Inter_Tight'] text-sm font-bold text-white/90 line-clamp-1">
                {project.title}
              </span>
              <span className="mt-1 font-['JetBrains_Mono'] text-[10px] text-white/50 tracking-wider uppercase">
                {project.category}
              </span>
            </div>
          )}

          {/* Badges Overlay */}
          <div className="absolute top-3 right-3 flex items-center gap-2 z-10 pointer-events-none">
            {isFeatured && (
              <span className="font-['JetBrains_Mono'] glass pill flex items-center gap-1.5 border border-amber-400/50 bg-black/85 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-amber-300 backdrop-blur-md shadow-[0_0_12px_rgba(251,191,36,0.25)]">
                ✦ FEATURED
              </span>
            )}
            <span className="font-['JetBrains_Mono'] glass pill px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/80 bg-black/75 border border-white/15 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Project Index */}
          <span className="font-['JetBrains_Mono'] absolute bottom-3 left-3 px-2 py-0.5 rounded bg-black/80 text-[10px] font-medium text-white/75 backdrop-blur-sm border border-white/10 z-10 pointer-events-none">
            #{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Card Body (flex: 1, gap: 12px, padding: 22px) */}
        <div className="flex-1 flex flex-col justify-between p-[22px] gap-3">
          <div className="flex flex-col gap-2.5">
            {/* Title (line-clamp: 2) */}
            <h3
              className="font-['Inter_Tight'] text-lg font-bold text-white group-hover:text-[#ff2d3d] transition-colors duration-200 leading-snug line-clamp-2"
              title={project.title}
            >
              {project.title}
            </h3>

            {/* Description (line-clamp: 3) */}
            <p
              className="text-xs sm:text-[13px] text-[var(--text-dim,#9c96b0)] leading-relaxed line-clamp-3"
              title={project.blurb}
            >
              {project.blurb}
            </p>

            {/* Tags (display: flex; flex-wrap: wrap; gap: 8px; max 5 +N) */}
            <div className="mt-2 flex flex-wrap gap-2 items-center">
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="font-['JetBrains_Mono'] text-[10px] rounded-full border border-white/10 px-2.5 py-0.5 text-[var(--text-dim,#9c96b0)] bg-white/[0.03] hover:border-white/20 hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
              {remainingTags > 0 && (
                <span
                  className="font-['JetBrains_Mono'] text-[10px] rounded-full border border-white/10 px-2 py-0.5 text-white/50 bg-white/[0.02]"
                  title={`+${remainingTags} more tags`}
                >
                  +{remainingTags}
                </span>
              )}
            </div>
          </div>

          {/* Footer (margin-top: auto; border-top; padding-top: 16px) */}
          <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs font-['JetBrains_Mono'] tracking-wider">
            {/* CODE Button on the left */}
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="text-white/75 hover:text-white flex items-center gap-1.5 transition-colors py-1 group/btn"
            >
              <span>CODE</span>
              <span className="text-[#ff2d3d] group-hover/btn:translate-x-0.5 transition-transform duration-200">
                →
              </span>
            </a>

            {/* LIVE DEMO Button on the right */}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-[#ff2d3d] hover:brightness-125 font-semibold flex items-center gap-1.5 transition-all py-1 group/live"
              >
                <span>LIVE DEMO</span>
                <span className="group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform duration-200">
                  ↗
                </span>
              </a>
            ) : (
              <span className="text-white/35 text-[11px] py-1 font-medium">
                REPO ONLY
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [cat, setCat] = useState('All')
  const [columnCount, setColumnCount] = useState(3)
  const [headerVisible, setHeaderVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)

  // Compute column count for row stagger
  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth
      if (w >= 1100) setColumnCount(3)
      else if (w >= 700) setColumnCount(2)
      else setColumnCount(1)
    }
    updateCols()
    window.addEventListener('resize', updateCols, { passive: true })
    return () => window.removeEventListener('resize', updateCols)
  }, [])

  // Header & Section Scroll Reveal via IntersectionObserver
  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return

    // Failsafe: reveal everything after 2.5s regardless of scroll
    const failsafeTimer = setTimeout(() => {
      setHeaderVisible(true)
      setCardsVisible(true)
    }, 2500)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true)
            setCardsVisible(true)
            observer.disconnect()
            clearTimeout(failsafeTimer)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    observer.observe(sec)
    return () => {
      observer.disconnect()
      clearTimeout(failsafeTimer)
    }
  }, [])

  // Filter list with single primary category
  const filteredList = useMemo(() => {
    if (cat === 'All') return projects
    return projects.filter((p) => p.category === cat)
  }, [cat])

  // FLIP / View Transitions API on filter change
  const handleFilterClick = useCallback(
    (newCat: string) => {
      if (newCat === cat) return

      if (typeof document !== 'undefined' && 'startViewTransition' in document) {
        ;(document as any).startViewTransition(() => {
          setCat(newCat)
        })
      } else {
        setCat(newCat)
      }
    },
    [cat]
  )

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 w-full"
      style={{ scrollMarginTop: '120px' }}
    >
      {/* Section Header */}
      <div
        ref={headerRef}
        className="text-center max-w-4xl mx-auto px-6 mb-10"
      >
        {/* Eyebrow */}
        <p
          className={`eyebrow glass pill inline-block px-4 py-1.5 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {"// 03 THINGS I'VE BUILT · 19 VERIFIED REPOSITORIES"}
        </p>

        {/* Title with Mask Reveal */}
        <div className="overflow-hidden mt-4">
          <h2
            className={`h-display text-[clamp(28px,4.6vw,52px)] text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              headerVisible ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            GitHub Project Showcase
          </h2>
        </div>

        {/* Drawing Red Line */}
        <div className="w-24 h-[2px] mx-auto mt-4 overflow-hidden rounded-full bg-white/10">
          <div
            ref={lineRef}
            className={`h-full bg-[#ff2d3d] origin-left transition-transform duration-800 delay-200 ease-out ${
              headerVisible ? 'scale-x-100' : 'scale-x-0'
            }`}
          />
        </div>

        <p
          className={`mt-4 text-sm text-[var(--text-dim,#9c96b0)] max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Explore all 19 public repositories spanning Enterprise Java full-stack platforms,
          machine learning air quality forecasting, agricultural intelligence, and web applications.
        </p>

        {/* Filter Chips Row */}
        <div
          className={`mt-8 flex flex-wrap justify-center gap-2.5 transition-all duration-700 delay-400 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {categories.map((c) => {
            const count =
              c === 'All'
                ? projects.length
                : projects.filter((p) => p.category === c).length
            const isActive = cat === c

            return (
              <button
                key={c}
                onClick={() => handleFilterClick(c)}
                className={`relative font-['JetBrains_Mono'] text-xs px-4 py-2 rounded-full border transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'border-[#ff2d3d] text-white shadow-[0_0_16px_rgba(255,45,61,0.3)]'
                    : 'border-white/10 bg-white/[0.03] text-[var(--text-dim,#9c96b0)] hover:text-white hover:border-white/25 hover:bg-white/[0.06]'
                }`}
              >
                {/* Framer Motion Sliding Active Pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-full bg-[#ff2d3d]/15 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="font-medium relative z-10">{c}</span>
                <span
                  className={`text-[10px] relative z-10 px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-[#ff2d3d]/30 text-white font-bold'
                      : 'bg-white/10 text-white/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid of Project Cards */}
      <div
        className={`projects-grid transition-opacity duration-500 ${
          cardsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {filteredList.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            isFeatured={project.featured}
            columnCount={columnCount}
          />
        ))}
      </div>

      {/* Bottom Profile Links */}
      <div className="mt-16 flex flex-wrap justify-center gap-4 text-center px-6">
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="font-['JetBrains_Mono'] text-xs font-semibold px-6 py-3 rounded-xl bg-[#ff2d3d] text-white hover:brightness-110 shadow-[0_0_24px_rgba(255,45,61,0.35)] transition-all flex items-center gap-2"
        >
          <span>Visit GitHub Profile</span>
          <span>↗</span>
        </a>
        <a
          href={`${GITHUB}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="font-['JetBrains_Mono'] text-xs px-6 py-3 rounded-xl border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/25 transition-all flex items-center gap-2"
        >
          <span>View All 19 Repositories on GitHub</span>
          <span>↗</span>
        </a>
      </div>
    </section>
  )
}