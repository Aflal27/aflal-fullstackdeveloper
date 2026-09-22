import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDaysIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { contentCalendar } from '../data/marketing';
import { accent } from '../utils/accents';

const EASE = [0.23, 1, 0.32, 1] as const;

const platforms = ['Facebook', 'Instagram', 'TikTok', 'Google Business Profile', 'YouTube'];

export function SocialMedia() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="social-heading" className="overflow-hidden bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div id="social-heading">
              <SectionHeading
                eyebrow="Social media"
                title="Content that people actually stop for."
                description="From content calendars to storytelling videos and promotional creatives, I manage the creative pipeline from planning to publishing." />
              
            </div>
            <Reveal delay={0.16}>
              <ul className="mt-10 flex flex-wrap gap-2">
                {platforms.map((platform) =>
                <li
                  key={platform}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-soft">
                  
                    {platform}
                  </li>
                )}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-4xl border border-line bg-white p-5 shadow-card sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <CalendarDaysIcon className="h-4 w-4 text-violet-600" aria-hidden="true" />
                  Weekly content plan
                </p>
                <span className="rounded-full bg-violet-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-violet-600">
                  Example workflow
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {contentCalendar.map((day, i) => {
                  const tone = accent(day.accent);
                  return (
                    <motion.li
                      key={day.day}
                      initial={{ opacity: 0, x: reduce ? 0 : -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-12% 0px' }}
                      transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                      whileHover={reduce ? undefined : { x: 4 }}
                      className="flex items-center gap-4 rounded-2xl border border-line bg-canvas px-4 py-4 transition-colors duration-200 hover:border-ink/15">
                      
                      <span
                        className={`flex h-10 w-12 shrink-0 items-center justify-center rounded-xl ${tone.bg} text-[0.65rem] font-bold tracking-[0.1em] ${tone.text}`}>
                        
                        {day.short}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-ink">{day.type}</span>
                        <span className="block text-xs text-ink-mute">{day.format}</span>
                      </span>
                      <span className={`ml-auto h-2 w-2 shrink-0 rounded-full ${tone.dot}`} aria-hidden="true" />
                    </motion.li>);

                })}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-ink-faint">
                Example content planning workflow - illustrative of how a week is structured, not a record of specific
                published posts.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}