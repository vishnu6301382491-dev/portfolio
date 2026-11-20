'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Global failsafe timer ensuring content is never stuck at opacity 0
if (typeof window !== 'undefined') {
  const triggerFailsafe = () => {
    document
      .querySelectorAll<HTMLElement>(
        '.reveal, [data-split], [data-eyebrow], [data-fade], .skill-card, .root-card, .ach-card, .exp-card, .tl-item'
      )
      .forEach((el) => {
        el.classList.add('in')
        el.style.opacity = '1'
        el.style.transform = 'none'
        el.style.filter = 'none'
      })
  }

  // 2.5s absolute failsafe
  setTimeout(triggerFailsafe, 2500)

  // Document fonts ready + window load triggers
  if (document.fonts) {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh()
    })
  }
  window.addEventListener('load', () => {
    ScrollTrigger.refresh()
  })
}

export function useSplitReveal(scope: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const el = scope.current
    if (!el || typeof window === 'undefined') return

    // Reveal using IntersectionObserver with threshold 0 and rootMargin "0px 0px -10% 0px"
    const targets = el.querySelectorAll<HTMLElement>('[data-split], [data-eyebrow], [data-fade], .reveal')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.classList.add('in')
            gsap.to(target, {
              opacity: 1,
              y: 0,
              x: 0,
              filter: 'none',
              duration: 0.8,
              ease: 'power3.out',
              clearProps: 'filter',
            })
            observer.unobserve(target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )

    targets.forEach((t) => observer.observe(t))

    // Refresh ScrollTrigger once fonts and images settle
    if (document.fonts) {
      document.fonts.ready.then(() => ScrollTrigger.refresh())
    }

    return () => {
      targets.forEach((t) => observer.unobserve(t))
      observer.disconnect()
    }
  }, [scope])
}
