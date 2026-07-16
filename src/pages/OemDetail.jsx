import { useParams } from 'react-router-dom'
import { Reveal } from '../components/ui.jsx'
import OEM_SERVICES from '../data/oemServices.js'
import ComingSoon from './ComingSoon.jsx'

function OemDetail() {
  const { slug } = useParams()
  const detail = OEM_SERVICES[slug]

  if (!detail) return <ComingSoon />

  return (
    <>
      <section className="relative flex min-h-[664px] items-center justify-center overflow-hidden bg-forest">
        <img src={detail.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover animate-hero-zoom" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d322c] via-[#1d322c]/60 to-transparent opacity-95" />
        <div className="relative flex max-w-[1210px] flex-col items-center px-6 pt-[65px] text-center">
          <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
            OEM Service
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-6 text-[38px] font-bold leading-tight text-cream sm:text-[48px] lg:text-[60px]">
            {detail.title}
          </Reveal>
          <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-[1170px] text-[16px] font-medium text-cream lg:text-[20px]">
            {detail.intro}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-[30px] lg:px-[115px]">
        <div className="divide-y divide-line">
          {detail.sections.map(({ title, description, image }) => (
            <Reveal
              key={title}
              as="article"
              className="grid items-start gap-10 py-[48px] lg:grid-cols-[minmax(0,674px)_minmax(0,1fr)] lg:gap-16"
            >
              <div>
                <h2 className="text-[32px] font-bold capitalize text-forest">{title}</h2>
                <p className="mt-3 text-[15px] font-medium leading-[1.35] text-smoke">{description}</p>
              </div>
              <div className="group overflow-hidden rounded-[15px] lg:justify-self-end">
                <img
                  src={image}
                  alt={title}
                  className="aspect-[496/324] w-full max-w-[496px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative flex min-h-[470px] items-center justify-center overflow-hidden bg-forest py-14">
        <img
          src="/assets/sol-detail-quote-bg.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-bottom"
        />
        <Reveal className="relative mx-6 max-w-[880px] rounded-[15px] bg-black/30 px-6 py-11 text-center text-cream backdrop-blur-[2px] lg:px-[40px]">
          <p className="text-[15px] font-medium uppercase">{detail.quote.eyebrow}</p>
          <p className="mx-auto mt-2 max-w-[750px] text-[30px] font-bold capitalize leading-tight lg:text-[40px]">
            {detail.quote.headline}
          </p>
          <p className="mx-auto mt-5 max-w-[800px] text-[15px] font-medium leading-relaxed">
            {detail.quote.body}
          </p>
        </Reveal>
      </section>
    </>
  )
}

export default OemDetail
