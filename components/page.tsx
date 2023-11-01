import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";
import { FaFacebook, FaXTwitter, FaLine } from "react-icons/fa6";
import BackButton from "./page/back-button";

export default async function Page() {
  return (
    <Card>
      <CardHeader className="border-b-2 border-fuchsia-600">
        <CardTitle>活動快訊</CardTitle>
      </CardHeader>
      <CardContent className="py-8">
        <p className="text-fuchsia-600 mb-2">醫事公告</p>
        <h1 className="text-3xl font-bold leading-10 mb-2">
          公告廢止旭禎有限公司持有之「“鑽石”成形印模牙托（未滅菌）」等3件醫療器材許可證
        </h1>
        <p className="text-gray-500">發佈日期：112.10.27</p>
        <Separator className="my-6" />
        <p className="font-bold mb-8 leading-6">
          主旨:有關衛生福利部廢止旭禎有限公司持有之「“鑽石”成形印模牙托（未滅菌）」（衛部醫器輸壹登字第021066號）等3件醫療器材許可證，請貴會轉知所屬會員，請查照。
        </p>
        <p className="mb-4">說明</p>
        <ul className="list-disc list-outside pl-4 mb-8">
          <li className="mb-2 leading-6">
            依據新北市政府衛生局112年10月13日新北衛食字第1122023440號函辦理。
          </li>
          <li className="mb-2 leading-6">
            案係旭禎有限公司持有之「“鑽石”成形印模牙托（未滅菌）」（衛部醫器輸壹登字第021066號）、「“旭禎”成形金
            屬假牙床（未滅菌）」（衛部醫器輸壹字第020919號）及
            旭禎”成形牙冠（未滅菌）」（衛部醫器輸壹字第021000號）等3件醫療器材，業經衛生福利部於112年10月6日以衛授食字第1121609322號處分書廢止。
          </li>
          <li className=" leading-6">
            為維護民眾權益及其使用醫療器材之安全，請協助轉知所屬會員確實依據醫療器材管理
          </li>
        </ul>
        <Button className="font-bold" variant="secondary" size="sm">
          <Download className="w-4 h-4 mr-3" />
          公文文本下載
        </Button>
        <Separator className="my-6" />
        <div className="flex items-center">
          <p className="mr-4">分享</p>
          <Button size="icon" variant="ghost">
            <FaFacebook className="w-5 h-5 text-blue-600" />
          </Button>
          <Button size="icon" variant="ghost">
            <FaXTwitter className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <FaLine className="w-5 h-5 text-green-500" />
          </Button>
        </div>
        <div className="py-4 flex justify-center">
          <BackButton />
        </div>
      </CardContent>
    </Card>
  );
}
