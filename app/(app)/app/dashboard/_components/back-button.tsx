"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  console.log({ segment });
  let show;
  switch (segment) {
    case "consignment-note":
    case "consignment-note-list":
      show = true;
      break;
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
