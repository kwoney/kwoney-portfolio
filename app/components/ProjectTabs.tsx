"use client";

import { useRef, useState, type ReactNode } from "react";
import ImplementationCases from "./ImplementationCases";
import ProjectFlow from "./ProjectFlow";

type Project = {
  id: string;
  index: string;
  name: string;
  type: string;
  period: string;
  role: string;
  headline: string;
  description: ReactNode;
  problem: string;
  features: { title: string; items: string[] }[];
  tech: { name: string; action: ReactNode }[];
  results: string[];
  links: { label: string; href: string; primary?: boolean }[];
  stack: string[];
  accent: string;
};

const projects: Project[] = [
  {
    id: "kozit",
    index: "01",
    name: "KOZIT",
    type: "Solo product · Mobile community",
    period: "2026.03 — NOW",
    role: "기획·디자인·개발·운영 전 과정 단독 수행",
    headline: "낯선 도시에서 관계를 시작하는 전 과정을 제품으로 만들었습니다.",
    description: <>
      장기 체류 외국인과 한국인이 관심사 기반 모임에서 만나는 모바일 커뮤니티입니다. <strong>약 300명 규모의 커뮤니티를 직접 운영하며</strong> 언어 장벽, 참여 신뢰, 호스트 운영의 문제를 확인했고 이를 앱의 탐색·소통·결제 흐름으로 옮겼습니다.
    </>,
    problem:
      "단순한 모임 목록이나 번역 기능만으로는 실제 만남이 만들어지지 않았습니다. 참여 전 신뢰 형성, 다국어 소통, 결제 이후의 취소·환불, 호스트 정산까지 하나의 일관된 흐름이 필요했습니다.",
    features: [
      {
        title: "사용자가 만나는 기능",
        items: [
          "휴대폰 인증과 온보딩, 언어·국가·관심사 기반 프로필",
          "모임·그룹·피드 탐색과 지도 기반 주변 모임 확인",
          "그룹 채팅과 1:1 메시지, 읽음 상태와 안 읽은 메시지 표시",
          "게시글·사진·친구·북마크·알림함으로 이어지는 커뮤니티 경험",
        ],
      },
      {
        title: "호스트와 운영 기능",
        items: [
          "모임 생성·수정, 참여 승인, 정원과 일정 관리",
          "유료 모임 주문·결제·취소·환불과 호스트 예상 정산액 제공",
          "사용자·메시지 신고, 차단, 관리자 검토와 처리 이력",
          "파트너 장소 등록과 운영자용 관리 화면",
        ],
      },
      {
        title: "출시를 위한 안정성",
        items: [
          "가격·일정 변경 제한과 만료 주문 정리로 결제 데이터 보호",
          "웹훅 중복 수신에도 같은 결제가 두 번 처리되지 않도록 멱등성 적용",
          "RLS와 Storage 정책으로 사용자별 조회·수정 범위 제한",
          "퍼널 이벤트와 오류 추적으로 출시 후 개선 근거 마련",
        ],
      },
    ],
    tech: [
      { name: "Expo · React Native", action: <>iOS와 Android에서 동일한 사용자 흐름을 제공하고, 화면·라우팅·푸시 알림을 <strong>하나의 TypeScript 코드베이스로 관리했습니다.</strong></> },
      { name: "Supabase", action: <>Auth·PostgreSQL·Realtime·Storage·Edge Functions를 연결했습니다. RLS 정책을 기능별로 설계해 <strong>앱 코드 밖에서도 접근 권한을 검증합니다.</strong></> },
      { name: "DeepL · Edge Functions", action: <><strong>토큰을 앱에 노출하지 않고 서버에서 번역합니다.</strong> JWT 검증, 문자 수 제한, 배치 번역과 불필요한 요청 건너뛰기로 비용과 실패 범위를 줄였습니다.</> },
      { name: "Toss Payments", action: <>주문·결제·환불·정산 상태를 분리했습니다. <strong>결제 승인 서버 검증과 중복 웹훅 방지</strong>, 가격·일정 잠금과 수수료 스냅샷을 적용했습니다.</> },
      { name: "Amplitude · Sentry", action: <>가입부터 모임 참여까지 주요 이벤트를 정의하고, <strong>분석 코드의 실패가 앱 사용을 막지 않도록</strong> 오류를 분리해 수집했습니다.</> },
    ],
    results: ["단독으로 모바일 앱과 백엔드·운영 구조 완성", "약 300명 커뮤니티 운영 경험을 제품 요구사항에 반영", "2026.08 · 모두의 창업 소셜벤처리그 서류심사 통과"],
    links: [
      { label: "웹사이트", href: "https://kozit.app", primary: true },
      { label: "시연 영상", href: "https://youtube.com/shorts/rlK_qPIgyKg" },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Toss Payments", "DeepL", "Amplitude", "Sentry"],
    accent: "coral",
  },
  {
    id: "welfare",
    index: "02",
    name: "복지나침반",
    type: "Team project · Explainable AI",
    period: "2025.12 — 2026.03",
    role: "프론트엔드·백엔드·AI 서비스 연동",
    headline: "복잡한 복지 정책을 검색에서 자격 판단까지 이어지는 흐름으로 바꿨습니다.",
    description: <>
      흩어진 복지 정책을 찾고, 사용자의 나이·소득·가구 정보에 따라 받을 수 있는 정책과 판단 근거를 확인하는 서비스입니다. 저는 <strong>화면과 Django API, 에이전트 연동을 오가며 주요 사용자 흐름을 구현했습니다.</strong>
    </>,
    problem:
      "정책명 검색만으로는 사용자가 자신에게 맞는 정책인지 알기 어려웠습니다. 질문 속 조건을 구조화하고 정책 검색 결과와 자격 판정을 연결하면서도, 탈락 이유를 이해할 수 있게 보여줘야 했습니다.",
    features: [
      {
        title: "정책 탐색 경험",
        items: [
          "키워드·카테고리·지역 조건을 반영한 정책 검색과 상세 화면",
          "Kakao Map을 이용한 지역별 정책·시설 탐색",
          "관심 정책 저장과 신청 일정을 확인하는 캘린더",
          "프로필 입력값을 추천과 자격 판정에 재사용하는 마이페이지",
        ],
      },
      {
        title: "백엔드와 매칭",
        items: [
          "회원·프로필·스크랩·채팅·정책 API 구현 및 화면 연동",
          "나이·지역·소득·가구 특성 등 정책 조건을 공통 판정 함수로 처리",
          "전체 목록에서 카테고리 다양성 제한 때문에 결과가 누락되던 흐름 개선",
          "판정 결과와 함께 충족·미충족 조건을 응답하도록 연결",
        ],
      },
      {
        title: "AI 대화 흐름",
        items: [
          "사용자 질문에서 자격 판단에 필요한 프로필 정보 추출",
          "질문 재작성, 정책 검색, 자격 확인 도구를 LangGraph 흐름에 연결",
          "부족한 정보는 다시 질문하고 이전 대화 정보를 다음 턴에 유지",
          "검색 결과를 정책 카드와 설명 가능한 답변으로 화면에 표시",
        ],
      },
    ],
    tech: [
      { name: "Next.js", action: <>정책 검색·상세·지도·캘린더·마이페이지를 기능 단위로 나누고 <strong>API 로딩·오류·빈 상태까지 화면 흐름에 반영했습니다.</strong></> },
      { name: "Django REST Framework", action: <>계정과 정책, 스크랩, 채팅 API를 구현해 <strong>사용자 프로필과 AI 추천 결과가 같은 데이터 모델을 사용하도록 연결했습니다.</strong></> },
      { name: "Rule-based matching", action: <>정책 조건을 명시적인 규칙으로 판정하고 공통 함수를 서비스 전체에서 재사용해 <strong>결과와 탈락 이유가 일치하도록 개선했습니다.</strong></> },
      { name: "LangGraph · MCP", action: <>정보 추출·검색·자격 확인을 각각 도구로 분리하고, <strong>대화 상태에 따라 필요한 도구를 호출하는 에이전트</strong>를 서비스에 연동했습니다.</> },
    ],
    results: ["정책 탐색·저장·일정 관리의 주요 화면 구현", "프론트엔드와 Django API를 함께 개발", "추천 결과와 자격 판단 근거를 사용자 화면에 연결"],
    links: [
      { label: "GitHub · 팀 저장소", href: "https://github.com/yongjunan111/4brain-welfare", primary: true },
      { label: "프로젝트 소개서", href: "https://drive.google.com/file/d/1465OcwpIV2AGInZHLofJFlN11F6RTpFO/view?usp=sharing" },
      { label: "기획·개발 문서", href: "https://canyon-advantage-3a8.notion.site/Welfare-Compass-31b88193180e815ab542d78897bcdcc1" },
    ],
    stack: ["Next.js", "TypeScript", "Django", "PostgreSQL", "LangGraph", "MCP", "Kakao Map"],
    accent: "green",
  },
  {
    id: "miary",
    index: "03",
    name: "Mi.ary",
    type: "Team project · Emotion journal",
    period: "2025.08 — CONTINUED",
    role: "프론트엔드 중심·DB·NLP 파이프라인 연동",
    headline: "일기 작성부터 감정 분석과 회고까지 여러 서비스를 하나의 경험으로 연결했습니다.",
    description: <>
      일기 내용을 분석해 감정 흐름을 보여주고 AI 대화를 통해 기록을 돌아보게 하는 웹 서비스입니다. <strong>교육 과정 종료 후에도 MySQL을 PostgreSQL로 전환하고 끊어졌던 NLP 분석 흐름을 복구했습니다.</strong>
    </>,
    problem:
      "프론트엔드, Spring 백엔드, NLP, 챗봇, STT가 나뉜 구조에서 같은 일기와 분석 결과를 안정적으로 주고받아야 했습니다. 초기 구현 이후에도 실행 환경과 데이터베이스 차이로 끊어진 흐름을 다시 맞추는 작업이 필요했습니다.",
    features: [
      {
        title: "기록 경험",
        items: [
          "TipTap 기반 이미지·서식 일기 편집기와 작성·수정·상세 화면",
          "캘린더, 책 넘김 형태의 일기장, 목록과 날짜별 탐색",
          "사진 EXIF 위치를 추출해 Kakao Map에 기록 표시",
          "음성 입력과 사진 갤러리, 공개 일기·댓글 기능",
        ],
      },
      {
        title: "감정 분석과 회고",
        items: [
          "일기 저장 이후 Python NLP 서버에 분석을 요청하는 흐름 연결",
          "분석 결과를 일기 상세의 감정·키워드·피드백으로 시각화",
          "월간 감정 통계와 추이, 감정 네트워크 그래프 구현",
          "일기 내용을 문맥으로 전달하는 AI 챗봇 대화",
        ],
      },
      {
        title: "서비스 통합",
        items: [
          "JWT 인증과 역할에 따른 사용자·관리자 화면 분리",
          "MySQL 데이터를 PostgreSQL 구조로 전환하고 쿼리 호환성 수정",
          "React·Spring·NLP·챗봇·STT의 다섯 앱 서비스 구성과 개발 브랜치의 PostgreSQL 컨테이너 추가",
          "신고 일기와 사용자·태그·모델을 관리하는 관리자 화면",
        ],
      },
    ],
    tech: [
      { name: "React · TipTap", action: <>기록에 집중할 수 있는 편집기와 캘린더·책·지도 형태의 탐색 화면을 만들고 <strong>분석 결과가 같은 경험 안에서 이어지게 했습니다.</strong></> },
      { name: "Spring Boot · MyBatis", action: <>JWT 인증, 일기·사진·감정·키워드 API와 분석 서버 호출을 연결하고 <strong>데이터 변경 이벤트를 서비스 로직에 반영했습니다.</strong></> },
      { name: "PostgreSQL", action: <>기존 MySQL 구조를 PostgreSQL로 옮기며 설정, 스키마와 쿼리를 함께 수정해 <strong>프로젝트 종료 후에도 실행 가능한 상태로 정비했습니다.</strong></> },
      { name: "Python NLP · FastAPI", action: <>감정 분석 데이터와 파이프라인을 정리하고 API를 복구해 <strong>분석 결과가 Spring 백엔드를 거쳐 일기 상세에 저장·표시</strong>되게 했습니다. 개선 코드는 develop 브랜치에서 확인할 수 있습니다.</> },
      { name: "Docker Compose", action: <><strong>React·Spring·NLP·챗봇·STT의 다섯 앱 서비스를 공통 네트워크로 구성했습니다.</strong> develop에는 PostgreSQL 컨테이너가 추가되어 있으며, 현재 실행 설정에는 DB 연결과 NLP 시작 명령의 정비가 필요합니다.</> },
    ],
    results: ["DB 전환과 백엔드 호환성 수정", "NLP 분석 파이프라인 복구 및 화면 연동", "기록·분석·회고로 이어지는 핵심 흐름 구현"],
    links: [
      { label: "시연 영상", href: "https://drive.google.com/file/d/1PDj_LdoNj66AZjmuSa6tf8lralyz-sCh/view?usp=sharing", primary: true },
      { label: "프로젝트 소개서(PPT)", href: "https://drive.google.com/file/d/1P-jgKK6CTMB2os8mLj7Vec6LTl1AY-w7/view?usp=sharing" },
    ],
    stack: ["React", "Spring Boot", "MyBatis", "PostgreSQL", "Python", "FastAPI", "Docker", "Kakao Map"],
    accent: "violet",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function ProjectTabs() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((project) => project.id === activeId) ?? projects[0];
  const browserRef = useRef<HTMLDivElement>(null);
  const activeIndex = projects.indexOf(active);
  const selectProject = (index: number) => {
    const next = projects[(index + projects.length) % projects.length];
    setActiveId(next.id);
    requestAnimationFrame(() => {
      browserRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
      document.getElementById(`tab-${next.id}`)?.focus({ preventScroll: true });
    });
  };

  return (
    <div className="project-browser" ref={browserRef}>
      <div className="project-tabs" role="tablist" aria-label="프로젝트 선택">
        {projects.map((project, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={active.id === project.id}
            aria-controls={`panel-${project.id}`}
            id={`tab-${project.id}`}
            className={active.id === project.id ? "active" : ""}
            tabIndex={active.id === project.id ? 0 : -1}
            onClick={() => selectProject(index)}
            onKeyDown={(event) => {
              const target = event.key === "ArrowRight" ? index + 1 : event.key === "ArrowLeft" ? index - 1 : event.key === "Home" ? 0 : event.key === "End" ? projects.length - 1 : null;
              if (target !== null) { event.preventDefault(); selectProject(target); }
            }}
            key={project.id}
          >
            <span>{project.index}</span>
            <strong>{project.name}</strong>
            <small>{project.role}</small>
          </button>
        ))}
      </div>

      <article
        className={`project-panel ${active.accent}`}
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
      >
        <header className="project-summary">
          <div>
            <p className="eyebrow">{active.type}</p>
            <h3>{active.name}</h3>
            <p className="project-role">{active.period}<span>·</span>{active.role}</p>
            {active.id === "miary" && <p className="private-label">소스 코드 비공개</p>}
          </div>
          <div className="project-links">
            {active.links.map((link) => (
              <a className={link.primary ? "primary-link" : ""} href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                {link.label} <Arrow />
              </a>
            ))}
          </div>
        </header>

        <div className="project-overview">
          <h4>{active.headline}</h4>
          <p>{active.description}</p>
        </div>

        <div className="project-problem">
          <span>Problem</span>
          <p>{active.problem}</p>
        </div>

        <ProjectFlow projectId={active.id} key={`flow-${active.id}`} />

        <section className="feature-section" aria-labelledby={`features-${active.id}`}>
          <div className="subsection-heading"><span>01</span><h4 id={`features-${active.id}`}>{active.id === "kozit" ? "직접 구현한 기능" : "주요 기능과 참여 영역"}</h4></div>
          {active.id !== "kozit" && <p className="contribution-note">팀 프로젝트의 기능 흐름을 함께 소개합니다. 위에 표시한 담당 영역을 중심으로 개발·개선·연동에 참여했으며, 팀 전체 기능의 단독 개발을 의미하지 않습니다.</p>}
          <div className="feature-columns">
            {active.features.map((group) => (
              <div className="feature-group" key={group.title}>
                <h5>{group.title}</h5>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <ImplementationCases projectId={active.id} key={active.id} />

        <section className="tech-section" aria-labelledby={`tech-${active.id}`}>
          <div className="subsection-heading"><span>03</span><h4 id={`tech-${active.id}`}>기술을 실제로 사용한 방식</h4></div>
          <div className="tech-action-list">
            {active.tech.map((item) => <div className="tech-action" key={item.name}><h5>{item.name}</h5><p>{item.action}</p></div>)}
          </div>
        </section>

        <section className="result-section" aria-labelledby={`result-${active.id}`}>
          <div className="subsection-heading"><span>04</span><h4 id={`result-${active.id}`}>구현 결과</h4></div>
          <div className="result-grid">{active.results.map((result, index) => <article className="result-card" key={result}><span className="result-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><p>{result}</p></article>)}</div>
        </section>

        <div className="stack-list" aria-label="사용 기술"><strong>사용 기술</strong>{active.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <nav className="project-pagination" aria-label="다른 프로젝트 보기">
          <button type="button" onClick={() => selectProject(activeIndex - 1)}>← {projects[(activeIndex + projects.length - 1) % projects.length].name}</button>
          <span>{activeIndex + 1} / {projects.length}</span>
          <button type="button" onClick={() => selectProject(activeIndex + 1)}>{projects[(activeIndex + 1) % projects.length].name} →</button>
        </nav>
      </article>
    </div>
  );
}
