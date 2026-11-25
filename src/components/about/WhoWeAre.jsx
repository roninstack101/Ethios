import { SectionIntro, Reveal } from '../ui.jsx'

function WhoWeAre() {
  return (
    <section className="bg-sand">
      <div className="mx-auto grid max-w-[1440px] items-stretch gap-12 px-6 py-[83px] lg:grid-cols-[minmax(0,750px)_minmax(0,1fr)] lg:px-12 xl:px-[115px]">
        <Reveal x={-28} y={0}>
          <SectionIntro eyebrow="Who We Are" title="A construction material company built on performance." />
          <div className="mt-8 max-w-[734px] space-y-5 text-[15px] font-medium text-ink">
            <p>
              Ethios is a leading Indian construction materials company focused on the systems that
              work beneath the surface of every building: the waterproofing beneath a terrace, the
              adhesive under a floor, and the coating behind a wall. Our solutions are designed to
              deliver lasting performance long after they disappear from view.
            </p>
            <p>
              Founded on the belief that the most important materials are often invisible, we work as
              a technical partner, helping teams select the right solutions for every application and
              supporting their successful execution on site, from specification to completion.
            </p>
          </div>
        </Reveal>

        <Reveal x={28} y={0} delay={100} className="h-full overflow-hidden rounded-[15px]">
          <img
            src="/assets/about-who.png"
            alt="Ethios corporate building"
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </Reveal>
      </div>
    </section>
  )
}

export default WhoWeAre
