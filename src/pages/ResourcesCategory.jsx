import { useParams } from 'react-router-dom'
import { SectionIntro, Reveal } from '../components/ui.jsx'
import ResourceCard from '../components/resources/ResourceCard.jsx'
import ResourceContactForm from '../components/resources/ResourceContactForm.jsx'
import { RESOURCE_CATEGORIES } from '../data/resources.js'
import ComingSoon from './ComingSoon.jsx'

function ResourcesCategory() {
  const { slug } = useParams()
  const category = RESOURCE_CATEGORIES[slug]

  if (!category) return <ComingSoon />

  return (
    <>
      <section className="relative flex min-h-[520px] md:min-h-[600px] xl:min-h-[664px] items-center justify-center overflow-hidden bg-forest">
        <img src={category.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover animate-hero-zoom" />
        <div className="absolute inset-0 bg-forest/50" />
        <div className="relative flex max-w-[1210px] flex-col items-center px-6 pt-[65px] text-center">
          <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
            Resources
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-6 max-w-[1210px] text-[38px] font-bold leading-tight text-cream sm:text-[48px] lg:text-[60px]">
            {category.title}
          </Reveal>
          <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-[1170px] text-[17px] font-medium text-cream lg:text-[20px]">{category.intro}</Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-[1440px] px-6 py-[64px] lg:px-12 xl:px-[115px]">
          <Reveal>
            <SectionIntro eyebrow={category.eyebrow} title={category.sectionTitle} description={category.sectionDescription} />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {category.cards.map((card, i) => (
              <Reveal key={card.code} delay={(i % 3) * 80} className="h-full">
                <ResourceCard {...card} comingSoon />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-[80px] lg:px-12 xl:px-[115px]">
        <ResourceContactForm defaultCategory={category.defaultCategory} />
      </section>
    </>
  )
}

export default ResourcesCategory
