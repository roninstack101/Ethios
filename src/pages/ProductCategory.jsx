import { useParams } from 'react-router-dom'
import PRODUCT_CATALOG from '../data/products/index.js'
import PRODUCT_CATEGORIES from '../data/productCategories.js'
import { SectionIntro, Reveal } from '../components/ui.jsx'
import ProductFrame from '../components/ProductFrame.jsx'
import ComingSoon from './ComingSoon.jsx'

function ProductCategory() {
  const { slug } = useParams()
  const catalog = PRODUCT_CATALOG[slug]
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug)

  if (!catalog) return <ComingSoon />

  return (
    <>
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-forest">
        {(catalog.heroImage || category) && (
          <img
            src={catalog.heroImage || category.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
          />
        )}
        <div className="absolute inset-0 bg-forest/70" />

        <div className="relative flex max-w-[1210px] flex-col items-center px-6 pt-[65px] text-center">
          <Reveal as="span" className="flex h-[39px] items-center rounded-full border border-[#e8e6e2] bg-black/10 px-[30px] text-[15px] font-medium uppercase text-[#e8e6e2]">
            Products
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-4 text-[36px] font-bold leading-tight text-cream sm:text-[48px] lg:text-[60px]">
            {catalog.title}
          </Reveal>
          <Reveal as="p" delay={240} className="mx-auto mt-5 max-w-[1170px] text-[15px] font-medium text-cream">
            {catalog.intro}
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-[1440px] px-6 py-[70px] lg:px-[115px]">
          <Reveal>
            <SectionIntro eyebrow="What We Supply" title="Our Products" />
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {catalog.products.map((product, i) => (
              <Reveal key={`${product.name}-${i}`} delay={(i % 4) * 60}>
                <ProductFrame title={product.name} image={product.image} description={product.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductCategory
