import Image from "next/image";
import Link from "next/link";
import maleAvatar from "@/public/assets/anonymous_avatars_grey_circles_male.jpg";
import { LogOut } from "lucide-react";

export default function Page() {
  return (
    <div className="flex-auto flex flex-col items-center gap-2">
      <div className="w-full pt-8 pb-2 border-b flex flex-col items-center bg-white">
        <div className="w-20 h-20 rounded-full bg-slate-300 relative mb-4">
          <Image src={maleAvatar} alt="avatar" fill className="object-fit" />
        </div>
        <div className="flex justify-center items-center text-gray-500 gap-4">
          <p>xxxxxxx</p>
          <p>xxxxxxx</p>
          <p>xxxxxxx</p>
        </div>
      </div>
      <div className="w-full">
        <Link
          href="/app"
          className="w-full flex items-center bg-white px-4 py-2 gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span className="font-bold text-gray-700">登出</span>
        </Link>
      </div>
    </div>
  );
}
