import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { analyticsMetrics, analyticsTools } from '../data/marketing';

const EASE = [0.23, 1, 0.32, 1] as const;

export function Analytics() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="analytics-heading" className="overflow-hidden border-y border-line bg-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <div id="analytics-heading">
              <SectionHeading
                eyebrow="Analytics"
                title="Creative intuition. Data-backed decisions."
                description="Reporting closes the loop: what reached people, what engaged them, what produced a message, a call or a sale." />
              
            </div>
            <Reveal delay={0.14}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {analyticsTools.map((tool) =>
                <li
                  key={tool}
                  className="rounded-2xl border border-line bg-canvas px-4 py-3.5 text-sm font-semibold text-ink sm:px-5 sm:py-4">
                  
                    {tool}
                  </li>
                )}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-4xl border border-line bg-canvas p-4 shadow-card sm:p-6 md:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
                <p className="text-sm font-semibold text-ink">Campaign report view</p>
                <span className="rounded-full bg-violet-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-violet-600">
                  Conceptual UI
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
                {analyticsMetrics.map((metric, i) =>
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-12% 0px' }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: EASE }}
                  className="overflow-hidden rounded-2xl border border-line bg-white p-3.5 sm:p-4">
                  
                    <p className="text-sm font-semibold text-ink">{metric.label}</p>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-[0.1em] text-ink-faint">{metric.hint}</p>
                    <motion.span
                    aria-hidden="true"
                    className="mt-4 block h-1.5 rounded-full bg-violet-200"
                    initial={{ width: reduce ? '100%' : '10%' }}
                    whileInView={{ width: ['100%', '72%', '86%', '60%', '78%', '92%'][i] }}
                    viewport={{ once: true, margin: '-12% 0px' }}
                    transition={{ duration: 0.5, delay: 0.12 + i * 0.05, ease: EASE }} />
                  
                  </motion.div>
                )}
              </div>

              <div className="mt-6 rounded-2xl border border-line bg-white p-5">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink-faint">
                  Performance trend · illustrative
                </p>
                <svg viewBox="0 0 320 90" className="mt-4 h-24 w-full" role="presentation">
                  <motion.path
                    d="M4 76 L58 62 L112 66 L166 44 L220 50 L274 26 L316 18"
                    fill="none"
                    stroke="#6725D9"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: reduce ? 1 : 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: '-12% 0px' }}
                    transition={{ duration: 1, ease: EASE }} />
                  
                </svg>
                <p className="text-xs text-ink-faint">
                  Axis values intentionally omitted - only reported figures elsewhere on this site are actual.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}