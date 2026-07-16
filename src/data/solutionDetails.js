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
}

export function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export default SOLUTION_DETAILS
