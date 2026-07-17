import { SectionIntro, Reveal } from '../ui.jsx'

const VALUES = [
  {
    code: 'V/01',
    title: 'Performance First',
    icon: '/assets/icon-value-performance.svg',
    description:
      'Every product is formulated and tested to perform under real construction conditions, not just in laboratory settings.',
  },
  {
    code: 'V/02',
    title: 'Hidden Excellence',
    icon: '/assets/icon-value-hidden.svg',
    description:
      'We take pride in materials that disappear into the structure. Their invisibility is a sign of successful application.',
  },
  {
    code: 'V/03',
    title: 'Technical Rigor',
    icon: '/assets/icon-value-rigor.svg',
    description:
      'Independent testing, batch quality control, and continuous R&D ensure consistent product excellence.',
  },
  {
    code: 'V/04',
    title: 'Application Expertise',
    icon: '/assets/icon-value-application.svg',
    description:
      'We understand construction sites. Our products are designed for real-world application challenges.',
  },
  {
    code: 'V/05',
    title: 'Sustainable Construction',
    icon: '/assets/icon-value-sustainable.svg',
    description:
      'Green building compliance, low-VOC formulations, and durable materials that reduce lifecycle environmental impact.',
  },
  {
    code: 'V/06',
    title: 'Partnership Approach',
    icon: '/assets/icon-value-partnership.svg',
    description:
      'We work alongside architects, contractors, and developers as material partners, not just suppliers.',
  },
]

function ValueCard({ code, title, icon, description }) {
  return (
    <article className="group h-full rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg">
      <img
        src={icon}
        alt=""
        className="size-[50px] transition-transform duration-300 group-hover:scale-110"
      />
      <p className="mt-5 text-[10px] font-medium uppercase tracking-[1.5px] text-brass">{code}</p>
      <h3 className="mt-1 text-[24px] font-bold capitalize text-forest">{title}</h3>
      <div className="mt-3 border-t border-line" />
      <p className="mt-3 text-[15px] font-medium text-smoke">{description}</p>
    </article>
  )
}

function Values() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-[1440px] px-6 py-[76px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro eyebrow="What We Stand For" title="Our Values" />
        </Reveal>

        <div className="mt-10 grid gap-x-[35px] gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal key={value.code} delay={(i % 3) * 90} className="h-full">
              <ValueCard {...value} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
