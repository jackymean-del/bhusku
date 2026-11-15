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
  email: 'hello@bhusku.com',
  // What search results and link previews show for the homepage.
  seoTitle: 'bhusku - Human-made software, starting with schedU',
  seoDescription:
    'Human-made software from Sambalpur, India. schedU builds conflict-free timetables with transparent, explainable logic - human intelligence, not black-box AI.',
}

// Business identity shown on the site and policy pages. By the owner's choice
// the site names only the bhusku business and its email - no personal name or
// phone number.
export const BUSINESS = {
  email: 'hello@bhusku.com',
  address: ['Bhusku', 'Sambalpur, Odisha', 'India'],
  jurisdiction: 'Sambalpur, Odisha', // courts of this place govern disputes
  // Kept in sync with schedU's plans (schedu.bhusku.com/pricing, the app's
  // subscription page and the backend billing config). Pro is priced per
  // block of proStaffPerUnit staff; Enterprise starts above enterpriseAbove.
  freeStaff: 20,
  proStaffPerUnit: 40,
  proMonthlyINR: 333,
  proYearlyINR: 3333,
  enterpriseAbove: 200,
}

export const PRODUCTS = [
  {
    name: 'schedU',
    tagline: 'Built with human intelligence, not black-box AI.',
    blurb:
      'A real timetable isn’t a guess. schedU is the lived experience of building real schedules - the rules, the edge cases, the fairness - planned, turned into transparent logic, and implemented so you can see exactly why every decision was made. Predictable, explainable, and yours to override.',
    href: SCHEDU_URL,
  },
]

// Human-readable "last updated" dates for the policy pages. Update the one
// for a page whenever its wording changes.
export const POLICY_UPDATED = {
  terms: '16 November 2026',
  privacy: '20 July 2026',
  refunds: '16 November 2026',
  delivery: '16 November 2026',
}
