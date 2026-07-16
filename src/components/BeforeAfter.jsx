import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SectionIntro, ArrowUpRight, Reveal } from './ui.jsx'

const REVEALS = [
  {
    layer: 'Layer 1',
    title: 'Wet Area Waterproofing',
    before: '/assets/ba1-before.png',
    after: '/assets/ba1-after.png',
    initial: 33,
    to: '/products/waterproofing-and-protection',
  },
  {
    layer: 'Layer 2',
    title: 'Tile Adhesive Application',
    before: '/assets/ba2-before.png',
    after: '/assets/ba2-after.png',
    initial: 62,
    to: '/products/tile-and-stone-adhesive',
  },
  {
    layer: 'Layer 3',
    title: 'Wall Putty Application',
    before: '/assets/ba3-before.png',
    after: '/assets/ba3-after.png',
    initial: 50,
    to: '/products/putty-and-texture',
  },
  {
    layer: 'Layer 4',
    title: 'Concrete Repair',
    before: '/assets/ba4-before.png',
    after: '/assets/ba4-after.png',
    initial: 39,
    to: '/products/repair-and-rehabilitation',
  },
]

function RevealCard({ layer, title, before, after, initial, to }) {
  const [position, setPosition] = useState(initial)
  const frameRef = useRef(null)

  const updateFromPointer = (clientX) => {
    const rect = frameRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(96, Math.max(4, pct)))
  }

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    updateFromPointer(e.clientX)
  }

  const onPointerMove = (e) => {
    if (e.buttons === 1) updateFromPointer(e.clientX)
  }

  return (
    <div>
      <div
        ref={frameRef}
        className="relative h-[340px] cursor-ew-resize touch-none select-none overflow-hidden rounded-[20px] sm:h-[432px]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
      >
        <img src={before} alt={`${title} — during application`} draggable="false" className="absolute inset-0 h-full w-full object-cover" />
        <img
          src={after}
          alt={`${title} — finished`}
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        />

        <span className="absolute left-[14px] top-[14px] flex h-6 w-[93px] items-center justify-center bg-mist/90 text-[10px] font-medium uppercase tracking-[0.5px] text-ink">
          Application
        </span>
        <span className="absolute right-[14px] top-[14px] flex h-6 w-[93px] items-center justify-center bg-forest/90 text-[10px] font-medium uppercase tracking-[0.5px] text-cream">
          Finished
        </span>

        <div className="absolute inset-y-0 w-px -translate-x-1/2 bg-gold" style={{ left: `${position}%` }}>
          <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-[3px] rounded-full bg-white text-ink shadow-md">
            <svg width="6" height="8" viewBox="0 0 6 8" aria-hidden>
              <path d="M6 0v8L0 4z" fill="currentColor" />
            </svg>
            <svg width="6" height="8" viewBox="0 0 6 8" aria-hidden>
              <path d="M0 0v8l6-4z" fill="currentColor" />
            </svg>
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[14px] font-medium text-smoke">{layer}</p>
          <h3 className="text-[20px] font-semibold text-ink lg:text-[24px]">{title}</h3>
        </div>
        <Link
          to={to}
          className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-gold px-5 text-[15px] font-semibold text-forest transition-opacity hover:opacity-90"
        >
          Explore
          <ArrowUpRight className="size-[11px]" />
        </Link>
      </div>
    </div>
  )
}

function BeforeAfter() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1440px] px-6 py-[71px] lg:px-[115px]">
        <Reveal>
          <SectionIntro
            eyebrow="Before / After Reveal"
            title="From application to invisibility, performance remains"
          />
        </Reveal>

        <div className="mt-12 grid gap-x-[120px] gap-y-[58px] lg:grid-cols-2">
          {REVEALS.map((reveal, i) => (
            <Reveal key={reveal.title} delay={(i % 2) * 100}>
              <RevealCard {...reveal} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter
