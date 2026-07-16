import { useEffect, useRef, useState } from 'react'
import { SectionIntro, Reveal } from '../ui.jsx'

const MILESTONES = [
  {
    year: '2011',
    title: 'Founded',
    description: 'Ethios established in Ahmedabad, Gujarat with a focus on construction solutions.',
  },
  {
    year: '2013',
    title: 'Portfolio Expansion',
    description: 'Expanded product range to cover waterproofing and repair solutions.',
  },
  {
    year: '2015',
    title: 'ISO Certification',
    description: 'Achieved ISO 9001:2015 certification for quality management systems.',
  },
  {
    year: '2017',
    title: 'Multi-State Operations',
    description: 'Services extended across multiple Indian states.',
  },
  {
    year: '2019',
    title: '500+ Projects',
    description: 'Crossed 500 completed projects with 200+ satisfied clients.',
  },
  {
    year: '2021',
    title: 'Diversified Solutions',
    description: 'Added industrial flooring, thermal insulation, and OEM capabilities.',
  },
  {
    year: '2023',
    title: 'Pan-India & Global',
    description: 'Present in 9+ states, serving international markets across 5 countries.',
  },
  {
    year: '2026',
    title: 'Future Focus',
    description: 'Innovation, quality, and sustainable growth continue to drive our vision.',
  },
]

function MilestoneCard({ year, title, description, alignRight }) {
  return (
    <article
      className={`rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg ${
        alignRight ? 'lg:text-right' : ''
      }`}
    >
      <p className="text-[40px] font-bold capitalize leading-normal text-forest">{year}</p>
      <h3 className="mt-1 text-[24px] font-medium capitalize text-ink">{title}</h3>
      <p className="mt-1 text-[15px] font-medium text-smoke">{description}</p>
    </article>
  )
}

function Journey() {
  const lineRef = useRef(null)
  const [lineIn, setLineIn] = useState(false)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineIn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-[57px] lg:px-[115px]">
      <Reveal>
        <SectionIntro eyebrow="Our Journey" title="A Decade of Growth" />
      </Reveal>

      <div ref={lineRef} className="relative mt-16">
        {/* Center line — grows downward when scrolled into view */}
        <span
          className="absolute inset-y-0 left-1/2 hidden w-[2px] -translate-x-1/2 origin-top bg-line lg:block"
          style={{ transform: `translateX(-50%) scaleY(${lineIn ? 1 : 0})`, transition: 'transform 1.4s ease-out' }}
          aria-hidden
        />

        <div className="space-y-8 lg:space-y-[30px]">
          {MILESTONES.map((milestone, i) => {
            const isLeft = i % 2 === 0
            return (
              <Reveal
                key={milestone.year}
                x={isLeft ? -32 : 32}
                y={0}
                delay={i * 70}
                className="relative lg:w-[calc(50%-14px)] lg:odd:mr-auto lg:even:ml-auto"
              >
                <span
                  className={`absolute top-[77px] z-10 hidden size-[10px] rounded-full border border-cream bg-forest lg:block ${
                    isLeft ? 'right-[-19px]' : 'left-[-19px]'
                  }`}
                  aria-hidden
                />
                <MilestoneCard {...milestone} alignRight={isLeft} />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Journey
