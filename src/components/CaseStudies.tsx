import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GlobeIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { caseStudies } from '../data/brands';
import { disclaimer } from '../data/marketing';
import { accent } from '../utils/accents';

const EASE = [0.23, 1, 0.32, 1] as const;

export function CaseStudies() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="cases-heading" className="overflow-hidden bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <div id="cases-heading">
          <SectionHeading
            eyebrow="Case studies"
            title="Three brands, three objectives."
            description="What was managed, which channels were used, and what the campaigns were built to achieve." />
          
        </div>

        <div className="mt-14 space-y-6">
          {caseStudies.map((study, i) => {
            const tone = accent(study.accent);
            return (
              <Reveal key={study.id} delay={i * 0.07} as="article">
                <motion.div
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="grid gap-8 overflow-hidden rounded-4xl border border-line bg-white p-5 shadow-card sm:p-7 md:grid-cols-[1.2fr_1fr] md:p-10">
                  
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className={`font-display text-4xl font-extrabold ${tone.text} opacity-40`} aria-hidden="true">
                        {study.index}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                          {study.brand}
                        </h3>
                        <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-mute">
                          {study.category}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">{study.summary}</p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {study.services.map((service) =>
                      <li
                        key={service}
                        className={`rounded-full ${tone.bg} px-3.5 py-1.5 text-xs font-semibold ${tone.text}`}>
                        
                          {service}
                        </li>
                      )}
                    </ul>

                    {study.website ?
                    <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-electric-600">
                        <GlobeIcon className="h-4 w-4" aria-hidden="true" />
                        {study.website}
                      </p> :
                    null}
                  </div>

                  <div className="overflow-hidden rounded-3xl border border-line bg-canvas p-4 sm:p-6">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink-faint">
                      Reported during work period
                    </p>
                    <dl className="mt-5 space-y-5">
                      {study.results.map((result) =>
                      <div key={result.label} className="border-b border-line pb-4 last:border-0 last:pb-0">
                          <dd className="font-display text-xl font-extrabold text-ink">{result.value}</dd>
                          <dt className="mt-1 text-sm text-ink-mute">{result.label}</dt>
                        </div>
                      )}
                    </dl>
                  </div>
                </motion.div>
              </Reveal>);

          })}
        </div>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-faint">
            {disclaimer} Figures are not presented as guaranteed or permanent performance.
          </p>
        </Reveal>
      </div>
    </section>);

}