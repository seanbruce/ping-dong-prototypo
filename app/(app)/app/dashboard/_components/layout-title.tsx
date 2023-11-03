"use client";
import { useSelectedLayoutSegments } from "next/navigation";

export default function LayoutTitle() {
  const [segment1, segment2] = useSelectedLayoutSegments();
  let title = "";
  switch (segment1) {
    case undefined:
      title = "首頁";
      break;
    case "settings": {
      switch (segment2) {
        case "vehicle-setting":
          title = "車輛管理";
          break;
        default:
          title = "設置";
      }
      break;
    }
    case "detail":
      title = "資訊填寫";
      break;
    default:
      title = "未知標題";
  }
  return <span className="leading-0 text-center">{title}</span>;
}
