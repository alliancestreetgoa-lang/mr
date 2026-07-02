const POINTS = [
  'ACCA Chartered Certified',
  'Partner-led advice',
  'Fixed, transparent fees',
  'Cloud-first accounting',
]

export function TrustBar() {
  return (
    <section aria-label="Why clients trust us" className="border-b border-line bg-paper">
      <div className="container-x">
        <ul className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {POINTS.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 py-5 sm:justify-center sm:px-4"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-sm font-medium text-brand-800">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
