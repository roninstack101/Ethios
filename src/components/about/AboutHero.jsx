import { Reveal } from '../ui.jsx'

function AboutHero() {
  return (
    <section className="relative flex min-h-[520px] md:min-h-[600px] xl:min-h-[664px] items-center justify-center overflow-hidden bg-forest">
      <img
        src="/assets/about-hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-forest/50" />

      <div className="relative max-w-[1210px] px-6 pt-[65px] text-center">
        <Reveal as="h1" className="text-[40px] font-bold leading-tight text-cream sm:text-[52px] lg:text-[60px]">
          Materials behind stronger construction.
        </Reveal>
        <Reveal
          as="p"
          delay={150}
          className="mx-auto mt-6 max-w-[1210px] text-[17px] font-medium text-cream lg:text-[20px]"
        >
          Ethios Group creates construction materials that become part of the building —
          strengthening, protecting, and finishing structures across India.
        </Reveal>
      </div>
    </section>
  )
}

export default AboutHero
