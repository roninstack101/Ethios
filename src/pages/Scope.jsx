import { Link } from 'react-router-dom'
import { CountUp, SectionIntro, Reveal } from '../components/ui.jsx'

/* Scope page (Figma node 2:3408): hero, five-stat band, sector cards,
   a forest "why choose" band with three value cards, and the client
   logo wall linking through to /scope/clients. */

const STATS = [
  { value: '1000+', label: 'Projects Delivered' },
  { value: '350+', label: 'Satisfied Clients' },
  { value: '15+', label: 'Years Experience' },
  { value: '9+', label: 'States Served' },
  { value: '100+', label: 'Team Members' },
]

const SECTORS = [
  {
    title: 'Residential',
    image: '/assets/scope-sector-residential.png',
    description: 'Apartments, villas, gated communities, and affordable housing projects.',
  },
  {
    title: 'Commercial',
    image: '/assets/scope-sector-commercial.png',
    description: 'Office buildings, shopping centres, hotels, and mixed use developments.',
  },
  {
    title: 'Industrial',
    image: '/assets/scope-sector-industrial.png',
    description: 'Manufacturing plants, warehouses, logistics hubs, and industrial parks.',
  },
  {
    title: 'Infrastructure',
    image: '/assets/scope-sector-infrastructure.png',
    description: 'Bridges, tunnels, water treatment facilities, and public infrastructure.',
  },
  {
    title: 'Institutional',
    image: '/assets/scope-sector-institutional.png',
    description: 'Schools, hospitals, government buildings, and cultural institutions.',
  },
]

/* The design's card set: mist icon square, V/xx code, title, divider, copy. */
const WHY_CARDS = [
  {
    code: 'V/01',
    title: 'Quality Products',
    description: 'Manufactured to stringent quality standards with ISO 9001:2015 certification.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <path
          d="M13 2.5l8.5 3.2v6.1c0 5.2-3.6 9.4-8.5 11.7-4.9-2.3-8.5-6.5-8.5-11.7V5.7L13 2.5z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 12.8l2.8 2.8 5.2-5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: 'V/02',
    title: 'Technical Support',
    description: 'Dedicated team providing project-specific guidance and application advice.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <path
          d="M4.5 13a8.5 8.5 0 0 1 17 0v5.5M4.5 13v5.5M4.5 15h-1a1.5 1.5 0 0 0-1.5 1.5v2A1.5 1.5 0 0 0 3.5 20h1v-5zm17 0h1a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-1v-5z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M16 22.5a3 3 0 0 1-3 1.5h-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    code: 'V/03',
    title: 'On-Time Delivery',
    description: 'Reliable logistics ensuring materials reach your site when needed.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <circle cx="13" cy="13" r="9.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M13 7.5V13l4 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

/* Grey masked client logos (same technique as the home strip). */
const CLIENT_LOGOS = [
  { name: 'Zydus', src: '/assets/clients/zydus.png', w: 96, h: 82 },
  { name: 'Shivalik', src: '/assets/clients/shivalik.svg', w: 106, h: 37 },
  { name: 'Shilp', src: '/assets/clients/shilp.png', w: 102, h: 31 },
  { name: 'Goyal & Co.', src: '/assets/clients/goyal.png', w: 128, h: 45 },
  { name: 'L&T', src: '/assets/clients/lt.png', w: 62, h: 62 },
  { name: 'AFCONS', src: '/assets/clients/afcons.png', w: 104, h: 28 },
  { name: 'Rajpath Club', src: '/assets/clients/rajpath.png', w: 90, h: 84 },
  { name: 'Godrej Garden City', src: '/assets/clients/garden-city.svg', w: 124, h: 40 },
]

function GreyLogo({ name, src, w, h }) {
  return (
    <span
      role="img"
      aria-label={name}
      className="inline-block shrink-0 bg-smoke transition-colors duration-300 hover:bg-forest"
      style={{
        width: w,
        height: h,
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
      }}
    />
  )
}

function Scope() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[520px] md:min-h-[600px] xl:min-h-[664px] 2xl:min-h-[800px] items-center justify-center overflow-hidden bg-forest">
        <img src="/assets/scope-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover object-[center_35%] animate-hero-zoom" />
        <div className="absolute inset-0 bg-forest/60" />
        <div className="relative flex max-w-[1210px] flex-col items-center px-6 pt-[65px] text-center">
          <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
            Scope
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-6 max-w-[1210px] text-[38px] font-bold leading-tight text-cream sm:text-[48px] lg:text-[60px]">
            Building India&rsquo;s Infrastructure, One Project at a Time
          </Reveal>
          <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-[1170px] text-[17px] font-medium text-cream lg:text-[20px]">
            Ethios has delivered construction solutions across residential, commercial, industrial, and infrastructure sectors.
          </Reveal>
        </div>
      </section>

      {/* Stats band — five columns, including Team Members */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-8 px-6 py-10 sm:grid-cols-3 lg:grid-cols-5 lg:px-12 xl:px-[115px]">
          {STATS.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <p className="text-[44px] font-bold leading-[1.28] text-forest lg:text-[60px]">
                <CountUp value={value} />
              </p>
              <p className="text-[13px] font-medium uppercase tracking-[0.9px] text-ink lg:text-[15px]">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sectors we serve */}
      <section className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro
            eyebrow="Sectors We Serve"
            title="Construction Solutions for Every Application"
            description="From waterproofing to structural strengthening, we provide engineered solutions backed by technical expertise and on-ground execution."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map(({ title, image, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 90} className="h-full">
              <article className="group h-full rounded-[15px] border border-line bg-card p-[15px] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg">
                <div className="h-[268px] overflow-hidden rounded-[10px]">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-5 text-[24px] font-bold capitalize text-forest">{title}</h3>
                <p className="mt-1 text-[15px] font-medium text-smoke">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why choose Ethios — forest band with three value cards */}
      <section className="bg-forest">
        <div className="mx-auto max-w-[1440px] px-6 py-[52px] lg:px-12 xl:px-[115px]">
          <Reveal>
            <SectionIntro
              light
              eyebrow="Why Choose Us"
              title="Backed by Product and On-Site Expertise"
              description="From waterproofing to structural strengthening, we provide engineered solutions backed by technical expertise and on-ground execution."
            />
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mx-auto lg:max-w-[950px] lg:grid-cols-3">
            {WHY_CARDS.map(({ code, title, description, icon }, i) => (
              <Reveal key={code} delay={i * 100} className="h-full">
                <article className="h-full rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex size-[50px] items-center justify-center rounded-[5px] bg-mist text-forest">{icon}</span>
                  <p className="mt-5 text-[10px] font-medium uppercase tracking-[1.5px] text-brass">{code}</p>
                  <h3 className="mt-1 text-[24px] font-bold capitalize text-forest">{title}</h3>
                  <div className="mt-3 border-t border-line" />
                  <p className="mt-3 text-[15px] font-medium text-smoke">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our clients */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-12 xl:px-[115px]">
          <Reveal>
            <SectionIntro
              eyebrow="Our Clients"
              title="Trusted by Leading Names"
              description="We are proud to work with some of the most respected developers, contractors, and consultants in the construction industry."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {CLIENT_LOGOS.map((logo, i) => (
              <Reveal key={logo.name} delay={(i % 4) * 80}>
                <GreyLogo {...logo} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 flex justify-center">
            <Link
              to="/scope/clients"
              className="flex h-10 items-center rounded-full bg-gold px-6 text-[15px] font-semibold text-forest transition-transform hover:-translate-y-0.5 hover:opacity-90"
            >
              View Our Client Network
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export default Scope
