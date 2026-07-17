import { SectionIntro, Reveal } from '../../ui.jsx'

function BenefitCard({ code, title, icon, bareIcon, description }) {
  return (
    <article className="group h-full rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg">
      {bareIcon ? (
        <span className="flex size-[50px] items-center justify-center rounded-[5px] bg-mist transition-transform duration-300 group-hover:scale-110">
          <img src={icon} alt="" className="size-[28px]" />
        </span>
      ) : (
        <img src={icon} alt="" className="size-[50px] transition-transform duration-300 group-hover:scale-110" />
      )}
      <p className="mt-5 text-[10px] font-medium uppercase tracking-[1.5px] text-brass">{code}</p>
      <h3 className="mt-1 text-[24px] font-bold capitalize text-forest">{title}</h3>
      <div className="mt-3 border-t border-line" />
      <p className="mt-3 text-[15px] font-medium text-smoke">{description}</p>
    </article>
  )
}

function DetailBenefits({ eyebrow, title, items }) {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-[1440px] px-6 py-[76px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro eyebrow={eyebrow} title={title} />
        </Reveal>

        <div className="mt-10 grid gap-x-[35px] gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {items.map((benefit, i) => (
            <Reveal key={benefit.code} delay={(i % 3) * 90} className="h-full">
              <BenefitCard {...benefit} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DetailBenefits
