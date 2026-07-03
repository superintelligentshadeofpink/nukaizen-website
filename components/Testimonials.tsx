'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Reveal from './Reveal';

const TESTIMONIALS = [
  {
    image: '/images/corey.png',
    alt: 'Corey Robertson',
    quote:
      'Mark and Sarah have significant technical expertise in software development and business process improvement. I engaged Nukaizen to review and improve my business processes. Their ability to communicate complex concepts clearly and effectively sets them apart. Highly recommended for anyone wanting to improve their business with seamless collaboration.',
    name: 'Corey Robertson',
    role: 'CEO at BoomA Food Group',
  },
  {
    image: '/images/phil.png',
    alt: 'Phil Couch',
    quote:
      'Business Process and Software Specialists Mark and Sarah have significant technical expertise in software development and business process improvement. I engaged Nukaizen to review and improve my business processes. Their ability to communicate complex concepts clearly and effectively sets them apart. Highly recommended for anyone wanting to improve their business with seamless collaboration.',
    name: 'Phil Couch',
    role: 'Director, Newcastle Bushfire Consulting',
  },
  {
    image: '/images/viv.png',
    alt: 'Viv Jayachandran',
    quote:
      "Partnering with Nukaizen has provided Jaegersoft with effective strategies and invaluable support in optimising our project and IT management processes, ensuring we operate more efficiently while maintaining a high standard of service delivery. Sarah's expertise in software consulting, process optimisation, and strategic project oversight has helped us streamline workflows, improve resource visibility, and enhance the scalability of our software team.",
    name: 'Viv Jayachandran',
    role: 'Managing Director, Jaegersoft',
  },
];

const AUTO_ADVANCE_MS = 7000;

/** Auto-rotating testimonial carousel with avatar picker; pauses on hover. */
export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="relative z-10 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] sm:pt-[140px]">
      <Reveal className="text-center mb-10 sm:mb-14">
        <span className="eyebrow justify-center">
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] rounded-full" />
          Testimonials
          <span className="w-8 h-[2px] bg-gradient-to-r from-[#4d73f8] to-[#c05aff] rounded-full" />
        </span>
        <h2 className="font-['Outfit'] font-semibold text-[34px] sm:text-[46px] lg:text-[56px] tracking-[-1.5px] text-gradient mt-3">
          They are happy
        </h2>
      </Reveal>

      <Reveal direction="scale">
        <div
          className="relative glass rounded-[36px] sm:rounded-[44px] px-6 sm:px-14 lg:px-20 pt-14 pb-10 sm:pt-16 sm:pb-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c05aff] to-[#4d73f8] flex items-center justify-center shadow-[0_12px_30px_-8px_rgba(149,10,255,0.5)] rotate-3">
            <Quote className="w-7 h-7 text-white fill-white" />
          </div>

          {/* Slides — stacked with fade so height stays stable */}
          <div className="relative grid">
            {TESTIMONIALS.map((t, i) => (
              <blockquote
                key={t.name}
                className={`col-start-1 row-start-1 text-center transition-all duration-700 ${
                  i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                aria-hidden={i !== current}
              >
                <p className="font-['Manrope'] font-medium text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.85] text-[#191938]/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>

          {/* Avatar picker */}
          <div className="flex items-end justify-center gap-4 sm:gap-6 mt-10">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setCurrent(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`relative rounded-full transition-all duration-500 ${
                  i === current
                    ? 'w-[74px] h-[74px] sm:w-[86px] sm:h-[86px] ring-4 ring-[#c05aff]/60 shadow-[0_14px_30px_-10px_rgba(149,10,255,0.55)]'
                    : 'w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] opacity-55 hover:opacity-90 grayscale hover:grayscale-0'
                }`}
              >
                <Image src={t.image} alt={t.alt} fill sizes="90px" className="object-cover rounded-full" />
              </button>
            ))}
          </div>

          <div className="text-center mt-5 min-h-[52px]">
            <p className="font-['Manrope'] font-bold text-[16px] sm:text-[18px] text-[#191938]">{TESTIMONIALS[current].name}</p>
            <p className="font-['Manrope'] font-medium text-[13px] sm:text-[14px] text-[#191938]/60">{TESTIMONIALS[current].role}</p>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-strong flex items-center justify-center text-[#7a3ff5] hover:scale-110 hover:text-[#4d73f8] transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass-strong flex items-center justify-center text-[#7a3ff5] hover:scale-110 hover:text-[#4d73f8] transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
