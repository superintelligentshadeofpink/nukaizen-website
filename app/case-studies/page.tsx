'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function CaseStudiesPage() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<null | { ok: boolean; error?: string }>(null);
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Case Studies Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[200px] max-w-[1920px] pb-[60px] sm:pb-[80px] lg:pb-[120px] pt-[30px] sm:pt-[50px]">
        <div className="flex flex-col lg:flex-row align-start gap-8 lg:gap-16 justify-between">
          
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[736px]">

                {/* Header Section */}
                <header className="relative z-10 mb-[40px] sm:mb-[60px] lg:mb-[80px]">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-[50px] lg:gap-[100px] items-center sm:items-start">
                        {/* Logo */}
                        <Link href="/" className="font-['Outfit'] font-medium text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[36px] text-black hover:opacity-80 transition">
                        Nuk<span className="text-[#950aff]">ai</span>zen
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden md:flex gap-8 sm:gap-[40px] lg:gap-[72px] items-center justify-center h-[58px]">
                        <Link href="/services" className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black">Services</Link>
                        <Link href="/case-studies" className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black">Case Studies</Link>
                        </nav>
                    </div>
                </header>

                <h2 className="font-['outfit'] font-medium text-[40px] sm:text-[50px] lg:text-[60px] xl:text-[80px] leading-[1.1] sm:leading-[1.1] lg:leading-[1.1] xl:leading-[90px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] xl:tracking-[-2.35px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-[40px] sm:mb-[60px] lg:mb-[80px]">
                    Adios: End-of-Life Planning Platform
                </h2>

                {/* Client Overview Section */}
                <h2 className="font-['Manrope'] font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-black mb-[20px] sm:mb-[30px] lg:mb-[40px]">
                Client Overview
                </h2>
                <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7]">
                Adios is an innovative online platform that helps Australians take control of their end-of-life planning. By providing a comprehensive, user-friendly space to document everything from legal requirements and financial details to personal wishes and memorial preferences, Adios ensures that families have easy access to everything they need during one of life&apos;s most difficult moments.
                </p>
            </div>
            <div className="relative w-full lg:w-[736px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[772px] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden shadow-2xl mt-8 lg:mt-0">
            <Image
                src="/images/sxsw.png" 
                alt="Adios Hero" 
                fill
                className="object-cover"
                priority
            />
            </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[200px] max-w-[1920px] pb-[60px] sm:pb-[80px] lg:pb-[120px]">
        <h2 className="font-['Manrope'] font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-black mb-[20px] sm:mb-[30px] lg:mb-[40px]">
          The Challenge
        </h2>
        <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7] mb-[20px] sm:mb-[30px] lg:mb-[40px]">
          Founder Nook O&apos;Dea understood the overwhelming burden families face when a loved one passes away—she&apos;d experienced it firsthand. With only 48% of Australians having a Will, families are often left navigating legal battles, financial confusion, and difficult decisions at their most vulnerable time.
        </p>
        <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7]">
          Nook had a clear vision: create a platform that would spare families this burden by making end-of-life planning accessible, comprehensive, and straightforward. But turning that vision into a fully functioning digital solution required technical expertise across multiple domains—secure data storage, intuitive user experience, legal document management, and scalable infrastructure.
        </p>
        <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7] mt-[20px] sm:mt-[30px] lg:mt-[40px]">
          She needed a technology partner who could not only build the platform but truly understand the sensitive nature of the mission and work collaboratively to bring it to life.
        </p>
      </section>

      {/* The Solution Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[200px] max-w-[1920px] pb-[60px] sm:pb-[80px] lg:pb-[120px]">
        <h2 className="font-['Manrope'] font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-black mb-[20px] sm:mb-[30px] lg:mb-[40px]">
          The Solution
        </h2>
        <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7] mb-[20px] sm:mb-[30px] lg:mb-[40px]">
          Nukaizen partnered with Nook from concept to launch, serving as her technical co-pilot throughout the entire journey. Our team took responsibility for:
        </p>
        <ul className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7] list-disc list-inside space-y-[12px] sm:space-y-[16px] mb-[20px] sm:mb-[30px] lg:mb-[40px] ml-4">
          <li><strong>Platform Architecture & Development:</strong> Built a secure, scalable web application capable of handling sensitive personal, legal, and financial information</li>
          <li><strong>User Experience Design:</strong> Created an approachable, empathetic interface that makes a difficult topic feel manageable</li>
          <li><strong>Security & Compliance:</strong> Implemented robust data protection measures appropriate for storing legal documents and confidential information</li>
          <li><strong>Feature Integration:</strong> Implemented comprehensive modules covering five key planning areas—Financial, Legal, Health, Personal, and Memorial</li>
          <li><strong>Launch Strategy:</strong> Provided ongoing technical guidance to ensure a smooth market entry</li>
        </ul>
        <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7]">
          Rather than simply delivering code to specifications, Nukaizen became a true partner in the Adios journey—adapting to evolving requirements, providing strategic technical advice, and maintaining the collaborative relationship needed for a mission-driven startup.
        </p>
      </section>

      {/* The Impact Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[200px] max-w-[1920px] pb-[60px] sm:pb-[80px] lg:pb-[120px]">
        <h2 className="font-['Manrope'] font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-black mb-[20px] sm:mb-[30px] lg:mb-[40px]">
          The Impact
        </h2>
        <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7] mb-[20px] sm:mb-[30px] lg:mb-[40px]">
          Today, Adios.au is a fully operational platform helping Australians prepare for life&apos;s inevitable transition with dignity and peace of mind. The platform offers:
        </p>
        <ul className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7] list-disc list-inside space-y-[12px] sm:space-y-[16px] mb-[20px] sm:mb-[30px] lg:mb-[40px] ml-4">
          <li>Free comprehensive planning tools accessible to all Australians</li>
          <li>Secure documentation across five critical life areas</li>
          <li>An &quot;Amigos Network&quot; feature that ensures the right people have access when needed</li>
          <li>Resources and guidance that make complex legal and financial decisions clearer</li>
        </ul>
        <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7]">
          Most importantly, Adios is fulfilling its mission: reducing the emotional and administrative burden on grieving families while empowering individuals to take control of their legacy.
        </p>
      </section>

      {/* Client Perspective Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[200px] max-w-[1920px] pb-[60px] sm:pb-[80px] lg:pb-[120px]">
        <h2 className="font-['Manrope'] font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-black mb-[20px] sm:mb-[30px] lg:mb-[40px]">
          Client Perspective
        </h2>
        <div className="bg-white bg-opacity-30 rounded-[30px] sm:rounded-[40px] lg:rounded-[51px] p-[24px] sm:px-[60px] lg:px-[150px] py-[40px] sm:py-[60px] lg:py-[80px]">
          <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.8] mb-6 lg:mb-8 italic">
            &quot;Nukaizen have been a true partner in the Adios journey. They didn&apos;t just build what we asked for—they helped us think through what we needed, challenged our assumptions when necessary, and remained committed to bringing our vision to life.&quot;
          </p>
          <p className="font-['Manrope'] font-semibold text-[16px] sm:text-[18px] lg:text-[20px] text-black">
            — Nook O&apos;Dea, Founder, Adios
          </p>
        </div>
      </section>

      {/* Technology Highlights Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[200px] max-w-[1920px] pb-[60px] sm:pb-[80px] lg:pb-[120px] pt-[60px] sm:pt-[80px]">
        <div className="flex flex-col lg:flex-row align-start gap-8 lg:gap-16 justify-between">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[736px]">
            <h2 className="font-['Manrope'] font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-black mb-[20px] sm:mb-[30px] lg:mb-[40px]">
              Technology Highlights
            </h2>
            <ul className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7] list-disc list-inside space-y-[12px] sm:space-y-[16px] ml-4">
              <li>Modern web application architecture</li>
              <li>Secure document storage and management</li>
              <li>Responsive design for desktop and mobile</li>
              <li>User authentication and access controls</li>
              <li>Email notification systems</li>
              <li>Scalable infrastructure for growth</li>
            </ul>
          </div>

          {/* Right Column - Video */}
          <div className="relative w-full lg:w-[736px] h-[300px] sm:h-[400px] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden shadow-2xl">
            <video 
              src="/video/adios.mp4" 
              controls
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 mt-[80px]">
        <div className="bg-white bg-opacity-30 py-[60px] sm:py-[80px] lg:py-[119px]">
          <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <h2 className="font-['Manrope'] font-bold text-[36px] sm:text-[50px] lg:text-[76px] leading-[1.2] tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.5px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-4" style={{wordSpacing: '5px'}}>
                  Contact Us
                </h2>
                <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black/70 leading-[1.4] mb-6 lg:mb-8">
                  Interested in working together?<br />
                  Please send us your details and we will be in touch shortly.
                </p>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitResult(null);
                    try {
                      const res = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name: contactName, email: contactEmail, message: contactMessage }),
                      });
                      if (res.ok) {
                        setSubmitResult({ ok: true });
                        setContactName('');
                        setContactEmail('');
                        setContactMessage('');
                      } else {
                        const data = await res.json().catch(() => ({}));
                        setSubmitResult({ ok: false, error: data?.error || 'Failed to send message' });
                      }
                    } catch (err) {
                      setSubmitResult({ ok: false, error: 'Network error' });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="space-y-4 sm:space-y-6"
                >
                  <input
                    type="text"
                    placeholder="Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    className="w-full px-[16px] py-[14px] sm:py-[16px] border-[1.5px] border-[#c05aff] rounded-[10px] bg-transparent font-['Manrope'] font-medium text-[16px] sm:text-[18px] text-black placeholder:text-[#6b7083] focus:outline-none focus:ring-2 focus:ring-[#c05aff] focus:border-transparent transition"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                    className="w-full px-[16px] py-[14px] sm:py-[16px] border-[1.5px] border-[#c05aff] rounded-[10px] bg-transparent font-['Manrope'] font-medium text-[16px] sm:text-[18px] text-black placeholder:text-[#6b7083] focus:outline-none focus:ring-2 focus:ring-[#c05aff] focus:border-transparent transition"
                  />
                  <textarea
                    placeholder="Message"
                    rows={6}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    required
                    className="w-full px-[16px] py-[14px] sm:py-[16px] border-[1.5px] border-[#c05aff] rounded-[10px] bg-transparent font-['Manrope'] font-medium text-[16px] sm:text-[18px] text-black placeholder:text-[#6b7083] focus:outline-none focus:ring-2 focus:ring-[#c05aff] focus:border-transparent resize-none transition min-h-[180px] sm:h-[210px]"
                  />
                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-b from-[#c05aff] to-[#4d73f8] text-white px-[24px] sm:px-[26px] py-[14px] sm:py-[16px] rounded-[10px] font-['Manrope'] font-semibold text-[16px] sm:text-[18px] hover:opacity-90 hover:shadow-lg transform hover:scale-[1.02] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Sending…' : 'Submit'}
                    </button>
                    {submitResult?.ok && (
                      <span className="text-green-700 font-['Manrope'] text-sm sm:text-base">Thanks! We'll be in touch shortly.</span>
                    )}
                    {submitResult && !submitResult.ok && (
                      <span className="text-red-600 font-['Manrope'] text-sm sm:text-base">{submitResult.error}</span>
                    )}
                  </div>
                </form>
              </div>

              <div className="relative h-[300px] sm:h-[400px] lg:h-[653px] rounded-[30px] overflow-hidden shadow-2xl">
                <img
                  src="/images/robot-contact.png"
                  alt="Robot contact"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-b from-[#c05aff] to-[#4d73f8] py-[24px] sm:py-[30px] lg:py-[35px] mt-0">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-base sm:text-lg font-['Manrope']">&copy; Nukaizen</span>
            </div>

            <a 
              href="https://www.linkedin.com/company/nukaizen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition text-white"
            >
              <svg 
                width="24" 
                height="24"
                className="sm:w-8 sm:h-8 text-white hover:text-blue-400 transition-colors"
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

