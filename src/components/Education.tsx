import React from 'react';
import { Reveal } from './ui/Reveal';
import { education } from '../data/career';

export function Education() {
  return (
    <section aria-labelledby="education-heading" className="overflow-hidden bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="text-label font-semibold uppercase text-violet-600">Education</p>
              <h2 id="education-heading" className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink">
                Academic background
              </h2>
            </div>
          </Reveal>

          <ol className="relative border-l border-line pl-8">
            {education.map((item, i) =>
            <Reveal key={item.qualification} delay={i * 0.06} as="li" className="relative pb-8 last:pb-0">
                <span
                aria-hidden="true"
                className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full border-2 border-canvas bg-ink-faint" />
              
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-base font-semibold text-ink">{item.qualification}</h3>
                  <span className="text-xs font-semibold text-ink-faint">{item.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-mute">
                  {item.institution}
                  {item.accreditation ? ` · ${item.accreditation}` : ''}
                </p>
              </Reveal>
            )}
          </ol>
        </div>
      </div>
    </section>);

}