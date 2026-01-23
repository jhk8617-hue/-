
import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Train, 
  Bus, 
  Car, 
  Map as MapIcon,
  PhoneCall,
  ChevronRight
} from 'lucide-react';
import { ACADEMY_INFO } from '../constants';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const addressQuery = encodeURIComponent(ACADEMY_INFO.address);
  
  const mapApps = [
    {
      name: '네이버 지도',
      color: 'bg-[#03C75A] text-white',
      icon: 'N',
      url: `https://map.naver.com/v5/search/${addressQuery}`
    },
    {
      name: '카카오맵',
      color: 'bg-[#FEE500] text-[#3C1E1E]',
      icon: 'K',
      url: `https://map.kakao.com/link/search/${addressQuery}`
    },
    {
      name: '구글 지도',
      color: 'bg-white border border-slate-200 text-slate-700',
      icon: 'G',
      url: `https://www.google.com/maps/search/${addressQuery}`
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
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
          <div className="font-bold text-slate-900">Location & Contact</div>
          <div className="w-20 md:w-auto"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pt-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">오시는 길</h1>
          <p className="text-slate-500 text-lg">Top English Math 학원은 고덕역 4번 출구 인근에 위치하고 있습니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Map & Buttons */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative aspect-video flex items-center justify-center">
                 {/* Visual Map Fallback (Always Shown for Stability) */}
                 <div className="text-center p-8">
                    <MapPin className="h-16 w-16 text-red-500 mx-auto mb-4 animate-bounce" />
                    <p className="text-2xl font-black text-slate-800 mb-2">{ACADEMY_INFO.name}</p>
                    <p className="text-slate-600 font-medium mb-1">{ACADEMY_INFO.address}</p>
                    <p className="text-blue-600 font-bold mb-8">고덕역 4번 출구에서 도보 약 5분</p>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                      {mapApps.map((app) => (
                        <a 
                          key={app.name}
                          href={app.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${app.color} px-6 py-3 rounded-full font-bold text-sm shadow-md hover:scale-105 transition-transform flex items-center gap-2`}
                        >
                          <span className="w-5 h-5 flex items-center justify-center rounded-sm bg-black/10 text-[10px] font-black">{app.icon}</span>
                          {app.name} 앱에서 보기
                        </a>
                      ))}
                    </div>
                 </div>
            </div>

            <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <PhoneCall className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">방문 전 상담 예약</h3>
                  <p className="text-blue-100">원활한 상담을 위해 전화 예약을 부탁드립니다.</p>
                </div>
              </div>
              <a 
                href={`tel:${ACADEMY_INFO.phone}`}
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-black text-xl hover:bg-blue-50 transition-all shadow-xl whitespace-nowrap"
              >
                {ACADEMY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Navigation className="h-6 w-6 text-blue-600" />
                교통수단 안내
              </h3>
              
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="bg-purple-50 p-3 h-fit rounded-2xl">
                    <Train className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">지하철 이용 시</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      <span className="inline-block bg-purple-600 text-white text-[10px] px-1.5 py-0.5 rounded mr-1">5호선</span>
                      <strong>고덕역 4번 출구</strong>에서 도보 약 5분 (447m) <br/>
                      출구에서 나와 대각선 방향 고덕동 상업지구 내 위치
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 h-fit rounded-2xl">
                    <Bus className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">버스 이용 시</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      <strong>고덕역.광문고 정류장</strong> 하차 <br/>
                      (간선) 3412, 3212, 3411 <br/>
                      (일반) 13, 13-2, 16, 30-1
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-slate-50 p-3 h-fit rounded-2xl">
                    <Car className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">자가용 이용 시</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      내비게이션에 <strong>'강동구 동남로 71길 32'</strong> 검색 <br/>
                      건물 내 기계식 주차 가능 (SUV 일부 차종 제외) <br/>
                      인근 고덕동 노상 공영주차장 이용 권장
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  학원 운영 시간
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-slate-500">평일(월-금)</span>
                  <span className="text-slate-900 font-medium">14:00 - 22:00</span>
                  <span className="text-slate-500">토요일</span>
                  <span className="text-slate-900 font-medium">10:00 - 18:00</span>
                  <span className="text-slate-500">일요일/공휴일</span>
                  <span className="text-slate-900 font-medium text-red-500">사전예약제 운영</span>
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
