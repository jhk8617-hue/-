
import React from 'react';
import { Users, UserCheck, BookOpen, HeartHandshake } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { RETENTION_DATA, ACADEMY_INFO } from '../constants';
import { SectionId } from '../types';

const Features: React.FC = () => {
  return (
    <section id={SectionId.SYSTEM} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            왜 <span className="text-blue-600">탑잉글리쉬매스</span>인가요?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            17년간 강동구에서 쌓아온 데이터와 노하우로 <br/> 학생 맞춤형 교육의 새로운 표준을 제시합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <HeartHandshake className="text-blue-600 h-8 w-8" />
              압도적인 평균 수강 기간
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              보통 학원은 1-2년이면 옮기기 마련입니다. 하지만 우리 학원은 다릅니다.
              초등부터 고등 졸업까지, 재원생 평균 {ACADEMY_INFO.avgDuration}년 이상의 장기 수강은
              학부모님들의 <span className="font-bold text-blue-600 underline underline-offset-4">깊은 신뢰</span>를 증명합니다.
            </p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={RETENTION_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis type="number" unit="년" hide />
                  <YAxis type="category" dataKey="name" width={100} tick={{fill: '#475569', fontWeight: 600}} />
                  <Tooltip 
                    cursor={{fill: 'rgba(0,0,0,0.02)'}}
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                     {RETENTION_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-slate-400 mt-4">* 재원생 평균 수강 기간 비교 데이터</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-50 hover:border-blue-200 transition-all border-l-4 border-l-blue-600">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">2~6명 소수 정예 수업</h4>
                  <p className="text-slate-600">
                    철저한 소수 정예 운영으로 학생 한 명 한 명의 학습 결손을 <br/> 실시간으로 파악하고 메꿉니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-50 hover:border-indigo-200 transition-all border-l-4 border-l-indigo-600">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <UserCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">1:1 밀착 코칭 시스템</h4>
                  <p className="text-slate-600">
                    개인별 이해도에 맞춘 진도 설정과 일일 테스트로 <br/> 학생의 잠재력을 최대로 끌어올립니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-50 hover:border-teal-200 transition-all border-l-4 border-l-teal-600">
              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-xl text-teal-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">자체 제작 교재 & 콘텐츠</h4>
                  <p className="text-slate-600">
                    강동구 주요 고교의 기출 빅데이터를 기반으로 <br/> 직접 제작한 최적의 변형 문제를 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
