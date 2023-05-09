"use client";
import Header from "@/components/commons/Header";
import "./global.css";
import Footer from "@/components/commons/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
