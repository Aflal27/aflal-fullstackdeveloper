import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PaletteIcon, ScissorsIcon, ImageIcon, SparklesIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { creativeTools } from '../data/marketing';

const EASE = [0.23, 1, 0.32, 1] as const;
const icons = [PaletteIcon, ScissorsIcon, ImageIcon, SparklesIcon];

export function CreativeToolkit() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="toolkit-heading" className="overflow-hidden border-y border-line bg-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <div id="toolkit-heading">
          <SectionHeading
            eyebrow="Creative toolkit"
            title="The workstation behind the campaign."
            description="Creative is produced in-house - posters, short-form video edits and AI-assisted storytelling built for the platform they run on." />
          
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {creativeTools.map((tool, i) => {
              const Icon = icons[i];
              const isActive = active === i;
              return (
                <Reveal key={tool.name} delay={i * 0.06} as="li">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`flex w-full items-center gap-4 rounded-3xl border px-5 py-5 text-left transition-colors duration-200 ${
                    isActive ?
                    'border-violet-200 bg-violet-50' :
                    'border-line bg-canvas hover:border-ink/15'}`
                    }>
                    
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                      isActive ? 'bg-violet-600 text-white' : 'bg-white text-ink-soft'}`
                      }>
                      
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-display text-base font-extrabold text-ink">{tool.name}</span>
                      <span className="mt-0.5 block text-sm text-ink-mute">{tool.use}</span>
                    </span>
                  </button>
                </Reveal>);

            })}
          </ul>

          <Reveal delay={0.12}>
            <div className="grain relative flex h-full min-h-[20rem] flex-col justify-between overflow-hidden rounded-4xl border border-line bg-[radial-gradient(34rem_22rem_at_20%_10%,#E9E1FF,transparent_60%),radial-gradient(28rem_20rem_at_85%_80%,#FFE1D8,transparent_60%)] p-5 sm:p-7 md:p-8">
              <div className="relative">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-violet-600">
                  Campaign canvas
                </p>
                <motion.h3
                  key={creativeTools[active].name}
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="mt-4 max-w-md font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  
                  {creativeTools[active].use}
                </motion.h3>
              </div>

              <div className="relative mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
                {['Poster', 'Short-form', 'Story'].map((label, i) =>
                <motion.div
                  key={label}
                  animate={reduce ? undefined : { y: [0, -6, 0] }}
                  transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-2xl border border-white/80 bg-white/85 p-2.5 sm:p-4 backdrop-blur">
                  
                    <div
                    className={`h-12 rounded-lg sm:h-16 ${['bg-violet-100', 'bg-electric-100', 'bg-coral-100'][i]}`}
                    aria-hidden="true" />
                  
                    <p className="mt-2 truncate text-center text-[0.72rem] font-semibold text-ink sm:mt-3 sm:text-left sm:text-xs">{label}</p>
                  </motion.div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}