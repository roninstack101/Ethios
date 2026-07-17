import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'OEM Services', to: '/oem-services' },
  { label: 'Products', to: '/products' },
]

const SCOPE_LINKS = [
  { label: 'Overview', to: '/scope' },
  { label: 'Clients', to: '/scope/clients' },
]

const RESOURCE_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Insights', to: '/resources/insights' },
  { label: 'Request Support', to: '/resources/technical-support' },
  { label: 'Document & Data Sheets', to: '/resources/documents-data-sheets' },
  { label: 'Application Guidance', to: '/resources/application-guidance' },
]

function Dropdown({ label, to, links, open, setOpen, width = 260 }) {
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link to={to} className="flex items-center gap-2 py-5 transition-colors duration-200 hover:text-forest">
        {label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <div
        style={{ width }}
        className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-2xl bg-white/95 p-2 shadow-xl backdrop-blur-lg transition-all duration-200 ${
          open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2'
        }`}
      >
        {links.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-2.5 text-center text-[15px] font-medium text-ink transition-all duration-200 hover:bg-forest/5 hover:text-forest"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

/* Collapsible group inside the mobile menu */
function MobileGroup({ label, to, links, onNavigate }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          to={to}
          onClick={onNavigate}
          className="flex-1 py-3 text-[17px] font-medium text-ink transition-colors hover:text-forest"
        >
          {label}
        </Link>
        <button
          type="button"
          aria-label={`${open ? 'Collapse' : 'Expand'} ${label}`}
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-forest/5"
        >
          <svg
            width="12"
            height="7"
            viewBox="0 0 10 6"
            fill="none"
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          >
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}>
        {links.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            onClick={onNavigate}
            className="block py-2 pl-4 text-[15px] font-medium text-smoke transition-colors hover:text-forest"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

function Header() {
  const [resourceOpen, setResourceOpen] = useState(false)
  const [scopeOpen, setScopeOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu on route change and lock page scroll while open.
  useEffect(() => setMenuOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 h-[65px] bg-cream/80 backdrop-blur-sm max-w-[2160px] mx-auto">
      <div className="flex h-full w-full items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <img
            src="/assets/logo-header.png"
            alt="Ethios Group"
            className="h-[52px] w-[160px] object-contain lg:h-[68px] lg:w-[210px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-ink lg:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={label} to={to} className="transition-colors duration-200 hover:text-forest">
              {label}
            </Link>
          ))}

          <Dropdown label="Scope" to="/scope" links={SCOPE_LINKS} open={scopeOpen} setOpen={setScopeOpen} width={180} />

          <Link to="/projects" className="transition-colors duration-200 hover:text-forest">
            Projects
          </Link>

          <Dropdown label="Resources" to="/resources" links={RESOURCE_LINKS} open={resourceOpen} setOpen={setResourceOpen} />
        </nav>

        <div className="flex items-center gap-2">
          {/* Contact button — compact on phones */}
          <a
            href="#contact"
            className="flex h-[36px] items-center rounded-full bg-forest px-4 text-[14px] font-semibold text-gold transition-opacity hover:opacity-90 sm:h-[39px] sm:px-6 sm:text-[15px]"
          >
            Contact Us
          </a>

          {/* Hamburger — mobile / tablet only */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full text-forest transition-colors hover:bg-forest/5 lg:hidden"
          >
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden>
              {menuOpen ? (
                <path d="M3 1l16 14M19 1L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M1 1h20M1 8h20M1 15h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu panel — outside the header because its backdrop-blur
          creates a containing block that would trap fixed positioning */}
      <div
        className={`fixed inset-x-0 top-[65px] bottom-0 z-40 overflow-y-auto bg-cream transition-all duration-300 lg:hidden max-w-[2160px] mx-auto ${
          menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
        }`}
      >
        <nav className="divide-y divide-line px-6 py-4">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={closeMenu}
              className="block py-3 text-[17px] font-medium text-ink transition-colors hover:text-forest"
            >
              {label}
            </Link>
          ))}

          <MobileGroup label="Scope" to="/scope" links={SCOPE_LINKS} onNavigate={closeMenu} />

          <Link
            to="/projects"
            onClick={closeMenu}
            className="block py-3 text-[17px] font-medium text-ink transition-colors hover:text-forest"
          >
            Projects
          </Link>

          <MobileGroup label="Resources" to="/resources" links={RESOURCE_LINKS} onNavigate={closeMenu} />

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 flex h-11 items-center justify-center rounded-full bg-forest text-[15px] font-semibold text-gold"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </>
  )
}

export default Header
