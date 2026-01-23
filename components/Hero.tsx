
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  onNavigateSystem?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateSystem }) => {
  return (
    <section id={SectionId.HOME} className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
          alt="Classroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-slate-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-full">
          {/* Super Sized Orange Branding Text with responsive scaling */}
          <div className="text-orange-500 font-black text-[2.2rem] sm:text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] leading-none mb-12 tracking-tighter animate-in fade-in slide-in-from-top-8 duration-1000 drop-shadow-2xl whitespace-nowrap">
            Top English Math 학원
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-400/30 mb-8">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="font-medium text-sm md:text-base tracking-wide">강동구 17년 전통의 명문</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            2-6명 <span className="text-orange-500">소수정예 수업</span><br />
            <br />
            <span className="text-orange-500">1:1 <span className="underline decoration-orange-500 underline-offset-[12px] decoration-4">코칭시스템 적용</span></span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
            졸업할 때까지 다니는 학원, 동생까지 믿고 맡기는 학원.<br className="hidden md:block"/>
            Top English Math 학원은 '제2의 가족' 같은 밀착 케어로<br className="hidden md:block"/>
            학생들의 성적과 미래를 함께 고민합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onNavigateSystem}
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 w-fit hover:scale-105 active:scale-95"
            >
              교육 시스템 확인
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
