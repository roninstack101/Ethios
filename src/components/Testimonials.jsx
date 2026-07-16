import { useEffect, useState } from 'react'
import { Reveal } from './ui.jsx'

const AUTOPLAY_MS = 6000

/* Only the third testimonial is specified in the design; the others are placeholders
   so the carousel matches the "03 / 05" counter shown in the mockup. */
const TESTIMONIALS = [
  {
    quote:
      '“Ethios materials went into our podium slab five years ago. Not a single leak since — that speaks for itself.”',
    initials: 'SP',
    name: 'Suresh Patel',
    role: 'Project Head, Shreeji Infra',
  },
  {
    quote:
      '“From specification to application training for our crews, the support was complete. It never felt like just a supply contract.”',
    initials: 'VK',
    name: 'Vikram Kothari',
    role: 'MD, Kothari Constructions',
  },
  {
    quote:
      '“Their technical team was on site within a day of our call. Specification support like this is rare in this industry.”',
    initials: 'RM',
    name: 'Andesh Jain',
    role: 'Director, Wagad Buildcon',
  },
  {
    quote:
      '“Consistent quality across every batch, every site. Our engineers stopped double-checking deliveries a long time ago.”',
    initials: 'AN',
    name: 'Asha Nair',
    role: 'VP Projects, Meridian Developers',
  },
  {
    quote:
      '“We switched our entire tiling system to Ethios mid-project. The transition was seamless and the finish, flawless.”',
    initials: 'RD',
    name: 'Rajat Desai',
    role: 'Partner, Desai & Sons Builders',
  },
]

function Testimonials() {
  const [index, setIndex] = useState(2)
  const [paused, setPaused] = useState(false)
  const { quote, initials, name, role } = TESTIMONIALS[index]

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length)

  useEffect(() => {
    if (paused) return undefined
    const timer = setTimeout(next, AUTOPLAY_MS)
    return () => clearTimeout(timer)
  }, [index, paused])

  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-6 py-[87px] lg:grid-cols-[455px_1fr] lg:px-[115px]">
        <Reveal x={-28} y={0}>
          <p className="text-[15px] font-medium uppercase text-forest">Voices from the Field</p>
          <h2 className="mt-1 text-[30px] font-bold capitalize leading-[1.28] text-forest lg:text-[40px]">
            Trusted by India&rsquo;s most demanding builders
          </h2>

          <div className="mt-12 flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full bg-white text-forest shadow-sm transition-colors hover:bg-forest hover:text-cream"
            >
              <svg width="8" height="10" viewBox="0 0 8 10" aria-hidden>
                <path d="M8 0v10L0 5z" fill="currentColor" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? 'Play testimonials' : 'Pause testimonials'}
              className="flex size-10 items-center justify-center rounded-full bg-forest text-gold transition-opacity hover:opacity-90"
            >
              {paused ? (
                <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden>
                  <path d="M0 0v12l10-6z" fill="currentColor" />
                </svg>
              ) : (
                <svg width="9" height="12" viewBox="0 0 9 12" aria-hidden>
                  <rect width="3" height="12" rx="1" fill="currentColor" />
                  <rect x="6" width="3" height="12" rx="1" fill="currentColor" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full bg-white text-forest shadow-sm transition-colors hover:bg-forest hover:text-cream"
            >
              <svg width="8" height="10" viewBox="0 0 8 10" aria-hidden>
                <path d="M0 0v10l8-5z" fill="currentColor" />
              </svg>
            </button>
            <p className="ml-6 text-[10px] font-medium uppercase tracking-[0.5px] text-smoke">
              {String(index + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
            </p>
          </div>
        </Reveal>

        <Reveal
          as="figure"
          x={28}
          y={0}
          delay={120}
          className="relative flex min-h-[310px] flex-col overflow-hidden rounded-[15px] border border-line bg-card p-10 pb-12"
        >
          <svg width="44" height="32" viewBox="0 0 44 32" fill="none" aria-hidden className="text-brass">
            <path
              d="M0 32V19.2C0 8.6 6.4 1.6 17.2 0l2 4.4c-6 1.6-9.6 5.2-10 10h9.2V32H0zm25.6 0V19.2C25.6 8.6 32 1.6 42.8 0l1.2 4.4c-6 1.6-9.6 5.2-10 10h9.2V32H25.6z"
              fill="currentColor"
              transform="rotate(180 22 16)"
            />
          </svg>
          <blockquote className="mt-6 text-[19px] font-medium leading-normal text-ink lg:text-[24px]">
            {quote}
          </blockquote>
          <figcaption className="mt-auto flex items-center gap-2.5 pt-10">
            <span className="flex size-10 items-center justify-center rounded-full bg-forest text-[16px] font-bold text-gold">
              {initials}
            </span>
            <span>
              <span className="block text-[15px] font-bold text-ink">{name}</span>
              <span className="block text-[10px] text-smoke">{role}</span>
            </span>
          </figcaption>
          <span
            key={index}
            className="absolute inset-x-0 bottom-0 h-[5px] bg-brass"
            style={{
              animation: `progress-grow ${AUTOPLAY_MS}ms linear forwards`,
              animationPlayState: paused ? 'paused' : 'running',
            }}
            aria-hidden
          />
        </Reveal>
      </div>
    </section>
  )
}

export default Testimonials
