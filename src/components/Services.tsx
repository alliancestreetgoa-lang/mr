import { SERVICE_GROUPS } from '../data'
import { GROUP_ICONS, IconArrow } from './Icons'

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-paper py-24 sm:py-28">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            How we can help
          </p>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-brand-950 sm:text-5xl">
            One practice, the full financial picture
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            From day-to-day bookkeeping to boardroom strategy, our work spans
            four connected disciplines — so nothing falls between the cracks.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICE_GROUPS.map((group, i) => {
            const Icon = GROUP_ICONS[group.id as keyof typeof GROUP_ICONS]
            return (
              <article
                key={group.id}
                className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-900/15 hover:shadow-xl hover:shadow-brand-950/8 sm:p-10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-6 top-6 font-display text-6xl font-light text-paper-2 transition-colors group-hover:text-accent/10"
                >
                  0{i + 1}
                </span>

                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-950 text-accent-light transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </span>

                <h3 className="mt-6 font-display text-2xl font-medium text-brand-950">
                  {group.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate">{group.blurb}</p>

                <ul className="mt-6 grid gap-2.5 border-t border-line pt-6">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-brand-800"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="reveal mt-12 flex flex-col items-start gap-4 rounded-3xl bg-brand-950 px-8 py-8 text-paper sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="max-w-xl font-display text-xl font-light sm:text-2xl">
            Not sure which of these you need? That is exactly what a first
            conversation is for.
          </p>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-brand-950 transition-all hover:bg-white"
          >
            Talk to us
            <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
