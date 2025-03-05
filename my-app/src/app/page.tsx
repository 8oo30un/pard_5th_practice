// import Image from "next/image";
"use client";

import axios from "axios";
// import { useState } from "react";
// import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HoverBox from "./components/HoverBox";

interface Data {
  key: number;
  name: string;
  age: number;
  position: string;
  role: string;
}

export default function Home() {
  // const name: string = "Kim woo hyun";
  // const age: number = 24;
  // const mbti: string = "INFP";
  // const love: boolean = false;

  // interface User {
  //   age: number;
  //   name: string;
  //   mbti: string;
  //   love: boolean;
  // }

  const [data, setData] = useState<Data[]>([]);
  // const [data, setData] = useState<Record<string, Data>>({}); // 객체로 변경
  // 이렇게 하면 data["woohyun"] 가능
  const [error, setError] = useState<string | null>(null);

  console.log(error);

  useEffect(() => {
    axios
      .get<{ message: string; data: Data[] }>("/sample.json")
      .then((response) => {
        setData(response.data.data);

        // data 배열을 name을 키로 하는 객체로 변환
        // const dataObject = response.data.data.reduce((acc, current) => {
        //   acc[current.name] = current;
        //   return acc;
        // }, {} as Record<string, Data>);

        // setData(dataObject); // 변환된 객체를 상태에 저장
      })
      .catch(() => {
        setError("데이터 가져오는데 실패");
      });
  }, []);

  // interface Pard extends User {
  //   // position: string; // developer
  //   // generation: number;
  //   // role: string; //pardi, pardo, manager
  //   [key: string]: string | number | boolean | string[];
  // }

  // const PardMember: Pard = {
  //   name: "KWH",
  //   age: 24,
  //   mbti: "INFP",
  //   love: false,
  //   hobby: ["coding", "music", "weight"],
  //   position: "WEB",
  //   generation: 5,
  //   role: "manager",
  // };

  // interface aboutMe<T> {
  //   etc: T;
  // }

  // const genericDate: aboutMe<number> = { etc: 20250227 };
  // const genericSeminar: aboutMe<string> = { etc: "pard_5th_1th_seminar" };

  // const user: User = { name: "김우현", age: 24, mbti: "INFP", love: false };
  // const pard: User = { name: "Pard", age: 5, mbti: "SEXY", love: true }; // 옆사람 꺼 공유해서 추가하기

  // const getUserInfo = (user: User): string => {
  //   return `${user.name}은(는) ${user.age}살이며 MBTI는 ${user.mbti}입니다. ${
  //     user.love ? "사랑에 빠져 있습니다." : "현재 솔로입니다."
  //   }`;
  // };

  // const PardMember: Pard = {
  //   name: "KWH",
  //   age: 24,
  //   mbti: "INFP",
  //   love: false,
  //   position: "WEB",
  //   generation: 5,
  //   role: "manager",
  // };

  // type User = {
  //   age: number;
  //   name: string;
  //   mbti: string;
  //   love: boolean;
  // }

  // const pardWeb = <T extends User, K extends keyof T>(
  //   member: T,
  //   key: K
  // ): T[K] => {
  //   return member[key];
  // };

  // const chaechae = { age: 24, name: "chaechae", mbti: "INFP", love: false };

  // const getPardInfo = (user: Pard): string => {
  //   return `${user.name}은(는) ${user.age}살이며 MBTI는 ${user.mbti}입니다. ${
  //     user.love ? "사랑에 빠져 있습니다." : "현재 솔로입니다."
  //   } 파드에서 ${user.position}을 맡고 있고, ${
  //     user.generation
  //   }기에 참여했고, 역할은 ${user.role}입니다.`;
  // };

  return (
    <div className=" bg bg-[#D5FFE4] dark:bg-black w-screen h-screen ">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[300px] h-[300px] z-200">
        <Link href={`/introduction/${data[0]?.key}`}>
          <Image src="/KakaoTalk_Photo_2025-02-25-15-16-01.png" alt="" fill />
        </Link>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-2 grid-rows-2  w-[800px] h-[800px]">
          <HoverBox
            color="bg-[#6F61C0]"
            name={data[0]?.name} // 데이터를 전달
            imageSrc="/free-icon-github-2111292.png" // 이미지 소스 전달
            roundedClass="rounded-tl-3xl" // border-radius 설정
          />

          <HoverBox
            color="bg-[#8BE8E5]"
            name={data[0]?.age} // 데이터를 전달
            imageSrc="/free-icon-github-2111292.png" // 이미지 소스 전달
            roundedClass="rounded-tr-3xl" // border-radius 설정
          />

          <HoverBox
            color="bg-[#8BE8E5]"
            name={data[0]?.position} // 데이터를 전달
            imageSrc="/free-icon-github-2111292.png" // 이미지 소스 전달
            roundedClass="rounded-bl-3xl" // border-radius 설정
          />

          <HoverBox
            color="bg-[#6F61C0]"
            name={data[0]?.role} // 데이터를 전달
            imageSrc="/free-icon-github-2111292.png" // 이미지 소스 전달
            roundedClass="rounded-br-3xl" // border-radius 설정
          />
        </div>
        {/* <Link
          href="/crud"
          className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-4 py-3 bg-white text-[#6F61c0] rounded-lg shadow-lg hover:bg-gray-100"
        >
          🔧 CRUD 페이지로 이동
        </Link> */}
      </div>
    </div>
  );
}
