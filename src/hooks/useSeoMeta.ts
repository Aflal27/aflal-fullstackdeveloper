import { useEffect } from 'react';
import { seoMeta, profile } from '../data/site';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Applies page metadata, Open Graph / Twitter tags and Person
 * structured data for the single-page portfolio.
 */
export function useSeoMeta() {
  useEffect(() => {
    document.title = seoMeta.title;
    document.documentElement.lang = 'en';

    upsertMeta('name', 'description', seoMeta.description);
    upsertMeta('name', 'robots', 'index, follow');
    upsertMeta('name', 'author', profile.name);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:title', seoMeta.title);
    upsertMeta('property', 'og:description', seoMeta.description);
    upsertMeta('property', 'og:image', seoMeta.image);
    upsertMeta('property', 'og:url', seoMeta.canonical);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seoMeta.title);
    upsertMeta('name', 'twitter:description', seoMeta.description);
    upsertMeta('name', 'twitter:image', seoMeta.image);
    upsertLink('canonical', seoMeta.canonical);

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.role,
      description: seoMeta.description,
      image: seoMeta.image,
      email: profile.email,
      telephone: profile.phone,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'LK',
        addressRegion: profile.location,
      },
      knowsAbout: [
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'Full Stack Development',
        'MySQL',
        'Docker',
        'CI/CD',
        'React Native',
        'REST APIs',
      ],
      sameAs: [profile.social.github, profile.social.linkedin],
    };

    const scriptId = 'portfolio-structured-data';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);
}
