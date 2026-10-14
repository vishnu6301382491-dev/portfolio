'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
    gsap.set([dot.current, ring.current], {
      xPercent: -50,
      yPercent: -50,
      opacity: 1,
    })
    const dx = gsap.quickTo(dot.current, 'x', { duration: 0.1 }),
      dy = gsap.quickTo(dot.current, 'y', { duration: 0.1 })
    const rx = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3' }),
      ry = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3' })

    const move = (e: PointerEvent) => {
      dx(e.clientX)
      dy(e.clientY)
      rx(e.clientX)
      ry(e.clientY)
    }
    const over = (e: Event) => {
      const hit = (e.target as HTMLElement).closest(
        'a, button, input, textarea'
      )
      gsap.to(ring.current, { scale: hit ? 1.8 : 1, duration: 0.3 })
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  )
}
