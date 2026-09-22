import React from 'react';
import { Reveal } from './ui/Reveal';

export function BrandStatement() {
  return (
    <section aria-labelledby="statement-heading" className="grain relative overflow-hidden animated-mesh">
      <div className="relative mx-auto max-w-shell px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <h2
            id="statement-heading"
            className="mx-auto max-w-4xl font-display text-display-lg font-extrabold text-white">
            
            Attention is the beginning.
            <span className="block text-sun-400">Results are the goal.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
            Creative enough to capture attention. Technical enough to build the infrastructure. Data-driven enough to
            improve it.
          </p>
        </Reveal>
      </div>
    </section>);

}