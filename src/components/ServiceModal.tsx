import { useEffect, useRef, useState } from 'react'
import type { HelpService } from '../data'
import { IconArrow } from './Icons'

type Props = {
  service: HelpService | null
  category: string | null
  onClose: () => void
}

export function ServiceModal({ service, category, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!service) {
      setShown(false)
      return
    }

    const trigger = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    // Trigger enter transition on next frame.
    const raf = requestAnimationFrame(() => setShown(true))
    closeRef.current?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      cancelAnimationFrame(raf)
      trigger?.focus?.()
    }
  }, [service, onClose])

  if (!service) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className={`absolute inset-0 bg-brand-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          shown ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-white shadow-2xl transition-all duration-300 sm:rounded-3xl motion-reduce:transition-none ${
          shown ? 'translate-y-0 opacity-100 sm:scale-100' : 'translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95'
        }`}
      >
        <div className="p-7 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              {category && (
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {category}
                </p>
              )}
              <h2
                id="service-modal-title"
                className="mt-2 font-display text-2xl font-medium leading-tight text-brand-950 sm:text-3xl"
              >
                {service.name}
              </h2>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-slate transition-colors hover:bg-paper-2 hover:text-brand-950"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <p className="mt-4 leading-relaxed text-slate">{service.blurb}</p>

          <ul className="mt-6 grid gap-2.5 border-t border-line pt-6">
            {service.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-brand-800">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              onClick={onClose}
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-paper transition-all hover:bg-brand-800"
            >
              Enquire about this
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-paper-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
