import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SectionIntro, ArrowRight, Reveal } from '../components/ui.jsx'
import { slugify } from '../data/solutionDetails.js'

const JOURNEY = [
  {
    code: 'ST/01',
    title: 'Product Consultation',
    description:
      'Our technical team understands your requirement – product type, usage area, climate resistance, application technique, and packaging preferences.',
  },
  {
    code: 'ST/02',
    title: 'Sampling & R&D',
    description:
      'We offer trial samples, technical data sheets (TDS), and MSDS. Custom formulation possible based on regional needs or specialty projects.',
  },
  {
    code: 'ST/03',
    title: 'Packaging Design',
    description:
      'Choose from pouches, buckets, bags, drums, and containers – all with your custom branding, barcodes, and labels.',
  },
  {
    code: 'ST/04',
    title: 'Production & Quality Assurance',
    description:
      'Manufacturing begins on fully automatic lines, with batch-wise QC reports and strict adherence to ISO standards.',
  },
  {
    code: 'ST/05',
    title: 'Logistics & Delivery',
    description:
      'We deliver across India, in full & on time. Direct-to-site options available for high-volume clients.',
  },
]

const CAPACITY = [
  {
    reason: 'Reason 1',
    title: 'Robust Manufacturing Infrastructure',
    image: '/assets/oem-capacity-1.png',
    points: [
      '3 strategically located plants in Ahmedabad, Godhra & Udaipur.',
      'Equipped with 3 fully automatic production lines for precision and consistency.',
      '220,000+ sq. ft area with 1,000+ tons/day capacity & 6 advanced packing machines.',
    ],
  },
  {
    reason: 'Reason 2',
    title: 'Advanced R&D and Quality Assurance',
    image: '/assets/oem-capacity-2.png',
    points: [
      '2 fully equipped R&D labs with expert chemists & modern tools.',
      'ISO 9001:2015 certified quality system with strict batch-wise testing.',
      'Focus on innovative, eco-friendly, and customized formulations.',
    ],
  },
  {
    reason: 'Reason 3',
    title: 'Efficient Distribution & Logistics',
    image: '/assets/oem-capacity-3.png',
    points: [
      'Strategic locations ensure seamless domestic and export logistics.',
      'Pan-India delivery supported by optimized warehousing and dispatch.',
      'Capable of handling bulk orders and infrastructure-scale supply.',
    ],
  },
  {
    reason: 'Reason 4',
    title: 'Sustainability & Innovation',
    image: '/assets/oem-capacity-4.png',
    points: [
      'Eco-conscious product formulations reducing environmental impact.',
      'Continuous innovation driven by in-house research and market needs.',
      'High-performance solutions trusted across global project sites.',
    ],
  },
]

const CATEGORIES = [
  {
    title: 'Tile & Stone Adhesives and Grouts',
    image: '/assets/sol-tile-joint.png',
    description:
      'Polymer-modified cementitious adhesives and epoxy grouts engineered for secure, lasting tile and stone installations.',
  },
  {
    title: 'Waterproofing Solutions',
    image: '/assets/sol-new-construction.png',
    description:
      'Liquid membranes, coatings, and waterproofing systems manufactured to protect structures from day one.',
  },
  {
    title: 'Block Adhesives & Ready Mix Plasters',
    image: '/assets/prodcat-plaster.png',
    description:
      'Factory-blended block adhesives and plasters that speed up masonry work and reduce cracking.',
  },
  {
    title: 'Concrete Admixtures & Curing Solutions',
    image: '/assets/prodcat-admixture.png',
    description:
      'Admixtures and curing compounds that boost concrete strength, workability, and durability.',
  },
  {
    title: 'Repair & Rehabilitation Solutions',
    image: '/assets/sol-repair-rehab-wp.png',
    description:
      'Micro-concretes, bonding agents, and repair mortars that restore and strengthen aging structures.',
  },
  {
    title: 'Industrial Flooring Systems',
    image: '/assets/sol-epoxy-flooring.png',
    description:
      'Epoxy and PU flooring systems built for demanding industrial and commercial environments.',
  },
]

const PARTNER_POINTS = [
  {
    title: 'Proven Manufacturing Expertise',
    description: 'Years of construction-chemical production experience behind every batch you sell.',
  },
  {
    title: 'In-House R&D & QA Labs',
    description: 'Formulation development and batch-wise quality control under one roof.',
  },
  {
    title: 'Technical Support & Training',
    description: 'Application training and technical documentation for your team and customers.',
  },
  {
    title: 'Low MOQs for Startups',
    description: 'Start small and scale — minimum order quantities designed for growing brands.',
  },
  {
    title: 'Custom Branding & Packaging',
    description: 'Pouches, buckets, bags, and drums with your branding, barcodes, and labels.',
  },
  {
    title: 'Sustainable & Green Formulations',
    description:
      'Dedicated technical service teams in every operating state. Specification to site, end to end.',
  },
]

const PARTNERS = [
  'Tile & Stone Manufacturers',
  'Establish large MNC in Construction chemicals',
  'E-commerce Private Label Brands',
  'Startup Brands in Construction Chemicals',
  'Companies seeking innovative products',
  'Hardware Retail Chains',
]

function PartnerAccordion() {
  const [active, setActive] = useState(PARTNER_POINTS.length - 1)

  return (
    <div className="flex h-[536px] flex-col overflow-hidden" onMouseLeave={() => setActive(PARTNER_POINTS.length - 1)}>
      {PARTNER_POINTS.map(({ title, description }, i) => {
        const isOpen = active === i
        return (
          <button
            key={title}
            type="button"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-expanded={isOpen}
            className={`shrink-0 overflow-hidden rounded-t-[20px] px-[26px] pt-[18px] text-left transition-[height] duration-300 ease-in-out ${
              i > 0 ? '-mt-[20px]' : ''
            } ${i % 2 === 0 ? 'bg-forest' : 'bg-forest-2'} ${
              i === PARTNER_POINTS.length - 1
                ? isOpen ? 'h-[136px]' : 'h-[80px]'
                : isOpen ? 'h-[156px]' : 'h-[100px]'
            }`}
          >
            <span className="flex items-baseline justify-between gap-4">
              <span className="truncate text-[20px] font-bold capitalize leading-normal text-cream lg:text-[26px]">
                {title}
              </span>
              <span className="text-[20px] font-bold text-cream lg:text-[26px]">
                {String(i + 1).padStart(2, '0')}.
              </span>
            </span>
            <span
              className={`mt-2 block text-[15px] font-medium text-line transition-opacity duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {description}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function OemServices() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[520px] md:min-h-[600px] xl:min-h-[664px] items-center justify-center overflow-hidden bg-forest">
        <img src="/assets/oem-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover animate-hero-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d322c] via-[#1d322c]/70 to-[#1d322c]/40" />
        <div className="relative flex max-w-[1210px] flex-col items-center px-6 pt-[65px] text-center">
          <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
            OEM Services
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-6 max-w-[1210px] text-[38px] font-bold leading-tight text-cream sm:text-[48px] lg:text-[60px]">
            Launch Your Own Construction Chemical Brand with Ethios
          </Reveal>
          <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-[1170px] text-[17px] font-medium text-cream lg:text-[20px]">
            Whether you're an emerging entrepreneur or an established brand, Ethios offers a solid
            foundation with years of manufacturing excellence, technical expertise, and a commitment
            to quality and innovation.
          </Reveal>
        </div>
      </section>

      {/* OEM journey */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-12 xl:px-[115px]">
          <Reveal>
            <SectionIntro
              eyebrow="Process"
              title="Your OEM Manufacturing Journey"
              description="From initial consultation to commercial production, our structured process turns your ideas into market-ready products with confidence."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {JOURNEY.map(({ code, title, description }, i) => (
              <Reveal key={code} delay={(i % 5) * 80} className="h-full">
                <article className="h-full rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-brass">{code}</p>
                  <h3 className="mt-1 min-h-[62px] text-[22px] font-bold capitalize leading-tight text-forest lg:text-[24px]">
                    {title}
                  </h3>
                  <div className="mt-2 border-t border-dotted border-line" />
                  <p className="mt-3 text-[15px] font-medium text-smoke">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing capacity */}
      <section className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro
            eyebrow="Our Manufacturing Power"
            title="Manufacturing Capacity"
            description="We deliver industrial-grade performance through a highly advanced production infrastructure:"
          />
        </Reveal>
        <div className="mt-10 grid gap-x-[54px] gap-y-12 md:grid-cols-2">
          {CAPACITY.map(({ reason, title, image, points }, i) => (
            <Reveal key={title} delay={(i % 2) * 100}>
              <div className="group overflow-hidden rounded-[15px]">
                <img
                  src={image}
                  alt={title}
                  className="aspect-[543/432] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-6 text-[14px] font-medium text-smoke">{reason}</p>
              <h3 className="mt-1 text-[24px] font-semibold capitalize text-ink">{title}</h3>
              <ul className="mt-4 space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[14px] font-medium text-smoke">
                    <span className="mt-[7px] size-[5px] shrink-0 rounded-full bg-smoke" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OEM categories */}
      <section className="bg-mist">
        <div className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-12 xl:px-[115px]">
          <Reveal>
            <SectionIntro
              eyebrow="What We Manufacture"
              title="OEM Categories"
              description="We deliver industrial-grade performance through a highly advanced production infrastructure:"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-[50px] gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map(({ title, image, description }, i) => (
              <Reveal key={title} delay={(i % 3) * 90} className="h-full">
                <article className="group flex h-[494px] flex-col rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg">
                  <div className="h-[205px] shrink-0 overflow-hidden rounded-[10px]">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-[19px] text-[20px] font-bold leading-normal text-[#295046]">{title}</h3>
                  <p className="mt-2 text-[15px] leading-normal text-[#414141]">{description}</p>
                  <div className="mt-auto border-t border-line pt-5">
                    <Link
                      to={`/oem-services/${slugify(title)}`}
                      className="inline-flex h-10 items-center gap-2 rounded-full border border-forest px-5 text-[15px] font-medium uppercase text-forest transition-colors hover:bg-forest hover:text-cream"
                    >
                      Know More
                      <ArrowRight />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ethios */}
      <section className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro
            eyebrow="Why Ethios"
            title="Why Ethios is the Ideal OEM Partner"
            description="A manufacturing partner that stands behind your brand — from formulation to finished, packaged product."
          />
        </Reveal>
        <div className="mt-12 grid items-stretch gap-8 xl:gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <Reveal x={-28} y={0} className="group h-full overflow-hidden rounded-[15px]">
            <img
              src="/assets/oem-partner.png"
              alt="Ethios OEM manufacturing line"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Reveal>
          <Reveal x={28} y={0} delay={120} className="h-full">
            <PartnerAccordion />
          </Reveal>
        </div>
      </section>

      {/* Who should partner */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-12 xl:px-[115px]">
          <Reveal>
            <SectionIntro eyebrow="Partners" title="Who Should Partner with Us?" />
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((label, i) => (
              <Reveal key={label} delay={(i % 6) * 70} className="h-full">
                <div className="h-[130px] rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg">
                  <p className="text-[24px] font-bold capitalize text-forest">
                    {String(i + 1).padStart(2, '0')}.
                  </p>
                  <p className="mt-1 text-[15px] font-medium leading-tight text-ink">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OemServices
