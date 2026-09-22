export interface Brand {
  id: string;
  name: string;
  category: string;
  activities: string[];
  accent: 'violet' | 'electric' | 'coral';
  note: string;
}

export const brands: Brand[] = [
{
  id: 'sofa-factory-outlet',
  name: 'Sofa Factory Outlet',
  category: 'Furniture · Retail · E-commerce',
  activities: ['Paid Ads', 'Social Media', 'SEO', 'Website Management', 'Content'],
  accent: 'violet',
  note: 'Primary brand - full funnel ownership from creative to campaign reporting.'
},
{
  id: 'decomo',
  name: 'Decomo',
  category: 'Furniture · E-commerce',
  activities: ['Social Media', 'Content', 'Website', 'SEO'],
  accent: 'electric',
  note: 'Content pipeline, product uploads and on-page SEO for the online store.'
},
{
  id: 'empire-cars',
  name: 'Empire Cars',
  category: 'Automotive · Lead Generation',
  activities: ['Lead Generation', 'Meta Ads', 'Social Media', 'Content'],
  accent: 'coral',
  note: 'Campaigns built to drive direct phone calls and messages from buyers.'
}];


export interface CaseStudy {
  id: string;
  index: string;
  brand: string;
  category: string;
  services: string[];
  summary: string;
  results: {label: string;value: string;}[];
  website?: string;
  accent: 'violet' | 'electric' | 'coral';
}

export const caseStudies: CaseStudy[] = [
{
  id: 'cs-sofa',
  index: '01',
  brand: 'Sofa Factory Outlet',
  category: 'Furniture · Retail · E-commerce',
  services: ['Paid Advertising', 'Social Media', 'Content Creation', 'SEO', 'Website Management'],
  summary:
  'Owned the full digital funnel: weekly content calendars, poster and AI video creative, Meta and TikTok sales campaigns, product uploads and on-page SEO.',
  results: [
  { label: 'Monthly sales', value: 'LKR 2M–5M' },
  { label: 'Units per month', value: '8–15' },
  { label: 'Reach per engagement post', value: '5.5K–12.5K' }],

  accent: 'violet'
},
{
  id: 'cs-decomo',
  index: '02',
  brand: 'Decomo',
  category: 'Furniture · E-commerce',
  services: ['Social Media', 'Content', 'Website Management', 'Product SEO'],
  summary:
  'Built and maintained the organic content engine alongside store and product page upkeep, keeping listings structured for search discoverability.',
  results: [
  { label: 'Focus', value: 'Organic growth' },
  { label: 'Channel mix', value: 'Social + Web' }],

  website: 'decomo.lk',
  accent: 'electric'
},
{
  id: 'cs-empire',
  index: '03',
  brand: 'Empire Cars',
  category: 'Automotive · Lead Generation',
  services: ['Meta Ads', 'Lead Generation', 'Social Media', 'Content'],
  summary:
  'Targeted Meta lead-generation campaigns designed to drive direct phone calls and messages from car buyers. Creative and audience iterations based on campaign response, consistently generating 150–200 inbound calls and 50–100 messages per month.',
  results: [
  { label: 'Inbound calls / month', value: '150–200' },
  { label: 'Messages / month', value: '50–100' },
  { label: 'Primary platform', value: 'Meta Ads' }],

  accent: 'coral'
}];


export interface WebProject {
  name: string;
  category: string;
  tech: string;
  description: string;
  website: string;
}

export const webProject: WebProject = {
  name: 'Cherryvelle',
  category: 'Skincare E-commerce',
  tech: 'Next.js',
  description: 'SEO-optimised skincare e-commerce website with product-focused pages.',
  website: 'cherryvelle.com'
};

export interface ManagedWebProject {
  name: string;
  website: string;
  description: string;
}

export interface WebManagement {
  label: string;
  context: string;
  services: string[];
  projects: ManagedWebProject[];
}

export const webManagement: WebManagement = {
  label: 'Empire Holdings',
  context: 'End-to-end social media, paid ads and website management across 3 brands.',
  services: ['Social Media', 'Paid Ads', 'On-page SEO', 'Product Uploads', 'Website Management'],
  projects: [
    {
      name: 'Sofa Factory Outlet',
      website: 'sofafactoryoutlet.lk',
      description: 'Full funnel — paid ads, content, SEO and product management.'
    },
    {
      name: 'Decomo',
      website: 'decomo.lk',
      description: 'Social media content, paid ads and on-page SEO for furniture e-commerce.'
    },
    {
      name: 'Empire Cars',
      website: '',
      description: 'Meta lead-gen campaigns driving 150–200 calls and 50–100 messages / month.'
    }
  ]
};