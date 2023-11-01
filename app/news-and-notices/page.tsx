import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";

const rows = [
  {
    id: "1",
    type: "新型冠狀病毒防疫專區",
    title: "牙科因應 COVID-19 感染管制措施指引 112.3.8修訂",
    publishDateTime: "112.03.21",
    count: 510,
  },
  {
    id: "2",
    type: "新型冠狀病毒防疫專區",
    title:
      "函轉－疫情指揮中心為因應邊境0+7入境管理新制，自111年10月25日起停止適用「嚴重公司特殊傳染性肺炎(COVID-19)疫情期間國際緊急醫療專機轉送國人返國就醫申請作業原則」等",
    publishDateTime: "112.03.21",
    count: 610,
  },
  {
    id: "3",
    type: "新型冠狀病毒防疫專區",
    title: "新冠疫苗施打資訊～第五劑（第3次追加劑）10/3開放醫事人員施打",
    publishDateTime: "112.03.21",
    count: 47798,
  },
];

export default async function Page() {
  return (
    <Card>
      <CardHeader className="border-b-2 border-fuchsia-600">
        <CardTitle>活動快訊</CardTitle>
      </CardHeader>
      <CardContent className="py-8">
        <p className="text-amber-800">※ 部份文章需要會員權限才可觀看</p>
        <div className="gap-2 flex flex-col md:flex-row items-center mb-4">
          <Input className="text-base" />
          <Button className="whitespace-nowrap w-full md:w-auto">查詢</Button>
        </div>
        <Table>
          <TableHeader className="border-b-2 border-emerald-600">
            <TableRow className="bg-emerald-50 hover:bg-emerald-50">
              <TableHead className="text-emerald-600 font-bold text-center">
                類別
              </TableHead>
              <TableHead className="text-emerald-600 font-bold text-center">
                標題
              </TableHead>
              <TableHead className="text-emerald-600 font-bold text-center w-24">
                發佈日期
              </TableHead>
              <TableHead className="text-emerald-600 font-bold text-center w-16">
                點擊
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map(({ id, type, title, publishDateTime, count }, index) => (
              <TableRow
                key={id}
                className={cn(
                  index % 2 === 0 && "bg-slate-50",
                  "hover:bg-emerald-50"
                )}
              >
                <TableCell className="p-2 text-center">{type}</TableCell>
                <TableCell className="p-2 border-l font-bold">
                  <Link href={`/news-and-notices/${id}`}>{title}</Link>
                </TableCell>
                <TableCell className="p-2 text-center border-l">
                  {publishDateTime}
                </TableCell>
                <TableCell className="p-2 text-center border-l">
                  {count}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
