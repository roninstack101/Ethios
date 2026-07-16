import { useState } from 'react'
import { ENQUIRY_CATEGORIES } from '../../data/resources.js'

const FIELD_CLASS =
  'h-[45px] w-full rounded-[8px] border border-line bg-white px-4 text-[15px] font-medium text-ink placeholder:text-smoke focus:border-forest focus:outline-none'

/* The "Can't Find What You Need?" contact panel shared by the Documents &
   Application Guidance sub-pages (Figma "Frame 10" / Group 191). */
function ResourceContactForm({ defaultCategory }) {
  const [category, setCategory] = useState(defaultCategory ?? ENQUIRY_CATEGORIES[0])
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,476px)_minmax(0,615px)]">
      <div>
        <p className="text-[15px] font-medium uppercase text-forest">Get In Touch</p>
        <h2 className="mt-1 text-[30px] font-bold leading-[1.28] text-forest lg:text-[40px]">
          Can&apos;t Find What You Need?
        </h2>
        <p className="mt-4 text-[18px] font-semibold text-ink">Send us a message</p>
        <p className="mt-2 max-w-[420px] text-[15px] font-medium text-smoke">
          Submit a request and our technical team will provide the documents you need.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
        className="rounded-[15px] border border-line bg-card p-5"
      >
        <div className="flex flex-wrap gap-2">
          {ENQUIRY_CATEGORIES.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setCategory(label)}
              className={`flex h-[26px] items-center rounded-full px-[13px] text-[13px] font-medium transition-colors ${
                category === label ? 'bg-forest text-cream' : 'bg-mist text-ink hover:bg-mist/70'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="block text-[13px] font-medium text-smoke">
            Full Name
            <input required type="text" className={`mt-2 ${FIELD_CLASS}`} placeholder="Your name" />
          </label>
          <label className="block text-[13px] font-medium text-smoke">
            Email Address
            <input required type="email" className={`mt-2 ${FIELD_CLASS}`} placeholder="you@company.com" />
          </label>
          <label className="block text-[13px] font-medium text-smoke">
            Phone Number
            <input type="tel" className={`mt-2 ${FIELD_CLASS}`} placeholder="+91" />
          </label>
          <label className="block text-[13px] font-medium text-smoke">
            Company
            <input type="text" className={`mt-2 ${FIELD_CLASS}`} placeholder="Company name" />
          </label>
          <label className="block text-[13px] font-medium text-smoke">
            Project Type
            <input type="text" className={`mt-2 ${FIELD_CLASS}`} placeholder="e.g. Residential" />
          </label>
          <label className="block text-[13px] font-medium text-smoke">
            Project Location
            <input type="text" className={`mt-2 ${FIELD_CLASS}`} placeholder="City, State" />
          </label>
          <label className="block text-[13px] font-medium text-smoke sm:col-span-2">
            Estimated Timeline
            <input type="text" className={`mt-2 ${FIELD_CLASS}`} placeholder="e.g. Within 1 month" />
          </label>
          <label className="block text-[13px] font-medium text-smoke sm:col-span-2">
            Message
            <textarea
              required
              rows={4}
              className="mt-2 w-full resize-none rounded-[8px] border border-line bg-white p-4 text-[15px] font-medium text-ink placeholder:text-smoke focus:border-forest focus:outline-none"
              placeholder="Tell us what you're looking for..."
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 flex h-10 w-full items-center justify-center rounded-full bg-forest text-[15px] font-semibold text-gold transition-opacity hover:opacity-90"
        >
          {submitted ? 'Message Sent' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default ResourceContactForm
