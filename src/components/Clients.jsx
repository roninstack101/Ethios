import { Reveal } from './ui.jsx'

/* Trusted-by client logos (Figma node 2:4054). The design renders every
   logo as a uniform grey silhouette, so each brand mark is used as an
   alpha mask over a solid `smoke` fill rather than shown in full colour.
   Display sizes come straight from the Figma mask-size values. */
const LOGOS = [
  { name: 'Zydus', src: '/assets/clients/zydus.png', w: 96, h: 82 },
  { name: 'Shivalik', src: '/assets/clients/shivalik.svg', w: 106, h: 37 },
  { name: 'Shilp', src: '/assets/clients/shilp.png', w: 102, h: 31 },
  { name: 'Goyal & Co.', src: '/assets/clients/goyal.png', w: 128, h: 45 },
  { name: 'L&T', src: '/assets/clients/lt.png', w: 62, h: 62 },
  { name: 'AFCONS', src: '/assets/clients/afcons.png', w: 104, h: 28 },
  { name: 'Rajpath Club', src: '/assets/clients/rajpath.png', w: 90, h: 84 },
  { name: 'Godrej Garden City', src: '/assets/clients/garden-city.svg', w: 124, h: 40 },
]

function LogoMark({ name, src, w, h }) {
  return (
    <span
      role="img"
      aria-label={name}
      className="mx-9 inline-block shrink-0 bg-smoke transition-colors duration-300 hover:bg-forest lg:mx-[46px]"
      style={{
        width: w,
        height: h,
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
      }}
    />
  )
}

function Clients() {
  return (
    <section className="border-b border-line bg-mist">
      <Reveal className="flex items-center overflow-hidden py-9">
        {/* Rendered three times so the loop stays seamless at any width. */}
        {[0, 1, 2].map((copy) => (
          <div key={copy} aria-hidden={copy > 0} className="flex shrink-0 animate-marquee-left items-center">
            {LOGOS.map((logo) => (
              <LogoMark key={logo.name} {...logo} />
            ))}
          </div>
        ))}
      </Reveal>
    </section>
  )
}

export default Clients
