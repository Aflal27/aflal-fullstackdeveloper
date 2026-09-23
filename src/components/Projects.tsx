import React from 'react';
import { ArrowUpRightIcon, CheckIcon, GithubIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';
import { projects, openSourceProjects } from '../data/career';

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 overflow-hidden border-y border-line bg-white">
      <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">

        {/* ── Client Projects ─────────────────────────────────────── */}
        <SectionHeading
          eyebrow="Projects"
          title="Live apps, real users."
          description="Production applications I designed, built and deployed - end to end."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-line bg-canvas shadow-card transition-shadow duration-300 hover:shadow-lift">
                {/* Coloured header band */}
                <div className={`h-2 w-full ${project.accentBg}`} aria-hidden="true" />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
                      {project.name}
                    </h3>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name}`}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white transition-colors duration-200 hover:border-transparent hover:bg-violet-50 ${project.accent}`}
                      >
                        <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>

                  {/* URL label */}
                  {project.url ? (
                    <p className={`mt-1 text-xs font-medium ${project.accent}`}>
                      {project.url.replace('https://', '')}
                    </p>
                  ) : null}

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{project.description}</p>

                  {/* Highlights */}
                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-ink-soft">
                        <CheckIcon
                          className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${project.accent}`}
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${project.accentBg} ${project.accent}`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ── Open-Source / GitHub Projects ───────────────────────── */}
        <div className="mt-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Open Source"
              title="More on GitHub."
              description="A selection of public repos — real code, real depth. Every project is live or linkable."
            />
            <a
              href="https://github.com/Aflal27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-ink/80 sm:self-auto"
            >
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              View all on GitHub
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {openSourceProjects.map((repo, i) => (
              <Reveal key={repo.id} delay={i * 0.06}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-canvas p-5 transition-shadow duration-300 hover:shadow-lift">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${repo.accentBg}`}>
                        <GithubIcon className={`h-3.5 w-3.5 ${repo.accent}`} aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-base font-bold tracking-tight text-ink">
                        {repo.name}
                      </h3>
                    </div>
                    {/* Action buttons */}
                    <div className="flex shrink-0 items-center gap-1.5">
                      {repo.url && (
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${repo.name}`}
                          title="Live demo"
                          className={`flex h-7 w-7 items-center justify-center rounded-full border border-line bg-white transition-colors duration-200 hover:border-transparent hover:bg-violet-50 ${repo.accent}`}
                        >
                          <ArrowUpRightIcon className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                      <a
                        href={repo.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${repo.name} source on GitHub`}
                        title="Source code"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-white text-ink-soft transition-colors duration-200 hover:border-transparent hover:bg-ink hover:text-white"
                      >
                        <GithubIcon className="h-3 w-3" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  {/* Live URL */}
                  {repo.url && (
                    <p className={`mt-2 truncate text-xs font-medium ${repo.accent}`}>
                      {repo.url.replace('https://', '')}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{repo.description}</p>

                  {/* Tags */}
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {repo.tags.map((tag) => (
                      <li
                        key={tag}
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${repo.accentBg} ${repo.accent}`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="h-px flex-1 bg-line" />
              <a
                href="https://github.com/Aflal27"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-white"
              >
                <GithubIcon className="h-4 w-4" aria-hidden="true" />
                See all {'>'}20 repos on GitHub
              </a>
              <div className="h-px flex-1 bg-line" />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
