// import Image from "next/image";
"use client";

// import { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function Home() {
  // const name: string = "Kim woo hyun";
  // const age: number = 24;
  // const mbti: string = "INFP";
  // const love: boolean = false;

  interface User {
    age: number;
    name: string;
    mbti: string;
    love: boolean;
  }

  interface Pard extends User {
    // position: string; // developer
    // generation: number;
    // role: string; //pardi, pardo, manager
    [key: string]: string | number | boolean | string[];
  }

  const PardMember: Pard = {
    name: "KWH",
    age: 24,
    mbti: "INFP",
    love: false,
    hobby: ["coding", "music", "weight"],
    postion: "WEB",
  };

  interface aboutMe<T> {
    etc: T;
  }

  const genericDate: aboutMe<number> = { etc: 20250227 };
  const genericSeminar: aboutMe<string> = { etc: "pard_5th_1th_seminar" };

  const user: User = { name: "KWH", age: 24, mbti: "INFP", love: false };
  // const pard: User = { name: "Pard", age: 5, mbti: "SEXY", love: true }; // 옆사람 꺼 공유해서 추가하기

  const getUserInfo = (user: User): string => {
    return `${user.name}은(는) ${user.age}살이며 MBTI는 ${user.mbti}입니다. ${
      user.love ? "사랑에 빠져 있습니다." : "현재 솔로입니다."
    }`;
  };

  // const PardMember: Pard = {
  //   name: "KWH",
  //   age: 24,
  //   mbti: "INFP",
  //   love: false,
  //   position: "WEB",
  //   generation: 5,
  //   role: "manager",
  // };

  const pardWeb = <T extends User, K extends keyof T>(
    member: T,
    key: K
  ): T[K] => {
    return member[key];
  };

  const chaechae = { age: 24, name: "chaechae", mbti: "INFP", love: false };

  const getPardInfo = (user: Pard): string => {
    return `${user.name}은(는) ${user.age}살이며 MBTI는 ${user.mbti}입니다. ${
      user.love ? "사랑에 빠져 있습니다." : "현재 솔로입니다."
    } 파드에서 ${user.position}을 맡고 있고, ${
      user.generation
    }기에 참여했고, 역할은 ${user.role}입니다.`;
  };

  return (
    <div className=" bg bg-[#D5FFE4] w-screen h-screen ">
      <div className="font-serif text-center bg bg-[#a084e8]">
        pard_5th_ot_{user.name}
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[300px] h-[300px]">
        <Image
          src="/KakaoTalk_Photo_2025-02-25-15-16-01.png"
          alt=""
          layout="fill"
        />
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-2 grid-rows-2  w-[800px] h-[800px]">
          <div className="bg-[#6F61C0] border-none flex items-center justify-center text-center border-2">
            {user.age}
          </div>
          <div className="bg-[#8BE8E5] border-none flex items-center justify-center text-center border-2">
            {user.mbti}
          </div>
          <div className="bg-[#8BE8E5]  border-none flex items-center justify-center text-center border-2">
            <Heart
              className={`w-10 h-10 stroke-red-500 ${
                user.love ? "fill-red-500" : "fill-none"
              }`}
            />
          </div>
          <div className="bg-[#6F61C0] border-none flex items-center justify-center text-center border-2">
            {getUserInfo(user)}
            {/* {getPardInfo(PardMember)} */}
            {PardMember["name"]}
            {genericSeminar.etc}
            {genericDate.etc}
            {pardWeb(chaechae, "name")}
          </div>
        </div>
      </div>
    </div>
  );
}
