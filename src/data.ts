export const BUSINESS = {
  name: 'M.R. Accountants',
  tagline: 'Accounting is the art of turning chaos into clarity.',
  phone: '020 3432 9138',
  phoneHref: 'tel:+442034329138',
  email: 'info@mraccountants.com',
  emailHref: 'mailto:info@mraccountants.com',
  address: {
    line1: '9B The Broadway',
    line2: 'Woodford Green, Essex',
    postcode: 'IG8 0HL',
  },
  hoursLabel: 'Mon–Fri, 9:00 – 17:30',
}

export type ServiceGroup = {
  id: string
  title: string
  blurb: string
  items: string[]
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'accounting',
    title: 'Accounting & Payroll',
    blurb:
      'The dependable core — books, statutory accounts and payroll handled with precision, so your numbers are always ready when you need them.',
    items: [
      'Online & cloud accounting',
      'Outsourced accounting',
      'Assurance & business process',
      'Payroll & auto-enrolment',
    ],
  },
  {
    id: 'tax',
    title: 'Tax Advisory & Planning',
    blurb:
      'Forward-looking tax strategy that keeps you compliant and keeps more of what you earn — from corporate structure to cross-border planning.',
    items: [
      'Corporate & personal tax planning',
      'International tax planning',
      'VAT & customs duty',
      'R&D and other tax reliefs',
      'Tax investigations',
    ],
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    blurb:
      'A commercial partner for the decisions that shape your growth — funding, acquisitions, expansion and the plans behind them.',
    items: [
      'Acquisitions & disposals',
      'Expansion & improvement',
      'Funding & asset finance',
      'Litigation support & forensic',
      'Outsourced HR consultancy',
    ],
  },
  {
    id: 'private',
    title: 'Private Client & Wealth',
    blurb:
      'Considered advice for individuals and families — protecting wealth today and passing it on with intent tomorrow.',
    items: [
      'Wealth planning & private client',
      'Will & inheritance tax planning',
      'Commercial & residential mortgage lending',
      'Not-for-profit: charity, CIC & CIO accounts',
    ],
  },
]

export type HelpCategory = { title: string; items: string[] }

// Full services directory (mirrors the firm's "How we can help you?" listing)
export const HELP_DIRECTORY: HelpCategory[] = [
  {
    title: 'Assurance',
    items: ['Accounting'],
  },
  {
    title: 'Business process',
    items: [
      'Online accounting',
      'Outsourced accounting',
      'Outsourced HR consultancy services',
      'Payroll',
    ],
  },
  {
    title: 'Business advisory',
    items: [
      'Acquisitions & disposals',
      'Expansion & improvement',
      'Funding & asset finance',
      'Litigation support & forensic',
    ],
  },
  {
    title: 'Tax advisory',
    items: [
      'Corporate tax planning',
      'International tax planning',
      'Personal tax planning',
      'Tax investigations',
      'Tax reliefs (including R&D)',
      'VAT & customs duty',
      'Wealth planning & private client',
      'Commercial and residential mortgage lending',
      'Will and inheritance tax',
    ],
  },
  {
    title: 'Not for profit services',
    items: ['Charity accounts', 'CIC accounts', 'CIO accounts'],
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Discovery',
    text: 'We start with a conversation — understanding your business, your goals and where the numbers hurt today.',
  },
  {
    step: '02',
    title: 'Diagnosis',
    text: 'We review your position with a fresh, expert eye and pinpoint the risks, savings and opportunities that matter.',
  },
  {
    step: '03',
    title: 'A clear plan',
    text: 'You receive a straightforward plan — what we will do, what it means for you, and what it is worth.',
  },
  {
    step: '04',
    title: 'Ongoing clarity',
    text: 'We keep you compliant and informed year-round, so decisions are made on facts, never guesswork.',
  },
]

export const STATS = [
  { value: 'ACCA', label: 'Chartered Certified' },
  { value: '20+', label: 'Areas of expertise' },
  { value: 'Essex', label: 'Rooted locally' },
  { value: '1:1', label: 'Partner-led service' },
]
