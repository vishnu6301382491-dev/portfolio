'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const home = document.getElementById('home')
    if (!home) return

    let isHomeVisible = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        isHomeVisible = entry.isIntersecting
        if (!isHomeVisible) {
          gsap.to([dot.current, ring.current], { opacity: 0, duration: 0.2 })
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(home)

    gsap.set([dot.current, ring.current], {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
    })

    const dx = gsap.quickTo(dot.current, 'x', { duration: 0.1 })
    const dy = gsap.quickTo(dot.current, 'y', { duration: 0.1 })
    const rx = gsap.quickTo(ring.current, 'x', { duration: 0.5, ease: 'power3' })
    const ry = gsap.quickTo(ring.current, 'y', { duration: 0.5, ease: 'power3' })

    const move = (e: PointerEvent) => {
      if (!isHomeVisible) return
      const rect = home.getBoundingClientRect()
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom

      if (isInside) {
        gsap.to([dot.current, ring.current], { opacity: 1, duration: 0.2, overwrite: 'auto' })
        dx(e.clientX)
        dy(e.clientY)
        rx(e.clientX)
        ry(e.clientY)
      } else {
        gsap.to([dot.current, ring.current], { opacity: 0, duration: 0.2, overwrite: 'auto' })
      }
    }

    const over = (e: Event) => {
      if (!isHomeVisible) return
      const hit = (e.target as HTMLElement).closest(
        'a, button, input, textarea'
      )
      gsap.to(ring.current, { scale: hit ? 1.8 : 1, duration: 0.3 })
    }

    const leave = () => {
      gsap.to([dot.current, ring.current], { opacity: 0, duration: 0.2 })
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    home.addEventListener('pointerleave', leave)

    return () => {
      observer.disconnect()
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      home.removeEventListener('pointerleave', leave)
    }
  }, [])

  return (
    <>
      <div
        ref={ring}
        className="cursor-ring pointer-events-none fixed"
        style={{ zIndex: 30 }}
      />
      <div
        ref={dot}
        className="cursor-dot pointer-events-none fixed"
        style={{ zIndex: 30 }}
      />
    </>
  )
}
