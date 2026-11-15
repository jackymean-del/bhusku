import type { Metadata } from 'next'
import { PolicyShell, Section } from '@/components/Policy'
import { BUSINESS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy',
  description: 'Payments for bhusku products are final. Try the Free plan first, cancel any time, and keep your plan until the period you paid for ends.',
  alternates: { canonical: '/refunds' },
}

export default function RefundsPage() {
  return (
    <PolicyShell
      updated="refunds"
      title="Cancellation & Refund Policy"
      intro="This policy covers subscriptions, cancellations and payments for paid plans on bhusku products, including schedU Pro."
    >
      <Section heading="1. Who you pay">
        <p>
          All payments are processed by Razorpay and made to <strong>bhusku</strong>.
        </p>
      </Section>

      <Section heading="2. No refunds">
        <p>
          All payments for subscription plans are final and non-refundable. Once a payment has been processed, we do not give
          refunds, credits or prorated amounts for any unused part of a subscription period, whatever the reason for cancelling.
          This applies to monthly and yearly plans alike.
        </p>
      </Section>

      <Section heading="3. Try it free first">
        <p>
          Every account can use the Free plan at no cost and with no time limit. On schedU, Free covers institutions of up to{' '}
          {BUSINESS.freeStaff} staff and makes clash-free timetables with every view, Excel and PDF. Running the working day (cover and
          substitution, the live view and corridor board, parallel groups, syllabus tracking, calendar and share links, and reports)
          needs a paid plan.
        </p>
        <p>
          We strongly encourage you to use the Free plan, and to{' '}
          <a href={`mailto:${BUSINESS.email}`}>ask us for a demonstration</a>, before buying any paid plan. That way you can be sure
          the product meets your needs before you make a financial commitment.
        </p>
      </Section>

      <Section heading="4. Cancelling">
        <p>
          You can cancel a subscription at any time from the Subscription page in the app. No reason or notice is needed. You keep
          your paid features until the end of the month or year you have already paid for, and you are not charged again.
        </p>
        <p>
          After that, the account moves to the Free plan. Paid features stop, but nothing is deleted: your timetables stay and can
          still be viewed and exported. No partial refund is given for cancelling early.
        </p>
      </Section>

      <Section heading="5. Billing errors">
        <p>
          The only exception is a mistake in billing: a duplicate charge, a charge after you cancelled, or an amount different from
          the price shown at checkout. Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> with the payment date and
          amount, and we will return the amount charged in error to the original payment method. If a payment fails but money
          leaves your account, Razorpay and your bank reverse it automatically.
        </p>
      </Section>

      <Section heading="6. Enterprise plans">
        <p>Enterprise plans follow the payment terms in the institution&rsquo;s written agreement.</p>
      </Section>

      <Section heading="7. Contact">
        <p>
          Questions about billing? Email <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
        </p>
      </Section>
    </PolicyShell>
  )
}
