import React from 'react';
import { MapPinIcon, BriefcaseIcon, CodeIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { photos, profile } from '../data/site';

const facts = [
{ icon: MapPinIcon, label: 'Based in Sri Lanka' },
{ icon: BriefcaseIcon, label: 'Digital Marketing Executive' },
{ icon: CodeIcon, label: 'Full-stack development background' }];


export function About() {
  return (
    <section id="about" className="scroll-mt-24 overflow-hidden border-y border-line bg-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 left-0 h-32 w-32 rounded-3xl bg-sun-100 sm:-bottom-5 sm:-left-5" />
              
              <div className="grain relative overflow-hidden rounded-4xl border border-line bg-coral-50 shadow-lift">
                <img
                  src={photos.about}
                  alt={`${profile.firstName}, ${profile.role}, at his desk`}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy" />
                
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-label font-semibold uppercase text-violet-600">About</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-display-lg font-extrabold text-ink">
                I work where marketing meets technology.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                I combine creative marketing, paid advertising, SEO and hands-on web development to build digital
                campaigns around real business goals. My approach is practical: understand the audience, create the
                right content, launch the campaign, measure what happens and improve from the data.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-3">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <li
                      key={fact.label}
                      className="rounded-2xl border border-line bg-canvas px-5 py-5 text-sm font-semibold text-ink">
                      
                      <Icon className="mb-3 h-4 w-4 text-violet-600" aria-hidden="true" />
                      {fact.label}
                    </li>);

                })}
              </ul>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 text-sm text-ink-mute">
                {profile.experience} · Currently at {profile.company}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}