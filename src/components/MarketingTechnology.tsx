import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { techCapabilities, techFunnel } from '../data/marketing';
import { webManagement } from '../data/brands';

const EASE = [0.23, 1, 0.32, 1] as const;

export function MarketingTechnology() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="tech-heading" className="grain relative overflow-hidden animated-mesh">
      <div className="relative mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="text-label font-semibold uppercase text-violet-200">More than a marketer</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="tech-heading" className="mt-4 max-w-4xl font-display text-display-lg font-extrabold text-white">
            I understand the technology behind the campaign.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            With hands-on full-stack development experience, I can work directly with websites, product pages, SEO
            implementation and web teams instead of treating the website as a black box.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-4xl border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:p-7 md:p-9">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-violet-200">
                From campaign to conversion
              </p>
              <ol className="mt-6 space-y-3">
                {techFunnel.map((stage, i) =>
                <motion.li
                  key={stage}
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-12% 0px' }}
                  transition={{ duration: 0.35, delay: i * 0.07, ease: EASE }}
                  className="flex items-center gap-4 rounded-2xl border border-white/15 bg-ink/25 px-4 py-3.5 transition-transform duration-200 sm:px-5 sm:py-4 sm:[margin-left:var(--step-indent)] sm:[max-width:var(--step-width)]"
                  style={{
                    ['--step-indent' as any]: `${i * 3.5}%`,
                    ['--step-width' as any]: `${100 - i * 3.5}%`,
                  }}>
                  
                    <span className="font-display text-xs font-extrabold text-violet-200">0{i + 1}</span>
                    <span className="text-sm font-semibold text-white">{stage}</span>
                  </motion.li>
                )}
              </ol>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.16}>
              <div className="overflow-hidden rounded-4xl border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:p-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-violet-200">
                  Technical capabilities
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {techCapabilities.map((capability) =>
                  <li
                    key={capability}
                    className="rounded-full border border-white/20 bg-ink/25 px-3.5 py-1.5 text-xs font-medium text-white">
                    
                      {capability}
                    </li>
                  )}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <article className="overflow-hidden rounded-4xl bg-white p-5 sm:p-7">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-violet-600">Web projects</p>
                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink">
                  {webManagement.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{webManagement.context}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {webManagement.services.map((s) => (
                    <li key={s} className="rounded-full bg-violet-50 px-3 py-1 text-[0.7rem] font-semibold text-violet-700">
                      {s}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 space-y-3">
                  {webManagement.projects.map((p) => (
                    <li key={p.name} className="rounded-2xl border border-line bg-surface px-4 py-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-ink">{p.name}</span>
                        {p.website ? (
                          <span className="text-[0.7rem] font-medium text-electric-600 break-all">{p.website}</span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-ink-mute">{p.description}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}