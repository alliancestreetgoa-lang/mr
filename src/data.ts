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

export type HelpService = { name: string; blurb: string; points: string[] }
export type HelpCategory = { title: string; items: HelpService[] }

// Full services directory (mirrors the firm's "How we can help you?" listing).
// Each item is clickable and opens a detail modal.
export const HELP_DIRECTORY: HelpCategory[] = [
  {
    title: 'Assurance',
    items: [
      {
        name: 'Accounting',
        blurb:
          'Accurate, timely financial statements you can stand behind. We prepare statutory accounts to the required standards, giving lenders, investors and HMRC full confidence in your numbers.',
        points: [
          'Statutory year-end accounts',
          'Management accounts & reporting',
          'Compliance with UK GAAP / FRS',
        ],
      },
    ],
  },
  {
    title: 'Business process',
    items: [
      {
        name: 'Online accounting',
        blurb:
          'Cloud bookkeeping on platforms like Xero and QuickBooks, giving you a real-time view of your finances from anywhere — with less admin and fewer surprises.',
        points: [
          'Xero / QuickBooks setup & training',
          'Bank feeds & reconciliation',
          'Real-time financial dashboards',
        ],
      },
      {
        name: 'Outsourced accounting',
        blurb:
          'Hand your finance function to us. Bookkeeping, reconciliations and reporting are handled end-to-end, so you get accurate numbers without hiring in-house.',
        points: [
          'Full-service bookkeeping',
          'Monthly management reporting',
          'Scales as your business grows',
        ],
      },
      {
        name: 'Outsourced HR consultancy services',
        blurb:
          'Practical HR support for growing teams — contracts, policies and day-to-day guidance that keep you compliant and your people well looked after.',
        points: [
          'Employment contracts & policies',
          'Onboarding & compliance',
          'Ongoing HR advice',
        ],
      },
      {
        name: 'Payroll',
        blurb:
          'Reliable, fully-managed payroll. Accurate pay runs, payslips, RTI submissions and auto-enrolment handled every period, on time, every time.',
        points: [
          'PAYE & RTI submissions',
          'Auto-enrolment pensions',
          'Payslips & period reporting',
        ],
      },
    ],
  },
  {
    title: 'Business advisory',
    items: [
      {
        name: 'Acquisitions & disposals',
        blurb:
          'Expert support through buying or selling a business — from valuation and due diligence to deal structuring and completion — protecting value at every step.',
        points: [
          'Valuations & due diligence',
          'Deal structuring',
          'Negotiation support',
        ],
      },
      {
        name: 'Expansion & improvement',
        blurb:
          'Clear financial modelling and advice to grow profitably. We test plans, improve margins and make sure the numbers stack up before you commit.',
        points: [
          'Growth & scenario modelling',
          'Profitability review',
          'Budgeting & KPIs',
        ],
      },
      {
        name: 'Funding & asset finance',
        blurb:
          'Help securing the right funding — from bank lending and asset finance to grants — with well-prepared applications that lenders trust.',
        points: [
          'Funding strategy',
          'Lender-ready forecasts',
          'Asset & invoice finance',
        ],
      },
      {
        name: 'Litigation support & forensic',
        blurb:
          'Independent forensic accounting and expert analysis for disputes, investigations and legal proceedings — clear, credible and court-ready.',
        points: [
          'Forensic investigation',
          'Expert witness reports',
          'Dispute & fraud support',
        ],
      },
    ],
  },
  {
    title: 'Tax advisory',
    items: [
      {
        name: 'Corporate tax planning',
        blurb:
          'Proactive planning that keeps your company compliant and tax-efficient. Reliefs, structure and timing are handled so you never pay more than you should.',
        points: [
          'Corporation tax returns',
          'Reliefs & allowances',
          'Group & structure planning',
        ],
      },
      {
        name: 'International tax planning',
        blurb:
          'Cross-border tax advice for businesses and individuals operating internationally — managing residency, double taxation and global structuring.',
        points: [
          'Residency & domicile',
          'Double-tax treaties',
          'Cross-border structuring',
        ],
      },
      {
        name: 'Personal tax planning',
        blurb:
          'Personal tax structured around your goals. Income, investments and assets are arranged efficiently, with self-assessment handled accurately and on time.',
        points: [
          'Self-assessment returns',
          'Income & CGT planning',
          'Allowance optimisation',
        ],
      },
      {
        name: 'Tax investigations',
        blurb:
          'Calm, expert representation if HMRC opens an enquiry. We manage the process, correspondence and negotiation to reach the best possible outcome.',
        points: [
          'HMRC enquiry handling',
          'Voluntary disclosures',
          'Settlement negotiation',
        ],
      },
      {
        name: 'Tax reliefs (including R&D)',
        blurb:
          'Identifying and claiming the reliefs you are entitled to — including R&D tax credits — to put real money back into your business.',
        points: [
          'R&D tax credits',
          'Capital allowances',
          'Creative & other reliefs',
        ],
      },
      {
        name: 'VAT & customs duty',
        blurb:
          'Practical VAT and customs advice — registration, returns, schemes and cross-border duty — keeping you compliant and cash-flow smart.',
        points: [
          'VAT registration & returns',
          'Schemes & Making Tax Digital',
          'Customs & import duty',
        ],
      },
      {
        name: 'Wealth planning & private client',
        blurb:
          'Considered advice for individuals and families — protecting and growing wealth with tax-efficient planning across income, investments and estates.',
        points: [
          'Tax-efficient investing',
          'Estate & succession planning',
          'Retirement planning',
        ],
      },
      {
        name: 'Commercial and residential mortgage lending',
        blurb:
          'Support arranging commercial and residential mortgage finance, with well-prepared, lender-ready applications backed by robust figures.',
        points: [
          'Commercial mortgages',
          'Buy-to-let & residential',
          'Lender-ready accounts',
        ],
      },
      {
        name: 'Will and inheritance tax',
        blurb:
          'Plan ahead to protect your estate. Wills, trusts and inheritance tax strategies help pass on more of your wealth to the people who matter.',
        points: [
          'Inheritance tax planning',
          'Wills & trusts',
          'Gifting strategies',
        ],
      },
    ],
  },
  {
    title: 'Not for profit services',
    items: [
      {
        name: 'Charity accounts',
        blurb:
          'Specialist accounting for charities — SORP-compliant accounts, independent examination and reporting that satisfy trustees, funders and the Charity Commission.',
        points: [
          'Charity SORP accounts',
          'Independent examination',
          'Trustee reporting',
        ],
      },
      {
        name: 'CIC accounts',
        blurb:
          'Accounts and compliance for Community Interest Companies — meeting your CIC34 and reporting duties while keeping your social mission front and centre.',
        points: [
          'CIC34 community report',
          'Statutory accounts',
          'Regulator compliance',
        ],
      },
      {
        name: 'CIO accounts',
        blurb:
          'End-to-end accounting for Charitable Incorporated Organisations — statutory accounts and Charity Commission filings handled with sector expertise.',
        points: [
          'CIO statutory accounts',
          'Charity Commission filing',
          'SORP compliance',
        ],
      },
    ],
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
