import { SectionIntro, Reveal } from '../../ui.jsx'

function DetailApplications({ eyebrow, title, items }) {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-[65px] lg:px-12 xl:px-[115px]">
      <Reveal>
        <SectionIntro eyebrow={eyebrow} title={title} />
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((label, i) => (
          <Reveal key={label} delay={(i % 6) * 70} className="h-full">
            <div className="h-full min-h-[110px] rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg">
              <p className="text-[24px] font-bold capitalize text-forest">
                {String(i + 1).padStart(2, '0')}.
              </p>
              <p className="mt-1 text-[15px] font-medium leading-tight text-ink">{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default DetailApplications
