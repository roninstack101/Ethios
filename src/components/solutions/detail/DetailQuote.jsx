import { Reveal } from '../../ui.jsx'

function DetailQuote({ image, headline, body }) {
  return (
    <section className="relative flex min-h-[470px] items-center justify-center overflow-hidden bg-forest py-14">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-bottom animate-hero-zoom" />

      <Reveal className="relative mx-6 max-w-[980px] rounded-[15px] bg-black/30 px-6 py-12 text-center text-cream backdrop-blur-[2px] lg:px-[70px]">
        <p className="mx-auto max-w-[828px] text-[20px] font-bold capitalize leading-normal lg:text-[24px]">
          {headline}
        </p>
        <p className="mx-auto mt-6 max-w-[840px] text-[15px] font-light leading-relaxed">{body}</p>
      </Reveal>
    </section>
  )
}

export default DetailQuote
