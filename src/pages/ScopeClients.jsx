import { SectionIntro, Reveal } from '../components/ui.jsx'
import Testimonials from '../components/Testimonials.jsx'

/* Scope – Clients page (Figma node 2:5815): hero, four "why choose"
   value cards, the client-network marquee wall (three alternating rows
   of dashed logo tiles), testimonials, and the commitment quote band. */

const WHY_CARDS = [
  {
    code: 'V/01',
    title: 'Dual Expertise',
    description: 'In both product supply & on-site technical support.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <path d="M3 9.5L13 4l10 5.5-10 5.5L3 9.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 14.5L13 20l10-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: 'V/02',
    title: 'ISO-Certified Solutions',
    description: 'Quality systems certified to ISO 9001:2015 across our plants.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <circle cx="13" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 15.5L9 23l4-2.5L17 23l-1.5-7.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M10.7 10l1.6 1.6 3-3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: 'V/03',
    title: 'Dedicated Technical Support',
    description: 'Site execution assistance & customized solutions.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <path
          d="M15.4 4.2a5.4 5.4 0 0 1 6.3 6.4l-4.3 4.3-2.4-2.4-2.4-2.4 2.8-5.9z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M12.9 13.1L4.6 21.4M9.2 9.4l-4.9 5 3.4 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    code: 'V/04',
    title: 'On-Time Delivery & Quality Assurance',
    description: 'Even in large-scale projects.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <circle cx="10.5" cy="13" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10.5 8.5V13l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 17.5l2.2 2.2 4-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

/* Three marquee rows of client logo tiles (Figma Groups 199/200/201). */
const ROW_ONE = ['net-01', 'net-02', 'net-03', 'net-04', 'net-05', 'net-06', 'net-07', 'net-08']
const ROW_TWO = ['net-09', 'net-10', 'net-11', 'net-12.svg', 'net-13', 'net-14', 'net-15', 'net-16', 'net-17']
const ROW_THREE = ['net-18', 'net-19', 'net-20', 'net-21', 'net-22', 'net-23', 'net-24', 'net-25', 'net-26', 'net-27']

function LogoTile({ file }) {
  const src = file.includes('.') ? file : `${file}.png`
  return (
    <div className="mx-5 flex h-[124px] w-[174px] shrink-0 items-center justify-center overflow-hidden rounded-[15px] border border-dashed border-forest bg-white p-4">
      <img src={`/assets/clients/network/${src}`} alt="" className="max-h-[86px] max-w-[140px] object-contain" loading="lazy" />
    </div>
  )
}

function MarqueeRow({ files, reverse = false }) {
  return (
    <div className="flex overflow-hidden">
      {[0, 1, 2].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy > 0}
          className={`flex shrink-0 py-2 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}
        >
          {files.map((file) => (
            <LogoTile key={file} file={file} />
          ))}
        </div>
      ))}
    </div>
  )
}

function ScopeClients() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[520px] md:min-h-[600px] xl:min-h-[664px] 2xl:min-h-[800px] items-center justify-center overflow-hidden bg-forest">
        <img src="/assets/clients-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover object-[center_35%] animate-hero-zoom" />
        <div className="absolute inset-0 bg-forest/60" />
        <div className="relative flex max-w-[1210px] flex-col items-center px-6 pt-[65px] text-center">
          <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
            Clients
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-6 text-[38px] font-bold leading-tight text-cream sm:text-[48px] lg:text-[56px]">
            Build With Ethios Group
          </Reveal>
          <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-[1210px] text-[15px] font-medium leading-relaxed text-cream lg:text-[17px]">
            At Ethios Group, we take immense pride in being a comprehensive construction solutions provider, seamlessly
            blending high-performance construction products with onsite technical support. From towering residential
            developments to state-of-the-art industrial and commercial spaces, our footprint spans across some of the most
            iconic and demanding projects in India. Backed by our rich industry experience, expert technical support, and a
            diversified product portfolio, we empower architects, developers, and contractors to build with strength, speed,
            and sustainability.
          </Reveal>
        </div>
      </section>

      {/* Why choose Ethios for your clients */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1440px] px-6 py-[60px] lg:px-12 xl:px-[115px]">
          <Reveal>
            <SectionIntro eyebrow="Our Journey" title="Why Choose Ethios Group for Your Clients?" />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CARDS.map(({ code, title, description, icon }, i) => (
              <Reveal key={code} delay={(i % 4) * 90} className="h-full">
                <article className="h-full rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex size-[50px] items-center justify-center rounded-[5px] bg-mist text-forest">{icon}</span>
                  <p className="mt-5 text-[10px] font-medium uppercase tracking-[1.5px] text-brass">{code}</p>
                  <h3 className="mt-1 min-h-[60px] text-[22px] font-bold capitalize leading-tight text-forest lg:text-[24px]">
                    {title}
                  </h3>
                  <div className="mt-3 border-t border-line" />
                  <p className="mt-3 text-[15px] font-medium text-smoke">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client network marquee wall */}
      <section className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro
            eyebrow="Trusted Partners"
            title="Client Network"
            description="We are proud to be the preferred partner of real estate and infrastructure giants who trust Ethios for both reliable material supply and technical services. Our clientele includes:"
          />
        </Reveal>
      </section>
      <Reveal className="space-y-6 pb-[64px]">
        <MarqueeRow files={ROW_ONE} />
        <MarqueeRow files={ROW_TWO} reverse />
        <MarqueeRow files={ROW_THREE} />
      </Reveal>

      {/* Voices from the field */}
      <Testimonials />

      {/* Our commitment */}
      <section className="relative flex min-h-[470px] items-center justify-center overflow-hidden bg-forest py-14">
        <img
          src="/assets/clients-commitment-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <Reveal className="relative mx-6 max-w-[980px] px-6 py-12 text-center text-cream">
          <p className="text-[15px] font-medium uppercase">Ethios Group</p>
          <h2 className="mt-2 text-[30px] font-bold capitalize leading-tight lg:text-[40px]">Our Commitment</h2>
          <p className="mx-auto mt-5 max-w-[840px] text-[15px] font-medium leading-relaxed lg:text-[17px]">
            We believe in delivering more than just materials. We deliver solutions. With a team of trained professionals,
            in-house applicators, and a deep understanding of on-site challenges, we make sure every project is executed to
            perfection.
          </p>
        </Reveal>
      </section>
    </>
  )
}

export default ScopeClients
