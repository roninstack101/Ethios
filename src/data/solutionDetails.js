/* Content for solution detail pages, keyed by URL slug. Slugs without an entry
   fall back to the Coming Soon screen. Node 21-3977 defines the layout; several
   headings there were lorem-ipsum placeholders, replaced with real copy. */
const SOLUTION_DETAILS = {
  'new-construction-waterproofing': {
    badge: 'Solutions - New Construction Waterproofing',
    title: 'New Construction Waterproofing',
    intro:
      "Waterproofing in new construction is not just a precaution—it's a critical foundation for structural integrity and longevity. At Ethios Group, we implement advanced waterproofing systems right from the initial stages of the project to prevent future leakage, dampness, and water-related deterioration.",
    heroImage: '/assets/sol-detail-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Building in durability from day one',
      description:
        'Every structure faces water from the day it is built. Specifying the right waterproofing system at design stage protects each vulnerable zone before it is ever exposed.',
      image: '/assets/sol-detail-overview.png',
      items: [
        {
          title: 'Foundations & Footings',
          description:
            'Protecting below-grade concrete from ground moisture and hydrostatic pressure with membranes and crystalline systems.',
        },
        {
          title: 'Terraces & Podiums',
          description:
            'Multi-layer waterproofing that handles thermal movement, ponding water, and heavy landscape or traffic loads.',
        },
        {
          title: 'Basements Structures',
          description:
            'Applying anti-corrosion coatings to exposed rebars and damaged concrete zones to halt deterioration.',
        },
        {
          title: 'Water Tanks & STPs',
          description:
            'Potable-safe and chemical-resistant coatings that keep tanks and treatment structures permanently watertight.',
        },
        {
          title: 'Bathrooms & Wet Areas',
          description:
            'Seamless membranes beneath tiles and fittings that stop seepage into slabs and adjoining rooms.',
        },
        {
          title: 'Retaining Walls',
          description:
            'Drainage-integrated waterproofing that shields earth-facing walls from constant moisture contact.',
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
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Increases lifespan of concrete and foundational elements.',
        },
        {
          code: 'V/02',
          title: 'Lower Maintenance',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Minimizes future maintenance and repair costs.',
        },
        {
          code: 'V/03',
          title: 'Energy Efficiency',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Improves energy efficiency by controlling internal humidity levels.',
        },
        {
          code: 'V/04',
          title: 'Finish Compatibility',
          icon: '/assets/icon-benefit-finishes.svg',
          description:
            'Compatible with various finishes including tiles, pavers, screeds, and exposed coatings.',
        },
        {
          code: 'V/05',
          title: 'Seepage Protection',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Reduces long-term water seepage and leakage risk across critical zones.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'With Ethios Group, waterproofing becomes a proactive solution—not a reactive repair.',
      body:
        'We use a combination of liquid-applied membranes, crystalline admixtures, cementitious coatings, and HDPE sheets, selected based on the site conditions and exposure levels. Our focus is on delivering a seamless, multi-layered barrier that integrates with the structural design and ensures trouble-free performance for years to come.',
    },
  },
  'repair-rehabilitation-waterproofing': {
    badge: 'Solutions - Repair & Rehabilitation Waterproofing',
    title: 'Repair & Rehabilitation Waterproofing',
    intro:
      'Aging structures often suffer from water ingress, structural cracks, dampness, and corrosion due to prolonged exposure to environmental elements. At Ethios Group, our Repair & Rehabilitation Waterproofing solutions are designed to breathe new life into such structures—addressing both visible damage and underlying weaknesses.',
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
          title: 'Leak Arrest',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Stops active leakage and prevents future moisture ingress.',
        },
        {
          code: 'V/02',
          title: 'Safer Structures',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Improves safety and durability of aged concrete elements.',
        },
        {
          code: 'V/03',
          title: 'Weather Resistance',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Increases resistance to chemicals, weather, and UV exposure.',
        },
        {
          code: 'V/04',
          title: 'Broad Compatibility',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Compatible with both heritage and modern construction.',
        },
        {
          code: 'V/05',
          title: 'Lower Lifecycle Cost',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Reduces life-cycle maintenance costs with long-lasting treatment systems.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'With Ethios Group, rehabilitation becomes more than a repair—it becomes a renewed layer of protection engineered for resilience.',
      body:
        'We use a combination of liquid-applied membranes, crystalline admixtures, cementitious coatings, and HDPE sheets, selected based on site conditions, structural damage, and exposure levels. Our focus is on delivering a seamless, multi-layered waterproofing system that reintegrates with the existing structure and performs reliably for years.',
    },
  },
  'liquid-membranes': {
    badge: 'Solutions - Liquid Membranes',
    title: 'Liquid Membranes',
    intro:
      'Liquid-applied membranes offer a highly adaptable, joint-free waterproofing solution ideal for both new and existing structures. At Ethios Group, we provide a complete range of cementitious, acrylic, polyurethane (PU), and polyurea coatings, each selected based on project-specific needs such as exposure conditions, substrate type, and performance requirements.',
    heroImage: '/assets/sol-detail-liquid-membranes-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Seamless Protection with Versatile Application',
      description:
        'Each liquid membrane chemistry suits a different exposure condition — the right choice comes from matching the coating to the substrate and its movement.',
      image: '/assets/sol-detail-liquid-membranes-overview.png',
      items: [
        {
          title: 'Cementitious Coatings',
          description:
            'Economical, breathable coatings for water tanks, wet areas, and internal surfaces needing reliable damp protection.',
        },
        {
          title: 'Acrylic Coatings',
          description:
            'UV-stable, elastomeric coatings for exposed roofs and walls that reflect heat and resist weathering.',
        },
        {
          title: 'Polyurethane (PU) Coatings',
          description:
            'Highly flexible and abrasion-resistant, PU membranes are ideal for podiums, basements, parking decks, and high-movement areas. They create a monolithic, long-lasting barrier that accommodates structural movement and harsh weather.',
        },
        {
          title: 'Polyurea Coatings',
          description:
            'Rapid-curing, extremely tough membranes for demanding industrial and high-traffic applications.',
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
          title: 'Fast Curing',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Fast curing and easy maintenance.',
        },
        {
          code: 'V/02',
          title: 'Complex Detailing',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Applicability in complex geometries and detailing zones.',
        },
        {
          code: 'V/03',
          title: 'Joint-Free Finish',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Seamless and joint-free application.',
        },
        {
          code: 'V/04',
          title: 'Strong Adhesion',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Strong adhesion to various substrates (concrete, metal, tiles, brick).',
        },
        {
          code: 'V/05',
          title: 'Crack Bridging',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Crack-bridging and high elongation capacity.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'Ethios Group delivers seamless protection with flexible liquid membranes that adapt to every surface, every challenge.',
      body:
        "With proper surface preparation and expert application, Ethios Group's liquid membrane systems provide an efficient and highly reliable waterproofing solution tailored to modern construction challenges.",
    },
  },
  'sheet-membranes': {
    badge: 'Solutions - Sheet Membranes',
    title: 'Sheet Membranes',
    intro:
      'Sheet membrane systems offer consistent thickness, high mechanical strength, and long-term water resistance, making them ideal for areas where durability and dimensional stability are critical. At Ethios Group, we supply and install a wide range of pre-formed waterproofing membranes including APP, SBS, HDPE, and TPO, carefully chosen to suit diverse construction needs.',
    heroImage: '/assets/sol-detail-sheet-membranes-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Engineered Waterproofing with Structured Reliability.',
      description:
        'Pre-formed membranes bring factory-controlled consistency to site — each material suits a different substrate, exposure, and installation method.',
      image: '/assets/sol-detail-sheet-membranes-overview.png',
      items: [
        {
          title: 'APP (Atactic Polypropylene) Membranes',
          description:
            'Torch-applied bituminous membranes with excellent UV and heat resistance for exposed roofs and terraces.',
        },
        {
          title: 'SBS (Styrene Butadiene Styrene) Membranes',
          description:
            'Elastomeric bituminous membranes that stay flexible in cold conditions and handle structural movement.',
        },
        {
          title: 'HDPE (High-Density Polyethylene) Membranes',
          description:
            'Pre-applied, fully bonded membranes for basements, rafts, and tunnels that resist puncture and hydrostatic pressure.',
        },
        {
          title: 'TPO (Thermoplastic Polyolefin) Membranes',
          description:
            'Heat-weldable single-ply membranes offering durable, energy-efficient roofing protection.',
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
          title: 'Consistent Quality',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Uniform thickness and factory-controlled quality.',
        },
        {
          code: 'V/02',
          title: 'High Resistance',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'High resistance to weathering, root penetration, and mechanical stress.',
        },
        {
          code: 'V/03',
          title: 'All-Surface Protection',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Reliable protection for horizontal and vertical surfaces.',
        },
        {
          code: 'V/04',
          title: 'Flexible Installation',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Suitable for torch-applied, self-adhesive, or mechanically fixed installations.',
        },
        {
          code: 'V/05',
          title: 'Topping Compatibility',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Compatible with protective screeds, tiles, or paver toppings.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'Engineered by Ethios Group for precision and performance—sheet membranes that seal with strength and consistency.',
      body:
        'From residential rooftops to critical below-grade applications, Ethios Group ensures precise installation and detailing of sheet membranes for long-lasting, watertight security across all types of structures.',
    },
  },
  'basement-waterproofing': {
    badge: 'Solutions - Basement Waterproofing',
    title: 'Basement Waterproofing',
    intro:
      'Basements are particularly vulnerable to hydrostatic pressure, groundwater seepage, and capillary action, which can lead to dampness, mold growth, structural degradation, and foul odors. At Ethios Group, we specialize in advanced basement waterproofing solutions that provide complete protection—both externally and internally—to ensure a safe, dry, and healthy underground space.',
    heroImage: '/assets/sol-detail-basement-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Sealing the Depths. Protecting from Within.',
      description:
        'Below-grade protection works best as a system — external barriers, internal treatments, and active leak control chosen for the site’s water table.',
      image: '/assets/sol-detail-basement-overview.png',
      items: [
        {
          title: 'External Waterproofing',
          description:
            'Membrane and coating systems applied on the positive side to stop groundwater before it reaches the structure.',
        },
        {
          title: 'Internal Waterproofing (Negative Side Protection)',
          description:
            'Crystalline and cementitious systems applied from inside to block moisture in occupied basements.',
        },
        {
          title: 'Injection Grouting for Active Leaks',
          description:
            'PU or acrylic grouting systems are used to seal live water leakages through cracks, joints, and honeycombed concrete. This method quickly and effectively blocks moisture pathways.',
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
        'Basement Slabs & Rafts',
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
          title: 'Lasting Dryness',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Long-lasting resistance to seepage, capillary rise, and dampness.',
        },
        {
          code: 'V/02',
          title: 'Healthier Spaces',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Protection against mold, bacteria, and structural corrosion.',
        },
        {
          code: 'V/03',
          title: 'Material Compatibility',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Compatibility with RCC, blockwork, and precast elements.',
        },
        {
          code: 'V/04',
          title: 'Site-Specific Systems',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Customized systems based on water table levels and structural conditions.',
        },
        {
          code: 'V/05',
          title: 'Usable Basements',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description:
            'Enhances the longevity and usability of basements for storage, parking, or occupancy.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'Ethios Group protects what lies beneath—ensuring dry, durable, and safe basements that stand the test of time.',
      body:
        'Whether you’re waterproofing during construction or remediating a leakage-prone basement, Ethios Group offers end-to-end, site-specific solutions that ensure reliable and sustainable moisture control.',
    },
  },
  'podium-terrace-waterproofing': {
    badge: 'Solutions - Podium & Terrace Waterproofing',
    title: 'Podium & Terrace Waterproofing',
    intro:
      'Podiums and terraces are high-exposure zones, constantly subjected to UV rays, rain, temperature fluctuations, and surface runoff. Without effective waterproofing, these areas are highly susceptible to leakage, cracks, dampness, and deterioration of finishing layers like tiles or pavers. At Ethios Group, we offer specialized podium and terrace waterproofing systems designed for long-term protection and performance.',
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
          title: 'Sheet Membrane Systems',
          description:
            'Pre-formed membranes for podiums and terraces requiring uniform, heavy-duty protection.',
        },
        {
          title: 'Anti-Root Barriers for Garden Podiums',
          description:
            'Special membranes that prevent root intrusion, ideal for landscaped decks and terrace gardens.',
        },
        {
          title: 'Slope Correction & Drainage Systems',
          description:
            'Screeds and drainage detailing that move water off the deck before it can pond and penetrate.',
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
          title: 'Weatherproof',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'UV and weather-resistant systems.',
        },
        {
          code: 'V/02',
          title: 'Built to Last',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Long-lasting performance even in exposed conditions.',
        },
        {
          code: 'V/03',
          title: 'Finish Friendly',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Supports surface finishes without compromising performance.',
        },
        {
          code: 'V/04',
          title: 'Leakage Control',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Reduces risk of leakage into interior spaces below.',
        },
        {
          code: 'V/05',
          title: 'Comfort & Aesthetics',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Enhances thermal comfort and structural aesthetics.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'From open terraces to landscaped podiums, Ethios Group seals every layer against weather, wear, and time.',
      body:
        'From residential terraces to commercial podiums and landscaped decks, Ethios Group ensures that every exposed surface is protected with precision-engineered waterproofing systems that keep moisture out—permanently.',
    },
  },
  'structural-strengthening': {
    badge: 'Solutions - Repair & Rehabilitation',
    title: 'Structural Strengthening',
    intro:
      'As structures age or are subjected to increased loading demands, seismic activity, or construction flaws, their structural capacity may diminish over time. Ethios Group offers comprehensive structural strengthening solutions that restore and enhance the load-bearing performance of buildings, bridges, industrial facilities, and infrastructure—without full-scale demolition or reconstruction.',
    heroImage: '/assets/sol-detail-structural-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Reinforcing Integrity. Extending Life.',
      description:
        'We use modern strengthening techniques that are minimally invasive, time-efficient, and proven in performance, ensuring your structure regains both safety and serviceability.',
      image: '/assets/sol-detail-structural-overview.png',
      items: [
        {
          title: 'Carbon Fiber Wrapping (FRP Wrapping)',
          description:
            'High-strength fiber-reinforced polymer wraps that add flexural and shear capacity with minimal added weight.',
        },
        {
          title: 'Micro-Concreting',
          description:
            'Free-flowing, high-strength micro-concrete that rebuilds damaged sections with excellent bond and durability.',
        },
        {
          title: 'Concrete Jacketing',
          description:
            "This traditional method involves encasing existing columns, beams, or foundations with new layers of reinforced concrete. Jacketing enhances cross-sectional area and strengthens the member's ability to resist axial loads and moments. Often combined with bonding agents and dowel bars.",
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
        'Buildings undergoing functional change',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Cost Efficient',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Faster and more economical than reconstruction.',
        },
        {
          code: 'V/02',
          title: 'System Compatibility',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Compatible with modern materials and repair systems.',
        },
        {
          code: 'V/03',
          title: 'Safety Restored',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Restores structural safety without dismantling.',
        },
        {
          code: 'V/04',
          title: 'Minimal Disruption',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Minimally disruptive to building occupants or operations.',
        },
        {
          code: 'V/05',
          title: 'Future Ready',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Enhances performance against future stresses, including seismic loads.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'Ethios Group reinforces what matters—restoring strength and safety without rebuilding from scratch.',
      body:
        "At Ethios Group, our approach begins with a detailed structural assessment, followed by the recommendation of the most suitable strengthening technique tailored to your project's requirements. With expert engineering, advanced materials, and skilled execution, we ensure your structure stands stronger—for longer.",
    },
  },
  'crack-injection-grouting': {
    badge: 'Solutions - Repair & Rehabilitation',
    title: 'Crack Injection Grouting',
    intro:
      'Cracks in concrete structures—whether due to settlement, shrinkage, thermal movement, or structural stress—can compromise both safety and longevity. At Ethios Group, we offer advanced crack injection grouting solutions that restore monolithic integrity to concrete elements and prevent further deterioration.',
    heroImage: '/assets/sol-detail-crack-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Precision Repair. Reinforced Stability.',
      description:
        'Using high-pressure injection techniques, we fill and seal cracks internally, ensuring deep penetration and long-lasting results without the need for surface demolition.',
      image: '/assets/sol-detail-crack-overview.png',
      items: [
        {
          title: 'Epoxy Injection Grouting',
          description:
            'Structural-grade epoxy resins that bond crack faces back together and restore monolithic strength.',
        },
        {
          title: 'Polyurethane (PU) Injection Grouting',
          description:
            'Expanding PU resins that chase and seal active water leaks, even under hydrostatic pressure.',
        },
        {
          title: 'Acrylic and Microfine Cement Grouts',
          description:
            'Used in fine cracks, voids, and porous substrates for waterproofing and stabilization purposes in tunnels, podiums, lift pits, and bridge decks.',
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
          title: 'Concrete Compatible',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Compatible with existing concrete and reinforcement.',
        },
        {
          code: 'V/02',
          title: 'Pressure Proof',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Effective even under hydrostatic pressure (for PU).',
        },
        {
          code: 'V/03',
          title: 'Deep Sealing',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Deep penetration and long-lasting sealing.',
        },
        {
          code: 'V/04',
          title: 'Full Restoration',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Restores structural functionality and appearance.',
        },
        {
          code: 'V/05',
          title: 'Fast Execution',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Minimal surface disturbance and fast execution.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'Sealing the unseen—Ethios Group restores stability from within through precision crack injection solutions.',
      body:
        'Our expert team conducts a thorough site inspection, crack mapping, and material selection to ensure the best-fit injection technique for every project. With high-precision equipment and globally trusted grouting materials, Ethios Group guarantees lasting results that reinforce the strength and safety of your structure from within.',
    },
  },
  'surface-restoration': {
    badge: 'Solutions - Repair & Rehabilitation',
    title: 'Surface Restoration',
    intro:
      'Water damage, weather exposure, and structural stress can cause visible surface deterioration—peeling, flaking, cracks, efflorescence, damp patches, and even fungal growth. At Ethios Group, our Surface Restoration services are designed to repair, protect, and renew walls, floors, ceilings, and façades—both aesthetically and structurally.',
    heroImage: '/assets/sol-detail-surface-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Reviving Surfaces. Renewing Confidence.',
      description:
        'We don’t just cover up the damage—we address its root cause, apply corrective treatment, and rebuild the surface to restore integrity and long-term performance.',
      image: '/assets/sol-detail-surface-overview.png',
      items: [
        {
          title: 'Plaster & Mortar Repairs',
          description:
            'Removing weak plaster and rebuilding with polymer-modified mortars for a sound, durable base.',
        },
        {
          title: 'Surface Crack Filling & Skimming',
          description:
            'Flexible fillers and skim coats that close surface cracks and level walls before finishing.',
        },
        {
          title: 'Dampness Treatment',
          description:
            'Treatment of moisture-affected zones using chemical damp-proofing, internal sealants, and breathable coatings to eliminate water retention, salt deposits (efflorescence), and odor.',
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
        'Spalled or worn concrete floors',
        'Fungal or mold-affected walls',
        'Aged façades with discoloration and cracks',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Root-Cause First',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Root cause diagnosis before repair implementation.',
        },
        {
          code: 'V/02',
          title: 'Pressure Proof',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Effective even under hydrostatic pressure (for PU).',
        },
        {
          code: 'V/03',
          title: 'Deep Sealing',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Deep penetration and long-lasting sealing.',
        },
        {
          code: 'V/04',
          title: 'Full Restoration',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Restores structural functionality and appearance.',
        },
        {
          code: 'V/05',
          title: 'Fast Execution',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Minimal surface disturbance and fast execution.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'Ethios Group revives every surface—bringing back durability, beauty, and confidence to every structure.',
      body:
        'At Ethios Group, we ensure every surface is repaired not just to look new—but to perform better, last longer, and remain problem-free.',
    },
  },
  'anti-corrosion-treatment': {
    badge: 'Solutions - Repair & Rehabilitation',
    title: 'Anti-Corrosion Treatment',
    intro:
      'Reinforced concrete structures are constantly exposed to moisture, chemicals, carbonation, and chlorides—leading to the corrosion of steel reinforcement and deterioration of concrete. This not only weakens the structure but also significantly shortens its service life. Ethios Group offers specialized Anti-Corrosion Treatment solutions that arrest corrosion activity and protect both existing and future reinforcements.',
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
          title: 'Optional Cathodic Protection (for critical structures)',
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
          title: 'Extended Life',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Extends the life of deteriorated RCC structures.',
        },
        {
          code: 'V/02',
          title: 'Damage Prevention',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Prevents future spalling, cracking, and delamination.',
        },
        {
          code: 'V/03',
          title: 'Stronger Bond',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Enhances bond between steel and concrete.',
        },
        {
          code: 'V/04',
          title: 'Durable Finishes',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Improves durability of surface finishes and coatings.',
        },
        {
          code: 'V/05',
          title: 'Cost Effective',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Cost-effective solution to avoid premature rebuilding.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'Ethios Group revives every surface—bringing back durability, beauty, and confidence to every structure.',
      body:
        'At Ethios Group, we ensure every surface is repaired not just to look new—but to perform better, last longer, and remain problem-free.',
    },
  },
  'epoxy-flooring-systems': {
    badge: 'Solutions - Industrial Flooring & Sealants',
    title: 'Epoxy Flooring Systems',
    intro:
      "Ethios Group's Epoxy Flooring System is engineered for environments where high mechanical strength, chemical resistance, and hygiene are non-negotiable. With a sleek, high-gloss finish and outstanding durability, it's the ideal choice for industries that demand both performance and aesthetics—ranging from warehouses to pharmaceutical labs.",
    heroImage: '/assets/sol-detail-anticorrosion-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Durable. Resistant. Long-Lasting.',
      description:
        'A seamless epoxy system combines strength, chemistry, and finish into one floor built for years of demanding use.',
      image: '/assets/sol-detail-anticorrosion-overview.png',
      items: [
        {
          title: 'Seamless High-Gloss Finish',
          description:
            'A continuous, joint-free surface that is easy to clean and elevates the look of any workspace.',
        },
        {
          title: 'Excellent Adhesion',
          description:
            'Bonds strongly to prepared concrete substrates for a floor that will not delaminate under load.',
        },
        {
          title: 'Resistant to Harsh Conditions',
          description:
            'Withstands chemicals, abrasion, impact, and heavy traffic—ideal for demanding work environments.',
        },
        {
          title: 'Fully Customizable',
          description:
            'Colors, textures, anti-skid additives, and thicknesses tailored to each facility’s needs.',
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
          title: 'Extended Life',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Extends the life of deteriorated RCC structures.',
        },
        {
          code: 'V/02',
          title: 'Damage Prevention',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Prevents future spalling, cracking, and delamination.',
        },
        {
          code: 'V/03',
          title: 'Stronger Bond',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Enhances bond between steel and concrete.',
        },
        {
          code: 'V/04',
          title: 'Durable Finishes',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Improves durability of surface finishes and coatings.',
        },
        {
          code: 'V/05',
          title: 'Cost Effective',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Cost-effective solution to avoid premature rebuilding.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'Ethios Group revives every surface—bringing back durability, beauty, and confidence to every structure.',
      body:
        'At Ethios Group, we ensure every surface is repaired not just to look new—but to perform better, last longer, and remain problem-free.',
    },
  },
  'pu-polyurethane-flooring-system': {
    badge: 'Solutions - PU (Polyurethane) Flooring System',
    title: 'PU (Polyurethane) Flooring System',
    intro:
      "Ethios Group's PU (Polyurethane) Flooring System is built for zones exposed to extreme temperatures, heavy movement, and chemical exposure. With its elastic nature, UV resistance, and thermal shock tolerance, PU flooring offers a reliable and hygienic solution for food processing units, cold storage, and dynamic workspaces where traditional floors fail.",
    heroImage: '/assets/sol-detail-pu-flooring-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Flexible Under Pressure. Tough Against Time.',
      description:
        'A PU floor is chosen for what a space demands from it — movement, temperature swings, spills, or sterility — and built to keep performing under all of it at once.',
      image: '/assets/sol-detail-pu-flooring-overview.png',
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
            'Provides a seamless, non-porous surface that prevents bacterial growth—ideal for food, pharma, and healthcare sectors.',
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
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Absorbs structural movement without cracking.',
        },
        {
          code: 'V/02',
          title: 'Thermal & UV Resistance',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Ideal for cold rooms and exposed surfaces.',
        },
        {
          code: 'V/03',
          title: 'Chemical & Abrasion Resistance',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Withstands harsh cleaning and spillage.',
        },
        {
          code: 'V/04',
          title: 'Long-Term Durability',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Retains finish and strength under demanding use.',
        },
        {
          code: 'V/05',
          title: 'Low Maintenance & Hygienic',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Easy to clean and prevents microbial growth.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline: 'Flexible by design, tough by nature—PU flooring for demanding spaces.',
      body:
        'Ethios Group offers advanced PU flooring solutions tailored for environments exposed to thermal stress, heavy traffic, and high hygiene requirements. Known for their flexibility, UV resistance, and durability under dynamic loads, our PU floors provide a reliable surface that performs under pressure—indoors or outdoors, cold or hot.',
    },
  },
  'polysulphide-sealants': {
    badge: 'Solutions - Polysulphide Sealants',
    title: 'Polysulphide Sealants',
    intro:
      "Ethios Group's Polysulphide Sealants offer a durable, flexible, and water-resistant solution for sealing construction joints. Designed to handle structural movement and harsh conditions, these sealants ensure long-term performance in both submerged and exposed environments. With excellent bonding properties and chemical resistance, they're ideal for critical infrastructure and industrial use.",
    heroImage: '/assets/sol-detail-polysulphide-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Flexible & Long-Lasting Joint Sealing Solutions',
      description:
        'From high-movement structural joints to quick repairs, each polysulphide grade is formulated for a specific joint condition and exposure level.',
      image: '/assets/sol-detail-polysulphide-overview.png',
      items: [
        {
          title: 'Two-Part Sealants',
          description: 'Ideal for high-movement joints; excellent elasticity and chemical resistance.',
        },
        {
          title: 'Single-Part Gun-Grade Sealants',
          description: 'Easy-to-apply solution for moderate-movement joints and quick repairs.',
        },
        {
          title: 'Pour Grade Sealants',
          description: 'Flowable sealant for wide horizontal joints in industrial floors and decks.',
        },
        {
          title: 'Fuel-Resistant Variants',
          description: 'Formulated for areas exposed to fuels and oils, such as refineries and garages.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Industrial Flooring Joints',
        'Water-Retaining Structures',
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
          title: 'Flexible & Movement-Tolerant',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Handles structural shifts without cracking.',
        },
        {
          code: 'V/02',
          title: 'UV & Weather Resistance',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Performs well in outdoor exposure over the long term.',
        },
        {
          code: 'V/03',
          title: 'Excellent Adhesion',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Bonds to concrete, steel, glass, and stone.',
        },
        {
          code: 'V/04',
          title: 'Chemical & Oil Resistant',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Withstands industrial and fuel-related conditions.',
        },
        {
          code: 'V/05',
          title: 'Low Maintenance',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Long service life with minimal upkeep required.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline: 'Seal with Strength. Flex with Confidence.',
      body:
        'With deep expertise in joint treatment systems, Ethios Group delivers precision application, premium materials, and project-specific guidance for long-lasting, watertight, and aesthetically clean joints. From design to execution, we ensure your structure remains sealed, protected, and flexible.',
    },
  },
  'polyurethane-pu-sealants': {
    badge: 'Solutions - Polyurethane (PU) Sealants',
    title: 'Polyurethane (PU) Sealants',
    intro:
      "Ethios Group's Polyurethane (PU) Sealants are high-performance, moisture-curing elastomeric sealants designed for dynamic joints in modern construction. These sealants offer excellent flexibility, strong adhesion, and fast curing—making them ideal for both interior and exterior use in structures subjected to frequent movement, weather exposure, and vibration.",
    heroImage: '/assets/sol-detail-pu-sealants-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'High-Elasticity Sealing Solutions for Dynamic Structures.',
      description:
        'Each PU sealant format is matched to how a joint is worked — tooled by hand, poured flat, painted over, or turned around fast for high-traffic zones.',
      image: '/assets/sol-detail-pu-sealants-overview.png',
      items: [
        {
          title: 'Gun-Grade PU Sealants',
          description: 'Ideal for vertical and horizontal joints; provides excellent tooling and finish.',
        },
        {
          title: 'Pourable PU Sealants',
          description: 'Best suited for wide expansion joints and industrial flooring applications.',
        },
        {
          title: 'Paintable PU Sealants',
          description: 'Accepts coatings and paints post-curing, enabling aesthetic finishes.',
        },
        {
          title: 'Fast-Curing Formulations',
          description: 'Reduces downtime in high-traffic areas by allowing quicker recoating and use.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Precast Panel Joints',
        'Podiums & Parking Decks',
        'Facade & Curtain Wall Gaps',
        'Floor-to-Wall Transitions',
        'Balcony & Wet Area Joints',
        'Metal Cladding & Expansion Joints',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'High Elastic Recovery',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Handles expansion and contraction without failure.',
        },
        {
          code: 'V/02',
          title: 'Fast Curing',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Enables quicker project turnaround and surface finishing.',
        },
        {
          code: 'V/03',
          title: 'UV & Weather Resistant',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Suitable for both internal and external environments.',
        },
        {
          code: 'V/04',
          title: 'Strong Adhesion',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Bonds to concrete, metal, tile, and stone.',
        },
        {
          code: 'V/05',
          title: 'Low Shrinkage & Crack Resistance',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Delivers clean, long-lasting joint lines.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline: 'Built to Flex. Sealed to Last.',
      body:
        'At Ethios Group, we ensure your joints are engineered for movement—sealed with precision and built for endurance. Our polyurethane sealants are applied by trained experts using the best tools and techniques to ensure leak-proof, flexible, and durable joints across a variety of architectural and industrial settings.',
    },
  },
  'heavy-duty-floor-coatings': {
    badge: 'Solutions - Heavy-Duty Floor Coatings',
    title: 'Heavy-Duty Floor Coatings',
    intro:
      "Ethios Group's Heavy-Duty Floor Coatings are designed to withstand the toughest operational environments. These high-build coating systems provide superior resistance to abrasion, chemicals, impact, and wear—making them ideal for manufacturing floors, logistics hubs, cold storage units, and more. From mechanical stress to chemical exposure, our floor coatings offer a seamless, durable finish that enhances safety and longevity while reducing maintenance costs.",
    heroImage: '/assets/sol-detail-heavy-duty-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Engineered Floor Protection for Heavy-Duty Performance',
      description:
        'The right coating system depends on what the floor sees every day — dry abrasion, thermal shock, static-sensitive equipment, or a showroom finish.',
      image: '/assets/sol-detail-heavy-duty-overview.png',
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
          title: 'Abrasion & Impact Resistance',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Long-term surface durability under stress.',
        },
        {
          code: 'V/02',
          title: 'Chemical & Spill Protection',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Resists oils, acids, and alkalis in harsh environments.',
        },
        {
          code: 'V/03',
          title: 'Anti-Slip',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Textured finish for safer surfaces.',
        },
        {
          code: 'V/04',
          title: 'UV & Heat Stable',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Performs in all weather conditions.',
        },
        {
          code: 'V/05',
          title: 'Low Maintenance',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Long-lasting with minimal upkeep.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline: 'Stronger Surfaces. Smarter Protection.',
      body:
        "At Ethios Group, we go beyond surface-level solutions. Our Heavy-Duty Floor Coatings are custom-formulated and expertly applied to match your exact operational demands—ensuring that your facility's flooring is not just protected, but also optimized for performance, safety, and visual appeal.",
    },
  },
  'puf-spray-insulation': {
    badge: 'Solutions - PUF Spray Insulation',
    title: 'PUF Spray Insulation',
    intro:
      'Ethios Group offers high-performance Polyurethane Foam (PUF) Spray Insulation, a cutting-edge solution for thermal insulation across industrial, commercial, and energy-efficient buildings. Applied directly to surfaces, PUF spray expands into a seamless, joint-free insulating layer, effectively reducing energy loss and improving indoor climate control. It is ideal for complex surfaces, curved substrates, and hard-to-reach areas, offering quick application and long-term reliability.',
    heroImage: '/assets/sol-detail-puf-spray-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Advanced Thermal Barrier for Seamless Protection',
      description:
        'Sprayed directly onto the substrate, PUF expands to fill every gap and contour, forming one continuous insulating skin with no seams to fail.',
      image: '/assets/sol-detail-puf-spray-hero.png',
      items: [
        {
          title: 'Seamless Thermal Envelope',
          description:
            'Forms a monolithic, joint-free insulation layer that eliminates cold bridges and air gaps, enhancing thermal integrity.',
        },
        {
          title: 'Quick & Efficient Application',
          description:
            'Rapid expansion and adhesion allow for faster coverage of large and complex areas, reducing project timelines.',
        },
        {
          title: 'Versatile Surface Compatibility',
          description:
            'Adheres effectively to concrete, metal, wood, and even curved or irregular surfaces without sagging or shrinking.',
        },
        {
          title: 'Moisture & Chemical Resistance',
          description:
            'PUF insulation is non-absorbent, ensuring resistance against moisture, microbial growth, and mild chemicals—ideal for both roofs and interiors.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Industrial Roofs',
        'Cold Storages',
        'HVAC Systems',
        'Cavity Walls & Ceilings',
        'Underdeck Roofs',
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
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Low thermal conductivity reduces energy usage and HVAC load.',
        },
        {
          code: 'V/02',
          title: 'Fast & Uniform Coverage',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Saves time on large or complex surfaces.',
        },
        {
          code: 'V/03',
          title: 'Moisture Barrier',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Prevents condensation and damp-related deterioration.',
        },
        {
          code: 'V/04',
          title: 'Durability & Dimensional Stability',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Retains insulation performance over time.',
        },
        {
          code: 'V/05',
          title: 'Eco-Friendly',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Available in CFC/HCFC-free and low-emission formulations.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline: 'Seamless spray. Smarter insulation. Sustainable comfort—delivered by Ethios Group.',
      body:
        'At Ethios Group, we bring advanced spray insulation technology backed by expert application, on-site technical guidance, and customized project integration. Our PUF solutions align with modern green-building norms, helping reduce energy bills and improve occupant comfort year-round.',
    },
  },
  'puf-board-insulation': {
    badge: 'Solutions - PUF Board Insulation',
    title: 'PUF Board Insulation',
    intro:
      'Ethios Group delivers high-performance PUF (Polyurethane Foam) Board Insulation systems designed for precision thermal control in modern construction. These pre-formed, rigid panels offer superior insulation, long-term dimensional stability, and ease of installation—making them ideal for diverse structural needs across industrial, commercial, and modular applications.',
    heroImage: '/assets/sol-detail-puf-board-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Rigid Thermal Panels for Structured Efficiency',
      description:
        'Pre-formed rigid boards bring factory-consistent insulation value to walls, roofs, and floors, cut and fitted precisely on site.',
      image: '/assets/sol-detail-puf-board-hero.png',
      items: [
        {
          title: 'High-Density, Rigid Panels',
          description:
            'Designed for high compressive strength and consistent insulation across walls, roofs, and floors.',
        },
        {
          title: 'Easy-to-Cut & Shape Format',
          description:
            'Lightweight and customizable boards that adapt to varied surface sizes and design requirements.',
        },
        {
          title: 'Compatibility with Structural Layers',
          description:
            'Easily integrates with sandwich panels, waterproofing systems, and metal or concrete finishes.',
        },
        {
          title: 'Moisture & Climate Resistance',
          description:
            'Low water absorption and resistance to mold growth make it suitable for humid or temperature-sensitive environments.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'Sandwich Panels',
        'Cold Storage & Refrigeration Units',
        'Floor Screed Insulation',
        'HVAC Duct & Pipe Insulation',
        'Modular Cabins & Prefab Buildings',
        'Cladding & Facade Systems',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Uniform Thermal Efficiency',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Consistent insulation value across large surface areas.',
        },
        {
          code: 'V/02',
          title: 'Quick & Clean Installation',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Speeds up construction while reducing labor costs.',
        },
        {
          code: 'V/03',
          title: 'Moisture & Mold Resistant',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Supports hygiene and durability in closed environments.',
        },
        {
          code: 'V/04',
          title: 'Lightweight Strength',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Low dead load, high performance.',
        },
        {
          code: 'V/05',
          title: 'Eco & Energy Smart',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Sustainable and cost-saving.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline: 'Engineered panels. Lasting insulation. Trusted by Ethios Group.',
      body:
        'At Ethios Group, we combine product quality with technical know-how to deliver tailor-made insulation systems that improve comfort, sustainability, and operational efficiency. Our PUF Board Insulation solutions are backed by on-ground support and application expertise for flawless execution.',
    },
  },
  'xps-insulation-board': {
    badge: 'Solutions - XPS Insulation Board',
    title: 'XPS Insulation Board',
    intro:
      'Ethios Group offers XPS (Extruded Polystyrene) Insulation Boards that are engineered for maximum thermal performance, moisture resistance, and compressive strength. Manufactured through a continuous extrusion process, these boards are ideal for demanding applications where long-term insulation and structural integrity are essential.',
    heroImage: '/assets/sol-detail-xps-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'High-Performance Thermal Panels for Energy-Efficient Construction',
      description:
        "XPS's closed-cell structure holds its insulation value even under load and moisture, where softer boards would compress or absorb water.",
      image: '/assets/sol-detail-xps-hero.png',
      items: [
        {
          title: 'Closed-Cell Structure Design',
          description:
            'Provides superior resistance to water absorption and thermal conductivity, ensuring high energy efficiency.',
        },
        {
          title: 'Uniform Thickness & Compressive Strength',
          description:
            'Consistent quality across the board makes it perfect for load-bearing surfaces and under screed applications.',
        },
        {
          title: 'Weather & Moisture Tolerance',
          description:
            'Performs reliably in wet or damp environments such as inverted roofs, foundations, and basements.',
        },
        {
          title: 'Lightweight & Easy to Install',
          description:
            'Simple to cut, handle, and install—reducing labor time and enabling quick deployment in all types of builds.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
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
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Ensures low U-values and reduced HVAC load.',
        },
        {
          code: 'V/02',
          title: 'High Moisture Resistance',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Closed-cell design prevents water penetration.',
        },
        {
          code: 'V/03',
          title: 'Excellent Compressive Strength',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Withstands structural loads and mechanical pressure.',
        },
        {
          code: 'V/04',
          title: 'Long-Term Dimensional Stability',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Retains shape and insulation value over time.',
        },
        {
          code: 'V/05',
          title: 'Environmentally Friendly',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Low carbon footprint, recyclable, and supports green building standards.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline: 'Smart insulation. Long-term performance. Delivered by Ethios Group.',
      body:
        "At Ethios Group, we don't just provide insulation materials—we deliver comprehensive insulation systems that integrate seamlessly with your building's thermal envelope. Our XPS insulation boards are sourced from trusted brands and installed by trained professionals to maximize energy efficiency and durability.",
    },
  },
  'eps-insulation-board': {
    badge: 'Solutions - EPS Insulation Board',
    title: 'EPS Insulation Board',
    intro:
      'Ethios Group provides EPS (Expanded Polystyrene) Insulation Boards—a lightweight, flexible, and cost-effective thermal insulation solution ideal for residential, commercial, and industrial applications. Manufactured from expanded polystyrene beads fused into a solid block, EPS offers excellent thermal resistance while remaining easy to handle and install.',
    heroImage: '/assets/sol-detail-eps-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Smart Insulation: Light, Affordable & Versatile',
      description:
        'EPS delivers dependable insulation value at low cost and low weight, cut and fitted to whatever density a project calls for.',
      image: '/assets/sol-detail-eps-hero.png',
      items: [
        {
          title: 'Lightweight & Flexible Design',
          description:
            'Easily cut, shaped, and installed on-site, reducing construction time and labor effort.',
        },
        {
          title: 'Cost-Effective Thermal Protection',
          description:
            'Offers reliable insulation performance at an economical price, ideal for large-scale and budget-sensitive projects.',
        },
        {
          title: 'Versatile Density & Thickness Options',
          description:
            'Available in multiple densities and sizes to suit various project types—from ceilings to flooring systems.',
        },
        {
          title: 'Compatible with Multiple Applications',
          description:
            'Can be integrated with waterproofing, screeds, walls, and duct systems without compromising performance.',
        },
      ],
    },
    applications: {
      eyebrow: 'Applications',
      title: 'Typical Applications',
      items: [
        'False Ceiling & Partition Walls',
        'Duct & Equipment Insulation',
        'Roof Gardens & Green Roofs',
        'Wall Panel Infill for Modular Construction',
        'Packaging & Protective Enclosures',
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
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Offers good insulation performance at low investment.',
        },
        {
          code: 'V/02',
          title: 'Lightweight & Easy to Work With',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Reduces structural load and simplifies on-site installation.',
        },
        {
          code: 'V/03',
          title: 'Customizable Densities',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Suitable for diverse construction conditions and performance needs.',
        },
        {
          code: 'V/04',
          title: 'Eco-Friendly & Recyclable',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Sustainable material with low environmental impact.',
        },
        {
          code: 'V/05',
          title: 'Multi-Application Flexibility',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Compatible with various civil and architectural systems.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline: 'Light on structure. Big on insulation. Powered by Ethios Group.',
      body:
        "Ethios Group ensures that your insulation needs are met with precision, performance, and reliability. Our EPS boards are sourced from quality-certified manufacturers and tailored to fit your project requirements—whether you're working on a high-rise, a factory, or an energy-efficient villa.",
    },
  },
  'insulation-screed-concrete': {
    badge: 'Solutions - Insulation Screed Concrete',
    title: 'Insulation Screed Concrete',
    intro:
      'Ethios Group brings to you Insulation Screed Concrete—a lightweight, high-performance screed formulated to provide both thermal insulation and sound dampening in modern construction. Designed for use in areas where structural load, energy efficiency, and acoustic comfort are all priorities, this solution combines the strength of concrete with insulating properties for a durable, multi-functional underlayer.',
    heroImage: '/assets/sol-detail-screed-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Dual-Function Screed for Thermal & Acoustic Comfort',
      description:
        'A single lightweight layer that levels the surface, insulates it thermally, and dampens sound before the next system goes on top.',
      image: '/assets/sol-detail-screed-hero.png',
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
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Reduces energy consumption by acting as a heat barrier.',
        },
        {
          code: 'V/02',
          title: 'Acoustic Efficiency',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Helps suppress noise transmission between rooms or floors.',
        },
        {
          code: 'V/03',
          title: 'Lightweight Strength',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Lowers dead load while maintaining performance.',
        },
        {
          code: 'V/04',
          title: 'Waterproofing Friendly',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Ideal as a base layer for multi-layer waterproofing systems.',
        },
        {
          code: 'V/05',
          title: 'Durable & Easy',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Shrinkage control with a strong, dependable finish.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline:
        'A screed that works harder—insulating, leveling, and protecting with every layer. Powered by Ethios Group.',
      body:
        'With expert formulation and project-based customization, Ethios Group delivers Insulation Screed Concrete that goes beyond traditional screeds. Whether you’re building a sustainable villa, a commercial high-rise, or a noise-sensitive office, we help you create a base that insulates, supports, and performs.',
    },
  },
  'insulation-coating': {
    badge: 'Solutions - Insulation Coating',
    title: 'Insulation Coating',
    intro:
      'Insulation Coating is a high-performance protective layer designed to reduce heat transfer and enhance energy efficiency. It provides thermal insulation while safeguarding surfaces from moisture, corrosion, and environmental wear. Suitable for roofs, walls, pipelines, and industrial equipment, it helps maintain optimal temperatures and reduces energy costs. Durable and easy to apply, it ensures long-lasting protection and improved structural performance.',
    heroImage: '/assets/sol-detail-insulation-coating-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Reduce heat. Protect surfaces. Enhance efficiency.',
      description:
        'Applied directly over concrete, metal, or existing coatings, this thermal barrier protects the substrate while cutting the heat that reaches it.',
      image: '/assets/sol-detail-insulation-coating-hero.png',
      items: [
        {
          title: 'High-Performance Thermal Barrier',
          description:
            'Designed using advanced insulating materials to reduce heat transfer, improving energy efficiency while protecting structural surfaces.',
        },
        {
          title: 'Versatile Application Range',
          description:
            'Suitable for roofs, walls, pipelines, and industrial equipment, providing a reliable layer of protection before finishing or exposure to environmental conditions.',
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
        'Floors & Basements',
        'Pipes & HVAC Ducts',
        'Industrial & Commercial Surfaces',
        'Roof & Wall Protection',
      ],
    },
    benefits: {
      eyebrow: 'What We Stand For',
      title: 'Key Benefits',
      items: [
        {
          code: 'V/01',
          title: 'Improves Thermal Resistance',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'Acts as a barrier against heat, reducing energy usage.',
        },
        {
          code: 'V/02',
          title: 'Energy-Efficient',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Helps maintain desired indoor temperatures with less power.',
        },
        {
          code: 'V/03',
          title: 'Moisture-Resistant',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Stops water ingress, protecting the structure beneath.',
        },
        {
          code: 'V/04',
          title: 'Lightweight & Easy to Apply',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Reduces labor effort while providing strong coverage.',
        },
        {
          code: 'V/05',
          title: 'Durable & Long-Lasting',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Resists wear and shrinkage, maintaining performance over time.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline: 'Advanced Insulation Coating for Maximum Heat Resistance and Long-Lasting Surface Protection',
      body:
        'High-performance insulation coating that reduces heat transfer, protects surfaces, and enhances energy efficiency—backed by Ethios Group’s technical guidance from specification through application.',
    },
  },
  'tile-joint-fillers': {
    badge: 'Solutions - Tile Joint Fillers',
    title: 'Tile Joint Fillers',
    intro:
      'Ethios Group offers high-performance Epoxy Tile Grouts that deliver exceptional bonding strength, chemical resistance, and a seamless aesthetic finish. Designed for demanding environments where hygiene, durability, and visual appeal are critical, our epoxy grouts outperform traditional cementitious grouts in every aspect.',
    heroImage: '/assets/sol-detail-tile-joint-hero.png',
    overview: {
      eyebrow: 'Overview',
      title: 'Superior Strength. Hygienic Finish. Long-Lasting Appeal.',
      description:
        'A solvent-free epoxy system built to hold tile joints watertight and stain-free in the environments that punish grout the hardest.',
      image: '/assets/sol-detail-tile-joint-hero.png',
      items: [
        {
          title: 'Two-Component Resin System',
          description:
            'A solvent-free, highly durable resin and hardener blend that forms a dense, impermeable joint—perfect for critical installations.',
        },
        {
          title: 'High Chemical & Stain Resistance',
          description:
            'Withstands acids, oils, cleaning agents, and heavy-duty detergents—ideal for industrial kitchens, labs, and wet zones.',
        },
        {
          title: 'Color-Stable & UV Resistant Shades',
          description:
            'Available in a wide range of fade-proof colors that retain vibrancy over time, enhancing tile aesthetics.',
        },
        {
          title: 'Non-Porous & Anti-Bacterial',
          description:
            'The seamless, smooth finish prevents microbial growth, making it ideal for hygiene-sensitive applications like hospitals and food zones.',
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
          title: 'Superior Bonding & Flexibility',
          icon: '/assets/icon-benefit-lifespan.svg',
          bareIcon: true,
          description: 'Handles thermal and mechanical stress without cracking.',
        },
        {
          code: 'V/02',
          title: 'Waterproof & Non-Absorbent',
          icon: '/assets/icon-benefit-seepage.svg',
          description: 'Perfect for submerged and wet applications.',
        },
        {
          code: 'V/03',
          title: 'Highly Durable',
          icon: '/assets/icon-benefit-maintenance.svg',
          description: 'Resists wear from heavy foot traffic and industrial use.',
        },
        {
          code: 'V/04',
          title: 'Low Maintenance',
          icon: '/assets/icon-benefit-energy.svg',
          bareIcon: true,
          description: 'No efflorescence, peeling, or fading—ever.',
        },
        {
          code: 'V/05',
          title: 'Aesthetic Excellence',
          icon: '/assets/icon-benefit-finishes.svg',
          description: 'Delivers a polished, designer look with minimal upkeep.',
        },
      ],
    },
    quote: {
      image: '/assets/sol-detail-quote-bg.png',
      headline: 'Joints that seal clean and stay clean.',
      body:
        'Ethios Group pairs premium epoxy grout systems with expert application, ensuring every tiled surface—from hospital floors to luxury bathrooms—stays watertight, hygienic, and visually flawless for years to come.',
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
