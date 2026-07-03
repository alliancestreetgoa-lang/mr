import { useEffect, useRef, useState } from 'react'

// Splits a stat value like "20+", "100%", "4.9/5" into an animatable number
// plus its surrounding prefix/suffix. Non-numeric values (e.g. "ACCA") return
// null so the caller can render them statically.
function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return null
  const [, prefix, num, suffix] = match
  const decimals = num.includes('.') ? num.split('.')[1].length : 0
  return { prefix, target: parseFloat(num), suffix, decimals }
}

// easeOutExpo — quick start, gentle settle
const ease = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

const DURATION = 1600

export default function CountUp({
  value,
  className,
}: {
  value: string
  className?: string
}) {
  const parsed = parseValue(value)
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(() =>
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value,
  )

  useEffect(() => {
    if (!parsed) return
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const final = `${parsed.prefix}${parsed.target.toFixed(parsed.decimals)}${parsed.suffix}`

    if (prefersReduced) {
      setDisplay(final)
      return
    }

    let raf = 0
    let start = 0

    const run = () => {
      const step = (now: number) => {
        if (!start) start = now
        const t = Math.min((now - start) / DURATION, 1)
        const current = parsed.target * ease(t)
        setDisplay(
          `${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`,
        )
        if (t < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run()
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
