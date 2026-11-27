import { Reveal } from '../../ui.jsx'

/* Figma 1:3441 / 1:3442 / 1:3445 — 470px banner on sand. The image is Figma's
   own render of the photo (its darker, warmer colour adjustments baked in),
   exported at the banner's width and 25px taller top and bottom, then masked
   to the banner. The 980px text card sits centred with a 30% black fill. */
function DetailQuote({ image, headline, body }) {
  return (
    <section className="relative flex min-h-[470px] items-center justify-center overflow-hidden bg-sand px-6 py-14">
      <div className="absolute inset-x-0 -inset-y-[25px]" aria-hidden>
        <img src={image} alt="" className="size-full object-cover animate-hero-zoom" />
      </div>

      <Reveal className="relative w-full max-w-[980px] overflow-hidden rounded-[15px] bg-black/30 px-6 py-[51px] text-center text-cream lg:px-[70px]">
        <p className="mx-auto max-w-[828px] text-[20px] font-bold capitalize leading-normal lg:text-[24px]">
          {headline}
        </p>
        <p className="mx-auto mt-3 max-w-[840px] text-[15px] font-light leading-normal">{body}</p>
      </Reveal>
    </section>
  )
}

export default DetailQuote
