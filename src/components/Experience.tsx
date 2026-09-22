import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { roles } from '../data/career';

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 overflow-hidden bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Experience"
          title="Marketing in practice, engineering underneath."
          description="One year of professional digital marketing built on top of production web development experience." />
        

        <div className="relative mt-16">
          <span
            aria-hidden="true"
            className="absolute left-[0.6875rem] top-2 h-[calc(100%-1rem)] w-px bg-line md:left-[0.9375rem]" />
          
          <ol className="space-y-12">
            {roles.map((role, i) =>
            <Reveal key={role.id} delay={i * 0.08} as="li" className="relative pl-10 md:pl-14">
                <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-canvas md:h-8 md:w-8 ${
                role.kind === 'marketing' ? 'border-violet-600' : 'border-line'}`
                }>
                
                  <span
                  className={`h-2 w-2 rounded-full md:h-2.5 md:w-2.5 ${
                  role.kind === 'marketing' ? 'bg-violet-600' : 'bg-ink-faint'}`
                  } />
                
                </span>

                <article
                className={`overflow-hidden rounded-4xl border p-5 sm:p-7 md:p-9 ${
                role.kind === 'marketing' ?
                'border-violet-200 bg-white shadow-card' :
                'border-line bg-white/60'}`
                }>
                
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                    <div>
                      <h3
                      className={`font-display font-extrabold tracking-tight text-ink ${
                      role.kind === 'marketing' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`
                      }>
                      
                        {role.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-violet-600">{role.company}</p>
                      <p className="text-sm text-ink-mute">{role.location}</p>
                    </div>
                    <span className="rounded-full border border-line bg-canvas px-4 py-1.5 text-xs font-semibold text-ink-soft">
                      {role.period}
                    </span>
                  </div>

                  <p className="mt-5 text-[0.95rem] font-medium leading-relaxed text-ink-soft">{role.positioning}</p>

                  <ul className="mt-6 grid gap-2.5 border-t border-line pt-6 sm:grid-cols-2">
                    {role.responsibilities.map((responsibility) =>
                  <li key={responsibility} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" aria-hidden="true" />
                        {responsibility}
                      </li>
                  )}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {role.tags.map((tag) =>
                  <li
                    key={tag}
                    className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600">
                    
                        {tag}
                      </li>
                  )}
                  </ul>
                </article>
              </Reveal>
            )}
          </ol>
        </div>
      </div>
    </section>);

}