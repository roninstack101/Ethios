import { SectionIntro, Reveal } from '../ui.jsx'

const CERTIFICATIONS = [
  'ISO 9001:2015',
  'ISO 14001:2015',
  'IGBC Member',
  'GRIHA Compliance',
  'BIS Standards',
  'CE Marking',
]

function Certifications() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1440px] px-6 py-[74px] lg:px-[115px]">
        <Reveal>
          <SectionIntro eyebrow="Infrastructure & Capability" title="Quality & Certifications" />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CERTIFICATIONS.map((label, i) => (
            <Reveal key={label} delay={(i % 6) * 70} className="h-full">
              <div className="group flex h-[131px] flex-col items-center justify-center gap-4 rounded-[15px] border border-line bg-card px-3 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg">
                <img
                  src="/assets/icon-cert-shield.svg"
                  alt=""
                  className="h-[43px] w-[37px] transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-center text-[15px] font-medium text-ink">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
