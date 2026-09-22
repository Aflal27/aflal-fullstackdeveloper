export const profile = {
  firstName: 'Mohamed Aflal',
  role: 'Digital Marketing Executive',
  location: 'Sri Lanka',
  company: 'Empire Holdings Pvt Ltd',
  experience: '1+ year in professional digital marketing',
  disciplines: ['Paid Ads', 'Content', 'SEO', 'Analytics', 'Web']
};

/**
 * Replace these two URLs with Aflal's real photos.
 * They are the only image sources in the project.
 */
export const photos = {
  hero: "/aflal.png",
  about: "/aflal.webp"
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
{ label: 'Home', href: '#home' },
{ label: 'Work', href: '#work' },
{ label: 'Campaigns', href: '#campaigns' },
{ label: 'Skills', href: '#skills' },
{ label: 'Experience', href: '#experience' },
{ label: 'About', href: '#about' },
{ label: 'Contact', href: '#contact' }];


export const seoMeta = {
  title: 'Aflal - Digital Marketing Executive | Paid Ads, SEO & Social Media',
  description:
  'Digital Marketing Executive specialising in paid advertising, social media, SEO, content creation and web technology.',
  canonical: 'https://example.com/',
  image: photos.hero
};