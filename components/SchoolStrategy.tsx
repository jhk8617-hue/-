
import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { SCHOOL_STRATEGIES } from '../constants';
import { SectionId } from '../types';

interface SchoolStrategyProps {
  onOpenModal: () => void;
}

const SchoolStrategy: React.FC<SchoolStrategyProps> = ({ onOpenModal }) => {
  return (
    <section id={SectionId.STRATEGY} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Exam Preparation</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-2 mb-6">
            학교별 <span className="text-blue-600">내신 완벽 공략</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            강동구 주요 고교의 출제 경향을 17년간 분석했습니다.<br />
            정확한 데이터 기반으로 각 학교별 맞춤 전략을 제시합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SCHOOL_STRATEGIES.map((strategy, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="h-24 w-24 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {strategy.schoolName}
              </h3>
              <p className="text-slate-600 mb-8 min-h-[48px] leading-relaxed">
                {strategy.description}
              </p>
              
              <ul className="space-y-4">
                {strategy.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium text-sm leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.pattern')]"></div>
           <div className="relative z-10">
             <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
               방학은 '학습 격차'를 벌릴 결정적 기회!
             </h3>
             <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
               다음 학기 1등급을 결정짓는 것은 지금 이 순간의 선택입니다.<br />
               정밀 학습 진단으로 자녀의 객관적인 위치를 파악하세요.
             </p>
             <button 
               onClick={onOpenModal}
               className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl hover:scale-105 active:scale-95"
             >
               상담 신청
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolStrategy;
