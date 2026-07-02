import { BUSINESS } from '../data'
import { Logo } from './Logo'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'How we work' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-white text-ink">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="h-16 w-auto" />
            </div>
            <p className="mt-5 max-w-sm leading-relaxed text-slate">
              {BUSINESS.tagline} Chartered certified accountants supporting
              businesses and private clients across Essex and London.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-accent">
              ACCA · Chartered Certified Accountants
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-brand-950">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate transition-colors hover:text-brand-900">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-brand-950">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate">
              <li>
                <a href={BUSINESS.phoneHref} className="transition-colors hover:text-brand-900">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={BUSINESS.emailHref} className="transition-colors hover:text-brand-900">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="pt-1 not-italic">
                {BUSINESS.address.line1}
                <br />
                {BUSINESS.address.line2}
                <br />
                {BUSINESS.address.postcode}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 text-xs text-mute sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="max-w-lg leading-relaxed">
            {BUSINESS.name} is a trading name. Services described are provided in
            accordance with ACCA professional standards.
          </p>
        </div>
      </div>
    </footer>
  )
}
