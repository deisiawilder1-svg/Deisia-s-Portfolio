'use client';

import type { FormEvent } from 'react';

const ContactSection = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      className='scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='game-panel relative overflow-hidden border border-cyan-100/20 bg-[#0b0e20]/85 px-6 py-10 sm:px-10 sm:py-14'>
          <div className='relative mx-auto max-w-2xl'>
            <p className='game-eyebrow mb-4 text-[9px] uppercase text-cyan-200 sm:text-[10px]'>
              Open a conversation
            </p>
            <h2
              id='contact-heading'
              className='game-title text-3xl text-white sm:text-4xl'
            >
              Contact<span className='text-pink-200'>.</span>
            </h2>
            <p className='mt-5 text-base leading-7 text-slate-200/70'>
              Have a question or want to talk about a project? Send me a message;
              I&apos;d be happy to hear from you.
            </p>

            <form className='mt-8 space-y-5' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='contact-email'
                  className='mb-2 block text-sm font-medium text-white/85'
                >
                  Email address
                </label>
                <input
                  id='contact-email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='w-full border border-white/15 bg-[#080b1d]/80 px-4 py-3 text-base text-white placeholder:text-white/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200'
                  placeholder='you@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='contact-message'
                  className='mb-2 block text-sm font-medium text-white/85'
                >
                  Message
                </label>
                <textarea
                  id='contact-message'
                  name='message'
                  rows={5}
                  required
                  className='w-full resize-y border border-white/15 bg-[#080b1d]/80 px-4 py-3 text-base text-white placeholder:text-white/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200'
                  placeholder='Write your message here...'
                />
              </div>

              <button
                type='submit'
                className='game-start-button game-eyebrow inline-flex min-h-12 items-center justify-center border border-cyan-100/50 bg-linear-to-r from-indigo-600/90 via-violet-600/90 to-fuchsia-600/90 px-6 py-3 text-[10px] uppercase text-white transition hover:-translate-y-1 hover:border-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200 sm:text-xs'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
