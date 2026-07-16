import { SectionIntro, Reveal } from '../ui.jsx'

function WhoWeAre() {
  return (
    <section className="bg-sand">
      <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-6 py-[83px] lg:grid-cols-[minmax(0,750px)_minmax(0,1fr)] lg:px-[115px]">
        <Reveal x={-28} y={0}>
          <SectionIntro eyebrow="Who We Are" title="A construction material company built on performance." />
          <div className="mt-8 max-w-[734px] space-y-5 text-[15px] font-medium text-ink">
            <p>
              Ethios Group is a leading Indian construction materials company specializing in the
              hidden performance layers that make buildings stronger, more durable, and better
              finished. From waterproofing membranes that disappear beneath terraces to tile
              adhesives that bond permanently beneath floors, our products are designed to perform
              where they cannot be seen.
            </p>
            <p>
              Founded on the belief that the most important materials are often invisible, Ethios
              has grown into a multi-brand organization serving architects, contractors, developers,
              and construction professionals across India. We don&rsquo;t just sell products — we
              provide material systems engineered for long-term structural performance.
            </p>
          </div>
        </Reveal>

        <Reveal x={28} y={0} delay={100} className="overflow-hidden rounded-[15px]">
          <img
            src="/assets/about-who.png"
            alt="Ethios corporate building"
            className="h-full max-h-[314px] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </Reveal>
      </div>
    </section>
  )
}

export default WhoWeAre
