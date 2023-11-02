import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="@container h-full relative flex flex-col">
      <header className="h-10 bg-emerald-500 text-white font-bold flex items-center px-4">
        毒化物小量運送
      </header>
      <section className="flex-auto bg-[url('/assets/hollowed-boxes.png')] bg-repeat bg-contain bg-center flex flex-col">
        <Image src={logo} alt="logo" className="max-w-[80%] mx-auto mt-4" />

        <div className="bg-white/50 py-8 px-4 flex flex-col gap-8 w-11/12 @sm:w-9/12 mx-auto mt-8 rounded">
          <Input placeholder="賬號" />
          <Input placeholder="密碼" type="password" />
          <Button className="w-full @sm:w-max mx-auto">
            <Link href="/app/dashboard" className="w-full">
              登入
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
