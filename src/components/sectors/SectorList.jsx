import { Reveal } from '../ui.jsx'

const SECTORS = [
  {
    title: 'Residential',
    description:
      'From high-rise apartments and luxury villas to large-scale townships and affordable housing developments, Ethios provides comprehensive construction solutions for the residential sector. Our systems address waterproofing, flooring, tile installation, and structural repair needs across diverse residential project types.',
    image: '/assets/sector-residential.png',
    projectTypes: ['High-rise apartments', 'Gated villas', 'Townships', 'Affordable housing'],
    keySolutions: ['Waterproofing systems', 'Tile adhesives', 'Structural repairs', 'Flooring solutions'],
  },
  {
    title: 'Commercial',
    description:
      'Office complexes, retail spaces, hospitality projects, and mixed-use developments demand solutions that balance aesthetics with performance. Ethios delivers waterproofing, flooring, and finishing solutions that meet the high-traffic, durability, and visual requirements of commercial spaces.',
    image: '/assets/sector-commercial.png',
    projectTypes: ['Office complexes', 'Retail spaces', 'Hotels', 'Mixed-use developments'],
    keySolutions: ['Industrial flooring', 'Waterproofing membranes', 'Sealants & coatings', 'Surface protection'],
  },
  {
    title: 'Industrial',
    description:
      'Manufacturing plants, warehouses, power facilities, and processing units require construction solutions that withstand heavy loads, chemical exposure, and continuous operations. Our industrial flooring, waterproofing, and repair systems are engineered for demanding environments.',
    image: '/assets/sector-industrial.png',
    projectTypes: ['Manufacturing plants', 'Warehouses', 'Power plants', 'Processing units'],
    keySolutions: ['Epoxy flooring', 'Chemical-resistant coatings', 'Structural strengthening', 'Joint sealants'],
  },
  {
    title: 'Infrastructure',
    description:
      'Bridges, roads, water treatment facilities, and public infrastructure projects require long-lasting, high-performance construction solutions. Ethios supplies specialized materials for concrete repair, waterproofing, and protective coatings that extend the service life of critical infrastructure.',
    image: '/assets/sector-infrastructure.png',
    projectTypes: ['Bridges & flyovers', 'Roads & highways', 'Water treatment facilities', 'Public buildings'],
    keySolutions: ['Concrete repair', 'Bridge deck waterproofing', 'Protective coatings', 'Expansion joint systems'],
  },
  {
    title: 'Institutional',
    description:
      'Schools, hospitals, government buildings, and cultural institutions have specific requirements for safety, durability, and compliance. Ethios provides certified solutions that meet the stringent standards of institutional construction projects.',
    image: '/assets/sector-institutional.png',
    projectTypes: ['Educational institutions', 'Healthcare facilities', 'Government buildings', 'Cultural centers'],
    keySolutions: ['Hygienic flooring', 'Waterproofing', 'Repair systems', 'Tile installation'],
  },
]

function InfoCard({ heading, items, dark = false }) {
  return (
    <div
      className={`min-h-[150px] w-[240px] shrink-0 rounded-[15px] p-4 ${
        dark ? 'bg-forest' : 'border border-line bg-card'
      }`}
    >
      <p className={`text-[18px] font-semibold ${dark ? 'text-gold' : 'text-forest'}`}>{heading}</p>
      <ul
        className={`mt-2 list-disc pl-[15px] text-[14px] font-medium leading-[1.7] ${
          dark ? 'text-cream' : 'text-smoke'
        }`}
      >
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function SectorRow({ title, description, image, projectTypes, keySolutions }) {
  return (
    <article className="grid items-start gap-10 py-[52px] lg:grid-cols-[minmax(0,674px)_minmax(0,1fr)] lg:gap-16">
      <div>
        <h2 className="text-[32px] font-bold capitalize text-forest">{title}</h2>
        <p className="mt-3 text-[17px] font-medium leading-[1.5] text-smoke">{description}</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <InfoCard heading="Project Types" items={projectTypes} />
          <InfoCard heading="Key Solutions" items={keySolutions} dark />
        </div>
      </div>

      <div className="group overflow-hidden rounded-[15px] lg:justify-self-end">
        <img
          src={image}
          alt={`${title} sector projects`}
          className="aspect-[496/324] w-full max-w-[496px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    </article>
  )
}

function SectorList() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-[63px] lg:px-[115px]">
      <div className="divide-y divide-line">
        {SECTORS.map((sector) => (
          <Reveal key={sector.title}>
            <SectorRow {...sector} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default SectorList
