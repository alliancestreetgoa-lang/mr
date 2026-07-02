import { asset } from '../lib/asset'
import { BUSINESS, STATS, TRUST_POINTS } from '../data'
import { IconArrow, IconPhone } from './Icons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white text-ink">
      {/* Ambient background — soft green tints on white */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -bottom-48 -left-32 h-[32rem] w-[32rem] rounded-full bg-sage/20 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(11,32,24,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,32,24,0.05) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container-x relative pb-14 pt-28 sm:pb-16 sm:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            Chartered Certified Accountants · Essex
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-light leading-[1.08] tracking-tight text-brand-950 sm:text-5xl lg:text-6xl">
            Turning financial{' '}
            <span className="italic text-accent">chaos</span>
            <br /> into lasting{' '}
            <span className="italic text-accent">clarity</span>.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate">
            {BUSINESS.name} is a partner-led practice for ambitious businesses and
            private clients — combining rigorous accounting with genuinely
            commercial tax and advisory thinking.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-brand-800 hover:shadow-lg hover:shadow-brand-900/20"
            >
              Book a free consultation
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-brand-900 transition-colors hover:border-brand-900/40 hover:bg-paper-2"
            >
              <IconPhone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative">
              <img
                src={asset('/images/hero.jpg')}
                alt="M.R. Accountants advising business clients in a meeting"
                className="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl lg:aspect-[4/5] lg:max-h-[420px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5"
              />
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-12 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-white px-5 py-6">
              <dt className="font-display text-2xl font-medium text-brand-950 sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-mute">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* Trust points */}
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <li key={point} className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-sm font-medium text-brand-800">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
