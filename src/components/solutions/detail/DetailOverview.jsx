import { useState } from 'react'
import { SectionIntro, Reveal } from '../../ui.jsx'

/* Numbered application list; the active entry expands into a white card
   showing its description (matches the Figma layout where "03." is open). */
function DetailOverview({ eyebrow, title, description, image, items }) {
  const [active, setActive] = useState(2)

  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1440px] px-6 py-[50px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro eyebrow={eyebrow} title={title} description={description} />
        </Reveal>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,595px)_minmax(0,1fr)] lg:gap-16">
          <Reveal x={-28} y={0} className="group overflow-hidden rounded-[15px]">
            <img src={image} alt={title} className="aspect-[595/500] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
          </Reveal>

          <Reveal as="ol" x={28} y={0} delay={120} className="space-y-2">
            {items.map(({ title: itemTitle, description: itemDescription }, i) => {
              const isActive = active === i
              const number = `${String(i + 1).padStart(2, '0')}.`
              return (
                <li key={itemTitle}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`w-full text-left transition-all duration-300 ease-in-out ${
                      isActive ? 'rounded-[15px] bg-card p-6 shadow-sm' : 'px-6 py-3'
                    }`}
                  >
                    <span
                      className={`flex gap-5 text-[24px] font-bold capitalize leading-normal lg:text-[32px] transition-colors duration-300 ${
                        isActive ? 'text-ink' : 'text-smoke/80'
                      }`}
                    >
                      <span className="w-[52px] shrink-0 text-right">{number}</span>
                      <span>{itemTitle}</span>
                    </span>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <span className="block pl-[72px] text-[15px] font-medium text-ink pb-1">
                          {itemDescription}
                        </span>
                      </div>
                    </div>
                  </button>
                </li>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default DetailOverview
