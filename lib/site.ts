/**
 * bhusku parent-brand constants + business identity.
 *
 * The BUSINESS.* fields below feed the legal/policy pages and Razorpay
 * onboarding. Keep them matching the proprietor's KYC details.
 */
export const SITE_URL = 'https://bhusku.com'
export const APP_URL = 'https://app.schedu.bhusku.com'
export const SCHEDU_URL = 'https://schedu.bhusku.com'

export const BRAND = {
  name: 'bhusku',
  tagline: 'Heavy on craft. Full of energy.',
  blurb:
    'bhusku is an independent tech & creative studio building calm, capable software for the work people actually do. We sweat the details so the tools disappear and the work gets easier.',
  email: 'hello@bhusku.com',
  // What search results and link previews show for the homepage.
  seoTitle: 'bhusku - Human-made software, starting with SchedU',
  seoDescription:
    'Human-made software from Sambalpur, India. SchedU builds conflict-free timetables with transparent, explainable logic - human intelligence, not black-box AI.',
}

// Business/legal identity - sole proprietorship.
export const BUSINESS = {
  // The proprietor's full legal name (as on PAN / bank account used for payouts).
  legalName: 'Jugal K. Sunar',
  // "<Legal name> (sole proprietor), trading as bhusku"
  entityLine: 'Jugal K. Sunar (sole proprietor), trading as bhusku',
  email: 'hello@bhusku.com',
  // Optional but recommended for Razorpay + trust.
  phone: '+91 96923 31138',
  address: ['Bhusku', 'Sambalpur, Odisha', 'India'],
  jurisdiction: 'Sambalpur, Odisha', // courts of this place govern disputes
  // Kept in sync with SchedU's checkout (frontend subscription page + backend
  // billing config). If pricing changes, update all three.
  proMonthlyINR: 333,
  proYearlyINR: 3333,
}

export const PRODUCTS = [
  {
    name: 'SchedU',
    tagline: 'Built with human intelligence, not black-box AI.',
    blurb:
      'A real timetable isn’t a guess. SchedU is the lived experience of building real schedules - the rules, the edge cases, the fairness - planned, turned into transparent logic, and implemented so you can see exactly why every decision was made. Predictable, explainable, and yours to override.',
    href: SCHEDU_URL,
    status: 'live' as const,
    markColor: '#7C6FE0',
  },
]

// Human-readable "last updated" for the policy pages. Update when you edit them.
export const POLICY_UPDATED = '20 July 2026'
