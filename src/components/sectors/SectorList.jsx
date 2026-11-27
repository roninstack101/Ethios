import { Reveal } from '../ui.jsx'

/* Residential and commercial share the same key solutions list. */
const BUILDING_SOLUTIONS = [
  'Waterproofing systems',
  'Tile adhesives',
  'Structural repairs',
  'Flooring solutions',
  'Concrete admixtures',
  'Wall putty',
  'Textures',
  'Car park systems',
  'Thermal insulation',
]

const HEAVY_DUTY_SOLUTIONS = [
  'Waterproofing systems',
  'Tile adhesives',
  'Structural repairs',
  'Flooring solutions',
  'Concrete admixtures',
  'Wall putty',
  'Textures',
  'Epoxy & PU floor coatings',
  'Thermal insulation',
  'Joint sealants',
]

const SECTORS = [
  {
    title: 'Residential',
    description:
      'From high-rise apartments and townships to luxury villas and affordable housing, Ethios supports critical stages of residential construction with admixtures, waterproofing, tile installation, flooring and structural repair systems.',
    image: '/assets/sector-residential.png',
    projectTypes: ['High-rise apartments', 'Gated villas', 'Townships', 'Affordable housing', 'Luxury residences'],
    keySolutions: BUILDING_SOLUTIONS,
  },
  {
    title: 'Commercial',
    description:
      'Ethios offers construction solutions for office buildings, retail spaces, hotels, and mixed-use developments. Our products are designed to deliver long-lasting performance, durability, and high-quality finishes in demanding commercial environments.',
    image: '/assets/sector-commercial.png',
    projectTypes: ['Office complexes', 'Retail spaces', 'Hotels', 'Mixed-use developments'],
    keySolutions: BUILDING_SOLUTIONS,
  },
  {
    title: 'Industrial',
    description:
      'Manufacturing plants, warehouses, logistics parks, power plants and processing facilities face heavy use and harsh conditions. Ethios provides flooring, coating, sealing and strengthening systems designed for dependable long-term performance.',
    image: '/assets/sector-industrial.png',
    projectTypes: ['Manufacturing plants', 'Warehouses', 'Power plants', 'Processing units'],
    keySolutions: HEAVY_DUTY_SOLUTIONS,
  },
  {
    title: 'Infrastructure',
    description:
      'Ethios delivers construction solutions for bridges, roads, water treatment facilities, and other public infrastructure projects. Our products are designed to improve durability, protect structures from environmental exposure, and support long-term performance in demanding conditions.',
    image: '/assets/sector-infrastructure.png',
    projectTypes: [
      'Bridges & flyovers',
      'Roads & highways',
      'Water treatment facilities',
      'Public buildings',
      'Airports',
      'Ports',
    ],
    keySolutions: HEAVY_DUTY_SOLUTIONS,
  },
  {
    title: 'Institutional',
    description:
      'Ethios provides construction solutions for schools, hospitals, government buildings, and cultural institutions. Our products are designed to meet the performance, durability, and quality standards required for institutional projects while ensuring long-lasting protection and reliability.',
    image: '/assets/sector-institutional.png',
    projectTypes: ['Educational institutions', 'Healthcare facilities', 'Government buildings', 'Cultural centres'],
    keySolutions: [
      'Hygienic flooring',
      'Waterproofing',
      'Repair systems',
      'Tile adhesives',
      'Self-levelling micro toppings',
      'Thermal insulation',
    ],
  },
]

function InfoCard({ heading, items, dark = false }) {
  /* Key Solutions (dark) cards are always the wide two-column card so every
     sector matches; other long lists also go wide. */
  const wide = dark || items.length > 6
  return (
    <div
      /* sm:min-h matches the tallest card (6-row Key Solutions list) so every
         sector's cards are the same size, even with shorter lists. */
      className={`min-h-[150px] w-full shrink-0 rounded-[15px] p-4 sm:min-h-[205px] ${wide ? 'sm:w-[400px]' : 'sm:w-[240px]'} ${
        dark ? 'bg-forest' : 'border border-line bg-card'
      }`}
    >
      <p className={`text-[18px] font-semibold ${dark ? 'text-gold' : 'text-forest'}`}>{heading}</p>
      <ul
        className={`mt-2 list-disc pl-[15px] text-[14px] font-medium leading-[1.7] ${wide ? 'sm:columns-2 sm:gap-x-8' : ''} ${
          dark ? 'text-cream' : 'text-smoke'
        }`}
      >
        {items.map((item) => (
          <li key={item} className="break-inside-avoid">
            {item}
          </li>
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
    <section className="mx-auto max-w-[1440px] px-6 py-[63px] lg:px-12 xl:px-[115px]">
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
