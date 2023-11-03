import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DatePicker from "./_components/date-picker";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import NoteLink from "./_components/note-link";

const rows = [
  {
    id: "1",
    no: "091231512387712",
    title: "2023/11/02XXXX處理單",
    publishDateTime: "112.03.21",
    type: "已完成",
  },
  {
    id: "2",
    no: "091231512387713",
    title: "2023/11/03XXXX處理單",
    publishDateTime: "112.03.21",
    type: "未完成",
  },
  {
    id: "3",
    no: "091231512387714",
    title: "2023/11/04XXXX處理單",
    publishDateTime: "112.03.21",
    type: "進行中",
  },
];

export default async function Page() {
  return (
    <>
      <div className="p-4 bg-white flex flex-col @md:flex-row gap-2">
        <Select>
          <SelectTrigger className="w-full @md:w-[190px]">
            <SelectValue placeholder="聯單狀態" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="done">已完成</SelectItem>
            <SelectItem value="pending">未完成</SelectItem>
            <SelectItem value="ongoing">正在進行</SelectItem>
          </SelectContent>
        </Select>
        <DatePicker />
        <div className="flex flex-row gap-2">
          <Button className="w-full @md:w-max whitespace-nowrap" size="sm">
            送出
          </Button>
          <Button
            className="w-full @md:w-max  whitespace-nowrap"
            size="sm"
            variant="outline"
          >
            重置
          </Button>
        </div>
      </div>
      <div className="p-2">
        <Card>
          <CardContent className="p-2">
            <Table>
              <TableHeader className="border-b-2 border-teal-600">
                <TableRow className="bg-teal-50 hover:bg-teal-50">
                  <TableHead className="text-teal-600 font-bold text-center hidden @md:table-cell">
                    聯單編號
                  </TableHead>
                  <TableHead className="text-teal-600 font-bold text-center hidden  @md:table-cell">
                    聯單標題
                  </TableHead>
                  <TableHead className="text-teal-600 font-bold text-center w-24 whitespace-nowrap hidden  @md:table-cell">
                    發佈日期
                  </TableHead>
                  <TableHead className="text-teal-600 font-bold text-center w-24 whitespace-nowrap hidden  @md:table-cell">
                    聯單狀態
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map(({ id, no, title, publishDateTime, type }, index) => (
                  <NoteLink
                    key={id}
                    className={cn(
                      "block",
                      "@md:table-row",
                      "py-2",
                      index % 2 === 0 && "bg-slate-50",
                      "hover:bg-teal-50"
                    )}
                  >
                    <TableCell
                      className="p-1 @md:p-2 @md:text-center flex flex-nowrap @md:table-cell before:content-[attr(data-cell)_':'] before:shrink-0 before:w-[60px] before:font-bold before:mr-2 before:text-teal-600 before:whitespace-nowrap @md:before:hidden"
                      data-cell="聯單編號"
                    >
                      {no}
                    </TableCell>
                    <TableCell
                      className="p-1 @md:p-2 @md:border-l font-bold flex flex-nowrap @md:table-cell before:content-[attr(data-cell)_':'] before:shrink-0 before:w-[60px] before:font-bold before:mr-2 before:text-teal-600 before:whitespace-nowrap @md:before:hidden"
                      data-cell="聯單標題"
                    >
                      <Link href={`/news-and-notices/${id}`}>{title}</Link>
                    </TableCell>
                    <TableCell
                      className="p-1 @md:p-2 @md:text-center @md:border-l flex flex-nowrap @md:table-cell before:content-[attr(data-cell)_':'] before:shrink-0 before:w-[60px] before:font-bold before:mr-2 before:text-teal-600 before:whitespace-nowrap @md:before:hidden"
                      data-cell="發佈日期"
                    >
                      {publishDateTime}
                    </TableCell>
                    <TableCell
                      className="p-1 @md:p-2 @md:text-center @md:border-l flex flex-nowrap @md:table-cell before:content-[attr(data-cell)_':'] before:shrink-0 before:w-[60px] before:font-bold before:mr-2 before:text-teal-600 before:whitespace-nowrap @md:before:hidden"
                      data-cell="聯單狀態"
                    >
                      {type}
                    </TableCell>
                  </NoteLink>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
