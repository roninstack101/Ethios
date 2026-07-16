/* The nine product categories shown on the Products page (Figma node 21-5216),
   in the design's reading order. `slug` doubles as the detail-page route. */
import { slugify } from './solutionDetails.js'

const PRODUCT_CATEGORIES = [
  {
    title: 'Waterproofing and Protection',
    image: '/assets/prodcat-waterproofing.png',
    description:
      'High-performance waterproofing and surface protection systems engineered to prevent leaks, withstand harsh conditions, and extend the life of your structures.',
  },
  {
    title: 'Admixture and Curing Compound',
    image: '/assets/prodcat-admixture.png',
    description:
      'Ethios Domestic supplies high-performance admixtures and curing compounds that improve concrete strength, workability, durability, and finish quality for reliable construction performance.',
  },
  {
    title: 'Expansion Joint and Other Accessories',
    image: '/assets/prodcat-expansion.png',
    description:
      'Ethios provides high-performance expansion joints and accessories that accommodate structural movement, prevent cracks and water ingress, and ensure long-term durability.',
  },
  {
    title: 'Flooring and Grouting Repair Rehabilitation',
    image: '/assets/prodcat-flooring.png',
    description:
      'Our floor and grout repair solutions fill cracks, restore surface integrity, and deliver lasting durability across residential, commercial, and industrial spaces.',
  },
  {
    title: 'Plaster and Block Adhesive',
    image: '/assets/prodcat-plaster.png',
    description:
      'High-performance block, brick, and plaster adhesives that provide strong bonding, reduce cracking, and enhance the durability of construction projects.',
  },
  {
    title: 'Precast',
    image: '/assets/prodcat-precast.png',
    description:
      'Ethios delivers high-quality precast construction solutions that offer superior strength, faster installation, and long-lasting performance for residential, commercial, and industrial projects.',
  },
  {
    title: 'Putty and Texture',
    image: '/assets/prodcat-putty.png',
    description:
      'High-quality wall putty solutions that create smooth, even surfaces by filling cracks and imperfections, ensuring a durable base for superior paint finishes.',
  },
  {
    title: 'Repair and Rehabilitation',
    image: '/assets/prodcat-repair.png',
    description:
      'High-performance repair and rehabilitation solutions that restore damaged structures, strengthen weak areas, and extend service life with lasting durability.',
  },
  {
    title: 'Tile and Stone Adhesive',
    image: '/assets/prodcat-tile.png',
    description:
      'High-performance tile and stone adhesives that deliver strong bonding, prevent cracking and lifting, and ensure durable, long-lasting installations.',
  },
].map((category) => ({ ...category, slug: slugify(category.title) }))

export default PRODUCT_CATEGORIES
