import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-reveal for every `[data-reveal]` element, powered by GSAP
 * ScrollTrigger. Elements fade up once as they enter the viewport,
 * staggered per batch. Respects prefers-reduced-motion.
 *
 * `clearProps: 'transform'` is set on completion so GSAP leaves no inline
 * transform behind — CSS hover transforms (e.g. card lift) keep working.
 */
export function useScrollReveal() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>('[data-reveal]')
      if (els.length === 0) return

      if (reduce) {
        gsap.set(els, { opacity: 1, y: 0 })
        return
      }

      // Hidden until revealed (runs before paint via useLayoutEffect).
      gsap.set(els, { opacity: 0, y: 24, willChange: 'transform, opacity' })

      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 90%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.08,
            overwrite: true,
            onComplete() {
              gsap.set(batch, { clearProps: 'transform,will-change' })
            },
          }),
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [])
}
