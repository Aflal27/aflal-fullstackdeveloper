import React from 'react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { techStack } from '../data/career';

export function TechStack() {
  return (
    <section id="skills" className="scroll-mt-24 overflow-hidden bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Technical Skills"
          title="The stack I build with."
          description="Two years of hands-on production experience across the full development lifecycle."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06}>
              <div className="rounded-4xl border border-line bg-white p-6 shadow-card sm:p-7">
                <p
                  className={`text-label font-bold uppercase tracking-[0.14em] ${group.accent}`}
                >
                  {group.category}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${group.accentBg} ${group.accent}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
