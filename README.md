# 예스파일 무료쿠폰 웹사이트

예스파일의 무료 쿠폰을 소개하고 관리하는 정적 웹사이트입니다.

## 프로젝트 개요

- **사이트명**: 예스파일 무료쿠폰
- **도메인**: yes.mrt-offer.co.kr
- **제작 방식**: 순수 HTML, CSS, JavaScript (정적 웹사이트)
- **페이지 수**: 2개

## 페이지 구성

### 1. 무료쿠폰 페이지 (index.html)
- 예스파일 무료쿠폰 소개
- 쿠폰 코드 3개 (yes3416, yes3417, yes3418)
- 주요 기능 소개
- 요금제 비교 표
- 쿠폰 혜택 계산기
- 자주 묻는 질문

### 2. 중복쿠폰 페이지 (duplicate.html)
- 쿠폰 코드 3개 (yes3416, yes3417, yes3418)
- 중복 쿠폰의 정의 및 관리 방법
- 단계별 쿠폰 등록 가이드
- 중복 방지 체크리스트
- 쿠폰 사용 시뮬레이터
- 자주 묻는 질문

## 주요 기능

### SEO 최적화
- JSON-LD 구조화 데이터 (WebSite, WebPage, FAQ, Breadcrumb)
- 메타 태그 최적화 (OG, Twitter Card)
- Sitemap.xml 및 robots.txt 포함

### 사용자 상호작용
- 쿠폰 코드 복사 기능 (클립보드)
- 쿠폰 등록 페이지 자동 이동
- 반응형 디자인 (모바일, 태블릿, PC)
- 부드러운 스크롤 애니메이션

### 독점 콘텐츠
- 요금제 비교 표
- 쿠폰 혜택 계산기
- 중복 방지 체크리스트

## 파일 구조

```
yesfile_site/
├── index.html           # 무료쿠폰 페이지
├── duplicate.html       # 중복쿠폰 페이지
├── styles.css          # 스타일시트
├── script.js           # JavaScript 기능
├── sitemap.xml         # SEO 사이트맵
├── robots.txt          # 검색 로봇 규칙
├── README.md           # 프로젝트 설명
└── images/             # 이미지 폴더
    ├── favicon.png
    ├── og_image.png
    ├── coupon_banner.png
    ├── fast_download.png
    ├── security.png
    ├── mobile_app.png
    ├── customer_support.png
    ├── cloud_storage.png
    ├── movie_streaming.png
    └── entertainment_hub.png
```

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 반응형 디자인, 그리드 레이아웃
- **JavaScript (Vanilla)**: DOM 조작, 이벤트 처리
- **SEO**: 구조화 데이터, 메타 태그

## 설치 및 실행

### 로컬 실행

```bash
# Python 3을 이용한 간단한 HTTP 서버 실행
python3 -m http.server 8000

# 또는 Node.js를 이용한 실행
npx http-server
```

브라우저에서 `http://localhost:8000` 접속

### 배포

정적 웹사이트이므로 다음과 같은 호스팅 서비스에 배포 가능:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- 일반 웹 호스팅

## 쿠폰 코드

| 쿠폰 | 혜택 |
|------|------|
| yes3416 | 프리미엄 1개월 무료 |
| yes3417 | 프리미엄 1개월 무료 |
| yes3418 | 프리미엄 1개월 무료 |

**등록 페이지**: https://couponday.co.kr/?pid=p7476115&site=yesfile

## 주요 기능 설명

### 쿠폰 복사 기능
```javascript
copyCoupon('yes3416');  // 쿠폰 코드를 클립보드에 복사
```

### 쿠폰 등록 페이지 이동
```javascript
openRegistration();  // 등록 페이지로 이동
```

### 쿠폰 혜택 계산
- 1개 쿠폰: ₩9,900 절약
- 2개 쿠폰: ₩19,800 절약
- 3개 쿠폰: ₩29,700 절약

## 반응형 디자인

- **데스크톱**: 1200px 이상
- **태블릿**: 768px ~ 1200px
- **모바일**: 480px ~ 768px
- **소형 모바일**: 480px 이하

## SEO 최적화

### 메타 정보
- Title: 예스파일 무료쿠폰
- Description: 예스파일 무료쿠폰 - yes3416, yes3417, yes3418 쿠폰 코드로 프리미엄 기능을 무료로 이용하세요
- Keywords: 예스파일, 무료쿠폰, 쿠폰코드, yes3416, yes3417, yes3418, 파일공유, 프리미엄

### 구조화 데이터
- WebSite Schema
- WebPage Schema
- FAQ Schema
- Breadcrumb Schema

### 사이트맵 및 로봇 규칙
- sitemap.xml: 모든 페이지 포함
- robots.txt: 검색 엔진 크롤링 허용

## 색상 팔레트

- **주색**: #e63946 (빨강)
- **보조색**: #f1faee (밝은 회색)
- **텍스트**: #1d3557 (진한 파랑)
- **라이트 텍스트**: #666 (회색)

## 브라우저 호환성

- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- IE 11 (부분 지원)

## 성능 최적화

- 이미지 최적화 (PNG, JPG)
- CSS 최소화
- JavaScript 최소화
- 지연 로딩 (Lazy Loading)

## 보안

- HTTPS 권장
- Content Security Policy (CSP) 고려
- XSS 방지
- CSRF 토큰 (필요시)

## 라이선스

이 프로젝트는 예스파일 무료쿠폰 프로모션을 위한 프로젝트입니다.

## 문의 및 지원

문제가 발생하거나 개선 사항이 있으면 이슈를 등록해주세요.

## 업데이트 이력

### v1.0 (2024-01-16)
- 초기 버전 출시
- 2개 페이지 (무료쿠폰, 중복쿠폰)
- SEO 최적화
- 반응형 디자인
- 쿠폰 관리 기능

---

**마지막 수정**: 2024-01-16
