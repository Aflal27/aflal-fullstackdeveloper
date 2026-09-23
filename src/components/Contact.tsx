import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRightIcon, CheckCircle2Icon, LoaderCircleIcon, AlertCircleIcon, MailIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { MagneticLink } from './ui/Buttons';
import { photos, profile } from '../data/site';

const CONTACT_EMAIL = 'mohamedaflal6719@gmail.com';
const WHATSAPP_NUMBER = '94750241025'; // no + prefix for wa.me URL

type Status = 'idle' | 'submitting' | 'success' | 'error';

const EASE = [0.23, 1, 0.32, 1] as const;

export function Contact() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    if (status === 'error') setStatus('idle');
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.includes('@') || form.message.trim().length < 8) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.setTimeout(() => {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus('success');
    }, 900);
  }

  return (
    <section id="contact" className="scroll-mt-24 overflow-hidden border-t border-line bg-white">
      <div className="relative mx-auto max-w-shell px-5 py-20 sm:px-8 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(44rem_26rem_at_18%_0%,#E9E1FF,transparent_62%),radial-gradient(38rem_24rem_at_82%_10%,#FFE1D8,transparent_60%)]" />
        
        <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-label font-semibold uppercase text-violet-600">Contact</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 font-display text-display-lg font-extrabold text-ink">Let&apos;s build something.</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
                Looking for a Full Stack Developer who can build and ship production-ready web or mobile applications?
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <MagneticLink href="#contact-form">
                  Let&apos;s Talk
                  <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                </MagneticLink>
                <MagneticLink
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Aflal, I found your portfolio and would like to connect.')}`}
                  variant="ghost">
                  {/* WhatsApp icon inline SVG */}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </MagneticLink>
                <MagneticLink href="#work" variant="ghost">
                  View My Work
                </MagneticLink>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group inline-flex items-center gap-3 text-sm text-ink-soft transition-colors duration-200 hover:text-violet-600">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas transition-colors duration-200 group-hover:border-violet-200 group-hover:bg-violet-50">
                    <MailIcon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm text-ink-soft transition-colors duration-200 hover:text-[#25D366]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas transition-colors duration-200 group-hover:border-[#25D366]/30 group-hover:bg-[#25D366]/10">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </span>
                  +94 750 241 025
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-12 flex items-center gap-4 rounded-3xl border border-line bg-canvas p-4 sm:p-5">
                <img
                  src={photos.hero}
                  alt=""
                  aria-hidden="true"
                  className="h-14 w-14 rounded-2xl object-cover object-top"
                  loading="lazy" />
                
                <div>
                  <p className="font-display text-base font-extrabold text-ink">{profile.firstName}</p>
                  <p className="text-sm text-ink-mute">
                    {profile.role} · {profile.location}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              noValidate
              className="overflow-hidden rounded-4xl border border-line bg-white p-5 shadow-card sm:p-7 md:p-9">
              
              <p className="text-sm font-semibold text-ink">Start a conversation</p>
              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-mute">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-ink-faint focus:border-violet-500"
                    placeholder="Your name" />
                  
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-mute">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="mt-2 w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-ink-faint focus:border-violet-500"
                    placeholder="you@company.com" />
                  
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink-mute">
                    
                    What do you need?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 w-full resize-none rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-ink-faint focus:border-violet-500"
                    placeholder="Your project — web app, mobile app, e-commerce…" />
                  
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-70">
                
                {status === 'submitting' ?
                <>
                    <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending
                  </> :
                status === 'success' ?
                <>
                    <CheckCircle2Icon className="h-4 w-4" aria-hidden="true" />
                    Message ready
                  </> :

                <>
                    Send message
                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                  </>
                }
              </button>

              <div aria-live="polite" className="mt-4 min-h-[1.5rem]">
                {status === 'error' ?
                <motion.p
                  initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="flex items-center gap-2 text-sm text-coral-600">
                  
                    <AlertCircleIcon className="h-4 w-4" aria-hidden="true" />
                    Please add your name, a valid email and a short message.
                  </motion.p> :
                null}
                {status === 'success' ?
                <motion.p
                  initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="text-sm text-ink-soft">
                  
                    Thanks, {form.name.split(' ')[0]} - your email client should have opened. If not, reach out directly at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-violet-600">{CONTACT_EMAIL}</a>.
                  </motion.p> :
                null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>);

}