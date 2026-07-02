import { useState } from 'react'
import { HELP_DIRECTORY, type HelpService } from '../data'
import { IconArrow } from './Icons'
import { ServiceModal } from './ServiceModal'

export function HelpDirectory() {
  const [active, setActive] = useState<{
    service: HelpService
    category: string
  } | null>(null)

  return (
    <section
      id="help"
      className="scroll-mt-20 border-y border-line bg-paper-2/50 py-24 sm:py-28"
    >
      <div className="container-x grid gap-12 lg:grid-cols-12">
        {/* Heading column */}
        <div className="reveal lg:col-span-4">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            Full service list
          </p>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] tracking-tight text-brand-950 sm:text-5xl">
            How we can{' '}
            <span className="italic text-accent">help you?</span>
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-slate">
            Every service we offer, in one place — from day-to-day compliance to
            specialist tax and advisory work. Select any service to learn more.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-paper transition-all hover:bg-brand-800 hover:shadow-lg hover:shadow-brand-900/15"
          >
            Discuss your needs
            <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Directory columns */}
        <div className="reveal lg:col-span-8">
          <div className="gap-x-10 sm:columns-2">
            {HELP_DIRECTORY.map((cat) => (
              <div key={cat.title} className="mb-9 break-inside-avoid">
                <h3 className="font-display text-lg font-semibold text-accent">
                  {cat.title}
                </h3>
                <ul className="mt-3 space-y-1 border-t border-line pt-3">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <button
                        type="button"
                        onClick={() =>
                          setActive({ service: item, category: cat.title })
                        }
                        aria-haspopup="dialog"
                        className="group flex w-full items-start gap-2.5 rounded-md py-1.5 text-left text-[0.95rem] leading-snug text-slate transition-colors hover:text-brand-950"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage transition-colors group-hover:bg-accent" />
                        <span className="underline-offset-4 group-hover:underline">
                          {item.name}
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          className="ml-auto mt-0.5 h-4 w-4 shrink-0 -translate-x-1 text-transparent transition-all group-hover:translate-x-0 group-hover:text-accent"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ServiceModal
        service={active?.service ?? null}
        category={active?.category ?? null}
        onClose={() => setActive(null)}
      />
    </section>
  )
}
