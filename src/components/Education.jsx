import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  const educationItems = [
    {
      degree: education.degree,
      institution: education.institution,
      duration: `${education.startYear} - Present (${education.graduation})`,
      grade: `CGPA: ${education.cgpa}`,
      description: "Focusing on Machine Learning, Data Science, Data Structures, Algorithms, DBMS, and Practical AI Applications.",
      badge: "Currently Pursuing"
    },
    {
      degree: "Higher Secondary Examination (12th)",
      institution: "Bihar Board",
      duration: "2022",
      grade: "58.4%",
      description: "Science stream with core emphasis on Mathematics, Physics, and Chemistry.",
      badge: "Completed"
    },
    {
      degree: "Secondary Examination (10th)",
      institution: "Bihar Board",
      duration: "2020",
      grade: "69%",
      description: "Completed secondary education with strong fundamentals in Science and Mathematics.",
      badge: "Completed"
    }
  ];

  return (
    <section id="education" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-[#00bcd4]/30 rounded-full px-5 py-1.5 text-sm text-[#00bcd4] font-bold mb-6 shadow-sm bg-[#00bcd4]/10 backdrop-blur-sm">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Formal engineering foundations and academic journey.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {educationItems.map((item, index) => (
            <div 
              key={item.degree}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#00bcd4]/40 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,188,212,0.1)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
                    {item.duration}
                  </span>
                  <span className="bg-[#00bcd4]/15 text-[#00bcd4] text-[10px] font-black tracking-widest uppercase py-0.5 px-2.5 rounded-full border border-[#00bcd4]/30">
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-white text-xl font-black mb-1 tracking-tight">
                  {item.degree}
                </h3>
                <p className="text-white/70 text-sm font-semibold mb-3">
                  {item.institution}
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-6 font-medium">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-white/40">Performance</span>
                <span className="text-[#00bcd4] bg-[#00bcd4]/10 px-3 py-1 rounded-full border border-[#00bcd4]/20">
                  {item.grade}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
