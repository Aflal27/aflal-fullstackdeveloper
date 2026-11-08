export interface Role {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  kind: 'primary' | 'secondary';
  positioning: string;
  responsibilities: string[];
  tags: string[];
}

export const roles: Role[] = [
  {
    id: 'empire-holdings',
    title: 'Web Design & Digital Marketing Executive',
    company: 'Empire Holdings Pvt Ltd',
    location: 'Sri Lanka',
    period: 'Nov 2025 - Oct 2026',
    kind: 'primary',
    positioning:
      'Develop and maintain websites for 3 group companies while running paid campaigns and managing digital presence end to end.',
    responsibilities: [
      'Develop, maintain and optimise websites and e-commerce platforms for 3 group companies (Sofa Factory Outlet, Decomo, Empire Cars)',
      'Implement on-page and technical SEO to improve search visibility and site performance',
      'Upload and manage e-commerce products with SEO-optimised content',
      'Run Meta, TikTok and Google Ads lead-generation campaigns - driving 8–15 in-store sales per month for a furniture retail brand',
      'Manage CRM records to track leads, calls and customer follow-ups',
      'Manage social media (Facebook, Instagram, TikTok, Google Business Profile, YouTube) with AI video, Canva and CapCut',
    ],
    tags: ['Next.js', 'Meta Ads', 'TikTok Ads', 'Google Ads', 'SEO', 'CRM', 'Web Management', 'E-commerce'],
  },
  {
    id: 'vynoq',
    title: 'Full Stack Developer & Digital Marketing Executive',
    company: 'Vynoq Software Solutions',
    location: 'Sri Lanka',
    period: 'May 2024 - Aug 2025',
    kind: 'secondary',
    positioning:
      'End-to-end design, development and deployment of SEO-friendly websites and web applications for clients.',
    responsibilities: [
      'Designed, built and deployed SEO-friendly websites and web applications using Next.js, TypeScript, Node.js and MySQL',
      'Built a mobile-friendly POS system with sales tracking, inventory management and customer data handling',
      'Managed VPS hosting and deployments for 4 production applications using Docker and CI/CD pipelines',
      'Ran Meta Ads lead-generation campaigns to attract business clients and onboard new web projects',
      'Implemented on-page SEO and managed client social media content and promotional campaigns',
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'MySQL', 'Docker', 'CI/CD', 'VPS', 'Meta Ads', 'SEO'],
  },
];

export interface TechCategory {
  category: string;
  accent: string;
  accentBg: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    category: 'Frontend',
    accent: 'text-violet-600',
    accentBg: 'bg-violet-50',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'shadcn/ui'],
  },
  {
    category: 'Mobile & Desktop',
    accent: 'text-electric-600',
    accentBg: 'bg-electric-50',
    items: ['React Native (Expo)', 'Capacitor', 'Tauri'],
  },
  {
    category: 'Backend',
    accent: 'text-coral-600',
    accentBg: 'bg-coral-50',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Prisma', 'PHP'],
  },
  {
    category: 'Databases',
    accent: 'text-amber-600',
    accentBg: 'bg-amber-50',
    items: ['MySQL', 'MongoDB', 'Supabase', 'Firebase'],
  },
  {
    category: 'DevOps & Hosting',
    accent: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    items: ['VPS Hosting', 'Docker', 'CI/CD', 'Git & GitHub', 'Vercel', 'AWS'],
  },
  {
    category: 'SEO & E-commerce',
    accent: 'text-pink-600',
    accentBg: 'bg-pink-50',
    items: ['On-page SEO', 'Technical SEO', 'Product SEO', 'E-commerce Management', 'Google Search Console', 'GA4'],
  },
  {
    category: 'Digital Marketing',
    accent: 'text-orange-600',
    accentBg: 'bg-orange-50',
    items: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Lead Generation', 'CRM Management', 'Social Media Management'],
  },
  {
    category: 'Other',
    accent: 'text-indigo-600',
    accentBg: 'bg-indigo-50',
    items: ['AI Automation', 'OpenAI API', 'Figma', 'Agile'],
  },
];

export interface Project {
  id: string;
  name: string;
  url?: string;
  githubUrl?: string;
  description: string;
  highlights: string[];
  tags: string[];
  accent: string;
  accentBg: string;
}

export const projects: Project[] = [
  {
    id: 'vynoq',
    name: 'Vynoq',
    url: 'https://vynoq.com',
    description:
      'Company website designed, built and launched with on-page SEO and VPS hosting management.',
    highlights: [
      'Designed and built from scratch end to end',
      'On-page SEO implementation',
      'VPS hosting setup and management',
    ],
    tags: ['Next.js', 'TypeScript', 'SEO', 'VPS'],
    accent: 'text-violet-600',
    accentBg: 'bg-violet-50',
  },
  {
    id: 'cherryvelle',
    name: 'Cherryvelle',
    url: 'https://cherryvelle.com',
    description:
      'Skincare e-commerce platform with SEO-optimised product pages and islandwide delivery ordering.',
    highlights: [
      'SEO-optimised product pages with structured data',
      'Islandwide delivery ordering flow',
      'Production deployment on VPS',
    ],
    tags: ['Next.js', 'TypeScript', 'SEO', 'E-commerce'],
    accent: 'text-pink-600',
    accentBg: 'bg-pink-50',
  },
  {
    id: 'decomo',
    name: 'Decomo',
    url: 'https://decomo.lk',
    description:
      'E-commerce website for a custom sofa and furniture brand with product catalogue, WhatsApp enquiries and consultation booking.',
    highlights: [
      'Product catalogue with categories and cart',
      'WhatsApp enquiries and design consultation booking',
      'SEO-optimised product pages',
    ],
    tags: ['Next.js', 'Node.js', 'MySQL', 'E-commerce'],
    accent: 'text-amber-600',
    accentBg: 'bg-amber-50',
  },
  {
    id: 'jiffry-booking',
    name: 'Jiffry Booking',
    url: 'https://admin.jiffrybooking.com',
    description:
      'Bus booking and fleet management system with an admin dashboard, deployed on VPS with Docker and CI/CD.',
    highlights: [
      'Bus booking and seat selection flow',
      'Fleet and route management admin dashboard',
      'VPS deployment with Docker and CI/CD pipelines',
    ],
    tags: ['Next.js', 'Node.js', 'MySQL', 'Docker', 'CI/CD'],
    accent: 'text-violet-600',
    accentBg: 'bg-violet-50',
  },
];

export interface OpenSourceProject {
  id: string;
  name: string;
  url?: string;
  githubUrl: string;
  description: string;
  tags: string[];
  accent: string;
  accentBg: string;
  language: string;
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: 'aflal-dm',
    name: 'Aflal DM',
    url: 'https://aflal-dm.vercel.app',
    githubUrl: 'https://github.com/Aflal27/aflal-dm',
    description:
      'Digital marketing portfolio site - built with TypeScript and deployed on Vercel.',
    tags: ['TypeScript', 'React', 'Vercel'],
    accent: 'text-violet-600',
    accentBg: 'bg-violet-50',
    language: 'TypeScript',
  },
  {
    id: 'lk-ecom',
    name: 'LK E-Commerce',
    url: 'https://lk-ecom.vercel.app',
    githubUrl: 'https://github.com/Aflal27/lk-ecom',
    description:
      'Full-featured e-commerce app built with Next.js and Supabase - auth, cart, product listings, and order management.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'E-commerce'],
    accent: 'text-electric-600',
    accentBg: 'bg-electric-50',
    language: 'TypeScript',
  },
  {
    id: 'new-com-next',
    name: 'New Commerce (Next.js)',
    url: 'https://new-com-next.vercel.app',
    githubUrl: 'https://github.com/Aflal27/new-com-next',
    description:
      'Scalable e-commerce storefront built with Next.js and TypeScript, featuring product pages, cart, and checkout.',
    tags: ['Next.js', 'TypeScript', 'E-commerce'],
    accent: 'text-amber-600',
    accentBg: 'bg-amber-50',
    language: 'TypeScript',
  },
  {
    id: 'inzeedo-ecom',
    name: 'Inzeedo E-Commerce',
    url: 'https://inzeedo-ecom.vercel.app',
    githubUrl: 'https://github.com/Aflal27/e-com',
    description:
      'Technical assessment project - production-ready e-commerce UI with TypeScript, responsive design, and Vercel deployment.',
    tags: ['TypeScript', 'React', 'E-commerce', 'Vercel'],
    accent: 'text-coral-600',
    accentBg: 'bg-coral-50',
    language: 'TypeScript',
  },
  {
    id: 'chat-expo-supabase',
    name: 'Real-Time Chat App',
    url: undefined,
    githubUrl: 'https://github.com/Aflal27/chat-expo-supabase',
    description:
      'Mobile real-time chat application built with Expo (React Native) and Supabase - live messaging, auth, and push notifications.',
    tags: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
    accent: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    language: 'TypeScript',
  },
  {
    id: 'food-ordering-expo',
    name: 'Food Ordering App',
    url: undefined,
    githubUrl: 'https://github.com/Aflal27/foodOrdering-expoApp',
    description:
      'Cross-platform food ordering mobile app built with Expo - menu browsing, cart, order placement and admin panel.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Mobile'],
    accent: 'text-pink-600',
    accentBg: 'bg-pink-50',
    language: 'TypeScript',
  },
  {
    id: 'chat-app-mern',
    name: 'MERN Chat App',
    url: undefined,
    githubUrl: 'https://github.com/Aflal27/chat_App',
    description:
      'Real-time chat application using the full MERN stack with Socket.io for live bidirectional messaging.',
    tags: ['MERN', 'Socket.io', 'JavaScript', 'Real-Time'],
    accent: 'text-violet-600',
    accentBg: 'bg-violet-50',
    language: 'JavaScript',
  },
  {
    id: 'soluz-dev',
    name: 'SoluzDev',
    url: 'https://soluz-dev.vercel.app',
    githubUrl: 'https://github.com/Aflal27/SoluzDev',
    description:
      'Agency / SaaS landing page built with Next.js - clean design, fast performance, and SEO-ready structure.',
    tags: ['Next.js', 'JavaScript', 'Vercel'],
    accent: 'text-amber-600',
    accentBg: 'bg-amber-50',
    language: 'JavaScript',
  },
  {
    id: 'nextjs-blog',
    name: 'Next.js Blog App',
    url: 'https://nextjs-blog-app-coral-pi.vercel.app',
    githubUrl: 'https://github.com/Aflal27/nextjs-blog-app',
    description:
      'Blog platform built with Next.js - dynamic routing, markdown content, and a clean reading experience.',
    tags: ['Next.js', 'JavaScript', 'Blog'],
    accent: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    language: 'JavaScript',
  },
];

export interface Education {
  qualification: string;
  institution: string;
  accreditation?: string;
  period: string;
}

export const education: Education[] = [
  {
    qualification: 'Higher National Diploma (HND) in Software Engineering',
    institution: 'Esoft Metro Campus, Batticaloa, Sri Lanka',
    accreditation: 'Pearson BTEC (UK)',
    period: 'Oct 2023 – Sept 2025',
  },
  {
    qualification: 'Diploma in English',
    institution: 'Esoft Metro Campus, Batticaloa, Sri Lanka',
    accreditation: 'Pearson BTEC (UK)',
    period: '2024',
  },
  {
    qualification: 'Advanced Level (A/L) in Technology',
    institution: 'Alighar Central College, Sri Lanka',
    period: '2021 – 2023',
  },
  {
    qualification: 'Diploma in IT',
    institution: 'Esoft Metro Campus, Batticaloa, Sri Lanka',
    accreditation: 'Pearson BTEC (UK)',
    period: '2019',
  },
];
