// app/layout.tsx
"use client";
import { useEffect } from "react";
import "./globals.css";
import { useDarkMode } from "./hooks/useDarkMode";
import ThemeToggle from "./components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useDarkMode(); // useTheme 훅을 사용하여 현재 테마 상태 가져오기

  useEffect(() => {
    // theme이 변경될 때마다 document에 dark 클래스를 추가하거나 제거
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white dark:bg-gray-800 text-black dark:text-white">
          {/* 다크 모드 및 라이트 모드 전환 버튼 */}
          {/* <ThemeToggle /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
