"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
  key: number;
  name: string;
  position: string;
  age: string;
  role: string;
};

export default function Introduction() {
  const { key } = useParams(); // ✅ useParams()로 동적 라우트 값 가져오기
  const router = useRouter();
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (!key) return; // ✅ key가 없는 경우 early return

    const fetchData = async () => {
      try {
        const res = await fetch("/sample.json");
        const { data }: { data: User[] } = await res.json();
        const user = data.find((user) => user.key === Number(key));
        if (!user) router.push("/404"); // ✅ 데이터가 없으면 404로 이동
        setUserData(user || null);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
        router.push("/404"); // ✅ 오류 발생 시 404로 이동
      }
    };

    fetchData();
  }, [key, router]);

  if (!userData) return <p className="text-center">로딩 중...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#a084e8]">
      <h1 className="text-3xl font-bold">{userData.name}</h1>
      <p className="mt-4 text-lg">Position: {userData.position}</p>
      <p className="mt-2 text-lg">Age: {userData.age}</p>
      <p className="mt-2 text-lg">Role: {userData.role}</p>
    </div>
  );
}
