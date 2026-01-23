import React, { useState } from 'react';
import { X, CheckCircle, Loader2, Send } from 'lucide-react';

interface LevelTestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LevelTestModal: React.FC<LevelTestModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    school: '',
    time: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct the email content
    const recipient = "kys485300@naver.com";
    const subject = `[탑잉글리쉬매스] 레벨테스트 신청 - ${formData.name} 학생`;
    const body = `
안녕하세요, 탑잉글리쉬매스학원입니다.
레벨테스트 신청 내용입니다.

■ 학생 성명: ${formData.name}
■ 전화번호: ${formData.phone}
■ 학교/학년: ${formData.school}
■ 테스트 가능 시간: ${formData.time}

내용을 확인하신 후 학생/학부모님께 연락 부탁드립니다.
    `.trim();

    // In a real production environment, you would use an API like EmailJS or Formspree.
    // Here, we use mailto to ensure the request to send to a specific email is fulfilled directly.
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Simulate network delay for professional feel
    setTimeout(() => {
      // Trigger the email client
      window.location.href = mailtoUrl;
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Auto close after success message
      setTimeout(() => {
        if (submitted) {
          handleClose();
        }
      }, 3000);
    }, 1500);
  };

  const handleClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setFormData({ name: '', phone: '', school: '', time: '' });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm transition-all">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-2 z-10"
        >
          <X className="h-6 w-6" />
        </button>

        {submitted ? (
          <div className="p-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">신청이 접수되었습니다</h3>
            <p className="text-slate-600 mb-6">
              메일 앱이 실행되었습니다. <br/>
              메일을 보내주시면 확인 후 연락드리겠습니다.
            </p>
            <button 
              onClick={handleClose}
              className="text-blue-600 font-bold hover:underline"
            >
              닫기
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Send className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">레벨테스트 신청</h3>
            </div>
            <p className="text-slate-500 mb-8 text-sm">
              신청 버튼을 누르면 원장님 메일로 내용이 전달됩니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <label className="block text-sm font-semibold text-slate-700">성명</label>
                <input
                  required
                  disabled={isSubmitting}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400"
                  placeholder="학생 이름을 입력해 주세요"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-semibold text-slate-700">전화번호</label>
                <input
                  required
                  disabled={isSubmitting}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400"
                  placeholder="010-0000-0000"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-semibold text-slate-700">학교 및 학년</label>
                <input
                  required
                  disabled={isSubmitting}
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400"
                  placeholder="예: 강동고 2학년"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-semibold text-slate-700">테스트 가능시간</label>
                <input
                  required
                  disabled={isSubmitting}
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400"
                  placeholder="예: 평일 오후 7시 이후"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 mt-4 flex items-center justify-center gap-2 disabled:bg-blue-400 disabled:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    신청 처리 중...
                  </>
                ) : (
                  '신청하기'
                )}
              </button>
            </form>
            
            <p className="mt-6 text-center text-xs text-slate-400">
              입력하신 정보는 레벨테스트 안내 및 상담 목적으로만 사용됩니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LevelTestModal;