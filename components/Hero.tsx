
import React from 'react';
import { ArrowRight, Star, ChevronDown, Send } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const scrollToSystem = () => {
    const element = document.getElementById(SectionId.SYSTEM);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={SectionId.HOME} className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
          alt="Classroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-blue-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col space-y-20 md:space-y-32">
          
          {/* Part 1: Identity Area */}
          <div className="animate-in fade-in slide-in-from-top-12 duration-1000">
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 mb-8">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="font-bold text-sm tracking-widest uppercase">Gangdong No.1 Academy</span>
            </div>
            <div className="text-orange-500 font-black text-[2.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[8.5rem] leading-none tracking-tighter drop-shadow-2xl opacity-90">
              Top English Math
            </div>
          </div>

          {/* Part 2: Main Value Area (H1) */}
          <div className="animate-in fade-in slide-in-from-left-12 duration-1000 delay-300">
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
              <span className="block mb-4">2-6명 <span className="text-orange-500">소수정예</span> 수업</span>
              <span className="block text-white/90">
                1:1 <span className="relative inline-block">
                  코칭시스템
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/40 -z-10"></span>
                </span>
              </span>
            </h1>
          </div>

          {/* Part 3: Action & Details Area */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-medium">
                졸업할 때까지 다니는 학원, 동생까지 믿고 맡기는 학원. <br className="hidden md:block"/>
                <span className="text-white">17년의 신뢰</span>가 증명하는 완벽한 성적 변화를 경험하세요.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToSystem}
                className="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-2xl"
              >
                시스템 확인
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onOpenModal}
                className="group inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-500 transition-all shadow-2xl shadow-blue-500/20"
              >
                상담 신청
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;
