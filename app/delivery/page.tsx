import type { Metadata } from 'next'
import { PolicyShell, Section } from '@/components/Policy'
import { APP_URL, BUSINESS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Service Delivery Policy',
  description: 'bhusku products are online services: nothing is shipped, and a paid plan starts as soon as payment is confirmed.',
  alternates: { canonical: '/delivery' },
}

export default function DeliveryPage() {
  return (
    <PolicyShell
      updated="delivery"
      title="Service Delivery Policy"
      intro="bhusku products, including schedU, are software used in a web browser. Nothing is shipped: a plan is delivered by switching it on for your account."
    >
      <Section heading="1. How a plan is delivered">
        <ul>
          <li>
            The Free plan is available as soon as you create an account at{' '}
            <a href={APP_URL}>{APP_URL.replace('https://', '')}</a>.
          </li>
          <li>
            A paid plan starts as soon as Razorpay confirms the payment, usually within a minute. The Subscription page in the
            app shows your plan, and Razorpay emails you a receipt.
          </li>
          <li>Renewals continue the plan without interruption on the renewal date.</li>
          <li>Enterprise plans start on the date set in the institution&rsquo;s agreement.</li>
        </ul>
      </Section>

      <Section heading="2. If your plan has not started">
        <p>
          If you have paid and the app still shows your earlier plan after 30 minutes, email{' '}
          <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> with the payment date and amount. We will switch the plan on, or
          refund the payment as our <a href="/refunds">Cancellation &amp; Refund Policy</a> describes.
        </p>
      </Section>

      <Section heading="3. Where the service is provided">
        <p>Anywhere with an internet connection and a modern web browser. Prices are in Indian Rupees.</p>
      </Section>

      <Section heading="4. Contact">
        <p>
          {BUSINESS.entityLine}. Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
          {BUSINESS.phone && <> or call {BUSINESS.phone}</>}.
        </p>
      </Section>
    </PolicyShell>
  )
}
