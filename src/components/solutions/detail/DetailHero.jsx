import { Reveal } from '../../ui.jsx'

function DetailHero({ badge, title, intro, image }) {
  return (
    <section className="relative flex min-h-[520px] md:min-h-[600px] xl:min-h-[664px] 2xl:min-h-[800px] items-center justify-center overflow-hidden bg-forest">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-[center_35%] animate-hero-zoom" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1d322c] via-[#1d322c]/60 to-transparent opacity-95" />

      <div className="relative flex max-w-[1210px] flex-col items-center px-6 pt-[65px] text-center">
        <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
          {badge}
        </Reveal>
        <Reveal as="h1" delay={120} className="mt-6 text-[40px] font-bold leading-tight text-cream sm:text-[52px] lg:text-[60px]">
          {title}
        </Reveal>
        <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-[1210px] text-[16px] font-medium text-cream lg:text-[20px]">
          {intro}
        </Reveal>
      </div>
    </section>
  )
}

export default DetailHero
