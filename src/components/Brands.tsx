import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { brands } from '../data/brands';
import { accent } from '../utils/accents';

const EASE = [0.23, 1, 0.32, 1] as const;

export function Brands() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="mx-auto max-w-shell scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Brands"
        title="Brands I've worked with"
        description="Three group brands, each with a different objective - retail sales, e-commerce growth and automotive lead generation." />
      

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {brands.map((brand, i) => {
          const tone = accent(brand.accent);
          return (
            <Reveal key={brand.id} delay={i * 0.08} as="article" className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -6, rotate: -0.25 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="group flex h-full flex-col overflow-hidden rounded-4xl border border-line bg-white p-5 shadow-card transition-shadow duration-200 hover:shadow-lift sm:p-7">
                
                <div className={`grain relative overflow-hidden rounded-3xl ${tone.bg} px-6 py-10`}>
                  <span
                    className={`absolute -right-6 -top-8 font-display text-[7rem] font-extrabold leading-none ${tone.text} opacity-[0.12]`}
                    aria-hidden="true">
                    
                    0{i + 1}
                  </span>
                  <p className={`relative font-display text-xl font-extrabold uppercase tracking-tight ${tone.text}`}>
                    {brand.name}
                  </p>
                  <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-mute">
                    {brand.category}
                  </p>
                </div>

                <p className="mt-6 text-[0.95rem] leading-relaxed text-ink-soft">{brand.note}</p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {brand.activities.map((activity) =>
                  <li
                    key={activity}
                    className="rounded-full border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-ink-soft transition-colors duration-200 group-hover:border-ink/15">
                    
                      {activity}
                    </li>
                  )}
                </ul>
              </motion.div>
            </Reveal>);

        })}
      </div>
    </section>);

}