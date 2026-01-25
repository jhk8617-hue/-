
import React from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Target, 
  MessageCircle,
  BarChart3,
  Award,
  ChevronRight,
  ClipboardCheck,
  Layout,
  Layers,
  Sparkles,
  Send
} from 'lucide-react';

interface EducationSystemPageProps {
  onBack: () => void;
  onNavigateApply: () => void;
}

const EducationSystemPage: React.FC<EducationSystemPageProps> = ({ onBack, onNavigateApply }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all font-bold group"
          >
            <div className="bg-slate-100 p-2 rounded-full group-hover:bg-blue-50 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </div>
            <span>이전 페이지로</span>
          </button>
          <div className="font-black text-slate-900 tracking-tighter text-xl">EDUCATION SYSTEM</div>
          <button 
            onClick={onNavigateApply}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all flex items-center gap-2"
          >
            <Send className="h-4 w-4" />
            상담 신청
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.pattern')]"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full mb-8 border border-blue-500/30">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-bold tracking-widest uppercase">17 Years of Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.15] tracking-tight">
            성적 향상을 넘어 <br/> 
            <span className="text-blue-500">공부하는 근력</span>을 설계합니다
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            단순한 지식 전달은 누구나 할 수 있습니다. <br className="hidden md:block"/>
            Top English Math는 학생이 스스로 문제를 해결하고 성과를 내는 <br className="hidden md:block"/>
            '완전 학습 메커니즘'을 시스템화했습니다.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-24 space-y-40">
        
        {/* Core System: The 5-Step Mastery */}
        <section className="animate-in">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">빈틈없는 5단계 완전 학습 솔루션</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { icon: <ClipboardCheck />, title: 'Daily Test', desc: '전 수업 복습 및 핵심 개념 인출' },
              { icon: <Layout />, title: 'Main Lecture', desc: '소수정예 원리 이해 집중 강의' },
              { icon: <Layers />, title: '1:1 Coaching', desc: '개인별 취약점 즉시 피드백' },
              { icon: <Target />, title: 'Tracking', desc: '오답 유사 문항 무한 반복 훈련' },
              { icon: <MessageCircle />, title: 'Reporting', desc: '학습 성취도 학부모 실시간 공유' },
            ].map((item, i) => (
              <div key={i} className="group bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-slate-400 font-black text-xs mb-2 uppercase tracking-tighter">Step 0{i+1}</div>
                <h4 className="font-bold text-slate-900 text-lg mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Subjects Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* English Curriculum */}
          <section className="bg-blue-50/50 rounded-[3rem] p-8 md:p-12 border border-blue-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 p-3 rounded-2xl text-white">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">영어 커리큘럼</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Level 1: 구문 & 어법', detail: '문장의 뼈대를 세우는 끊어읽기와 필수 어법 정복' },
                { label: 'Level 2: 논리 독해', detail: '지문의 맥락을 파악하고 정답의 근거를 찾는 훈련' },
                { label: 'Level 3: 내신 변형', detail: '학교별 기출 데이터 기반 예상 문제 및 서술형 완벽 대비' }
              ].map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-blue-50 flex gap-4">
                  <div className="text-blue-600 font-black text-xl">0{i+1}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{step.label}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Math Curriculum */}
          <section className="bg-red-50/50 rounded-[3rem] p-8 md:p-12 border border-red-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-500 p-3 rounded-2xl text-white">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">수학 커리큘럼</h3>
            </div>
            
            <div className="space-y-6">
              {[
                { label: '백지 개념 테스트', detail: '눈으로 보는 수학이 아닌, 손으로 써 내려가는 진짜 개념 공부' },
                { label: '계통별 연계 학습', detail: '이전 학년의 결손을 찾아 현재 진도와 유기적으로 연결' },
                { label: '3차 오답 관리', detail: '당일 오답 → 주간 누적 → 시험 직전 완성의 3단계 오답 타파' }
              ].map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-red-50 flex gap-4">
                  <div className="text-red-500 font-black text-xl">0{i+1}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{step.label}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Management Value */}
        <section className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Award className="h-64 w-64" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8">
              "결과가 증명하는 <span className="text-blue-400">1:1 밀착 코칭</span>"
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <h4 className="font-bold text-xl mb-4 text-blue-400">소수정예 수업</h4>
                <p className="text-slate-400 text-sm leading-relaxed">2~6명 정원제로 모든 학생이 수업의 주인공이 됩니다.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <h4 className="font-bold text-xl mb-4 text-blue-400">실시간 피드백</h4>
                <p className="text-slate-400 text-sm leading-relaxed">모르는 것을 미루지 않고 즉석에서 해결하는 질의응답 시스템.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <h4 className="font-bold text-xl mb-4 text-blue-400">개별 진도 설계</h4>
                <p className="text-slate-400 text-sm leading-relaxed">학생의 속도와 목표에 맞춘 1:1 맞춤형 로드맵 제공.</p>
              </div>
            </div>
            
            <button 
              onClick={onNavigateApply}
              className="group inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-blue-600 transition-all shadow-2xl"
            >
              상담 신청
              <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12 text-center text-slate-400 text-sm">
        <p>© 2024 Top English Math 학원. 교육 시스템 상세 안내 페이지.</p>
      </footer>
    </div>
  );
};

export default EducationSystemPage;
