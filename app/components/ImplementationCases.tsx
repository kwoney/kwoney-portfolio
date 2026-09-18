type Case = {
  title: string;
  scope: string;
  technology: string;
  problem: string;
  approach: string;
  result: string;
  principle: string;
};

const cases: Record<string, Case[]> = {
  kozit: [
    {
      title: "결제 이후의 취소·환불과 중복 알림까지 처리하기",
      scope: "단독 설계·구현",
      technology: "Toss Payments · Supabase · Edge Functions",
      problem: "유료 모임은 결제 성공 화면만으로 끝나지 않습니다. 같은 결제 알림이 다시 도착하거나, 주문 후 모임의 가격·일정이 바뀌는 경우에도 주문과 결제 기록이 일관되어야 했습니다.",
      approach: "주문·결제·환불·정산 상태를 나누고, 서버에서 결제 승인을 검증하도록 구성했습니다. 중복 웹훅에는 멱등 처리를 적용하고, 가격·일정 변경 제한과 수수료 스냅샷으로 결제 당시의 기준을 보존했습니다.",
      result: "중복 알림 방지, 만료 주문 정리, 취소·환불과 예상 정산액을 하나의 운영 흐름에 반영했습니다. 결제 상태와 운영 화면이 같은 기준을 따르도록 구성하고 출시 전 검증을 진행하고 있습니다.",
      principle: "사용자 화면의 성공 여부와 서버의 결제 상태를 구분하고, 반복 요청과 변경 가능성을 기능 명세에 포함했습니다.",
    },
    {
      title: "다국어 번역을 서버에서 처리하고 요청 범위 제한하기",
      scope: "단독 설계·구현",
      technology: "DeepL · Edge Functions · JWT",
      problem: "모임과 커뮤니티에서 다국어 내용을 제공하려면 번역 API를 연결해야 했습니다. 앱에 인증 정보를 두거나 입력 길이와 요청 범위를 제한하지 않으면 노출과 비용 관리 문제가 생길 수 있습니다.",
      approach: "번역 요청을 Edge Functions로 보내 서버에서 DeepL을 호출하도록 구성했습니다. JWT 검증과 문자 수 제한을 적용하고, 배치 번역과 불필요한 요청 건너뛰기로 호출 범위를 관리했습니다.",
      result: "앱은 번역 결과를 사용하고, 외부 API 인증과 요청 검증은 서버가 담당하도록 분리했습니다. 여러 항목의 번역과 입력 제한을 서버에서 공통으로 처리할 수 있도록 구성했습니다.",
      principle: "외부 API 연동에는 정상 응답뿐 아니라 인증, 입력 제한, 호출 비용을 함께 고려했습니다.",
    },
  ],
  welfare: [
    {
      title: "전체 정책 목록에서 결과가 누락되는 흐름 개선하기",
      scope: "팀의 기존 매칭 로직 개선",
      technology: "Django REST Framework · 정책 매칭 로직",
      problem: "추천 목록의 카테고리 다양성을 위한 제한이 전체 목록에도 적용되면서, 사용자가 확인해야 할 정책이 결과에서 누락되는 흐름이 있었습니다.",
      approach: "전체 목록과 추천 목록의 목적을 구분해 제한 적용 흐름을 개선했습니다. 나이·지역·소득·가구 특성 같은 자격 조건은 공통 판정 함수를 재사용하도록 정리했습니다.",
      result: "전체 목록에서 추천용 제한 때문에 결과가 빠지던 문제를 개선하고, 여러 경로에서 같은 조건 판정을 사용하도록 연결했습니다. 팀이 구축한 매칭 체계 위에서 수행한 개선 작업입니다.",
      principle: "같은 정책 데이터라도 전체 탐색과 추천에는 서로 다른 필터링 기준이 필요하다는 점을 구현에 반영했습니다.",
    },
    {
      title: "추천 결과와 자격 판단의 근거를 화면까지 연결하기",
      scope: "프론트엔드·API·에이전트 연동",
      technology: "Next.js · Django · LangGraph · MCP",
      problem: "정책을 추천받아도 어떤 조건을 충족했는지 알 수 없으면 사용자가 다음 행동을 결정하기 어렵습니다. 대화에서 얻은 조건과 프로필, 정책 판정 결과를 같은 흐름으로 연결해야 했습니다.",
      approach: "프로필 입력과 계정·정책·채팅 API를 연결하고, 질문의 정보 추출·검색·자격 확인 도구를 에이전트 흐름에 연동했습니다. 판정 결과와 충족·미충족 조건을 사용자에게 전달하도록 화면과 응답을 연결했습니다.",
      result: "정책 카드와 답변에서 추천 결과와 자격 판단 근거를 함께 확인하는 사용자 흐름을 구현했습니다. 검색·에이전트 전체를 단독 개발한 것이 아니라 담당 화면과 API, 서비스 연동을 중심으로 참여했습니다.",
      principle: "정책을 찾는 과정과 조건을 판정하는 과정을 구분하고, 최종 답변에 판단 근거가 남도록 연결했습니다.",
    },
  ],
  miary: [
    {
      title: "프로젝트 종료 후 MySQL 구조를 PostgreSQL로 전환하기",
      scope: "팀 프로젝트 이후 개인 개선",
      technology: "PostgreSQL · Spring Boot · MyBatis",
      problem: "기존 MySQL 기반 프로젝트를 PostgreSQL 환경으로 옮기려면 연결 주소뿐 아니라 스키마와 쿼리의 호환성도 함께 맞춰야 했습니다.",
      approach: "개발 브랜치에서 DB 연결 설정, 스키마와 SQL을 PostgreSQL에 맞춰 변경하고 백엔드의 쿼리 호환성을 수정했습니다. Docker Compose 구성에는 PostgreSQL 컨테이너를 추가했습니다.",
      result: "DB 전환과 백엔드 호환성 개선 코드를 남겼습니다. 다만 공유 실행 설정에는 기존 DB 연결과 NLP 시작 명령의 정비가 남아 있어, 전체 환경의 재현까지 완료했다고 표현하지 않습니다.",
      principle: "DB 전환은 데이터 구조·쿼리·실행 설정을 함께 다루는 작업이며, 코드 변경과 배포 환경의 재현 여부를 구분했습니다.",
    },
    {
      title: "일기 저장에서 NLP 분석 결과 표시까지 다시 연결하기",
      scope: "NLP 호출 흐름 복구·프론트엔드 연동",
      technology: "React · Spring Boot · Python · FastAPI",
      problem: "React 화면, Spring 백엔드, Python NLP 서버가 분리되어 있어 분석 모델이 존재해도 일기 저장부터 결과 표시까지 연결되지 않으면 사용자가 분석 기능을 이용할 수 없었습니다.",
      approach: "NLP API와 백엔드 호출 흐름을 복구하고, 분석 결과가 백엔드를 거쳐 저장·조회되도록 연결했습니다. 일기 상세 화면에서는 감정·키워드·피드백을 확인할 수 있도록 결과 표시를 연동했습니다.",
      result: "일기 작성과 분석, 회고 화면을 이어 주는 후속 개선 코드를 구현했습니다. 서비스별 연결 개선과 전체 실행 환경의 정비는 별도 과제로 구분하고 있습니다.",
      principle: "AI 기능을 모델 호출 한 번으로 보지 않고, 입력 전달·결과 저장·조회·화면 표시로 나누어 연결했습니다.",
    },
  ],
};

export default function ImplementationCases({ projectId }: { projectId: string }) {
  return <section className="case-section" aria-labelledby={`cases-${projectId}`}>
    <div className="subsection-heading"><span>02</span><h4 id={`cases-${projectId}`}>핵심 구현 사례</h4></div>
    <p className="case-intro">궁금한 사례를 펼쳐 문제와 구현 방식, 결과를 살펴보세요.</p>
    <div className="case-list">
      {(cases[projectId] ?? []).map((item, index) => <details className="implementation-case" key={`${projectId}-${index}`}>
        <summary><span className="case-number">{String(index + 1).padStart(2, "0")}</span><span className="case-summary"><strong>{item.title}</strong><span>{item.scope}</span></span><span className="case-toggle" aria-hidden="true" /></summary>
        <div className="case-body">
          <p className="case-technology">{item.technology}</p>
          <dl>{[["문제", item.problem], ["구현 방식", item.approach], ["결과와 범위", item.result], ["설계 기준", item.principle]].map(([label, body]) => <div key={label}><dt>{label}</dt><dd>{body}</dd></div>)}</dl>
        </div>
      </details>)}
    </div>
  </section>;
}
