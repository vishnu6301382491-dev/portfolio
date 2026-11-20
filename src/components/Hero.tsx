'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import { asset } from '@/lib/asset'

/* ─────────────────────────────────────────────────────────────────
   Project cases shown inside the laptop screen
───────────────────────────────────────────────────────────────── */
const CASES = [
  {
    id: 1,
    title: 'FOODWALA',
    stack: 'JAVA SERVLETS & JSP / FOOD ORDERING / 2026',
    teaser:
      'A Bengaluru food-ordering platform: 100+ restaurants, 750+ dishes, Razorpay payments and four role-based logins.',
    preview: '/foodwala_preview.png',
    live: 'https://vishnu6301382491-dev.github.io/Foodwala',
    code: 'https://github.com/vishnu6301382491-dev/Foodwala',
  },
  {
    id: 2,
    title: 'AQI DASHBOARD',
    stack: 'PYTHON · GA-KELM / DATA SCIENCE / 2026',
    teaser:
      'An air-quality forecaster pairing a genetic algorithm with a kernel extreme learning machine, shown on live charts.',
    preview: '/aqi_dashboard_preview.jpg',
    live: 'https://vishnu6301382491-dev.github.io/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm',
    code: 'https://github.com/vishnu6301382491-dev/Air-Quality-Indexing-Forecasting-Via-Genetic-Algorithm',
  },
  {
    id: 3,
    title: 'RENTALHUB',
    stack: 'NEXT.JS · MONGODB / MARKETPLACE / 2026',
    teaser:
      'A rental marketplace for properties and vehicles with live filters, bookings and an owner dashboard.',
    preview: '/rentalhub_preview.jpg',
    live: 'https://vishnu6301382491-dev.github.io/RentalHub.com/',
    code: 'https://github.com/vishnu6301382491-dev/RentalHub.com',
  },
  {
    id: 4,
    title: 'SPEAKAI',
    stack: 'REACT · NODE / AI COACH / 2026',
    teaser:
      'An AI speaking partner with real-time voice feedback, grammar fixes and pronunciation analytics.',
    preview: '/speakai_preview.jpg',
    live: 'https://vishnu6301382491-dev.github.io/AI-Speaking-Agent/',
    code: 'https://github.com/vishnu6301382491-dev/AI-Speaking-Agent',
  },
  {
    id: 5,
    title: 'PREPGENIUS',
    stack: 'REACT · NODE / INTERVIEW PREP / 2026',
    teaser:
      'An interview-prep engine with AI coding mocks, code review and a skill radar.',
    preview: '/prepgenius_preview.jpg',
    live: 'https://vishnu6301382491-dev.github.io/PREPGENIUS/',
    code: 'https://github.com/vishnu6301382491-dev/PREPGENIUS',
  },
]

export default function Hero() {
  /* ── DOM refs ── */
  const wrapRef = useRef<HTMLElement>(null)
  const revealWrapRef = useRef<HTMLDivElement>(null)
  const cutoutRef = useRef<HTMLDivElement>(null)
  const laptopRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)
  const liveAriaRef = useRef<HTMLDivElement>(null)

  /* ── Interactive State ── */
  const [activeCase, setActiveCase] = useState(0)
  const [inCaseMode, setInCaseMode] = useState(false)
  const [frameTransform, setFrameTransform] = useState({
    transform: 'translate(0px, 0px) scale(1)',
    scale: 1,
    x: 0,
    y: 0,
  })
  const frameTransformRef = useRef({ scale: 1, x: 0, y: 0 })

  const phase = useRef<'hero' | 'dive' | 'case'>('hero')
  const caseIdx = useRef(0)
  const locked = useRef(true)
  const videoBlob = useRef<string | null>(null)

  /* ─────────────────────────────────────────────────────────────
     Frame Transform: 1440x810 top-anchored:
     s = max(W/1440, H/810), x = (W - 1440*s)/2, y = 0
  ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    const updateFrame = () => {
      const W = window.innerWidth
      const H = window.innerHeight
      const s = Math.max(W / 1440, H / 810)
      const x = (W - 1440 * s) / 2
      const y = 0
      const tf = {
        transform: `translate(${x}px, ${y}px) scale(${s})`,
        scale: s,
        x,
        y,
      }
      setFrameTransform(tf)
      frameTransformRef.current = { scale: s, x, y }
    }
    updateFrame()
    window.addEventListener('resize', updateFrame)
    return () => window.removeEventListener('resize', updateFrame)
  }, [])

  /* ─────────────────────────────────────────────────────────────
     Spotlight & HUD rAF Loop (Reference Implementation)
  ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    const hero = wrapRef.current
    const reveal = document.getElementById('reveal')
    const ring = document.getElementById('hudRing')
    if (!hero || !reveal || !ring) return

    let isHeroVisible = true
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        isHeroVisible = entry.isIntersecting
        if (!isHeroVisible && ring) ring.style.opacity = '0'
      },
      { threshold: 0.05 }
    )
    heroObserver.observe(hero)

    const cv = document.createElement('canvas')
    const ctx = cv.getContext('2d')
    const R = 260
    let W = 0
    let H = 0
    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0
    let isTouch = false
    let lissajousT = 0
    let loopRaf = 0

    function size() {
      if (!hero) return
      const b = hero.getBoundingClientRect()
      W = cv.width = Math.round(b.width)
      H = cv.height = Math.round(b.height)
      if (cx === 0 && cy === 0) {
        tx = cx = W / 2
        ty = cy = H / 2
      }
    }
    size()
    window.addEventListener('resize', size)

    const onMouseMove = (e: MouseEvent) => {
      isTouch = false
      if (!hero || !ring) return
      const b = hero.getBoundingClientRect()
      if (
        e.clientX >= b.left &&
        e.clientX <= b.right &&
        e.clientY >= b.top &&
        e.clientY <= b.bottom
      ) {
        tx = e.clientX - b.left
        ty = e.clientY - b.top
        ring.style.opacity = '1'
      } else {
        ring.style.opacity = '0'
      }
    }

    const onMouseLeave = () => {
      tx = W / 2
      ty = H / 2
      if (ring) ring.style.opacity = '0'
    }

    const onTouchStart = (e: TouchEvent) => {
      isTouch = true
      if (e.touches && e.touches[0] && hero) {
        const b = hero.getBoundingClientRect()
        tx = e.touches[0].clientX - b.left
        ty = e.touches[0].clientY - b.top
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0] && hero) {
        const b = hero.getBoundingClientRect()
        tx = e.touches[0].clientX - b.left
        ty = e.touches[0].clientY - b.top
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('mouseleave', onMouseLeave)
    hero.addEventListener('touchstart', onTouchStart, { passive: true })
    hero.addEventListener('touchmove', onTouchMove, { passive: true })

    function loop() {
      loopRaf = requestAnimationFrame(loop)
      if (!isHeroVisible) return

      if (isTouch) {
        lissajousT += 0.012
        tx = W / 2 + (W * 0.28) * Math.sin(lissajousT * 0.7)
        ty = H / 2 + (H * 0.22) * Math.sin(lissajousT * 1.1)
      }

      cx += (tx - cx) * 0.1
      cy += (ty - cy) * 0.1

      if (W > 0 && H > 0 && ctx && phase.current === 'hero') {
        ctx.clearRect(0, 0, W, H)
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R)
        const stops: [number, number][] = [
          [0, 1],
          [0.4, 1],
          [0.6, 0.75],
          [0.75, 0.4],
          [0.88, 0.12],
          [1, 0],
        ]
        stops.forEach(([o, a]) => g.addColorStop(o, `rgba(0,0,0,${a})`))
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(cx, cy, R, 0, Math.PI * 2)
        ctx.fill()

        const url = `url(${cv.toDataURL()})`
        reveal.style.maskImage = url
        reveal.style.webkitMaskImage = url
        reveal.style.maskSize = '100% 100%'
        ;(reveal.style as any).webkitMaskSize = '100% 100%'
      }

      ring.style.transform = `translate(${cx - 24}px, ${cy - 24}px)`
    }

    loopRaf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(loopRaf)
      heroObserver.disconnect()
      window.removeEventListener('resize', size)
      window.removeEventListener('mousemove', onMouseMove)
      hero.removeEventListener('mousemove', onMouseMove)
      hero.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('mouseleave', onMouseLeave)
      hero.removeEventListener('touchstart', onTouchStart)
      hero.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  /* ─────────────────────────────────────────────────────────────
     Scroll Lock / Unlock Handlers
  ───────────────────────────────────────────────────────────── */
  const lockScroll = useCallback(() => {
    locked.current = true
    if (typeof document !== 'undefined') {
      document.body.classList.add('hero-locked')
    }
    const lenis = typeof window !== 'undefined' ? (window as any).__lenis : null
    if (lenis && typeof lenis.stop === 'function') lenis.stop()
  }, [])

  const unlockScroll = useCallback(() => {
    locked.current = false
    if (typeof document !== 'undefined') {
      document.body.classList.remove('hero-locked')
    }
    const lenis = typeof window !== 'undefined' ? (window as any).__lenis : null
    if (lenis && typeof lenis.start === 'function') lenis.start()
  }, [])

  /* ─────────────────────────────────────────────────────────────
     Case Slider Controls
  ───────────────────────────────────────────────────────────── */
  const goToCase = useCallback((idx: number) => {
    const slides = slidesRef.current
    if (!slides) return
    caseIdx.current = idx
    setActiveCase(idx)
    slides.style.transform = `translateX(${-idx * 100}%)`
    if (liveAriaRef.current) {
      const name = idx < CASES.length ? CASES[idx].title : 'See all 19 repositories'
      liveAriaRef.current.textContent = `Showing project case ${idx + 1}: ${name}`
    }
  }, [])

  const prevCase = useCallback(() => {
    if (caseIdx.current === 0) {
      phase.current = 'hero'
      setInCaseMode(false)
      const wrap = wrapRef.current
      const laptop = laptopRef.current
      const cutout = cutoutRef.current
      const revealWrap = revealWrapRef.current
      if (laptop) {
        laptop.style.opacity = '0'
        laptop.style.transform = 'scale(0.35) translateY(60px)'
      }
      if (cutout) {
        cutout.style.opacity = '1'
        cutout.style.transform = 'none'
      }
      if (revealWrap) revealWrap.style.opacity = '1'
      if (wrap) {
        const plate = wrap.querySelector<HTMLElement>('.hero-plate')
        const uiElements = wrap.querySelectorAll<HTMLElement>('.hero-ui')
        if (plate) plate.style.opacity = '1'
        uiElements.forEach((el) => (el.style.opacity = '1'))
      }
      return
    }
    goToCase(caseIdx.current - 1)
  }, [goToCase])

  const nextCase = useCallback(() => {
    if (caseIdx.current < CASES.length) {
      goToCase(caseIdx.current + 1)
    } else {
      phase.current = 'hero'
      unlockScroll()
      const proj = document.getElementById('projects')
      if (proj) {
        proj.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [goToCase, unlockScroll])

  /* ─────────────────────────────────────────────────────────────
     Trigger Dive Transition: Smooth 3D Zoom into Laptop Screen
  ───────────────────────────────────────────────────────────── */
  const triggerDive = useCallback(() => {
    if (phase.current !== 'hero') return
    phase.current = 'dive'

    const wrap = wrapRef.current
    const laptop = laptopRef.current
    const cutout = cutoutRef.current
    const vid = videoRef.current
    const revealWrap = revealWrapRef.current

    if (wrap) {
      const uiElements = wrap.querySelectorAll<HTMLElement>('.hero-ui')
      uiElements.forEach((el) => {
        el.style.transition = 'opacity 0.4s ease-out'
        el.style.opacity = '0'
      })
    }

    if (videoBlob.current && vid) {
      vid.src = videoBlob.current
      vid.style.opacity = '1'
      vid.play().catch(() => {})
      vid.onended = () => {
        vid.style.opacity = '0'
        enterCaseMode()
      }
    } else {
      if (cutout) {
        cutout.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out'
        cutout.style.transform = 'scale(2.2) translateY(-40px)'
        cutout.style.opacity = '0'
      }
      if (revealWrap) {
        revealWrap.style.transition = 'opacity 0.5s ease-out'
        revealWrap.style.opacity = '0'
      }
      if (wrap) {
        const plate = wrap.querySelector<HTMLElement>('.hero-plate')
        if (plate) {
          plate.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out'
          plate.style.transform = 'scale(2.2) translateY(-40px)'
          plate.style.opacity = '0'
        }
      }

      setTimeout(() => {
        enterCaseMode()
      }, 600)
    }

    function enterCaseMode() {
      phase.current = 'case'
      setInCaseMode(true)
      goToCase(0)
      if (laptop) {
        laptop.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out'
        laptop.style.opacity = '1'
        laptop.style.transform = 'scale(1) translateY(0px)'
      }
      if (liveAriaRef.current) {
        liveAriaRef.current.textContent = 'Interactive laptop view loaded. Use arrow keys or scroll to browse cases.'
      }
    }
  }, [goToCase])

  const skipIntro = useCallback(() => {
    phase.current = 'hero'
    unlockScroll()
    const about = document.getElementById('about') || document.getElementById('expertise')
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' })
    }
  }, [unlockScroll])

  /* ─────────────────────────────────────────────────────────────
     Wheel, Touch, Key Listeners
  ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    ;(window as any).__triggerHeroDive = triggerDive

    // Check URL hash on initial load
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash && hash !== '#home') {
        unlockScroll()
      } else {
        lockScroll()
      }
    }

    const onGlobalUnlock = () => {
      unlockScroll()
    }
    window.addEventListener('unlock-hero-scroll', onGlobalUnlock)

    const onWheel = (e: WheelEvent) => {
      if (!locked.current) return
      if (phase.current === 'hero' && e.deltaY >= 18) {
        e.preventDefault()
        triggerDive()
      } else if (phase.current === 'case') {
        if (e.deltaY >= 20) {
          e.preventDefault()
          nextCase()
        } else if (e.deltaY <= -20) {
          e.preventDefault()
          prevCase()
        }
      }
    }

    let touchStartY = 0
    let touchStartX = 0
    const onTouchStartWindow = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
      touchStartX = e.touches[0].clientX
    }

    const onTouchEndWindow = (e: TouchEvent) => {
      if (!locked.current) return
      const dy = touchStartY - e.changedTouches[0].clientY
      const dx = touchStartX - e.changedTouches[0].clientX
      if (phase.current === 'hero' && dy > 40) {
        triggerDive()
      } else if (phase.current === 'case') {
        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx > 35) nextCase()
          else if (dx < -35) prevCase()
        } else {
          if (dy > 40) nextCase()
          else if (dy < -40) prevCase()
        }
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (!locked.current) return
      const isDown = ['ArrowDown', 'PageDown', ' '].includes(e.key)
      const isUp = ['ArrowUp', 'PageUp'].includes(e.key)
      const isRight = e.key === 'ArrowRight'
      const isLeft = e.key === 'ArrowLeft'

      if (isDown) {
        e.preventDefault()
        if (phase.current === 'hero') triggerDive()
        else if (phase.current === 'case') nextCase()
      } else if (isUp && phase.current === 'case') {
        e.preventDefault()
        prevCase()
      } else if (isRight && phase.current === 'case') {
        e.preventDefault()
        nextCase()
      } else if (isLeft && phase.current === 'case') {
        e.preventDefault()
        prevCase()
      }
    }

    const onNativeScroll = () => {}

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStartWindow, { passive: true })
    window.addEventListener('touchend', onTouchEndWindow, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('scroll', onNativeScroll, { passive: true })

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStartWindow)
      window.removeEventListener('touchend', onTouchEndWindow)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('scroll', onNativeScroll)
      window.removeEventListener('unlock-hero-scroll', onGlobalUnlock)
      delete (window as any).__triggerHeroDive
    }
  }, [triggerDive, nextCase, prevCase, lockScroll])

  /* ─────────────────────────────────────────────────────────────
     Preload dive.mp4
  ───────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (typeof window === 'undefined') return

    fetch(asset('/hero/dive.mp4'))
      .then((r) => (r.ok ? r.blob() : null))
      .then((blob) => {
        if (blob) videoBlob.current = URL.createObjectURL(blob)
      })
      .catch(() => {})

    return () => {
      unlockScroll()
      if (videoBlob.current) URL.revokeObjectURL(videoBlob.current)
    }
  }, [unlockScroll])

  return (
    <>
      {/* ─────────────────────────────────────────────────────────
          Full-Bleed Hero Viewport (100vw, 100dvh, pointer-events auto)
      ───────────────────────────────────────────────────────── */}
      <section
        id="home"
        ref={wrapRef}
        className="hero-viewport relative w-screen overflow-hidden bg-[#07080b] select-none p-0 m-0 pointer-events-auto"
        style={{ height: '100dvh', minHeight: '100svh' }}
        aria-label="Chinnapareddy Vishnu Vardhan Reddy Portfolio Hero"
      >

        {/* Hidden SEO Heading */}
        <h1 className="sr-only">Chinnapareddy Vishnu Vardhan Reddy — Java Full Stack Developer</h1>
        <p className="sr-only">
          Java Full Stack Developer · Intern @ TAP Academy · B.Tech CSE (Data Science) ·
          19+ GitHub Repos, 17+ Live Demos, 7.78 B.Tech CGPA.
        </p>
        <div ref={liveAriaRef} aria-live="polite" className="sr-only" />

        {/* ── THE 1440x810 SCALED FRAME (TOP-ANCHORED) ── */}
        <div
          className="frame absolute top-0 left-0 pointer-events-none"
          style={{
            width: '1440px',
            height: '810px',
            transformOrigin: '0 0',
            transform: frameTransform.transform,
          }}
        >
          {/* Layer 1: plate.webp (z-index: 1) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset('/hero/plate.webp')}
            alt="Vishnu in black blazer with white sneakers"
            className="hero-plate absolute top-0 left-0 w-[1440px] h-[810px] pointer-events-none transition-opacity duration-700"
            style={{ zIndex: 1, display: 'block' }}
          />

          {/* Layer 3: Wordmark SVG "VISHNU" (z-index: 3) */}
          <svg
            className="hero-ui wm absolute pointer-events-none select-none transition-opacity duration-700"
            viewBox="0 0 1100 260"
            preserveAspectRatio="xMidYMid meet"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '178px',
              width: 'min(92%, 1300px)',
              overflow: 'visible',
              zIndex: 3,
            }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="wmg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="1" />
                <stop offset=".5" stopColor="#f1f5f3" stopOpacity=".9" />
                <stop offset="1" stopColor="#d7e6de" stopOpacity=".28" />
              </linearGradient>
            </defs>
            <text
              x="10"
              y="214"
              fill="url(#wmg)"
              fontFamily="'Inter Tight', sans-serif"
              fontWeight="900"
              fontSize="270"
              letterSpacing="-8"
              textLength="1080"
              lengthAdjust="spacingAndGlyphs"
            >
              VISHNU
            </text>
          </svg>

          {/* Layer 4: Cutout overlay (z-index: 4) so head overlaps letters S & H */}
          <div
            ref={cutoutRef}
            className="absolute top-0 left-0 w-[1440px] h-[810px] pointer-events-none"
            style={{ zIndex: 4 }}
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/hero/cutout.png')}
              alt="Vishnu portrait cutout"
              className="w-[1440px] h-[810px]"
              style={{ display: 'block' }}
            />
          </div>

          {/* Layer 5: Badge (z-index: 5, hanging from y = -165 frame units) */}
          <div
            className="hero-ui absolute select-none pointer-events-auto transition-opacity duration-700 group cursor-default"
            style={{
              left: '1015px',
              top: '-165px',
              width: '218px',
              transformOrigin: '50% 0px',
              animation: 'badgeSway 6s ease-in-out infinite',
              zIndex: 5,
            }}
            aria-hidden="true"
          >
            {/* Lanyard Strap */}
            <div
              className="w-5 h-[275px] mx-auto shadow-md"
              style={{
                background: 'linear-gradient(to right, #b4b6bd 0%, #ffffff 40%, #e2e4e8 70%, #9fa1a8 100%)',
                borderLeft: '1px solid rgba(0,0,0,0.25)',
                borderRight: '1px solid rgba(0,0,0,0.25)',
              }}
            />

            {/* Silver Metal Clip */}
            <div
              className="w-9 h-5 mx-auto -mt-1 rounded-sm shadow-lg relative z-10"
              style={{
                background: 'linear-gradient(to bottom, #f0f1f5, #9fa1a8 60%, #60626a)',
                border: '1px solid rgba(255,255,255,0.6)',
              }}
            />

            {/* Clear Sleeve & White Card */}
            <div
              className="w-[218px] rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-white/40 mt-1.5 transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                background: '#ffffff',
                padding: '14px 16px 16px',
                color: '#0d0f14',
              }}
            >
              {/* Card Red Top Banner */}
              <div className="h-1.5 w-full bg-[#ff2d3d] rounded-full mb-3" />

              <div className="flex items-center justify-between border-b border-black/10 pb-1.5 mb-2.5">
                <span className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest font-bold text-black/60">
                  TAP ACADEMY // CREW
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff2d3d] animate-pulse" />
              </div>

              <h4 className="font-['Inter_Tight'] text-[24px] font-black tracking-tight leading-none text-[#0d0f14]">
                VISHNU
              </h4>
              <p className="font-['JetBrains_Mono'] text-[9.5px] uppercase font-bold text-black/75 mt-0.5 tracking-tight">
                CHINNAPAREDDY V. REDDY
              </p>

              <div className="mt-2.5 pt-2 border-t border-black/10 space-y-1">
                <p className="font-['JetBrains_Mono'] text-[9px] uppercase font-bold text-[#ff2d3d] tracking-wide">
                  ROLE: JAVA FULL STACK DEV
                </p>
                <p className="font-['JetBrains_Mono'] text-[9px] uppercase text-black/70">
                  B.TECH CSE (DATA SCIENCE)
                </p>
                <p className="font-['JetBrains_Mono'] text-[9px] uppercase text-black/70 font-semibold">
                  CGPA: 7.78 // 19+ REPOS
                </p>
              </div>

              {/* Vector Barcode */}
              <div className="mt-3 pt-2 border-t border-black/10 flex items-center justify-between">
                <div className="flex items-end gap-[2px] h-6">
                  {[2, 1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 3, 1, 4, 2, 1, 3, 1, 2].map((w, i) => (
                    <span
                      key={i}
                      className="bg-black/90 inline-block h-full"
                      style={{ width: `${w}px` }}
                    />
                  ))}
                </div>
                <span className="font-['JetBrains_Mono'] text-[8px] text-black/50 font-bold">
                  VVR-2026
                </span>
              </div>
            </div>
          </div>

          {/* Layer 6: Script "full-stack developer" (z-index: 6, above wordmark, rotated -8 deg) */}
          <p
            className="hero-ui font-['Caveat_Brush'] text-white/95 absolute pointer-events-none select-none transition-opacity duration-700"
            style={{
              left: '6%',
              top: '448px',
              fontSize: '30px',
              transform: 'rotate(-8deg)',
              transformOrigin: 'left center',
              lineHeight: 1,
              zIndex: 6,
            }}
          >
            full-stack developer
          </p>

          {/* Layer 7: Right-side Stats Arcs Component (z-index: 7, hidden below 1100px wide) */}
          <div
            className="hero-ui absolute pointer-events-none select-none transition-opacity duration-700 hidden min-[1100px]:block"
            style={{ right: '0px', top: '0px', width: '260px', height: '810px', zIndex: 7 }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 260 810"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="arcFadeGrad" x1="0" y1="0" x2="0" y2="810" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ff2d3d" stopOpacity="0.05" />
                  <stop offset="25%" stopColor="#ff2d3d" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#ff2d3d" stopOpacity="0.95" />
                  <stop offset="75%" stopColor="#ff2d3d" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#ff2d3d" stopOpacity="0.05" />
                </linearGradient>
                {/* Arc Paths centered at (-40, 405) */}
                <path id="arcRepo" d="M 91.5 157.8 A 280 280 0 0 1 91.5 652.2" />
                <path id="arcDemo" d="M 68.0 201.9 A 230 230 0 0 1 68.0 608.1" />
                <path id="arcCgpa" d="M 44.5 246.1 A 180 180 0 0 1 44.5 563.9" />
              </defs>

              {/* Arc Strokes */}
              <use href="#arcRepo" stroke="url(#arcFadeGrad)" strokeWidth="1.5" />
              <use href="#arcDemo" stroke="url(#arcFadeGrad)" strokeWidth="1.5" />
              <use href="#arcCgpa" stroke="url(#arcFadeGrad)" strokeWidth="1.5" />

              {/* Text along arcs: 19+ GITHUB REPOS */}
              <text fill="white" fontSize="11" fontFamily="'Inter Tight', sans-serif" fontWeight="900" letterSpacing="0.08em">
                <textPath href="#arcRepo" startOffset="32%">
                  19+ GITHUB REPOS
                </textPath>
              </text>

              {/* 17+ LIVE DEMOS */}
              <text fill="white" fontSize="11" fontFamily="'Inter Tight', sans-serif" fontWeight="900" letterSpacing="0.08em">
                <textPath href="#arcDemo" startOffset="32%">
                  17+ LIVE DEMOS
                </textPath>
              </text>

              {/* 7.78 B.TECH CGPA */}
              <text fill="white" fontSize="11" fontFamily="'Inter Tight', sans-serif" fontWeight="900" letterSpacing="0.08em">
                <textPath href="#arcCgpa" startOffset="32%">
                  7.78 B.TECH CGPA
                </textPath>
              </text>
            </svg>
          </div>
        </div>


        {/* Layer 2: Cyberpunk reveal.webp masked by cursor spotlight canvas (z-index: 2) */}
        <div
          id="reveal"
          ref={revealWrapRef}
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden transition-opacity duration-500"
          style={{ zIndex: 2 }}
          aria-hidden="true"
        >
          <div
            className="frame absolute top-0 left-0 pointer-events-none"
            style={{
              width: '1440px',
              height: '810px',
              transformOrigin: '0 0',
              transform: frameTransform.transform,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset('/hero/reveal.webp')}
              alt=""
              className="w-[1440px] h-[810px] pointer-events-none"
              style={{ display: 'block' }}
            />
          </div>
        </div>

        {/* Layer 8: HUD Ring following smoothed cursor (z-index: 8) */}
        <div
          id="hudRing"
          className="absolute top-0 left-0 w-12 h-12 rounded-full border border-[#ff2d3d] pointer-events-none shadow-[0_0_15px_rgba(255,45,61,0.6)]"
          style={{
            zIndex: 8,
            willChange: 'transform',
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff2d3d] shadow-[0_0_6px_#ff2d3d]" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1.5 bg-[#ff2d3d]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-1.5 bg-[#ff2d3d]" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-1.5 bg-[#ff2d3d]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-1.5 bg-[#ff2d3d]" />
        </div>

        {/* Centered Bottom Hint & Skip Intro */}
        <div className="hero-ui absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20 pointer-events-auto transition-opacity duration-700">
          <div className="w-px h-5 bg-gradient-to-b from-transparent via-[#ff2d3d] to-transparent animate-pulse" />
          <button
            onClick={triggerDive}
            className="flex items-center gap-2 font-['JetBrains_Mono'] text-[11px] tracking-widest uppercase text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-[#ff2d3d]" style={{ animation: 'heroBob 1.6s ease-in-out infinite' }}>
              ↓
            </span>
            <span>SCROLL INTO THE WORK</span>
          </button>
        </div>

        <button
          onClick={skipIntro}
          className="hero-ui absolute bottom-4 right-6 sm:right-10 z-20 pointer-events-auto font-['JetBrains_Mono'] text-[11px] tracking-widest uppercase text-white/60 hover:text-white underline underline-offset-4 cursor-pointer transition-colors"
          aria-label="Skip hero and scroll directly to About section"
        >
          SKIP INTRO ↓
        </button>

        {/* ── LAYER 9: Dive Video Overlay ── */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-40 pointer-events-none transition-opacity duration-300"
          style={{ opacity: 0 }}
          muted
          playsInline
          preload="none"
          aria-hidden="true"
        />

        {/* ── LAYER 10: Laptop Dive Screen & Project Cases ── */}
        <div
          ref={laptopRef}
          className="hero-laptop absolute inset-0 z-45 flex items-center justify-center p-3 sm:p-6"
          style={{
            opacity: 0,
            transform: 'scale(0.35) translateY(60px)',
            willChange: 'transform, opacity',
            pointerEvents: inCaseMode ? 'auto' : 'none',
          }}
          aria-label="Project Case Studies in Laptop View"
        >
          {/* casePlate.webp Background Stage */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset('/hero/casePlate.webp')}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />

          {/* Laptop Bezel & Screen Window */}
          <div className="relative z-10 w-full max-w-4xl rounded-2xl overflow-hidden border border-white/15 bg-[#090a0f]/95 shadow-[0_30px_100px_rgba(0,0,0,0.95)] backdrop-blur-2xl">
            {/* Screen Top Chrome */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-['JetBrains_Mono'] text-[11px] text-[var(--text-dim,#9c96b0)]">
                  vishnu6301382491-dev / portfolio // featured-work
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] tracking-wider text-[var(--text-dim,#9c96b0)] uppercase hidden sm:inline">
                Case {((activeCase % CASES.length) + 1)} / {CASES.length}
              </span>
            </div>

            {/* Project Cases Slides Carousel */}
            <div className="relative overflow-hidden" style={{ minHeight: 'clamp(300px, 46vh, 440px)' }}>
              <div
                ref={slidesRef}
                className="flex"
                style={{
                  width: `${(CASES.length + 1) * 100}%`,
                  transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* 5 Real Project Cases */}
                {CASES.map((item, idx) => (
                  <div
                    key={item.id}
                    className="relative flex-shrink-0 flex flex-col md:flex-row items-stretch"
                    style={{ width: `${100 / (CASES.length + 1)}%` }}
                    role="article"
                    aria-label={`Case ${idx + 1}: ${item.title}`}
                  >
                    {/* Project Preview Image */}
                    <div className="md:w-1/2 flex-shrink-0 relative overflow-hidden bg-[#12131a] min-h-[160px] md:min-h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset(item.preview)}
                        alt={`${item.title} preview`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#090a0f]" />
                    </div>

                    {/* Project Details */}
                    <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between">
                      <div>
                        <p className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] tracking-widest uppercase font-semibold text-[#ff2d3d] mb-1.5">
                          {item.stack}
                        </p>
                        <h3 className="font-['Anton'] text-2xl sm:text-3xl md:text-4xl text-white tracking-wide mb-3">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[var(--text-dim,#9c96b0)] leading-relaxed">
                          {item.teaser}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 mt-5">
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-['JetBrains_Mono'] text-xs font-semibold px-4 py-2 rounded-lg bg-[#ff2d3d] text-white hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,45,61,0.35)]"
                        >
                          Live Demo ↗
                        </a>
                        <a
                          href={item.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-['JetBrains_Mono'] text-xs px-4 py-2 rounded-lg border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/30 transition-all"
                        >
                          Source Code ↗
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Final Card: "See All 19 Repositories" */}
                <div
                  className="flex-shrink-0 flex flex-col items-center justify-center p-6 sm:p-10 text-center"
                  style={{ width: `${100 / (CASES.length + 1)}%` }}
                  role="article"
                  aria-label="See all 19 repositories on GitHub"
                >
                  <div className="w-14 h-14 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center mb-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                  </div>
                  <h3 className="font-['Anton'] text-2xl sm:text-3xl text-white tracking-wide mb-2">
                    EXPLORE ALL 19 REPOSITORIES
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-xs text-[var(--text-dim,#9c96b0)] mb-5 max-w-md">
                    Java Servlets, Spring, Next.js, MongoDB, Machine Learning algorithms, and Full Stack web applications.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href="https://github.com/vishnu6301382491-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-['JetBrains_Mono'] text-xs font-semibold px-5 py-2.5 rounded-lg bg-[#ff2d3d] text-white hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,45,61,0.35)]"
                    >
                      Open GitHub Profile ↗
                    </a>
                    <button
                      onClick={() => {
                        phase.current = 'hero'
                        unlockScroll()
                        const proj = document.getElementById('projects')
                        if (proj) proj.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="font-['JetBrains_Mono'] text-xs font-semibold px-5 py-2.5 rounded-lg bg-[#ff2d3d] text-white hover:brightness-110 shadow-[0_0_15px_rgba(255,45,61,0.35)] transition-all cursor-pointer"
                    >
                      View all 19 projects ↓
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Laptop Case Navigation Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-white/10 bg-white/[0.02]">
              <button
                onClick={prevCase}
                className="font-['JetBrains_Mono'] text-xs tracking-wider uppercase text-[var(--text-dim,#9c96b0)] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                aria-label="Previous project or return to hero"
              >
                ← Prev
              </button>

              <div className="flex items-center gap-1.5" aria-hidden="true">
                {Array.from({ length: CASES.length + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToCase(i)}
                    className="rounded-full transition-all duration-300 cursor-pointer"
                    style={{
                      width: i === activeCase ? '20px' : '6px',
                      height: '6px',
                      background: i === activeCase ? '#ff2d3d' : 'rgba(255, 255, 255, 0.2)',
                    }}
                    aria-label={`Jump to case ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextCase}
                className="font-['JetBrains_Mono'] text-xs tracking-wider uppercase text-[var(--text-dim,#9c96b0)] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                aria-label="Next project or continue to About section"
              >
                {activeCase >= CASES.length ? 'View 19 Projects ↓' : 'Next →'}
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @media (prefers-reduced-motion: reduce) {
            .hero-plate { animation: none !important; }
            .hero-ui { animation: none !important; }
          }
        `}</style>
      </section>

      {/* ─────────────────────────────────────────────────────────
          #about Profile Section (Preserves Bio & Stat Chips)
      ───────────────────────────────────────────────────────── */}
      <section id="about" className="relative px-6 py-28 bg-[#07080b] border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="glass p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl">
            {/* Ambient Background Glow */}
            <div
              className="absolute -top-32 -right-32 w-80 h-80 rounded-full pointer-events-none opacity-20 filter blur-3xl"
              style={{ background: '#ff2d3d' }}
            />

            <div className="relative z-10 max-w-3xl">
              <p className="eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {'// SYSTEM PROFILE · JAVA FULL STACK DEVELOPER'}
              </p>

              <h2
                className="h-display text-white mt-2 mb-5 font-bold"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.15 }}
              >
                Hello, I&apos;m{' '}
                <span className="text-white underline decoration-[#ff2d3d] underline-offset-8">
                  Chinnapareddy Vishnu Vardhan Reddy
                </span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[var(--text-dim,#9c96b0)] mb-8">
                Recent B.Tech graduate in Computer Science &amp; Engineering (Data Science) from Rise Krishna Sai
                Prakasam Group of Institutions (CGPA: 7.78) and Java Full Stack Intern at TAP Academy.
                Built FoodWala (Java Servlets &amp; JSP food ordering platform with Razorpay and role-based auth)
                and GA-KELM AQI Prediction Dashboard. Seeking an entry-level Java Developer role.
              </p>

              {/* Verified Stat Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="glass p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <b className="h-display text-3xl text-white block">19+</b>
                  <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[var(--text-dim,#9c96b0)] mt-1 block">
                    GitHub Repos
                  </span>
                </div>
                <div className="glass p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <b className="h-display text-3xl text-white block">17+</b>
                  <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[var(--text-dim,#9c96b0)] mt-1 block">
                    Live Demos
                  </span>
                </div>
                <div className="glass p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <b className="h-display text-3xl text-white block">7.78</b>
                  <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[var(--text-dim,#9c96b0)] mt-1 block">
                    B.Tech CGPA
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="font-['JetBrains_Mono'] text-xs font-semibold px-5 py-2.5 rounded-xl bg-[#ff2d3d] text-white hover:brightness-110 transition-all shadow-[0_0_15px_rgba(255,45,61,0.3)]"
                >
                  View My Work
                </a>
                <a
                  href={asset('/resume.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['JetBrains_Mono'] text-xs px-5 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] transition-all"
                >
                  Resume ↗
                </a>
                <a
                  href={asset('/haldoren.html')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['JetBrains_Mono'] text-xs px-5 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:border-emerald-400 transition-all flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d3d] animate-ping" />
                  Augmented Mode ↗
                </a>
                <a
                  href="#contact"
                  className="font-['JetBrains_Mono'] text-xs px-5 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] transition-all"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
