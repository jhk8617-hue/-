
import React from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  BookOpen, 
  Target, 
  Zap, 
  Clock, 
  Search, 
  MessageCircle,
  BarChart3,
  Award
} from 'lucide-react';

interface EducationSystemPageProps {
  onBack: () => void;
  onOpenModal: () => void;
}

const EducationSystemPage: React.FC<EducationSystemPageProps> = ({ onBack, onOpenModal }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-bold"
          >
            <ArrowLeft className="h-5 w-5" />
            메인으로 돌아가기
          </button>
          <div className="hidden md:block font-bold text-slate-900 uppercase tracking-widest text-sm">Top Education System</div>
          <button 
            onClick={onOpenModal}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors"
          >
            레벨테스트 신청
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="inline-block bg-blue-500 text-xs font-bold px-3 py-1 rounded-full mb-4">SYSTEM PHILOSOPHY</span>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            성적 향상을 넘어 <br/> 
            <span className="text-blue-200">공부하는 습관</span>을 설계합니다
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Top English Math 학원은 단순한 지식 전달을 넘어, 
            학생 스스로가 문제를 해결할 수 있는 '근본적 힘'을 길러내는 5단계 통합 학습 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-20 space-y-32">
        
        {/* Core System 1: 5-Step Mastery */}
        <section>
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
                <Zap className="h-5 w-5" />
                <span>The Core Engine</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                매일 실천하는 <br/> 5단계 성적 완성 시스템
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                강동구 학부모님들이 신뢰하는 가장 큰 이유는 '빈틈없는 관리'에 있습니다. 
                한 수업 안에서 5단계를 거치며 배운 내용을 100% 본인의 것으로 만듭니다.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-4">
              {[
                { step: '01', title: '실전 영단어/수학 일일 테스트', desc: '지난 수업 복습 및 기본기 점검' },
                { step: '02', title: '메인 소수정예 집중 강의', desc: '개념 이해와 핵심 문제 유형 정복' },
                { step: '03', title: '1:1 맞춤형 밀착 클리닉', desc: '이해가 안 가는 부분 실시간 질의응답' },
                { step: '04', title: '취약 유형 오답 무한 추적', desc: '틀린 문제는 유사 문항으로 완벽 이해' },
                { step: '05', title: '데일리 학습 성취도 피드백', desc: '학부모님께 당일 성취도 보고' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl font-black text-blue-100">{item.step}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core System 2: English Curriculum */}
        <section className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-black text-slate-900 mb-4">English Curriculum</h2>
             <p className="text-slate-500">읽히지 않는 독해는 버립니다. '구조적 읽기'로 승부합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-3xl">
                <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">구문 & 어법 (The Base)</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 문장 성분 단위 끊어 읽기 훈련</li>
                  <li>• 수능 필수 어법 24포인트 정복</li>
                  <li>• 직독직해를 넘어선 의미 단위 분석</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-indigo-50 p-6 rounded-3xl">
                <Search className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">논리 독해 (The Logic)</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 지문 내 핵심 문장(Topic Sentence) 찾기</li>
                  <li>• 단락 간 논리적 연결 고리 분석</li>
                  <li>• 빈칸, 순서, 삽입 등 킬러 문항 전략</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-teal-50 p-6 rounded-3xl">
                <Target className="h-8 w-8 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">실전 내신 (The Grade)</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• 학교별 부교재/모의고사 변형 문제</li>
                  <li>• 고득점 결정짓는 고난도 서술형 대비</li>
                  <li>• 1:1 맞춤 피드백 및 약점 보완</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core System 3: Math Curriculum */}
        <section>
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-red-600 font-bold mb-4">
                <BarChart3 className="h-5 w-5" />
                <span>Math Strategy</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">
                수포자 없는 학원, <br/> 이유 있는 수학 솔루션
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                   <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" />
                   <div>
                     <h4 className="font-bold">백지 개념 테스트</h4>
                     <p className="text-slate-500 text-sm">눈으로 보는 수학이 아닌 직접 써보는 수학으로 개념의 뿌리를 깊게 내립니다.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" />
                   <div>
                     <h4 className="font-bold">계통별 연계 학습</h4>
                     <p className="text-slate-500 text-sm">이전 학년의 결손 부분을 찾아내어 현재 진도와 유기적으로 연결합니다.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <CheckCircle2 className="h-6 w-6 text-red-500 flex-shrink-0" />
                   <div>
                     <h4 className="font-bold">오답 3차 누적 관리</h4>
                     <p className="text-slate-500 text-sm">당일 오답 → 1주일 후 복습 → 시험 직전 유사 유형 정복의 3단계 오답 타파.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-6">수학 레벨별 커리큘럼</h3>
                 <div className="space-y-4">
                   <div className="border-l-2 border-red-500 pl-4 py-2">
                     <div className="text-red-400 text-sm font-bold">LV 1. 기초 다지기</div>
                     <div className="text-lg">연산 강화 및 교과서 기본 개념 마스터</div>
                   </div>
                   <div className="border-l-2 border-orange-500 pl-4 py-2">
                     <div className="text-orange-400 text-sm font-bold">LV 2. 유형 정복</div>
                     <div className="text-lg">쎈, RPM 등 유형서 기반 필수 문항 체득</div>
                   </div>
                   <div className="border-l-2 border-green-500 pl-4 py-2">
                     <div className="text-green-400 text-sm font-bold">LV 3. 심화 분석</div>
                     <div className="text-lg">블랙라벨, 1등급 수학 등 고난도 문항 도출</div>
                   </div>
                   <div className="border-l-2 border-blue-500 pl-4 py-2">
                     <div className="text-blue-400 text-sm font-bold">LV 4. 실전 파이널</div>
                     <div className="text-lg">강동구 기출 및 모의고사 타임 어택 훈련</div>
                   </div>
                 </div>
               </div>
               <div className="absolute top-0 right-0 opacity-5 -mr-20 -mt-20">
                 <Award className="h-80 w-80 text-white" />
               </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20">
           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-12 md:p-20 rounded-[4rem] text-white">
             <MessageCircle className="h-16 w-16 mx-auto mb-6 opacity-50" />
             <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
               우리 아이에게 꼭 맞는 <br className="md:hidden"/>
               맞춤 학습 로드맵을 설계해 드립니다
             </h2>
             <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
               더 이상 남들이 좋다는 학원을 쫓아다니지 마세요. <br/>
               학생의 현재를 분석하고 미래를 그리는 Top English Math가 정답입니다.
             </p>
             <button 
               onClick={onOpenModal}
               className="bg-white text-blue-600 px-12 py-5 rounded-full font-black text-xl hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95"
             >
               무료 레벨테스트 및 상담 신청
             </button>
           </div>
        </section>
      </main>

      {/* Footer Mini */}
      <footer className="bg-white border-t border-slate-200 py-10 text-center">
        <p className="text-slate-400 text-sm">© 2024 Top English Math Academy. Professional Education System.</p>
      </footer>
    </div>
  );
};

export default EducationSystemPage;
