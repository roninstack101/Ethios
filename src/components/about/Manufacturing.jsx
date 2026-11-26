import { CountUp, SectionIntro, Reveal } from '../ui.jsx'

const CAPABILITIES = [
  {
    title: 'Manufacturing',
    icon: '/assets/icon-mfg-factory.svg',
    description:
      'Our ISO 9001:2015 certified facilities combine automated production, in-house quality testing, and end-to-end batch traceability to ensure consistent performance across every product that leaves our plants.',
  },
  {
    title: 'R&D Laboratory',
    icon: '/assets/icon-mfg-lab.svg',
    description:
      'From formulation development to performance validation, our in-house R&D teams continuously refine products based on evolving technologies and real-world site feedback.',
  },
  {
    title: 'Logistics Network',
    icon: '/assets/icon-mfg-logistics.svg',
    description:
      'A robust pan-India distribution network and strategically located warehouses ensure that products are delivered where and when they’re needed.',
  },
]

const STATS = [
  { value: '3', label: 'Brands' },
  { value: '500+', label: 'Projects Supplied' },
  { value: '9', label: 'Product Categories' },
  { value: '25+', label: 'States Covered' },
]

function Manufacturing() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-[66px] lg:px-12 xl:px-[115px]">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,610px)_minmax(0,1fr)]">
        <div>
          <SectionIntro eyebrow="Infrastructure & Capability" title="Manufacturing Excellence" />

          <ul className="mt-11 space-y-9">
            {CAPABILITIES.map(({ title, icon, description }, i) => (
              <Reveal key={title} as="li" delay={i * 110} x={-24} y={0} className="flex gap-5">
                <img src={icon} alt="" className="mt-1 size-[27px] shrink-0" />
                <div>
                  <h3 className="text-[24px] font-bold capitalize text-ink">{title}</h3>
                  <p className="mt-1 max-w-[567px] text-[15px] text-smoke">{description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal x={28} y={0} delay={120} className="overflow-hidden rounded-[15px]">
          <img
            src="/assets/about-manufacturing.png"
            alt="Ethios manufacturing facility"
            className="h-full max-h-[384px] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </Reveal>
      </div>

      <div className="mt-16 border-t border-line" />

      <div className="mt-10 grid grid-cols-2 gap-y-8 lg:grid-cols-4">
        {STATS.map(({ value, label }) => (
          <div key={label} className="lg:text-center">
            <p className="text-[44px] font-bold leading-[1.28] text-forest lg:text-[60px]">
              <CountUp value={value} />
            </p>
            <p className="text-[13px] font-medium uppercase tracking-[0.9px] text-ink lg:text-[15px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Manufacturing
