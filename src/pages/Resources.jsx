import { Link } from 'react-router-dom'
import { SectionIntro, Reveal } from '../components/ui.jsx'
import ResourceCard from '../components/resources/ResourceCard.jsx'
import { TECH_AREAS, SUPPORT_WAYS, PROCESS_STEPS, FEATURED_ARTICLES } from '../data/resources.js'

function SupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M4 11a7 7 0 0 1 14 0v4.5M4 11v3a2 2 0 0 0 2 2h.5v-5H5a1 1 0 0 0-1 1zm14 0v3a2 2 0 0 1-2 2h-.5v-5H17a1 1 0 0 1 1 1zM9 20h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M6 2.5h7L18 7.5V18a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18V4a1.5 1.5 0 0 1 1.5-1.5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M13 2.5V7.5h5M8.5 11h5M8.5 14.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function GuidanceIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 8.5l5-1.5-1.5 5-5 1.5 1.5-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

const ICONS = [<SupportIcon key="s" />, <DocumentIcon key="d" />, <GuidanceIcon key="g" />]

function TechAreaTile({ title, image }) {
  return (
    <div className="group relative h-[230px] overflow-hidden rounded-[15px]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 h-[128px] bg-gradient-to-b from-transparent to-ink" />
      <p className="absolute bottom-5 left-5 right-5 text-[20px] font-medium text-white">{title}</p>
    </div>
  )
}

function ProcessStep({ code, title, description, isLast }) {
  return (
    <div className="relative flex-1 rounded-[15px] border border-line bg-card p-5">
      <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-brass">{code}</p>
      <h3 className="mt-1 text-[24px] font-bold capitalize text-forest">{title}</h3>
      <div className="mt-3 border-t border-line" />
      <p className="mt-4 text-[15px] font-medium text-smoke">{description}</p>
      {!isLast && (
        <span className="absolute right-[-27px] top-1/2 z-10 hidden size-[25px] -translate-y-1/2 items-center justify-center rounded-full bg-gold text-forest lg:flex">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path d="M1 5h7.5M5.5 1.5L9 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </span>
      )}
    </div>
  )
}

function FeaturedArticleCard({ title, description, image }) {
  return (
    <Link
      to="/resources/insights"
      className="group flex h-full flex-col rounded-[15px] border border-line bg-card p-5 transition-colors hover:border-forest"
    >
      <div className="h-[263px] overflow-hidden rounded-[10px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mt-5 text-[24px] font-bold capitalize leading-tight text-forest">{title}</h3>
      <p className="mt-3 text-[15px] font-medium text-ink">{description}</p>
      <span className="mt-auto flex items-center gap-2 pt-6 text-[15px] font-medium uppercase text-forest">
        Explore
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden>
          <path d="M0 4.5h10.5M7.5 1l3.5 3.5L7.5 8" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      </span>
    </Link>
  )
}

function Resources() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[664px] items-center justify-center overflow-hidden bg-forest">
        <img src="/assets/resources-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover animate-hero-zoom" />
        <div className="absolute inset-0 bg-forest/50" />
        <div className="relative flex max-w-[1210px] flex-col items-center px-6 pt-[65px] text-center">
          <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
            Resources
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-6 max-w-[1110px] text-[38px] font-bold leading-tight text-cream sm:text-[48px] lg:text-[60px]">
            Expert Guidance for Your Construction Challenges
          </Reveal>
          <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-[1170px] text-[17px] font-medium text-cream lg:text-[20px]">
            From product selection to application methodology, our technical team supports you at every stage.
          </Reveal>
        </div>
      </section>

      {/* Three ways to get support */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-[115px]">
          <Reveal>
            <SectionIntro
              eyebrow="How Can We Help?"
              title="Three Ways to Get Technical Support"
              description="Find the information you need, organized by type."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SUPPORT_WAYS.map((card, i) => (
              <Reveal key={card.code} delay={i * 90} className="h-full">
                <ResourceCard {...card} icon={ICONS[i]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical areas */}
      <section className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-[115px]">
        <Reveal>
          <SectionIntro
            eyebrow="What We Help With"
            title="Technical Areas We Cover"
            description="Our engineering team has deep expertise across all major construction disciplines."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {TECH_AREAS.map((area, i) => (
            <Reveal key={area.title} delay={(i % 4) * 80}>
              <TechAreaTile {...area} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-sand">
        <div className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-[115px]">
          <Reveal>
            <SectionIntro
              eyebrow="Our Process"
              title="How Technical Support Works"
              description="A streamlined process to get you the answers you need, when you need them."
            />
          </Reveal>
          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:gap-[54px]">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.code} delay={i * 110} className="flex-1">
                <ProcessStep {...step} isLast={i === PROCESS_STEPS.length - 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-[115px]">
        <Reveal>
          <SectionIntro eyebrow="Featured" title="Latest from Ethios" description="Highlighted blogs from our knowledge hub." />
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {FEATURED_ARTICLES.map((article, i) => (
            <Reveal key={article.title} delay={(i % 3) * 90} className="h-full">
              <FeaturedArticleCard {...article} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export default Resources
