import Link from "next/link";
import { MapPin, Building, Upload, FileEdit, Plus, Siren } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import SpeedDial from "./_components/speed-dial";

const route = [
  {
    location: "404台中市北區館前路1號",
    company: "國立自然科學博物館",
    isFormFilledAndSinged: false,
    isUploaded: false,
  },
  {
    location: "403台中市西區臺灣大道二段308號",
    company: "科博館",
    isFormFilledAndSinged: true,
    isUploaded: true,
  },
  {
    location: "403台中市西區公益路111號",
    company: "屋馬燒肉園邸店",
    isFormFilledAndSinged: true,
    isUploaded: false,
  },
  {
    location: "403台中市西區民生路200號",
    company: "臺中英才郵局",
    isFormFilledAndSinged: false,
    isUploaded: false,
  },
  {
    location: "400台中市中區中華路一段58號",
    company: "台中日日新影城",
    isFormFilledAndSinged: false,
    isUploaded: false,
  },
  {
    location: "400台中市中區臺灣大道一段145號",
    company: "全安堂台灣台中太陽餅博物館",
    isFormFilledAndSinged: false,
    isUploaded: false,
  },
];

export default function Page() {
  return (
    <>
      <div className="p-4 flex flex-col gap-2">
        {route.map((item, index) => (
          <Link
            key={index}
            href={`/app/dashboard/detail`}
            className="p-4 bg-white flex flex-col gap-1.5"
          >
            <div className="flex gap-2">
              <Building className="w-4 h-4 shrink-0 relative top-[1px]" />
              <span className="text-sm">{item.company}</span>
            </div>
            <div className="flex gap-2">
              <MapPin className="w-4 h-4 shrink-0 relative top-[1px]" />
              <span className="text-sm">{item.location}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <FileEdit className="w-3.5 h-3.5 shrink-0" />
                <span
                  className={cn(
                    "text-sm leading-none font-bold",
                    item.isFormFilledAndSinged ? "text-green-700" : ""
                  )}
                >
                  {item.isFormFilledAndSinged ? "已錄入資料" : "未錄入資料"}
                </span>
              </span>
              <Separator orientation="vertical" className="h-3" />
              <span className="flex items-center gap-2">
                <Upload className="w-3.5 h-3.5 shrink-0" />
                <span
                  className={cn(
                    "text-sm leading-none font-bold",
                    item.isUploaded ? "text-green-700" : ""
                  )}
                >
                  {item.isUploaded ? "已上傳" : "未上傳"}
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <SpeedDial />
    </>
  );
}
