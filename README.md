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

## Contact form

The form in `src/components/Contact.tsx` currently opens the visitor's email client
(`mailto:`) pre-filled with their enquiry. This works with zero backend but depends on
the visitor having an email app configured.

**To make it a true server-side form**, swap the `handleSubmit` in `Contact.tsx` for one
of:

- **Netlify Forms** — add `data-netlify="true"` + a hidden form; no code backend needed.
- **Formspree / Basin** — `POST` the `FormData` to your endpoint with `fetch`.

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
