import React from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { campaignStages } from '../data/marketing';

export function CampaignShowcase() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 78%', 'end 55%']
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  const lineScale = useTransform(progress, [0, 1], [0, 1]);

  return (
    <section id="campaigns" className="scroll-mt-24 bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Campaign showcase"
          title="Inside the Campaign"
          description="Every campaign follows the same discipline - research before creative, creative before spend, and data before the next decision." />
        

        <div ref={trackRef} className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-[1.15rem] top-2 h-[calc(100%-1rem)] w-px bg-line lg:left-0 lg:top-[3.25rem] lg:h-px lg:w-full">
            
            <motion.span
              className="absolute inset-0 origin-top bg-violet-600 lg:hidden"
              style={reduce ? undefined : { scaleY: lineScale }} />
            
            <motion.span
              className="absolute inset-0 hidden origin-left bg-violet-600 lg:block"
              style={reduce ? undefined : { scaleX: lineScale }} />
            
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-6 lg:gap-6">
            {campaignStages.map((stage, i) =>
            <Reveal key={stage.index} delay={i * 0.07} as="li" className="relative pl-12 lg:pl-0">
                <span
                className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white font-display text-xs font-extrabold text-violet-600 shadow-card lg:relative lg:mb-8"
                aria-hidden="true">
                
                  {stage.index}
                </span>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink lg:mt-0">{stage.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {stage.items.map((item) =>
                <li key={item} className="text-sm leading-relaxed text-ink-mute">
                      {item}
                    </li>
                )}
                </ul>
              </Reveal>
            )}
          </ol>
        </div>
      </div>
    </section>);

}