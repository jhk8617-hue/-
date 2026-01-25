
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Train, 
  Bus, 
  Car, 
  Copy,
  Check,
  PhoneCall,
  Map as MapIcon,
  ChevronRight
} from 'lucide-react';
import { ACADEMY_INFO } from '../constants';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const addressQuery = encodeURIComponent(ACADEMY_INFO.address);
  
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(ACADEMY_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mapApps = [
    {
      name: '네이버 지도',
      color: 'bg-[#03C75A] text-white hover:bg-[#02b351]',
      url: `https://map.naver.com/v5/search/${addressQuery}`
    },
    {
      name: '카카오맵',
      color: 'bg-[#FEE500] text-[#3C1E1E] hover:bg-[#fada00]',
      url: `https://map.kakao.com/link/search/${addressQuery}`
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
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
          <div className="font-black text-slate-900 tracking-tight text-xl">CONTACT US</div>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pt-10">
        {/* Title Section */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Location & Contact</span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            성장을 위한 첫 걸음, <br className="sm:hidden" /> <span className="text-blue-600">탑잉글리쉬매스</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Map Container (8 columns) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white p-4 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              <div className="rounded-[2rem] overflow-hidden aspect-[16/10] bg-slate-200 relative">
                <iframe 
                  src={`https://maps.google.com/maps?q=${addressQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Academy Location"
                  className="grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100">
               <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-start gap-4 text-left w-full">
                    <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 text-lg mb-1">학원 주소</h3>
                      <p className="text-slate-500">{ACADEMY_INFO.address}</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleCopyAddress}
                    className="whitespace-nowrap flex items-center gap-2 font-bold bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all shadow-lg"
                  >
                    {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    {copied ? '복사 완료' : '주소 복사하기'}
                  </button>
               </div>

               <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mapApps.map((app) => (
                    <a 
                      key={app.name}
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${app.color} py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-md transition-all active:scale-95`}
                    >
                      <Navigation className="h-5 w-5" />
                      {app.name} 바로가기
                    </a>
                  ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-200">
               <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                 <PhoneCall className="h-6 w-6" />
               </div>
               <h3 className="text-2xl font-black mb-2 tracking-tight">상담 및 예약</h3>
               <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                 원장님과 직접 상담을 통해 <br/> 
                 자녀의 정확한 학습 진단을 받아보세요.
               </p>
               <a 
                 href={`tel:${ACADEMY_INFO.phone}`}
                 className="block w-full bg-white text-blue-600 py-5 rounded-2xl font-black text-xl text-center shadow-lg hover:bg-blue-50 transition-all"
               >
                 {ACADEMY_INFO.phone}
               </a>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100">
               <h3 className="font-black text-slate-900 text-lg mb-6 flex items-center gap-2">
                 <Train className="h-5 w-5 text-purple-600" />
                 대중교통 안내
               </h3>
               <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">지하철 이용 시</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        5호선 <strong>고덕역 4번 출구</strong>에서 <br/>
                        동남로 방향으로 약 450m (도보 5분)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">버스 이용 시</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        <strong>고덕역.광문고</strong> 정류장 하차 <br/>
                        (지선) 3412, 3411, 3212 <br/>
                        (일반) 13, 16, 30-1
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2"></div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">자가용 이용 시</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        건물 내 주차 타워 이용 가능 <br/>
                        (기계식 주차, 대형 SUV 불가)
                      </p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl">
               <h3 className="font-black text-white text-lg mb-6 flex items-center gap-2">
                 <Clock className="h-5 w-5 text-blue-400" />
                 운영 시간
               </h3>
               <div className="space-y-3">
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-slate-400">평일</span>
                   <span className="font-bold">14:00 - 22:00</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-slate-400">토요일</span>
                   <span className="font-bold">10:00 - 22:00</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                   <span className="text-slate-400">일요일</span>
                   <span className="font-bold text-blue-400">시험기간 별도 운영</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
