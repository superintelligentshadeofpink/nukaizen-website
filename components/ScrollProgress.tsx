'use client';

import { useEffect, useRef } from 'react';

/** Thin gradient bar along the top edge showing scroll progress. */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        if (barRef.current) barRef.current.style.width = `${pct}%`;
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none" aria-hidden>
      <div ref={barRef} className="h-full w-0 bg-gradient-to-r from-[#c05aff] to-[#4d73f8] rounded-r-full" />
    </div>
  );
}
