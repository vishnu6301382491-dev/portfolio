'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

// [data-split] headings rise by character, [data-eyebrow] slide in, [data-fade] fade up and de-blur
export function useSplitReveal(scope: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!scope.current) return
    const ctx = gsap.context(() => {
      scope.current!.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
        const split = new SplitType(el, { types: 'lines,chars' })
        split.lines?.forEach((l) => (l.style.overflow = 'hidden'))
        gsap.from(split.chars, {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          stagger: 0.02,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })
      scope.current!.querySelectorAll('[data-eyebrow]').forEach((el) =>
        gsap.from(el, {
          x: -24,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
        })
      )
      scope.current!.querySelectorAll('[data-fade]').forEach((el) =>
        gsap.from(el, {
          y: 28,
          opacity: 0,
          filter: 'blur(6px)',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      )
    }, scope)
    return () => ctx.revert()
  }, [scope])
}
