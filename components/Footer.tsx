import Link from 'next/link';

/** Shared site footer. */
export default function Footer() {
  return (
    <footer className="relative z-10 mt-4">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#a94df8] via-[#7a5cf0] to-[#4d73f8] px-8 sm:px-12 py-10 sm:py-12 shadow-[0_24px_60px_-20px_rgba(122,63,245,0.55)]">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-white/10 blur-sm" aria-hidden />
          <div className="absolute -bottom-24 -left-8 w-64 h-64 rounded-full bg-white/10" aria-hidden />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="font-['Outfit'] font-medium text-[28px] text-white">
                Nuk<span className="text-[#ffd7fe]">ai</span>zen
              </p>
              <p className="font-['Manrope'] font-medium text-[13px] text-white/70 mt-1">
                Enterprise-quality technology for every business · Newcastle, Australia
              </p>
            </div>

            <nav className="flex items-center gap-6" aria-label="Footer">
              <Link href="/services" className="font-['Manrope'] font-semibold text-[14px] text-white/85 hover:text-white transition">
                Services
              </Link>
              <Link href="/case-studies" className="font-['Manrope'] font-semibold text-[14px] text-white/85 hover:text-white transition">
                Case Studies
              </Link>
              <a
                href="https://www.linkedin.com/company/nukaizen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nukaizen on LinkedIn"
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition hover:scale-110"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </nav>
          </div>

          <div className="relative border-t border-white/20 mt-8 pt-6 text-center">
            <p className="font-['Manrope'] font-medium text-[13px] text-white/70">&copy; {new Date().getFullYear()} Nukaizen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
