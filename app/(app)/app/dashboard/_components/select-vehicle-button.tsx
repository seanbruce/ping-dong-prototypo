"use client";
import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SelectVehicleButton() {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  let show;
  switch (segment) {
    case "detail":
      show = true;
      break;
    default:
      show = false;
  }
  return (
    <TooltipProvider delayDuration={20}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="hover:bg-transparent hover:text-white"
          >
            <Truck />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>切換車輛</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
