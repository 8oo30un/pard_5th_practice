import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center gap-2 px-4 py-3  bg-[#6F61c0] rounded-lg shadow-lg ">
      <div className="pb-4">
        <Link href="/">
          <Image
            src="/free-icon-home-automation-8843657.png"
            alt="home"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div className="pb-4">
        <Link href="/crud">
          <Image
            src="/free-icon-settings-3820243.png"
            alt="setting"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div className="pb-4">
        <Link href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1">
          <Image
            src="/free-icon-instagram-174855.png"
            alt="instagram"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div className="pb-4">
        <Link href="https://github.com/8oo30un">
          <Image
            src="/free-icon-github-2111292.png"
            alt="github"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
}
