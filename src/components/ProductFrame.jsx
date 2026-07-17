import { useEffect, useId, useRef, useState } from 'react'

/* Product tile for the catalog (sub-category) pages — exact Figma holder
   shape: a green frame whose bottom-right is a solid wedge formed by a big
   quarter-circle scoop in the photo area, a broken top edge with a raised
   stem at the top-right, the product name over a grey fade at the bottom
   left, and an info circle sitting on the wedge. Drawn at the design's
   343x366 reference size and scaled by the grid column width.

   Hovering the info circle opens a dark description card floating to the
   side of the tile (flips left / clamps to the viewport near the edges).
   Falls back to a generic line when no description is set. */
function ProductFrame({ title, image, description }) {
  const id = useId()
  const clipId = `${id}-clip`
  const fadeId = `${id}-fade`
  const tileRef = useRef(null)
  const closeTimer = useRef(null)
  const [card, setCard] = useState(null) // { left, top } | null

  const info =
    description ||
    `Technical data sheet, specifications, and application guidance for ${title} are available on request. Contact our team to learn more about this product.`

  const openCard = () => {
    clearTimeout(closeTimer.current)
    const el = tileRef.current
    if (!el) return
    
    // Using position: absolute avoids all CSS zoom coordinate translation bugs.
    const grid = el.closest('.grid')
    const columnGap = grid ? parseFloat(getComputedStyle(grid).columnGap) || 24 : 24
    
    // Internal coordinate system widths
    const extraWidth = 20
    const width = Math.round(2 * el.offsetWidth + columnGap + extraWidth)
    
    // Simple physical screen center check to decide if we should pop out left or right
    const r = el.getBoundingClientRect()
    const flip = r.left + r.width / 2 > window.innerWidth / 2
    
    setCard({ flip, width, height: el.offsetHeight })
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setCard(null), 140)
  }
  const cancelClose = () => clearTimeout(closeTimer.current)
  const closeCard = () => {
    clearTimeout(closeTimer.current)
    setCard(null)
  }

  // Close the card as soon as the page scrolls or resizes.
  useEffect(() => {
    if (!card) return undefined
    const dismiss = () => setCard(null)
    window.addEventListener('scroll', dismiss, { passive: true, capture: true })
    window.addEventListener('resize', dismiss)
    return () => {
      window.removeEventListener('scroll', dismiss, { capture: true })
      window.removeEventListener('resize', dismiss)
    }
  }, [card])

  return (
    <div ref={tileRef} className={`group relative w-full ${card ? 'z-50' : 'z-10'}`}>
      <svg viewBox="0 0 343 366" className="block h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id={clipId}>
            <path
              d="M 31 39
                 H 331
                 V 187
                 A 167.5 167.5 0 0 1 163.5 354.5
                 H 31
                 Q 13 354.5 13 336.5
                 V 57
                 Q 13 39 31 39
                 Z"
            />
          </clipPath>
          <linearGradient id={fadeId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4d5c57" stopOpacity="0" />
            <stop offset="1" stopColor="#4d5c57" />
          </linearGradient>
        </defs>

        {/* Photo area, clipped to the holder shape */}
        <g clipPath={`url(#${clipId})`}>
          <rect x="13" y="39" width="318" height="315.5" fill="#ffffff" />
          {image && (
            <image
              href={image}
              x="35"
              y="61"
              width="274"
              height="252"
              preserveAspectRatio="xMidYMid meet"
              className="transition-transform duration-500 ease-out group-hover:scale-105"
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            />
          )}
          {/* Grey fade behind the product name */}
          <rect x="13" y="200" width="318" height="154.5" fill={`url(#${fadeId})`} />
        </g>

        {/* Exact holder frame */}
        <path
          fill="#194339"
          fillRule="evenodd"
          d="M 31 25
             H 343
             V 334
             Q 343 366 311 366
             H 31
             Q 0 366 0 335
             V 56
             Q 0 25 31 25
             Z

             M 309 25
             H 331
             V 187
             A 167.5 167.5 0 0 1 163.5 354.5
             H 31
             Q 13 354.5 13 336.5
             V 57
             Q 13 39 31 39
             H 309
             Z"
        />

        {/* Raised right-side vertical stem */}
        <rect x="331" y="0" width="12" height="31" rx="6" fill="#194339" />
      </svg>

      {/* Product name over the fade — bottom-left, wraps to two lines */}
      <p className="absolute bottom-[9%] left-[8.5%] right-[30%] z-10 text-[15px] font-semibold leading-[1.18] text-white line-clamp-2">
        {title}
      </p>

      {/* Info button in the bottom-right scoop — hover/click opens the card */}
      <button
        type="button"
        aria-label={`More about ${title}`}
        onMouseEnter={openCard}
        onMouseLeave={scheduleClose}
        onFocus={openCard}
        onClick={() => (card ? closeCard() : openCard())}
        className="absolute left-[90%] top-[89.5%] z-10 flex aspect-square w-[8.5%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-forest shadow-sm transition-transform hover:scale-110"
      >
        <svg width="46%" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <circle cx="12" cy="6.5" r="1.7" />
          <rect x="10.3" y="10" width="3.4" height="8.5" rx="1.7" />
        </svg>
      </button>

      {/* Dark description card floating to the side of the tile */}
      {card && (
        <div
          role="dialog"
          aria-label={`${title} details`}
          onMouseEnter={cancelClose}
          onMouseLeave={closeCard}
          className={`absolute top-0 z-50 overflow-y-auto rounded-[16px] bg-[#1c1c1c]/90 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-md animate-[fadeIn_0.15s_ease-out] ${
             card.flip ? 'right-[calc(100%+14px)]' : 'left-[calc(100%+14px)]'
          }`}
          style={{ width: card.width, height: '100%' }}
          >
          <button
            type="button"
            aria-label="Close"
            onClick={closeCard}
            className="absolute right-4 top-4 flex size-7 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <h4 className="pr-8 text-[19px] font-bold leading-snug text-white">{title}</h4>
          <p className="mt-3 text-[15px] leading-relaxed text-white/70">{info}</p>
        </div>
      )}
    </div>
  )
}

export default ProductFrame
