import { motion } from 'framer-motion'
import { PROCESS } from '../data'
import { revealProps, revealDelay } from '../lib/motion'

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-paper py-24 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <motion.div className="lg:col-span-6" {...revealProps}>
            <p className="eyebrow">
              <span className="h-px w-8 bg-accent" />
              How we work
            </p>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-brand-950 sm:text-5xl">
              A calm, considered path to clarity
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              Working with a new accountant should feel reassuring, not daunting.
              Here is exactly what to expect.
            </p>
          </motion.div>

          <motion.div className="lg:col-span-6" {...revealProps}>
            <div className="overflow-hidden rounded-3xl border border-line shadow-sm">
              <img
                src="/images/process.jpg"
                alt="An M.R. Accountants adviser planning with a client over documents"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <motion.li
              key={p.step}
              className="relative flex flex-col rounded-2xl border border-line bg-white p-7"
              {...revealDelay(i)}
            >
              <span className="font-display text-4xl font-light text-accent">
                {p.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-brand-950">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">
                {p.text}
              </p>
              {i < PROCESS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-3 top-10 hidden text-line lg:block"
                >
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 12h12M13 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
