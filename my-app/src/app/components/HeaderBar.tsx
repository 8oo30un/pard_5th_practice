import Image from "next/image";
import Link from "next/link";
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

  console.log(setError);

  return (
    <div className="font-sans text-2xl text-center bg-[#a084e8] text-white flex items-center justify-between px-6 ">
      {/* 왼쪽 링크 아이콘 */}
      <Link href="https://we-pard.com/" className="flex items-center">
        <Image src="/Original.png" alt="pard" width={40} height={40} />
      </Link>

      {/* 중앙 텍스트 */}
      <span className="flex-1 text-center">
        ☁️ 파드 5기 OT 과제 {user.name} 페이지
      </span>

      {/* 오른쪽 빈 공간 (정렬 유지용) */}
      <div className="w-10"></div>

      {error && <p>{error}</p>}
    </div>
  );
}
