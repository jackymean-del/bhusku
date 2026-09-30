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
  // Kept in sync with schedU's checkout (frontend subscription page + backend
  // billing config). If pricing changes, update all three.
  proMonthlyINR: 333,
  proYearlyINR: 3333,
}

export const PRODUCTS = [
  {
    name: 'schedU',
    tagline: 'AI timetable scheduling for any institution',
    blurb:
      'Auto-generate conflict-free timetables for schools, colleges, and universities - any board, any curriculum. Live operations, substitutions, and workload analytics included.',
    href: SCHEDU_URL,
    status: 'live' as const,
    markColor: '#7C6FE0',
  },
]

// Human-readable "last updated" for the policy pages. Update when you edit them.
export const POLICY_UPDATED = '20 July 2026'
