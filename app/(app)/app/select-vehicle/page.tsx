import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Page() {
  return (
    <div className="@container h-full relative flex flex-col">
      <header className="h-10 bg-emerald-500 text-white font-bold flex justify-center items-center px-4">
        毒化物小量運送
      </header>
      <section className="flex-auto bg-[url('/assets/hollowed-boxes.png')] bg-repeat bg-contain bg-center flex flex-col">
        <Image src={logo} alt="logo" className="max-w-[80%] mx-auto mt-4" />

        <div className="bg-white/50 py-8 px-4 flex flex-col w-11/12 @sm:w-9/12 mx-auto mt-8 rounded">
          <h1 className="mb-4 font-bold text-center">選擇車輛</h1>
          <Select>
            <SelectTrigger className="w-full mb-8">
              <SelectValue placeholder="選擇車輛" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="KEA-0001">
                KEA-0001【CMC Veryca A190】
              </SelectItem>
              <SelectItem value="KEA-0002">KEA-0002【DFSK KingCab】</SelectItem>
              <SelectItem value="KEA-0003">
                KEA-0003【Mitsubishi Delica】
              </SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full @sm:w-max mx-auto">
            <Link href="/app/dashboard" className="w-full">
              確認
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
