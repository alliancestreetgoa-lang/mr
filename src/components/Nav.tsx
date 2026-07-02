import { useEffect, useState } from 'react'
import { BUSINESS } from '../data'
import { IconPhone } from './Icons'

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'How we work' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // "Solid" = light chrome on paper (scrolled or mobile menu open).
  // Otherwise the bar floats over the dark hero and uses light text.
  const solid = scrolled || open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-line/80 bg-paper/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between py-4">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label={`${BUSINESS.name} — home`}
        >
          <span
            className={`grid h-10 w-10 place-items-center rounded-lg font-display text-lg font-semibold transition-colors ${
              solid
                ? 'bg-navy-900 text-paper'
                : 'border border-white/25 bg-white/10 text-white'
            }`}
          >
            MR
          </span>
          <span
            className={`hidden font-display text-lg font-semibold tracking-tight transition-colors sm:block ${
              solid ? 'text-navy-900' : 'text-white'
            }`}
          >
            M.R. Accountants
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? 'text-slate hover:text-navy-900'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              solid
                ? 'bg-navy-900 text-paper hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-900/15'
                : 'bg-white text-navy-950 hover:bg-white hover:shadow-lg hover:shadow-black/20'
            }`}
          >
            Book a consultation
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-11 w-11 place-items-center rounded-lg transition-colors md:hidden ${
            solid ? 'text-navy-900 hover:bg-paper-2' : 'text-white hover:bg-white/10'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <div className="container-x flex flex-col gap-1 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy-800 transition-colors hover:bg-paper-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-base font-semibold text-paper"
          >
            <IconPhone className="h-5 w-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
