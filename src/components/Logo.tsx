import { useState } from 'react'

/**
 * Renders the firm's logo from /logo.png (drop the file into public/).
 * Until that file exists — or if it fails to load — it falls back to a
 * clean green "MR" wordmark so the layout never looks broken.
 *
 * `onDark` swaps the fallback wordmark colour for use over dark sections.
 */
export function Logo({
  className = '',
  onDark = false,
}: {
  className?: string
  onDark?: boolean
}) {
  const [failed, setFailed] = useState(false)

  if (!failed) {
    return (
      <img
        src="/logo.png"
        alt="M.R. Accountants"
        className={className}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <span
      className={`font-display text-xl font-semibold tracking-tight ${
        onDark ? 'text-white' : 'text-brand-950'
      }`}
    >
      M<span className="text-accent-light">R</span>
      <span className={onDark ? 'text-white/70' : 'text-slate'}>
        {' '}
        Accountants
      </span>
    </span>
  )
}
