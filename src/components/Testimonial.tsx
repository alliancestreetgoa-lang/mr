import { asset } from '../lib/asset'
import { IconQuote } from './Icons'

export function Testimonial() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-white py-24 sm:py-32">
      {/* Faint photo texture + wash */}
      <img
        src={asset('/images/testimonial.jpg')}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <IconQuote className="mx-auto h-12 w-12 text-accent/40" />
          <blockquote className="mt-8 font-display text-2xl font-light leading-snug tracking-tight text-brand-950 sm:text-4xl sm:leading-[1.25]">
            “M.R. Accountants have been a game changer for my company with their
            great advice and accountancy services. Thanks to them, we can focus
            on growing our business.”
          </blockquote>

          <figcaption className="mt-10 flex items-center justify-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-900 font-display text-lg font-semibold text-paper">
              PL
            </span>
            <span className="text-left">
              <span className="block font-semibold text-brand-950">
                Paul Levett
              </span>
              <span className="block text-sm text-slate">
                Levett Consultancy Ltd
              </span>
            </span>
          </figcaption>
        </div>
      </div>
    </section>
  )
}
