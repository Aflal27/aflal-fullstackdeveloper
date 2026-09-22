import React from 'react';
import { navLinks, profile } from '../data/site';

const disciplines = ['Digital Marketing', 'Paid Ads', 'Social Media', 'SEO', 'Web Technology'];

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-shell px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight text-ink">AFLAL</p>
            <p className="mt-2 text-sm text-ink-mute">
              {profile.role} · {profile.location}
            </p>
          </div>

          <div>
            <p className="text-label font-semibold uppercase text-ink-faint">Disciplines</p>
            <ul className="mt-4 space-y-2">
              {disciplines.map((item) =>
              <li key={item} className="text-sm text-ink-soft">
                  {item}
                </li>
              )}
            </ul>
          </div>

          <div>
            <p className="text-label font-semibold uppercase text-ink-faint">Sections</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) =>
              <li key={link.href}>
                  <a
                  href={link.href}
                  className="text-sm text-ink-soft transition-colors duration-200 hover:text-violet-600">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs text-ink-faint">© 2026 Aflal. All rights reserved.</p>
        </div>
      </div>
    </footer>);

}