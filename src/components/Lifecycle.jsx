import { Fragment } from 'react'
import { SectionIntro, ArrowRight, Reveal } from './ui.jsx'

const STAGES = [
  {
    code: 'ST/01',
    title: 'Build',
    icon: '/assets/icon-build.svg',
    items: ['Admixtures', 'Curing compounds', 'Precast solutions', 'Grouting'],
    progress: ['bg-pine', 'bg-mist', 'bg-mist', 'bg-mist'],
  },
  {
    code: 'ST/02',
    title: 'Protect',
    icon: '/assets/icon-protect.svg',
    items: ['Waterproofing', 'Damp protection', 'Protective coatings'],
    progress: ['bg-pine', 'bg-moss', 'bg-mist', 'bg-mist'],
  },
  {
    code: 'ST/03',
    title: 'Repair',
    icon: '/assets/icon-repair.svg',
    items: ['Repair & rehabilitation', 'Expansion joints', 'Grouts'],
    progress: ['bg-pine', 'bg-moss', 'bg-brass', 'bg-mist'],
  },
  {
    code: 'ST/04',
    title: 'Finish',
    icon: '/assets/icon-finish.svg',
    items: ['Putty', 'Texture', 'Plaster', 'Tile & stone adhesive'],
    progress: ['bg-pine', 'bg-moss', 'bg-brass', 'bg-gold'],
  },
]

function StageCard({ code, title, icon, items, progress }) {
  return (
    <article className="group relative flex h-[285px] w-[272px] shrink-0 flex-col rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img src={icon} alt="" className="absolute right-5 top-5 size-[30px] transition-transform duration-300 group-hover:scale-110" />
      <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-brass">{code}</p>
      <h3 className="mt-1 text-[24px] font-bold capitalize text-forest">{title}</h3>
      <div className="mt-[11px] border-t border-dotted border-line" />
      <ul className="mt-[18px] space-y-[15px]">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-1.5">
            <span className="h-[2px] w-[10px] rounded-[1px] bg-brass" aria-hidden />
            <span className="text-[12px] font-medium text-smoke">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-[5px]">
        {progress.map((color, i) => (
          <span key={i} className={`h-[6px] w-[54px] rounded-[1px] ${color}`} aria-hidden />
        ))}
      </div>
    </article>
  )
}

function Lifecycle() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1440px] px-6 py-[52px] lg:px-[115px]">
        <Reveal>
          <SectionIntro
            eyebrow="Lifecycle"
            title="From Structure to Finish"
            description="Ethios products support every stage of construction — from core structural performance to final protection and surface finish."
          />
        </Reveal>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-between lg:gap-0">
          {STAGES.map((stage, i) => (
            <Fragment key={stage.code}>
              {i > 0 && (
                <span
                  className="hidden size-[25px] items-center justify-center rounded-full bg-forest text-gold lg:flex"
                  aria-hidden
                >
                  <ArrowRight className="size-[10px]" />
                </span>
              )}
              <Reveal delay={i * 100}>
                <StageCard {...stage} />
              </Reveal>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Lifecycle
