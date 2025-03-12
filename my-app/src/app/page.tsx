"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  // Hover 시 변경될 이미지 배열
  const hoverImages = [
    "/IMG_8538.JPG",
    "/IMG_1107.jpeg",
    "/IMG_9886.jpeg",
    "/IMG_6644.JPG",
  ];

  return (
    <div className="bg-[#D5FFE4] dark:bg-black w-screen h-screen">
      {/* 중앙에 위치하는 메인 이미지 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[300px] h-[300px] z-[900]">
        <Link href={`/introduction/${data[0]?.key}`}>
          <Image src="/KakaoTalk_Photo_2025-02-25-15-16-01.png" alt="" fill />
        </Link>
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-2 grid-rows-2 w-[800px] h-[800px] relative z-10">
          {[
            {
              color: "bg-[#6F61C0]",
              text: data[0]?.name,
              rounded: "rounded-tl-3xl",
            },
            {
              color: "bg-[#8BE8E5]",
              text: data[0]?.age,
              rounded: "rounded-tr-3xl",
            },
            {
              color: "bg-[#8BE8E5]",
              text: data[0]?.position,
              rounded: "rounded-bl-3xl",
            },
            {
              color: "bg-[#6F61C0]",
              text: data[0]?.role,
              rounded: "rounded-br-3xl",
            },
          ].map(({ color, text, rounded }, index) => (
            <motion.div
              key={index}
              className={`${color} ${rounded} flex items-center justify-center text-center relative p-4 z-10`}
              whileHover={{ opacity: 1 }}
            >
              {/* 이미지 */}
              <motion.img
                src={hoverImages[index]}
                alt="icon"
                className="absolute inset-0 w-full h-full object-cover z-20 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* 텍스트 */}
              <motion.p
                className="text-white text-lg z-0"
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {text}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
