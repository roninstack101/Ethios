import { useState } from 'react'
import { SectionIntro, Reveal } from './ui.jsx'

const PILLARS = [
  {
    title: 'Comprehensive Solutions',
    description:
      'Dedicated technical service teams in every operating state. Specification to site, end to end.',
  },
  {
    title: 'Engineering Expertise',
    description:
      'Dedicated technical service teams in every operating state. Specification to site, end to end.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Dedicated technical service teams in every operating state. Specification to site, end to end.',
  },
  {
    title: 'Sustainability',
    description:
      'Dedicated technical service teams in every operating state. Specification to site, end to end.',
  },
  {
    title: 'Customer-Centric',
    description:
      'Dedicated technical service teams in every operating state. Specification to site, end to end.',
  },
]

const DEFAULT_PILLAR = PILLARS.length - 1

function WhyEthios() {
  const [expanded, setExpanded] = useState(DEFAULT_PILLAR)

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-[80px] lg:px-12 xl:px-[115px]">
      <Reveal>
        <SectionIntro
          eyebrow="Why Ethios"
          title="Built for the Long Run"
          description="We're not a catalogue vendor. We're a technical partner that stands behind every specification — from product selection to perfect execution."
        />
      </Reveal>

      {/* minmax(0, …) lets both columns shrink below their content's min width,
          so the section never overflows the viewport at mid-size screens. */}
      <div className="mt-14 grid items-end gap-8 xl:gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        {/* The source asset is a larger screenshot; these offsets reproduce the
            crop used in the Figma layout (image 550x386 within the design). */}
        <Reveal x={-28} y={0} className="relative aspect-[550/386] overflow-hidden rounded-[15px]">
          {/* The "Foundation to Finesse" badge is baked into this source image. */}
          <img
            src="/assets/why-ethios.png"
            alt="Ethios engineers reviewing plans on site"
            className="absolute max-w-none"
            style={{ width: '291.86%', height: '244.78%', left: '-11.54%', top: '-127.11%' }}
          />
        </Reveal>

        {/* Fixed height so interrupted card transitions can never change the row
            height and nudge the bottom-aligned image. 4 collapsed + 1 expanded card. */}
        <Reveal x={28} y={0} delay={120}>
          <div
            className="flex h-[495px] flex-col overflow-hidden"
            onMouseLeave={() => setExpanded(DEFAULT_PILLAR)}
          >
            {PILLARS.map(({ title, description }, i) => {
            const isOpen = expanded === i
            const isLast = i === PILLARS.length - 1
            /* Every card except the last carries a 14px hidden tail that the next
               card's rounded top overlaps, so the corner notches reveal the card
               above (stacked-sheets look). Visible bands stay 88px / 143px and the
               stack always sums to the wrapper's 495px. */
            const height = isLast
              ? isOpen ? 'h-[143px]' : 'h-[88px]'
              : isOpen ? 'h-[157px]' : 'h-[102px]'
            return (
              <button
                key={title}
                type="button"
                onMouseEnter={() => setExpanded(i)}
                onFocus={() => setExpanded(i)}
                onClick={() => setExpanded(i)}
                aria-expanded={isOpen}
                className={`shrink-0 overflow-hidden rounded-t-[20px] px-[26px] pt-[21px] text-left transition-[height] duration-300 ease-in-out ${
                  i > 0 ? '-mt-[14px]' : ''
                } ${i % 2 === 0 ? 'bg-forest' : 'bg-forest-2'} ${height}`}
              >
                <span className="flex items-baseline justify-between gap-4">
                  <span className="truncate text-[22px] font-bold capitalize leading-normal text-cream lg:text-[26px] xl:text-[32px]">
                    {title}
                  </span>
                  <span className="text-[22px] font-bold text-cream lg:text-[26px] xl:text-[32px]">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                </span>
                <span
                  className={`mt-3 block text-[15px] font-medium text-line transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {description}
                </span>
              </button>
            )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default WhyEthios
