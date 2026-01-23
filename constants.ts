import { SchoolStrategy, SectionId } from './types';

export const ACADEMY_INFO = {
  name: "Top English Math 학원",
  phone: "02-481-7555",
  address: "강동구 동남로 71길 32, 11층 (고덕역 4번 출구)",
  history: 17,
  avgDuration: 5,
};

export const NAV_LINKS = [
  { label: '홈', href: `#${SectionId.HOME}` },
  { label: '교육 시스템', href: `#${SectionId.SYSTEM}` },
  { label: '오시는 길', href: `#${SectionId.CONTACT}` },
];

export const SCHOOL_STRATEGIES: SchoolStrategy[] = [
  {
    schoolName: "한영고 & 광문고",
    description: "내용은 교과서와 유사하나 단어 변형이 매우 심한 학교들입니다.",
    points: [
      "단어 변형 대비 심화 유의어 학습",
      "문맥상 적절한 어휘 선택 훈련",
      "지문 내용은 같아도 표현이 다른 변형 문제 풀이"
    ]
  },
  {
    schoolName: "상일여고 & 명일여고",
    description: "여학생 특유의 꼼꼼함을 요구하며, 서술형이 매우 까다롭습니다.",
    points: [
      "교과서 구석구석 세밀한 암기",
      "감점 없는 완벽한 서술형 답안 작성 연습",
      "고난도 문법 응용 문제 대비"
    ]
  },
  {
    schoolName: "강동고",
    description: "최근 단어 및 문장 구조 변형이 다양해지고 있는 추세입니다.",
    points: [
      "기존 단순 암기 방식 탈피",
      "문장 구조 분석 능력 강화",
      "변형된 문법 포인트 집중 공략"
    ]
  }
];

export const RETENTION_DATA = [
  { name: '일반 학원', value: 1.5, fill: '#94a3b8' },
  { name: 'Top English Math', value: 5.2, fill: '#2563eb' },
];