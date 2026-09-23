import React from 'react';
import { GraduationCapIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { education } from '../data/career';

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 overflow-hidden bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="text-label font-semibold uppercase text-violet-600">Education</p>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink">
                Academic background
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                Formally trained in software engineering, with continuous self-directed learning on the job.
              </p>
            </div>
          </Reveal>

          <ol className="relative border-l border-line pl-8">
            {education.map((item, i) => (
              <Reveal key={item.qualification} delay={i * 0.07} as="li" className="relative pb-9 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[37px] top-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-canvas bg-violet-100"
                >
                  <GraduationCapIcon className="h-2.5 w-2.5 text-violet-600" aria-hidden="true" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-base font-semibold text-ink">{item.qualification}</h3>
                  <span className="rounded-full border border-line bg-white px-3 py-0.5 text-xs font-semibold text-ink-faint">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-ink-mute">
                  {item.institution}
                  {item.accreditation ? (
                    <span className="ml-2 rounded-full bg-violet-50 px-2 py-0.5 text-xs font-semibold text-violet-600">
                      {item.accreditation}
                    </span>
                  ) : null}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
