import { Link } from 'react-router-dom'

function ResourcesInsights() {
  return (
    <section className="relative flex min-h-[600px] md:min-h-[720px] xl:min-h-[800px] flex-col items-center justify-center overflow-hidden bg-forest">
      <img src="/assets/resources-insights-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/60 to-transparent opacity-95" />

      <div className="relative flex max-w-[836px] flex-col items-center px-6 pt-[65px] text-center">
        <h1 className="text-[48px] font-bold leading-[1.1] text-cream sm:text-[64px]">
          Coming <span className="text-gold">Soon</span>
        </h1>
        <p className="mt-6 text-[17px] font-medium text-cream lg:text-[18px]">
          Our insights section is being prepared with the latest industry articles, trend analyses, and expert
          perspectives. Check back soon for updates.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/solutions"
            className="flex h-10 items-center rounded-full bg-gold px-6 text-[15px] font-semibold text-forest transition-opacity hover:opacity-90"
          >
            Explore Solutions
          </Link>
          <Link
            to="/"
            className="flex h-10 items-center rounded-full border border-gold px-6 text-[15px] font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            Go back to Home Page
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ResourcesInsights
