"use server";

type User = {
  key: number;
  name: string;
  position: string;
  age: string;
  role: string;
};

import { notFound } from "next/navigation";

// sample.json을 서버에서 직접 불러옴
async function fetchData(key: number) {
  try {
    const res = await fetch(`http:localhost:3000/sample.json`);
    const { data }: { data: User[] } = await res.json();

    return data.find((user) => user.key === key) || null;
  } catch (error) {
    console.error("데이터를 불러오는 중 오류 발생:", error);
    return null;
  }
}

// 서버 컴포넌트로 변경
export default async function Introduction({
  params,
}: {
  params: { key?: string };
}) {
  const key = Number(params.key);
  const userData = !isNaN(key) ? await fetchData(key) : null;

  if (!userData) notFound(); // 데이터가 없거나 key가 잘못된 경우 404
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#a084e8]">
      <h1 className="text-3xl font-bold">{userData.name}</h1>
      <p className="mt-4 text-lg">Position: {userData.position}</p>
      <p className="mt-2 text-lg">Age: {userData.age}</p>
      <p className="mt-2 text-lg">Role: {userData.role}</p>
    </div>
  );
}
