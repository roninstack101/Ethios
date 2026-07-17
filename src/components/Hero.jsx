import { Reveal } from './ui.jsx'

function Hero() {
  return (
    <section className="relative min-h-[520px] md:min-h-[600px] xl:min-h-[664px] overflow-hidden bg-forest">
      <img
        src="/assets/hero section extended.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-right animate-hero-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/60 to-transparent opacity-95" />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-14 pt-[110px] md:pb-20 md:pt-[164px] lg:px-12 xl:px-[115px]">
        <Reveal className="inline-flex h-[39px] items-center gap-2.5 rounded-full border border-gold bg-gold/10 px-5">
          <span className="size-1.5 rounded-full bg-gold" aria-hidden />
          <span className="text-[15px] font-medium uppercase text-gold">B2B Construction Solutions</span>
        </Reveal>

        <Reveal as="h1" delay={120} className="mt-6 text-[40px] font-bold leading-[1.28] sm:text-[52px] lg:text-[60px]">
          <span className="text-cream">Building Trust,</span>
          <br />
          <span className="text-gold">Engineering Solutions.</span>
        </Reveal>

        <Reveal as="p" delay={240} className="mt-2 max-w-[648px] text-[17px] font-medium leading-normal text-cream lg:text-[20px]">
          From waterproofing systems to high-performance admixtures, Ethios Group delivers
          construction chemistry that holds up — at landmark projects across India and beyond.
        </Reveal>

        <Reveal delay={360} className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="flex h-10 items-center rounded-full bg-gold px-5 text-[15px] font-semibold text-forest transition-transform hover:-translate-y-0.5 hover:opacity-90"
          >
            Discuss a project
          </a>
          <a
            href="#"
            className="flex h-10 items-center rounded-full border border-gold px-5 text-[15px] font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            Download Catalogue
          </a>
          <a
            href="#products"
            className="flex h-10 items-center rounded-full border border-cream bg-cream/10 px-5 text-[15px] font-semibold text-cream transition-colors hover:bg-cream/20"
          >
            View products
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero
