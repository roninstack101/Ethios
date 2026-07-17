import { CountUp, Reveal } from './ui.jsx'

const STATS = [
  { value: '1000+', label: 'Projects Delivered' },
  { value: '350+', label: 'Satisfied Clients' },
  { value: '15+', label: 'Years Experience' },
  { value: '9+', label: 'States Served' },
]

function Stats() {
  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-8 px-6 py-10 lg:grid-cols-4 lg:px-12 xl:px-[115px]">
        {STATS.map(({ value, label }, i) => (
          <Reveal key={label} delay={i * 90}>
            <p className="text-[44px] font-bold leading-[1.28] text-forest lg:text-[60px]">
              <CountUp value={value} />
            </p>
            <p className="text-[13px] font-medium uppercase tracking-[0.9px] text-ink lg:text-[15px]">{label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Stats
