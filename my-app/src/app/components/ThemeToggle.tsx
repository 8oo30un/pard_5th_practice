// components/ThemeToggle.tsx
import { useDarkMode } from "../hooks/useDarkMode";

export default function ThemeToggle() {
  const { theme, setTheme } = useDarkMode();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "🌙 다크 모드" : "☀️ 라이트 모드"}
    </button>
  );
}
