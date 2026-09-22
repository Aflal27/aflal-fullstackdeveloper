import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light'
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Reveal>
        <p
          className={`text-label font-semibold uppercase ${isDark ? 'text-violet-200' : 'text-violet-600'}`}>
          
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className={`mt-4 font-display text-display-lg font-extrabold ${isDark ? 'text-white' : 'text-ink'}`}>
          
          {title}
        </h2>
      </Reveal>
      {description ?
      <Reveal delay={0.12}>
          <p className={`mt-5 text-lg leading-relaxed ${isDark ? 'text-violet-100/80' : 'text-ink-mute'}`}>
            {description}
          </p>
        </Reveal> :
      null}
    </div>);

}