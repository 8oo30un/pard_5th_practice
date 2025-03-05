import Link from "next/link";

export default function SideBar() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-4 py-3  bg-[#6F61c0] rounded-lg shadow-lg ">
      <div className="pb-4">
        <Link href="/">🏠</Link>
      </div>
      <div className="pb-4">
        <Link href="/crud">🔧</Link>
      </div>
    </div>
  );
}
