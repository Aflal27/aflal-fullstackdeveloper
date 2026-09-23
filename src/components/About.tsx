import React from 'react';
import { MapPinIcon, BriefcaseIcon, GraduationCapIcon, LanguagesIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { photos, profile } from '../data/site';

const facts = [
  { icon: MapPinIcon, label: 'Colombo, Sri Lanka' },
  { icon: BriefcaseIcon, label: '2+ Years Experience' },
  { icon: GraduationCapIcon, label: 'HND Software Engineering' },
  { icon: LanguagesIcon, label: 'English · Tamil' },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 overflow-hidden border-y border-line bg-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 left-0 h-32 w-32 rounded-3xl bg-violet-100 sm:-bottom-5 sm:-left-5"
              />
              <div className="grain relative overflow-hidden rounded-4xl border border-line bg-violet-50 shadow-lift">
                <img
                  src={photos.about}
                  alt={`${profile.name}, Full Stack Developer`}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-label font-semibold uppercase text-violet-600">About</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-display-lg font-extrabold text-ink">
                I build production apps, not just prototypes.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Full Stack Developer with 2+ years of professional experience designing, building and deploying
                real-world web and mobile applications. I work independently in remote environments and focus on
                clean, scalable, SEO-friendly code that solves actual business problems - from e-commerce and
                booking systems to point-of-sale software.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-mute">
                My background in digital marketing gives me an edge: I understand what users expect and what
                businesses need to grow, so I build accordingly.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <li
                      key={fact.label}
                      className="rounded-2xl border border-line bg-canvas px-5 py-4 text-sm font-semibold text-ink"
                    >
                      <Icon className="mb-3 h-4 w-4 text-violet-600" aria-hidden="true" />
                      {fact.label}
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
