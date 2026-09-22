import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { processSteps } from '../data/marketing';

export function Process() {
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 72%', 'end 62%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const scaleY = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section aria-labelledby="process-heading" className="overflow-hidden border-y border-line bg-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <div id="process-heading">
          <SectionHeading
            eyebrow="My process"
            title="How I run a campaign"
            description="Six repeatable steps — the part that changes is the product, the offer and the audience." />
          
        </div>

        <div className="relative mt-16">
          <span aria-hidden="true" className="absolute left-5 top-0 hidden h-full w-px bg-line sm:block">
            <motion.span
              className="absolute inset-0 origin-top bg-coral-500"
              style={reduce ? undefined : { scaleY }} />
            
          </span>

          <ol ref={listRef} className="grid gap-4 sm:gap-6">
            {processSteps.map((step, i) =>
            <Reveal key={step.index} delay={i * 0.05} as="li" className="sm:pl-16">
                <div className="relative flex flex-col gap-4 overflow-hidden rounded-4xl border border-line bg-canvas p-5 sm:flex-row sm:items-center sm:gap-10 sm:p-8">
                  <span
                  aria-hidden="true"
                  className="absolute -left-16 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white font-display text-xs font-extrabold text-coral-600 shadow-card sm:flex">
                  
                    {step.index}
                  </span>
                  <div className="sm:w-56 sm:shrink-0">
                    <p className="text-label font-semibold uppercase text-ink-faint sm:hidden">Step {step.index}</p>
                    <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink sm:mt-0">
                      {step.title}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {step.items.map((item) =>
                  <li
                    key={item}
                    className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink-soft">
                    
                        {item}
                      </li>
                  )}
                  </ul>
                </div>
              </Reveal>
            )}
          </ol>
        </div>
      </div>
    </section>);

}