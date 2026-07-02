import { IconQuote } from './Icons'

export function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24 text-paper sm:py-32">
      {/* Background image + overlay */}
      <img
        src="/images/testimonial.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950/75 via-brand-950/85 to-brand-950"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <div className="container-x relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <IconQuote className="mx-auto h-12 w-12 text-accent/70" />
          <blockquote className="mt-8 font-display text-2xl font-light leading-snug tracking-tight sm:text-4xl sm:leading-[1.25]">
            “M.R. Accountants have been a game changer for my company with their
            great advice and accountancy services. Thanks to them, we can focus
            on growing our business.”
          </blockquote>

          <figcaption className="mt-10 flex items-center justify-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-paper/10 font-display text-lg font-semibold text-paper">
              PL
            </span>
            <span className="text-left">
              <span className="block font-semibold">Paul Levett</span>
              <span className="block text-sm text-paper/60">
                Levett Consultancy Ltd
              </span>
            </span>
          </figcaption>
        </div>
      </div>
    </section>
  )
}
