import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import StyledLink from "../about-association/_components/styled-link";
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

export default async function Page({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-200 py-10">
      <div className="px-2 md:px-4 lg:container mx-auto flex flex-col lg:flex-row">
        <div className="mb-8 lg:mb-0 lg:mr-8 flex flex-col">
          <h1 className="text-2xl font-bold mb-3 text-center lg:text-left pl-3">
            最新消息
          </h1>
          <ScrollArea className="w-full lg:w-[280px]">
            <ul className="flex flex-row justify-center lg:flex-col whitespace-nowrap shadow-lg rounded-md">
              <StyledLink
                href="/news-and-notices?type=1"
                className="rounded-l-md lg:rounded-bl-none lg:rounded-t-md"
              >
                會務公告
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">醫事公告</StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                友會／校友會公告
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                口衛專案計劃
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                健保相關資料查詢
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">健保公告</StyledLink>
              <StyledLink href="/news-and-notices?type=1">法規公告</StyledLink>
              <StyledLink href="/news-and-notices?type=1">待審法規</StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                牙醫助理專區
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">大會專區</StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                社福團體活動公告
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                七院校牙醫學系學生下鄉課輔活動
              </StyledLink>
              <StyledLink href="/news-and-notices?type=1">
                新型冠狀病毒防疫專區
              </StyledLink>
              <StyledLink
                href="/news-and-notices?type=1"
                className="rounded-r-md lg:rounded-tr-none lg:rounded-b-md"
              >
                牙醫師執業執照到期專區
              </StyledLink>
            </ul>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="flex-auto break-all">
          <Card>
            <CardHeader className="border-b-2 border-fuchsia-600">
              <CardTitle>活動快訊</CardTitle>
            </CardHeader>
            <CardContent className="py-8">
              <p className="text-amber-800">※ 部份文章需要會員權限才可觀看</p>
              <div className="gap-2 flex flex-col md:flex-row items-center mb-4">
                <Input className="text-base" />
                <Button className="whitespace-nowrap w-full md:w-auto">
                  查詢
                </Button>
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
                  {rows.map(
                    ({ id, type, title, publishDateTime, count }, index) => (
                      <TableRow
                        key={id}
                        className={cn(
                          index % 2 === 0 && "bg-slate-50",
                          "hover:bg-emerald-50"
                        )}
                      >
                        <TableCell className="p-2 text-center">
                          {type}
                        </TableCell>
                        <TableCell className="p-2 text-center border-l">
                          {title}
                        </TableCell>
                        <TableCell className="p-2 text-center border-l">
                          {publishDateTime}
                        </TableCell>
                        <TableCell className="p-2 text-center border-l">
                          {count}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
