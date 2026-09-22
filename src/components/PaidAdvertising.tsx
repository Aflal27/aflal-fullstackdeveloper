import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TargetIcon, MegaphoneIcon, PhoneCallIcon, LayersIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { adPlatforms } from '../data/marketing';
import { accent } from '../utils/accents';

const EASE = [0.23, 1, 0.32, 1] as const;

const objectives = [
{ icon: MegaphoneIcon, title: 'Sales campaigns', body: 'Product-led creative built to convert into purchases.' },
{ icon: PhoneCallIcon, title: 'Lead generation', body: 'Campaigns optimised for calls and direct messages.' },
{ icon: TargetIcon, title: 'Audience targeting', body: 'Interest, behaviour and location-based audience builds.' },
{ icon: LayersIcon, title: 'Creative testing', body: 'Multiple angles per campaign, iterated on response.' }];


export function PaidAdvertising() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="scroll-mt-24 overflow-hidden border-y border-line bg-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Paid advertising"
          title="Paid advertising, built around outcomes."
          description="Platforms are the delivery mechanism. The objective - sales, leads or reach - decides the structure, the creative and the audience." />
        

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {adPlatforms.map((platform, i) => {
            const tone = accent(platform.accent);
            return (
              <Reveal key={platform.name} delay={i * 0.08} as="article">
                <motion.div
                  whileHover={reduce ? undefined : { y: -5 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="group relative h-full overflow-hidden rounded-4xl border border-line bg-canvas p-5 shadow-card transition-shadow duration-200 hover:shadow-lift sm:p-7 md:p-8">
                  
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">{platform.name}</h3>
                      <p className={`mt-2 text-sm font-semibold ${tone.text}`}>{platform.objective}</p>
                    </div>
                    <span
                      className={`rounded-full ${tone.bg} px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${tone.text}`}>
                      
                      Platform
                    </span>
                  </div>

                  <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white p-4 sm:p-5">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink-faint">
                      Conceptual campaign structure
                    </p>
                    <div className="mt-4 space-y-3">
                      {['Campaign · Objective', 'Ad set · Audience', 'Ad · Creative'].map((row, rowIndex) =>
                      <div key={row} className="flex items-center gap-3">
                          <span className={`h-2 w-2 shrink-0 rounded-full ${tone.dot}`} aria-hidden="true" />
                          <span className="text-sm font-medium text-ink-soft truncate">{row}</span>
                          <motion.span
                          aria-hidden="true"
                          className={`ml-auto h-1.5 shrink-0 rounded-full ${tone.softBg}`}
                          initial={{ width: reduce ? '28%' : '8%' }}
                          whileInView={{ width: ['32%', '24%', '18%'][rowIndex] }}
                          viewport={{ once: true, margin: '-15% 0px' }}
                          transition={{ duration: 0.5, delay: 0.1 * rowIndex, ease: EASE }} />
                        
                        </div>
                      )}
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {platform.capabilities.map((capability) =>
                    <li
                      key={capability}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink-soft">
                      
                        {capability}
                      </li>
                    )}
                  </ul>
                </motion.div>
              </Reveal>);

          })}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((objective, i) => {
            const Icon = objective.icon;
            return (
              <Reveal key={objective.title} delay={i * 0.06} as="article" className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-line bg-canvas p-6">
                  <Icon className="h-5 w-5 text-violet-600" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-semibold text-ink">{objective.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-mute">{objective.body}</p>
                </div>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}