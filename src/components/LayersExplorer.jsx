import { useState } from 'react'
import { SectionIntro, ArrowRight, Reveal } from './ui.jsx'

/* Hotspot positions (percentages of the building image) from the Figma layout,
   each paired with the hidden layer it reveals. */
const HOTSPOTS = [
  {
    top: 9.1,
    left: 48.2,
    title: 'Roof Waterproofing',
    description:
      'Exposed membranes and coatings shielding the roof slab from rain, UV, and thermal movement.',
    products: ['Membranes', 'PU Coatings', 'Thermal Insulation'],
  },
  {
    top: 24.4,
    left: 38.2,
    title: 'Facade Protection',
    description:
      'Protective coatings and sealants keeping the envelope weathertight and colour-fast for decades.',
    products: ['Protective Coatings', 'Sealants', 'Texture Finishes'],
  },
  {
    top: 38.0,
    left: 33.9,
    title: 'Structural Concrete',
    description:
      'Admixtures and curing compounds engineered into the frame for strength and durability.',
    products: ['Admixtures', 'Curing Compounds', 'Precast Solutions'],
  },
  {
    top: 52.4,
    left: 10.3,
    title: 'Glazing & Movement Joints',
    description:
      'Silicone sealants and expansion joint systems absorbing movement around the curtain wall.',
    products: ['Silicone Sealants', 'Expansion Joints'],
  },
  {
    top: 60.7,
    left: 25.3,
    title: 'Podium Decks & Balconies',
    description:
      'Deck waterproofing and protective screeds on terraces, balconies, and planter zones.',
    products: ['Deck Membranes', 'Protective Screeds', 'Drainage Boards'],
  },
  {
    top: 63.2,
    left: 47.6,
    title: 'Lobby Tile & Stone',
    description:
      'High-bond adhesives and stain-free grouts beneath every tiled and stone-clad surface.',
    products: ['Tile Adhesives', 'Grouts', 'Surface Preparation'],
  },
  {
    top: 72.3,
    left: 8.8,
    title: 'Basement Waterproofing',
    description:
      'Crystalline systems and injection grouting keeping below-grade structures permanently dry.',
    products: ['Crystalline Systems', 'Injection Grouts', 'Damp Protection'],
  },
  {
    top: 80.1,
    left: 15.2,
    title: 'Plinth & Landscape',
    description:
      'Damp-proof courses and plasters guarding the ground interface against rising moisture.',
    products: ['Damp Proofing', 'Plasters', 'Block Adhesives'],
  },
  {
    top: 83.5,
    left: 34.2,
    title: 'Industrial Flooring',
    description:
      'Hard-wearing flooring systems and grouting under driveways, ramps, and service areas.',
    products: ['Epoxy Flooring', 'Floor Hardeners', 'Grouting'],
  },
]

function LayersExplorer() {
  const [active, setActive] = useState(null)
  const layer = active === null ? null : HOTSPOTS[active]

  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-[1440px] px-6 py-[58px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro
            center
            light
            eyebrow="Hidden Layers Explorer"
            title="Explore where Ethios materials live inside a building"
            description="Click any layer to discover the products, applications, and technical systems working behind the surface."
          />
        </Reveal>

        <Reveal delay={120} className="relative mx-auto mt-14 aspect-[1014/582] max-w-[1014px] overflow-hidden rounded-[20px]">
          <img
            src="/assets/building.png"
            alt="Modern building constructed with Ethios materials"
            className="absolute inset-0 h-full w-full -scale-x-100 object-cover"
          />
          {HOTSPOTS.map(({ top, left }, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(active === i ? null : i)}
              aria-label={`Explore layer: ${HOTSPOTS[i].title}`}
              aria-expanded={active === i}
              className="group absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              {active !== i && (
                <span className="absolute size-4 animate-ping rounded-full bg-white/40" aria-hidden />
              )}
              <span
                className={`relative size-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                  active === i ? 'border-forest bg-gold' : 'border-forest/30 bg-white'
                }`}
              />
              <span
                className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-[8px] bg-forest/85 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.5px] text-gold opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden
              >
                {HOTSPOTS[i].title}
              </span>
            </button>
          ))}

          {layer && (
            <aside
              key={active}
              className="animate-slide-in-right fixed inset-x-0 bottom-0 z-40 flex max-h-[75vh] flex-col overflow-y-auto rounded-t-[20px] bg-cream/95 p-6 backdrop-blur-sm sm:absolute sm:inset-y-0 sm:left-auto sm:right-0 sm:z-auto sm:max-h-none sm:w-full sm:max-w-[380px] sm:rounded-l-[20px] sm:rounded-tr-none sm:p-8"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close layer details"
                className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full border border-forest/30 text-forest transition-colors hover:bg-forest hover:text-cream"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>

              <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-brass">
                Layer {String(active + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-[24px] font-bold capitalize leading-tight text-forest">
                {layer.title}
              </h3>
              <p className="mt-4 text-[15px] font-medium text-ink">{layer.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {layer.products.map((product) => (
                  <span
                    key={product}
                    className="rounded-[5px] border border-forest bg-[rgba(54,82,74,0.1)] px-2 py-1 text-[10px] font-medium uppercase text-forest"
                  >
                    {product}
                  </span>
                ))}
              </div>

              <a
                href="#products"
                className="mt-auto inline-flex items-center gap-2 text-[15px] font-medium uppercase text-forest transition-opacity hover:opacity-70"
              >
                View Products
                <ArrowRight />
              </a>
            </aside>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default LayersExplorer
