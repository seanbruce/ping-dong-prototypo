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
    type: "申請健保特約流程",
    title: "臺北業務組轄區醫事機構申請健保特約作業流程圖",
    updateDateTime: "112.03.21",
  },
  {
    id: "2",
    type: "申請健保特約流程",
    title: "	辦理健保署各項異動流程及手續",
    updateDateTime: "112.03.21",
  },
  {
    id: "3",
    type: "申請健保特約流程",
    title: "全民健康保險特約診所申請書表",
    updateDateTime: "112.03.21",
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
            表格下載
          </h1>
          <ScrollArea className="w-full lg:w-[280px]">
            <ul className="flex flex-row justify-center lg:flex-col whitespace-nowrap shadow-lg rounded-md">
              <StyledLink
                href="/download-section?type=1"
                className="rounded-l-md lg:rounded-bl-none lg:rounded-t-md"
              >
                公會會籍申辦資料
              </StyledLink>
              <StyledLink href="/download-section?type=1">
                衛生局執業申辦資料
              </StyledLink>
              <StyledLink href="/download-section?type=1">
                申請健保特約流程
              </StyledLink>
              <StyledLink href="/download-section?type=1">
                會費信用卡授權書
              </StyledLink>
              <StyledLink href="/download-section?type=1">
                其他資料下載
              </StyledLink>
              <StyledLink
                href="/download-section?type=1"
                className="rounded-r-md lg:rounded-tr-none lg:rounded-b-md"
              >
                手術同意書表下載
              </StyledLink>
            </ul>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="flex-auto break-all">
          <Card>
            <CardHeader className="border-b-2 border-fuchsia-600">
              <CardTitle>所有檔案</CardTitle>
            </CardHeader>
            <CardContent className="py-8">
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map(({ id, type, title, updateDateTime }, index) => (
                    <TableRow
                      key={id}
                      className={cn(
                        index % 2 === 0 && "bg-slate-50",
                        "hover:bg-emerald-50"
                      )}
                    >
                      <TableCell className="p-2 text-center">{type}</TableCell>
                      <TableCell className="p-2 font-bold border-l">
                        {title}
                      </TableCell>
                      <TableCell className="p-2 text-center border-l">
                        {updateDateTime}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
