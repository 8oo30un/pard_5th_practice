import { useState } from "react";

interface User {
  age: number;
  name: string;
  mbti: string;
  love: boolean;
}

export default function HeaderBar() {
  const user: User = { name: "김우현", age: 24, mbti: "INFP", love: false };
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="font-sans text-2xl text-center bg bg-[#a084e8] text-white">
      ☁️ 파드 5기 OT 과제 {user.name} 페이지
      {error && <p>{error}</p>}
    </div>
  );
}
