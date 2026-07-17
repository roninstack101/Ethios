import { SectionIntro, Reveal } from '../ui.jsx'

const CITIES = [
  'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad',
  'Jaipur', 'Kochi', 'Goa'
]

function CityChip({ city }) {
  return (
    <span className="inline-flex h-[33px] shrink-0 items-center gap-2 rounded-[7.5px] border-[1.5px] border-[#3e605b] bg-[rgba(62,96,91,0.1)] px-[13px] text-[15px] font-medium capitalize text-[#3e605b]">
      <span className="size-[6px] rounded-full bg-[#3e605b]" aria-hidden />
      {city}
    </span>
  )
}

function Locations() {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-[1440px] px-6 py-[67px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro eyebrow="Our Locations" title="PAN India Presence" />
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-6 max-w-[1000px] rounded-[15px] border border-line bg-card px-6 py-8 md:px-12 lg:py-10">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            {CITIES.map((city) => (
              <CityChip key={city} city={city} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Locations
