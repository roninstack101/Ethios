import { Link } from 'react-router-dom'

/* Placeholder screen for sections that aren't built yet (Figma "Projects" node). */
function ComingSoon() {
  return (
    <section className="relative flex min-h-[800px] flex-col items-center justify-center overflow-hidden bg-forest">
      <img
        src="/assets/coming-soon-hero.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/60 to-transparent opacity-95" />

      <div className="relative flex flex-col items-center px-6 pt-[65px] text-center">
        <h1 className="text-[64px] font-bold leading-[1.06] text-cream sm:text-[90px] lg:text-[120px]">
          Coming
          <span className="block text-gold">Soon</span>
        </h1>
        <Link
          to="/"
          className="mt-12 flex h-10 items-center rounded-full border border-gold px-[15px] text-[15px] font-semibold text-gold transition-colors hover:bg-gold/10"
        >
          Go back to Home Page
        </Link>
      </div>
    </section>
  )
}

export default ComingSoon
