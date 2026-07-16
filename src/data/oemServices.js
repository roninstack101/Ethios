/* Content for OEM service detail pages (Figma nodes 21-2943 …), keyed by slug.
   Schema: { badge, title, intro, heroImage, sections: [{title, description, image}],
   quote: { eyebrow, headline, body } } */
const OEM_SERVICES = {
  'tile-stone-adhesives-and-grouts': {
    title: 'Tile & Stone Adhesives and Grouts',
    intro:
      'Our range of tile and stone adhesives and grouts is formulated to deliver unmatched bonding strength, flexibility, and joint aesthetics. From polymer-modified cementitious adhesives to high-performance epoxy systems, these solutions cater to residential, commercial, and industrial tiling needs—ensuring secure installations and long-lasting beauty.',
    heroImage: '/assets/oem-tile-hero.png',
    sections: [
      {
        title: 'Cement-Based Tile Adhesives',
        description:
          'Our cementitious tile adhesives are formulated for high-performance tile installation across residential, commercial, and industrial applications. These products exhibit strong adhesion, extended open time, and excellent slip resistance—making them ideal for vertical and horizontal applications. Designed to bond a variety of tiles like ceramic, vitrified, and natural stones, these adhesives are polymer-modified to perform under demanding conditions such as submerged areas, high-load floors, and external claddings. Options include flexible grades for thermal movement and heavy-duty grades for high-traffic zones.',
        image: '/assets/oem-tile-1.png',
      },
      {
        title: 'Epoxy-Based Adhesives & Tile Grouts',
        description:
          'Epoxy tile adhesives and grouts provide unmatched chemical resistance, stain resistance, and mechanical strength. These three-component systems are widely used in commercial kitchens, clean rooms, dairies, laboratories, and heavy-duty industrial flooring. The non-absorbent, non-porous finish resists fungal and bacterial growth, ensuring hygienic installations. Available in multiple colors, they also contribute to the aesthetic appeal while ensuring long-term durability and joint integrity.',
        image: '/assets/oem-tile-2.png',
      },
      {
        title: 'Coloured Cementitious Grouts',
        description:
          'Coloured tile joint grouts are polymer-modified, water-resistant, and crack-resistant fillers designed for tile joints of varying widths. These grouts are formulated to prevent efflorescence, minimize shrinkage, and maintain vibrant color over time. With anti-fungal and anti-microbial properties, they are suitable for use in bathrooms, kitchens, pools, and exterior tiling projects, delivering both function and finish in one solution.',
        image: '/assets/oem-tile-3.png',
      },
    ],
    quote: {
      eyebrow: 'OEM Advantage',
      headline: 'Strength You Can Stick With',
      body:
        'With Ethios as your OEM partner, you gain access to a trusted portfolio of tile adhesives and grouts engineered for lasting performance. We offer complete customization—right from product formulation to packaging—so you can confidently launch or expand your adhesive range with reliable quality, flexible volumes, and strong market appeal.',
    },
  },
  'waterproofing-solutions': {
    title: 'Waterproofing Solutions',
    intro:
      'Designed to defend against water ingress in the harshest environments, our waterproofing solutions include crystalline systems, cementitious coatings, bituminous membranes, and integral admixtures. Engineered for basements, terraces, water tanks, and more—these products ensure structural safety and longevity.',
    heroImage: '/assets/oem-wp-hero.png',
    sections: [
      {
        title: 'Crystalline Waterproofing Systems',
        description:
          'Crystalline waterproofing works from within the concrete matrix to form insoluble crystals that block capillaries and pores. These intelligent systems self-heal future hairline cracks and provide lifetime waterproofing protection. Ideal for water-retaining structures such as basements, water tanks, swimming pools, and tunnels, these systems can be applied as a coating or integrated as an admixture.',
        image: '/assets/oem-wp-1.png',
      },
      {
        title: 'Cementitious Waterproof Coatings',
        description:
          'These coatings consist of polymer-enhanced cement-based formulations that create a durable and flexible barrier against water ingress. They are ideal for rooftops, terraces, balconies, podium slabs, and water tanks. With superior adhesion to concrete and masonry substrates, the coatings accommodate minor substrate movements and resist UV exposure, carbonation, and weathering.',
        image: '/assets/oem-wp-2.png',
      },
      {
        title: 'Solar Reflective & Bituminous Coatings',
        description:
          'Designed for energy efficiency and long-term protection, our solar-reflective coatings lower surface temperature and prevent heat build-up, making them ideal for terrace and industrial roofing. Bituminous coatings provide elastomeric, seamless membranes that effectively seal cracks and protect concrete against water and environmental exposure.',
        image: '/assets/oem-wp-3.png',
      },
      {
        title: 'Integral Waterproofing Admixtures',
        description:
          'These are liquid or powder-based additives that reduce the permeability of concrete and mortar. By modifying the internal pore structure, they prevent water penetration and improve the durability of the structure. Suitable for plasters, concrete slabs, foundations, and precast elements, they are essential for long-term integrity and cost-effective construction.',
        image: '/assets/oem-wp-4.png',
      },
    ],
    quote: {
      eyebrow: 'OEM Advantage',
      headline: 'Seal the Future with Confidence',
      body:
        'Ethios delivers advanced waterproofing solutions developed to meet modern construction challenges. As your OEM partner, we provide scalable production, adaptable formulations, and complete private-label support—empowering your brand to offer dependable protection systems that inspire trust across projects of every scale.',
    },
  },
  'block-adhesives-ready-mix-plasters': {
    title: 'Block Adhesives & Ready Mix Plasters',
    intro:
      'Enhance the speed and quality of your construction with our block adhesives and ready mix plasters. Ideal for AAC blocks, concrete bricks, and external/internal wall plastering, these products offer superior bonding, crack resistance, and smooth finishes—while saving labor and time on-site.',
    heroImage: '/assets/oem-block-hero.png',
    sections: [
      {
        title: 'Block Adhesives',
        description:
          'Formulated for AAC, fly ash, and concrete blocks, these adhesives provide high early strength and a thin jointing layer, reducing material consumption and construction time. The ready-to-use powder mixes with water to deliver superior adhesion, workability, and thermal insulation—ensuring stability in both vertical and horizontal applications.',
        image: '/assets/oem-block-1.png',
      },
      {
        title: 'Ready Mix Plasters',
        description:
          'Our range of polymer-modified and fiber-reinforced ready-mix plasters ensures superior coverage, reduced rebound loss, and enhanced bond with substrates. Ideal for internal and external walls, these plasters eliminate the inconsistencies of on-site mixing and deliver uniformity in texture, faster application, and crack resistance. Available in both hand-applied and sprayable variants.',
        image: '/assets/oem-block-2.png',
      },
    ],
    quote: {
      eyebrow: 'OEM Advantage',
      headline: 'Speed Meets Surface Perfection',
      body:
        'Our OEM block adhesives and plasters are built for fast, efficient, and flawless application. We help you deliver ready-to-use construction solutions that are quality-assured, customizable, and perfectly packaged to carry your brand forward in today’s competitive building materials market.',
    },
  },
  'concrete-admixtures-curing-solutions': {
    title: 'Concrete Admixtures & Curing Solutions',
    intro:
      'Our admixtures and curing compounds are developed to optimize concrete performance across all project types. Whether it’s achieving high early strength, improved workability, or effective curing—our SNF/PCE-based superplasticizers, accelerators, and surface treatments deliver dependable results every time.',
    heroImage: '/assets/oem-admix-hero.png',
    sections: [
      {
        title: 'Superplasticizers (PCE/SNF-Based)',
        description:
          'Our admixtures based on Polycarboxylate Ether (PCE) and Sulfonated Naphthalene Formaldehyde (SNF) technology offer exceptional water reduction and improved workability for high-performance concrete. They are widely used in precast and ready-mix concrete applications for achieving higher compressive strength, faster construction cycles, and better finish.',
        image: '/assets/oem-admix-1.png',
      },
      {
        title: 'Curing Compounds',
        description:
          'Our curing compounds form a membrane on freshly poured concrete surfaces to retain moisture during the hydration process. This results in improved strength, surface hardness, and reduced cracking. Available in water-based and resin-based versions, they are ideal for large floor areas like pavements, industrial floors, and roadways where conventional curing is impractical.',
        image: '/assets/oem-admix-2.png',
      },
      {
        title: 'Quick Setting & Accelerating Agents',
        description:
          'These chemical additives are designed to speed up the setting time of concrete and mortar mixes. Especially useful in precast factories, repair jobs, or cold weather concreting, they facilitate early demolding, faster strength gain, and time-efficient construction without compromising durability.',
        image: '/assets/oem-admix-3.png',
      },
      {
        title: 'Pump Primers',
        description:
          'Pump primers are specially developed lubricants that coat the internal walls of concrete pumps and hoses, reducing friction and preventing blockages. They allow smooth and efficient concrete pumping, especially for high-performance mixes, self-compacting concretes, or long-distance pumping.',
        image: '/assets/oem-admix-4.png',
      },
    ],
    quote: {
      eyebrow: 'OEM Advantage',
      headline: 'Smart Chemistry. Stronger Concrete.',
      body:
        'Ethios enables your brand to lead with innovation in concrete technology. Our OEM offerings in admixtures and curing compounds provide the technical consistency, documentation, and product support needed to elevate your product line—delivering better mixes, better finishes, and better business results under your own label.',
    },
  },
  'repair-rehabilitation-solutions': {
    title: 'Repair & Rehabilitation Solutions',
    intro:
      'Bring deteriorated structures back to life with our specialized repair and rehabilitation products. From micro concretes and crack sealers to PU grouts and anti-corrosive coatings, we offer solutions that restore strength, ensure safety, and extend the life of critical infrastructure.',
    heroImage: '/assets/oem-repair-hero.png',
    sections: [
      {
        title: 'Micro Concrete & Crack Repair Products',
        description:
          'High-strength, shrinkage-compensated micro concretes and crack repair products restore the structural integrity of damaged concrete. They are used for jacketing columns, repairing beams, or filling voids without disturbing the structural framework. These flowable formulations ensure ease of application and high mechanical performance.',
        image: '/assets/oem-repair-1.png',
      },
      {
        title: 'Bonding Agents',
        description:
          'Bonding agents—available in latex or epoxy base—are used to create a strong interface between old and new concrete layers. They enhance bond strength, flexibility, and adhesion, ensuring durable overlays and plastering on concrete or masonry substrates.',
        image: '/assets/oem-repair-2.png',
      },
      {
        title: 'PU & Epoxy Grout',
        description:
          'PU grouts are hydrophilic or hydrophobic injectable solutions used to seal leaking cracks and joints in concrete. Epoxy grouts provide structural reinforcement and are suitable for repairing load-bearing members, anchoring steel bars, and sealing voids. Both systems offer long-term, watertight performance.',
        image: '/assets/oem-repair-3.png',
      },
      {
        title: 'Corrosion Protection Coatings',
        description:
          'Our anti-corrosive systems, including zinc-rich primers and epoxy-polyurethane topcoats, protect rebars and concrete surfaces from carbonation and chloride attacks. Ideal for bridges, marine structures, and industrial environments, these coatings significantly extend service life and reduce maintenance costs.',
        image: '/assets/oem-repair-4.png',
      },
    ],
    quote: {
      eyebrow: 'OEM Advantage',
      headline: 'Rebuild Reliability, Brick by Brick',
      body:
        "Our repair and rehabilitation systems are designed not just to restore structures—but to reinforce your brand's credibility. With Ethios, you get OEM-grade formulations, product training resources, and private-label flexibility that allows you to serve contractors, infrastructure projects, and retrofit markets with authority.",
    },
  },
  'industrial-flooring-systems': {
    title: 'Industrial Flooring Systems',
    intro:
      'Our industrial flooring solutions are engineered for durability, hygiene, and aesthetics. Featuring heavy-duty epoxy coatings, self-leveling systems, and abrasion-resistant floor hardeners, these products deliver seamless performance in warehouses, factories, pharma units, and high-traffic commercial environments.',
    heroImage: '/assets/oem-floor-hero.png',
    sections: [
      {
        title: 'Floor Hardeners (Non-Metallic & Metallic)',
        description:
          'These dry shake hardeners are applied to fresh concrete to increase abrasion and impact resistance. Non-metallic versions are used for general industrial floors, while metallic hardeners are designed for high-load environments like factories, warehouses, and loading docks. They extend floor life and reduce dust generation.',
        image: '/assets/oem-floor-1.png',
      },
      {
        title: 'Self-Leveling Epoxy Systems',
        description:
          'Our epoxy flooring systems create smooth, seamless, and chemically resistant surfaces. Ideal for clean rooms, pharmaceutical plants, and food processing areas, they offer superior hygiene, ease of cleaning, and aesthetic appeal. Customizable thickness and texture options are available for light to heavy-duty use.',
        image: '/assets/oem-floor-2.png',
      },
      {
        title: 'Epoxy Primers & Coatings',
        description:
          'These systems provide excellent adhesion to concrete and protection against chemicals, moisture, and wear. Used as primers or topcoats, they ensure a durable flooring system that withstands heavy traffic and aggressive cleaning processes. Suitable for production floors, workshops, and logistics centers.',
        image: '/assets/oem-floor-3.png',
      },
    ],
    quote: {
      eyebrow: 'OEM Advantage',
      headline: 'Grounded in Performance, Finished with Precision',
      body:
        'Ethios provides OEM partners with a wide range of industrial flooring solutions engineered for durability and visual impact. From epoxy coatings to floor hardeners, we help you deliver professional-grade flooring systems—customized, quality-tested, and ready for private-label distribution under your trusted brand.',
    },
  },
}

export default OEM_SERVICES
