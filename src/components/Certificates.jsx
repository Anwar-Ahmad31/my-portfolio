import React from 'react';
import { certificates } from '../data/portfolioData';

const CertificateCard = ({ cert, aosDelay }) => (
  <a 
    href={cert.pdfUrl || '#'}
    target={cert.pdfUrl ? "_blank" : undefined}
    rel={cert.pdfUrl ? "noopener noreferrer" : undefined}
    data-aos="zoom-in"
    data-aos-delay={aosDelay}
    className="bg-black/25 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 hover:scale-105 hover:bg-black/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-pointer group flex flex-col justify-between"
  >
    <div className="flex items-start gap-4">
      <span className="text-3xl mt-0.5 group-hover:scale-110 transition-transform duration-300">{cert.icon}</span>
      <div>
        <h3 className="text-white font-bold text-base md:text-lg leading-tight mb-1 group-hover:text-cyan-300 transition-colors">
          {cert.name}
        </h3>
        <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">
          {cert.issuer}
        </p>
      </div>
    </div>
    
    {cert.pdfUrl && (
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-200 group-hover:text-white transition-colors">
        <span className="flex items-center gap-1 font-semibold">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View Verified Certificate
        </span>
        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    )}
  </a>
);

const Certificates = () => {
  return (
    <section id="certificates" className="bg-[#00bcd4] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      
      {/* Torn paper divider at top (transition from dark Projects section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            Certifications & Hackathons
          </h2>
          <p className="text-cyan-950 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Verified credentials in Data Science and national-level hackathons.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {certificates.featured.map((cert, index) => (
            <CertificateCard 
              key={cert.name} 
              cert={cert} 
              aosDelay={String((index + 1) * 100)} 
            />
          ))}
        </div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-15 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;
