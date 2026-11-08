import React from 'react';
import stackImage from '../assets/about/anwar-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Python Icon
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <linearGradient id="python-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
        <stop offset="0" stopColor="#5A9FD4"/>
        <stop offset="1" stopColor="#306998"/>
      </linearGradient>
      <linearGradient id="python-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.318" y2="1149.818" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
        <stop offset="0" stopColor="#FFD43B"/>
        <stop offset="1" stopColor="#FFE873"/>
      </linearGradient>
      <path fill="url(#python-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
      <path fill="url(#python-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM78.929 90.634c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

// Scikit-learn Icon
const ScikitIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g transform="translate(10,10) scale(0.84)">
        <circle cx="64" cy="64" r="58" fill="none" stroke="#F89939" strokeWidth="6"/>
        <circle cx="40" cy="50" r="10" fill="#F89939"/>
        <circle cx="88" cy="50" r="10" fill="#3499CD"/>
        <circle cx="64" cy="88" r="10" fill="#F89939"/>
        <circle cx="52" cy="32" r="7" fill="#3499CD"/>
        <circle cx="76" cy="32" r="7" fill="#F89939"/>
        <line x1="40" y1="50" x2="88" y2="50" stroke="#9B59B6" strokeWidth="3"/>
        <line x1="40" y1="50" x2="64" y2="88" stroke="#9B59B6" strokeWidth="3"/>
        <line x1="88" y1="50" x2="64" y2="88" stroke="#3499CD" strokeWidth="3"/>
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Scikit-learn</span>
  </div>
);

// RAG / AI Icon
const RagIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g transform="translate(10,10) scale(0.84)">
        {/* Brain-like neural network */}
        <circle cx="34" cy="30" r="8" fill="#8B5CF6" opacity="0.9"/>
        <circle cx="94" cy="30" r="8" fill="#06B6D4" opacity="0.9"/>
        <circle cx="64" cy="20" r="8" fill="#8B5CF6" opacity="0.9"/>
        <circle cx="34" cy="70" r="8" fill="#06B6D4" opacity="0.9"/>
        <circle cx="94" cy="70" r="8" fill="#8B5CF6" opacity="0.9"/>
        <circle cx="64" cy="100" r="8" fill="#06B6D4" opacity="0.9"/>
        <circle cx="64" cy="60" r="12" fill="#10B981" opacity="0.9"/>
        {/* Connections */}
        <line x1="34" y1="30" x2="64" y2="60" stroke="#8B5CF6" strokeWidth="2" opacity="0.6"/>
        <line x1="94" y1="30" x2="64" y2="60" stroke="#06B6D4" strokeWidth="2" opacity="0.6"/>
        <line x1="64" y1="20" x2="64" y2="60" stroke="#8B5CF6" strokeWidth="2" opacity="0.6"/>
        <line x1="34" y1="70" x2="64" y2="60" stroke="#06B6D4" strokeWidth="2" opacity="0.6"/>
        <line x1="94" y1="70" x2="64" y2="60" stroke="#8B5CF6" strokeWidth="2" opacity="0.6"/>
        <line x1="64" y1="100" x2="64" y2="60" stroke="#06B6D4" strokeWidth="2" opacity="0.6"/>
        {/* Central AI label */}
        <text x="64" y="65" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">AI</text>
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">RAG & LLMs</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#00bcd4] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[360px] shrink-0 mt-8 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3.5 h-40 bg-gradient-to-r from-gray-950 via-black to-gray-900 transform -translate-x-1/2 shadow-2xl z-0 rounded-full"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-8 h-12 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-300 rounded-md border border-gray-400/80 transform -translate-x-1/2 z-10 shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex items-center justify-center">
              <div className="w-4 h-1 bg-gray-600/50 rounded-full"></div>
            </div>
            
            {/* Badge Card */}
            <div className="bg-[#0f131a] w-full max-w-[320px] rounded-3xl p-4 pt-5 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative z-20 transform -rotate-2 hover:rotate-0 hover:scale-[1.02] transition-all duration-500 group">
              
              {/* Cutout Hole Slot (cleanly placed above the photo) */}
              <div className="w-12 h-2.5 bg-black/70 rounded-full mx-auto mb-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] border border-white/10"></div>
              
              {/* Badge Top Header */}
              <div className="flex items-center justify-between px-1 mb-2.5 text-[10px] font-mono tracking-widest uppercase">
                <span className="text-white/60 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Engineering ID
                </span>
                <span className="text-cyan-400 font-bold">7th Semester</span>
              </div>

              {/* Image Container — Perfectly framed with generous headroom so head is never cut */}
              <div className="w-full aspect-[16/12] overflow-hidden rounded-2xl bg-black border border-white/10 shadow-inner relative">
                <img 
                  src={stackImage} 
                  alt="Anwar Ahmad — AI & Data Science Developer" 
                  className="w-full h-full object-cover object-[center_top] transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Badge Card Bottom Info */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-col gap-1 text-left px-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-white text-lg font-black tracking-tight">Anwar Ahmad</h3>
                  <span className="text-[10px] font-mono text-cyan-300 font-bold">IES Bhopal</span>
                </div>
                <p className="text-white/60 text-xs font-semibold tracking-wide">
                  AI & Data Science Developer
                </p>
                
                {/* Decorative barcode & chip */}
                <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-white/30 text-[9px] font-mono">
                  <span className="tracking-widest">ID: AA-BTECH-CSE</span>
                  <div className="flex gap-0.5 items-center opacity-60">
                    <span className="w-1 h-3 bg-white/40"></span>
                    <span className="w-0.5 h-3 bg-white/40"></span>
                    <span className="w-1.5 h-3 bg-white/40"></span>
                    <span className="w-0.5 h-3 bg-white/40"></span>
                    <span className="w-1 h-3 bg-white/40"></span>
                    <span className="w-2 h-3 bg-white/40"></span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-cyan-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ScikitIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <RagIcon />
            </div>
          </div>

          {/* Additional Info */}
          <div data-aos="fade-up" data-aos-delay="700" className="mt-12 flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full text-sm font-bold text-white/80 border border-white/10">
              📍 Bengaluru, India
            </span>
            <span className="px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full text-sm font-bold text-white/80 border border-white/10">
              🎓 B.Tech CSE — 7th Semester
            </span>
            <span className="px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full text-sm font-bold text-white/80 border border-white/10">
              🚀 Currently Learning Agentic AI
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
