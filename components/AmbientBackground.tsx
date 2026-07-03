'use client';

import { useEffect, useRef } from 'react';

/**
 * Fixed, full-viewport backdrop of soft morphing gradient blobs and drifting
 * orbs, with gentle scroll parallax. Sits behind all page content.
 */
export default function AmbientBackground() {
  const slowRef = useRef<HTMLDivElement>(null);
  const fastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (slowRef.current) slowRef.current.style.transform = `translateY(${y * 0.06}px)`;
        if (fastRef.current) fastRef.current.style.transform = `translateY(${y * -0.1}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* Base sky wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8ecff] via-[#eaf3ff] to-[#e3f2ff]" />

      {/* Slow parallax layer */}
      <div ref={slowRef} className="absolute inset-0 will-change-transform">
        <div className="anim-blob anim-drift absolute -top-[220px] -left-[180px] w-[640px] h-[640px] bg-gradient-to-br from-[#c05aff]/35 via-[#8f6bff]/25 to-[#4d73f8]/30 blur-[70px]" />
        <div className="anim-blob absolute top-[30vh] -right-[240px] w-[560px] h-[560px] bg-gradient-to-bl from-[#4d73f8]/28 via-[#6ea8ff]/22 to-[#c05aff]/18 blur-[80px] [animation-delay:-5s]" />
        <div className="anim-blob anim-drift absolute top-[110vh] -left-[200px] w-[520px] h-[520px] bg-gradient-to-tr from-[#7dd3fc]/35 to-[#c05aff]/20 blur-[80px] [animation-delay:-9s]" />
      </div>

      {/* Faster counter-parallax layer */}
      <div ref={fastRef} className="absolute inset-0 will-change-transform">
        <div className="anim-float-lg absolute top-[16vh] right-[12vw] w-[130px] h-[130px] rounded-full bg-gradient-to-br from-white/80 to-[#bcd8ff]/60 blur-[2px] shadow-[0_20px_60px_-15px_rgba(77,115,248,0.4)]" />
        <div className="anim-float absolute top-[52vh] left-[6vw] w-[72px] h-[72px] rounded-full bg-gradient-to-br from-white/90 to-[#d9c5ff]/70 blur-[1px] [animation-delay:-2s]" />
        <div className="anim-float-lg absolute top-[86vh] right-[20vw] w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#c05aff]/50 to-[#4d73f8]/50 blur-[1px] [animation-delay:-4s]" />
        <div className="anim-float absolute top-[34vh] left-[42vw] w-[26px] h-[26px] rounded-full bg-[#4d73f8]/40 [animation-delay:-1s]" />
      </div>

      {/* Fine grain of dots for texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(rgba(77,115,248,0.14) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
    </div>
  );
}
