'use client';

import Link from 'next/link';
import { useState } from 'react';

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

interface HeaderProps {
  /** When true, logo is rendered inside an h1 (e.g. home page). Otherwise a div. */
  isHome?: boolean;
  /** Optional extra class for the header wrapper. */
  className?: string;
}

export default function Header({ isHome = false, className = '' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const logo = (
    <span className="font-['Outfit'] font-medium text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-black">
      Nuk<span className="text-[#950aff]">ai</span>zen
    </span>
  );

  const navLinks = (
    <>
      <Link href="/services" className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black hover:opacity-80 transition" onClick={() => setMenuOpen(false)}>
        Services
      </Link>
      <Link href="/case-studies" className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black hover:opacity-80 transition" onClick={() => setMenuOpen(false)}>
        Case Studies
      </Link>
    </>
  );

  return (
    <header className={`relative z-20 w-full ${className}`}>
      <div className="flex flex-row justify-between items-center w-full">
        {isHome ? (
          <h1 className="font-['Outfit'] font-medium text-[28px] sm:text-[32px] lg:text-[36px] text-black">
            Nuk<span className="text-[#950aff]">ai</span>zen
          </h1>
        ) : (
          <Link href="/" className="hover:opacity-80 transition">
            {logo}
          </Link>
        )}

        {/* Hamburger: mobile only */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-black hover:opacity-70 transition rounded-lg"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 md:gap-[40px] lg:gap-[72px] items-center min-h-[58px]">
          {navLinks}
        </nav>
      </div>

      {/* Mobile menu backdrop */}
      {menuOpen && (
        <button
          type="button"
          className="md:hidden fixed inset-0 bg-black/20 z-[9998]"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 mt-1 py-4 px-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-black/5 z-[9999]"
          role="dialog"
          aria-label="Mobile menu"
        >
          <nav className="flex flex-col gap-1">
            <Link
              href="/services"
              className="font-['Manrope'] font-medium text-[16px] text-black py-3 px-4 rounded-lg hover:bg-black/5 transition"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              className="font-['Manrope'] font-medium text-[16px] text-black py-3 px-4 rounded-lg hover:bg-black/5 transition"
              onClick={() => setMenuOpen(false)}
            >
              Case Studies
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
