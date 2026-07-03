'use client';

import Image from 'next/image';
import { CheckCircle2, Heart, Lightbulb, Quote, Sparkles, Target, TrendingUp } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ContactSection from '@/components/ContactSection';

const SOLUTION_ITEMS = [
  {
    title: 'Platform Architecture & Development',
    copy: 'Built a secure, scalable web application capable of handling sensitive personal, legal, and financial information',
  },
  {
    title: 'User Experience Design',
    copy: 'Created an approachable, empathetic interface that makes a difficult topic feel manageable',
  },
  {
    title: 'Security & Compliance',
    copy: 'Implemented robust data protection measures appropriate for storing legal documents and confidential information',
  },
  {
    title: 'Feature Integration',
    copy: 'Implemented comprehensive modules covering five key planning areas — Financial, Legal, Health, Personal, and Memorial',
  },
  {
    title: 'Launch Strategy',
    copy: 'Provided ongoing technical guidance to ensure a smooth market entry',
  },
];

const IMPACT_ITEMS = [
  'Free comprehensive planning tools accessible to all Australians',
  'Secure documentation across five critical life areas',
  'An "Amigos Network" feature that ensures the right people have access when needed',
  'Resources and guidance that make complex legal and financial decisions clearer',
];

const TECH_HIGHLIGHTS = [
  'Modern web application architecture',
  'Secure document storage and management',
  'Responsive design for desktop and mobile',
  'User authentication and access controls',
  'Email notification systems',
  'Scalable infrastructure for growth',
];

export default function CaseStudiesPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* ---------- Hero ---------- */}
      <section className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] sm:pt-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="eyebrow hero-rise" style={{ animationDelay: '80ms' }}>
              <Sparkles className="w-4 h-4" />
              Case study · Adios
            </span>
            <h1 className="hero-rise font-['Outfit'] font-semibold text-[38px] sm:text-[52px] lg:text-[58px] leading-[1.08] tracking-[-1.8px] text-gradient mt-4" style={{ animationDelay: '200ms' }}>
              Adios: End-of-Life Planning Platform
            </h1>

            <div className="hero-rise mt-8" style={{ animationDelay: '380ms' }}>
              <h2 className="font-['Manrope'] font-bold text-[22px] sm:text-[26px] text-[#191938] mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c05aff] to-[#4d73f8] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </span>
                Client Overview
              </h2>
              <p className="font-['Manrope'] font-medium text-[15.5px] sm:text-[17px] text-[#191938]/70 leading-[1.8]">
                Adios is an innovative online platform that helps Australians take control of their end-of-life planning. By providing a comprehensive, user-friendly space to document everything from legal requirements and financial details to personal wishes and memorial preferences, Adios ensures that families have easy access to everything they need during one of life&apos;s most difficult moments.
              </p>
            </div>
          </div>

          <Reveal direction="scale" delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#c05aff]/25 to-[#4d73f8]/25 rounded-[48px] blur-2xl" aria-hidden />
              <div className="relative rounded-[36px] overflow-hidden shadow-[0_40px_90px_-30px_rgba(77,90,248,0.5)] card-hover">
                <Image src="/images/sxsw.png" alt="Adios presenting at SXSW" width={736} height={560} priority className="w-full h-auto object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Challenge ---------- */}
      <section className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-[90px] sm:pt-[120px]">
        <Reveal>
          <h2 className="font-['Manrope'] font-bold text-[26px] sm:text-[32px] text-[#191938] mb-6 flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#c05aff] to-[#4d73f8] flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-white" />
            </span>
            The Challenge
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass rounded-[28px] p-7 sm:p-10 space-y-5">
            <p className="font-['Manrope'] font-medium text-[15.5px] sm:text-[16.5px] text-[#191938]/70 leading-[1.85]">
              Founder Nook O&apos;Dea understood the overwhelming burden families face when a loved one passes away — she&apos;d experienced it firsthand. With only 48% of Australians having a Will, families are often left navigating legal battles, financial confusion, and difficult decisions at their most vulnerable time.
            </p>
            <p className="font-['Manrope'] font-medium text-[15.5px] sm:text-[16.5px] text-[#191938]/70 leading-[1.85]">
              Nook had a clear vision: create a platform that would spare families this burden by making end-of-life planning accessible, comprehensive, and straightforward. But turning that vision into a fully functioning digital solution required technical expertise across multiple domains — secure data storage, intuitive user experience, legal document management, and scalable infrastructure.
            </p>
            <p className="font-['Manrope'] font-medium text-[15.5px] sm:text-[16.5px] text-[#191938]/70 leading-[1.85]">
              She needed a technology partner who could not only build the platform but truly understand the sensitive nature of the mission and work collaboratively to bring it to life.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- Solution ---------- */}
      <section className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-[80px] sm:pt-[100px]">
        <Reveal>
          <h2 className="font-['Manrope'] font-bold text-[26px] sm:text-[32px] text-[#191938] mb-3 flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#c05aff] to-[#4d73f8] flex items-center justify-center shrink-0">
              <Lightbulb className="w-5 h-5 text-white" />
            </span>
            The Solution
          </h2>
          <p className="font-['Manrope'] font-medium text-[15.5px] sm:text-[16.5px] text-[#191938]/70 leading-[1.85] mb-8">
            Nukaizen partnered with Nook from concept to launch, serving as her technical co-pilot throughout the entire journey. Our team took responsibility for:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SOLUTION_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className={i === SOLUTION_ITEMS.length - 1 ? 'sm:col-span-2' : ''}>
              <div className="glass rounded-3xl p-6 sm:p-7 h-full card-hover">
                <div className="flex items-start gap-4">
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-[#c05aff]/15 to-[#4d73f8]/15 flex items-center justify-center font-['Outfit'] font-semibold text-gradient text-[16px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-['Manrope'] font-bold text-[16.5px] text-[#191938] mb-1.5">{item.title}</h3>
                    <p className="font-['Manrope'] font-medium text-[14px] text-[#191938]/65 leading-[1.7]">{item.copy}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="font-['Manrope'] font-medium text-[15.5px] sm:text-[16.5px] text-[#191938]/70 leading-[1.85] mt-8">
            Rather than simply delivering code to specifications, Nukaizen became a true partner in the Adios journey — adapting to evolving requirements, providing strategic technical advice, and maintaining the collaborative relationship needed for a mission-driven startup.
          </p>
        </Reveal>
      </section>

      {/* ---------- Impact ---------- */}
      <section className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-[80px] sm:pt-[100px]">
        <Reveal>
          <h2 className="font-['Manrope'] font-bold text-[26px] sm:text-[32px] text-[#191938] mb-3 flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#c05aff] to-[#4d73f8] flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </span>
            The Impact
          </h2>
          <p className="font-['Manrope'] font-medium text-[15.5px] sm:text-[16.5px] text-[#191938]/70 leading-[1.85] mb-8">
            Today, Adios.au is a fully operational platform helping Australians prepare for life&apos;s inevitable transition with dignity and peace of mind. The platform offers:
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {IMPACT_ITEMS.map((item, i) => (
            <Reveal key={item} delay={i * 90}>
              <div className="flex items-start gap-3 glass rounded-2xl px-5 py-4 h-full card-hover">
                <CheckCircle2 className="w-5 h-5 text-[#7a3ff5] shrink-0 mt-0.5" />
                <p className="font-['Manrope'] font-semibold text-[14.5px] text-[#191938]/80 leading-[1.6]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="font-['Manrope'] font-medium text-[15.5px] sm:text-[16.5px] text-[#191938]/70 leading-[1.85] mt-8">
            Most importantly, Adios is fulfilling its mission: reducing the emotional and administrative burden on grieving families while empowering individuals to take control of their legacy.
          </p>
        </Reveal>
      </section>

      {/* ---------- Client quote ---------- */}
      <section className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-[90px] sm:pt-[120px]">
        <Reveal direction="scale">
          <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-[#a94df8] via-[#7a5cf0] to-[#4d73f8] px-8 sm:px-14 py-12 sm:py-16 shadow-[0_30px_70px_-25px_rgba(122,63,245,0.6)]">
            <div className="absolute -top-14 -right-8 w-52 h-52 rounded-full bg-white/10" aria-hidden />
            <div className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-white/10" aria-hidden />
            <Quote className="relative w-10 h-10 text-white/60 fill-white/60 mb-6" />
            <p className="relative font-['Manrope'] font-medium text-[17px] sm:text-[20px] text-white leading-[1.8] mb-6">
              &ldquo;Nukaizen have been a true partner in the Adios journey. They didn&apos;t just build what we asked for — they helped us think through what we needed, challenged our assumptions when necessary, and remained committed to bringing our vision to life.&rdquo;
            </p>
            <p className="relative font-['Manrope'] font-bold text-[15px] sm:text-[16px] text-white/90">— Nook O&apos;Dea, Founder, Adios</p>
          </div>
        </Reveal>
      </section>

      {/* ---------- Tech highlights + video ---------- */}
      <section className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-[90px] sm:pt-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center">
          <Reveal direction="left">
            <h2 className="font-['Manrope'] font-bold text-[26px] sm:text-[32px] text-[#191938] mb-6">Technology Highlights</h2>
            <ul className="space-y-3">
              {TECH_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#c05aff] to-[#4d73f8] shrink-0" />
                  <span className="font-['Manrope'] font-semibold text-[15px] sm:text-[16px] text-[#191938]/75">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_70px_-25px_rgba(77,90,248,0.5)]">
              <video src="/video/adios.mp4" controls className="w-full aspect-video object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
