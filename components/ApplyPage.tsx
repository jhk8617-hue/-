
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Send, 
  User, 
  Phone, 
  School, 
  CalendarClock, 
  CheckCircle, 
  Loader2,
  ShieldCheck
} from 'lucide-react';

interface ApplyPageProps {
  onBack: () => void;
}

const ApplyPage: React.FC<ApplyPageProps> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    school: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const recipient = "kys485300@naver.com";
    const subject = `[신청] 레벨테스트 및 상담 신청 - ${formData.name} 학생`;
    const body = `
[탑잉글리쉬매스 레벨테스트 및 상담 신청서]

■ 학생 성명: ${formData.name}
■ 연락처: ${formData.phone}
■ 학교 및 학년: ${formData.school}
■ 희망 상담/테스트 시간: ${formData.time}

위 내용으로 상담 신청합니다.
    `.trim();

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // 메일 클라이언트 실행 전 시각적 피드백 제공
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-blue-100 text-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle className="h-14 w-14" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">상담 신청 접수 완료!</h2>
          <p className="text-slate-500 mb-10 leading-relaxed text-lg">
            메일 프로그램이 성공적으로 실행되었습니다. <br/>
            메일을 보내주시면 원장님이 확인 후 <br/>
            빠른 시일 내에 연락드리겠습니다.
          </p>
          <button 
            onClick={onBack}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all font-bold group"
          >
            <div className="bg-slate-100 p-2 rounded-full group-hover:bg-blue-50 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </div>
            <span>이전으로</span>
          </button>
          <div className="font-black text-slate-900 tracking-tight text-xl uppercase">상담 신청</div>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">상담 및 레벨테스트 신청</h1>
          <p className="text-slate-500">학생의 정확한 상태를 진단하여 1:1 학습 로드맵을 제안해 드립니다.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-black text-slate-700 ml-1">
                  <User className="h-4 w-4 text-blue-600" />
                  학생 성명
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="홍길동"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-black text-slate-700 ml-1">
                  <Phone className="h-4 w-4 text-blue-600" />
                  학부모 연락처
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="010-0000-0000"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-black text-slate-700 ml-1">
                  <School className="h-4 w-4 text-blue-600" />
                  학교 및 학년
                </label>
                <input
                  required
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  placeholder="예: 강동고 2학년"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-black text-slate-700 ml-1">
                  <CalendarClock className="h-4 w-4 text-blue-600" />
                  희망 상담 시간
                </label>
                <input
                  required
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="예: 평일 오후 6시 이후"
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4">
              <ShieldCheck className="h-6 w-6 text-blue-600 flex-shrink-0" />
              <p className="text-xs text-blue-800 leading-relaxed">
                입력하신 개인정보는 상담 신청 접수 용도로만 사용됩니다. 신청하기 버튼을 누르면 이메일 전송을 위한 메일 프로그램이 실행됩니다.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-6 w-6 animate-spin" />
                  처리 중...
                </>
              ) : (
                <>
                  <Send className="h-6 w-6" />
                  상담 신청하기
                </>
              )}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ApplyPage;
