
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { ACADEMY_INFO } from '../constants';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">오시는 길</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">주소</p>
                  <p className="text-slate-300">{ACADEMY_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">상담 문의</p>
                  <a href={`tel:${ACADEMY_INFO.phone}`} className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                    {ACADEMY_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-400 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-1">운영 시간</p>
                  <p className="text-slate-300">평일 14:00 - 22:00</p>
                  <p className="text-slate-300">주말 10:00 - 22:00 (시험기간 연장)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-96 w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 relative">
             <iframe 
                src={`https://maps.google.com/maps?q=${encodeURIComponent(ACADEMY_INFO.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Academy Location"
              ></iframe>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 {ACADEMY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
             <a href="#" className="hover:text-white transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
