
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
    GraduationCap, Menu, X, Star, ArrowRight, ChevronDown, 
    Users, UserCheck, BookOpen, HeartHandshake, Target, 
    CheckCircle2, MapPin, Phone, Clock, ExternalLink, 
    ArrowLeft, Zap, Search, MessageCircle, BarChart3, 
    Award, Send, Loader2, CheckCircle, Navigation, 
    Train, Bus, Car, ChevronRight, PhoneCall 
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// --- Types ---
export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SYSTEM = 'system',
  STRATEGY = 'strategy',
  CONTACT = 'contact',
}

export type ViewType = 'home' | 'system-detail' | 'contact-detail';

// --- Constants ---
const ACADEMY_INFO = {
    name: "Top English Math 학원",
    phone: "02-481-7555",
    address: "강동구 동남로 71길 32, 11층 (고덕역 4번 출구)",
    history: 17,
    avgDuration: 5,
};

const RETENTION_DATA = [
    { name: '일반 학원', value: 1.5, fill: '#94a3b8' },
    { name: 'Top English Math', value: 5.2, fill: '#2563eb' },
];

const SCHOOL_STRATEGIES = [
    {
        schoolName: "한영고 & 광문고",
        description: "내용은 교과서와 유사하나 단어 변형이 매우 심한 학교들입니다.",
        points: ["단어 변형 대비 심화 유의어 학습", "문맥상 적절한 어휘 선택 훈련", "지문 내용은 같아도 표현이 다른 변형 문제 풀이"]
    },
    {
        schoolName: "상일여고 & 명일여고",
        description: "여학생 특유의 꼼꼼함을 요구하며, 서술형이 매우 까다롭습니다.",
        points: ["교과서 구석구석 세밀한 암기", "감점 없는 완벽한 서술형 답안 작성 연습", "고난도 문법 응용 문제 대비"]
    },
    {
        schoolName: "강동고",
        description: "최근 단어 및 문장 구조 변형이 다양해지고 있는 추세입니다.",
        points: ["기존 단순 암기 방식 탈피", "문장 구조 분석 능력 강화", "변형된 문법 포인트 집중 공략"]
    }
];

// --- Components ---

const LevelTestModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', school: '', time: '' });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const recipient = "kys485300@naver.com";
        const subject = `[탑잉글리쉬매스] 레벨테스트 신청 - ${formData.name} 학생`;
        const body = `성명: ${formData.name}\n전화번호: ${formData.phone}\n학교: ${formData.school}\n시간: ${formData.time}`;
        const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        setTimeout(() => {
            window.location.href = mailtoUrl;
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => { if (submitted) onClose(); }, 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
            <div className="bg-white w-full max-w-md rounded-3xl p-8 relative animate-in">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X /></button>
                {submitted ? (
                    <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">신청이 접수되었습니다</h3>
                        <p className="text-slate-500">원장님께 이메일이 발송되었습니다.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Send className="h-6 w-6 text-blue-600"/> 레벨테스트 신청</h3>
                        <div><label className="block text-sm font-bold mb-1">성명</label><input required name="name" onChange={handleChange} className="w-full px-4 py-2 border rounded-xl" placeholder="학생 이름"/></div>
                        <div><label className="block text-sm font-bold mb-1">연락처</label><input required name="phone" onChange={handleChange} className="w-full px-4 py-2 border rounded-xl" placeholder="010-0000-0000"/></div>
                        <div><label className="block text-sm font-bold mb-1">학교/학년</label><input required name="school" onChange={handleChange} className="w-full px-4 py-2 border rounded-xl" placeholder="강동고 2학년"/></div>
                        <div><label className="block text-sm font-bold mb-1">희망 시간</label><input required name="time" onChange={handleChange} className="w-full px-4 py-2 border rounded-xl" placeholder="오후 6시 이후"/></div>
                        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 flex justify-center items-center gap-2">
                            {isSubmitting ? <Loader2 className="animate-spin" /> : '신청하기'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

const EducationSystemPage = ({ onBack, onOpenModal }: { onBack: () => void; onOpenModal: () => void }) => (
    <div className="bg-slate-50 min-h-screen pb-20">
        <header className="bg-white border-b h-16 flex items-center px-4 sticky top-0 z-50 justify-between">
            <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-600 hover:text-blue-600"><ArrowLeft /> 뒤로가기</button>
            <button onClick={onOpenModal} className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold">테스트 신청</button>
        </header>
        <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">
            <div className="text-center">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">System</span>
                <h1 className="text-4xl font-black mt-2 mb-6">성적을 만드는 5단계 솔루션</h1>
                <p className="text-slate-500 text-lg">단순 진도가 아닌 '완전 학습'을 목표로 합니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                    <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-4">영어 커리큘럼</h3>
                    <ul className="space-y-3 text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600"/> 문장 구조 분석 및 끊어 읽기</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600"/> 논리적 흐름 파악을 통한 독해</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600"/> 학교별 변형 문제 집중 훈련</li>
                    </ul>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                    <BarChart3 className="h-10 w-10 text-red-500 mb-4" />
                    <h3 className="text-xl font-bold mb-4">수학 커리큘럼</h3>
                    <ul className="space-y-3 text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500"/> 백지 개념 테스트를 통한 원리 이해</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500"/> 계통별 연계 학습으로 취약점 보완</li>
                        <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-500"/> 오답 3단계 누적 관리 시스템</li>
                    </ul>
                </div>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white">
                <h2 className="text-3xl font-black mb-6">지금 바로 시작하세요</h2>
                <button onClick={onOpenModal} className="bg-blue-600 text-white px-10 py-4 rounded-full font-black text-xl hover:scale-105 transition-transform">상담 예약하기</button>
            </div>
        </div>
    </div>
);

const ContactPage = ({ onBack }: { onBack: () => void }) => (
    <div className="bg-slate-50 min-h-screen">
        <header className="bg-white border-b h-16 flex items-center px-4 sticky top-0 z-50">
            <button onClick={onBack} className="flex items-center gap-2 font-bold text-slate-600 hover:text-blue-600"><ArrowLeft /> 뒤로가기</button>
        </header>
        <div className="max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-black text-center mb-12">오시는 길</h1>
            <div className="bg-white p-10 rounded-[3rem] shadow-xl border mb-12 flex flex-col items-center">
                <MapPin className="h-16 w-16 text-red-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold mb-2">{ACADEMY_INFO.name}</h3>
                <p className="text-slate-600 mb-8">{ACADEMY_INFO.address}</p>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-8">
                    <div className="space-y-2">
                        <h4 className="font-bold flex items-center gap-2"><Train className="h-4 w-4 text-purple-600"/> 지하철</h4>
                        <p className="text-sm text-slate-500">5호선 고덕역 4번 출구 도보 5분</p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold flex items-center gap-2"><Bus className="h-4 w-4 text-blue-600"/> 버스</h4>
                        <p className="text-sm text-slate-500">고덕역.광문고 정류장 하차</p>
                    </div>
                </div>
                <a href={`tel:${ACADEMY_INFO.phone}`} className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 flex items-center gap-2">
                    <PhoneCall className="h-5 w-5"/> 전화 상담 예약
                </a>
            </div>
        </div>
    </div>
);

const Navbar = ({ onHome, onSystem, onContact }: { onHome: () => void; onSystem: () => void; onContact: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white shadow-md fixed w-full z-50 top-0">
            <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
                <button onClick={onHome} className="flex items-center gap-2">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                    <span className="font-bold text-xl text-slate-800 tracking-tight">{ACADEMY_INFO.name}</span>
                </button>
                <div className="hidden md:flex space-x-8 font-bold text-slate-600">
                    <button onClick={onHome} className="hover:text-blue-600">홈</button>
                    <button onClick={onSystem} className="hover:text-blue-600">교육 시스템</button>
                    <button onClick={onContact} className="hover:text-blue-600">오시는 길</button>
                </div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X/> : <Menu/>}</button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-lg">
                    <button onClick={() => {onHome(); setIsOpen(false);}} className="block w-full text-left font-bold py-2">홈</button>
                    <button onClick={() => {onSystem(); setIsOpen(false);}} className="block w-full text-left font-bold py-2">교육 시스템</button>
                    <button onClick={() => {onContact(); setIsOpen(false);}} className="block w-full text-left font-bold py-2">오시는 길</button>
                </div>
            )}
        </nav>
    );
};

const Hero = ({ onSystem }: { onSystem: () => void }) => (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-blue-900/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white">
            <div className="flex flex-col space-y-16 md:space-y-24">
                <div className="animate-in">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-8">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="font-bold text-sm tracking-widest uppercase">No.1 Gangdong Academy</span>
                    </div>
                    <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[6.5rem] lg:text-[7.5rem] font-black leading-none text-orange-500 drop-shadow-2xl mb-8">Top English Math</h1>
                    <div className="text-3xl md:text-6xl font-black space-y-4">
                        <div>2-6명 <span className="text-orange-500">소수정예</span> 수업</div>
                        <div className="text-white/80">1:1 <span className="border-b-4 border-orange-500">코칭 시스템</span></div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 animate-in delay-300">
                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl font-medium">
                        졸업할 때까지 다니는 학원, 동생까지 믿고 맡기는 곳. <br/>
                        <span className="text-white">17년의 명성</span>이 증명하는 완벽한 성적 변화를 경험하세요.
                    </p>
                    <button onClick={onSystem} className="bg-blue-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-500 transition-all flex items-center gap-3">
                        시스템 확인하기 <ArrowRight/>
                    </button>
                </div>
            </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"><ChevronDown className="h-8 w-8"/></div>
    </section>
);

const AcademyIntroduction = ({ onOpenModal }: { onOpenModal: () => void }) => (
    <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
            <div className="mb-12 border-b border-slate-100 pb-8">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">Academy Insight</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                    [Top English Math 학원] <br/> <span className="text-blue-600">소수 정예 통합형</span>으로 맞춤형 교육
                </h2>
                <div className="flex gap-4 text-sm text-slate-400">
                    <span>박경숙 리포터</span><span>|</span><span>2024. 8. 8.</span>
                </div>
            </div>
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
                <div className="bg-slate-50 p-8 rounded-3xl border-l-4 border-blue-600 italic font-medium text-slate-800">
                    "재원생 평균 5년 이상 수강. 졸업할 때까지 함께하는 강동구의 신뢰받는 학원입니다."
                </div>
                <p>강동구 고덕동에서 17년째 자리를 지키고 있는 탑잉글리쉬매스학원은 원장님의 밀착 상담과 전문 강사진의 체계적인 수업으로 유명합니다.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                    <div className="bg-white border p-6 rounded-2xl shadow-sm">
                        <Users className="h-8 w-8 text-blue-600 mb-4"/>
                        <h4 className="font-bold mb-2">소수 정예 수업</h4>
                        <p className="text-sm">한 반 2~6명 인원 제한으로 실시간 피드백 및 개별 진도를 보장합니다.</p>
                    </div>
                    <div className="bg-white border p-6 rounded-2xl shadow-sm">
                        <Target className="h-8 w-8 text-blue-600 mb-4"/>
                        <h4 className="font-bold mb-2">학교별 맞춤 전략</h4>
                        <p className="text-sm">한영고, 광문고, 상일여고 등 주요 고교의 17년 기출 빅데이터를 보유하고 있습니다.</p>
                    </div>
                </div>
                <button onClick={onOpenModal} className="w-full mt-12 bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-xl">
                    무료 레벨테스트 신청하기 <ChevronRight/>
                </button>
            </div>
        </div>
    </section>
);

const FeaturesSection = () => (
    <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">왜 <span className="text-blue-600">탑잉글리쉬매스</span>인가요?</h2>
            <p className="text-slate-500 text-lg mb-16">결과가 다른 17년의 교육 노하우</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><HeartHandshake className="text-blue-600"/> 압도적인 수강 기간</h3>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={RETENTION_DATA} layout="vertical">
                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="name" width={100} tick={{fontSize: 12, fontWeight: 'bold'}} />
                                <Tooltip cursor={{fill: 'transparent'}} />
                                <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={35}>
                                    {RETENTION_DATA.map((entry, index) => <Cell key={index} fill={entry.fill} />)}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-xs text-center text-slate-400 mt-4">* 재원생 평균 수강 기간 (년) 비교</p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {[
                        { icon: <Users className="text-blue-600"/>, title: '소수 정예 수업', desc: '한 반 2~6명 구성으로 실시간 밀착 피드백' },
                        { icon: <UserCheck className="text-indigo-600"/>, title: '1:1 밀착 코칭', desc: '개별 이해도에 맞춘 진도 설정과 일일 테스트' },
                        { icon: <BookOpen className="text-teal-600"/>, title: '자체 기출 분석', desc: '강동구 주요 고교 17년치 데이터 기반 교재' }
                    ].map((f, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-l-4 border-l-blue-600 flex gap-4">
                            <div className="bg-slate-50 p-3 rounded-xl h-fit">{f.icon}</div>
                            <div><h4 className="font-bold text-lg mb-1">{f.title}</h4><p className="text-sm text-slate-500">{f.desc}</p></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const StrategySection = ({ onOpenModal }: { onOpenModal: () => void }) => (
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">학교별 <span className="text-blue-600">내신 전략</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
                {SCHOOL_STRATEGIES.map((s, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-[2rem] border hover:shadow-2xl transition-all group">
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{s.schoolName}</h3>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">{s.description}</p>
                        <ul className="space-y-3">
                            {s.points.map((p, pi) => (
                                <li key={pi} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                                    <CheckCircle2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0"/> {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <button onClick={onOpenModal} className="mt-16 bg-slate-900 text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform">무료 레벨테스트 신청</button>
        </div>
    </section>
);

const Footer = ({ onContact }: { onContact: () => void }) => (
    <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">오시는 길</h2>
                <div className="space-y-4 text-slate-400">
                    <div className="flex gap-3"><MapPin className="text-blue-400"/> {ACADEMY_INFO.address}</div>
                    <div className="flex gap-3"><Phone className="text-blue-400"/> {ACADEMY_INFO.phone}</div>
                    <div className="flex gap-3"><Clock className="text-blue-400"/> 평일 14:00 - 22:00 / 주말 10:00 - 22:00</div>
                </div>
                <button onClick={onContact} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700">
                    상세 위치 보기 <ExternalLink className="h-4 w-4"/>
                </button>
            </div>
            <div className="bg-slate-800 rounded-3xl h-64 flex flex-col items-center justify-center border border-slate-700 cursor-pointer group" onClick={onContact}>
                <MapPin className="h-12 w-12 text-red-500 animate-bounce mb-2" />
                <div className="bg-white text-slate-900 px-4 py-1 rounded-full text-xs font-bold mb-4">고덕역 4번 출구 인근</div>
                <span className="text-blue-400 group-hover:underline">클릭하여 지도 크게 보기</span>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            © 2024 {ACADEMY_INFO.name}. All rights reserved.
        </div>
    </footer>
);

// --- Root App ---
const App = () => {
    const [view, setView] = useState<ViewType>('home');
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, [view]);

    if (view === 'system-detail') return <EducationSystemPage onBack={() => setView('home')} onOpenModal={() => setIsModalOpen(true)} />;
    if (view === 'contact-detail') return <ContactPage onBack={() => setView('home')} />;

    return (
        <div className="min-h-screen">
            <Navbar onHome={() => setView('home')} onSystem={() => setView('system-detail')} onContact={() => setView('contact-detail')} />
            <Hero onSystem={() => setView('system-detail')} />
            <AcademyIntroduction onOpenModal={() => setIsModalOpen(true)} />
            <FeaturesSection />
            <StrategySection onOpenModal={() => setIsModalOpen(true)} />
            <Footer onContact={() => setView('contact-detail')} />
            
            <div className="fixed bottom-6 right-6 z-40">
                <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2">
                    <MessageCircle className="h-6 w-6" />
                    <span className="font-bold pr-2 hidden sm:inline">상담 신청</span>
                </button>
            </div>

            <LevelTestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
