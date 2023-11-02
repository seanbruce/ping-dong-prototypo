import Link from "next/link";
import {
  Search,
  ChevronRight,
  List,
  Car,
  Cross,
  Map,
  ArrowUpFromLine,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <>
      <div className="p-4 grid grid-cols-2 gap-2 @sm:grid-cols-3 border-b bg-white">
        {[
          { title: "申報車號", url: "consignment-note", Icon: Car },
          { title: "聯單清單", url: "consignment-note-list", Icon: List },
          { title: "軌跡申報", url: "consignment-note", Icon: ArrowUpFromLine },
          { title: "通報緊急事故", url: "consignment-note", Icon: Cross },
          { title: "查詢通報紀錄", url: "consignment-note", Icon: Search },
          { title: "地圖", url: "consignment-note", Icon: Map },
        ].map(({ title, url, Icon }, index) => (
          <Link
            key={index}
            href={`/app/dashboard/${url}`}
            className="bg-emerald-500 text-white font-bold py-6 rounded flex flex-col items-center gap-2"
          >
            <Icon className="w-8 h-8" />
            <span>{title}</span>
          </Link>
        ))}
      </div>
      <div className="p-4">
        <Card>
          <CardHeader className="border-b pb-2">
            <CardTitle className="text-base">今日聯單</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {[
              "09123151231251231",
              "09112315231255433",
              "09112315231255433",
              "09112315231255433",
              "09112315231255433",
              "09112315231255433",
            ].map((no, index) => (
              <Link
                href={`/app/dashboard/consignment-note`}
                key={index}
                className={cn(
                  "font-bold text-sm flex py-1.5 px-2",
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                )}
              >
                <span className="mr-2">{index + 1}.</span>
                <span className="">【{no}】</span>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
