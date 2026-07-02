import type { MotionProps } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

/**
 * Scroll-triggered fade-up. Spread onto any `motion.*` element to replace
 * the old `.reveal` class. Fires once when the element enters the viewport.
 * Respect for prefers-reduced-motion is handled globally via <MotionConfig
 * reducedMotion="user"> in App.
 */
export const revealProps: MotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '0px 0px -8% 0px' },
  transition: { duration: 0.7, ease },
}

/** Same, with a stagger delay (seconds ≈ index * 0.08) for grids/lists. */
export const revealDelay = (index: number): MotionProps => ({
  ...revealProps,
  transition: { duration: 0.7, ease, delay: index * 0.08 },
})
