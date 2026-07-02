import { BUSINESS, STATS } from '../data'
import { IconArrow, IconPhone } from './Icons'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-950 text-paper"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -bottom-48 -left-32 h-[32rem] w-[32rem] rounded-full bg-brand-700/40 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container-x relative pb-20 pt-36 sm:pb-28 sm:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
          <p className="eyebrow text-accent-light">
            <span className="h-px w-8 bg-accent-light" />
            Chartered Certified Accountants · Essex
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Turning financial{' '}
            <span className="italic text-accent-light">chaos</span>
            <br className="hidden sm:block" /> into lasting{' '}
            <span className="italic text-accent-light">clarity</span>.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70">
            {BUSINESS.name} is a partner-led practice for ambitious businesses and
            private clients — combining rigorous accounting with genuinely
            commercial tax and advisory thinking.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-brand-950 transition-all hover:bg-white hover:shadow-xl hover:shadow-black/20"
            >
              Book a free consultation
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-paper/60 hover:bg-white/5"
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
                src="/images/hero.jpg"
                alt="M.R. Accountants advising business clients in a meeting"
                className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/15"
              />
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 sm:mt-20 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-brand-950/60 px-5 py-6 backdrop-blur">
              <dt className="font-display text-2xl font-medium text-paper sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-paper/55">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Soft transition into the paper section */}
      <div
        aria-hidden
        className="h-16 w-full bg-gradient-to-b from-transparent to-paper"
      />
    </section>
  )
}
