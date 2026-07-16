import { useRef, useState } from 'react'
import { SectionIntro, Reveal } from '../components/ui.jsx'

const FIELD_CLASS =
  'h-[45px] w-full rounded-[8px] border border-line bg-white px-4 text-[15px] font-medium text-ink placeholder:text-smoke focus:border-forest focus:outline-none'

function ResourcesTechnicalSupport() {
  const [fileName, setFileName] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef(null)

  return (
    <>
      <section className="relative flex min-h-[664px] items-center justify-center overflow-hidden bg-forest">
        <img src="/assets/resources-support-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover animate-hero-zoom" />
        <div className="absolute inset-0 bg-forest/50" />
        <div className="relative flex max-w-[1210px] flex-col items-center px-6 pt-[65px] text-center">
          <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
            Resources
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-6 max-w-[1210px] text-[38px] font-bold leading-tight text-cream sm:text-[48px] lg:text-[60px]">
            Technical Support
          </Reveal>
          <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-[1170px] text-[17px] font-medium text-cream lg:text-[20px]">
            From product selection to application methodology, our technical team supports you at every stage.
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-[115px]">
          <SectionIntro
            eyebrow="How Can We Help?"
            title="Request Technical Support"
            description="Describe your technical challenge and our team will provide guidance."
          />

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
            className="mx-auto mt-10 max-w-[972px] rounded-[15px] border border-line bg-card p-8"
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
              <label className="block text-[13px] font-medium text-smoke">
                Company Name
                <input type="text" className={`mt-2 ${FIELD_CLASS}`} placeholder="Company name" />
              </label>
              <label className="block text-[13px] font-medium text-smoke">
                Project Location
                <input type="text" className={`mt-2 ${FIELD_CLASS}`} placeholder="City, State" />
              </label>
              <label className="block text-[13px] font-medium text-smoke sm:col-span-2">
                Application Area
                <input type="text" className={`mt-2 ${FIELD_CLASS}`} placeholder="e.g. Terrace waterproofing" />
              </label>
              <label className="block text-[13px] font-medium text-smoke sm:col-span-2">
                Issue Description
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-[8px] border border-line bg-white p-4 text-[15px] font-medium text-ink placeholder:text-smoke focus:border-forest focus:outline-none"
                  placeholder="Describe the technical challenge you're facing..."
                />
              </label>

              <div className="sm:col-span-2">
                <p className="text-[13px] font-medium text-smoke">Updated Technical Documents</p>
                <div className="mt-2 flex flex-wrap items-center gap-4 rounded-[8px] border border-dashed border-line bg-white p-4">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex h-10 shrink-0 items-center rounded-full border border-forest px-5 text-[14px] font-semibold text-forest transition-colors hover:bg-forest hover:text-cream"
                  >
                    Choose File
                  </button>
                  <span className="text-[15px] font-medium text-smoke">{fileName ?? 'No file selected'}</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  />
                </div>
                <p className="mt-2 text-[13px] font-medium text-smoke">Accepted formats: PDF, DOC, DOCX, JPG, PNG</p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 flex h-10 w-full items-center justify-center rounded-full bg-forest text-[15px] font-semibold text-gold transition-opacity hover:opacity-90"
            >
              {submitted ? 'Message Sent' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ResourcesTechnicalSupport
