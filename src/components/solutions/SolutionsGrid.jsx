import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Reveal } from '../ui.jsx'
import { slugify } from '../../data/solutionDetails.js'

const CATEGORIES = [
  'All',
  'New Construction Waterproofing',
  'Repair & Rehabilitation',
  'Industrial Flooring & Sealants',
  'Thermal Insulation',
  'Tile Joint Fillers',
]

/* Cards in the design's reading order (left to right, top to bottom). */
const SOLUTIONS = [
  {
    title: 'New Construction Waterproofing',
    category: 'New Construction Waterproofing',
    image: '/assets/sol-new-construction.png',
    description:
      'Build with confidence. Ethios Group delivers advanced waterproofing solutions from day one to protect structures from leaks, dampness, and water damage.',
  },
  {
    title: 'Repair & Rehabilitation Waterproofing',
    category: 'New Construction Waterproofing',
    image: '/assets/sol-repair-rehab-wp.png',
    description:
      'Our Repair & Rehabilitation Waterproofing solutions restore aging structures by resolving leaks, dampness, cracks, and the underlying causes of deterioration.',
  },
  {
    title: 'Liquid Membranes',
    category: 'New Construction Waterproofing',
    image: '/assets/sol-liquid-membranes.png',
    description:
      "Ethios Group delivers seamless liquid-applied waterproofing systems, including cementitious, acrylic, PU, and polyurea coatings, selected to suit every project's needs.",
  },
  {
    title: 'Sheet Membranes',
    category: 'New Construction Waterproofing',
    image: '/assets/sol-sheet-membranes.png',
    description:
      'Sheet membrane systems provide durable, high-strength waterproofing with long-term water resistance. Ethios Group supplies and installs APP, SBS, HDPE, and TPO membranes tailored to diverse construction needs.',
  },
  {
    title: 'Basement Waterproofing',
    category: 'New Construction Waterproofing',
    image: '/assets/sol-basement.png',
    description:
      'Basements are highly susceptible to groundwater seepage and hydrostatic pressure. Ethios Group provides advanced waterproofing solutions that protect against dampness, leaks, and structural deterioration.',
  },
  {
    title: 'Podium & Terrace Waterproofing',
    category: 'New Construction Waterproofing',
    image: '/assets/sol-podium-terrace.png',
    description:
      'Podiums and terraces face constant exposure to weather and temperature changes, making them prone to leaks and surface deterioration. Ethios Group provides specialized waterproofing systems for long-lasting protection and performance.',
  },
  {
    title: 'Structural Strengthening',
    category: 'Repair & Rehabilitation',
    image: '/assets/sol-structural.png',
    description:
      'Aging, damaged, or overloaded structures require reliable reinforcement. Ethios Group delivers advanced structural strengthening solutions that restore load-bearing capacity and extend service life with minimal disruption.',
  },
  {
    title: 'Crack Injection Grouting',
    category: 'Repair & Rehabilitation',
    image: '/assets/sol-crack-injection.png',
    description:
      'Concrete cracks can compromise structural safety and durability. Ethios Group provides advanced crack injection grouting solutions that seal cracks, restore structural integrity, and prevent further deterioration.',
  },
  {
    title: 'Surface Restoration',
    category: 'Repair & Rehabilitation',
    image: '/assets/sol-surface-restoration.png',
    description:
      "Water damage and weather exposure can lead to cracks, dampness, and surface deterioration. Ethios Group's Surface Restoration solutions repair, protect, and renew surfaces while addressing the root cause for lasting performance.",
  },
  {
    title: 'Anti-Corrosion Treatment',
    category: 'Repair & Rehabilitation',
    image: '/assets/sol-anti-corrosion.png',
    description:
      'Reinforced concrete is vulnerable to corrosion caused by moisture and chemical exposure. Ethios Group provides advanced anti-corrosion treatments that protect steel reinforcement and extend structural life.',
  },
  {
    title: 'Epoxy Flooring Systems',
    category: 'Industrial Flooring & Sealants',
    image: '/assets/sol-epoxy-flooring.png',
    description:
      "Ethios Group's epoxy flooring systems deliver high-strength, chemical-resistant, and hygienic surfaces with a durable, seamless finish for demanding industrial and commercial environments.",
  },
  {
    title: 'PU (Polyurethane) Flooring System',
    category: 'Industrial Flooring & Sealants',
    image: '/assets/sol-pu-flooring.png',
    description:
      "Ethios Group's PU flooring systems provide durable, flexible, and chemical-resistant surfaces that withstand extreme temperatures, heavy traffic, and demanding industrial environments.",
  },
  {
    title: 'Polysulphide Sealants',
    category: 'Industrial Flooring & Sealants',
    image: '/assets/sol-polysulphide.png',
    description:
      "Ethios Group's polysulphide sealants provide durable, flexible, and water-resistant joint sealing for long-lasting performance in demanding structural and industrial applications.",
  },
  {
    title: 'Polyurethane (PU) Sealants',
    category: 'Industrial Flooring & Sealants',
    image: '/assets/sol-pu-sealants.png',
    description:
      "Ethios Group's PU sealants provide flexible, high-performance joint sealing with excellent adhesion and weather resistance for long-lasting protection in dynamic structures.",
  },
  {
    title: 'Heavy-Duty Floor Coatings',
    category: 'Industrial Flooring & Sealants',
    image: '/assets/sol-heavy-duty.png',
    description:
      "Ethios Group's heavy-duty floor coatings provide seamless, abrasion- and chemical-resistant surfaces designed to withstand demanding industrial environments while enhancing durability and safety.",
  },
  {
    title: 'PUF Spray Insulation',
    category: 'Thermal Insulation',
    image: '/assets/sol-puf-spray.png',
    description:
      "Ethios Group's PUF spray insulation creates a seamless, joint-free thermal barrier that improves energy efficiency and indoor comfort across industrial and commercial applications.",
  },
  {
    title: 'PUF Board Insulation',
    category: 'Thermal Insulation',
    image: '/assets/sol-puf-board.png',
    description:
      "Ethios Group's PUF board insulation systems provide superior thermal performance, dimensional stability, and easy installation for industrial and commercial applications.",
  },
  {
    title: 'XPS Insulation Board',
    category: 'Thermal Insulation',
    image: '/assets/sol-xps.png',
    description:
      "Ethios Group's XPS insulation boards deliver superior thermal performance, moisture resistance, and high compressive strength for long-lasting insulation.",
  },
  {
    title: 'EPS Insulation Board',
    category: 'Thermal Insulation',
    image: '/assets/sol-eps.png',
    description:
      "Ethios Group's EPS insulation boards provide lightweight, cost-effective thermal insulation with reliable performance for residential, commercial, and industrial applications.",
  },
  {
    title: 'Insulation Screed Concrete',
    category: 'Thermal Insulation',
    image: '/assets/sol-screed.png',
    description:
      "Ethios Group's insulation screed concrete provides lightweight thermal insulation and sound dampening while enhancing energy efficiency and reducing structural load.",
  },
  {
    title: 'Insulation Coating',
    category: 'Thermal Insulation',
    image: '/assets/sol-insulation-coating.png',
    description:
      'High-performance insulation coatings reduce heat transfer, improve energy efficiency, and protect surfaces from moisture, corrosion, and environmental wear.',
  },
  {
    title: 'Tile Joint Fillers',
    category: 'Tile Joint Fillers',
    image: '/assets/sol-tile-joint.png',
    description:
      "Ethios Group's epoxy tile grouts provide superior bonding, chemical resistance, and a seamless finish for durable, hygienic, and high-performance tiled surfaces.",
  },
]

function SolutionCard({ title, category, image, description }) {
  return (
    <article className="group flex h-[494px] flex-col rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg">
      <div className="relative h-[205px] shrink-0 overflow-hidden rounded-[10px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute left-[11px] top-[12px] bg-[#ecece9]/90 px-2 py-[7px] text-[13px] font-medium uppercase leading-none text-[#295046]">
          {category}
        </span>
      </div>
      <h3 className="mt-[19px] text-[20px] font-bold leading-normal text-[#295046]">{title}</h3>
      <p className="mt-2 text-[15px] leading-normal text-[#414141]">{description}</p>
      <div className="mt-auto border-t border-line pt-5">
        <Link
          to={`/solutions/${slugify(title)}`}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-forest px-5 text-[15px] font-medium uppercase text-forest transition-colors hover:bg-forest hover:text-cream"
        >
          Know More
          <ArrowRight />
        </Link>
      </div>
    </article>
  )
}

function SolutionsGrid() {
  const [searchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category')
  const [category, setCategory] = useState(
    requestedCategory && CATEGORIES.includes(requestedCategory) ? requestedCategory : 'All'
  )
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState(false)

  const visible = SOLUTIONS.filter((solution) => {
    const inCategory = category === 'All' || solution.category === category
    const q = query.trim().toLowerCase()
    const matches =
      !q ||
      solution.title.toLowerCase().includes(q) ||
      solution.description.toLowerCase().includes(q)
    return inCategory && matches
  })

  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1440px] px-6 py-[52px] lg:px-[115px]">
        {/* Filter bar */}
        <div className="flex flex-col overflow-hidden rounded-[15px] border border-line bg-card lg:flex-row lg:items-stretch">
          <div className="relative flex flex-1 items-start gap-2">
            <div
              className={`flex flex-1 items-center gap-2 p-5 pr-2 transition-[flex-wrap] ${
                expanded ? 'flex-wrap' : 'flex-nowrap overflow-hidden'
              }`}
              style={
                !expanded
                  ? { maskImage: 'linear-gradient(to right, black 85%, transparent 100%)' }
                  : undefined
              }
            >
              {CATEGORIES.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setCategory(label)}
                  aria-pressed={category === label}
                  className={`h-[35px] shrink-0 rounded-[4px] px-5 text-[13px] font-medium uppercase transition-colors ${
                    category === label
                      ? 'bg-[#295046] text-cream'
                      : 'bg-mist text-[#272727] hover:bg-line'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-label={expanded ? 'Show fewer categories' : 'Show all categories'}
              className="mr-5 mt-5 flex size-[35px] shrink-0 items-center justify-center rounded-[4px] bg-mist text-[#295046] transition-colors hover:bg-line"
            >
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                aria-hidden
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              >
                <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <label className="flex items-center gap-3 border-t border-line bg-white px-6 py-4 lg:w-[240px] lg:shrink-0 lg:border-l lg:border-t-0">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden className="shrink-0 text-[#295046]">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11.5 11.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Solutions"
              className="w-full bg-transparent text-[15px] font-medium text-[#295046] outline-none placeholder:text-[#295046]"
            />
          </label>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-x-[50px] gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((solution, i) => (
            <Reveal key={solution.title} delay={(i % 3) * 80} className="h-full">
              <SolutionCard {...solution} />
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-16 text-center text-[15px] font-medium text-smoke">
            No solutions match your search.
          </p>
        )}
      </div>
    </section>
  )
}

export default SolutionsGrid
