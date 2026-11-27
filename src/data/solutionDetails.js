/* Content for solution detail pages, keyed by URL slug. Slugs without an entry
   fall back to the Coming Soon screen. Node 21-3977 defines the layout; several
   headings there were lorem-ipsum placeholders, replaced with real copy. */
const SOLUTION_DETAILS = {
  'new-construction-waterproofing': {
    badge: 'Solutions - New Construction Waterproofing',
    title: 'Build Protection In From Day One',
    intro:
      'Waterproofing in new construction is not just a precaution, but also a critical foundation for structural integrity and longevity. At Ethios, we implement advanced waterproofing systems right from the initial stages of the project to prevent future leakage, dampness, and water-related deterioration.',
    heroImage: '/assets/sol-detail-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Building in durability from day one',
      description:
        'Every structure faces water from the day it is built. Specifying the right waterproofing system at the design stage protects each vulnerable zone before it is ever exposed.',
      image: '/assets/sol-detail-overview.png',
      items: [
        {
          title: 'Foundations & Footings',
          description:
            'Protecting below-grade concrete from ground moisture and hydrostatic water pressure with membranes and integral crystalline systems.',
        },
        {
          title: 'Terraces & Podiums',
          description:
            'Multi-layer waterproofing that handles thermal movement, ponding water, and heavy landscape or traffic loads.',
        },
        {
          title: 'Basements & Underground Structures',
          description:
            'High-performance waterproofing systems that resist hydrostatic pressure and help prevent seepage in basements, retaining walls, and other below-ground structures.',
        },
        {
          title: 'Water Tanks & STP/ETP',
          description:
            'Potable-safe and chemical-resistant coatings that keep tanks and effluent treatment structures permanently watertight.',
        },
        {
          title: 'Bathrooms & Wet Areas',
          description:
            'Seamless membranes beneath tiles and fittings that stop seepage into slabs and adjoining rooms.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Basements',
        'Terraces & Roofs',
        'Foundations',
        'Water Tanks',
        'Bathrooms & Wet Areas',
        'Retaining Walls',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Longer Lifespan',
          icon: '/assets/benefits/new-construction-waterproofing-v01.svg',
          description: 'Increases the lifespan of concrete and foundational elements.',
        },
        {
          code: 'V/02',
          title: 'Lower Maintenance',
          icon: '/assets/benefits/new-construction-waterproofing-v02.svg',
          description: 'Minimises future maintenance and repair costs.',
        },
        {
          code: 'V/03',
          title: 'Long-Term Protection',
          icon: '/assets/benefits/new-construction-waterproofing-v03.svg',
          description: 'Provides long-lasting protection against water ingress.',
        },
        {
          code: 'V/04',
          title: 'Finish Compatibility',
          icon: '/assets/benefits/new-construction-waterproofing-v04.svg',
          description:
            'Compatible with various finishes including tiles, pavers, screeds, and exposed coatings.',
        },
        {
          code: 'V/05',
          title: 'Seepage Protection',
          icon: '/assets/benefits/new-construction-waterproofing-v05.svg',
          description: 'Reduces long-term water seepage and leakage risk across critical zones.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Waterproofing as a proactive solution, not a reactive repair.',
      body:
        'We use a combination of liquid-applied membranes, crystalline admixtures, cementitious coatings, and HDPE sheets, selected based on the site conditions and exposure levels. Every system is selected for the area, exposure and construction method, giving the project dependable protection from the start. Our focus is on delivering integrated waterproofing systems that protect the structure and provide long-term reliability.',
    },
  },
  'repair-rehabilitation-waterproofing': {
    badge: 'Solutions - Repair & Rehabilitation Waterproofing',
    title: 'Repair & Rehabilitation Waterproofing',
    intro:
      'Over time, structures can develop water ingress, cracks, dampness, and corrosion due to continuous exposure to the elements. Our Repair & Rehabilitation Waterproofing solutions are designed to restore structural integrity, address existing damage, and provide long-term protection.',
    heroImage: '/assets/sol-detail-repair-rehab-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Restoring strength. Renewing protection.',
      description:
        'Rehabilitation begins with diagnosing how water gets in, then rebuilding each protective layer so the structure performs like new.',
      image: '/assets/sol-detail-repair-rehab-overview.png',
      items: [
        {
          title: 'Leak Arresting & Crack Treatment',
          description:
            'Injection grouting and crack-bridging treatments that stop active leaks at their source.',
        },
        {
          title: 'Surface Reproofing',
          description:
            'Re-establishing worn waterproof layers on roofs, terraces, and walls with modern coating systems.',
        },
        {
          title: 'Sealant Replacement & Detailing',
          description:
            'Replacing damaged sealants in joints, expansion gaps, and parapet walls with flexible PU or polysulphide sealants to prevent moisture entry.',
        },
        {
          title: 'Membrane Overlays',
          description:
            'Applying new membrane systems over prepared existing surfaces for renewed long-term protection.',
        },
        {
          title: 'Reinforcement Protection',
          description:
            'Anti-corrosion treatment of exposed rebars to halt deterioration inside aged concrete.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Old Basements',
        'Leaking Terraces & Roofs',
        'Cracked Water Tanks',
        'Damaged Wet Areas',
        'Retrofitting of Old Buildings',
        'Structural Joints & Expansion Gaps',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Leak Control',
          icon: '/assets/benefits/repair-rehabilitation-waterproofing-v01.svg',
          description:
            'Stops active leakage at the source and helps protect treated areas from further water ingress.',
        },
        {
          code: 'V/02',
          title: 'Safer Structures',
          icon: '/assets/benefits/repair-rehabilitation-waterproofing-v02.svg',
          description: 'Improves safety and durability of aged concrete and masonry elements.',
        },
        {
          code: 'V/03',
          title: 'Weather Resistance',
          icon: '/assets/benefits/repair-rehabilitation-waterproofing-v03.svg',
          description: 'Increases resistance to chemicals, weather, and UV exposure.',
        },
        {
          code: 'V/04',
          title: 'Broad Compatibility',
          icon: '/assets/benefits/repair-rehabilitation-waterproofing-v04.svg',
          description: 'Compatible with both heritage and modern construction.',
        },
        {
          code: 'V/05',
          title: 'Lower Lifecycle Cost',
          icon: '/assets/benefits/repair-rehabilitation-waterproofing-v05.svg',
          description: 'Reduces life-cycle maintenance costs with long-lasting treatment systems.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'A Waterproofing Strategy Built Around the Structure',
      body:
        'We use a combination of liquid-applied membranes, crystalline admixtures, cementitious coatings, and HDPE sheets, selected based on site conditions, structural damage, and exposure levels. Our focus is on delivering a seamless, multi-layered waterproofing system that reintegrates with the existing structure and performs reliably for years.',
    },
  },
  'liquid-membranes': {
    badge: 'Solutions - Liquid Membranes',
    title: 'Liquid Membranes',
    intro:
      'Liquid membranes form a continuous waterproofing layer across flat, curved and hard-to-reach surfaces. Ethios selects the right system for the substrate, exposure and movement expected on the project, helping deliver reliable.',
    heroImage: '/assets/sol-detail-liquid-membranes-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Seamless Protection with Versatile Application',
      description:
        'Each liquid membrane chemistry suits a different exposure condition; the right choice comes from matching the product to the substrate and its performance requirement.',
      image: '/assets/sol-detail-liquid-membranes-overview.png',
      items: [
        {
          title: 'Cementitious Coatings',
          description:
            'Easy-to-apply waterproofing coatings for internal wet areas such as bathrooms, kitchens, balconies, and water tanks. They bond well with concrete and masonry to protect against moisture and water ingress.',
        },
        {
          title: 'Acrylic Coatings',
          description:
            'UV-resistant, flexible waterproofing coatings ideal for exposed roofs, terraces, balconies, and parapet walls. Designed to withstand weather exposure while maintaining long-term performance.',
        },
        {
          title: 'Bitumen Modified Coatings',
          description:
            'Advanced bitumen modified acrylic and polyurethane coatings provide excellent waterproofing performance and anti-root protection for basements and retaining walls.',
        },
        {
          title: 'Polyurethane (PU) Coatings',
          description:
            'Hybrid polyurethanes and pure polyurethanes are highly flexible waterproofing systems that bridge cracks and provide durable protection for podiums, basements, terraces, and other highly demanding areas.',
        },
        {
          title: 'Polyurea / Hybrid Coatings',
          description:
            'Fast-curing, high-performance waterproofing for industrial and infrastructure applications. Offers excellent resistance to chemicals, abrasion, and harsh environmental conditions with extended service life.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Terraces & Podiums',
        'Wet Areas (Bathrooms, etc.)',
        'Basement Walls & Slabs',
        'Balconies & Planters',
        'Water Tanks',
        'Retaining Walls',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Faster Application',
          icon: '/assets/benefits/liquid-membranes-v01.svg',
          description: 'Selected systems cure quickly, helping work move ahead with less waiting time.',
        },
        {
          code: 'V/02',
          title: 'Complex Detailing',
          icon: '/assets/benefits/liquid-membranes-v02.svg',
          description: 'Liquid application covers corners, curves, joints and complex shapes with ease.',
        },
        {
          code: 'V/03',
          title: 'Joint-Free Protection',
          icon: '/assets/benefits/liquid-membranes-v03.svg',
          description: 'Forms a continuous seamless layer without joints or overlaps.',
        },
        {
          code: 'V/04',
          title: 'Strong Surface Bond',
          icon: '/assets/benefits/liquid-membranes-v04.svg',
          description: 'Designed to adhere to suitable concrete, metal, tile and masonry surfaces.',
        },
        {
          code: 'V/05',
          title: 'Flexible Performance',
          icon: '/assets/benefits/liquid-membranes-v05.svg',
          description: 'Selected systems bridge minor cracks and accommodate movement.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Seamless protection that adapts to every surface, every challenge.',
      body:
        "With proper surface preparation and expert application, Ethios's liquid membrane systems provide an efficient and highly reliable waterproofing solution tailored to modern construction challenges.",
    },
  },
  'sheet-membranes': {
    badge: 'Solutions - Preformed Sheet Membranes',
    title: 'Preformed Sheet Membranes',
    intro:
      "Preformed sheet membranes provide durable, factory-manufactured waterproofing systems designed for consistent performance in demanding construction environments. We help you select the right membrane system with the right detailing based on your project's structural requirements, exposure conditions, and application needs to deliver reliable, long-term protection across roofs, basements and other demanding areas.",
    heroImage: '/assets/sol-detail-sheet-membranes-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Engineered Waterproofing with Structured Reliability.',
      description:
        'Pre-formed membranes bring factory-controlled consistency to site; each material suits a different substrate, exposure, and installation method.',
      image: '/assets/sol-detail-sheet-membranes-overview.png',
      imagePosition: 'top', // Figma pins this square photo to the top of the frame
      items: [
        {
          title: 'HDPE (High-Density Polyethylene) Membranes',
          description:
            'Pre-applied, fully bonded membranes for basements, rafts, and tunnels that resist puncture and hydrostatic pressure.',
        },
        {
          title: 'TPO (Thermoplastic Polyolefin) Membranes',
          description:
            'Heat-weldable single-ply membranes offering durable, energy-efficient roofing protection for new as well as old roofs.',
        },
        {
          title: 'SBS (Styrene Butadiene Styrene) Membranes',
          description:
            'Elastomeric bituminous membranes that stay flexible in cold conditions and handle structural movement.',
        },
        {
          title: 'APP (Atactic Polypropylene) Membranes',
          description:
            "Torch-applied bituminous membranes for terraces, foundations and basements where precision and detailing are crucial to the project's success.",
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Basement Rafts & Retaining Walls',
        'Terraces & Roofs',
        'Wet Areas Below Tiling',
        'Tunnels & Substructures',
        'Bridge Decks & Podiums',
        'Waterproofing Over Screeds',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Consistent Factory Quality',
          icon: '/assets/benefits/sheet-membranes-v01.svg',
          description:
            'Manufactured under controlled conditions for uniform thickness and dependable performance.',
        },
        {
          code: 'V/02',
          title: 'Engineered for Demanding Environments',
          icon: '/assets/benefits/sheet-membranes-v02.svg',
          description:
            'Resists weathering, root penetration, mechanical stress, and environmental exposure.',
        },
        {
          code: 'V/03',
          title: 'Versatile Installation Options',
          icon: '/assets/benefits/sheet-membranes-v03.svg',
          description:
            'Available in torch-applied, self-adhesive, and mechanically fixed systems to suit different project needs.',
        },
        {
          code: 'V/04',
          title: 'Reliable Surface Protection',
          icon: '/assets/benefits/sheet-membranes-v04.svg',
          description: 'Suitable for both horizontal and vertical waterproofing applications.',
        },
        {
          code: 'V/05',
          title: 'Compatible with Multiple Finishes',
          icon: '/assets/benefits/sheet-membranes-v05.svg',
          description: 'Works seamlessly beneath screeds, tiles, pavers, and protective toppings.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Strong Protection Starts with Precise Detailing',
      body:
        'From residential rooftops to critical below-grade applications, Ethios ensures precise installation and correct detailing of sheet membranes for long-lasting, watertight security across all types of structures.',
    },
  },
  'basement-waterproofing': {
    badge: 'Solutions - New Construction Waterproofing',
    title: 'Basement Waterproofing',
    intro:
      'From foundations, rafts to basement walls, Ethios delivers waterproofing solutions tailored to site conditions and groundwater exposure. Our systems are designed to prevent water ingress, reduce structural risk, and ensure dependable long-term performance.',
    heroImage: '/assets/sol-detail-basement-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Waterproofing from the Ground Up',
      description:
        'Below-ground spaces face constant moisture and pressure. The right system may combine preformed membranes, liquid applied coatings, integral compounds and targeted leak treatment based on the site conditions and water table.',
      image: '/assets/sol-detail-basement-overview.png',
      items: [
        {
          title: 'External Waterproofing',
          description:
            'Membrane and coating systems applied on the positive side to stop groundwater before it reaches the structure.',
        },
        {
          title: 'Integral Waterproofing (Negative Side Protection)',
          description:
            'Crystalline and cementitious systems applied from inside to block moisture in occupied basements.',
        },
        {
          title: 'Injection Grouting for Active Leaks',
          description:
            'PU or acrylate injection grouts seal active water paths through cracks, joints and honeycombed concrete, allowing leaks to be treated at their source. This method quickly and effectively blocks moisture pathways.',
        },
        {
          title: 'Basement Slab Protection',
          description:
            'Raft and slab waterproofing that resists hydrostatic uplift and capillary rise beneath the structure.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Basement Walls (Internal & External)',
        'Basement Foundations & Rafts',
        'Lift Pits',
        'Underground Car Parks',
        'Basement Utility Rooms',
        'Expansion Joints in Basements',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Long-Term Protection',
          icon: '/assets/benefits/basement-waterproofing-v01.svg',
          description:
            'Long-lasting resistance to seepage, capillary rise, and dampness in below-ground areas.',
        },
        {
          code: 'V/02',
          title: 'Healthier Spaces',
          icon: '/assets/benefits/basement-waterproofing-v02.svg',
          description:
            'Helps control the moisture conditions that contribute to mould, odour, bacteria, and structural corrosion.',
        },
        {
          code: 'V/03',
          title: 'Material Compatibility',
          icon: '/assets/benefits/basement-waterproofing-v03.svg',
          description: 'Compatibility with RCC, blockwork, and precast elements.',
        },
        {
          code: 'V/04',
          title: 'Site-Specific Systems',
          icon: '/assets/benefits/basement-waterproofing-v04.svg',
          description: 'Customised systems based on water table levels and structural conditions.',
        },
        {
          code: 'V/05',
          title: 'Usable Basements',
          icon: '/assets/benefits/basement-waterproofing-v05.svg',
          description:
            'Enhances the longevity and usability of basements for storage, parking, or occupancy.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Protect what lies beneath.',
      body:
        "Every basement presents different site conditions, water pressures, and construction challenges. We design and execute waterproofing systems tailored to each project's structural and environmental requirements.",
    },
  },
  'podium-terrace-waterproofing': {
    badge: 'Solutions - Podium & Terrace Waterproofing',
    title: 'Podium & Terrace Waterproofing',
    intro:
      'Podiums and terraces are high-exposure zones, constantly subjected to UV rays, rain, temperature fluctuations, and surface runoff. Without effective waterproofing, these areas are highly susceptible to leakage, cracks, and dampness due to deterioration of finishing layers like tiles, china mosaic, pavers or softscapes. At Ethios, we offer specialized podium and terrace waterproofing systems designed for long-term protection and performance.',
    heroImage: '/assets/sol-detail-podium-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Built to Withstand Weather. Designed for Longevity.',
      description:
        'Exposed decks demand systems that handle sun, rain, and foot traffic together — from the membrane below to the finish above.',
      image: '/assets/sol-detail-podium-overview.png',
      items: [
        {
          title: 'Flexible Liquid Membranes',
          description:
            'Seamless PU and acrylic coatings that accommodate thermal movement on exposed decks.',
        },
        {
          title: 'Preformed Sheet Membrane Systems',
          description:
            'Pre-formed membranes for podiums and terraces requiring uniform, heavy-duty protection.',
        },
        {
          title: 'Anti-Root Barriers for Garden Podiums',
          description:
            'Special liquid applied membranes that prevent root intrusion, ideal for landscaped decks and terrace/podium gardens.',
        },
        {
          title: 'Slope Correction & Drainage Systems',
          description:
            'Screeds, brickbat/India type waterproofing and drainage detailing that move water off the deck before it can pond and penetrate.',
        },
        {
          title: 'Compatible Protective Finishes',
          description:
            'Tile, paver, and coating finishes installed over the waterproofing without compromising it.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Exposed Terraces',
        'Podium Slabs',
        'Balconies',
        'Open-to-Sky Areas',
        'Rooftop Gardens & Planters',
        'Parking Decks',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'All-Weather Protection',
          icon: '/assets/benefits/podium-terrace-waterproofing-v01.svg',
          description: 'Systems designed for UV exposure, rain and changing temperatures.',
        },
        {
          code: 'V/02',
          title: 'Built to Last',
          icon: '/assets/benefits/podium-terrace-waterproofing-v02.svg',
          description: 'Long-lasting performance even in exposed conditions.',
        },
        {
          code: 'V/03',
          title: 'Finish Friendly',
          icon: '/assets/benefits/podium-terrace-waterproofing-v03.svg',
          description: 'Supports surface finishes without compromising performance.',
        },
        {
          code: 'V/04',
          title: 'Leakage Control',
          icon: '/assets/benefits/podium-terrace-waterproofing-v04.svg',
          description: 'Reduces risk of leakage into interior spaces below.',
        },
        {
          code: 'V/05',
          title: 'Improves Structural Durability',
          icon: '/assets/benefits/podium-terrace-waterproofing-v05.svg',
          description:
            'Protects concrete surfaces from moisture-related deterioration and extends service life.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Built for Every Layer Above the Slab',
      body:
        'From terraces and balconies to podium slabs and landscaped roofs, we design waterproofing systems that withstand weather, manage water drainage effectively, and deliver dependable long-term protection.',
    },
  },
  'structural-strengthening': {
    badge: 'Solutions - Repair & Rehabilitation',
    title: 'Structural Strengthening',
    intro:
      'Over time, structures may lose strength due to ageing, increased loading, environmental exposure, design changes, or construction defects. Structural strengthening restores load-bearing capacity, improves durability, and extends the service life of existing buildings. We deliver engineered strengthening solutions that enhance structural performance while minimizing disruption, making them ideal for rehabilitation, retrofitting, and infrastructure upgrades.',
    heroImage: '/assets/sol-detail-structural-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Reinforcing Integrity. Extending Life.',
      description:
        'We use modern strengthening techniques that are minimally invasive, time-efficient, and proven in performance, ensuring your structure regains both safety and serviceability.',
      image: '/assets/sol-detail-structural-overview.png',
      items: [
        {
          title: 'Carbon Fibre (FRP) Strengthening',
          description:
            'High-strength fibre-reinforced polymer wraps that add flexural and shear capacity with minimal added weight.',
        },
        {
          title: 'Micro-Concrete Jacketing',
          description:
            "Free-flowing, high-strength micro-concrete that rebuilds damaged sections with excellent bond and durability. Jacketing enhances cross-sectional area and strengthens the member's ability to resist axial loads and moments. Often combined with bonding agents and dowel bars.",
        },
        {
          title: 'Injection Grouting',
          description:
            "Specialised grout is injected under controlled pressure into cracks and voids in concrete. This fills internal gaps, restores continuity, and supports structural repairs without increasing the member's size.",
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Weak RCC columns and beams',
        'Seismically vulnerable structures',
        'Overloaded slabs and floors',
        'Bridges and flyovers',
        'Damaged or deteriorated concrete members',
        'Adaptive Reuse & Building Upgrades',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Cost-Effective Rehabilitation',
          icon: '/assets/benefits/structural-strengthening-v01.svg',
          description: 'Can provide a practical alternative to demolition and reconstruction.',
        },
        {
          code: 'V/02',
          title: 'Works with Modern Repair Systems',
          icon: '/assets/benefits/structural-strengthening-v02.svg',
          description:
            'Integrates with FRP, micro-concrete, bonding agents and other repair materials.',
        },
        {
          code: 'V/03',
          title: 'Restored Capacity',
          icon: '/assets/benefits/structural-strengthening-v03.svg',
          description: 'Improves the performance of weakened or overloaded structural members.',
        },
        {
          code: 'V/04',
          title: 'Less Disruption',
          icon: '/assets/benefits/structural-strengthening-v04.svg',
          description:
            'Allows strengthening work to be planned around ongoing building use or operations.',
        },
        {
          code: 'V/05',
          title: 'Ready for New Demands',
          icon: '/assets/benefits/structural-strengthening-v05.svg',
          description: 'Supports upgrades for added loads, adaptive reuse or seismic improvement.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Strengthen the Structure. Reinforce What Matters.',
      body:
        'Every structure presents unique engineering challenges. We evaluate existing conditions, identify the most effective strengthening strategy, and execute solutions that restore structural performance with precision and long-term reliability.',
    },
  },
  'crack-injection-grouting': {
    badge: 'Solutions - Repair & Rehabilitation',
    title: 'Crack Injection Grouting',
    intro:
      'Cracks in concrete can develop due to structural movement, shrinkage, settlement, water ingress, or ageing. Left untreated, they can compromise structural integrity, allow moisture penetration, and accelerate deterioration. We deliver advanced crack injection grouting solutions that seal cracks from within, restore structural continuity, and protect concrete structures from further damage.',
    heroImage: '/assets/sol-detail-crack-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Precision Repair. Reinforced Stability.',
      description:
        'Using high-pressure injection techniques, we fill and seal cracks internally, ensuring deep penetration and long-lasting results without the need for surface demolition.',
      image: '/assets/sol-detail-crack-overview.png',
      imagePosition: '70% top', // Figma crop: shifted right, pinned to the top
      items: [
        {
          title: 'Epoxy Injection Grouting',
          description:
            'Structural-grade epoxy resins that bond cracked concrete back together and restore monolithic strength.',
        },
        {
          title: 'Polyurethane (PU) Injection Grouting',
          description:
            'Expanding PU resins, foam and gel based grouts that chase and seal active water leaks, even under hydrostatic pressure.',
        },
        {
          title: 'Acrylic & Microfine Cement Grouting',
          description:
            'Used in fine cracks, voids, and porous substrates for waterproofing and stabilisation purposes in tunnels, podiums, lift pits, and bridge decks.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Structural cracks in beams, slabs, and columns',
        'Active water leakage in basements and tanks',
        'Cracks in retaining walls and foundations',
        'Cold joints and construction gaps',
        'Honeycombed concrete zones',
        'Pre-treatment before waterproofing or surface coating',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Deep Crack Penetration',
          icon: '/assets/benefits/crack-injection-grouting-v01.svg',
          description: 'Seals cracks from within for durable, long-lasting performance.',
        },
        {
          code: 'V/02',
          title: 'Compatible with Existing Structures',
          icon: '/assets/benefits/crack-injection-grouting-v02.svg',
          description:
            'Works effectively with reinforced concrete and existing structural systems.',
        },
        {
          code: 'V/03',
          title: 'Performs Under Water Pressure',
          icon: '/assets/benefits/crack-injection-grouting-v03.svg',
          description: 'PU grouting effectively seals active leaks even under hydrostatic pressure.',
        },
        {
          code: 'V/04',
          title: 'Restores Structural Integrity',
          icon: '/assets/benefits/crack-injection-grouting-v04.svg',
          description:
            'Re-establishes continuity and improves the performance of cracked concrete members.',
        },
        {
          code: 'V/05',
          title: 'Minimal Surface Disruption',
          icon: '/assets/benefits/crack-injection-grouting-v05.svg',
          description:
            'Repairs internal defects with limited demolition and faster project completion.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Sealing the unseen. Restore stability from within.',
      body:
        'Our team conducts a thorough site inspection, crack mapping, and material selection to ensure the best-fit injection technique for every project. With high-precision equipment and globally trusted grouting materials, we deliver lasting results that reinforce the strength and safety of your structure from within.',
    },
  },
  'surface-restoration': {
    badge: 'Solutions - Repair & Rehabilitation',
    title: 'Surface Restoration',
    intro:
      'Cracks, peeling finishes, damp patches and efflorescence are often signs of a deeper surface or moisture problem. Ethios restores affected walls, floors, ceilings and façades by identifying the cause, repairing damaged areas and applying the right protective system for the substrate and exposure conditions.',
    heroImage: '/assets/sol-detail-surface-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Reviving Surfaces. Renewing Confidence.',
      description:
        'We don’t just cover up the damage—we address its root cause, apply corrective treatment, and rebuild the surface to restore integrity and long-term performance.',
      image: '/assets/sol-detail-surface-overview.png',
      imagePosition: 'center 35%', // Figma crop of this portrait photo
      items: [
        {
          title: 'Plaster & Mortar Repairs',
          description:
            'Removing weak plaster and rebuilding with polymer-modified mortars for a sound, durable base.',
        },
        {
          title: 'Crack Filling & Surface Skimming',
          description:
            'Flexible fillers and skim coats that close surface cracks and level walls before finishing.',
        },
        {
          title: 'Dampness Treatment',
          description:
            'Treats moisture-affected areas to control dampness, prevent efflorescence, and improve long-term surface durability.',
        },
        {
          title: 'Ceiling Restoration',
          description:
            'Repairing flaking, stained, or cracked ceilings and protecting them against recurring moisture.',
        },
        {
          title: 'Protective & Decorative Coatings',
          description:
            'Final coating systems that shield restored surfaces and refresh their appearance.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Damaged plaster on internal and external walls',
        'Cracked or flaky ceilings',
        'Damp patches and efflorescence',
        'Spalled or worn concrete surfaces',
        'Fungal or mould-affected walls',
        'Aged façades with discolouration and cracks',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Root-Cause Assessment',
          icon: '/assets/benefits/surface-restoration-v01.svg',
          description:
            'Identifies whether the damage is caused by moisture ingress, weak plaster, cracking, coating failure or substrate deterioration before treatment begins.',
        },
        {
          code: 'V/02',
          title: 'Sound Surface Preparation',
          icon: '/assets/benefits/surface-restoration-v02.svg',
          description:
            'Removes loose or damaged material and rebuilds a stable base for the repair and finish.',
        },
        {
          code: 'V/03',
          title: 'Moisture & Efflorescence Control',
          icon: '/assets/benefits/surface-restoration-v03.svg',
          description:
            'Treats affected areas and helps reduce recurring dampness and salt deposits once the moisture source is addressed.',
        },
        {
          code: 'V/04',
          title: 'Compatible Repair Systems',
          icon: '/assets/benefits/surface-restoration-v04.svg',
          description:
            'Matches repair mortars, fillers and coatings to the substrate and its exposure conditions.',
        },
        {
          code: 'V/05',
          title: 'Restored Protection & Finish',
          icon: '/assets/benefits/surface-restoration-v05.svg',
          description:
            'Rebuilds damaged surfaces and improves their durability and finish using repair materials and coatings matched to the underlying condition.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Bring the Surface Back to Life',
      body:
        'Every restoration project begins with understanding the root cause, not just repairing the visible damage. We combine proven repair materials, skilled workmanship, and engineered restoration techniques to renew surfaces for long-term performance.',
    },
  },
  'anti-corrosion-treatment': {
    badge: 'Solutions - Repair & Rehabilitation',
    title: 'Anti-Corrosion Treatment',
    intro:
      'Reinforced concrete structures are exposed to moisture, carbonation, chlorides, and aggressive environments that accelerate steel corrosion. Ethios delivers engineered anti-corrosion systems that arrest active corrosion, protect exposed reinforcement, and extend structural service life.',
    heroImage: '/assets/sol-detail-anticorrosion-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Protecting Reinforcement. Preserving Strength.',
      description:
        'Arresting corrosion means treating the steel itself — cleaning, inhibiting, and re-encasing it so deterioration cannot restart.',
      image: '/assets/sol-detail-anticorrosion-overview.png',
      items: [
        {
          title: 'Rust Removal & Surface Cleaning',
          description:
            'Mechanical and chemical cleaning of corroded rebars to expose sound steel before treatment.',
        },
        {
          title: 'Application of Corrosion Inhibitors & Bonding Primers',
          description:
            'Inhibitor coatings and primers that passivate the steel and bond it to the repair material.',
        },
        {
          title: 'Protective Re-encasement',
          description:
            'Application of polymer-modified repair mortar or micro-concrete to cover and protect treated steel from future exposure.',
        },
        {
          title: 'Optional Cathodic Protection (For Critical Structures)',
          description:
            'Sacrificial anode or impressed-current systems for structures needing the highest level of corrosion control.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Exposed and rusted reinforcement bars',
        'Spalled concrete in beams, columns, and slabs',
        'Marine or coastal structures',
        'Industrial structures exposed to chemicals',
        'Underground or water-retaining RCC structures',
        'Old buildings with visible rust stains or concrete cracks',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Extends Structural Life',
          icon: '/assets/benefits/anti-corrosion-treatment-v01.svg',
          description:
            'Helps protect reinforced concrete from continued corrosion and deterioration.',
        },
        {
          code: 'V/02',
          title: 'Prevents Future Damage',
          icon: '/assets/benefits/anti-corrosion-treatment-v02.svg',
          description:
            'Reduces the risk of spalling, cracking, and delamination.',
        },
        {
          code: 'V/03',
          title: 'Strengthens Concrete Bond',
          icon: '/assets/benefits/anti-corrosion-treatment-v03.svg',
          description:
            'Creates a prepared surface for primers, repair mortars and re-encasement. Improves adhesion between reinforcement and concrete.',
        },
        {
          code: 'V/04',
          title: 'Enhances Surface Durability',
          icon: '/assets/benefits/anti-corrosion-treatment-v04.svg',
          description:
            'Increases the performance of protective coatings and finishes.',
        },
        {
          code: 'V/05',
          title: 'Reduces Lifecycle Costs',
          icon: '/assets/benefits/anti-corrosion-treatment-v05.svg',
          description:
            'Minimizes repair needs and helps avoid premature reconstruction.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Invest in the Longevity of the Structure',
      body:
        'Corrosion protection is more than a repair; it is an investment in the longevity of the structure. Ethios works with developers, consultants, and contractors to deliver systems that protect reinforced concrete throughout its lifecycle.',
    },
  },
  'epoxy-flooring-systems': {
    badge: 'Solutions - Industrial Flooring & Sealants',
    title: 'Epoxy & PU Flooring Systems',
    intro:
      'Epoxy & PU flooring systems play a critical role in creating durable, hygienic, and easy-to-maintain surfaces, particularly for spaces that face heavy traffic, frequent cleaning and chemical exposure. We provide flooring systems tailored to the operational safety and performance requirements of industrial, commercial, and institutional facilities.',
    heroImage: '/assets/sol-detail-epoxy-hero.png',
    heroImagePosition: 'center top', // Figma pins this hero photo to the top
    overview: {
      eyebrow: 'Overview',
      title: 'Built for Demanding Floors',
      description:
        'A seamless epoxy flooring system combines strength, chemistry, and finish into one floor built for years of demanding use.',
      image: '/assets/sol-detail-epoxy-overview.png',
      items: [
        {
          title: 'Seamless Finish',
          description:
            'A continuous, joint-free surface that is easy to clean, anti-bacterial, anti-microbial and hygienic.',
        },
        {
          title: 'Excellent Adhesion',
          description:
            'Provides strong bonding with concrete substrates, ensuring long-lasting performance and durability.',
        },
        {
          title: 'Resistant to Harsh Conditions',
          description:
            'Withstands chemicals, abrasion, impact, and heavy traffic—ideal for demanding work environments.',
        },
        {
          title: 'Fully Customizable',
          description:
            'Colours, textures, anti-skid additives, and thicknesses tailored to each facility’s needs.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Manufacturing Units',
        'Automotive Workshops',
        'Warehouses & Storage Areas',
        'Pharmaceutical Facilities',
        'Food Processing & Commercial Kitchens',
        'Retail & Commercial Spaces',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Seamless & Hygienic Surface',
          icon: '/assets/benefits/epoxy-flooring-systems-v01.svg',
          description:
            "Creates a joint-free surface that's easy to clean and helps maintain hygienic conditions.",
        },
        {
          code: 'V/02',
          title: 'High Mechanical Strength',
          icon: '/assets/benefits/epoxy-flooring-systems-v02.svg',
          description:
            'Withstands heavy equipment, forklift traffic, and continuous operational loads.',
        },
        {
          code: 'V/03',
          title: 'Chemical Resistance',
          icon: '/assets/benefits/epoxy-flooring-systems-v03.svg',
          description:
            'Resists exposure to oils, chemicals, solvents, and cleaning agents.',
        },
        {
          code: 'V/04',
          title: 'Low Maintenance',
          icon: '/assets/benefits/epoxy-flooring-systems-v04.svg',
          description:
            'Reduces cleaning effort, maintenance requirements, and operational downtime.',
        },
        {
          code: 'V/05',
          title: 'Design Flexibility',
          icon: '/assets/benefits/epoxy-flooring-systems-v05.svg',
          description:
            'Available in multiple colours, finishes, and textures to suit functional and aesthetic needs.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'A Stronger Floor for Smoother Operations',
      body:
        'Strong floors are the foundation of efficient operations. We provide epoxy flooring solutions that deliver lasting durability, seamless finishes, and dependable performance across industrial, commercial, and institutional projects.',
    },
  },
  'pu-polyurethane-flooring-system': {
    badge: 'Solutions - Industrial Flooring & Sealants',
    title: 'PU (Polyurethane) Flooring System',
    intro:
      'PU flooring is ideal for environments that demand flexibility, durability, and long-term performance. We provide polyurethane flooring systems designed to withstand thermal movement, impact, heavy traffic, and chemical exposure across industrial, commercial, and institutional facilities.',
    heroImage: '/assets/oem-floor-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Flexible Under Pressure. Tough Against Time.',
      description:
        'A PU floor is selected for the movement, temperature, spills and cleaning conditions it will face, then built to keep performing through daily use.',
      image: '/assets/sol-pu-flooring.png',
      items: [
        {
          title: 'Flexible & Durable Surface',
          description:
            'Delivers excellent flexibility, impact resistance, and durability—ideal for spaces exposed to vibration, heavy loads, or movement.',
        },
        {
          title: 'Thermal & UV Stability',
          description:
            'Performs reliably in fluctuating temperatures and semi-exposed environments, offering long-term UV and thermal resistance.',
        },
        {
          title: 'Hygienic & Seamless Finish',
          description:
            "Creates a smooth, joint-free surface that's easy to clean and suitable for hygiene-sensitive facilities.",
        },
        {
          title: 'Chemical & Spill Resistance',
          description:
            'Withstands exposure to chemicals, hot liquids, and industrial cleaners, offering easy maintenance and superior protection.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Food & Beverage Processing Areas',
        'Cold Storage & Freezer Rooms',
        'Pharmaceutical & Cleanrooms',
        'Outdoor & Semi-Exposed Zones',
        'Parking Decks & Ramps',
        'Commercial Kitchens & Hospitality',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'High Flexibility',
          icon: '/assets/benefits/pu-polyurethane-flooring-system-v01.svg',
          description:
            'Accommodates minor substrate movement to help reduce the risk of cracking.',
        },
        {
          code: 'V/02',
          title: 'Thermal & UV Stability',
          icon: '/assets/benefits/pu-polyurethane-flooring-system-v02.svg',
          description:
            'Performs reliably across varying temperatures and semi-exposed environments.',
        },
        {
          code: 'V/03',
          title: 'Chemical & Abrasion Resistance',
          icon: '/assets/benefits/pu-polyurethane-flooring-system-v03.svg',
          description:
            'Protects against chemicals, spills, abrasion, and everyday wear.',
        },
        {
          code: 'V/04',
          title: 'Long-Term Durability',
          icon: '/assets/benefits/pu-polyurethane-flooring-system-v04.svg',
          description:
            'Maintains strength, finish, and performance under demanding operating conditions.',
        },
        {
          code: 'V/05',
          title: 'Low Maintenance & Hygienic',
          icon: '/assets/benefits/pu-polyurethane-flooring-system-v05.svg',
          description:
            'Creates seamless surfaces that are easy to clean and support hygienic environments.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Performance That Holds Up Under Pressure',
      body:
        'Ethios offers advanced PU flooring solutions tailored for environments exposed to thermal stress, heavy traffic, and high hygiene requirements. Known for their flexibility, UV resistance, and durability under dynamic loads, our PU floors provide a reliable surface that performs under pressure. The result is a resilient floor that performs across demanding indoor, outdoor and temperature-controlled environments.',
    },
  },
  'polysulphide-polyurethane-sealants': {
    badge: 'Solutions - Industrial Flooring & Sealants',
    title: 'Polysulphide & Polyurethane Sealants',
    intro:
      'The right joint sealing system plays a vital role in protecting structures from moisture ingress and movement-related damage. We offer polysulphide and polyurethane sealant solutions that combine flexibility, weather resistance, and chemical durability to protect joints throughout their service life.',
    heroImage: '/assets/sol-polysulphide.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Flexible & Long-Lasting Joint Sealing Solutions',
      description:
        'From high-movement structural joints to quick repairs, each sealant grade is formulated for a specific joint condition and exposure level.',
      image: '/assets/sol-pu-sealants.png',
      items: [
        {
          title: 'Two-Part Sealants',
          description:
            'Ideal for high-movement joints; excellent elasticity and chemical resistance.',
        },
        {
          title: 'Polyurethane Sealants',
          description:
            'Easy-to-apply solution for moderate-movement joints and quick repairs.',
        },
        {
          title: 'Pour Grade Sealants',
          description:
            'Flowable sealant for wide horizontal joints in industrial floors and decks.',
        },
        {
          title: 'Fuel-Resistant Variants',
          description:
            'Formulated for areas exposed to fuels and oils, such as refineries and garages.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Industrial Flooring Joints',
        'Expansion & Construction Joints',
        'Perimeter Door/Window Joints',
        'Precast Concrete Panels',
        'Bridge Decks & Runways',
        'Curtain Walls & Façade Gaps',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Accommodates Joint Movement',
          icon: '/assets/benefits/polysulphide-polyurethane-sealants-v01.svg',
          description:
            'Stretches and recovers as suitable structural joints open and close.',
        },
        {
          code: 'V/02',
          title: 'Built for Outdoor Exposure',
          icon: '/assets/benefits/polysulphide-polyurethane-sealants-v02.svg',
          description:
            'Selected grades resist UV, rain and changing weather conditions.',
        },
        {
          code: 'V/03',
          title: 'Strong Adhesion',
          icon: '/assets/benefits/polysulphide-polyurethane-sealants-v03.svg',
          description:
            'Bonds to properly prepared concrete, steel, glass and stone surfaces.',
        },
        {
          code: 'V/04',
          title: 'Chemical and Fuel Resistance',
          icon: '/assets/benefits/polysulphide-polyurethane-sealants-v04.svg',
          description:
            'Special grades are available for areas exposed to oils, fuels and industrial chemicals.',
        },
        {
          code: 'V/05',
          title: 'Long Service Life',
          icon: '/assets/benefits/polysulphide-polyurethane-sealants-v05.svg',
          description:
            'Correctly selected and applied sealants reduce frequent joint maintenance.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Seal with Strength. Flex with Confidence.',
      body:
        'Long-term structural performance begins with effective joint protection. We provide project-specific sealing solutions that accommodate movement, prevent water ingress, and support the durability of buildings and infrastructure.',
    },
  },
  'heavy-duty-floor-coatings': {
    badge: 'Solutions - Industrial Flooring & Sealants',
    title: 'Heavy-Duty Floor Coatings',
    intro:
      'Heavy traffic, machinery, chemicals and impact can quickly wear down an unprotected industrial floor. We provide high-performance heavy-duty floor coating systems that improve durability, resist abrasion and chemicals, and create long-lasting, easy-to-maintain floors for industrial and commercial facilities.',
    heroImage: '/assets/oem-floor-1.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Engineered Floor Protection for Heavy-Duty Performance',
      description:
        'The right coating system depends on what the floor sees every day — dry abrasion, thermal shock, static-sensitive equipment, or a showroom finish.',
      image: '/assets/sol-heavy-duty.png',
      items: [
        {
          title: 'High-Build Epoxy Coatings',
          description:
            'Provides thick, robust protection for dry, abrasion-prone environments such as warehouses and workshops.',
        },
        {
          title: 'Polyurethane Screeds',
          description:
            'Excellent for thermal shock resistance and chemical protection in food, beverage, and pharmaceutical industries.',
        },
        {
          title: 'Anti-Static (ESD) Coatings',
          description:
            'Prevents static buildup in sensitive areas like electronics manufacturing and data centers.',
        },
        {
          title: 'Decorative Industrial Finishes',
          description:
            'Combines durability with aesthetics for showrooms, retail spaces, and industrial offices.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Manufacturing & Production Areas',
        'Automobile Workshops & Assembly Lines',
        'Pharma & Food Processing Facilities',
        'Warehouses & Distribution Centers',
        'Cold Storages & Freezer Rooms',
        'Commercial Kitchens & Service Zones',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Exceptional Abrasion & Impact Resistance',
          icon: '/assets/benefits/heavy-duty-floor-coatings-v01.svg',
          description:
            'Protects the floor through heavy traffic, machinery and regular operational wear.',
        },
        {
          code: 'V/02',
          title: 'Chemical & Spill Protection',
          icon: '/assets/benefits/heavy-duty-floor-coatings-v02.svg',
          description:
            'Selected systems resist suitable oils, acids, alkalis and industrial chemicals.',
        },
        {
          code: 'V/03',
          title: 'Anti-Slip',
          icon: '/assets/benefits/heavy-duty-floor-coatings-v03.svg',
          description:
            'Textured and anti-slip finishes support safer movement across work areas.',
        },
        {
          code: 'V/04',
          title: 'UV & Weather Stability',
          icon: '/assets/benefits/heavy-duty-floor-coatings-v04.svg',
          description:
            'Suitable for both indoor and outdoor applications.',
        },
        {
          code: 'V/05',
          title: 'Low Maintenance',
          icon: '/assets/benefits/heavy-duty-floor-coatings-v05.svg',
          description:
            'A durable, seamless finish reduces cleaning effort and routine upkeep.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Stronger Surfaces. Smarter Protection.',
      body:
        "At Ethios, we go beyond surface-level solutions. Every facility puts different demands on its floor. We select the coating type, thickness, texture and finish around the traffic, exposure and safety needs of the space. Our Heavy-Duty Floor Coatings are custom-formulated and expertly applied to match your exact operational demands, thereby ensuring that your facility's flooring is not just protected, but also optimised for performance and safety.",
    },
  },
  'puf-spray-insulation': {
    badge: 'Solutions - Thermal Insulation',
    title: 'PUF Spray Insulation',
    intro:
      'PUF spray insulation forms a continuous thermal insulation layer directly over roofs, walls, ducts and irregular surfaces. Ethios designs the application around the substrate, required thickness and operating conditions to reduce heat transfer and improve thermal comfort. The result is a continuous insulation layer designed to perform reliably for years.',
    heroImage: '/assets/sol-puf-spray.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Continuous Insulation Across Every Contour',
      description:
        'Sprayed directly onto the substrate, PUF expands to fill every gap and contour, forming one continuous insulating skin with no seams.',
      image: '/assets/solution-thermal insulation.png',
      items: [
        {
          title: 'Seamless Thermal Envelope',
          description:
            'Creates a continuous, joint-free insulation layer that minimizes thermal bridging and delivers consistent insulation performance across the entire surface.',
        },
        {
          title: 'Quick & Efficient Application',
          description:
            'Spray-applied directly onto the substrate for fast installation, allowing seamless coverage even on large or complex surfaces.',
        },
        {
          title: 'Versatile Surface Compatibility',
          description:
            'Adheres strongly to concrete, metal, masonry, wood, and irregular surfaces, forming a durable insulation layer without joints.',
        },
        {
          title: 'Moisture & Chemical Resistance',
          description:
            'Provides a closed-cell barrier that resists moisture ingress, condensation, and microbial growth while supporting long-term insulation performance.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Industrial Roofs',
        'Cold Storage',
        'HVAC Systems',
        'Cavity Walls & Ceilings',
        'Residential & Commercial Roofs',
        'Green Buildings',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Superior Thermal Efficiency',
          icon: '/assets/benefits/puf-spray-insulation-v01.svg',
          description:
            'Low thermal conductivity reduces energy usage and HVAC load.',
        },
        {
          code: 'V/02',
          title: 'Fast & Uniform Coverage',
          icon: '/assets/benefits/puf-spray-insulation-v02.svg',
          description:
            'Saves time as spray application covers large and complex surfaces efficiently.',
        },
        {
          code: 'V/03',
          title: 'Moisture Barrier',
          icon: '/assets/benefits/puf-spray-insulation-v03.svg',
          description:
            'A continuous closed-cell layer helps limit moisture ingress and condensation.',
        },
        {
          code: 'V/04',
          title: 'Durability & Dimensional Stability',
          icon: '/assets/benefits/puf-spray-insulation-v04.svg',
          description:
            'Correctly applied PUF maintains its shape and insulation performance over time.',
        },
        {
          code: 'V/05',
          title: 'Eco-Friendly',
          icon: '/assets/benefits/puf-spray-insulation-v05.svg',
          description:
            'Available in low-GWP and CFC/HCFC-free formulations for sustainable applications.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Insulation That Fits the Surface',
      body:
        'At Ethios, we bring advanced spray insulation technology backed by expert application, on-site technical guidance, and customized project integration. Our spray PUF solutions align with modern green-building norms, helping reduce energy bills and improve occupant comfort year-round.',
    },
  },
  'xps-insulation-board': {
    badge: 'Solutions - Thermal Insulation',
    title: 'XPS Insulation Board',
    intro:
      'XPS (Extruded Polystyrene) Insulation Boards provide superior thermal insulation, high compressive strength, and excellent moisture resistance. We deliver engineered XPS insulation solutions for roofs, floors, basements, and foundation systems, helping improve energy efficiency and long-term structural performance.',
    heroImage: '/assets/sol-xps.png',
    overview: {
      eyebrow: 'Overview',
      title: 'High-Performance Insulation Boards for Energy-Efficient Construction',
      description:
        'Closed-cell XPS boards combine thermal performance, moisture tolerance and load-bearing strength in one rigid layer.',
      image: '/assets/sol-xps.png',
      items: [
        {
          title: 'Closed-Cell Structure Design',
          description:
            'Engineered with a closed-cell structure to provide excellent thermal insulation and low water absorption for long-term performance and high energy efficiency.',
        },
        {
          title: 'Uniform Thickness & Compressive Strength',
          description:
            'Manufactured for consistent density and high load-bearing capacity across floors, roofs, and foundation applications.',
        },
        {
          title: 'Weather & Moisture Tolerance',
          description:
            'Performs reliably in wet and below-grade environments while maintaining its insulation properties over time.',
        },
        {
          title: 'Lightweight & Easy to Install',
          description:
            'Easy to handle, cut, and install, helping reduce installation time across residential, commercial, and industrial projects.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Residential & Commercial Roofs',
        'Inverted Roof Systems',
        'Foundation & Basement Walls',
        'Concrete Floor Slabs',
        'External Wall Insulation (EIFS)',
        'Cold Storage Facilities',
        'Industrial Sheds & Pre-Engineered Buildings',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Superior Thermal Insulation',
          icon: '/assets/benefits/xps-insulation-board-v01.svg',
          description:
            'Reduces heat transfer for improved energy efficiency and indoor comfort.',
        },
        {
          code: 'V/02',
          title: 'High Moisture Resistance',
          icon: '/assets/benefits/xps-insulation-board-v02.svg',
          description:
            'Closed-cell structure resists water absorption and maintains insulation performance.',
        },
        {
          code: 'V/03',
          title: 'Excellent Compressive Strength',
          icon: '/assets/benefits/xps-insulation-board-v03.svg',
          description:
            'Supports heavy loads without compromising structural performance.',
        },
        {
          code: 'V/04',
          title: 'Long-Term Dimensional Stability',
          icon: '/assets/benefits/xps-insulation-board-v04.svg',
          description:
            'Retains its shape and insulation properties over time.',
        },
        {
          code: 'V/05',
          title: 'Environmentally Friendly',
          icon: '/assets/benefits/xps-insulation-board-v05.svg',
          description:
            'Supports energy-efficient construction with durable, long-lasting insulation.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Smart Insulation. Long-Term Performance.',
      body:
        'We deliver engineered XPS insulation systems designed for demanding construction environments. With expert installation and high-quality insulation boards, we help improve thermal performance, protect structures from thermal shocks, and deliver reliable energy efficiency for the long term.',
    },
  },
  'eps-insulation-board': {
    badge: 'Solutions - Thermal Insulation',
    title: 'EPS Insulation Board',
    intro:
      'Ethios provides EPS (Expanded Polystyrene) Insulation Boards that offer practical thermal insulation at low weight and controlled cost. Made from expanded polystyrene beads fused into rigid blocks, they are easy to cut, handle and install across walls, roofs, ceilings, panels and modular construction. EPS blocks are also used for lightweight filling in commercial, residential, entertainment and sports infrastructure.',
    heroImage: '/assets/sol-eps.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Flexible Options for Different Builds',
      description:
        'EPS delivers dependable insulation value at low cost and low weight, cut and fitted to whatever density a project calls for.',
      image: '/assets/sol-eps.png',
      items: [
        {
          title: 'Lightweight & Flexible Design',
          description:
            'EPS boards are lightweight, making them easy to transport, cut, and install while reducing on-site effort and construction time.',
        },
        {
          title: 'Cost-Effective Thermal Protection',
          description:
            'Provides dependable thermal performance at an economical cost, making it suitable for both small and large-scale projects.',
        },
        {
          title: 'Versatile Density & Thickness Options',
          description:
            'Available in various sizes and densities to meet different insulation requirements across walls, roofs, floors, and ceilings.',
        },
        {
          title: 'Compatible with Multiple Applications',
          description:
            'Works seamlessly with waterproofing systems, screeds, wall assemblies, and prefabricated construction methods.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Residential & Commercial Terraces',
        'Roof Gardens & Green Roofs',
        'Wall Panel Infill for Modular Construction',
        'Precast & Sandwich Panel Systems',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Cost-Efficient Thermal Insulation',
          icon: '/assets/benefits/eps-insulation-board-v01.svg',
          description:
            'Delivers reliable insulation performance while helping optimize project costs.',
        },
        {
          code: 'V/02',
          title: 'Lightweight & Easy to Install',
          icon: '/assets/benefits/eps-insulation-board-v02.svg',
          description:
            'Easy to handle, cut, and install, reducing construction time and structural load.',
        },
        {
          code: 'V/03',
          title: 'Customizable Densities',
          icon: '/assets/benefits/eps-insulation-board-v03.svg',
          description:
            'Available in different densities and thicknesses to suit various project requirements.',
        },
        {
          code: 'V/04',
          title: 'Eco-Friendly & Recyclable',
          icon: '/assets/benefits/eps-insulation-board-v04.svg',
          description:
            'A recyclable insulation solution that supports sustainable construction practices.',
        },
        {
          code: 'V/05',
          title: 'Multi-Application Flexibility',
          icon: '/assets/benefits/eps-insulation-board-v05.svg',
          description:
            'Suitable for walls, roofs, floors, modular buildings, and other insulation systems.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Light on Structure. Big on Insulation.',
      body:
        'We supply quality EPS insulation boards backed by technical guidance and reliable project support. Our solutions are selected to meet the thermal, structural, and installation requirements of each application, delivering dependable insulation performance across every project.',
    },
  },
  'insulation-screed-concrete': {
    badge: 'Solutions - Thermal Insulation',
    title: 'Insulation Screed Concrete',
    intro:
      'Insulation Screed Concrete combines structural support with thermal and acoustic insulation in a single layer. Made with lightweight insulating aggregates, it helps reduce heat transfer, improve indoor comfort, and minimize dead load. Ideal for roofs, intermediate floors, and podiums, it creates a stable protection layer for waterproofing and a base for floor finishes.',
    heroImage: '/assets/sol-detail-screed-hero.png',
    heroImagePosition: 'center 65%', // Figma crop of this square photo
    overview: {
      eyebrow: 'Overview',
      title: 'Dual-Function Screed for Thermal & Acoustic Comfort',
      description:
        'A single lightweight layer that levels the surface, insulates it thermally, and dampens sound before the next system goes on top.',
      image: '/assets/sol-detail-screed-overview.png',
      items: [
        {
          title: 'Engineered Lightweight Mix',
          description:
            'Formulated using insulating aggregates and special binders to deliver lower thermal conductivity while keeping the load on structural elements minimal.',
        },
        {
          title: 'Versatile Application Range',
          description:
            'Suitable for roofs, intermediate slabs, podiums, and more—ideal as a base layer before waterproofing or finishing.',
        },
        {
          title: 'Enhanced Acoustic Control',
          description:
            'Effectively reduces sound transmission between floors and rooms, especially in high-rise residential and commercial setups.',
        },
        {
          title: 'Seamless Compatibility with Other Systems',
          description:
            'Works well beneath tiles, membranes, or flooring systems, making it a flexible component in integrated construction solutions.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Roof Slabs & Terraces',
        'Intermediate Floor Slabs',
        'Podiums & Balconies',
        'Bathrooms & Wet Areas',
        'Green Buildings & Eco-Conscious Projects',
        'Floors Above Temperature-Controlled Spaces',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Improves Thermal Resistance',
          icon: '/assets/benefits/insulation-screed-concrete-v01.svg',
          description:
            'Reduces heat transfer to improve indoor comfort and energy efficiency.',
        },
        {
          code: 'V/02',
          title: 'Reduced Sound Transfer',
          icon: '/assets/benefits/insulation-screed-concrete-v02.svg',
          description:
            'Helps limit sound movement between floors and occupied spaces.',
        },
        {
          code: 'V/03',
          title: 'Lower Added Load',
          icon: '/assets/benefits/insulation-screed-concrete-v03.svg',
          description:
            'Uses lightweight aggregates to create a stable base with less dead load.',
        },
        {
          code: 'V/04',
          title: 'Ready for Layered Systems',
          icon: '/assets/benefits/insulation-screed-concrete-v04.svg',
          description:
            'Works beneath suitable waterproofing membranes, tiles and flooring systems.',
        },
        {
          code: 'V/05',
          title: 'Practical on Site',
          icon: '/assets/benefits/insulation-screed-concrete-v05.svg',
          description:
            'Offers good workability, low shrinkage and a level base for the finish above.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Lightweight Screed. More Comfortable Spaces.',
      body:
        'We deliver insulation screed solutions designed for thermal performance, reduced structural load, and seamless integration with waterproofing and flooring systems. Every mix is selected to meet the functional requirements of the project while ensuring long-term durability.',
    },
  },
  'insulation-coating': {
    badge: 'Solutions - Thermal Insulation',
    title: 'Thermal Insulation Coatings',
    intro:
      'Insulation coatings are applied directly to roofs, walls, pipes and equipment to reduce surface heat gain and protect the substrate. Ethios selects the coating around the surface, operating temperature and exposure, helping improve thermal performance without adding heavy insulation layers.',
    heroImage: '/assets/sol-detail-insulation-coating-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Reduce Heat. Protect Surfaces. Enhance Efficiency.',
      description:
        'Applied directly over concrete, metal, or existing coatings, this thermal barrier protects the substrate while cutting the heat that reaches it.',
      image: '/assets/sol-detail-insulation-coating-overview.png',
      imagePosition: '33% center', // Figma crop: shifted slightly left
      items: [
        {
          title: 'High-Performance Thermal Barrier',
          description:
            'Designed using advanced insulating materials to reduce heat transfer, improving energy efficiency while protecting structural surfaces.',
        },
        {
          title: 'Versatile Application Range',
          description:
            'Suitable for roofs, walls, pipelines, and industrial equipment, providing a reliable layer of protection.',
        },
        {
          title: 'Durable and Long-Lasting',
          description:
            'Offers resistance to moisture, corrosion, and environmental wear, ensuring prolonged structural integrity and performance.',
        },
        {
          title: 'Seamless Compatibility',
          description:
            'Can be applied over concrete, metal, or existing coatings, making it an adaptable component in integrated construction and insulation solutions.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Roof Slabs & Terraces',
        'Walls & Facades',
        'Industrial PEB / Fabricated Roofs',
        'Industrial & Commercial Buildings',
        'Storage Tanks & Equipment',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Reduces Surface Heat Gain',
          icon: '/assets/benefits/insulation-coating-v01.svg',
          description:
            'Limits the amount of heat absorbed by suitable roofs, walls, pipes and equipment.',
        },
        {
          code: 'V/02',
          title: 'Supports Energy Performance',
          icon: '/assets/benefits/insulation-coating-v02.svg',
          description:
            'Lower heat gain can reduce the cooling demand of the space or system.',
        },
        {
          code: 'V/03',
          title: 'Moisture-Resistant',
          icon: '/assets/benefits/insulation-coating-v03.svg',
          description:
            'Selected coatings protect suitable surfaces from rain, moisture and environmental wear.',
        },
        {
          code: 'V/04',
          title: 'Durable & Long-Lasting',
          icon: '/assets/benefits/insulation-coating-v04.svg',
          description:
            'Correct preparation and application help the coating retain its finish and performance for a long duration.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Maximum Heat Resistance and Long-Lasting Surface Protection',
      body:
        'High-performance insulation coating that reduces heat transfer, protects surfaces, and enhances energy efficiency. Ethios helps project teams choose an insulation system around the substrate, operating temperature, exposure and required U values.',
    },
  },
  'tile-joint-fillers': {
    badge: 'Solutions - Tile Joint Fillers',
    title: 'Tile Joint Fillers',
    intro:
      'Ethios offers high-performance epoxy tile grouts that deliver exceptional bonding strength, chemical resistance, and a seamless aesthetic finish. Designed for demanding environments where hygiene, durability, and visual appeal are critical, our epoxy grouts outperform traditional cementitious grouts in every aspect.',
    heroImage: '/assets/sol-detail-tile-joint-hero.png',
    heroImagePosition: 'center 7%', // Figma crop: near the top of this square photo
    overview: {
      eyebrow: 'Overview',
      title: 'Built for Joints That Work Hard',
      description:
        'A solvent-free epoxy system built to hold tile joints watertight and stain-free in the harshest of environments.',
      image: '/assets/sol-tile-joint.png',
      items: [
        {
          title: 'Two-Component / Three-Component Resin Systems',
          description:
            'A solvent-free, highly durable resin and hardener blend that forms a dense, impermeable joint, making it suitable for critical installations.',
        },
        {
          title: 'High Chemical & Stain Resistance',
          description:
            'Withstands mild acids, oils, cleaning agents, and heavy-duty detergents, making it ideal for industrial kitchens, labs, and wet zones.',
        },
        {
          title: 'Colour-Stable & UV Resistant Shades',
          description:
            'Available in a wide range of fade-resistant colours that retain vibrancy over time, enhancing tile aesthetics.',
        },
        {
          title: 'Non-Porous & Hygienic',
          description:
            'The seamless, smooth finish resists microbial growth, making it ideal for hygiene-sensitive applications like hospitals and food zones.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Bathrooms & Wet Areas',
        'Commercial Kitchens',
        'Hospitals & Labs',
        'Swimming Pools & Wet Zones',
        'Industrial Processing Units',
        'Luxury Residences & Hotels',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Low Water Absorption',
          icon: '/assets/benefits/tile-joint-fillers-v01.svg',
          description:
            'Suitable for wet areas when the grout and full tile system are correctly specified and applied.',
        },
        {
          code: 'V/02',
          title: 'Chemical Resistance Options',
          icon: '/assets/benefits/tile-joint-fillers-v02.svg',
          description:
            'Selected grades can be matched to the expected cleaners or chemicals.',
        },
        {
          code: 'V/03',
          title: 'Wear Resistance',
          icon: '/assets/benefits/tile-joint-fillers-v03.svg',
          description:
            "Can withstand regular cleaning and foot traffic within the product's stated service conditions.",
        },
        {
          code: 'V/04',
          title: 'Easy Maintenance',
          icon: '/assets/benefits/tile-joint-fillers-v04.svg',
          description:
            'A dense joint can be easier to clean and is not prone to cement-based efflorescence.',
        },
        {
          code: 'V/05',
          title: 'Colour and Finish Options',
          icon: '/assets/benefits/tile-joint-fillers-v05.svg',
          description:
            'Available shades can be selected to suit the tile and desired joint finish.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-construction.png',
      headline: 'Clean Joints. Strong Finish.',
      body:
        'Ethios pairs premium epoxy grout systems with expert application, ensuring every tiled surface, from hospital floors to luxury bathrooms, stays watertight, hygienic, and visually flawless for years to come.',
    },
  },
}

export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export default SOLUTION_DETAILS
