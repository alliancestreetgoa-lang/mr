# M.R. Accountants — Website

Custom rebuild of [mraccountants.com](https://www.mraccountants.com/) — a one-page,
premium marketing site for M.R. Accountants, ACCA chartered certified accountants in
Woodford Green, Essex. Replaces the previous Wix site.

## Stack

- **React 19 + TypeScript** (Vite)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- Fonts: **Fraunces** (editorial display serif) + **Inter** (body) via Google Fonts
- No backend — a single static bundle you can host anywhere (Netlify, Vercel, S3…)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Design system

Defined as CSS variables in `src/index.css` (`@theme`):

- **Navy** scale (`navy-950` … `navy-600`) — brand + dark sections
- **Accent** blue (`accent` `#0369A1`, `accent-light` `#0EA5E9`) — CTAs & highlights
- **Paper** (`#F8FAFC`) light background, white cards, `line` borders
- Section reveal-on-scroll via `.reveal` + `src/lib/useReveal.ts`
  (respects `prefers-reduced-motion`)

## Content

All copy and business facts live in **`src/data.ts`** — services, process steps,
stats, phone/email/address. Edit that one file to update the site's content.

Business details baked in:
- 9B The Broadway, Woodford Green, Essex, IG8 0HL
- Tel 020 3432 9138 · info@mraccountants.com
- ACCA Chartered Certified

## Deploy (Netlify)

`netlify.toml` is committed — connect the repo in Netlify and it builds automatically
(`npm run build` → `dist`), with an SPA fallback and cache headers for hashed assets.

## Contact form (Netlify Forms — live)

The form in `src/components/Contact.tsx` submits **server-side via Netlify Forms** — no
backend or third-party account needed. Submissions appear under **Forms** in the Netlify
dashboard; add a notification email/Slack there to get pinged on each enquiry.

How it's wired:
- A hidden static `<form name="contact">` in `index.html` lets Netlify detect the form at
  build time (React forms are invisible to its crawler otherwise).
- The live React form AJAX-`POST`s url-encoded data to `/` with `form-name=contact`.
- A `bot-field` honeypot filters spam.

**Field names must stay in sync** between the hidden form in `index.html` and the React
form. To swap to Formspree/Basin instead, point the `fetch` in `handleSubmit` at your
endpoint.

> **Note:** Netlify Forms only work on a deployed Netlify site — submitting on `localhost`
> will show the error state. That's expected.

## Structure

```
src/
  App.tsx              # page composition
  data.ts              # ← all editable content
  index.css            # theme tokens, fonts, base styles
  lib/useReveal.ts     # scroll-reveal hook
  components/
    Nav, Hero, TrustBar, Services, About,
    Process, Testimonial, Contact, Footer, Icons
```
