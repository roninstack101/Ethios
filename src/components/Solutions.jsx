import { Link } from 'react-router-dom'
import { SectionIntro, ArrowRight, ArrowUpRight, Reveal } from './ui.jsx'

const SOLUTIONS = [
  {
    title: 'Waterproofing',
    description:
      'Comprehensive waterproofing systems for basements, roofs, wet areas, and structural protection.',
    tags: ['Roof', 'Basement', 'Wet Areas', 'Pools', 'Facades'],
    image: '/assets/solution-waterproofing.png',
    category: 'New Construction Waterproofing',
  },
  {
    title: 'Repair & Rehabilitation',
    description:
      'Structural and non-structural repair solutions including crack injection, carbon fibre strengthening, and concrete restoration.',
    tags: ['Buildings', 'Bridges', 'Foundations', 'Industrial Facilities'],
    image: '/assets/solution-repair.png',
    category: 'Repair & Rehabilitation',
  },
  {
    title: 'Industrial Flooring',
    description:
      'Heavy-duty flooring systems built for industrial, commercial, and specialised environments.',
    tags: ['Manufacturing', 'Warehouses', 'Pharmacies', 'Workshops'],
    image: '/assets/solution-Industrial Flooring.png',
    category: 'Industrial Flooring & Sealants',
  },
  {
    title: 'Thermal Insulation',
    description:
      'Energy-efficient insulation materials and systems for buildings, pipelines, and industrial applications.',
    tags: ['Buildings', 'Pipelines', 'Roofs', 'Facades'],
    image: '/assets/solution-thermal insulation.png',
    category: 'Thermal Insulation',
  },
  {
    title: 'Sealants & Joints',
    description:
      'Professional-grade sealants, protective coatings, and expansion joint systems for building durability and movement accommodation.',
    tags: ['Industrial Floors', 'Buildings', 'Parking Decks', 'Bridges'],
    image: '/assets/solution-Sealants & Joints.png',
    category: 'Industrial Flooring & Sealants',
  },
  {
    title: 'Tile & Stone',
    description:
      'Complete tiling systems; adhesives, grouts, waterproofing, and surface preparation, working as one system.',
    tags: ['Luxury Buildings', 'Industrial Processing Units', 'Wet Zones', 'Hospitals'],
    image: '/assets/solution-Tile & Stone.png',
    category: 'Tile Joint Fillers',
  },
]

function SolutionCard({ title, description, tags, image, category }) {
  return (
    <Link
      to={`/solutions?category=${encodeURIComponent(category)}`}
      className="group flex h-full cursor-pointer flex-col rounded-[15px] border border-line bg-card p-[14px] transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-forest hover:shadow-lg"
    >
      <div className="relative h-[268px] overflow-hidden rounded-[10px] bg-[#d9d9d9]">
        {image && (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-forest/0 transition-colors duration-300 group-hover:bg-forest/10" />
      </div>
      <h3 className="mt-[23px] text-[24px] font-bold capitalize text-forest">{title}</h3>
      <p className="mt-[7px] text-[15px] font-medium text-ink">{description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[5px] border border-forest bg-[rgba(54,82,74,0.1)] px-2 py-1 text-[10px] font-medium uppercase text-forest"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-[20px] inline-flex items-center gap-2 text-[15px] font-medium uppercase text-forest">
        <span className="border-b-2 border-transparent pb-[2px] transition-colors duration-300 group-hover:border-brass">
          View Solutions
        </span>
        <ArrowRight className="group-hover:hidden" />
        <ArrowUpRight className="hidden group-hover:block" />
      </span>
    </Link>
  )
}

function Solutions() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-[72px] lg:px-12 xl:px-[115px]">
      <Reveal>
        <SectionIntro
          eyebrow="How We Help"
          title="The Right Solution for Every Build"
          description="Every project moves through the same risks: the wrong products, the wrong system, the wrong sequence, the wrong site conditions. We help you get it right, from the first pour to the final finish."
        />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((solution, i) => (
          <Reveal key={solution.title} delay={(i % 3) * 90} className="h-full">
            <SolutionCard {...solution} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Link
          to="/solutions"
          className="flex h-10 items-center rounded-full bg-gold px-5 text-[15px] font-semibold text-forest transition-transform hover:-translate-y-0.5 hover:opacity-90"
        >
          Know More
        </Link>
      </Reveal>
    </section>
  )
}

export default Solutions
