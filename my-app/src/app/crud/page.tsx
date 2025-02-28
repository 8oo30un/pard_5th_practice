"use client";
import { useEffect, useState } from "react";
import { getData, addData, updateData, deleteData } from "../actions";

export default function CRUDPage() {
  const [data, setData] = useState<
    { name: string; position: string; age: string }[]
  >([]);
  const [newItem, setNewItem] = useState({ name: "", position: "", age: "" });

  useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);

  // 데이터 추가
  const handleAdd = async () => {
    const updatedData = await addData(newItem);
    setData(updatedData.data);
    setNewItem({ name: "", position: "", age: "" });
  };

  // 데이터 수정
  const handleUpdate = async (index: number) => {
    const updatedName = prompt("새 이름을 입력하세요:", data[index].name);
    const updatedPosition = prompt(
      "새 직책을 입력하세요:",
      data[index].position
    );
    const updatedAge = prompt("새 나이를 입력하세요:", data[index].age);

    if (updatedName && updatedPosition && updatedAge) {
      const updatedData = await updateData(index, {
        name: updatedName,
        position: updatedPosition,
        age: updatedAge,
      });
      setData(updatedData.data);
    }
  };

  // 데이터 삭제
  const handleDelete = async (index: number) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      const updatedData = await deleteData(index);
      setData(updatedData.data);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📌 CRUD 예제</h1>

      {/* 데이터 입력 폼 */}
      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="이름"
        />
        <input
          className="border p-2 mr-2"
          value={newItem.position}
          onChange={(e) => setNewItem({ ...newItem, position: e.target.value })}
          placeholder="직책"
        />
        <input
          className="border p-2 mr-2"
          value={newItem.age}
          onChange={(e) => setNewItem({ ...newItem, age: e.target.value })}
          placeholder="나이"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          추가
        </button>
      </div>

      {/* 데이터 목록 */}
      <ul className="space-y-2">
        {data.map((item, index) => (
          <li
            key={index}
            className="p-3 border rounded-lg shadow-sm flex justify-between items-center"
          >
            <span>
              {item.name} ({item.position}, {item.age})
            </span>
            <div>
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                onClick={() => handleUpdate(index)}
              >
                수정
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => handleDelete(index)}
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
