'use client';

import Bullseye from '@/components/Bullseye';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<null | { ok: boolean; error?: string }>(null);

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

      {/* Services Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[200px] max-w-[1920px] pb-[60px] sm:pb-[80px] lg:pb-[120px] mt-[60px] sm:mt-[80px] lg:mt-[120px]">
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
                <nav className="flex gap-8 sm:gap-[40px] lg:gap-[72px] items-center justify-center h-[58px]">
                  <a href="services" className="font-['Manrope'] font-medium text-[14px] sm:text-[16px] text-black">Services</a>
                </nav>
              </div>
            </header>

            <h2 className="font-['outfit'] font-medium text-[40px] sm:text-[50px] lg:text-[60px] xl:text-[80px] leading-[1.1] sm:leading-[1.1] lg:leading-[1.1] xl:leading-[90px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] xl:tracking-[-2.35px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent">
              Our Services
            </h2>
            
            <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7] mt-[40px] sm:mt-[60px] lg:mt-[80px]">
              Nukaizen&apos;s core services include AI and automation, web and mobile app development, IoT and embedded systems, fractional CTO support, BA and project management, and cybersecurity. But these offerings are just the starting point. Our experienced team is dedicated to understanding your unique business challenges and objectives.
            </p>
            
            <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7] mt-[20px] sm:mt-[30px] lg:mt-[40px]">
              We provide individualized strategic IT support, crafting solutions that align with your goals and drive success. At Nukaizen, we&apos;re not just offering services; we&apos;re building partnerships to help you achieve your company&apos;s vision.
            </p>
            
            <p className="font-['Manrope'] font-medium text-[16px] sm:text-[18px] lg:text-[20px] text-black leading-[1.6] sm:leading-[1.7] mt-[20px] sm:mt-[30px] lg:mt-[40px]">
              To find out more about how we can help you please fill out the{' '}
              <a 
                href="#contact" 
                className="text-[#c05aff] hover:text-[#4d73f8] underline hover:no-underline transition-colors duration-200 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us
              </a>
              {' '}form below and we will be in touch to arrange an introductory meeting.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full lg:w-[736px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[772px] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden shadow-2xl mt-8 lg:mt-0">
            <Image
              src="/images/server-cloud.png"
              alt="Cloud computing and server infrastructure"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Panel Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[200px] max-w-[1920px] pb-[60px] sm:pb-[80px] lg:pb-[120px] mt-[60px] sm:mt-[80px] lg:mt-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          
          {/* Service Card 1: AI + Automation */}
          <div className="backdrop-blur-[32px] bg-white/40 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 relative">
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <Image
                src="/images/network.png"
                alt="AI and Automation"
                fill
                className="object-cover"
              />
              {/* Circular Icon */}
              <div className="absolute -bottom-[25px] sm:-bottom-[30px] lg:-bottom-[35px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-[10px] sm:rounded-[12px] lg:rounded-[15px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center shadow-lg">
                <Bullseye />
              </div>
            </div>
            <div className="text-center pt-[35px] sm:pt-[40px] lg:pt-[50px] pb-[20px] sm:pb-[25px] lg:pb-[30px] px-4 sm:px-5 lg:px-6">
              <h3 className="font-['Manrope'] font-bold text-[20px] sm:text-[24px] lg:text-[28px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-2">
                AI + Automation
              </h3>
              <p className="font-['Manrope'] font-normal text-[14px] sm:text-[15px] lg:text-[16px] text-black">
                Hover for more
              </p>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
                <div className="w-full h-full relative text-left text-[16px] sm:text-[20px] lg:text-[29px] text-black font-['Manrope'] p-4 sm:p-6 lg:p-8">
                  <div className="absolute inset-0 backdrop-blur-[65px] bg-gray-200 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]" />
                  <div className="relative z-10 font-semibold mb-4 sm:mb-6 lg:mb-8 text-center">AI + Automation</div>
                  <div className="relative z-10 text-sm sm:text-base lg:text-xl leading-[1.6] sm:leading-[1.8] lg:leading-[208%] font-medium">Nukaizen specializes in AI and automation, creating custom solutions that streamline operations, reduce costs, and boost productivity. From robotic process automation to AI-driven analytics, we transform your business with cutting-edge technology.</div>
                </div>
            </div>
          </div>
          </div>

          {/* Service Card 2: Web + Mobile Apps */}
          <div className="backdrop-blur-[32px] bg-white/40 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 relative">
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <Image
                src="/images/code.png"
                alt="Web and Mobile Apps"
                fill
                className="object-cover"
              />
              {/* Circular Icon */}
              <div className="absolute -bottom-[25px] sm:-bottom-[30px] lg:-bottom-[35px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-[10px] sm:rounded-[12px] lg:rounded-[15px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center shadow-lg">
                <Bullseye />
              </div>
            </div>
            <div className="text-center pt-[35px] sm:pt-[40px] lg:pt-[50px] pb-[20px] sm:pb-[25px] lg:pb-[30px] px-4 sm:px-5 lg:px-6">
              <h3 className="font-['Manrope'] font-bold text-[20px] sm:text-[24px] lg:text-[28px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-2">
                Web + Mobile Apps
              </h3>
              <p className="font-['Manrope'] font-normal text-[14px] sm:text-[15px] lg:text-[16px] text-black">
                Hover for more
              </p>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
                <div className="w-full h-full relative text-left text-[16px] sm:text-[20px] lg:text-[29px] text-black font-['Manrope'] p-4 sm:p-6 lg:p-8">
                  <div className="absolute inset-0 backdrop-blur-[65px] bg-gray-200 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]" />
                  <div className="relative z-10 font-semibold mb-4 sm:mb-6 lg:mb-8 text-center">Web + Mobile Apps</div>
                  <div className="relative z-10 text-sm sm:text-base lg:text-xl leading-[1.6] sm:leading-[1.8] lg:leading-[208%] font-medium">We develop custom web and mobile applications tailored to your business needs. From responsive websites to native iOS and Android apps, our team delivers user-friendly solutions that drive engagement and growth.</div>
                </div>  
              </div>
            </div>
          </div>

          {/* Service Card 3: IOT + Embedded */}
          <div className="backdrop-blur-[32px] bg-white/40 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 relative">
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <Image
                src="/images/dashboard.png"
                alt="IOT and Embedded"
                fill
                className="object-cover"
              />
              {/* Circular Icon */}
              <div className="absolute -bottom-[25px] sm:-bottom-[30px] lg:-bottom-[35px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-[10px] sm:rounded-[12px] lg:rounded-[15px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center shadow-lg">
                <Bullseye />
              </div>
            </div>
            <div className="text-center pt-[35px] sm:pt-[40px] lg:pt-[50px] pb-[20px] sm:pb-[25px] lg:pb-[30px] px-4 sm:px-5 lg:px-6">
              <h3 className="font-['Manrope'] font-bold text-[20px] sm:text-[24px] lg:text-[28px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-2">
                IOT + Embedded
              </h3>
              <p className="font-['Manrope'] font-normal text-[14px] sm:text-[15px] lg:text-[16px] text-black">
                Hover for more
              </p>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
                <div className="w-full h-full relative text-left text-[16px] sm:text-[20px] lg:text-[29px] text-black font-['Manrope'] p-4 sm:p-6 lg:p-8">
                  <div className="absolute inset-0 backdrop-blur-[65px] bg-gray-200 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]" />
                  <div className="relative z-10 font-semibold mb-4 sm:mb-6 lg:mb-8 text-center">IOT + Embedded</div>
                  <div className="relative z-10 text-sm sm:text-base lg:text-xl leading-[1.6] sm:leading-[1.8] lg:leading-[208%] font-medium">Connect your devices and systems with our IoT and embedded solutions. We design smart sensors, develop firmware, and create connected ecosystems that enable real-time data collection and intelligent automation.</div>
                </div>  
              </div>
            </div>
          </div>

          {/* Service Card 4: Fractional CTO */}
          <div className="backdrop-blur-[32px] bg-white/40 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 relative">
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <Image
                src="/images/handshake.png"
                alt="Fractional CTO"
                fill
                className="object-cover"
              />
              {/* Circular Icon */}
              <div className="absolute -bottom-[25px] sm:-bottom-[30px] lg:-bottom-[35px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-[10px] sm:rounded-[12px] lg:rounded-[15px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center shadow-lg">
                <Bullseye />
              </div>
            </div>
            <div className="text-center pt-[35px] sm:pt-[40px] lg:pt-[50px] pb-[20px] sm:pb-[25px] lg:pb-[30px] px-4 sm:px-5 lg:px-6">
              <h3 className="font-['Manrope'] font-bold text-[20px] sm:text-[24px] lg:text-[28px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-2">
                Fractional CTO
              </h3>
              <p className="font-['Manrope'] font-normal text-[14px] sm:text-[15px] lg:text-[16px] text-black">
                Hover for more
              </p>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
                <div className="w-full h-full relative text-left text-[16px] sm:text-[20px] lg:text-[29px] text-black font-['Manrope'] p-4 sm:p-6 lg:p-8">
                  <div className="absolute inset-0 backdrop-blur-[65px] bg-gray-200 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]" />
                  <div className="relative z-10 font-semibold mb-4 sm:mb-6 lg:mb-8 text-center">Fractional CTO</div>
                  <div className="relative z-10 text-sm sm:text-base lg:text-xl leading-[1.6] sm:leading-[1.8] lg:leading-[208%] font-medium">Get senior-level technology leadership without the full-time cost. Our fractional CTO services provide strategic guidance, technical architecture, and team leadership to accelerate your technology initiatives and drive innovation.</div>
                </div>  
              </div>
            </div>
          </div>

          {/* Service Card 5: BA + Project */}
          <div className="backdrop-blur-[32px] bg-white/40 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 relative">
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <Image
                src="/images/graph.png"
                alt="BA and Project Management"
                fill
                className="object-cover"
              />
              {/* Circular Icon */}
              <div className="absolute -bottom-[25px] sm:-bottom-[30px] lg:-bottom-[35px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-[10px] sm:rounded-[12px] lg:rounded-[15px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center shadow-lg">
                <Bullseye />
              </div>
            </div>
            <div className="text-center pt-[35px] sm:pt-[40px] lg:pt-[50px] pb-[20px] sm:pb-[25px] lg:pb-[30px] px-4 sm:px-5 lg:px-6">
              <h3 className="font-['Manrope'] font-bold text-[20px] sm:text-[24px] lg:text-[28px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-2">
                BA + Project
              </h3>
              <p className="font-['Manrope'] font-normal text-[14px] sm:text-[15px] lg:text-[16px] text-black">
                Hover for more
              </p>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
                <div className="w-full h-full relative text-left text-[16px] sm:text-[20px] lg:text-[29px] text-black font-['Manrope'] p-4 sm:p-6 lg:p-8">
                  <div className="absolute inset-0 backdrop-blur-[65px] bg-gray-200 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]" />
                  <div className="relative z-10 font-semibold mb-4 sm:mb-6 lg:mb-8 text-center">BA + Project</div>
                  <div className="relative z-10 text-sm sm:text-base lg:text-xl leading-[1.6] sm:leading-[1.8] lg:leading-[208%] font-medium">Our business analysis and project management expertise ensures your technology initiatives deliver real value. We bridge the gap between business requirements and technical solutions, managing complex projects from conception to successful delivery.</div>
                </div>  
              </div>
            </div>
          </div>

          {/* Service Card 6: Cybersecurity */}
          <div className="backdrop-blur-[32px] bg-white/40 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 relative">
            <div className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
              <Image
                src="/images/locks.png"
                alt="Cybersecurity"
                fill
                className="object-cover"
              />
              {/* Circular Icon */}
              <div className="absolute -bottom-[25px] sm:-bottom-[30px] lg:-bottom-[35px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-[10px] sm:rounded-[12px] lg:rounded-[15px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] flex items-center justify-center shadow-lg">
                <Bullseye />
              </div>
            </div>
            <div className="text-center pt-[35px] sm:pt-[40px] lg:pt-[50px] pb-[20px] sm:pb-[25px] lg:pb-[30px] px-4 sm:px-5 lg:px-6">
              <h3 className="font-['Manrope'] font-bold text-[20px] sm:text-[24px] lg:text-[28px] bg-gradient-to-r from-[#c05aff] to-[#4d73f8] bg-clip-text text-transparent mb-2">
                Cybersecurity
              </h3>
              <p className="font-['Manrope'] font-normal text-[14px] sm:text-[15px] lg:text-[16px] text-black">
                Hover for more
              </p>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]">
                <div className="w-full h-full relative text-left text-[16px] sm:text-[20px] lg:text-[29px] text-black font-['Manrope'] p-4 sm:p-6 lg:p-8">
                  <div className="absolute inset-0 backdrop-blur-[65px] bg-gray-200 rounded-[20px] sm:rounded-[25px] lg:rounded-[30px]" />
                  <div className="relative z-10 font-semibold mb-4 sm:mb-6 lg:mb-8 text-center">Cybersecurity</div>
                  <div className="relative z-10 text-sm sm:text-base lg:text-xl leading-[1.6] sm:leading-[1.8] lg:leading-[208%] font-medium">Protect your business with comprehensive cybersecurity solutions. We assess vulnerabilities, implement security frameworks, monitor threats, and ensure compliance with industry standards to safeguard your digital assets and maintain business continuity.</div>
                </div>  
              </div>
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
                      <span className="text-green-700 font-['Manrope'] text-sm sm:text-base">Thanks! We\'ll be in touch shortly.</span>
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