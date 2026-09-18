const Arrow = () => <span aria-hidden="true">↗</span>;

const proofCards = [
  { number: "01", title: "문제를 구조화합니다", body: "84개 기관의 규정과 현업 의견을 데이터 기준과 업무 흐름으로 바꾸어 개발자가 구현할 수 있는 요구사항을 만들었습니다." },
  { number: "02", title: "끝까지 연결합니다", body: "화면 한 장에 머무르지 않고 인증, 데이터, AI, 결제와 운영 도구까지 사용자가 실제로 이용하는 흐름으로 연결합니다." },
  { number: "03", title: "운영을 생각합니다", body: "권한 정책, 중복 요청, 오류 추적, 이벤트 분석처럼 출시 후 문제가 되는 지점을 구현 단계부터 함께 설계합니다." },
];

const projects = [
  {
    id: "kozit", index: "01", name: "KOZIT", eyebrow: "Solo product · Mobile community", accent: "coral",
    headline: "낯선 도시에서 관계를 시작하는 과정을 하나의 제품으로 연결했습니다.",
    description: "장기 체류 외국인과 한국인이 관심사 기반 모임에서 만날 수 있는 모바일 커뮤니티입니다. 사용자들과의 대화에서 언어 장벽과 신뢰 문제를 발견하고, 탐색부터 결제·정산·운영까지 단독으로 설계하고 개발했습니다.",
    challenge: "번역 기능을 붙이는 것만으로는 실제 만남이 만들어지지 않았습니다. 안전한 참여와 결제, 호스트 운영까지 이어지는 전체 흐름이 필요했습니다.",
    solutions: [
      ["Expo · React Native", "하나의 TypeScript 코드베이스로 모임 탐색, 채팅, 프로필과 호스트 운영 화면을 구현했습니다."],
      ["Supabase", "Auth·PostgreSQL·Realtime·Storage를 연결하고 RLS로 사용자별 데이터 접근 범위를 제한했습니다."],
      ["Edge Functions · DeepL", "JWT 검증, 문자 수 제한, 배치 번역과 번역 불필요 문장 건너뛰기를 적용해 비용과 실패 가능성을 낮췄습니다."],
      ["Toss Payments", "주문·결제·취소·환불·호스트 정산 상태를 분리하고 웹훅 중복 처리와 가격 변경을 방어했습니다."],
      ["Amplitude · Sentry", "가입부터 모임 참여까지 이벤트를 정의하고, 오류가 발생한 사용자 흐름을 추적할 수 있게 만들었습니다."],
    ],
    outcomes: ["기획부터 앱·백엔드·운영 도구까지 단독 구현", "약 300명 규모의 커뮤니티를 직접 운영하며 문제 검증", "출시 전 결제·보안·오류 추적 흐름 구축"],
    links: [{ label: "서비스 소개", href: "https://github.com/kwoney/kozit-landing" }],
  },
  {
    id: "welfare", index: "02", name: "복지나침반", eyebrow: "Team project · Explainable recommendation", accent: "green",
    headline: "복잡한 복지 정책을 사용자가 이해할 수 있는 탐색과 추천 흐름으로 바꿨습니다.",
    description: "조건이 복잡하고 흩어져 있는 복지 정책을 검색하고, 사용자 정보에 맞는 정책과 판단 근거를 확인할 수 있는 서비스입니다. 프론트엔드와 백엔드를 오가며 실제 사용자 흐름을 완성했습니다.",
    challenge: "정책을 많이 보여주는 것보다, 내가 받을 수 있는지와 그 이유를 빠르게 이해시키는 것이 핵심이었습니다.",
    solutions: [
      ["Next.js", "정책 검색·상세, 지도, 캘린더, 마이페이지를 구현하고 API 상태가 화면 흐름과 자연스럽게 연결되도록 구성했습니다."],
      ["Django REST API", "계정·챗·정책 API를 구현하고 사용자 프로필과 정책 데이터를 프론트엔드 기능에 연결했습니다."],
      ["Rule-based matching", "공통 자격 판정 함수를 적용하고 전체 조회에서 결과가 임의로 제한되지 않도록 정책 매칭 흐름을 개선했습니다."],
      ["LangGraph · MCP", "사용자 질문에서 필요한 정보를 수집하고 검색과 자격 판단 도구를 호출하는 에이전트 흐름을 서비스에 연동했습니다."],
    ],
    outcomes: ["정책 탐색부터 저장·일정 관리까지 주요 화면 구현", "프론트엔드와 Django API를 함께 개발", "추천 결과와 자격 판단 근거를 연결"],
    links: [{ label: "GitHub", href: "https://github.com/yongjunan111/4brain-welfare" }],
  },
  {
    id: "miary", index: "03", name: "Mi.ary", eyebrow: "Team project · Emotion journal", accent: "violet",
    headline: "교육 프로젝트를 끝낸 뒤에도 데이터와 AI 파이프라인을 다시 살렸습니다.",
    description: "일기에서 감정을 분석하고 기록을 돌아볼 수 있도록 돕는 서비스입니다. 일기 작성 경험과 NLP 결과를 연결했으며, 프로젝트 종료 후에도 데이터베이스와 분석 파이프라인을 정비했습니다.",
    challenge: "기능을 한 번 구현하는 것보다 여러 서비스가 같은 데이터와 결과를 안정적으로 주고받게 만드는 일이 더 어려웠습니다.",
    solutions: [
      ["React · TipTap", "캘린더, 일기 작성·목록·상세, 사진 갤러리와 관리자 화면을 만들고 편집 경험을 구성했습니다."],
      ["PostgreSQL", "기존 MySQL 구조를 PostgreSQL로 전환하고 백엔드 쿼리와 설정을 함께 수정해 서비스 호환성을 맞췄습니다."],
      ["Python NLP · Flask", "감정 분석 데이터와 파이프라인을 정리하고 백엔드 API에 다시 연결해 분석 결과가 일기 상세 화면까지 전달되게 했습니다."],
      ["Docker Compose", "프론트엔드, Spring 백엔드, 데이터베이스와 분석 서비스를 컨테이너 단위로 연결해 실행 환경을 맞췄습니다."],
    ],
    outcomes: ["DB 전환과 백엔드 호환성 수정", "NLP 분석 파이프라인 복구 및 화면 연동", "작성·분석·회고로 이어지는 핵심 사용자 흐름 구현"],
    links: [{ label: "GitHub", href: "https://github.com/kwoney/miary" }],
  },
];

export default function Home() {
  return <main>
    <header className="nav-wrap"><nav className="nav shell" aria-label="주요 메뉴">
      <a className="wordmark" href="#top" aria-label="처음으로">KWON<br />EUNYOUNG</a>
      <div className="nav-links"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
    </nav></header>

    <section className="hero shell" id="top">
      <div className="hero-kicker"><span className="status-dot" /> Available for new opportunities</div>
      <h1>운영에서 발견한 문제를<br /><em>데이터와 제품</em>으로 연결합니다.</h1>
      <div className="hero-bottom">
        <p className="hero-intro">안녕하세요. 사용자에게 필요한 흐름을 정의하고, 화면부터 데이터·AI·운영 구조까지 직접 구현하는 개발자 <strong>권은영</strong>입니다.</p>
        <div className="hero-actions"><a className="button primary" href="#projects">프로젝트 보기 <span>↓</span></a><a className="button text" href="mailto:qtag02@gmail.com">이메일 보내기 <Arrow /></a></div>
      </div>
      <div className="hero-marquee" aria-hidden="true"><span>PRODUCT THINKING</span><i>✦</i><span>FULL-STACK</span><i>✦</i><span>AI SERVICE</span><i>✦</i><span>KEEP SHIPPING</span></div>
    </section>

    <section className="approach section shell" aria-labelledby="approach-title">
      <div className="section-label"><span>01</span><p>How I work</p></div>
      <div className="section-content"><h2 id="approach-title">기술보다 먼저,<br />사용자가 겪는 흐름을 봅니다.</h2>
        <div className="proof-grid">{proofCards.map((card) => <article className="proof-card" key={card.number}><span>{card.number}</span><h3>{card.title}</h3><p>{card.body}</p></article>)}</div>
      </div>
    </section>

    <section className="projects section shell" id="projects" aria-labelledby="projects-title">
      <div className="section-label"><span>02</span><p>Selected work</p></div>
      <div className="section-content">
        <div className="section-heading-row"><h2 id="projects-title">기능 목록 대신,<br />해결한 문제를 담았습니다.</h2><p>각 기술을 왜 선택했고 실제 제품 안에서 어떻게 사용했는지 설명합니다.</p></div>
        <div className="project-list">{projects.map((project) => <article className={`project ${project.accent}`} id={project.id} key={project.name}>
          <div className="project-top"><div><p className="eyebrow">{project.eyebrow}</p><h3><span>{project.index}</span>{project.name}</h3></div><div className="project-links">{project.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>{link.label} <Arrow /></a>)}</div></div>
          <div className="project-visual" aria-hidden="true"><div className="visual-title">{project.name}</div><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-chip chip-a">DISCOVER</div><div className="visual-chip chip-b">CONNECT</div><div className="visual-mark">{project.index}</div></div>
          <div className="project-story"><div className="story-lead"><h4>{project.headline}</h4><p>{project.description}</p></div><div className="challenge"><span>핵심 문제</span><p>{project.challenge}</p></div></div>
          <div className="implementation"><p className="mini-label">Technology in action</p><div className="implementation-list">{project.solutions.map(([tech, action]) => <div className="implementation-row" key={tech}><h5>{tech}</h5><p>{action}</p></div>)}</div></div>
          <div className="outcomes"><p className="mini-label">What changed</p><ul>{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></div>
        </article>)}</div>
      </div>
    </section>

    <section className="experience section shell" id="experience" aria-labelledby="experience-title">
      <div className="section-label"><span>03</span><p>Previous experience</p></div>
      <div className="section-content"><p className="eyebrow">Korea Environment Corporation · 2021—2025</p><h2 id="experience-title">개발자가 되기 전에도<br />시스템을 설계했습니다.</h2>
        <div className="experience-grid"><div className="experience-numbers"><div><strong>84</strong><span>개 기관 규정 조사</span></div><div><strong>940</strong><span>매 출장카드 발급</span></div><div><strong>1,700<small>만 원</small></strong><span>연간 절감 효과</span></div></div>
          <div className="experience-copy"><h3>모호한 제도 개선 과제를<br />실제 업무 시스템으로 만들었습니다.</h3><p>출장전용 법인카드 도입을 위해 84개 공공기관의 규정과 사례를 조사하고, 신청–승인–사용–정산–전표로 이어지는 업무 흐름을 설계했습니다.</p><p>지출 담당자, 개발업체, 은행, 정보부서와 기준과 일정을 조율했습니다. 이 경험은 지금도 요구사항을 화면과 데이터 구조로 번역하는 제 개발 방식의 기반입니다.</p></div>
        </div>
      </div>
    </section>

    <section className="contact shell" id="contact"><p className="eyebrow">Let&apos;s build something useful</p><h2>좋은 질문에서 시작해,<br />작동하는 결과까지 만듭니다.</h2><div className="contact-bottom"><a href="mailto:qtag02@gmail.com">qtag02@gmail.com <Arrow /></a><a href="https://github.com/kwoney" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></section>
    <footer className="footer shell"><p>© 2026 Kwon Eunyoung</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
