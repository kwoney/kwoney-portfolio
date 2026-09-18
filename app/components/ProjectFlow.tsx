type IconName = "people" | "mobile" | "server" | "database" | "ai" | "result";

type Flow = {
  title: string;
  note: string;
  nodes: { icon: IconName; label: string; detail: string }[];
  integrations: string[];
};

const flows: Record<string, Flow> = {
  kozit: {
    title: "모임 참여와 운영을 잇는 서비스 흐름",
    note: "기획부터 앱·데이터·서버 연동까지 전 과정을 단독으로 설계하고 구현했습니다.",
    nodes: [
      { icon: "people", label: "사용자·호스트", detail: "탐색·신청·승인" },
      { icon: "mobile", label: "Expo 앱", detail: "모임·채팅·운영 UI" },
      { icon: "database", label: "Supabase", detail: "Auth·DB·Realtime·Storage" },
      { icon: "server", label: "Edge Functions", detail: "검증·결제·번역 요청" },
      { icon: "result", label: "운영 결과", detail: "환불·정산·알림·지표" },
    ],
    integrations: ["Toss Payments", "DeepL", "Google Maps", "Amplitude", "Sentry"],
  },
  welfare: {
    title: "질문에서 정책 근거까지 이어지는 흐름",
    note: "팀 전체 서비스 구조입니다. 제가 맡은 화면·Django API·매칭 개선·에이전트 연동 범위는 아래에서 구분했습니다.",
    nodes: [
      { icon: "people", label: "질문·프로필", detail: "나이·지역·소득·가구" },
      { icon: "mobile", label: "Next.js", detail: "검색·정책 카드·근거 UI" },
      { icon: "server", label: "Django API", detail: "계정·정책·스크랩·채팅" },
      { icon: "ai", label: "검색·자격 판정", detail: "LangGraph 도구·명시적 규칙" },
      { icon: "result", label: "추천과 근거", detail: "충족·미충족 조건 표시" },
    ],
    integrations: ["PostgreSQL", "ChromaDB", "BM25·Dense·Reranker", "MCP", "OpenAI API"],
  },
  miary: {
    title: "일기 저장부터 감정 회고까지의 흐름",
    note: "팀 전체 서비스 흐름이며, 프론트엔드와 DB 전환·NLP 호출 복구 등 제 작업 범위는 아래 사례에서 구분했습니다.",
    nodes: [
      { icon: "people", label: "일기 작성", detail: "텍스트·사진·음성 입력" },
      { icon: "mobile", label: "React", detail: "편집·탐색·결과 화면" },
      { icon: "server", label: "Spring Boot", detail: "인증·일기·분석 호출" },
      { icon: "ai", label: "FastAPI NLP", detail: "감정·키워드·피드백" },
      { icon: "result", label: "저장·회고", detail: "상세·통계·AI 대화" },
    ],
    integrations: ["PostgreSQL", "MyBatis", "챗봇", "STT", "Docker Compose"],
  },
};

function FlowIcon({ name }: { name: IconName }) {
  if (name === "people") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.4-4 2.2-6 5.5-6s5.1 2 5.5 6M16 5.5a3 3 0 0 1 0 5.8M16 13c2.8.2 4.2 2.1 4.5 5"/></svg>;
  if (name === "mobile") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M10 18.5h4"/></svg>;
  if (name === "server") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01M11 7h7M11 17h7"/></svg>;
  if (name === "database") return <svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></svg>;
  if (name === "ai") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.4 5.2L18 10l-4.6 2.8L12 18l-1.4-5.2L6 10l4.6-2.8L12 2Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5 9 17l11-11"/><circle cx="12" cy="12" r="9"/></svg>;
}

function ArrowIcon() {
  return <svg className="flow-arrow" viewBox="0 0 28 16" aria-hidden="true"><path d="M1 8h24M19 2l6 6-6 6"/></svg>;
}

export default function ProjectFlow({ projectId }: { projectId: string }) {
  const flow = flows[projectId];
  if (!flow) return null;

  return <section className="flow-section" aria-labelledby={`flow-${projectId}`}>
    <div className="flow-heading">
      <div><p className="flow-label">Service flow</p><h4 id={`flow-${projectId}`}>{flow.title}</h4></div>
      <p>{flow.note}</p>
    </div>
    <div className="flow-track">
      {flow.nodes.map((node, index) => <div className="flow-fragment" key={node.label}>
        <article className="flow-node">
          <span className="flow-icon"><FlowIcon name={node.icon} /></span>
          <strong>{node.label}</strong>
          <span>{node.detail}</span>
        </article>
        {index < flow.nodes.length - 1 && <ArrowIcon />}
      </div>)}
    </div>
    <div className="flow-integrations"><span className="flow-link-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12h8M12 8l4 4-4 4"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg></span><strong>데이터·외부 연동</strong>{flow.integrations.map((item) => <span className="flow-chip" key={item}>{item}</span>)}</div>
  </section>;
}
