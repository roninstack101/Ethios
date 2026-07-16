import { Reveal } from '../ui.jsx'

const PILLARS = [
  {
    title: 'Durability',
    description: 'Long-lasting materials reduce repair and replacement cycles.',
  },
  {
    title: 'Low VOC',
    description: 'Formulations that meet strict indoor air quality standards.',
  },
  {
    title: 'Green Building',
    description: 'Products that contribute to IGBC and GRIHA certification credits.',
  },
]

function Sustainability() {
  return (
    <section className="bg-forest">
      <div className="mx-auto max-w-[1440px] px-6 py-[58px] lg:px-[115px]">
        <Reveal className="text-center">
          <p className="text-[15px] font-medium uppercase text-cream">Sustainability</p>
          <h2 className="mt-1 text-[30px] font-bold capitalize text-cream lg:text-[40px]">
            Sustainability
          </h2>
          <p className="mx-auto mt-4 max-w-[973px] text-[15px] font-medium text-cream">
            Ethios is committed to sustainable construction through durable materials that extend
            building lifespans, low-VOC formulations that improve indoor air quality, and green
            building-compliant products that help projects achieve sustainability certifications.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ title, description }, i) => (
            <Reveal
              key={title}
              delay={i * 100}
              className="rounded-[15px] border border-[#59776f] bg-forest-2 p-5 text-cream transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-[#4a6b62]"
            >
              <h3 className="text-[24px] font-bold capitalize">{title}</h3>
              <p className="mt-2 max-w-[337px] text-[15px] font-medium">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sustainability
