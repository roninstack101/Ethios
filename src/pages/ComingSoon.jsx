import { Link } from 'react-router-dom'
import { Reveal } from '../components/ui.jsx'

function ClockIcon({ className = '' }) {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" aria-hidden className={className}>
      <path
        d="M44.38 18.52l6.27-.38C46.15 6.26 33.24-.5 20.65 2.86 7.24 6.45-.72 20.16 2.86 33.49c3.58 13.33 17.36 21.23 30.77 17.65 4.72-1.25 8.96-3.85 12.22-7.48 3.27-3.63 5.4-8.13 6.15-12.95"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M27 17v10l5 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* Placeholder screen for sections that aren't built yet (Figma "Projects" node).
   Reused by every other unbuilt destination — pass description/primaryTo/primaryLabel
   to tailor the copy and CTA without duplicating the layout. */
function ComingSoon({
  description = 'Detailed case studies are being prepared. In the meantime, explore our project sectors or contact our team to learn more about our project experience.',
  primaryTo = '/products',
  primaryLabel = 'Explore Products',
}) {
  return (
    <section className="relative flex min-h-[640px] md:min-h-[760px] xl:min-h-[800px] flex-col items-center justify-start overflow-hidden bg-forest">
      <img
        src="/assets/coming-soon-hero.png"
        alt=""
        className="absolute inset-0 h-full w-full -scale-x-100 object-cover object-[center_15%]"
      />
      {/* Bottom-heavy shade: keeps the crane skyline bright and dims the blueprint
          foreground at the base of the photo. Exact Figma gradient — an 800x1440
          layer rotated -90deg, which resolves to a vertical fade whose transparent
          stop sits at 131.01%/117.95%, past the layer's own edge, so it never
          fully clears even at the very top. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black from-0% to-black/0 to-[117.95%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest from-0% to-forest/0 to-[131.01%] opacity-95" />

      {/* Card sits at the exact Figma offsets: 281px from the top, 230px from each
          side (980px card centered in the 1440px frame), 125px below before the footer. */}
      <div className="relative mx-auto flex w-full max-w-[1440px] justify-center px-6 pb-16 pt-16 sm:pt-24 md:pt-32 lg:px-12 lg:pt-48 xl:px-[115px] xl:pt-[281px]">
        <Reveal className="flex w-full max-w-[980px] flex-col items-center justify-center overflow-clip rounded-[15px] bg-black/30 px-6 py-10 text-center sm:px-10 md:h-[394px] md:py-0">
          <ClockIcon className="size-[50px] text-cream" />
          <h1 className="mt-[26px] text-[40px] font-bold leading-[1.1] text-cream sm:text-[52px] lg:text-[60px]">
            Coming <span className="text-gold">Soon</span>
          </h1>
          <p className="mt-[7px] max-w-[836px] text-[16px] font-medium leading-normal text-cream lg:text-[20px]">
            {description}
          </p>
          <div className="mt-[18px] flex flex-wrap items-center justify-center gap-[25px]">
            <Link
              to={primaryTo}
              className="flex h-10 items-center rounded-full border border-gold px-5 text-[15px] font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              {primaryLabel}
            </Link>
            <Link
              to="/"
              className="flex h-10 items-center rounded-full border border-gold px-5 text-[15px] font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              Go back to Home Page
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default ComingSoon
