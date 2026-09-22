import React from 'react';
import { Reveal } from './ui/Reveal';
import { CountUp } from './ui/CountUp';
import { trustMetrics, disclaimer } from '../data/marketing';

export function TrustMetrics() {
  return (
    <section aria-label="Credibility metrics" className="relative border-y border-line bg-white">
      <div className="mx-auto max-w-shell px-5 py-12 sm:px-8 lg:py-14">
        <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric, i) =>
          <Reveal key={metric.label} delay={i * 0.06} className="flex flex-col">
              <dt className="order-2 mt-2 text-sm font-medium text-ink-mute">
                {metric.label}
                {metric.footnote ? <span aria-hidden="true">*</span> : null}
              </dt>
              <dd className="order-1 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                <CountUp value={metric.value} />
              </dd>
            </Reveal>
          )}
        </dl>
        <Reveal delay={0.24}>
          <p className="mt-10 max-w-3xl border-t border-line pt-5 text-xs leading-relaxed text-ink-faint">
            *{disclaimer}
          </p>
        </Reveal>
      </div>
    </section>);

}