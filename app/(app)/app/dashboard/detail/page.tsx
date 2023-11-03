import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import autographImage from "@/public/assets/autograph.png";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <>
      <div className="px-6 py-4 bg-white flex flex-col gap-2 border-b mb-2">
        <p className="tracking-wider font-bold flex text-sm">
          <span className="inline-block w-20">公司名稱:</span>
          臺中英才郵局
        </p>
        <p className="font-bold flex text-sm">
          <span className="inline-block w-20">地址:</span>
          403台中市西區民生路200號
        </p>
        <p className="font-bold flex text-sm">
          <span className="inline-block w-20">車號:</span>2387712
        </p>
      </div>

      <div className="px-6 py-4 bg-white flex flex-col gap-2 border-y mb-2">
        <p className="font-bold">填寫廢料資訊</p>
        <div className="grid grid-cols-1 @sm:grid-cols-2 gap-2">
          <Input placeholder="廢料欄位一" />
          <Input placeholder="廢料欄位二" />
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="廢料欄位三" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="done">選項一</SelectItem>
              <SelectItem value="pending">選項二</SelectItem>
              <SelectItem value="ongoing">選項三</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="廢料欄位四" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="done">選項一</SelectItem>
              <SelectItem value="pending">選項二</SelectItem>
              <SelectItem value="ongoing">選項三</SelectItem>
            </SelectContent>
          </Select>
          <Textarea placeholder="備註" className="col-span-full" />
        </div>
      </div>

      <div className="px-6 py-4 bg-white  border-y mb-2">
        <Image src={autographImage} alt="autograph" />
        <Button className="w-full" variant="outline" asChild>
          <Link href="/autograph">簽名</Link>
        </Button>
      </div>

      <div className="px-6 py-4 bg-white flex flex-col gap-2 border-y">
        <Button asChild>
          <Link href="/app/dashboard">送出</Link>
        </Button>
      </div>
    </>
  );
}
