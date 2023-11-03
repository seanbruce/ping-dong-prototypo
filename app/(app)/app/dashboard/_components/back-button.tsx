"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useSelectedLayoutSegments } from "next/navigation";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const [segment1, segment2] = useSelectedLayoutSegments();
  const router = useRouter();
  let show;
  switch (segment1) {
    case "detail":
      show = true;
      break;
    case "settings": {
      switch (segment2) {
        case "vehicle-setting":
          show = true;
          break;
        default:
          show = false;
      }
      break;
    }
    default:
      show = false;
  }
  return (
    show && (
      <Button
        size="icon"
        variant="ghost"
        className="hover:bg-transparent hover:text-white"
        onClick={() => router.back()}
      >
        <ChevronLeft />
      </Button>
    )
  );
}
