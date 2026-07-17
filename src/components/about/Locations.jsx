import { SectionIntro, Reveal } from '../ui.jsx'

const ROW_ONE = ['Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad']
const ROW_TWO = ['Jaipur', 'Kochi', 'Goa', 'Surat', 'Indore', 'Nagpur']

function CityChip({ city }) {
  return (
    <span className="mx-[5px] inline-flex h-[33px] shrink-0 items-center gap-2 rounded-[7.5px] border-[1.5px] border-[#3e605b] bg-[rgba(62,96,91,0.1)] px-[13px] text-[15px] font-medium capitalize text-[#3e605b]">
      <span className="size-[6px] rounded-full bg-[#3e605b]" aria-hidden />
      {city}
    </span>
  )
}

function MarqueeRow({ cities, reverse = false }) {
  return (
    <div className="flex overflow-hidden">
      {/* Three copies so shorter rows still cover the full track width
          at every point of the loop. */}
      {[0, 1, 2].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy > 0}
          className={`flex shrink-0 ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}
        >
          {cities.map((city) => (
            <CityChip key={city} city={city} />
          ))}
        </div>
      ))}
    </div>
  )
}

function Locations() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-[1440px] px-6 py-[67px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro eyebrow="Our Locations" title="PAN India Presence" />
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-6 max-w-[1000px] space-y-[18px] overflow-hidden rounded-[15px] border border-line bg-card py-[22px]">
          <MarqueeRow cities={ROW_ONE} />
          <MarqueeRow cities={ROW_TWO} reverse />
        </Reveal>
      </div>
    </section>
  )
}

export default Locations
