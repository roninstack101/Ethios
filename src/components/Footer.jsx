import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Products', to: '/products' },
  { label: 'Sectors', to: '/sectors' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resources', to: '/resources' },
]
const LEGAL_LINKS = [
  { label: 'Legal', to: '/legal' },
  { label: 'Careers', to: '/careers' },
]

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="mt-1 shrink-0">
      <path
        d="M7 1a4.4 4.4 0 0 1 4.4 4.4C11.4 8.7 7 13 7 13S2.6 8.7 2.6 5.4A4.4 4.4 0 0 1 7 1z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="7" cy="5.4" r="1.5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
      <rect x="1" y="2.5" width="12" height="9" rx="1.2" stroke="currentColor" strokeWidth="1.1" />
      <path d="M1.5 3.5L7 8l5.5-4.5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
      <path
        d="M3.2 1.5h2.1l1 2.7-1.4 1a8.6 8.6 0 0 0 3.9 3.9l1-1.4 2.7 1v2.1c0 .7-.6 1.3-1.3 1.2A11.3 11.3 0 0 1 2 2.8c-.1-.7.5-1.3 1.2-1.3z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-forest">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[115px]">
        {/* CTA */}
        <div className="pt-[117px] text-center">
          <h2 className="text-[30px] font-medium capitalize text-cream lg:text-[40px]">
            Ready to Strengthen Your Next Project?
          </h2>
          <p className="mx-auto mt-4 max-w-[779px] text-[15px] font-medium text-cream">
            Our technical team is ready to discuss your requirements, provide solution guidance, and
            support your project from start to finish.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:info@ethiosgroup.com"
              className="flex h-10 items-center rounded-full bg-cream px-6 text-[15px] font-semibold text-forest transition-opacity hover:opacity-90"
            >
              Discuss a project
            </a>
            <a
              href="mailto:info@ethiosgroup.com"
              className="flex h-10 items-center rounded-full border border-cream bg-cream/10 px-6 text-[15px] font-semibold text-cream transition-colors hover:bg-cream/20"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-[130px] grid gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.7fr_1.3fr]">
          <div>
            <img src="/assets/logo-footer.svg" alt="Ethios Group" className="h-[50px] w-[155px]" />
            <p className="mt-6 text-[10px] font-medium text-line">Solutions that Strengthen.</p>
            <p className="mt-2 text-[10px] font-medium text-line opacity-60">ISO 9001:2015 Certified</p>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold uppercase text-cream">Quick Links</h3>
            <ul className="mt-6 space-y-[10px]">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  {to ? (
                    <Link to={to} className="text-[15px] font-medium text-line transition-colors hover:text-cream">
                      {label}
                    </Link>
                  ) : (
                    <a href="#" className="text-[15px] font-medium text-line transition-colors hover:text-cream">
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold uppercase text-cream">Legal</h3>
            <ul className="mt-6 space-y-[10px]">
              {LEGAL_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-[15px] font-medium text-line transition-colors hover:text-cream">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold uppercase text-cream">Get in Touch</h3>
            <ul className="mt-6 space-y-[14px] text-[15px] font-medium text-line">
              <li className="flex gap-3">
                <PinIcon />
                <span>
                  215 Symmers Business Park,
                  <br />
                  Sarkhej, Ahmedabad - 382210,
                  <br />
                  Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href="mailto:info@ethiosgroup.com" className="transition-colors hover:text-cream">
                  info@ethiosgroup.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href="tel:+917929795685" className="transition-colors hover:text-cream">
                  +91-79-29795685
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/20 pb-9 pt-7">
          <p className="text-center text-[15px] font-medium text-cream opacity-50">
            © 2025 Ethios Enviro Solutions Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
