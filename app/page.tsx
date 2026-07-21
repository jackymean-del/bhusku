import Link from 'next/link'
import { BrandChrome } from '@/components/BrandChrome'
import { BhuskuMark } from '@/components/Logo'
import { HeroNet } from '@/components/HeroNet'
import { Reveal } from '@/components/Reveal'
import { BRAND, PRODUCTS, BUSINESS, SCHEDU_URL } from '@/lib/site'

// Hero headline, split for the staggered word-reveal (à la anthropic.com).
const HERO_WORDS = [
  { t: 'Calm,', accent: true }, { t: 'capable', accent: true }, { t: 'software' },
  { t: 'for' }, { t: 'the' }, { t: 'work' }, { t: 'people' }, { t: 'actually' }, { t: 'do.' },
]

// Honest credibility markers — no fabricated logos, testimonials, or metrics.
const TRUST = [
  { title: 'Founder-led & independent', body: 'No investors, no bloat — the people building make the calls.' },
  { title: 'Live in production', body: 'schedU is available today, with more products in the works.' },
  { title: 'Honest by default', body: 'Transparent pricing, secure INR billing, and no dark patterns.' },
]

const PRINCIPLES = [
  { n: '01', title: 'Craft over clutter', body: 'Every screen earns its place. We remove before we add, so the tool gets out of the way of the work.' },
  { n: '02', title: 'Built for the real day', body: 'Software modelled on how people actually work — messy timetables, last-minute changes, real constraints.' },
  { n: '03', title: 'Honest by default', body: 'Clear pricing, no dark patterns, and features that do what they say. If it isn’t ready, we say so.' },
]

const SCHEDU_FEATURES = [
  'Conflict-free timetables',
  'Substitutions & live ops',
  'Workload analytics',
  'Any board or curriculum',
]

const EYEBROW = 'mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#9A95BC]'
const H2 = 'text-[clamp(25px,3.5vw,36px)] font-bold leading-[1.15] tracking-[-0.7px] text-[#13111E]'

export default function Home() {
  return (
    <BrandChrome>
      {/* ── Hero — first section after the nav, anthropic.com-style ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F5] to-white px-6 pb-24 pt-[72px] sm:px-12">
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-[640px]">
            <span
              className="reveal-fade inline-block rounded-full border border-[#ECE6DC] bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#9A8A5E]"
              style={{ animationDelay: '80ms' }}
            >
              Tech &amp; Creative Studio
            </span>
            <h1 className="mt-6 text-[clamp(36px,5.4vw,62px)] font-extrabold leading-[1.04] tracking-[-1.6px] text-[#13111E]">
              <span className="sr-only">Calm, capable software for the work people actually do.</span>
              <span aria-hidden="true">
                {HERO_WORDS.map((w, i) => (
                  <span key={i} className="reveal-word mr-[0.26em]" style={{ animationDelay: `${140 + i * 55}ms` }}>
                    <span className={w.accent ? 'text-[#7C6FE0]' : ''}>{w.t}</span>
                  </span>
                ))}
              </span>
            </h1>
            <p
              className="reveal-fade mt-6 max-w-[540px] text-[16.5px] leading-[1.75] text-[#4B5275]"
              style={{ animationDelay: '640ms' }}
            >
              bhusku is an independent tech &amp; creative studio. We sweat the details until the tools
              disappear and the work gets easier — schedU is our first product, with more on the way.
            </p>
            <div className="reveal-fade mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: '740ms' }}>
              <a href={SCHEDU_URL} className="no-underline">
                <button className="rounded-[10px] bg-[#13111E] px-6 py-[13px] text-[14px] font-bold text-white">
                  Explore schedU →
                </button>
              </a>
              <Link href="/contact" className="no-underline">
                <button className="rounded-[10px] border border-[#E8E4FF] bg-white px-6 py-[13px] text-[14px] font-bold text-[#4B5275] transition-colors hover:border-[#7C6FE0] hover:text-[#7C6FE0]">
                  Get in touch
                </button>
              </Link>
            </div>
            <p
              className="reveal-fade mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[12.5px] text-[#9A95BC]"
              style={{ animationDelay: '840ms' }}
            >
              <span>Independent studio</span><span aria-hidden="true">·</span>
              <span>schedU live in production</span><span aria-hidden="true">·</span>
              <span>Secure INR billing</span>
            </p>
          </div>

          <div className="reveal-fade hidden lg:block" style={{ animationDelay: '320ms' }}>
            <HeroNet />
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-y border-[#F0EDE6] bg-white px-6 py-9 sm:px-12">
        <div className="mx-auto grid max-w-[1080px] gap-7 sm:grid-cols-3">
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={i * 90} className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D4920E]" aria-hidden="true" />
              <span>
                <span className="block text-[13.5px] font-bold text-[#13111E]">{t.title}</span>
                <span className="mt-1 block text-[12.5px] leading-[1.6] text-[#6B6785]">{t.body}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Who we are ── */}
      <section id="about" className="border-t border-[#F3F0EA] bg-white px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-[1080px]">
          <Reveal>
            <p className={EYEBROW}>Who we are</p>
            <h2 className={`max-w-[760px] ${H2}`}>
              An independent studio, building software that respects your time.
            </h2>
            <p className="mt-5 max-w-[620px] text-[15.5px] leading-[1.8] text-[#4B5275]">
              bhusku is small and founder-led. We’d rather ship one tool that truly works than ten that
              almost do. Every product starts from how people actually work — then we remove until only
              the useful remains.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="h-full rounded-[16px] border border-[#EFEBFF] bg-[#FCFBFF] px-[22px] py-6 transition-colors hover:border-[#DED6FF]">
                  <span className="font-mono text-[12px] font-medium text-[#C6A24A]">{p.n}</span>
                  <h3 className="mt-3 text-[15.5px] font-bold text-[#13111E]">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-[1.7] text-[#4B5275]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we build ── */}
      <section id="products" className="border-t border-[#F3F0EA] bg-[#FAF9F5] px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-[1080px]">
          <Reveal>
            <p className={EYEBROW}>What we build</p>
            <h2 className={H2}>Our products</h2>
          </Reveal>

          <div className="mt-10 grid gap-5">
            {PRODUCTS.map(p => (
              <Reveal key={p.name} delay={80}>
                <a href={p.href} className="group block no-underline">
                  <div className="bm-hover flex flex-col gap-5 rounded-[18px] border border-[#E8E4FF] bg-white p-7 transition-all hover:border-[#D2C9FF] sm:flex-row sm:p-8">
                    <BhuskuMark size={58} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[20px] font-black tracking-[-0.4px] text-[#13111E]">
                          sched<span className="italic text-[#7C6FE0]">U</span>
                        </span>
                        <span className="rounded-full bg-[#EDFBF3] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wide text-[#16A34A]">Live</span>
                        <span className="ml-auto shrink-0 text-[14px] font-bold text-[#4B5275] transition-colors group-hover:text-[#7C6FE0]">
                          Visit →
                        </span>
                      </div>
                      <p className="mt-2 text-[13.5px] font-semibold text-[#7C6FE0]">{p.tagline}</p>
                      <p className="mt-2 max-w-[620px] text-[13.5px] leading-[1.7] text-[#4B5275]">{p.blurb}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {SCHEDU_FEATURES.map(f => (
                          <span key={f} className="rounded-full border border-[#ECE7FF] bg-[#FBFAFF] px-3 py-1 text-[11.5px] font-medium text-[#6B6398]">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={120}>
              <div className="rounded-[18px] border border-dashed border-[#E0D9F5] bg-white/50 px-7 py-6 text-[13.5px] text-[#9A95BC]">
                More products in the works — <Link href="/contact" className="font-semibold text-[#7C6FE0] no-underline">say hello</Link> if you want to hear first.
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pricing transparency ── */}
      <section id="pricing" className="border-t border-[#F3F0EA] bg-white px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-[1080px]">
          <Reveal>
            <p className={EYEBROW}>What we charge for</p>
            <h2 className={H2}>Simple, honest pricing</h2>
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-8 max-w-[720px] rounded-[18px] border border-[#EFEBFF] bg-[#FCFBFF] p-7 sm:p-8">
              <p className="text-[15px] leading-[1.8] text-[#4B5275]">
                Our products are free to start. schedU offers an optional <strong className="text-[#13111E]">Pro</strong> plan
                billed securely in INR via Razorpay (UPI, cards &amp; netbanking) —{' '}
                <strong className="text-[#13111E]">₹{BUSINESS.proMonthlyINR}/month</strong> or{' '}
                <strong className="text-[#13111E]">₹{BUSINESS.proYearlyINR.toLocaleString('en-IN')}/year</strong>.
                Cancel anytime; access continues to the end of the billing period.
              </p>
              <a href={`${SCHEDU_URL}/pricing`} className="mt-6 inline-block no-underline">
                <button className="rounded-[10px] border border-[#E8E4FF] bg-white px-6 py-3 text-[14px] font-bold text-[#4B5275] transition-colors hover:border-[#7C6FE0] hover:text-[#7C6FE0]">
                  See schedU pricing →
                </button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-[#13111E] px-6 py-20 sm:px-12">
        <Reveal className="mx-auto max-w-[620px] text-center">
          <h2 className="mx-auto max-w-[560px] text-[clamp(24px,3.5vw,32px)] font-bold leading-[1.25] tracking-[-0.5px] text-white">
            Working on something we should build?
          </h2>
          <p className="mx-auto mt-3 max-w-[460px] text-[14.5px] leading-[1.7] text-[#C4C0E8]">
            Partnerships, feedback, or just curious — we read every message.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="no-underline">
              <button className="rounded-[10px] bg-white px-6 py-[13px] text-[14px] font-bold text-[#13111E]">
                Contact bhusku
              </button>
            </Link>
            <a href={`mailto:${BRAND.email}`} className="text-[13.5px] font-semibold text-[#C4C0E8] no-underline transition-colors hover:text-white">
              {BRAND.email}
            </a>
          </div>
        </Reveal>
      </section>
    </BrandChrome>
  )
}
