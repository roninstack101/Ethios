import { Link } from 'react-router-dom'
import { ArrowRight } from '../ui.jsx'

function ComingSoonBadge() {
  return (
    <span className="absolute right-5 top-5 flex h-[25px] items-center gap-1.5 rounded-full bg-mist px-3 text-[11px] font-medium uppercase text-smoke">
      <span className="size-1 rounded-full bg-smoke" />
      Coming Soon
    </span>
  )
}

/* Used for the "Three Ways to Get Technical Support" cards (with icon + real
   link) and the Documents/Application-Guidance card grids (no icon, marked
   Coming Soon since those destinations don't exist yet in the source design). */
function ResourceCard({ code, title, description, to, icon, comingSoon = false }) {
  const Wrapper = to ? Link : 'div'

  return (
    <Wrapper
      {...(to ? { to } : {})}
      className={`group relative flex h-full flex-col rounded-[15px] border border-line bg-card p-5 ${
        to ? 'cursor-pointer transition-colors hover:border-forest' : ''
      }`}
    >
      {comingSoon && <ComingSoonBadge />}
      {icon && <div className="mb-4 flex size-[50px] items-center justify-center rounded-full bg-forest/10 text-forest">{icon}</div>}
      <p className="text-[10px] font-medium uppercase tracking-[1.5px] text-brass">{code}</p>
      <h3 className="mt-1 text-[24px] font-bold capitalize leading-tight text-forest">{title}</h3>
      <div className="mt-3 border-t border-line" />
      <p className="mt-4 text-[15px] font-medium text-smoke">{description}</p>
      {to && (
        <span className="mt-auto flex items-center gap-2 pt-6 text-[15px] font-medium uppercase text-forest">
          Explore
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </Wrapper>
  )
}

export default ResourceCard
