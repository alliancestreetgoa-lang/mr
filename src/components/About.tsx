import { asset } from '../lib/asset'
import { BUSINESS } from '../data'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-line bg-paper-2/60 py-24 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        {/* Editorial statement */}
        <div className="lg:col-span-7" data-reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            The practice
          </p>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.15] tracking-tight text-brand-950 sm:text-5xl">
            Numbers are the easy part.{' '}
            <span className="italic text-accent">Judgement</span> is what we
            really offer.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-slate">
            <p>
              Plenty of firms can file your accounts. What sets {BUSINESS.name}{' '}
              apart is the thinking that sits behind them — an ACCA-qualified
              team that reads your numbers as a story about your business, not a
              box-ticking exercise.
            </p>
            <p>
              We keep our client relationships close and partner-led, so the
              person who understands your business is the person you actually
              speak to. The result is advice that is timely, plain-spoken and
              genuinely commercial.
            </p>
          </div>

          <blockquote className="mt-9 border-l-2 border-accent pl-6 font-display text-xl font-light italic leading-relaxed text-brand-900 sm:text-2xl">
            “{BUSINESS.tagline}”
          </blockquote>
        </div>

        {/* Photo + credential card */}
        <div className="space-y-6 lg:col-span-5" data-reveal>
          <div className="overflow-hidden rounded-3xl border border-line shadow-sm">
            <img
              src={asset('/images/about.jpg')}
              alt="The M.R. Accountants team in their Essex office"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-brand-950 p-8 text-paper sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/25 blur-3xl"
            />
            <div className="relative">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-paper/20 font-display text-lg font-semibold text-paper">
                MR
              </span>
              <p className="mt-6 text-sm uppercase tracking-[0.16em] text-accent-light">
                Regulated & assured
              </p>
              <p className="mt-3 font-display text-2xl font-light leading-snug">
                Member of the Association of Chartered Certified Accountants
                (ACCA)
              </p>
              <p className="mt-4 leading-relaxed text-paper/65">
                Held to the professional, ethical and technical standards of one
                of the world’s leading accountancy bodies — so you can act on our
                advice with confidence.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10">
                <div className="bg-brand-950 px-5 py-5">
                  <dt className="text-xs uppercase tracking-wide text-paper/50">
                    Based in
                  </dt>
                  <dd className="mt-1 font-medium">Woodford Green</dd>
                </div>
                <div className="bg-brand-950 px-5 py-5">
                  <dt className="text-xs uppercase tracking-wide text-paper/50">
                    Serving
                  </dt>
                  <dd className="mt-1 font-medium">Essex & London</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
