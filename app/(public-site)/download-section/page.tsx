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

export default async function Page() {
  return (
    <Card>
      <CardHeader className="border-b-2 border-fuchsia-600">
        <CardTitle>所有檔案</CardTitle>
      </CardHeader>
      <CardContent className="py-8">
        <div className="gap-2 flex flex-col md:flex-row items-center mb-4">
          <Input className="text-base" />
          <Button className="whitespace-nowrap w-full md:w-auto">查詢</Button>
        </div>
        <Table>
          <TableHeader className="border-b-2 border-teal-600">
            <TableRow className="bg-teal-50 hover:bg-teal-50">
              <TableHead className="text-teal-600 font-bold text-center">
                類別
              </TableHead>
              <TableHead className="text-teal-600 font-bold text-center">
                標題
              </TableHead>
              <TableHead className="text-teal-600 font-bold text-center w-24">
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
                  "hover:bg-teal-50"
                )}
              >
                <TableCell className="p-2 text-center">{type}</TableCell>
                <TableCell className="p-2 font-bold border-l">
                  <Link href={`/download-section/${id}`}>{title}</Link>
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
  );
}
