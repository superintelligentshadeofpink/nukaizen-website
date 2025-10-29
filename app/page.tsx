'use client';

import Image from 'next/image';
import Bullseye from '../components/Bullseye';
import { useRef, useState } from 'react';

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<null | { ok: boolean; error?: string }>(null);

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

  const testimonials = [
    {
      image: "/images/corey.png",
      alt: "Corey Robertson",
      testimonial: "Mark and Sarah have significant technical expertise in software development and business process improvement. I engaged Nukaizen to review and improve my business processes. Their ability to communicate complex concepts clearly and effectively sets them apart. Highly recommended for anyone wanting to improve their business with seamless collaboration.",
      name: "Corey Robertson - CEO at BoomA Food Group"
    },
    {
      image: "/images/phil.png",
      alt: "Phil Couch",
      testimonial: "Business Process and Software Specialists Mark and Sarah have significant technical expertise in software development and business process improvement. I engaged Nukaizen to review and improve my business processes. Their ability to communicate complex concepts clearly and effectively sets them apart. Highly recommended for anyone wanting to improve their business with seamless collaboration.",
      name: "Phil Couch - Director, Newcastle Bushfire Consulting"
    },
    {
      image: "/images/viv.png",
      alt: "Viv Jayachandran",
      testimonial: "Partnering with Nukaizen has provided Jaegersoft with effective strategies and invaluable support in optimising our project and IT management processes, ensuring we operate more efficiently while maintaining a high standard of service delivery. Sarah's expertise in software consulting, process optimisation, and strategic project oversight has helped us streamline workflows, improve resource visibility, and enhance the scalability of our software team. For any organisation looking to improve the efficiency of their software development operations and scale effectively.",
      name: "Viv Jayachandran - Managing Director, Jaegersoft"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-[30px] sm:pt-[50px]">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[851px]">
            {/* Header Section */}
            <header className="relative z-10">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-[50px] lg:gap-[100px] items-center sm:items-start">
                {/* Logo */}
                <h1 className="font-['Outfit'] font-medium text-[28px] sm:text-[32px] lg:text-[36px] text-black">
                  Nuk<span className="text-[#950aff]">ai</span>zen
                </h1>

                {/* Navigation */}
                <nav className="flex gap-8 sm:gap-[40px] lg:gap-[72px] items-center justify-center h-[58px]">
                  <a href="services" className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black">Services</a>
                </nav>
              </div>
            </header>

            <h2 className="font-['Outfit'] font-medium text-[40px] sm:text-[50px] lg:text-[80px] leading-[50px] sm:leading-[60px] lg:leading-[90px] mt-[30px] sm:mt-[50px] lg:mt-[70px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-2.35px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent text-center lg:text-left">
              The experienced tech team that understands
            </h2>

            {/* Laptop Image */}
            <div className="relative h-[250px] sm:h-[340px] lg:h-[502px] w-full max-w-[569px] rounded-[51px] overflow-hidden mt-[40px] sm:mt-[60px] lg:mt-[110px] mx-auto lg:mx-0">
              <Image
                src="/images/laptop.png"
                alt="Laptop with code"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative w-full lg:w-[451px] mt-12 lg:mt-0">
            {/* Server Image */}
            <div className="relative h-[490px] sm:h-[600px] lg:h-[915px] w-full max-w-[451px] mx-auto lg:mx-0 rounded-[51px] overflow-hidden">
              <Image
                src="/images/servers.png"
                alt="Server room"
                fill
                className="object-cover"
              />
            </div>

            {/* Feature Cards */}
            <div className="absolute top-[40px] left-[20px] sm:left-[-150px] lg:left-[-203px] bg-white bg-opacity-30 backdrop-blur-[32px] rounded-[19px] p-[24px] sm:p-[30px] lg:p-[38px] w-[calc(100%-40px)] max-w-[367px] glide-down">
              <div className="flex items-center justify-between">
                <h3 className="font-['Manrope'] font-bold text-[24px] leading-[30px] text-black uppercase mb-4">
                  MORE THAN IT SERVICES
                </h3>
                 <div className="w-[47px] h-[47px] rounded-[12px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center mb-4 mt-[-10px]">
                   <svg width="47" height="47" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="m7 17 10-10"/>
                     <path d="M7 7h10v10"/>
                   </svg>
                 </div>
              </div>
              <p className="font-['Manrope'] font-medium text-[16px] text-black/70 leading-[1.661]">
                Prepare for the future with expert consultants
              </p>
            </div>

            <div className="absolute top-[250px] sm:top-[410px] left-[20px] sm:left-[-350px] lg:left-[-390px] bg-white bg-opacity-30 rounded-[35px] p-[24px] sm:p-[30px] lg:p-[38px] w-[calc(100%-40px)] max-w-[367px] glide-right">
            <div className="flex items-center justify-between">
            <h3 className="font-['Manrope'] font-bold text-[24px] leading-[30px] text-black uppercase mb-4">
                  YOUR ONE-STOP TECH PROVIDER
                </h3>
              <div className="w-[47px] h-[47px] rounded-[12px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center mb-4 mt-[-10px]">
                <svg width="47" height="47" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="6" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="3" strokeWidth="3"/>
                </svg>
              </div>
            </div>
              <p className="font-['Manrope'] font-medium text-[16px] text-black/70 leading-[1.661] mb-4">
                Planning, delivery, security and automation - we do it all!
              </p>
            </div>

            <div className="hidden md:block absolute top-[560px] sm:top-[695px] left-[20px] sm:left-[-350px] lg:left-[-390px] bg-white bg-opacity-30 rounded-[35px] p-[24px] sm:p-[30px] lg:p-[38px] w-[calc(100%-40px)] max-w-[367px] glide-right">
              <div className="flex items-center justify-between">
                <h3 className="font-['Manrope'] font-bold text-[24px] leading-[30px] text-black uppercase mb-4">
                  KEEP UP WITH<br/>NEW INNOVATION
                </h3>
                <div className="w-[47px] h-[47px] rounded-[12px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center mb-4 mt-[-10px]">
                  <svg width="47" height="47" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="6" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="3" strokeWidth="3"/>
                  </svg>
                </div>
              </div>
                <p className="font-['Manrope'] font-medium text-[16px] text-black/70 leading-[1.661] mb-4">
                  Making cutting-edge technology accessible for all businesses.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] sm:pt-[80px] lg:pt-[120px]">
        <h2 className="font-['Manrope'] font-bold text-[32px] sm:text-[50px] lg:text-[77px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-2.35px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-8 lg:mb-12 text-center lg:text-left">
          A partner to supercharge your IT strategy
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 mt-[20px] sm:mt-[30px]">
          <div className='w-full lg:w-[868px]'>
            <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black/70 leading-[1.661] mb-6 lg:mb-8">
              Nukaizen is on a mission to make best of breed technology accessible to every business by helping clients understand how to take advantage of the latest advancements in a practical and cost effective way.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12">
            {/* Cut Through Jargon Card */}
            <div className="hidden md:block bg-white bg-opacity-30 rounded-[19px] p-[24px] sm:p-[30px] lg:p-[35px] w-full sm:w-[calc(50%-12px)] lg:w-[448px] min-h-[182px] mt-4 sm:mt-6 lg:mt-8">
              <div className="flex items-center justify-between">
              <h3 className="font-['Manrope'] font-bold text-[24px] text-black uppercase mt-[-10px]">
                CUT THROUGH JARGON
              </h3>
              <div className="w-[47px] h-[47px] rounded-[12px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center mb-4">
                <svg width="47" height="47" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="6" strokeWidth="1"/>
                  <circle cx="12" cy="12" r="3" strokeWidth="3"/>
                </svg>
              </div>
            </div>
              <p className="font-['Manrope'] font-medium text-[16px] text-black/70 leading-[1.661]">
                We help you use the latest innovations to achieve real wins for your business.
              </p>
            </div>

            {/* 50+ Years Card */}
            <div className="mt-[20px] sm:mt-[25px]">
              <div className="hidden md:block">
                <h3 className="font-['Manrope'] font-bold text-[32px] sm:text-[38px] lg:text-[42px] text-black mb-[12px] sm:mb-[15px]">50+ years</h3>
                <p className="font-['Manrope'] font-semibold text-[18px] sm:text-[20px] lg:text-[22px] text-black mb-[20px] sm:mb-[30px]">Combined experience</p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-b from-[#c05aff] to-[#4d73f8] text-white px-6 sm:px-8 py-3 rounded-full font-['Manrope'] font-semibold text-[14px] sm:text-[16px] flex items-center justify-center gap-2 hover:opacity-90 transition w-full sm:w-auto"
              >
                Reach Out
                <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
            </div>
          </div>

          <div className="relative h-[250px] sm:h-[322px] w-full lg:w-[617px] rounded-[51px] overflow-hidden mt-8 lg:mt-0">
            <Image
              src="/images/farm.png"
              alt="Farm technology"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Enterprise Level Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[90px] mt-[60px] sm:mt-[100px] lg:mt-[150px]">
          <div className="hidden md:block relative w-full lg:w-[595px] h-[400px] sm:h-[600px] lg:h-[894px] rounded-[51px] overflow-hidden">
            <Image
              src="/images/robot-worker.png"
              alt="Robot worker"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-[868px]"> 
            <h2 className="font-['Manrope'] font-bold text-[36px] sm:text-[50px] lg:text-[76px] leading-[50px] sm:leading-[70px] lg:leading-[100px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-2.35px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-8 lg:mb-12 text-center lg:text-left">
              Cutting-edge IT for any size business
            </h2>
            
            <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black/70 leading-[1.8] sm:leading-[2.08] mb-[30px] sm:mb-[50px] lg:mb-[70px]">
              Nukaizen leverages years of experience in corporate IT to deliver enterprise-quality solutions tailored for small businesses. We bring expertise in planning, security, and automation, ensuring your business benefits from cutting-edge technology without the complexity. You can be assured the team at Nukaizen will position your business to take advantage of the technical golden age.
            </p>

            <h3 className="font-['Manrope'] font-bold text-[24px] sm:text-[28px] lg:text-[33px] text-black tracking-[-0.25px] sm:tracking-[-0.3px] lg:tracking-[-0.35px] uppercase mb-[30px] sm:mb-[40px]">
              THE BEST OF MANY WORLDS
            </h3>

            <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black/70 leading-[1.8] sm:leading-[2.08] mb-[30px] sm:mb-[50px] lg:mb-[70px]">
              With Nukaizen you get Australian-based, senior IT professionals with extensive technical and management experience in both corporate and startup environments. Our strong ties to the University of Newcastle makes Nukiazen the perfect choice to deliver AI solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <div className="bg-white bg-opacity-30 rounded-[19px] p-[24px] sm:p-[30px] lg:p-[35px] pr-[16px] sm:pr-[20px] w-full sm:w-[calc(50%-12px)] lg:w-[448px]">
                <div className="flex items-center justify-between">
                <h4 className="font-['Manrope'] font-bold text-[18px] sm:text-[22px] lg:text-[24px] text-black uppercase mb-4">
                  TECH MEET BUSINESS
                </h4>
                <div className="w-[36px] h-[36px] sm:w-[47px] sm:h-[47px] rounded-[12px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center mb-4 mt-[-15px]">
                  <svg width="36" height="36" className="sm:w-[47px] sm:h-[47px]" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="6" strokeWidth="1"/>
                    <circle cx="12" cy="12" r="3" strokeWidth="3"/>
                  </svg>
                </div>
                </div>  
                <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black/70 leading-[1.661]">
                  The Nukaizen team have been business<br/>owners themselves for over 20 years
                </p>
              </div>

              <a
                href="https://architecture.nukaizen.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-[32px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] w-full sm:w-[calc(50%-12px)] lg:w-[345px] rounded-[19px] pt-[34px] px-[24px] pb-[24px] sm:p-[30px] lg:p-[35px] sm:pr-[30px] block hover:opacity-95 transition"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-['Manrope'] font-bold text-[36px] sm:text-[44px] lg:text-[54px] text-white">
                    TRY US
                  </h4>
                  <div className="w-[36px] h-[36px] sm:w-[47px] sm:h-[47px] rounded-[12px] bg-[#6b7083] flex items-center justify-center mb-4 mt-[-30px]">     
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_5_121" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="35">
                    <rect width="34.4542" height="34.4542" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_5_121)">
                    <path d="M15.33 2C16.5262 2 17.5429 2.41869 18.3802 3.25606C19.2175 4.09344 19.6362 5.11025 19.6362 6.3065C19.6362 7.50275 19.2175 8.51956 18.3802 9.35694C17.5429 10.1943 16.5262 10.613 15.33 10.613C14.1338 10.613 13.1171 10.1943 12.2798 9.35694C11.4425 8.51956 11.0238 7.50275 11.0238 6.3065C11.0238 5.11025 11.4425 4.09344 12.2798 3.25606C13.1171 2.41869 14.1338 2 15.33 2ZM15.33 12.0485C16.4544 12.0485 17.5668 12.1801 18.6673 12.4433C19.7677 12.7064 20.7605 13.0773 21.6457 13.5558C22.5548 14.0103 23.2844 14.5487 23.8347 15.1707C24.3849 15.7928 24.66 16.4746 24.66 17.2163V25.5422C24.66 25.9489 24.5643 26.3497 24.3729 26.7444C24.1815 27.1392 23.9184 27.504 23.5835 27.839C23.2485 28.1739 22.8598 28.485 22.4172 28.7721C21.9746 29.0592 21.4782 29.3223 20.928 29.5616V26.3317C20.928 25.4226 20.3 24.6809 19.0441 24.1067C17.7881 23.5325 16.5501 23.2454 15.33 23.2454C14.1338 23.2454 12.9796 23.4906 11.8671 23.9811C10.7547 24.4716 10.0669 25.1115 9.80377 25.9011C10.7128 26.2599 11.6458 26.5112 12.6028 26.6547C13.5597 26.7983 14.5405 26.882 15.5453 26.9059H16.7654V30.6382C16.5979 30.6861 16.4245 30.71 16.2451 30.71H15.6888C14.8276 30.71 13.8408 30.6143 12.7284 30.4229C11.6159 30.2315 10.5573 29.9324 9.55258 29.5257C8.54781 29.119 7.70452 28.5867 7.02271 27.9287C6.3409 27.2708 6 26.4753 6 25.5422V17.2163C6 16.4746 6.27512 15.7928 6.82535 15.1707C7.37558 14.5487 8.09327 14.0103 8.97842 13.5558C9.8875 13.0773 10.8923 12.7064 11.9927 12.4433C13.0932 12.1801 14.2056 12.0485 15.33 12.0485ZM15.33 20.6615C16.1195 20.6615 16.7953 20.3804 17.3575 19.8181C17.9197 19.2559 18.2008 18.58 18.2008 17.7905C18.2008 17.001 17.9197 16.3251 17.3575 15.7629C16.7953 15.2006 16.1195 14.9195 15.33 14.9195C14.5405 14.9195 13.8647 15.2006 13.3025 15.7629C12.7403 16.3251 12.4592 17.001 12.4592 17.7905C12.4592 18.58 12.7403 19.2559 13.3025 19.8181C13.8647 20.3804 14.5405 20.6615 15.33 20.6615Z" fill="white"/>
                    </g>
                  </svg>
                  </div>
                  </div>
                <p className="font-['Manrope'] font-semibold text-[22px] text-white">
                  Get your free AI consultation
                </p>
              </a>
              </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative z-10 py-0 sm:py-[120px] lg:py-[163px] mt-[80px] sm:mt-[120px] lg:mt-[200px]">
        <div className="relative w-full aspect-video overflow-hidden">
          <video 
            ref={videoRef}
            src="/video/nukaizen.mp4" 
            playsInline
            controls={isPlaying}
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover"
          />
          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#c05aff]/60 to-[#4d73f8]/60 backdrop-blur-[10px]"></div>
          )}
          <div className={`absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-8 text-center z-10 transition-opacity duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <h2 className="hidden md:block font-['Manrope'] font-bold text-[36px] sm:text-[50px] lg:text-[80px] text-white tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-2.35px] mb-6 lg:mb-8">
              Exceptional IT Services
            </h2>
            <p className="hidden md:block font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-white leading-[1.6] sm:leading-[2.08] max-w-[1219px] mx-auto mb-8 lg:mb-12">
              We bring cutting-edge technology to businesses of all sizes, offering customised IT solutions that drive growth and efficiency. Our expert team delivers top-tier service and support, ensuring your business stays ahead.
            </p>
            <button 
              onClick={handlePlayClick}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[119px] lg:h-[119px] rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto hover:bg-white/30 transition"
            >
              <div className="w-0 h-0 border-l-[16px] sm:border-l-[18px] lg:border-l-[20px] border-l-white border-t-[10px] sm:border-t-[11px] lg:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[11px] lg:border-b-[12px] border-b-transparent ml-2"></div>
            </button>
            <p className="font-['Manrope'] font-semibold text-[18px] sm:text-[22px] lg:text-[26px] text-white uppercase mt-6 lg:mt-8">
              Watch Now!
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-[80px] sm:pt-[120px] lg:pt-[197px]">
        <div className="flex flex-col lg:flex-row justify-between mb-8 gap-8 lg:gap-0">
          <div>
            <h2 className="font-['Manrope'] font-bold text-[36px] sm:text-[50px] lg:text-[76px] leading-[1.2] tracking-[-1.5px] sm:tracking-[-2.5px] lg:tracking-[-2.85px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-[40px] sm:mb-[60px] lg:mb-[80px]">
              Your complete IT solution provider
            </h2>
            <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black/70 leading-[1.6] sm:leading-[2.08] max-w-[700px] mb-[40px] sm:mb-[80px] lg:mb-[120px]">
              Nukaizen offers a comprehensive suite of IT services, covering everything from strategic planning to seamless solution deployment. Whether you need expert guidance or complete project execution, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/services" className="bg-gradient-to-b from-[#c05aff] to-[#4d73f8] text-white px-6 py-3 rounded-full font-['Manrope'] font-semibold text-[15px] sm:text-[17px] flex items-center justify-center gap-4 hover:opacity-90 transition">
                Our Services
                <div className="w-[32px] h-[32px] sm:w-[37px] sm:h-[37px] rounded-full bg-white flex items-center justify-center">
                  <svg width="18" height="18" className="sm:w-5 sm:h-5 text-[#c05aff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </a>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#c05aff] px-6 sm:px-8 py-3 rounded-full font-['Manrope'] font-semibold text-[15px] sm:text-[17px] bg-gradient-to-b from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent hover:bg-white/10 transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {/* Service Card 1 */}
            <div className="bg-white bg-opacity-30 rounded-[18px] pt-[48px] px-[28px] pb-[28px] sm:p-[35px] lg:p-[42px] min-h-[280px] sm:min-h-[300px]">
               <div className="w-[66px] h-[66px] sm:w-[65px] sm:h-[66px] rounded-[12px] flex items-center justify-center mb-6 -mt-2 sm:mt-0">
                 <Bullseye />
               </div>
              <h3 className="font-['Manrope'] font-semibold text-[24px] sm:text-[26px] lg:text-[29px] text-black mb-4">Development</h3>
              <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black/70 leading-[1.661]">
                Let us create or update your web or mobile application
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white bg-opacity-30 rounded-[18px] pt-[48px] px-[28px] pb-[28px] sm:p-[35px] lg:p-[42px] min-h-[280px] sm:min-h-[300px]">
               <div className="w-[66px] h-[66px] sm:w-[65px] sm:h-[66px] rounded-[12px] flex items-center justify-center mb-6 -mt-2 sm:mt-0">
                 <Bullseye />
               </div>
              <h3 className="font-['Manrope'] font-semibold text-[24px] sm:text-[26px] lg:text-[29px] text-black mb-4">AI + Automation</h3>
              <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black/70 leading-[1.661]">
                Nukaizen's academic background is a huge asset in an AI world
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white bg-opacity-30 rounded-[18px] pt-[48px] px-[28px] pb-[28px] sm:p-[35px] lg:p-[42px] min-h-[280px] sm:min-h-[300px]">
               <div className="w-[66px] h-[66px] sm:w-[65px] sm:h-[66px] rounded-[12px] flex items-center justify-center mb-6 -mt-2 sm:mt-0">
                 <Bullseye />
               </div>
              <h3 className="font-['Manrope'] font-semibold text-[24px] sm:text-[26px] lg:text-[29px] text-black mb-4">IOT and embedded</h3>
              <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black/70 leading-[1.661]">
                Nukaizen are experts at getting the most from your devices.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white bg-opacity-30 rounded-[18px] pt-[48px] px-[28px] pb-[28px] sm:p-[35px] lg:p-[42px] min-h-[280px] sm:min-h-[300px]">
               <div className="w-[66px] h-[66px] sm:w-[65px] sm:h-[66px] rounded-[12px] flex items-center justify-center mb-6 -mt-2 sm:mt-0">
                 <Bullseye />
               </div>
              <h3 className="font-['Manrope'] font-semibold text-[24px] sm:text-[26px] lg:text-[29px] text-black mb-4">Fractional CTO</h3>
              <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black/70 leading-[1.661]">
                Allow the experienced Nukaizen team to manage your IT strategy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] sm:pt-[80px] lg:pt-[120px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-auto">
          <h2 className="font-['Manrope'] font-bold text-[36px] sm:text-[50px] lg:text-[76px] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-2.35px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-0 sm:mb-8 mt-[-32px] w-full lg:w-[622px]">
            Who are we?
          </h2>
          <div className="hidden md:block relative max-w-[600px] mx-auto lg:mx-0 mb-8 lg:mb-0">
            <div className="relative w-[220px] sm:w-[240px] lg:w-[274px] h-[280px] sm:h-[300px] lg:h-[349px] rounded-[30px] overflow-hidden ml-[0px] lg:mx-0">
              <Image
                src="/images/Mark.png"
                alt="Dr. Mark Wallis"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-[80px] sm:top-[80px] lg:top-[90px] left-[170px] sm:left-[160px] lg:left-[220px] w-[220px] sm:w-[240px] lg:w-[274px] h-[280px] sm:h-[3000px] lg:h-[349px] rounded-[30px] z-[-10] overflow-hidden">
              <Image
                src="/images/Sarah.png"
                alt="Sarah Wallis"
                fill
                className="object-cover"
              />
            </div>
          </div>
          </div>
          <div className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black/70 leading-[1.8] sm:leading-[2.08] space-y-6 w-full lg:w-[891px]">
            <p>
              <strong className="font-bold text-black">Dr. Mark Wallis</strong> is a computer scientist and software engineer who specialises in software architectures, cyber security, compliance and education. With over 25 years of experience in I.T., Mark has held senior leadership and C-suite roles across various FinTech, Open Banking and Managed Services companies. Mark holds a PhD in distributed component-based systems and lectures courses such as Enterprise Software Architectures and Distributed Computing.
            </p>
            <p>
              <strong className="font-bold text-black">Sarah Wallis</strong> is a seasoned IT leader with over 25 years experience implementing technical solutions for organisations in both corporate and start-up environments. With a background in the heavily regulated industries of banking and insurance she has first-hand knowledge of the IT regulation requirements for large enterprises. Having also worked as a project manager on enterprise level change initiatives Sarah has a track record of delivering large scale change securely and successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-[120px] sm:pt-[180px] lg:pt-[246px]">
        <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] rounded-full overflow-hidden mx-auto z-20">
          <img
            src={testimonials[currentTestimonial].image}
            alt={testimonials[currentTestimonial].alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white bg-opacity-30 rounded-[30px] sm:rounded-[40px] lg:rounded-[51px] pt-[100px] sm:pt-[130px] lg:pt-[150px] px-[24px] sm:px-[60px] lg:px-[150px] max-w-[1520px] mx-auto mt-[-60px] sm:mt-[-70px] lg:mt-[-80px] z-10 relative min-h-[450px] sm:min-h-[500px] lg:h-[549px]">
          <div className="max-w-[1000px] mx-auto flex flex-col h-full">
            <div className="text-center">
              <p className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] lg:text-[18px] text-black leading-[1.6] sm:leading-[1.8] mb-6 lg:mb-8 px-4 sm:px-8 lg:px-12">
                "{testimonials[currentTestimonial].testimonial}"
              </p>
              <p className="font-['Manrope'] font-semibold text-[14px] sm:text-[16px] lg:text-[18px] text-black">
                {testimonials[currentTestimonial].name}
              </p>
            </div>

            {/* Flexible spacer to keep buttons at a fixed position */}
            <div className="flex-1" />

            {/* Carousel Navigation */}
            <div className="flex gap-4 justify-center items-center pb-12 pt-6 lg:pt-8">
              <button 
                onClick={prevTestimonial}
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-gradient-to-b from-[#c05aff] to-[#4d73f8] flex items-center justify-center hover:opacity-90 transition-all hover:scale-105"
              >
                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              
              {/* Carousel Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-full transition-all ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-b from-[#c05aff] to-[#4d73f8]' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-gradient-to-b from-[#c05aff] to-[#4d73f8] flex items-center justify-center hover:opacity-90 transition-all hover:scale-105"
              >
                <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="relative z-10 mt-[80px] sm:mt-[120px] lg:mt-[195px]">
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

            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              <a href="#terms" className="font-['Manrope'] font-medium text-sm sm:text-base lg:text-lg text-white hover:underline hover:opacity-80 transition">
                Terms
              </a>
              <a href="#privacy" className="font-['Manrope'] font-medium text-sm sm:text-base lg:text-lg text-white hover:underline hover:opacity-80 transition">
                Privacy
              </a>
              <a href="#cookies" className="font-['Manrope'] font-medium text-sm sm:text-base lg:text-lg text-white hover:underline hover:opacity-80 transition">
                Cookies
              </a>
            </div>

            <a 
              href="https://linkedin.com" 
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