import { Link } from 'react-router-dom'
import { SectionIntro, ArrowRight, ArrowUpRight, Reveal } from './ui.jsx'
import { slugify } from '../data/solutionDetails.js'

const ROW_ONE = [
  { title: 'Waterproofing and Protection', image: '/assets/prod-waterproofing.png' },
  { title: 'Admixture and Curing Compound', image: '/assets/prod-admixture.png' },
  { title: 'Expansion Joint and Other Accessories', image: '/assets/prod-expansion.png' },
  { title: 'Flooring and Grouting Repair Rehabilitation', image: '/assets/prod-flooring.png' },
]

const ROW_TWO = [
  { title: 'Plaster and Block Adhesive', image: '/assets/prod-plaster.png' },
  { title: 'Putty and Texture', image: '/assets/prod-putty.png' },
  { title: 'Tile and Stone Adhesive', image: '/assets/prod-tile.png' },
]

function ProductBubble({ title, image }) {
  return (
    <Link
      to={`/products/${slugify(title)}`}
      className="group relative block h-[230px] w-[238px] shrink-0 overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 h-[128px] bg-gradient-to-b from-transparent to-ink" />
      <div className="absolute inset-0 bg-ink/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <p className="absolute left-5 top-[147px] w-[165px] text-[15px] font-medium leading-tight text-white">
        {title}
      </p>
      <span className="absolute left-5 top-[198px] flex items-center gap-2 text-[10px] font-medium uppercase text-white">
        <span className="border-b border-transparent pb-[3px] transition-colors group-hover:border-white">
          View Products
        </span>
        <ArrowRight className="size-[9px] group-hover:hidden" />
        <ArrowUpRight className="hidden size-[9px] group-hover:block" />
      </span>
    </Link>
  )
}

function Products() {
  return (
    <section id="products" className="bg-mist">
      <div className="mx-auto max-w-[1440px] px-6 py-[88px] lg:px-12 xl:px-[115px]">
        <Reveal>
          <SectionIntro
            eyebrow="Products"
            title="Products that become part of the structure"
            description="Ethios products are applied, covered, embedded or finished over — but their performance remains. Every category disappears into a different layer of construction and stays engaged for decades."
          />
        </Reveal>

        <div className="mt-16 flex flex-col items-center">
          <div className="flex flex-wrap justify-center">
            {ROW_ONE.map((product, i) => (
              <Reveal key={product.title} delay={i * 80}>
                <ProductBubble {...product} />
              </Reveal>
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            {ROW_TWO.map((product, i) => (
              <Reveal key={product.title} delay={i * 80}>
                <ProductBubble {...product} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-9 flex justify-center">
          <Link
            to="/products"
            className="flex h-10 items-center rounded-full bg-gold px-5 text-[15px] font-semibold text-forest transition-transform hover:-translate-y-0.5 hover:opacity-90"
          >
            View all Products
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default Products
