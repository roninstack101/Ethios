import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'OEM Services', to: '/oem-services' },
  { label: 'Products', to: '/products' },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Projects', to: '/projects' },
]

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[65px] bg-cream/80 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-[115px]">
        <Link to="/" className="shrink-0">
          <img src="/assets/logo-header.png" alt="Ethios Group" className="h-[42px] w-[132px] object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium text-ink lg:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={label} to={to} className="transition-colors hover:text-forest">
              {label}
            </Link>
          ))}
          <Link to="/resources" className="flex items-center gap-1.5 transition-colors hover:text-forest">
            Resources
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" aria-hidden>
              <path d="M1 1l3.5 3L8 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </Link>
        </nav>

        <a
          href="#contact"
          className="flex h-[39px] items-center rounded-full bg-forest px-6 text-[15px] font-semibold text-gold transition-opacity hover:opacity-90"
        >
          Contact Us
        </a>
      </div>
    </header>
  )
}

export default Header
