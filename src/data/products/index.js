/* Auto-loads every product-category catalog JSON in this folder.
   Each file is named <slug>.json and holds { title, intro, products }. */
const modules = import.meta.glob('./*.json', { eager: true })

const PRODUCT_CATALOG = {}
for (const [path, mod] of Object.entries(modules)) {
  const slug = path.replace('./', '').replace('.json', '')
  PRODUCT_CATALOG[slug] = mod.default
}

export default PRODUCT_CATALOG
