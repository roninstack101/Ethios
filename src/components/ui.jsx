import { useEffect, useRef, useState } from 'react'

/* Fades/slides its children in when they scroll into view. Pass `delay`
   (ms) to stagger a group, and `x`/`y` (px) to control the entrance
   direction. Respects prefers-reduced-motion by rendering fully shown. */
export function Reveal({ children, className = '', delay = 0, x = 0, y = 28, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return undefined
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : `translate(${x}px, ${y}px)`,
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}

/* Animates a stat like "1000+" from 0 up to its value when scrolled into view. */
export function CountUp({ value, duration = 1600, className = '' }) {
  const match = String(value).match(/^(\d+)([\s\S]*)$/)
  const target = match ? parseInt(match[1], 10) : null
  const suffix = match ? match[2] : ''
  const ref = useRef(null)
  const [display, setDisplay] = useState(target === null ? value : `0${suffix}`)

  useEffect(() => {
    if (target === null || !ref.current) return undefined
    let raf
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(`${Math.round(target * eased)}${suffix}`)
          if (progress < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, suffix, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}

export function SectionIntro({ eyebrow, title, description, light = false, center = false }) {
  return (
    <div className={center ? 'flex flex-col items-center text-center' : ''}>
      <p className={`text-[15px] font-medium uppercase ${light ? 'text-cream' : 'text-forest'}`}>{eyebrow}</p>
      <h2
        className={`mt-1 max-w-[1120px] text-[30px] font-bold capitalize leading-[1.28] lg:text-[40px] ${
          light ? 'text-cream' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-[873px] text-[15px] font-medium ${light ? 'text-cream' : 'text-ink'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export function ArrowRight({ className = '' }) {
  return (
    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden className={className}>
      <path d="M0 4.5h10.5M7.5 1l3.5 3.5L7.5 8" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export function ArrowUpRight({ className = '' }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className={className}>
      <path d="M1 11L11 1M11 1H3M11 1v8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
