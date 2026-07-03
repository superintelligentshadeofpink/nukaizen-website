'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
];

/** Fixed site header: transparent at top, condenses into a glass pill on scroll. */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`mx-auto transition-all duration-500 ${
          scrolled
            ? 'max-w-[1080px] mt-3 rounded-full glass-strong shadow-[0_16px_40px_-16px_rgba(77,90,248,0.35)]'
            : 'max-w-[1240px] mt-0 rounded-none bg-transparent'
        }`}
      >
        <div className={`flex items-center justify-between px-5 sm:px-8 transition-all duration-500 ${scrolled ? 'py-2.5' : 'py-5'}`}>
          <Link href="/" className="group flex items-center gap-2" aria-label="Nukaizen home">
            <span className="font-['Outfit'] font-medium text-[26px] sm:text-[30px] text-[#191938] tracking-[-0.5px]">
              Nuk
              <span className="text-gradient font-semibold group-hover:opacity-80 transition">ai</span>
              zen
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full font-['Manrope'] font-semibold text-[15px] transition-all duration-300 ${
                    active ? 'text-white bg-gradient-to-r from-[#c05aff] to-[#4d73f8] shadow-[0_8px_20px_-6px_rgba(149,10,255,0.5)]' : 'text-[#191938]/75 hover:text-[#191938] hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a href="#contact" onClick={scrollToContact} className="ml-3 btn-primary !px-5 !py-2 text-[14px]">
              Reach out
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-[#191938] hover:opacity-70 transition rounded-lg"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <button type="button" className="md:hidden fixed inset-0 bg-[#191938]/25 backdrop-blur-sm -z-10" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
          <div className="md:hidden mx-4 mt-2 py-4 px-4 glass-strong rounded-3xl" role="dialog" aria-label="Mobile menu">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-['Manrope'] font-semibold text-[16px] py-3 px-4 rounded-2xl transition ${
                      active ? 'text-white bg-gradient-to-r from-[#c05aff] to-[#4d73f8]' : 'text-[#191938] hover:bg-white/70'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a href="#contact" onClick={scrollToContact} className="btn-primary justify-center mt-2">
                Reach out
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
