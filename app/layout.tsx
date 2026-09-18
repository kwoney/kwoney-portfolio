import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "권은영 | Full-stack Developer",
  description:
    "사용자의 문제를 구조화하고 실제 작동하는 제품으로 구현하는 개발자 권은영의 포트폴리오입니다.",
  openGraph: {
    title: "권은영 | Full-stack Developer",
    description: "운영에서 발견한 문제를 데이터와 제품으로 연결합니다.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
