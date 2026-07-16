import { useState } from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'OEM Services', to: '/oem-services' },
  { label: 'Products', to: '/products' },
  { label: 'Scope', to: '/scope' },
  { label: 'Projects', to: '/projects' },
]

const RESOURCE_LINKS = [
  { label: 'About Us', to: '/resources/about' },
  { label: 'Insights', to: '/resources/insights' },
  { label: 'Request Support', to: '/resources/support' },
  { label: 'Document & Data Sheets', to: '/resources/documents' },
  { label: 'Application Guidance', to: '/resources/guidance' },
]

function Header() {
  const [resourceOpen, setResourceOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[65px] bg-cream/80 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-[115px]">
        {/* Logo */}
        <Link to="/" className="shrink-0">
  <img
    src="/assets/logo-header.png"
    alt="Ethios Group"
    className="h-[68px] w-[210px] object-contain"
  />
</Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-ink lg:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="transition-colors duration-200 hover:text-forest"
            >
              {label}
            </Link>
          ))}

          {/* Resources */}
          <div
            className="relative"
            onMouseEnter={() => setResourceOpen(true)}
            onMouseLeave={() => setResourceOpen(false)}
          >
            <Link
              to="/resources"
              className="flex items-center gap-2 py-5 transition-colors duration-200 hover:text-forest"
            >
              Resources

              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform duration-300 ${
                  resourceOpen ? 'rotate-180' : ''
                }`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Dropdown */}
            <div
              className={`absolute left-1/2 top-full mt-2 w-[260px] -translate-x-1/2 rounded-2xl bg-white/95 p-2 shadow-xl backdrop-blur-lg transition-all duration-200 ${
                resourceOpen
                  ? 'visible opacity-100 translate-y-0'
                  : 'invisible opacity-0 -translate-y-2'
              }`}
            >
              {RESOURCE_LINKS.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setResourceOpen(false)}
                  className="block rounded-xl px-4 py-2.5 text-center text-[15px] font-medium text-ink transition-all duration-200 hover:bg-forest/5 hover:text-forest"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Contact Button */}
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