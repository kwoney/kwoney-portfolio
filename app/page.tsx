import ProjectTabs from "./components/ProjectTabs";

const Arrow = () => <span aria-hidden="true">↗</span>;

const proofCards = [
  { number: "01", title: "문제를 구조화합니다", body: "모호한 요구를 사용자 흐름, 데이터 기준과 예외 조건으로 나누어 구현 가능한 형태로 바꿉니다." },
  { number: "02", title: "끝까지 연결합니다", body: "화면 한 장에 머무르지 않고 인증, 데이터, AI, 결제와 운영 도구를 실제 사용 흐름으로 연결합니다." },
  { number: "03", title: "운영을 생각합니다", body: "권한, 중복 요청, 오류 추적과 지표처럼 출시 후 문제가 되는 지점을 구현 단계부터 함께 설계합니다." },
];

const timeline = [
  { period: "2026.03 — NOW", title: "KOZIT 기획·개발", detail: "커뮤니티 운영에서 발견한 문제를 모바일 제품으로 구현하고 출시를 준비하고 있습니다." },
  { period: "2025.10 — 2026.03", title: "AI·LLM 서비스 개발", detail: "Python 데이터 분석과 RAG·에이전트를 학습하고 복지나침반 프로젝트에 적용했습니다." },
  { period: "2025.02 — 2025.09", title: "풀스택 개발 전환", detail: "Java·Spring·React 기반 웹 개발을 학습하고 Mi.ary 등 팀 프로젝트를 수행했습니다." },
  { period: "2021.09 — 2025.02", title: "한국환경공단", detail: "회계 업무와 출장전용 법인카드 시스템 기획을 담당하며 업무 분석과 협업 경험을 쌓았습니다." },
];

export default function Home() {
  return <main>
    <header className="nav-wrap"><nav className="nav shell" aria-label="주요 메뉴">
      <a className="wordmark" href="#top" aria-label="처음으로">KWON<br />EUNYOUNG</a>
      <div className="nav-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#journey">Journey</a><a href="#contact">Contact</a></div>
    </nav></header>

    <section className="hero shell" id="top">
      <div className="hero-kicker"><span className="status-dot" /> Available for new opportunities</div>
      <h1>운영에서 발견한 문제를<br /><em>데이터와 제품</em>으로 연결합니다.</h1>
      <div className="hero-bottom">
        <p className="hero-intro">사용자에게 필요한 흐름을 정의하고, 화면부터 데이터·AI·운영 구조까지 직접 구현하는 개발자 <strong>권은영</strong>입니다.</p>
        <div className="hero-actions"><a className="button primary" href="#projects">프로젝트 보기 <span>↓</span></a><a className="button text" href="mailto:qtag02@gmail.com">이메일 <Arrow /></a></div>
      </div>
    </section>

    <section className="about section shell" id="about" aria-labelledby="about-title">
      <div className="section-label"><span>01</span><p>About me</p></div>
      <div className="section-content about-content">
        <p className="about-lead" id="about-title">저는 <strong>현업의 복잡한 문제를 이해하고, 사용자가 실제로 쓸 수 있는 시스템으로 만드는 개발자</strong>입니다.</p>
        <div className="about-copy">
          <p>한국환경공단에서 회계와 시스템 기획을 담당하며 규정, 사용자 요구, 개발 조건이 서로 다른 상황을 조율했습니다. 84개 기관의 규정을 분석해 출장카드 업무 흐름을 설계했고, 연간 약 1,700만 원의 절감 효과로 연결했습니다.</p>
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
      <div className="section-content"><p className="eyebrow">Korea Environment Corporation · 2021—2025</p><h2 id="experience-title">개발자가 되기 전에도<br />시스템을 설계했습니다.</h2>
        <div className="experience-grid"><div className="experience-numbers"><div><strong>84</strong><span>개 기관 규정 조사</span></div><div><strong>940</strong><span>매 출장카드 발급</span></div><div><strong>1,700<small>만 원</small></strong><span>연간 절감 효과</span></div></div>
          <div className="experience-copy"><h3>모호한 제도 개선 과제를<br />실제 업무 시스템으로 만들었습니다.</h3><p>출장전용 법인카드 도입을 위해 84개 공공기관의 규정과 사례를 조사하고, 신청–승인–사용–정산–전표로 이어지는 업무 흐름을 설계했습니다.</p><p>지출 담당자, 개발업체, 은행, 정보부서와 기준과 일정을 조율했습니다. 이 경험은 요구사항을 화면과 데이터 구조로 번역하는 제 개발 방식의 기반입니다.</p></div>
        </div>
      </div>
    </section>

    <section className="journey section shell" id="journey" aria-labelledby="journey-title">
      <div className="section-label"><span>04</span><p>Journey</p></div>
      <div className="section-content">
        <h2 id="journey-title">업무를 이해하는 사람에서<br />제품을 구현하는 사람으로.</h2>
        <div className="timeline">{timeline.map((item) => <article className="timeline-row" key={item.period}><time>{item.period}</time><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
      </div>
    </section>

    <section className="contact shell" id="contact"><p className="eyebrow">Let&apos;s build something useful</p><h2>좋은 질문에서 시작해,<br />작동하는 결과까지 만듭니다.</h2><div className="contact-bottom"><a href="mailto:qtag02@gmail.com">qtag02@gmail.com <Arrow /></a><a href="https://github.com/kwoney" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></section>
    <footer className="footer shell"><p>© 2026 Kwon Eunyoung</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
