import Link from "next/link";

export default function SideBar() {
  return (
    <div>
      qwer
      <Link
        href="/crud"
        className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-4 py-3 bg-white text-[#6F61c0] rounded-lg shadow-lg hover:bg-gray-100"
      >
        🔧
      </Link>
    </div>
  );
}
