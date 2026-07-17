import { Link } from 'react-router-dom'
import { ArrowRight, Reveal } from '../components/ui.jsx'
import PRODUCT_CATEGORIES from '../data/productCategories.js'

function CategoryCard({ slug, title, image, description }) {
  return (
    <article className="group flex h-[494px] flex-col rounded-[15px] border border-line bg-card p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-forest/40 hover:shadow-lg">
      <div className="h-[205px] shrink-0 overflow-hidden rounded-[10px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <h2 className="mt-[19px] text-[20px] font-bold leading-normal text-[#295046]">{title}</h2>
      <p className="mt-2 text-[15px] leading-normal text-[#414141]">{description}</p>
      <div className="mt-auto border-t border-line pt-5">
        <Link
          to={`/products/${slug}`}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-forest px-5 text-[15px] font-medium uppercase text-forest transition-colors hover:bg-forest hover:text-cream"
        >
          Know More
          <ArrowRight />
        </Link>
      </div>
    </article>
  )
}

function Products() {
  return (
    <>
      <section className="relative flex min-h-[520px] md:min-h-[600px] xl:min-h-[664px] items-center justify-center overflow-hidden bg-forest">
        <img
          src="/assets/products-hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-forest/50" />

        <div className="relative flex max-w-[1170px] flex-col items-center px-6 pt-[65px] text-center">
          <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
            Our Products
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-6 text-[40px] font-bold leading-tight text-cream sm:text-[52px] lg:text-[60px]">
            Products that become part of the structure.
          </Reveal>
          <Reveal as="p" delay={240} className="mx-auto mt-6 max-w-[848px] text-[17px] font-medium text-cream lg:text-[20px]">
            Nine product categories. Each designed to disappear into the building and perform for
            decades.
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-[1440px] px-6 py-[80px] lg:px-12 xl:px-[115px]">
          <div className="grid grid-cols-1 gap-x-[50px] gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((category, i) => (
              <Reveal key={category.slug} delay={(i % 3) * 80} className="h-full">
                <CategoryCard {...category} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
