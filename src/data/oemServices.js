/* Content for OEM service detail pages (Figma nodes 21-2943 …), keyed by slug.
   Schema: { badge, title, intro, heroImage, sections: [{title, description, image}],
   quote: { eyebrow, headline, body } }
   badge defaults to "OEM Service" when omitted.
   intro and description each accept a string (single paragraph) or an array of
   strings (one <p> per entry). */
const OEM_SERVICES = {
  "tile-stone-adhesives-and-grouts": {
    badge: "Contract Manufacturing",
    title: "Tile & Stone Adhesives and Grouts",
    intro: [
      "Performance-led tile installation systems developed for your brand. From polymer-modified cementitious adhesives to reactive-resin adhesives and grouts, we manufacture formulations tailored to tile type, substrate, application environment and target performance class, with consistent workability, adhesion and finish across batches.",
    ],
    heroImage: "/assets/oem-tile-hero.png",
    sections: [
      {
        title: "Cement-Based Tile Adhesives",
        description: [
          "Our cement-based tile adhesives are designed for reliable tile installation across residential, commercial, and industrial projects. They offer strong bonding, easy workability, and good slip resistance for both wall and floor applications.",
          "The range includes grades for ceramic, vitrified, porcelain and natural stone tiles, and includes solutions for wet areas, external applications, tile-on-tile installation, large-format tiles, high-traffic areas and projects that require flexibility to handle movement and changing conditions.",
        ],
        image: "/assets/oem-tile1-new.png",
      },
      {
        title: "Epoxy-Based Adhesives & Tile Grouts",
        description: [
          "Our epoxy adhesives and tile grouts are designed for areas that demand higher durability and hygiene standards. They offer excellent resistance to chemicals, stains, moisture and heavy wear, making them ideal for commercial kitchens, laboratories, dairies, clean rooms, swimming pools and industrial spaces.",
          "Their non-porous finish helps prevent the growth of bacteria and fungi, while a wide range of colour options ensures both performance and aesthetics. The range can also be customised as per multiple joint widths and colour options.",
        ],
        image: "/assets/oem-tile-3.png",
      },
      {
        title: "Coloured Cementitious Grouts",
        description: [
          "Our coloured tile grouts are designed to deliver durable, water-resistant, and crack-resistant joints for a wide range of tile applications. They cover narrow and wide joint applications for ceramic, vitrified, porcelain and natural stone installations.",
          "They help reduce shrinkage, prevent efflorescence, and retain their colour over time. With anti-fungal and anti-microbial properties, they are ideal for bathrooms, kitchens, balconies, facades, swimming pools, and outdoor areas, combining long-lasting performance with an attractive finish.",
        ],
        image: "/assets/oem-tile-2.png",
      },
    ],
    quote: {
      eyebrow: "Contract Manufacturing",
      headline: "Built for Strong Partnerships",
      body: "As your contract manufacturing partner, we help you bring high-quality tile adhesives and grouts to market under your own brand. From formulation to packaging, we offer customisation, consistent quality, flexible production volumes, and dependable manufacturing support with every batch.",
    },
  },
  "waterproofing-solutions": {
    badge: "Contract Manufacturing",
    title: "Waterproofing Solutions",
    intro:
      "Ethios develops and manufactures waterproofing systems across crystalline, cementitious, acrylic, bituminous and integral-admixture technologies. Each formulation can be adapted to the target substrate, exposure condition, application method, performance requirement and market position.",
    heroImage: "/assets/oem-wp-hero.png",
    sections: [
      {
        title: "Crystalline Waterproofing Systems",
        description: [
          "Our crystalline waterproofing systems protect concrete from within by forming crystals that block pores and water pathways inside the structure. They help seal small cracks over time and provide long-lasting waterproofing performance.",
          "Formulations can be developed as surface-applied crystalline slurries or integral crystalline admixtures for basements, retaining structures, tunnels, lift pits, swimming pools, reservoirs and other water-retaining or water-excluding concrete structures.",
        ],
        image: "/assets/oem-wp-1-new.png",
      },
      {
        title: "Cementitious Waterproof Coatings",
        description: [
          "Our cementitious waterproof coatings are polymer-modified, cement-based solutions that create a strong and flexible barrier against water ingress. Designed to handle minor surface movement, they also provide good resistance to weathering and long-term exposure.",
          "We can develop rigid, semi-flexible and flexible one- or two-component systems based on the required application profile. Formulations can be engineered for wet areas, terraces, balconies, podium slabs, water tanks, basements, retaining walls and concrete-protection applications.",
        ],
        image: "/assets/oem-wp-2.png",
      },
      {
        title: "Solar Reflective & Bituminous Coatings",
        description: [
          "Our solar reflective coatings help reduce surface temperatures and minimise heat absorption, making them ideal for terraces and industrial roofs.",
          "Our bituminous coatings create a seamless, flexible layer that helps seal cracks and protects concrete surfaces from water penetration and weather exposure. We can develop water-based bitumen emulsions, rubber-modified coatings, protective coatings and primers based on the required application and substrate conditions.",
        ],
        image: "/assets/oem-wp-3.png",
      },
      {
        title: "Integral Waterproofing Admixtures",
        description: [
          "Our integral waterproofing admixtures are added directly to concrete and mortar to reduce water absorption and improve durability. Available in liquid and powder forms, they help protect structures from water penetration while enhancing long-term performance.",
          "Suitable for plasters, slabs, foundations, and precast elements, they offer a simple and cost-effective way to improve waterproofing from within.",
        ],
        image: "/assets/oem-wf-5.png",
      },
    ],
    quote: {
      eyebrow: "Ethios Advantage",
      headline: "Engineered for Performance",
      body: "From formulation adaptation to commercial production, Ethios manufactures waterproofing systems designed around specific substrates, exposure conditions and application needs. With scalable production, quality control, packaging and brand-ready delivery, we help your brand bring consistent, project-ready solutions to market.",
    },
  },
  "block-adhesives-ready-mix-plasters": {
    badge: "Contract Manufacturing",
    title: "Block Adhesives & Ready Mix Plasters",
    intro: [
      "Preblended masonry and plastering systems developed for faster application, controlled material consumption and consistent site performance. Designed for AAC blocks, fly-ash bricks, concrete blocks and internal or external plastering, the range delivers dependable adhesion, workability, coverage and finish across batches.",
    ],
    heroImage: "/assets/oem-block-hero.png",
    sections: [
      {
        title: "Block Adhesives",
        description: [
          "Formulated for AAC blocks, fly-ash bricks and concrete masonry units, our block adhesives enable thin-bed jointing with consistent bond strength and workability. This reduces material usage and speeds up construction.",
          "The preblended powder simply needs to be blended with the prescribed quantity of water, helping reduce on-site mixing variations, mortar consumption and application time while ensuring easy application and consistent performance for both uniform horizontal and vertical joints.",
        ],
        image: "/assets/oem-block-1.png",
      },
      {
        title: "Ready Mix Plasters",
        description: [
          "Our polymer-modified and fibre-reinforced ready-mix plasters are developed for consistent adhesion, controlled workability and uniform surface finishing across internal and external walls.",
          "Factory-controlled formulations help reduce variations in sand grading and mix proportion, while supporting improved coverage, lower rebound loss and faster application. The range can be adapted for both hand-applied and sprayable systems.",
        ],
        image: "/assets/oem-block-2.png",
      },
    ],
    quote: {
      eyebrow: "Ethios Advantage",
      headline: "Consistency Built Into Every Batch",
      body: "As your contract manufacturing partner, Ethios delivers block jointing mortars and ready-mix plasters that are designed for easy application and consistent performance on site. From formulation development and application-specific grades to scalable production, quality control and packaging, we deliver consistent bond, workability, coverage and finish across every batch.",
    },
  },
  "concrete-admixtures-curing-solutions": {
    badge: "Contract Manufacturing",
    title: "Concrete Admixtures & Curing Solutions",
    intro: [
      "Our range of concrete admixtures and curing solutions is designed to improve concrete performance across all types of construction projects. By controlling workability, water demand, setting time, early-strength development and curing efficiency.",
    ],
    heroImage: "/assets/oem-admix-hero.png",
    sections: [
      {
        title: "Superplasticisers (PCE/SNF-Based)",
        description: [
          "Our PCE- and SNF-based superplasticisers are formulated to reduce the water-cement ratio while improving slump, workability and concrete placement.",
          "The range can be developed for ready-mix concrete, precast production, self-compacting concrete and high-strength applications. Formulations can be tailored around slump retention, early-strength development, dosage efficiency, cement compatibility, setting behaviour and surface finish.",
        ],
        image: "/assets/oem-admix-1.png",
      },
      {
        title: "Curing Compounds",
        description: [
          "Our membrane-forming curing compounds are applied to freshly placed concrete to reduce moisture loss during the critical hydration period. This supports more uniform curing, improved surface hardness and reduced risk of plastic-shrinkage cracking.",
          "Available in water-based and resin-based variants, they are ideal for large areas such as industrial floors, pavements, and roads where traditional water curing is difficult or impractical.",
        ],
        image: "/assets/oem-admix-2.png",
      },
      {
        title: "Quick Setting & Accelerating Agents",
        description: [
          "Our quick setting and accelerating agents are developed to shorten setting time and promote early-age strength development in concrete and mortar. This makes them suitable for precast production, rapid repair applications and cold-weather concreting where faster demoulding, earlier finishing or shorter construction cycles are required, while maintaining the long-term performance and durability of the concrete.",
          "Formulations can be adapted according to cement type, ambient conditions, target setting time and early-strength requirements.",
        ],
        image: "/assets/oem-admix-3.png",
      },
      {
        title: "Pump Primers",
        description: [
          "Our pump primers are formulated to condition concrete pipelines and hoses before pumping begins. The lubricating slurry reduces internal friction, improves pump start-up and helps minimise the risk of line blockages.",
          "They are suitable for ready-mix concrete, self-compacting concrete, high-performance mixes and long-distance pumping applications, helping improve placement efficiency while reducing concrete wastage.",
        ],
        image: "/assets/oem-admix-4.png",
      },
    ],
    quote: {
      eyebrow: "Ethios Advantage",
      headline: "Reliable Solutions for Every Mix",
      body: "Ethios helps you build a strong portfolio of concrete admixtures and curing solutions around your target application, performance requirements and product positioning. From formulation customisation and cement compatibility to scalable production, batch-level quality control, technical documentation and packaging, we help your brand deliver consistent concrete performance across projects and production environments.",
    },
  },
  "repair-rehabilitation-solutions": {
    badge: "Contract Manufacturing",
    title: "Repair & Rehabilitation Solutions",
    intro: [
      "From micro concretes and crack sealers to PU grouts and anti-corrosive coatings, our repair and rehabilitation systems are engineered to restore structural strength and extend the life of critical infrastructure. Manufactured to specification and ready to carry your brand.",
    ],
    heroImage: "/assets/oem-repair-hero.png",
    sections: [
      {
        title: "Micro Concrete & Crack Repair Products",
        description: [
          "Our shrinkage-compensated, free-flowing micro-concretes are developed for structural repairs where access is restricted or conventional vibration is difficult. They are suited to column jacketing, beam and slab repairs, encasement work, pile caps, machine foundations and the reinstatement of damaged reinforced-concrete elements.",
          "Preblended formulations require only controlled water addition and can be pumped or poured into confined sections. The range can be developed around flow characteristics, early-strength gain, compressive strength, shrinkage compensation, permeability and repair thickness.",
        ],
        image: "/assets/oem-repair-1.png",
      },
      {
        title: "Bonding Agents",
        description: [
          "Our bonding agents are available in SBR latex or epoxy base for creating a dependable interface between existing substrates and new repair materials.",
          "SBR-based systems can be formulated for cementitious bond coats, polymer-modified mortars, screeds, renders and repair applications. Epoxy bonding agents are designed for structural bonding between fresh and hardened concrete, repair mortars and other compatible cementitious substrates.",
          "Formulations can be adapted around adhesion strength, open time, substrate condition, application temperature and the required repair build-up.",
        ],
        image: "/assets/oem-repair-2.png",
      },
      {
        title: "PU & Epoxy Grout",
        description: [
          "Our injection and grouting range is developed for leak sealing, crack repair, void filling, structural bonding and anchoring applications.",
          "Epoxy injection resins are suited to structural crack bonding and the restoration of continuity within cracked concrete. Epoxy grouts can be developed separately for anchoring, base-plate grouting and high-load void filling. The chemistry and performance profile can be selected according to whether the requirement is waterproof sealing or structural load transfer.",
        ],
        image: "/assets/oem-repair-3.png",
      },
      {
        title: "Corrosion Protection Coatings",
        description: [
          "Our corrosion-protection range includes zinc-rich primers and epoxy-polyurethane topcoats, protect-rebars and concrete surfaces from carbonation and chloride attacks.",
          "Rebar-protection systems help reduce corrosion at repaired reinforcement and improve compatibility with the subsequent repair mortar. Anti-carbonation and chloride-resistant coatings protect exposed concrete against carbon-dioxide ingress, moisture, chlorides and aggressive atmospheric conditions.",
          "The range can be developed for bridges, marine structures, industrial facilities, car parks and infrastructure exposed to demanding service environments.",
        ],
        image: "/assets/oem-repair-4.png",
      },
    ],
    quote: {
      eyebrow: "Ethios Advantage",
      headline: "Engineered to Restore. Manufactured to Perform.",
      body: "Ethios develops and manufactures repair and rehabilitation systems around the required repair depth, substrate condition, exposure environment and performance criteria. From formulation customisation and application-specific grades to scalable production, batch consistency, packaging and technical documentation, we help your brand build a credible repair portfolio for contractors, consultants, infrastructure projects and retrofit markets.",
    },
  },
  "industrial-flooring-systems": {
    badge: "Contract Manufacturing",
    title: "Industrial Flooring Systems",
    intro: [
      "Our industrial flooring solutions are engineered for durability, hygiene, and aesthetics. Featuring heavy-duty epoxy coatings, self-leveling systems, and abrasion-resistant floor hardeners, these products deliver seamless performance in warehouses, factories, pharma units, and high-traffic commercial environments.",
    ],
    heroImage: "/assets/oem-floor-hero.png",
    sections: [
      {
        title: "Floor Hardeners (Non-Metallic & Metallic)",
        description: [
          "Our dry-shake floor hardeners are factory-blended cementitious systems designed to improve the abrasion resistance, impact resistance and surface density of freshly placed concrete floors. Applied and power-trowelled into the concrete while it is still plastic, they create a dense, monolithic wearing surface with reduced dusting and improved resistance to mechanical traffic.",
          "The range can be developed using natural mineral, synthetic non-metallic or metallic aggregates based on the required duty class, service environment, appearance and cost position.",
        ],
        image: "/assets/oem-floor-1.png",
      },
      {
        title: "Self-Leveling Epoxy Systems",
        description: [
          "Our self-levelling epoxy systems are developed to create smooth, seamless and hard-wearing resin floors for industrial and controlled environments. Ideal for clean rooms, pharmaceutical plants, and food processing areas, they offer superior hygiene, ease of cleaning, and aesthetic appeal.",
          "Depending on the system brief, formulations can be adapted for light, medium or heavy-duty traffic, with controlled flow, levelling, film thickness and surface finish.",
        ],
        image: "/assets/oem-floor-2.png",
      },
      {
        title: "Epoxy Primers & Coatings",
        description: [
          "Our epoxy primers are formulated to penetrate and seal prepared concrete substrates, improve intercoat adhesion and establish a dependable base for resin flooring systems. These systems provide excellent adhesion to concrete and protection against chemicals, moisture, and wear.",
          "Used as primers or topcoats, they ensure a durable flooring system that withstands heavy traffic and aggressive cleaning processes. They can be adapted for different substrate porosities, application temperatures, open times and subsequent system build-ups.",
        ],
        image: "/assets/oem-floor-3.png",
      },
    ],
    quote: {
      eyebrow: "Ethios Advantage",
      headline: "Formulated for Heavy-Duty Performance",
      body: "Ethios develops and manufactures industrial flooring solutions engineered for durability and visual impact. From formulation customisation and system-specific grades to scalable production, batch-level quality control, colour matching and packaging, we help your brand deliver consistent, application-ready flooring solutions.",
    },
  },
};

export default OEM_SERVICES;
