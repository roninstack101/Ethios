import { useState } from 'react'
import { SectionIntro, Reveal } from '../components/ui.jsx'

const FIELD_CLASS =
  'h-[45px] w-full rounded-[8px] border border-line bg-white px-4 text-[15px] font-medium text-ink placeholder:text-smoke focus:border-forest focus:outline-none'

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-1 shrink-0 text-gold">
      <path
        d="M7 1a4.4 4.4 0 0 1 4.4 4.4C11.4 8.7 7 13 7 13S2.6 8.7 2.6 5.4A4.4 4.4 0 0 1 7 1z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="7" cy="5.4" r="1.5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0 text-gold">
      <rect x="1" y="2.5" width="12" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.1" />
      <path d="M1.5 3.5L7 8l5.5-4.5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0 text-gold">
      <path
        d="M3.2 1.5h2.1l1 2.7-1.4 1a8.6 8.6 0 0 0 3.9 3.9l1-1.4 2.7 1v2.1c0 .7-.6 1.3-1.3 1.2A11.3 11.3 0 0 1 2 2.8c-.1-.7.5-1.3 1.2-1.3z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0 text-gold">
      <circle cx="7" cy="7" r="5.8" stroke="currentColor" strokeWidth="1.1" />
      <path d="M7 4v3.2L9.2 8.6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-forest">
        <div className="relative flex max-w-[1210px] flex-col items-center px-6 pt-[65px] text-center">
          <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
            Contact
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-6 max-w-[900px] text-[38px] font-bold leading-tight text-cream sm:text-[48px] lg:text-[56px]">
            Let&rsquo;s Strengthen Your Next Project
          </Reveal>
          <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-[720px] text-[17px] font-medium text-cream">
            Reach out for product guidance, technical support, or a project quote — our team responds within one
            business day.
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-[1728px] px-6 py-[64px] lg:px-12 xl:px-[115px]">
          <Reveal>
            <SectionIntro eyebrow="Get In Touch" title="Send Us a Message" />
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_minmax(0,620px)]">
            <Reveal x={-24} y={0} className="lg:order-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="rounded-[15px] border border-line bg-card p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-[13px] font-medium text-smoke">
                    Full Name
                    <input required type="text" className={`mt-2 ${FIELD_CLASS}`} placeholder="Your name" />
                  </label>
                  <label className="block text-[13px] font-medium text-smoke">
                    Phone Number
                    <input type="tel" className={`mt-2 ${FIELD_CLASS}`} placeholder="+91" />
                  </label>
                  <label className="block text-[13px] font-medium text-smoke sm:col-span-2">
                    Email Address
                    <input required type="email" className={`mt-2 ${FIELD_CLASS}`} placeholder="you@company.com" />
                  </label>
                  <label className="block text-[13px] font-medium text-smoke sm:col-span-2">
                    Company Name
                    <input type="text" className={`mt-2 ${FIELD_CLASS}`} placeholder="Company name" />
                  </label>
                  <label className="block text-[13px] font-medium text-smoke sm:col-span-2">
                    Message
                    <textarea
                      required
                      rows={5}
                      className="mt-2 w-full resize-none rounded-[8px] border border-line bg-white p-4 text-[15px] font-medium text-ink placeholder:text-smoke focus:border-forest focus:outline-none"
                      placeholder="Tell us about your project or requirement..."
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-8 flex h-11 w-full items-center justify-center rounded-full bg-forest text-[15px] font-semibold text-gold transition-opacity hover:opacity-90"
                >
                  {submitted ? 'Message Sent' : 'Send Message'}
                </button>
              </form>
            </Reveal>

            <Reveal x={24} y={0} delay={100} className="lg:order-1">
              <div className="h-full rounded-[15px] bg-forest p-6 text-cream sm:p-8">
                <h3 className="text-[22px] font-bold capitalize">Contact Information</h3>
                <p className="mt-2 text-[15px] font-medium text-line">
                  Our technical team is ready to discuss your requirements and support your project from start to
                  finish.
                </p>

                <ul className="mt-8 space-y-6 text-[15px] font-medium">
                  <li className="flex gap-3">
                    <PinIcon />
                    <span>
                      215 Symmers Business Park,
                      <br />
                      Sarkhej, Ahmedabad - 382210,
                      <br />
                      Gujarat, India
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MailIcon />
                    <a href="mailto:info@ethiosgroup.com" className="transition-colors hover:text-gold">
                      info@ethiosgroup.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <PhoneIcon />
                    <a href="tel:+917929795685" className="transition-colors hover:text-gold">
                      +91-79-29795685
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <ClockIcon />
                    <span>Mon – Sat, 9:30 AM – 6:30 PM IST</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
