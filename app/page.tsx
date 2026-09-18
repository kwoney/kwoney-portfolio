import ProjectTabs from "./components/ProjectTabs";
import ActiveNavigation from "./components/ActiveNavigation";

const Arrow = () => <span aria-hidden="true">↗</span>;

const proofCards = [
  { number: "01", title: "문제를 구조화합니다", body: "모호한 요구를 사용자 흐름, 데이터 기준과 예외 조건으로 나누어 구현 가능한 형태로 바꿉니다." },
  { number: "02", title: "끝까지 연결합니다", body: "화면 한 장에 머무르지 않고 인증, 데이터, AI, 결제와 운영 도구를 실제 사용 흐름으로 연결합니다." },
  { number: "03", title: "운영을 생각합니다", body: "권한, 중복 요청, 오류 추적과 지표처럼 출시 후 문제가 되는 지점을 구현 단계부터 함께 설계합니다." },
];

const timeline = [
  { period: "2026.07 — NOW", title: "AI 풀스택 솔로프리너 과정", detail: "청년취업사관학교에서 1인 창업가 과정을 수강 중입니다. 2026년 10월 수료 예정입니다." },
  { period: "2026.03 — NOW", title: "KOZIT 기획·개발", detail: "커뮤니티 운영에서 발견한 문제를 모바일 제품으로 구현하고 출시를 준비하고 있습니다." },
  { period: "2025.10 — 2026.03", title: "AI·LLM 서비스 개발", detail: "Python 데이터 분석과 RAG·에이전트를 학습하고 복지나침반 프로젝트에 적용했습니다." },
  { period: "2025.02 — 2025.09", title: "풀스택 개발 전환", detail: "Java·Spring·React 기반 웹 개발을 학습하고 Mi.ary 등 팀 프로젝트를 수행했습니다." },
  { period: "2021.09 — 2025.02", title: "한국환경공단", detail: "회계 업무와 출장전용 법인카드 시스템 기획을 담당하며 업무 분석과 협업 경험을 쌓았습니다." },
];

export default function Home() {
  return <main>
    <header className="nav-wrap"><nav className="nav shell" aria-label="주요 메뉴">
      <a className="wordmark" href="#top" aria-label="권은영 — 처음으로"><strong>KWON EUNYOUNG</strong><span><span>권은영</span><span>Developer</span></span></a>
      <ActiveNavigation><a href="#about">About</a><a href="#projects">Projects</a><a href="#journey">Journey</a><a className="contact-nav" href="#contact">Contact</a><a className="github-link" href="https://github.com/kwoney" target="_blank" rel="noopener noreferrer" aria-label="권은영 GitHub (새 탭)" title="GitHub · kwoney"><svg viewBox="0 0 24 24" width="23" height="23" fill="currentColor" aria-hidden="true"><path d="M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.419-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 6.006 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.922.431.372.815 1.102.815 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297Z"/></svg></a></ActiveNavigation>
    </nav></header>

    <section className="hero shell" id="top">
      <div className="hero-kicker"><span className="status-dot" /> Developer · Product &amp; workflow</div>
      <h1>복잡한 업무는 간결하게,<br /><em>필요한 서비스는 직접.</em></h1>
      <div className="hero-bottom">
        <p className="hero-intro">사용자의 불편과 반복되는 업무를 분석해 더 효율적인 흐름을 설계합니다.<br className="desktop-break" /> 화면부터 데이터·AI·운영 도구까지 직접 구현하는 개발자 <strong>권은영</strong>입니다.</p>
        <div className="hero-actions"><a className="button primary" href="#projects">프로젝트 보기 <span>↓</span></a><a className="button text" href="mailto:qtag02@gmail.com"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>이메일</a></div>
      </div>
    </section>

    <section className="about section shell" id="about" aria-labelledby="about-title">
      <div className="section-label"><span>01</span><p>About me</p></div>
      <div className="section-content about-content">
        <p className="about-lead" id="about-title">저는 <strong>현업의 복잡한 문제를 이해하고, 사용자가 실제로 쓸 수 있는 시스템으로 만드는 개발자</strong>입니다.</p>
        <div className="about-copy">
          <p>한국환경공단에서 회계와 시스템 기획을 담당하며 현업의 요구를 개발자가 구현할 수 있는 업무 흐름과 데이터 기준으로 정리했습니다. 서로 다른 부서와 개발업체 사이에서 요구사항을 조율하는 경험을 쌓았습니다.</p>
          <p>이 경험을 계기로 직접 제품을 구현하는 개발자가 되었습니다. 지금은 프론트엔드와 백엔드의 경계를 나누기보다, 문제 해결에 필요한 기술을 선택해 끝까지 연결하는 방식으로 일합니다.</p>
        </div>
        <div className="proof-grid">{proofCards.map((card) => <article className="proof-card" key={card.number}><span>{card.number}</span><h3>{card.title}</h3><p>{card.body}</p></article>)}</div>
      </div>
    </section>

    <section className="projects section shell" id="projects" aria-labelledby="projects-title">
      <div className="section-label"><span>02</span><p>Selected work</p></div>
      <div className="section-content">
        <div className="section-heading-row"><h2 id="projects-title">프로젝트별로<br />깊이 있게 살펴보세요.</h2><p>탭을 눌러 프로젝트를 전환할 수 있습니다. 기능, 구현 방식과 운영 관점까지 제가 직접 맡은 일을 중심으로 정리했습니다.</p></div>
        <ProjectTabs />
      </div>
    </section>

    <section className="experience section shell" id="experience" aria-labelledby="experience-title">
      <div className="section-label"><span>03</span><p>Previous experience</p></div>
      <div className="section-content"><p className="eyebrow">한국환경공단 · 회계 담당 · 2021.09—2025.02</p><h2 id="experience-title">현업의 요구를<br />개발 가능한 기준으로 정리했습니다.</h2>
        <div className="experience-grid"><div className="experience-numbers"><div><strong>84<small>개</small></strong><span>기관 규정 조사</span></div><div><strong>940<small>매</small></strong><span>출장카드 발급</span></div><div><strong>1,700<small>만 원</small></strong><span>연간 절감 효과</span></div></div>
          <div className="experience-copy"><h3>요구사항 정의부터<br />업무 흐름 설계와 협업 조율까지.</h3><p>한국환경공단 회계 담당자로 근무하며 출장전용 법인카드 시스템 도입의 현업 기획을 맡았습니다. 84개 공공기관의 규정과 사례를 조사해 계정과목·한도·예외 조건을 정리했습니다.</p><p>신청–승인–사용–정산–전표로 이어지는 업무 흐름을 화면별 요구사항으로 구체화하고, 지출 담당자·개발업체·은행·정보부서 사이에서 기준과 일정을 조율했습니다.</p><p>시스템 구현은 개발업체가 담당했고, 저는 업무 기준과 요구사항을 정의하고 전달하는 역할을 맡았습니다. 이 경험은 지금도 기능을 구현하기 전에 사용자 흐름과 데이터, 예외 조건을 먼저 정리하는 바탕이 됩니다.</p></div>
        </div>
      </div>
    </section>

    <section className="journey section shell" id="journey" aria-labelledby="journey-title">
      <div className="section-label"><span>04</span><p>Journey</p></div>
      <div className="section-content">
        <h2 id="journey-title">업무를 이해하는 사람에서<br />제품을 구현하는 사람으로.</h2>
        <div className="timeline">{timeline.map((item) => <article className="timeline-row" key={item.period}><time>{item.period}</time><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
        <div className="background-grid">
          <article><p className="eyebrow">Activities</p><h3>개발 밖에서도 검증합니다</h3><ul><li><strong>2025 새싹 해커톤 본선 진출</strong><span>2025.11 · 최종 20위</span></li><li><strong>교통사고 위험 예측 AI 경진대회</strong><span>2025.11 · 상위 19%</span></li></ul></article>
          <article><p className="eyebrow">Qualifications</p><h3>데이터와 업무를 이해하는 기반</h3><ul><li><strong>SQL 개발자(SQLD)</strong><span>2025.12 · 한국데이터산업진흥원</span></li><li><strong>한국환경공단 창립기념일 유공 포상</strong><span>2024 · 재직 중 수상</span></li></ul></article>
          <article><p className="eyebrow">Education</p><h3>학습을 실제 구현으로</h3><ul><li><strong>동아대학교 의약생명공학과 졸업</strong><span>2017.08 · 경영학 부전공</span></li><li><strong>웹 풀스택 · AI/LLM 개발 과정 수료</strong><span>한국ICT인재개발원 · 청년취업사관학교</span></li></ul></article>
        </div>
      </div>
    </section>

    <section className="contact shell" id="contact"><p className="eyebrow">Let&apos;s build something useful</p><h2>어떻게 더 나아질지 고민하고,<br />직접 구현합니다.</h2><div className="contact-bottom"><a href="mailto:qtag02@gmail.com"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>qtag02@gmail.com</a><a href="https://github.com/kwoney" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></section>
    <footer className="footer shell"><p>© 2026 Kwon Eunyoung</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}

