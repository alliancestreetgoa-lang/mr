import { asset } from '../lib/asset'
import { BUSINESS } from '../data'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-line bg-paper-2/60 py-24 sm:py-28">
      <div className="container-x">
        {/* Intro + photo/credential */}
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7" data-reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-accent" />
              About us
            </p>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.15] tracking-tight text-brand-950 sm:text-5xl">
              A little bit <span className="italic text-accent">about us</span>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-slate">
              At {BUSINESS.name} we pride ourselves on being a proactive team
              that delivers intelligent, innovative and transformative services
              to meet the evolving demands of today’s businesses. Our commitment
              to attracting, retaining and developing clients who share our
              ethos and passion is paramount.
            </p>

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
                  Held to the professional, ethical and technical standards of
                  one of the world’s leading accountancy bodies — so you can act
                  on our advice with confidence.
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

        {/* Detailed narrative */}
        <div className="mt-16 grid gap-x-12 gap-y-10 border-t border-line pt-14 md:grid-cols-2" data-reveal>
          <div>
            <h3 className="font-display text-2xl font-medium text-accent">
              Plan for tomorrow by understanding today
            </h3>
            <div className="mt-5 space-y-5 leading-relaxed text-slate">
              <p>
                Whether you are launching a new venture, have an established
                business, or are simply looking for guidance with your tax
                matters, we are here to provide you with reliable professional
                advice.
              </p>
              <p>
                With expertise in accounting and taxation, we recognise that few
                business and financial decisions can be made without considering
                their tax implications. By applying this knowledge to your
                business, we offer cutting-edge, value-driven services and advice
                from a team of truly innovative professionals.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-medium text-accent">
              You run your business, we’ll handle your finances
            </h3>
            <div className="mt-5 space-y-5 leading-relaxed text-slate">
              <p>
                As your accountant and business advisor, we are here to help you
                maximise the benefits and rewards available to you as well as
                minimise risks to your financial health. Our diverse expertise,
                paired with a deep understanding of your industry and best
                practices, enables us to provide tailored, evidence-based
                recommendations to suit your unique situation.
              </p>
              <p>
                We aim to give you the freedom to focus on running your business
                without getting bogged down by tedious paperwork. We can handle
                all your routine accounting, payroll, taxation and company
                secretarial tasks, allowing you to dedicate your time and
                resources to growing your business.
              </p>
            </div>
          </div>
        </div>

        <p
          className="mt-12 max-w-3xl font-display text-2xl font-light leading-snug text-accent sm:text-3xl"
          data-reveal
        >
          This is why so many individuals and companies choose to work with us.
        </p>
      </div>
    </section>
  )
}
