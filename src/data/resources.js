/* Content for the Resources hub and its sub-pages (Figma node 2:4814 and
   siblings). Card grids on the sub-pages are marked "Coming Soon" in the
   source design — the site keeps them non-interactive rather than
   fabricating destinations that don't exist yet. */

export const TECH_AREAS = [
  { title: 'Waterproofing', image: '/assets/resources-tile-waterproofing.png' },
  { title: 'Flooring', image: '/assets/resources-tile-flooring.png' },
  { title: 'Repair', image: '/assets/resources-tile-repair.png' },
  { title: 'Surface Protection', image: '/assets/resources-tile-surface-protection.png' },
  { title: 'Sealants', image: '/assets/resources-tile-sealants.png' },
  { title: 'Tile & Stone', image: '/assets/resources-tile-tile-stone.png' },
  { title: 'Insulation', image: '/assets/resources-tile-insulation.png' },
  { title: 'Concrete', image: '/assets/resources-tile-concrete.png' },
]

export const SUPPORT_WAYS = [
  {
    code: 'V/01',
    title: 'Request Technical Support',
    description: 'Submit a detailed technical enquiry and receive expert guidance within 24-48 hours.',
    to: '/resources/technical-support',
  },
  {
    code: 'V/02',
    title: 'Documents & Data Sheets',
    description: 'Access technical data sheets, method statements, and application guides.',
    to: '/resources/documents-data-sheets',
  },
  {
    code: 'V/03',
    title: 'Application Guidance',
    description: 'Best practices, troubleshooting guides, and application methodology.',
    to: '/resources/application-guidance',
  },
]

export const PROCESS_STEPS = [
  {
    code: 'ST/01',
    title: 'Submit Enquiry',
    description: 'Fill out the support form, call, or email us with your technical question.',
  },
  {
    code: 'ST/02',
    title: 'Technical Review',
    description: 'Our engineering team assesses your requirements and project context.',
  },
  {
    code: 'ST/03',
    title: 'Receive Guidance',
    description: 'Get detailed recommendations, documents, or an on-site visit if needed.',
  },
]

export const FEATURED_ARTICLES = [
  {
    title: 'The Future of Waterproofing in Indian Construction',
    description: 'Exploring emerging technologies and best practices in waterproofing for the Indian market.',
    image: '/assets/resources-blog-waterproofing.png',
  },
  {
    title: 'Complete Guide to Industrial Flooring Selection',
    description: 'How to choose the right flooring system based on traffic, chemicals, temperature, and aesthetics.',
    image: '/assets/resources-blog-flooring.png',
  },
  {
    title: 'Technical Workshop: Crack Repair Methods',
    description: 'Join our upcoming workshop on advanced crack injection and structural repair techniques.',
    image: '/assets/resources-blog-crack-repair.png',
  },
]

export const ENQUIRY_CATEGORIES = [
  'Project Enquiry',
  'Technical Support',
  'OEM Partnership',
  'Solution Guidance',
  'Document Request',
  'General',
  'Careers',
]

/* The two "coming soon" card-grid sub-pages (Documents & Data Sheets,
   Application Guidance) share one template — same hero + card-grid +
   contact-form layout, different card content. */
export const RESOURCE_CATEGORIES = {
  'documents-data-sheets': {
    title: 'Documents & Data Sheets',
    intro: 'From product selection to application methodology, our technical team supports you at every stage.',
    heroImage: '/assets/resources-doc-hero.png',
    eyebrow: 'HOW CAN WE HELP?',
    sectionTitle: 'Three Ways to Get Technical Support',
    sectionDescription: 'Find the information you need, organized by type.',
    defaultCategory: 'Document Request',
    cards: [
      {
        code: 'V/01',
        title: 'Technical Data Sheets',
        description: 'Product specifications, performance data, and test results.',
      },
      {
        code: 'V/02',
        title: 'Method Statements',
        description: 'Step-by-step application procedures and quality standards.',
      },
      {
        code: 'V/03',
        title: 'Material Safety Data Sheets',
        description: 'Safety information, handling guidelines, and regulatory compliance.',
      },
      {
        code: 'V/04',
        title: 'Application Guides',
        description: 'Detailed application instructions with tips and best practices.',
      },
      {
        code: 'V/05',
        title: 'Selection Guides',
        description: 'Product selection matrices and decision-support tools.',
      },
      {
        code: 'V/06',
        title: 'Certificates & Approvals',
        description: 'Quality certifications, test reports, and compliance documents.',
      },
    ],
  },
  'application-guidance': {
    title: 'Application Guidance',
    intro: 'Best practices for applying Ethios construction solutions.',
    heroImage: '/assets/resources-guidance-hero.png',
    eyebrow: 'GUIDANCE TOPICS',
    sectionTitle: 'Application Best Practices',
    sectionDescription: 'Comprehensive guidance covering every stage of the application process.',
    defaultCategory: 'Technical Support',
    cards: [
      {
        code: 'V/01',
        title: 'Surface Preparation',
        description:
          'Proper surface preparation is the foundation of every successful application. Inadequate preparation is the leading cause of product failure in the field.',
      },
      {
        code: 'V/02',
        title: 'Mixing and Application',
        description:
          'Correct mixing and application techniques are critical to achieving the specified performance from any construction chemical product.',
      },
      {
        code: 'V/03',
        title: 'Curing and Protection',
        description:
          'Proper curing and post-application protection are essential to achieve full product performance and longevity.',
      },
      {
        code: 'V/04',
        title: 'Quality Control',
        description:
          'Systematic quality control ensures that applications meet specifications and will perform as intended over their service life.',
      },
      {
        code: 'V/05',
        title: 'Troubleshooting',
        description:
          'Even with proper preparation and application, issues can arise. Here are common problems, their likely causes, and recommended solutions.',
      },
      {
        code: 'V/06',
        title: 'Safety Guidelines',
        description:
          'Working with construction chemicals requires adherence to safety protocols to protect workers and the environment.',
      },
    ],
  },
}
