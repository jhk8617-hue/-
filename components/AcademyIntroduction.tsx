
import React from 'react';
import { 
  Calendar, 
  User, 
  Heart, 
  Users, 
  Target, 
  ChevronRight, 
  BookOpen, 
  Award 
} from 'lucide-react';
import { SectionId } from '../types';

interface AcademyIntroductionProps {
  onOpenModal: () => void;
}

const AcademyIntroduction: React.FC<AcademyIntroductionProps> = ({ onOpenModal }) => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Header */}
        <div className="mb-16 border-b border-slate-100 pb-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Academy Insight
            </span>
            <span className="text-slate-300 text-xs">|</span>
            <span className="text-blue-600 text-xs font-bold tracking-tight">
              사랑해요 내일신문 취재보도
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8">
            [Top English Math 학원] <br/> <span className="text-blue-600">소수 정예 통합형</span>으로 개인맞춤형 교육 실시
          </h2>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-50 text-slate-500 text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>박경숙 리포터</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>2024. 8. 8.</span>
              </div>
            </div>
            <div className="flex gap-3 text-blue-600 font-bold">
              <span>#강동구학원</span>
              <span>#고덕동영수</span>
              <span>#소수정예</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="text-slate-600 leading-relaxed space-y-12 text-lg">
          
          {/* Main Pull Quote */}
          <div className="bg-slate-50 p-10 rounded-3xl border-l-4 border-blue-600 italic font-medium text-slate-800 shadow-sm">
            "한 번 등록한 학생은 장기간 학원에 다니고, 학교 졸업과 함께 학원 생활을 마무리하는 곳. 
            강동구 고덕동 Top English Math 학원의 재원생들은 평균 5년 이상 학원에 다니고 있습니다."
          </div>

          <p className="text-xl leading-relaxed text-slate-700">
            강동구에서 17년간 중고등부 영어수학 전문학원으로 자리매김하고 있는 <strong className="text-slate-900">Top English Math 학원</strong>은 
            <strong className="text-blue-600">소수 정예로 학생맞춤형 수업을 알차게 이끄는 곳</strong>으로 입소문이 자자합니다. 
          </p>

          {/* Emotional Care Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Heart className="h-6 w-6 text-red-500 fill-red-500" />
              "제2의 가족" 같은 꼼꼼한 밀착 상담
            </h3>
            <p>
              김소영 원장은 "그동안 학생과 학부모 상담을 따로 꾸준히 진행하며, ‘제2의 가족’ 같은 분위기를 만들었습니다. 
              부모님에게 말하지 못하는 학생 개인의 고민까지 듣고 상담을 진행하니 학생들이 사춘기도 무난하게 잘 보냈습니다"라고 전합니다.
            </p>
          </div>

          {/* Point 1: System */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Users className="h-7 w-7 text-blue-600" />
              1. 소수 정예 통합형으로 진행되는 수업
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-8 rounded-3xl">
              <div className="space-y-3">
                <h4 className="font-bold text-blue-600 flex items-center gap-2">
                  <Award className="h-5 w-5" /> 체계적 강사진
                </h4>
                <p className="text-sm">영어와 수학 과목별로 총 8명의 전문 강사가 상주하여 빈틈없는 학습 관리를 실천합니다.</p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-blue-600 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" /> 스마트 수업 환경
                </h4>
                <p className="text-sm">자체 제작 지문 자료와 빔프로젝트 수업을 결합하여 학생들의 집중도를 극대화합니다.</p>
              </div>
            </div>
          </div>

          {/* Point 2: School Specific Strategy */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Target className="h-7 w-7 text-blue-600" />
              2. 고교별 출제 특성에 맞춘 전략적 지도
            </h3>
            <ul className="grid grid-cols-1 gap-4 list-none p-0">
              <li className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
                <span className="font-bold text-slate-900 block mb-2">한영고 & 광문고</span>
                <p className="text-sm">지문 내용은 유지하되 단어를 대폭 변형하여 변별력을 확보합니다.</p>
              </li>
              <li className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:border-blue-200 transition-colors">
                <span className="font-bold text-slate-900 block mb-2">상일여고 & 명일여고</span>
                <p className="text-sm">까다로운 서술형과 세밀한 어법 변형에 대비하는 초밀착 지도를 진행합니다.</p>
              </li>
            </ul>
          </div>

          {/* Final CTA Section */}
          <div className="mt-20 py-20 px-8 bg-blue-600 rounded-[3rem] text-center text-white shadow-xl shadow-blue-200">
            <h3 className="text-3xl font-black mb-6">
              자녀의 미래를 바꾸는 <span className="text-blue-200">단 하나의 선택</span>
            </h3>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed">
              17년의 노하우가 집약된 정밀 진단 시스템으로 <br />
              학생의 현재 실력을 객관적으로 증명해 드립니다.
            </p>
            <button 
              onClick={onOpenModal}
              className="group flex items-center gap-3 mx-auto bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              상담 신청
              <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyIntroduction;
