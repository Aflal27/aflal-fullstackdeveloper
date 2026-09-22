import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HeartIcon, MessageCircleIcon, SendIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { disclaimer } from '../data/marketing';

const EASE = [0.23, 1, 0.32, 1] as const;

function SalesRangeVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="rounded-3xl border border-violet-100 bg-violet-50 p-6">
      <div className="flex items-baseline justify-between text-xs font-semibold uppercase tracking-[0.14em] text-violet-600">
        <span>LKR 2M</span>
        <span>LKR 5M</span>
      </div>
      <div className="relative mt-4 h-2.5 overflow-hidden rounded-full bg-violet-200">
        <motion.span
          className="absolute inset-y-0 left-0 rounded-full bg-violet-600"
          initial={{ width: reduce ? '100%' : '18%' }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.9, ease: EASE }} />
        
      </div>
      <div className="mt-6 flex items-end gap-1.5" aria-hidden="true">
        {[38, 52, 46, 64, 58, 74, 68, 86].map((height, i) =>
        <motion.span
          key={i}
          className="flex-1 rounded-t-md bg-violet-400/70"
          initial={{ height: reduce ? height : 6 }}
          whileInView={{ height }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.45, delay: 0.05 * i, ease: EASE }} />

        )}
      </div>
      <p className="mt-4 text-xs text-ink-mute">Monthly sales range during the campaign period · ~8–15 units</p>
    </div>);

}

function SocialPostVisual() {
  return (
    <div className="rounded-3xl border border-electric-100 bg-electric-50 p-4 sm:p-6">
      <div className="rounded-2xl border border-white bg-white p-3.5 sm:p-4 shadow-card">
        <div className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-electric-100" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-ink">Sofa Factory Outlet</p>
            <p className="text-xs text-ink-faint">Engagement campaign</p>
          </div>
        </div>
        <div className="mt-4 h-28 rounded-xl bg-[linear-gradient(0deg,#DDE7FF,#EFF4FF)]" aria-hidden="true" />
        <div className="mt-4 flex flex-wrap items-center gap-x-3.5 gap-y-2 text-ink-mute">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium">
            <HeartIcon className="h-4 w-4 shrink-0" aria-hidden="true" /> Engagement
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium">
            <MessageCircleIcon className="h-4 w-4 shrink-0" aria-hidden="true" /> Messages
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium">
            <SendIcon className="h-4 w-4 shrink-0" aria-hidden="true" /> Shares
          </span>
        </div>
      </div>
      <p className="mt-4 text-xs text-ink-mute">Reach per engagement post: 5.5K–12.5K views</p>
    </div>);

}

function BrandNodesVisual() {
  const reduce = useReducedMotion();
  const nodes = ['Sofa Factory Outlet', 'Decomo', 'Empire Cars'];
  return (
    <div className="rounded-3xl border border-coral-100 bg-coral-50 p-6">
      <svg viewBox="0 0 240 90" className="h-24 w-full" role="img" aria-label="Three connected brand nodes">
        <motion.path
          d="M30 60 C 80 10, 160 10, 210 60"
          fill="none"
          stroke="#FF8A6B"
          strokeWidth="2"
          strokeDasharray="4 6"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: EASE }} />
        
        {[30, 120, 210].map((x, i) =>
        <motion.circle
          key={x}
          cx={x}
          cy={i === 1 ? 24 : 60}
          r="11"
          fill="#FF5C33"
          initial={{ scale: reduce ? 1 : 0.4, opacity: reduce ? 1 : 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.35, delay: 0.2 + i * 0.12, ease: EASE }}
          style={{ transformOrigin: `${x}px ${i === 1 ? 24 : 60}px` }} />

        )}
      </svg>
      <ul className="mt-2 grid gap-1.5">
        {nodes.map((node) =>
        <li key={node} className="flex items-center gap-2 text-xs font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-coral-500" aria-hidden="true" />
            {node}
          </li>
        )}
      </ul>
    </div>);

}

const results = [
{
  index: 'Result 01',
  value: 'LKR 2M–5M',
  label: 'Monthly Sales',
  brand: 'Sofa Factory Outlet',
  body: 'Managed paid advertising campaigns supporting consistent monthly sales of approximately LKR 2M–5M, representing around 8–15 units during the relevant campaign period.',
  Visual: SalesRangeVisual,
  span: 'lg:col-span-7'
},
{
  index: 'Result 02',
  value: '5.5K–12.5K',
  label: 'Reach / Views Per Engagement Post',
  brand: 'Sofa Factory Outlet',
  body: 'Engagement and brand-awareness campaigns reaching approximately 5.5K–12.5K views per post during the relevant campaign period.',
  Visual: SocialPostVisual,
  span: 'lg:col-span-5'
},
{
  index: 'Result 03',
  value: '3',
  label: 'Group Companies',
  brand: 'Empire Holdings Pvt Ltd',
  body: 'Managing digital presence, content, advertising and website activities across Sofa Factory Outlet, Decomo and Empire Cars.',
  Visual: BrandNodesVisual,
  span: 'lg:col-span-12'
}];


export function Results() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="results-heading" className="overflow-hidden border-y border-line bg-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <div id="results-heading">
          <SectionHeading
            eyebrow="Featured results"
            title="Marketing that moves beyond metrics."
            description="Campaigns are only valuable when they contribute to real business outcomes." />
          
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {results.map((result, i) => {
            const Visual = result.Visual;
            return (
              <Reveal key={result.index} delay={i * 0.08} as="article" className={result.span}>
                <motion.div
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="flex h-full flex-col gap-8 overflow-hidden rounded-4xl border border-line bg-canvas p-5 shadow-card sm:p-7 md:p-9 lg:flex-row lg:items-center">
                  
                  <div className="lg:flex-1">
                    <p className="text-label font-semibold uppercase text-ink-faint">{result.index}</p>
                    <p className="mt-4 font-display text-display-md font-extrabold text-ink">{result.value}</p>
                    <p className="mt-2 text-base font-semibold text-violet-600">{result.label}</p>
                    <p className="mt-1 text-sm font-medium text-ink-mute">{result.brand}</p>
                    <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">{result.body}</p>
                  </div>
                  <div className="lg:w-[22rem] lg:flex-none">
                    <Visual />
                  </div>
                </motion.div>
              </Reveal>);

          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-faint">{disclaimer}</p>
        </Reveal>
      </div>
    </section>);

}