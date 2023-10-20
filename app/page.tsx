import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "@/app/_components/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <div className="px-2 md:px-4 lg:container mx-auto py-2 md:py-4 lg:py-10 grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8 xl:gap-10">
        <Card className="col-span-full lg:col-span-2 aspect-video lg:aspect-auto">
          Carousel
        </Card>
        <div className="lg:aspect-square flex flex-col gap-5">
          <Card className="hidden lg:block bg-emerald-500 h-[100px] p-5">
            <p className="text-white text-lg font-bold">會員登入</p>
            <div className="flex gap-2">
              <Input placeholder="賬號(身份證號)" />
              <Input placeholder="密碼" />
              <Button className="whitespace-nowrap font-bold" variant="ghost">
                登入
              </Button>
            </div>
          </Card>
          <Card className="flex-auto p-2">
            <Calendar />
          </Card>
        </div>
        <Card className=" h-[475px]">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <p className="text-lg border-b-2 text-red-700 border-red-700">
                最新消息
              </p>
              <PlusSquare className="text-red-700" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              <span className="inline-block w-16">112.10.16</span>
              <span>健保公告</span>
            </p>
            <p className="font-bold">
              112年度「即時查詢病患就醫資訊方案」2.0改版獎勵至年底，請會員院所留意時效
            </p>
            <Separator className="my-4" />
          </CardContent>
        </Card>
        <Card className=" h-[475px]">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <p className="text-lg border-b-2 text-blue-700 border-blue-700">
                活動快訊
              </p>
              <PlusSquare className="text-blue-700" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              <span className="inline-block">112.04.16 - 112.12.24</span>
            </p>
            <p className="font-bold">
              第23期牙醫助理進階班--基本救命術（BLS）訓練課程Ⅱ-112/12/17
            </p>
            <Separator className="my-4" />
          </CardContent>
        </Card>
        <Card className=" h-[475px]">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <p className="text-lg border-b-2 text-lime-700 border-lime-700">
                活動福利
              </p>
              <PlusSquare className="text-lime-700" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">
              <span className="inline-block">112.09.24 - 112.12.23</span>
            </p>
            <p className="font-bold">
              台北市政府民政局「一起來吃飯吧～料理聯誼」
            </p>
            <Separator className="my-4" />
          </CardContent>
        </Card>
      </div>
      <div className="h-[162px] bg-white"></div>
    </div>
  );
}
