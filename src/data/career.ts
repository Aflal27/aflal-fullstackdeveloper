export interface Role {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  kind: 'marketing' | 'technical';
  positioning: string;
  responsibilities: string[];
  tags: string[];
}

export const roles: Role[] = [
{
  id: 'empire-holdings',
  title: 'Digital Marketing Executive',
  company: 'Empire Holdings Pvt Ltd',
  location: 'Sri Lanka',
  period: 'Feb 2025 – Present',
  kind: 'marketing',
  positioning: 'Current role - end-to-end ownership of digital marketing for three group brands.',
  responsibilities: [
  'Fully manage social media across Facebook, Instagram, TikTok, Google Business Profile and YouTube',
  'Manage digital presence for Sofa Factory Outlet, Decomo and Empire Cars',
  'Plan weekly content calendars',
  'Decide poster and AI video requirements',
  'Create content using AI video generation, Canva and CapCut',
  'Run Meta and TikTok sales and lead-generation campaigns',
  'Analyse target audiences',
  'Drive approximately LKR 1.5M–3M monthly sales for Sofa Factory Outlet during the relevant period',
  'Manage engagement and brand-awareness campaigns',
  'Generate 150–200 inbound calls and 50–100 messages per ad campaign for Empire Cars through targeted Meta lead-generation campaigns',
  'Upload products',
  'Manage on-page product SEO'],

  tags: ['Meta Ads', 'TikTok Ads', 'Content', 'SEO', 'Reporting']
},
{
  id: 'vynoq',
  title: 'Full Stack Developer - Remote',
  company: 'Vynoq Software Solutions',
  location: 'Sri Lanka',
  period: 'Feb 2024 – Nov 2025',
  kind: 'technical',
  positioning: 'The technical foundation behind the marketing skillset.',
  responsibilities: [
  'Built SEO-friendly web applications',
  'Next.js, TypeScript and Node.js development',
  'MySQL database design',
  'VPS hosting and Docker deployments',
  'CI/CD pipelines',
  '4 production applications delivered'],

  tags: ['Next.js', 'TypeScript', 'Node.js', 'Docker', 'CI/CD']
}];


export interface Education {
  qualification: string;
  institution: string;
  accreditation?: string;
  period: string;
}

export const education: Education[] = [
{
  qualification: 'Higher National Diploma in Software Engineering',
  institution: 'ESOFT Metro Campus',
  accreditation: 'Pearson Assured',
  period: '2023 – 2025'
},
{
  qualification: 'Advanced Level (A/L) in Technology',
  institution: 'Alighar Central College',
  period: '2021 – 2023'
},
{
  qualification: 'Diploma in IT',
  institution: 'ESOFT Metro Campus',
  accreditation: 'Pearson Assured',
  period: '2019'
}];