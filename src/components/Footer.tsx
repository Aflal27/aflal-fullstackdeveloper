import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { navLinks, profile } from '../data/site';

const techDisciplines = [
  'Next.js · React · TypeScript',
  'Node.js · Express',
  'MySQL · MongoDB · Supabase',
  'Docker · CI/CD · VPS',
  'React Native (Expo)',
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight text-ink">AFLAL</p>
            <p className="mt-1 text-sm text-ink-mute">{profile.role}</p>
            <p className="text-sm text-ink-faint">{profile.location}</p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink-soft transition-colors duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink-soft transition-colors duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
              >
                <LinkedinIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink-soft transition-colors duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600"
              >
                <MailIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-label font-semibold uppercase text-ink-faint">Stack</p>
            <ul className="mt-4 space-y-2">
              {techDisciplines.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label font-semibold uppercase text-ink-faint">Navigation</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors duration-200 hover:text-violet-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-xs text-ink-faint">© 2026 Abdul Raheem Mohamed Aflal. All rights reserved.</p>
          <p className="text-xs text-ink-faint">{profile.email}</p>
        </div>
      </div>
    </footer>
  );
}
