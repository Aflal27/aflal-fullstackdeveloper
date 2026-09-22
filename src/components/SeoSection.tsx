import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { seoGroups, seoFlow, seoExtras } from '../data/marketing';

const EASE = [0.23, 1, 0.32, 1] as const;

export function SeoSection() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="seo-heading" className="overflow-hidden bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <div id="seo-heading">
          <SectionHeading
            eyebrow="SEO"
            title="Visibility beyond paid media."
            description="Paid campaigns bring immediate attention. SEO builds discoverability over time." />
          
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {seoGroups.map((group, i) =>
          <Reveal key={group.title} delay={i * 0.07} as="article" className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-4xl border border-line bg-white p-5 shadow-card sm:p-7">
                <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-ink">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-3 border-t border-line pt-5">
                  {group.items.map((item) =>
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-500" aria-hidden="true" />
                      {item}
                    </li>
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-6 overflow-hidden rounded-4xl border border-line bg-white p-5 shadow-card sm:p-7 md:p-9">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink-faint">
              How organic discovery happens
            </p>
            <ol className="mt-6 flex flex-col gap-3 md:flex-row md:items-center">
              {seoFlow.map((step, i) =>
              <React.Fragment key={step}>
                  <motion.li
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-12% 0px' }}
                  transition={{ duration: 0.35, delay: i * 0.08, ease: EASE }}
                  className={`flex-1 rounded-2xl border px-4 py-4 text-sm font-semibold ${
                  i === seoFlow.length - 1 ?
                  'border-electric-100 bg-electric-50 text-electric-600' :
                  'border-line bg-canvas text-ink-soft'}`
                  }>
                  
                    {step}
                  </motion.li>
                  {i < seoFlow.length - 1 ?
                <ArrowRightIcon
                  className="mx-auto h-4 w-4 shrink-0 rotate-90 text-ink-faint md:rotate-0"
                  aria-hidden="true" /> :

                null}
                </React.Fragment>
              )}
            </ol>

            <ul className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
              {seoExtras.map((extra) =>
              <li
                key={extra}
                className="rounded-full border border-line bg-canvas px-4 py-2 text-xs font-medium text-ink-soft">
                
                  {extra}
                </li>
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>);

}