export const profile = {
  name: 'Abdul Raheem Mohamed Aflal',
  firstName: 'Aflal',
  role: 'Software Engineer',
  tagline: 'Next.js · React · TypeScript · Node.js',
  location: 'Qatar, Doha',
  phone: '+974 7725 3166',
  email: 'mohamedaflal6719@gmail.com',
  experience: '2+ years of professional experience',
  disciplines: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL', 'Docker'],
  social: {
    github: 'https://github.com/Aflal27',
    linkedin: 'https://www.linkedin.com/in/mohamed-aflal-b84895288/',
    portfolio: '#home',
  },
};

/**
 * Replace these with real photos.
 */
export const photos = {
  hero: '/aflal.png',
  about: '/aflal.webp',
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const seoMeta = {
  title: 'Aflal - Software Engineer | Next.js, React, TypeScript, Node.js',
  description:
    'Full Stack Developer with 2+ years of experience building production web and mobile applications using Next.js, React, TypeScript, Node.js and MySQL.',
  canonical: 'https://example.com/',
  image: photos.hero,
};
