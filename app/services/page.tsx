'use client';

import Image from 'next/image';
import { ArrowRight, BarChart3, Bot, Code2, Compass, Cpu, ShieldCheck, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';

const SERVICES = [
  {
    icon: Bot,
    image: '/images/network.png',
    title: 'AI + Automation',
    detail:
      'Nukaizen specializes in AI and automation, creating custom solutions that streamline operations, reduce costs, and boost productivity. From robotic process automation to AI-driven analytics, we transform your business with cutting-edge technology.',
  },
  {
    icon: Code2,
    image: '/images/code.png',
    title: 'Web + Mobile Apps',
    detail:
      'We develop custom web and mobile applications tailored to your business needs. From responsive websites to native iOS and Android apps, our team delivers user-friendly solutions that drive engagement and growth.',
  },
  {
    icon: Cpu,
    image: '/images/dashboard.png',
    title: 'IoT + Embedded',
    detail:
      'Connect your devices and systems with our IoT and embedded solutions. We create connected ecosystems that enable real-time data collection and intelligent automation.',
  },
  {
    icon: Compass,
    image: '/images/handshake.png',
    title: 'Fractional CTO',
    detail:
      'Get senior-level technology leadership without the full-time cost. Our fractional CTO services provide strategic guidance, technical architecture, and team leadership to accelerate your technology initiatives and drive innovation.',
  },
  {
    icon: BarChart3,
    image: '/images/graph.png',
    title: 'BA + Project',
    detail:
      'Our business analysis and project management expertise ensures your technology initiatives deliver real value. We bridge the gap between business requirements and technical solutions, managing complex projects from conception to successful delivery.',
  },
  {
    icon: ShieldCheck,
    image: '/images/locks.png',
    title: 'Cybersecurity',
    detail:
      'Protect your business with comprehensive cybersecurity solutions. We assess vulnerabilities, implement security frameworks, monitor threats, and ensure compliance with industry standards to safeguard your digital assets and maintain business continuity.',
  },
];

const scrollToContact = (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function ServicesPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* ---------- Hero ---------- */}
      <section className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] sm:pt-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="eyebrow hero-rise" style={{ animationDelay: '80ms' }}>
              <Sparkles className="w-4 h-4" />
              What we offer
            </span>
            <h1 className="font-['Outfit'] font-semibold text-[44px] sm:text-[60px] lg:text-[68px] leading-[1.05] tracking-[-2px] mt-4">
              <span className="hero-word text-gradient pr-[0.22em]" style={{ animationDelay: '180ms' }}>Our</span>
              <span className="hero-word text-gradient" style={{ animationDelay: '280ms' }}>Services</span>
            </h1>

            <div className="hero-rise space-y-5 mt-8" style={{ animationDelay: '420ms' }}>
              <p className="font-['Manrope'] font-medium text-[15.5px] sm:text-[17px] text-[#191938]/70 leading-[1.8]">
                Nukaizen&apos;s core services include AI and automation, web and mobile app development, IoT and embedded systems, fractional CTO support, BA and project management, and cybersecurity. But these offerings are just the starting point. Our experienced team is dedicated to understanding your unique business challenges and objectives.
              </p>
              <p className="font-['Manrope'] font-medium text-[15.5px] sm:text-[17px] text-[#191938]/70 leading-[1.8]">
                We provide individualized strategic IT support, crafting solutions that align with your goals and drive success. At Nukaizen, we&apos;re not just offering services; we&apos;re building partnerships to help you achieve your company&apos;s vision.
              </p>
            </div>

            <div className="hero-rise mt-8" style={{ animationDelay: '560ms' }}>
              <a href="#contact" onClick={scrollToContact} className="btn-primary">
                Arrange an introductory meeting
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <Reveal direction="scale" delay={200}>
            <div className="relative h-[340px] sm:h-[440px] lg:h-[540px]">
              <div className="absolute inset-[6%] bg-gradient-to-br from-[#c05aff]/35 to-[#4d73f8]/35 blur-[60px] anim-blob" aria-hidden />
              <div className="anim-blob relative w-full h-full overflow-hidden shadow-[0_40px_90px_-30px_rgba(77,90,248,0.5)] [animation-delay:-5s]">
                <Image src="/images/server-cloud.png" alt="Cloud computing and server infrastructure" fill priority sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4d73f8]/25 via-transparent to-[#c05aff]/15" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Service cards ---------- */}
      <section className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-[90px] sm:pt-[130px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={(i % 3) * 110}>
                <TiltCard className="rounded-[28px] h-full">
                  <div className="group relative glass rounded-[28px] overflow-hidden isolate h-full cursor-default">
                    <div className="relative h-[190px] sm:h-[210px] overflow-hidden">
                      <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#191938]/30 to-transparent" />
                      <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c05aff] to-[#4d73f8] flex items-center justify-center shadow-[0_12px_28px_-8px_rgba(149,10,255,0.6)] group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 z-10">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="px-6 pt-10 pb-7">
                      <h3 className="font-['Manrope'] font-bold text-[21px] sm:text-[23px] text-[#191938] mb-2">{service.title}</h3>
                      <p className="font-['Manrope'] font-medium text-[13px] text-[#7a5cf0]">Hover for details</p>
                    </div>

                    {/* Hover reveal */}
                    <div className="absolute inset-0 rounded-[28px] overflow-hidden flex flex-col justify-center p-7 opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 z-20">
                      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#b158fb]/[0.96] to-[#4d73f8]/[0.96] backdrop-blur-xl" aria-hidden />
                      <div className="relative">
                        <Icon className="w-8 h-8 text-white/90 mb-4" />
                        <h3 className="font-['Manrope'] font-bold text-[21px] text-white mb-3">{service.title}</h3>
                        <p className="font-['Manrope'] font-medium text-[13.5px] sm:text-[14px] text-white/90 leading-[1.7]">{service.detail}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
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
                </div>
                <div className="absolute bottom-0 right-0 w-[62%] rounded-[28px] overflow-hidden shadow-[0_24px_60px_-20px_rgba(149,10,255,0.5)] rotate-[3deg] hover:rotate-0 hover:z-20 hover:scale-[1.03] transition-all duration-500">
                  <Image src="/images/Sarah.png" alt="Sarah Wallis" width={274} height={349} className="w-full h-auto object-cover" />
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

      <Testimonials />
      <ContactSection />
    </div>
  );
}
