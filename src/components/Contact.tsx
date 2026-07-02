import { useState, type FormEvent } from 'react'
import { BUSINESS, SERVICE_GROUPS } from '../data'
import { IconPhone, IconMail, IconPin, IconClock } from './Icons'

const DETAILS = [
  {
    Icon: IconPhone,
    label: 'Call us',
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
  },
  {
    Icon: IconMail,
    label: 'Email us',
    value: BUSINESS.email,
    href: BUSINESS.emailHref,
  },
  {
    Icon: IconPin,
    label: 'Visit us',
    value: `${BUSINESS.address.line1}, ${BUSINESS.address.line2}, ${BUSINESS.address.postcode}`,
    href: 'https://maps.google.com/?q=9B+The+Broadway+Woodford+Green+IG8+0HL',
  },
  {
    Icon: IconClock,
    label: 'Opening hours',
    value: BUSINESS.hoursLabel,
    href: null,
  },
]

const inputClass =
  'w-full rounded-xl border border-line bg-paper px-4 py-3 text-navy-900 placeholder:text-mute/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const phone = String(data.get('phone') || '')
    const service = String(data.get('service') || '')
    const message = String(data.get('message') || '')

    const subject = `Enquiry from ${name || 'website'}${
      service ? ` — ${service}` : ''
    }`
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : '',
      service ? `Interested in: ${service}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `${BUSINESS.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-paper py-24 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        {/* Intro + details */}
        <div className="reveal lg:col-span-5">
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" />
            Get in touch
          </p>
          <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-navy-950 sm:text-5xl">
            Let’s bring clarity to your numbers
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate">
            Tell us a little about your business and what you need. We’ll come
            back to you promptly to arrange a free, no-obligation consultation.
          </p>

          <ul className="mt-10 space-y-3">
            {DETAILS.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-4 transition-colors group-hover:border-navy-900/15">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-950 text-accent-light">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-mute">
                      {label}
                    </p>
                    <p className="mt-0.5 font-medium text-navy-900">{value}</p>
                  </div>
                </div>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="group block"
                      {...(href.startsWith('http')
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group">{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {/* Form */}
        <div className="reveal lg:col-span-7">
          <div className="rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-10">
            {sent ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent/10 text-accent">
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium text-navy-950">
                  Nearly there
                </h3>
                <p className="mt-3 max-w-sm text-slate">
                  Your email app should have opened with your enquiry ready to
                  send. If it didn’t, email us directly at{' '}
                  <a href={BUSINESS.emailHref} className="font-medium text-accent underline">
                    {BUSINESS.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-navy-900 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-900">
                      Full name <span className="text-accent">*</span>
                    </label>
                    <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy-900">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="020 0000 0000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@company.co.uk" />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-navy-900">
                    What can we help with?
                  </label>
                  <select id="service" name="service" defaultValue="" className={`${inputClass} appearance-none`}>
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICE_GROUPS.map((g) => (
                      <option key={g.id} value={g.title}>
                        {g.title}
                      </option>
                    ))}
                    <option value="Something else">Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={4} className={`${inputClass} resize-none`} placeholder="Tell us a little about your business and what you’re looking for…" />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-navy-800 hover:shadow-lg hover:shadow-navy-900/15"
                >
                  Send enquiry
                </button>
                <p className="text-xs leading-relaxed text-mute">
                  By submitting, you agree to be contacted about your enquiry. We
                  never share your details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
