'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
import { asset } from '@/lib/asset'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.config({ ignoreMobileResize: true })

const TOTAL = 1 // Expandable to 90 when full head-turn sequence f001.webp..f090.webp is added
const src = (i: number) => asset(`/frames/f${String(i + 1).padStart(3, '0')}.webp`)

export default function Hero() {
  const wrap = useRef<HTMLElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const images = useRef<HTMLImageElement[]>([])

  const draw = (i: number) => {
    const c = canvas.current
    const img = images.current[Math.round(i)]
    if (!c || !img || !img.naturalWidth) return
    const ctx = c.getContext('2d')
    if (!ctx) return
    // High-resolution 1160x1392 buffer (2x natural 580x696 portrait size)
    c.width = 1160
    c.height = 1392
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.drawImage(img, 0, 0, c.width, c.height)
  }

  useEffect(() => {

    // Preload frame(s)
    const step = window.innerWidth < 768 && TOTAL > 20 ? 2 : 1
    const list = Array.from(
      { length: Math.ceil(TOTAL / step) },
      (_, i) => i * step
    )
    images.current = list.map((n) => {
      const img = new Image()
      img.onload = () => draw(0)
      img.src = src(n)
      if (img.complete && img.naturalWidth) {
        draw(0)
      }
      return img
    })

    const onResize = () => {
      draw(0)
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', onResize)

    const ctx = gsap.context(() => {
      draw(0)
      gsap.set(['.word-1', '.word-2'], { opacity: 0, yPercent: 110 })

      const box = boxRef.current
      if (!box) return

      const m = window.innerWidth < 768
      const heroW = m
        ? window.innerWidth * 0.9
        : Math.min(Math.max(window.innerWidth * 0.35, 340), 520)
      const heroH = m
        ? window.innerHeight * 0.52
        : Math.min(Math.max(window.innerHeight * 0.76, 520), 820)
      const heroLeft = m ? window.innerWidth * 0.05 : window.innerWidth * 0.515
      const heroTop = m ? window.innerHeight * 0.18 : (window.innerHeight - heroH) / 2 + 10

      const aboutW = m ? 240 : 290
      const aboutH = m ? 400 : 500
      const aboutLeft = m ? (window.innerWidth - aboutW) / 2 : window.innerWidth * 0.11
      const aboutTop = m ? 90 : (window.innerHeight - aboutH) / 2

      // Initialize photo-box in Hero state
      gsap.set(box, {
        width: heroW,
        height: heroH,
        left: heroLeft,
        top: heroTop,
        rotate: 0,
        borderRadius: m ? 16 : 4,
        borderWidth: 0,
        borderColor: 'rgba(255,255,255,0)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
      })

      // Initial state of about elements
      const split = new SplitType('.about-title', { types: 'lines,chars' })
      split.lines?.forEach((l) => (l.style.overflow = 'hidden'))
      gsap.set(split.chars, { yPercent: 110, opacity: 0 })
      gsap.set('.about-in', { opacity: 0, y: 24, filter: 'blur(6px)' })
      gsap.set('.about-chip', { opacity: 0, y: 30, filter: 'blur(8px)' })
      gsap.set('.open-badge', { opacity: 0, y: 10 })
      gsap.set('.open-badge-grad', { opacity: 0 })
      gsap.set('.about-layer', { opacity: 0, pointerEvents: 'none' })

      // Cinematic intro on initial mount
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.spot', { opacity: 0, duration: 1.2 })
        .from(
          box,
          { scale: 1.08, filter: 'blur(16px)', opacity: 0, duration: 1.4 },
          0.2
        )
        .from('.hi', { opacity: 0, x: -20, duration: 0.8 }, 0.9)
        .from('.word-0', { yPercent: 110, duration: 1.2, ease: 'expo.out' }, 1.0)
        .from(
          '.hero-meta',
          { opacity: 0, y: 20, filter: 'blur(6px)', duration: 0.9, stagger: 0.12 },
          1.4
        )


      const state = { f: 0 }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })

      // 1. Frame scrub across the entire scroll sequence
      tl.to(
        state,
        {
          f: images.current.length - 1,
          ease: 'none',
          duration: 1,
          onUpdate: () => draw(state.f),
        },
        0
      )

      // 2. Headline swaps
      const swap = (from: number, to: number, at: number) => {
        tl.to(
          `.word-${from}`,
          {
            yPercent: -110,
            opacity: 0,
            filter: 'blur(8px)',
            duration: 0.06,
            ease: 'power3.in',
          },
          at
        ).fromTo(
          `.word-${to}`,
          { yPercent: 110, opacity: 0, filter: 'blur(8px)' },
          {
            yPercent: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.08,
            ease: 'expo.out',
          },
          at + 0.05
        )
      }

      swap(0, 1, 0.28)
      swap(1, 2, 0.58)

      // 3. Fade out hero text & meta cleanly before About section enters
      tl.to(
        ['.hero-text', '.hero-meta'],
        {
          opacity: 0,
          y: -25,
          duration: 0.08,
          ease: 'power2.in',
        },
        0.65
      )

      // 4. Spotlight dims down as we transition into About
      tl.to('.spot', { opacity: 0, duration: 0.1 }, 0.70)

      // 5. Photo box morphs into the tilted phone card on the left
      tl.to(
        box,
        {
          width: aboutW,
          height: aboutH,
          left: aboutLeft,
          top: aboutTop,
          rotate: -6,
          borderRadius: 36,
          borderWidth: 6,
          borderColor: 'rgba(255,255,255,0.18)',
          boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
          duration: 0.14,
          ease: 'power2.inOut',
        },
        0.70
      )

      // 6. Ambient card glow and open badge appear
      tl.to('.card-glow', { opacity: 0.6, scale: 1, duration: 0.1 }, 0.78)
        .to('.open-badge', { opacity: 1, y: 0, duration: 0.06 }, 0.82)
        .to('.open-badge-grad', { opacity: 1, duration: 0.06 }, 0.82)

      // 7. About layer and content reveal
      tl.to('.about-layer', { opacity: 1, duration: 0.05 }, 0.84)
        .to(
          split.chars,
          { yPercent: 0, opacity: 1, duration: 0.05, ease: 'expo.out', stagger: 0.002 },
          0.85
        )
        .to(
          '.about-in',
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.05,
            stagger: 0.012,
          },
          0.85
        )
        .to(
          '.about-chip',
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.05,
            stagger: 0.01,
          },
          0.89
        )
        .set('.about-layer', { pointerEvents: 'auto' }, 0.89)

      const counts = { repos: 0, demos: 0 }
      tl.to(
        counts,
        {
          repos: 19,
          demos: 17,
          duration: 0.06,
          ease: 'none',
          onUpdate: () => {
            const r = document.querySelector('.n-repos')
            const d = document.querySelector('.n-demos')
            if (r) r.textContent = Math.round(counts.repos) + '+'
            if (d) d.textContent = Math.round(counts.demos) + '+'
          },
        },
        0.89
      )

      ScrollTrigger.create({
        trigger: wrap.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (s) => {
          box.classList.toggle('card-live', s.progress > 0.98)
          const isHero = s.progress < 0.65
          gsap.to('.hero-meta, .hero-text', {
            opacity: isHero ? 1 : 0,
            pointerEvents: isHero ? 'auto' : 'none',
            overwrite: true,
            duration: 0.15,
          })
        },
      })
    }, wrap)

    return () => {
      window.removeEventListener('resize', onResize)
      ctx.revert()
    }
  }, [])

  return (
    <section id="home" ref={wrap} className="relative h-[500vh]">
      <div id="about" className="absolute left-0 h-px w-px" style={{ top: '380vh' }} />
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Soft white-grey radial spotlight behind hero portrait */}
        <div className="spot pointer-events-none" />

        {/* Ambient glow behind morphed about phone card */}
        <div className="card-glow" />

        {/* Portrait container: waist-up on hero, morphs to phone card on scrub */}
        <div
          ref={boxRef}
          className="photo-box absolute z-0 overflow-hidden shadow-2xl"
          style={{
            left: '51.5%',
            top: '15%',
            width: '35vw',
            height: '76vh',
          }}
        >
          <canvas
            ref={canvas}
            role="img"
            aria-label="Portrait of Vishnu Vardhan Reddy"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 6%' }}
          />
          {/* Subtle bottom gradient to ensure badge contrast */}
          <div className="open-badge-grad absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none opacity-0" />
          <div className="open-badge glass pill mono absolute bottom-3 left-3 right-3 flex items-center gap-2 px-3 py-2 text-[10px] tracking-wider text-white opacity-0">
            <i className="dot" /> OPEN FOR ROLES
          </div>
        </div>

        {/* Headline, left */}
        <div className="hero-text absolute left-6 top-1/2 z-10 -translate-y-1/2 md:left-16 pointer-events-none">
          <p className="hi mono text-xs tracking-widest text-[var(--text-dim)]">
            HI, I&apos;M <u className="text-white font-semibold">VISHNU VARDHAN REDDY</u>
          </p>
          <div className="mt-3 grid overflow-hidden">
            {['JAVA FULL STACK<br/>DEVELOPER', 'CREATIVE<br/>DEVELOPER', 'SCALABLE<br/>SYSTEMS'].map(
              (t, i) => (
                <span
                  key={i}
                  className={`word word-${i} h-display col-start-1 row-start-1 uppercase text-white`}
                  style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}
                  dangerouslySetInnerHTML={{ __html: t }}
                />
              )
            )}
          </div>
        </div>

        {/* Description, top right - clean paragraph matching reference screenshot */}
        <div className="hero-meta hero-text absolute right-6 top-24 z-10 hidden max-w-[340px] md:block md:right-16 text-right">
          <p className="text-xs leading-relaxed text-[var(--text-dim)]">
            Java Full Stack Developer &amp; recent B.Tech CSE (Data Science) graduate.
            Intern at TAP Academy building high-performance Java Servlets, JSP, MySQL,
            and Next.js enterprise web applications.
          </p>
        </div>

        {/* Action buttons, bottom right */}
        <div className="hero-meta hero-text absolute bottom-10 right-6 z-10 flex flex-wrap gap-3 md:right-16">
          <a href="#projects" className="btn-primary text-sm font-semibold">
            View My Work
          </a>
          <a
            href={asset('/resume.pdf')}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost text-sm text-white"
          >
            Resume ↗
          </a>
          <a
            href="#contact"
            className="btn-ghost text-sm text-white"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll hint, bottom left */}
        <p className="hero-meta hero-text mono absolute bottom-10 left-6 z-10 flex items-center gap-2 text-[11px] tracking-widest text-[var(--text-dim)] md:left-16">
          <span className="bob">↓</span> SCROLL TO SCRUB TIMELINE
        </p>

        {/* About text layer, revealed on scrub */}
        <div className="about-layer pointer-events-none opacity-0 absolute inset-0 z-10 flex items-end justify-end px-6 pb-8 md:items-center md:pb-0 md:pr-16">
          <div className="w-full md:w-[50%] lg:w-[48%]">
            <p className="about-in eyebrow flex items-center gap-2">
              <i className="dot" />
              {'// SYSTEM PROFILE · JAVA FULL STACK DEVELOPER'}
            </p>
            <h2
              className="about-title h-display mt-4 text-white"
              style={{ fontSize: 'clamp(28px, 3.8vw, 50px)', lineHeight: 1.1 }}
            >
              Hello, I&apos;m <span className="text-[var(--accent)]">Vishnu Vardhan Reddy</span>
            </h2>
            <p className="about-in mt-5 max-w-xl text-sm leading-relaxed text-[var(--text-dim)]">
              Recent B.Tech graduate in Computer Science &amp; Engineering (Data Science) from Rise Krishna Sai
              Prakasam Group of Institutions (CGPA: 7.78) and Java Full Stack Intern at TAP Academy.
              Built FoodWala (Java Servlets &amp; JSP food ordering platform with Razorpay and role-based auth)
              and GA-KELM AQI Prediction Dashboard. Seeking an entry-level Java Developer role.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3 max-w-xl">
              <div className="about-chip glass p-4">
                <b className="n-repos h-display text-2xl text-white">19+</b>
                <span className="eyebrow mt-1 block">GitHub repos</span>
              </div>
              <div className="about-chip glass p-4">
                <b className="n-demos h-display text-2xl text-white">17+</b>
                <span className="eyebrow mt-1 block">Live demos</span>
              </div>
              <div className="about-chip glass p-4">
                <b className="h-display text-2xl text-white">7.78</b>
                <span className="eyebrow mt-1 block">B.Tech CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
