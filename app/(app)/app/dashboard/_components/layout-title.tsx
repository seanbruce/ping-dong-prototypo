"use client";
import { useSelectedLayoutSegment } from "next/navigation";

export default function LayoutTitle() {
  const segment = useSelectedLayoutSegment();
  console.log({ segment });
  let title = "";
  switch (segment) {
    case null:
      title = "首頁";
      break;
    case "settings":
      title = "設置";
      break;
    case "consignment-note":
      title = "聯單";
      break;
    case "consignment-note-list":
      title = "聯單清單";
      break;
    default:
      title = "未知標題";
  }
  return <span className="leading-0 text-center">{title}</span>;
}
