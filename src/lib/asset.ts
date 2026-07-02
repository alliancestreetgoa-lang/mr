/**
 * Resolve a public-asset path against Vite's base URL so it works both at
 * the site root (dev / Netlify) and under a subpath (GitHub Pages: /mr/).
 */
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
