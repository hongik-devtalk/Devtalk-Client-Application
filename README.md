# 🎓 DevTalk Frontend

🌐 **웹사이트**: https://hongikdevtalk.com

**홍익대학교 세미나 플랫폼 'Devtalk'**의 프론트엔드 클라이언트입니다.
세미나 신청부터 라이브 참여, 후기 작성, 관리자용 세미나 관리까지
전 과정을 통합 관리하는 React 기반 사용자 인터페이스입니다.

## 📋 프로젝트 개요

DevTalk은 세미나 발견, 신청, 관리, 라이브 강의 참여 등을 한 곳에서 관리할 수 있는 통합 플랫폼입니다. 사용자는 자신에게 맞는 세미나를 찾아 신청하고 참여할 수 있으며, 관리자는 세미나를 생성하고 참가자를 관리할 수 있습니다.

## ✨ 주요 기능

### 🎓 사용자 기능

- **세미나 정보 습득**: 현재 개최 예정 세미나 및 이전 세미나 정보 조회
- **세미나 신청**: 간편한 신청 폼 작성 및 제출
- **라이브 강의 참여**: 실시간 강의 스트리밍 (인증 기반)
- **강의 리뷰**: 세미나 참가 후 후기 작성 및 평가
- **출석 관리**: 라이브 강의 중 출석 인증 및 확인

### ⚙️ 관리자 기능

- **세미나 관리**: 세미나 생성, 수정, 삭제
- **신청자 관리**: 신청자 목록 조회, 상세 정보 및 출석 관리
- **홈페이지 관리**: 프로모션 배너, 링크, 리뷰 관리
- **어드민 계정 관리**: 어드민 권한 및 계정 추가/삭제

## 🛠 기술 스택

### Frontend

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat-square&logo=vite)
![React Router](https://img.shields.io/badge/React%20Router-7.9.1-CA4245?style=flat-square&logo=react-router)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-06B6D4?style=flat-square&logo=tailwind-css)

![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5.90.2-FF4154?style=flat-square&logo=react-query)
![Axios](https://img.shields.io/badge/Axios-1.12.2-5A29E4?style=flat-square&logo=axios)
![Zustand](https://img.shields.io/badge/Zustand-5.0.8-000000?style=flat-square)
![React Toastify](https://img.shields.io/badge/React%20Toastify-11.0.5-3D3D3D?style=flat-square)

### 개발 도구

![ESLint](https://img.shields.io/badge/ESLint-9.15.0-4B32C3?style=flat-square&logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-3.4.2-F7B93E?style=flat-square&logo=prettier)

## 📁 프로젝트 구조

```
Devtalk-Client-Application/
├── public/
├── src/
│   ├── apis/                    # API 통신 모듈
│   │   ├── authApi.ts          # 인증 API
│   │   ├── userInstance.ts      # 사용자 API 인스턴스
│   │   ├── adminInstance.ts     # 관리자 API 인스턴스
│   │   ├── seminarList.ts       # 세미나 목록 API
│   │   ├── seminarDetail.ts     # 세미나 상세 API
│   │   ├── seminarApply.ts      # 세미나 신청 API
│   │   ├── Applicants/          # 신청자 관련 API
│   │   ├── SeminarDetail/       # 세미나 상세 관리 API
│   │   ├── SeminarLive/         # 라이브 강의 API
│   │   ├── HomeManage/          # 홈페이지 관리 API
│   │   └── ShowSeminar/         # 세미나 전시 API
│   │
│   ├── components/              # 재사용 가능한 컴포넌트
│   │   ├── admin/               # 관리자 컴포넌트
│   │   ├── user/                # 사용자 컴포넌트
│   │   ├── common/              # 공통 컴포넌트
│   │   └── ...
│   │
│   ├── pages/                   # 페이지 컴포넌트
│   │   ├── admin/               # 관리자 페이지
│   │   │   ├── auth-manage/    # 계정 관리
│   │   │   ├── home-manage/    # 홈페이지 관리
│   │   │   ├── seminar-manage/ # 세미나 관리
│   │   │   └── seminar-live/   # 라이브 강의 관리
│   │   └── user/                # 사용자 페이지
│   │       ├── home/           # 홈 페이지
│   │       ├── seminar/        # 세미나 관련 페이지
│   │       └── mypage/         # 마이페이지
│   │
│   ├── routes/                  # 라우팅 설정
│   ├── layouts/                 # 레이아웃 컴포넌트
│   ├── hooks/                   # 커스텀 훅
│   ├── contexts/                # Context API
│   ├── stores/                  # Zustand 스토어
│   ├── types/                   # TypeScript 타입 정의
│   ├── styles/                  # 전역 스타일
│   ├── constants/               # 상수
│   ├── utils/                   # 유틸리티 함수
│   ├── assets/                  # 이미지, 아이콘
│   ├── App.tsx                  # 메인 App 컴포넌트
│   └── main.tsx                 # 엔트리포인트
│
├── index.html                   # HTML 템플릿
├── tailwind.config.js           # Tailwind CSS 설정
├── vite.config.ts               # Vite 설정
├── tsconfig.json                # TypeScript 설정
├── eslint.config.js             # ESLint 설정
├── .prettierrc                  # Prettier 설정
├── vercel.json                  # Vercel 배포 설정
└── package.json                 # 프로젝트 의존성
```

## 📱 주요 페이지

### 사용자 페이지

- **홈** (`/`): 현재 개최 예정 및 지난 세미나 조회
- **세미나 목록** (`/seminar`): 세미나 검색 및 조회
- **세미나 상세** (`/seminar/:id`): 세미나 상세 정보 및 신청
- **신청 질문** (`/seminar/apply-question`): 신청 시 질문 내용
- **라이브 입장** (`/seminar/live/:id`): 실시간 강의 참여 및 출석 확인
- **라이브 인증** (`/seminar/live/verification`): 라이브 강의 인증
- **강의 리뷰** (`/seminar/review`): 세미나 후기 작성
- **연사 목록** (`/speakers`): 연사 정보 조회
- **연사 상세** (`/speakers/:id`): 연사 프로필 조회
- **FAQ** (`/notice/qna`): FAQ 확인
- **문의** (`/notice/inquiry`): 문의하기

### 관리자 페이지

- **관리자 로그인** (`/admin`): 관리자 인증
- **홈노출 설정** (`/admin/home/exposure`): 홈화면 노출 세미나 설정
- **프로모션 이미지** (`/admin/home/promo`): 홍보 배너 관리
- **링크 관리** (`/admin/home/links`): 홈페이지 링크 관리
- **리뷰 관리** (`/admin/home/reviews`): 후기 카드 관리
- **세미나 목록** (`/admin/seminars`): 세미나 관리 (생성, 수정, 삭제)
- **세미나 상세** (`/admin/seminars/:id`): 세미나 상세 정보 수정
- **세미나 추가** (`/admin/seminars/add`): 새 세미나 생성
- **신청자 상세** (`/admin/seminars/applicants/:id`): 신청자 정보 관리
- **신청자 질문** (`/admin/seminars/applicants/:id/questions`): 신청자 질문 관리
- **계정 관리** (`/admin/admin-accounts`): 어드민 계정 추가/삭제 및 권한 관리

## 👥 Contributors

| 이름        | 역할          | 담당 기능                                                                                                                     |
| ----------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| @waldls     | Frontend Lead | 세미나 신청하기 전반 UI/로직 구현, 활성화 세미나 & 세부정보 조회 및 유저 홈화면 컴포넌트 구현                                 |
| @jungyungee | Frontend Lead | 디자인 시스템 및 레이아웃·라우팅 구조 설계, 어드민 홈화면·관리자 계정 관리 및 로그인 전반 UI/로직, 유저 세미나 신청 모달 구현 |
| @cchaeyoon  | Frontend      | 유저 홈 화면 전반(메인 영상, 세미나/후기 카드) 및 유저 라이브(입장/출석체크) UI/로직 구현                                     |
| @wlsldm     | Frontend      | 세미나 홈, 세미나 상세 페이지 및 리뷰 작성 UI/로직 구현                                                                       |
| @BeJunseok  | Frontend      | 어드민 세미나 관리 전반(세미나 카드 조회/상세정보/추가하기) UI/로직, 어드민 모달·레이아웃·메뉴바 구현                         |
| @wnsjun     | Frontend      | 어드민 세미나 신청자 관리 전반(상세정보/출석관리) UI/로직, 이메일 템플릿 구현, 배포 및 자동화(CI/CD) 설정                     |
