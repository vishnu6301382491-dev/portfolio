'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { asset } from '@/lib/asset'

gsap.registerPlugin(ScrollTrigger)

export default function Background() {
  const bar = useRef<HTMLDivElement>(null)
  const haze1 = useRef<HTMLDivElement>(null)
  const haze2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(bar.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.2,
      },
    })
    gsap.to([haze1.current, haze2.current], {
      yPercent: (i) => (i === 0 ? -30 : 25),
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
  }, [])

  return (
    <>
      <div
        ref={bar}
        className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left scale-x-0 bg-[var(--accent)]"
      />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
        <div ref={haze1} className="haze haze-a" />
        <div ref={haze2} className="haze haze-b" />
        <div className="vignette" />
        <div
          className="grain"
          style={{ backgroundImage: `url(${asset('/noise.png')})` }}
        />
      </div>
    </>
  )
}
