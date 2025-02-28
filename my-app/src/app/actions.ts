"use server";

import path from "path";

//데이터 불러오기
import fs from "fs/promises"; //+
//+

//JSON 파일 경로
const filePath = path.join(process.cwd(), "public/sample.json"); //+

// 데이터 불러오기//+
export async function getData() {
  //+
  const file = await fs.readFile(filePath, "utf-8"); //+
  return JSON.parse(file); //+
}

// 📌 데이터 추가하기 (CREATE)
export async function addData(newItem: {
  name: string;
  position: string;
  age: string;
}) {
  const file = await fs.readFile(filePath, "utf-8");
  const json = JSON.parse(file);

  json.data.push(newItem); // 데이터 추가
  await fs.writeFile(filePath, JSON.stringify(json, null, 2), "utf-8"); // 파일 저장

  return json;
}

// 📌 데이터 수정하기 (UPDATE)
export async function updateData(
  index: number,
  updatedItem: { name: string; position: string; age: string }
) {
  const file = await fs.readFile(filePath, "utf-8");
  const json = JSON.parse(file);

  if (index < 0 || index >= json.data.length) throw new Error("Invalid index");

  json.data[index] = updatedItem; // 데이터 수정
  await fs.writeFile(filePath, JSON.stringify(json, null, 2), "utf-8"); // 파일 저장

  return json;
}

// 📌 데이터 삭제하기 (DELETE)
export async function deleteData(index: number) {
  const file = await fs.readFile(filePath, "utf-8");
  const json = JSON.parse(file);

  if (index < 0 || index >= json.data.length) throw new Error("Invalid index");

  json.data.splice(index, 1); // 데이터 삭제
  await fs.writeFile(filePath, JSON.stringify(json, null, 2), "utf-8"); // 파일 저장

  return json;
}
