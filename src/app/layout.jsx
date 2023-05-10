"use client";
import Header from "@/components/commons/Header";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <title>조정택_ME</title>
        <link rel="shortcut icon" href="/images/profile.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Poor+Story&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/all.min.css" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
