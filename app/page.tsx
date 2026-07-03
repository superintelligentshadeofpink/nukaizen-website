'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  ChevronDown,
  Code2,
  Compass,
  Cpu,
  Lightbulb,
  MessagesSquare,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import TiltCard from '@/components/TiltCard';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';

const HEADLINE_WORDS = ['The', 'experienced', 'tech', 'team', 'that', 'understands'];

const STATS = [
  { end: 50, suffix: '+', label: 'Years combined experience' },
  { end: 20, suffix: '+', label: 'Years as business owners' },
  { end: 6, suffix: '', label: 'Core service areas' },
  { end: 100, suffix: '%', label: 'Australian based & owned' },
];

const SERVICES = [
  {
    icon: Code2,
    title: 'Development',
    copy: 'Let us create or update your web or mobile application',
  },
  {
    icon: Bot,
    title: 'AI + Automation',
    copy: "Nukaizen's academic background is a huge asset in an AI world",
  },
  {
    icon: Cpu,
    title: 'IoT and Embedded',
    copy: 'Nukaizen are experts at getting the most from your devices',
  },
  {
    icon: Compass,
    title: 'Fractional CTO',
    copy: 'Allow the experienced Nukaizen team to manage your IT strategy',
  },
];

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* ---------- Hero ---------- */}
      <section className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] sm:pt-[150px] min-h-[92vh] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-8 items-center">
          <div>
            <span className="eyebrow hero-rise" style={{ animationDelay: '80ms' }}>
              <Sparkles className="w-4 h-4" />
              IT consulting · AI · Newcastle, Australia
            </span>

            <h1 className="font-['Outfit'] font-semibold text-[44px] sm:text-[62px] lg:text-[74px] leading-[1.05] tracking-[-2px] mt-5">
              {HEADLINE_WORDS.map((word, i) => (
                <span key={i} className="hero-word text-gradient pr-[0.22em]" style={{ animationDelay: `${160 + i * 90}ms` }}>
                  {word}
                </span>
              ))}
            </h1>

            <p className="hero-rise font-['Manrope'] font-medium text-[16px] sm:text-[18px] text-[#191938]/65 leading-[1.75] max-w-[540px] mt-6" style={{ animationDelay: '820ms' }}>
              Nukaizen makes best-of-breed technology accessible to every business — practical, cost-effective, and jargon-free. Planning, delivery, security and automation: we do it all.
            </p>

            <div className="hero-rise flex flex-col sm:flex-row gap-4 mt-9" style={{ animationDelay: '940ms' }}>
              <a href="#contact" onClick={scrollToContact} className="btn-primary">
                Reach out
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link href="/services" className="btn-ghost">
                Explore services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hero visual: blob-masked image + floating glass chips */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[580px]">
            {/* Glow + spinning dashed ring */}
            <div className="absolute inset-[8%] bg-gradient-to-br from-[#c05aff]/40 to-[#4d73f8]/40 blur-[60px] anim-blob" aria-hidden />
            <div className="absolute bottom-8 -left-3 w-4 h-4 rounded-full bg-gradient-to-br from-[#c05aff] to-[#4d73f8] anim-float" aria-hidden />

            <Reveal direction="scale" className="absolute inset-0">
              <div className="anim-blob relative w-full h-full overflow-hidden shadow-[0_40px_90px_-30px_rgba(77,90,248,0.5)]">
                <Image src="/images/server-racks.png" alt="Server racks glowing with purple and blue light" fill priority sizes="(max-width: 1024px) 100vw, 520px" className="object-cover object-[62%_center]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4d73f8]/25 via-transparent to-[#c05aff]/15" />
              </div>
            </Reveal>

            {/* Floating glass chips */}
            <div className="anim-float absolute top-[6%] -left-2 sm:-left-8 glass-strong rounded-2xl px-5 py-4 flex items-center gap-3 max-w-[250px]">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#c05aff] to-[#4d73f8] flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-['Manrope'] font-bold text-[13px] text-[#191938] leading-tight">More than IT services</p>
                <p className="font-['Manrope'] font-medium text-[11.5px] text-[#191938]/60 leading-snug mt-0.5">Prepare for the future with expert consultants</p>
              </div>
            </div>

            <div className="anim-float absolute bottom-[22%] -right-2 sm:-right-6 glass-strong rounded-2xl px-5 py-4 flex items-center gap-3 max-w-[250px] [animation-delay:-2s]">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#4d73f8] to-[#c05aff] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-['Manrope'] font-bold text-[13px] text-[#191938] leading-tight">One-stop tech provider</p>
                <p className="font-['Manrope'] font-medium text-[11.5px] text-[#191938]/60 leading-snug mt-0.5">Planning, delivery, security &amp; automation</p>
              </div>
            </div>

            <div className="anim-float absolute bottom-[2%] left-[10%] glass-strong rounded-2xl px-5 py-4 flex items-center gap-3 max-w-[250px] [animation-delay:-4s]">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#950aff] to-[#4d73f8] flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-['Manrope'] font-bold text-[13px] text-[#191938] leading-tight">Keep up with innovation</p>
                <p className="font-['Manrope'] font-medium text-[11.5px] text-[#191938]/60 leading-snug mt-0.5">Cutting-edge tech, accessible to all</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden sm:flex justify-center mt-14 pb-4">
          <a href="#stats" className="anim-bob text-[#7a5cf0]/70 hover:text-[#7a5cf0] transition" aria-label="Scroll to content">
            <ChevronDown className="w-7 h-7" />
          </a>
        </div>
      </section>

      {/* ---------- Stats band ---------- */}
      <section id="stats" className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[40px] sm:pt-[60px]">
        <Reveal>
          <div className="glass rounded-[32px] px-6 sm:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p className="font-['Outfit'] font-semibold text-[40px] sm:text-[52px] leading-none text-gradient">
                  <CountUp end={stat.end} suffix={stat.suffix} duration={1600 + i * 200} />
                </p>
                <p className="font-['Manrope'] font-semibold text-[13px] sm:text-[14px] text-[#191938]/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ---------- Strategy partner ---------- */}
      <section className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] sm:pt-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal direction="left">
            <span className="eyebrow">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] rounded-full" />
              Why Nukaizen
            </span>
            <h2 className="font-['Outfit'] font-semibold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.1] tracking-[-1.5px] text-gradient mt-3 mb-6">
              A partner to supercharge your IT strategy
            </h2>
            <p className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] text-[#191938]/65 leading-[1.8] mb-8">
              Nukaizen is on a mission to make best of breed technology accessible to every business by helping clients understand how to take advantage of the latest advancements in a practical and cost effective way.
            </p>

            <div className="glass rounded-3xl p-6 sm:p-7 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-[#c05aff] to-[#4d73f8] flex items-center justify-center">
                  <MessagesSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-['Manrope'] font-bold text-[18px] text-[#191938] uppercase tracking-wide">Cut through jargon</h3>
                  <p className="font-['Manrope'] font-medium text-[14.5px] text-[#191938]/65 leading-[1.7] mt-1.5">
                    We help you use the latest innovations to achieve real wins for your business.
                  </p>
                </div>
              </div>
            </div>

            <a href="#contact" onClick={scrollToContact} className="btn-primary mt-8 inline-flex">
              Reach out
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#c05aff]/25 to-[#4d73f8]/25 rounded-[44px] blur-2xl" aria-hidden />
              <div className="relative rounded-[36px] overflow-hidden shadow-[0_30px_70px_-25px_rgba(77,90,248,0.45)] card-hover">
                <Image src="/images/farm.png" alt="Smart farm technology in action" width={620} height={420} className="w-full h-auto object-cover" />
              </div>
              <div className="anim-float absolute -bottom-6 -left-4 sm:-left-8 glass-strong rounded-2xl px-6 py-4">
                <p className="font-['Outfit'] font-semibold text-[30px] leading-none text-gradient">
                  <CountUp end={50} suffix="+" /> years
                </p>
                <p className="font-['Manrope'] font-semibold text-[13px] text-[#191938]/60 mt-1">Combined experience</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Video showcase ---------- */}
      <section className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] sm:pt-[140px]">
        <Reveal direction="scale">
          <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-[0_40px_90px_-30px_rgba(77,90,248,0.5)]">
            <video ref={videoRef} src="/video/nukaizen.mp4" playsInline controls={isPlaying} onEnded={handleVideoEnded} className="w-full aspect-video object-cover" />
            {!isPlaying && <div className="absolute inset-0 bg-gradient-to-br from-[#c05aff]/70 to-[#4d73f8]/70 backdrop-blur-[6px]" />}
            <div className={`absolute inset-0 flex flex-col justify-center items-center px-6 text-center transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <h2 className="font-['Outfit'] font-semibold text-[30px] sm:text-[48px] lg:text-[58px] text-white tracking-[-1.5px] mb-4">
                Exceptional IT Services
              </h2>
              <p className="hidden sm:block font-['Manrope'] font-medium text-[15px] sm:text-[16px] text-white/85 leading-[1.8] max-w-[760px] mb-8">
                We bring cutting-edge technology to businesses of all sizes, offering customised IT solutions that drive growth and efficiency. Our expert team delivers top-tier service and support, ensuring your business stays ahead.
              </p>
              <button onClick={handlePlayClick} className="group relative w-[86px] h-[86px] sm:w-[104px] sm:h-[104px]" aria-label="Play video">
                <span className="absolute inset-0 rounded-full bg-white/30" style={{ animation: 'ring-pulse 2.2s ease-out infinite' }} aria-hidden />
                <span className="absolute inset-0 rounded-full bg-white/30" style={{ animation: 'ring-pulse 2.2s ease-out 1.1s infinite' }} aria-hidden />
                <span className="relative flex w-full h-full rounded-full bg-white/25 backdrop-blur items-center justify-center group-hover:bg-white/40 group-hover:scale-105 transition-all duration-300">
                  <Play className="w-9 h-9 text-white fill-white ml-1" />
                </span>
              </button>
              <p className="font-['Manrope'] font-bold text-[15px] sm:text-[17px] text-white uppercase tracking-[0.2em] mt-6">Watch now</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Services ---------- */}
      <section id="services" className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] sm:pt-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
          <Reveal direction="left" className="lg:sticky lg:top-[120px]">
            <span className="eyebrow">
              <span className="w-8 h-[2px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] rounded-full" />
              What we do
            </span>
            <h2 className="font-['Outfit'] font-semibold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.1] tracking-[-1.5px] text-gradient mt-3 mb-6">
              Your complete IT solution provider
            </h2>
            <p className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] text-[#191938]/65 leading-[1.8] mb-8">
              Nukaizen offers a comprehensive suite of IT services, covering everything from strategic planning to seamless solution deployment. Whether you need expert guidance or complete project execution, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary">
                Our services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#contact" onClick={scrollToContact} className="btn-ghost">
                Contact us
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={i * 100} className={i % 2 === 1 ? 'sm:mt-10' : ''}>
                  <TiltCard className="rounded-3xl">
                    <div className="glass rounded-3xl p-7 sm:p-8 min-h-[230px] group cursor-default">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c05aff] to-[#4d73f8] flex items-center justify-center mb-5 group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_10px_24px_-8px_rgba(149,10,255,0.5)]">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-['Manrope'] font-bold text-[20px] sm:text-[22px] text-[#191938] mb-2">{service.title}</h3>
                      <p className="font-['Manrope'] font-medium text-[14.5px] text-[#191938]/65 leading-[1.7]">{service.copy}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Enterprise for any size ---------- */}
      <section className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] sm:pt-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-center">
          <Reveal direction="left" className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#4d73f8]/25 to-[#c05aff]/25 rounded-[48px] blur-2xl" aria-hidden />
              <div className="anim-blob relative overflow-hidden shadow-[0_40px_90px_-30px_rgba(149,10,255,0.5)] [animation-delay:-7s]">
                <Image src="/images/robot-worker.png" alt="Robot worker at a desk" width={600} height={780} className="w-full h-auto object-cover" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] rounded-full" />
                Enterprise quality
              </span>
              <h2 className="font-['Outfit'] font-semibold text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.1] tracking-[-1.5px] text-gradient mt-3 mb-6">
                Cutting-edge IT for any size business
              </h2>
              <p className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] text-[#191938]/65 leading-[1.9] mb-8">
                Nukaizen leverages years of experience in corporate IT to deliver enterprise-quality solutions tailored for small businesses. We bring expertise in planning, security, and automation, ensuring your business benefits from cutting-edge technology without the complexity. You can be assured the team at Nukaizen will position your business to take advantage of the technical golden age.
              </p>

              <h3 className="font-['Manrope'] font-bold text-[20px] sm:text-[24px] text-[#191938] uppercase tracking-wide mb-4">The best of many worlds</h3>
              <p className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] text-[#191938]/65 leading-[1.9] mb-10">
                With Nukaizen you get Australian-based, senior IT professionals with extensive technical and management experience in both corporate and startup environments. Our strong ties to the University of Newcastle makes Nukaizen the perfect choice to deliver AI solutions tailored to your needs.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Reveal delay={100}>
                <div className="glass rounded-3xl p-6 sm:p-7 h-full card-hover">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c05aff] to-[#4d73f8] flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-['Manrope'] font-bold text-[17px] text-[#191938] uppercase tracking-wide mb-2">Tech meets business</h4>
                  <p className="font-['Manrope'] font-medium text-[14px] text-[#191938]/65 leading-[1.7]">
                    The Nukaizen team have been business owners themselves for over 20 years
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <a
                  href="https://architecture.nukaizen.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full rounded-3xl p-6 sm:p-7 overflow-hidden bg-gradient-to-br from-[#c05aff] to-[#4d73f8] shadow-[0_20px_50px_-15px_rgba(149,10,255,0.6)] card-hover"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/15 group-hover:scale-150 transition-transform duration-700" aria-hidden />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-['Outfit'] font-semibold text-[34px] text-white leading-none">Try us</h4>
                      <ArrowUpRight className="w-7 h-7 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                    <p className="font-['Manrope'] font-semibold text-[15px] text-white/90 leading-[1.6]">Get your free AI consultation</p>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section id="about" className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[100px] sm:pt-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] rounded-full" />
                The team
              </span>
              <h2 className="font-['Outfit'] font-semibold text-[34px] sm:text-[46px] lg:text-[54px] tracking-[-1.5px] text-gradient mt-3 mb-10">
                Who are we?
              </h2>
            </Reveal>

            <Reveal direction="scale" delay={120}>
              <div className="relative h-[340px] sm:h-[420px] max-w-[440px]">
                <div className="absolute top-0 left-0 w-[62%] rounded-[28px] overflow-hidden shadow-[0_24px_60px_-20px_rgba(77,90,248,0.5)] rotate-[-3deg] hover:rotate-0 hover:z-20 hover:scale-[1.03] transition-all duration-500 z-10">
                  <Image src="/images/Mark.png" alt="Dr. Mark Wallis" width={274} height={349} className="w-full h-auto object-cover" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#191938]/80 to-transparent px-4 py-3">
                    <p className="font-['Manrope'] font-bold text-white text-[14px]">Dr. Mark Wallis</p>
                    <p className="font-['Manrope'] font-medium text-white/70 text-[11.5px]">Computer scientist · PhD</p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-[62%] rounded-[28px] overflow-hidden shadow-[0_24px_60px_-20px_rgba(149,10,255,0.5)] rotate-[3deg] hover:rotate-0 hover:z-20 hover:scale-[1.03] transition-all duration-500">
                  <Image src="/images/Sarah.png" alt="Sarah Wallis" width={274} height={349} className="w-full h-auto object-cover" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#191938]/80 to-transparent px-4 py-3">
                    <p className="font-['Manrope'] font-bold text-white text-[14px]">Sarah Wallis</p>
                    <p className="font-['Manrope'] font-medium text-white/70 text-[11.5px]">IT leader · Delivery expert</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={150}>
            <div className="space-y-6">
              <div className="glass rounded-3xl p-7 sm:p-8 card-hover">
                <p className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] text-[#191938]/70 leading-[1.85]">
                  <strong className="font-bold text-[#191938]">Dr. Mark Wallis</strong> is a computer scientist and software engineer who specialises in software architectures, cyber security, compliance and education. With over 25 years of experience in I.T., Mark has held senior leadership and C-suite roles across various FinTech, Open Banking and Managed Services companies. Mark holds a PhD in distributed component-based systems and lectures courses such as Enterprise Software Architectures and Distributed Computing.
                </p>
              </div>
              <div className="glass rounded-3xl p-7 sm:p-8 card-hover">
                <p className="font-['Manrope'] font-medium text-[15px] sm:text-[16px] text-[#191938]/70 leading-[1.85]">
                  <strong className="font-bold text-[#191938]">Sarah Wallis</strong> is a seasoned IT leader with over 25 years experience implementing technical solutions for organisations in both corporate and start-up environments. With a background in the heavily regulated industries of banking and insurance she has first-hand knowledge of the IT regulation requirements for large enterprises. Having also worked as a project manager on enterprise level change initiatives Sarah has a track record of delivering large scale change securely and successfully.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <Testimonials />

      {/* ---------- Contact ---------- */}
      <ContactSection />
    </div>
  );
}
